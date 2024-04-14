import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk } from 'src/store';
import React from "react";
import { createClient as createSupabaseClient } from "../utils/supabase/client";
import { User } from "../mocks/users";
import {PlaceType} from "../components/application-ui/dropdowns/google-maps/google-maps-dropdown";
import { toast } from 'react-hot-toast';
import {createUserActivity} from "./userActivities";
interface UserProfileState {
  isLoaded: boolean;
  data: User | null;
  error: string | null;
}

const initialState: UserProfileState = {
  isLoaded: false,
  data: null,
  error: null,
};

const slice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    getUserProfileSuccess(state, action: PayloadAction<User>) {
      state.isLoaded = true;
      // @ts-ignore
      state.data = action.payload;
      state.error = null;
    },
    getUserProfileFailure(state, action: PayloadAction<string>) {
      state.isLoaded = false;
      state.data = null;
      state.error = action.payload;
    },
    updateProfileUrlSuccess(state, action: PayloadAction<string>) {
      if (state.data) {
        state.data.avatar_url = action.payload;
      }
    },
    updateCoverUrlSuccess(state, action: PayloadAction<string>) {
      if (state.data) {
        state.data.cover_url = action.payload;
      }
    },
    updateUserProfileSuccess(state, action: PayloadAction<Partial<User>>) {
      if (state.data) {
        // @ts-ignore
        state.data = { ...state.data, ...action.payload };
      }
    },
  },
});

export const { reducer } = slice;

export const fetchUserProfile = (): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();
    const { data: { user } } = await supabaseClient.auth.getUser();
    if (user) {
      const { data: userData, error: userError } = await supabaseClient
        .from('User')
        .select(`
          *,
          address:Address(*)
        `)
        .eq('uuid', user.id)
        .single();
      console.log(userData)
      if (userError) {
        throw new Error(userError.message);
      }
      const { count: followerCount, error: followerError } = await supabaseClient
        .from('Followers')
        .select('*', { count: 'exact', head: true })
        .eq('"followed_id"', user.id);
      if (followerError) {
        throw new Error(followerError.message);
      }
      let settingsData = null;
      const { data: existingSettings, error: settingsError } = await supabaseClient
        .from('UserSettings')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (settingsError && settingsError.code === 'PGRST116') {
        // User settings don't exist, create default settings
        const browserLanguage = navigator.language;
        const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        const { data: newSettings, error: insertError } = await supabaseClient
          .from('UserSettings')
          .insert({
            user_id: user.id,
            language: browserLanguage,
            timezone: browserTimezone,
          })
          .single();

        if (insertError) {
          throw new Error(insertError.message);
        }

        settingsData = newSettings;
      } else if (settingsError) {
        throw new Error(settingsError.message);
      } else {
        if (!existingSettings.language || !existingSettings.timezone) {
          const browserLanguage = navigator.language;
          const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

          const { data: updatedSettings, error: updateError } = await supabaseClient
            .from('UserSettings')
            .update({
              language: existingSettings.language || browserLanguage,
              timezone: existingSettings.timezone || browserTimezone,
            })
            .eq('user_id', user.id)
            .single();

          if (updateError) {
            throw new Error(updateError.message);
          }
          settingsData = updatedSettings;
        } else {
          settingsData = existingSettings;
        }
      }

      const address: PlaceType | null = userData.address
        ? {
          description: userData.address.description,
          structured_formatting: {
            main_text: userData.address.main_text,
            secondary_text: userData.address.secondary_text,
          },
        }
        : null;

      const userProfile: User = {
        ...userData,
        userSettings: settingsData,
        followers: followerCount || 0,
        address,
      };
      dispatch(slice.actions.getUserProfileSuccess(userProfile));
      toast.success('User profile loaded successfully', {
        position: 'bottom-left',
        style: {
          background: '#4caf50',
          color: '#fff',
        },
      });

    } else {
      throw new Error('User not authenticated');
    }
  } catch (error) {
    dispatch(slice.actions.getUserProfileFailure(error.message));
    toast.error('Failed to load user profile', {
      position: 'bottom-left',
      style: {
        background: '#f44336',
        color: '#fff',
      },
    });
  }
};


export const updateProfileUrl = (url: string): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (user) {
      const { error } = await supabaseClient
        .from('User')
        .update({ avatar_url: url })
        .eq('uuid', user.id);

      if (error) {
        throw new Error(error.message);
      }

      dispatch(slice.actions.updateProfileUrlSuccess(url));
      toast.success('Profile URL updated successfully',);
    } else {
      throw new Error('User not authenticated');
    }
  } catch (error) {
    console.error('Error updating profile URL:', error.message);
    toast.error('Failed to update profile URL');
  }
};

export const updateCoverUrl = (url: string): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (user) {
      const { error } = await supabaseClient
        .from('User')
        .update({ cover_url: url })
        .eq('uuid', user.id);

      if (error) {
        throw new Error(error.message);
      }

      dispatch(slice.actions.updateCoverUrlSuccess(url));
      toast.success('Cover URL updated successfully');
    } else {
      throw new Error('User not authenticated');
    }
  } catch (error) {
    console.error('Error updating cover URL:', error.message);
    toast.error('Failed to update cover URL');
  }
};


export const uploadProfileImage = (file: File): AppThunk => async (dispatch, getState) => {
  try {
    const supabaseClient = createSupabaseClient();
    const state = getState();
    const currentProfileUrl = state.userProfile.data?.avatar_url;
    const userId = state.userProfile.data?.uuid;

    console.log("UserID", userId);

    if (currentProfileUrl) {
      const currentFileName = currentProfileUrl.split('/').pop();
      await supabaseClient.storage.from('profile-images').remove([`${userId}/${currentFileName}`]);
    }

    const fileName = `${Date.now()}_${file.name}`;
    const filePath = `${userId}/${fileName}`;

    const { data, error } = await supabaseClient.storage
      .from('profile-images')
      .upload(filePath, file);

    if (error) {
      throw new Error(error.message);
    }

    const { data: { publicUrl } } = supabaseClient.storage
      .from('profile-images')
      .getPublicUrl(filePath);

    dispatch(updateProfileUrl(publicUrl));
    toast.success('Profile image uploaded successfully', {
      position: 'bottom-left',
      style: {
        background: '#4caf50',
        color: '#fff',
      },
    });
    dispatch(createUserActivity({
      activity_type: 'profile_image_uploaded',
      metadata: { url: publicUrl },
    }));
  } catch (error) {
    console.error('Error uploading profile image:', error.message);
    toast.error('Failed to upload profile image',{
      position: 'bottom-left',
      style: {
        background: '#f44336',
        color: '#fff',
      },
    });
  }
};

export const uploadCoverImage = (file: File): AppThunk => async (dispatch, getState) => {
  try {
    const supabaseClient = createSupabaseClient();
    const state = getState();
    const currentCoverUrl = state.userProfile.data?.cover_url;
    const userId = state.userProfile.data?.uuid;

    console.log("Useruuid", userId);

    if (currentCoverUrl) {
      const currentFileName = currentCoverUrl.split('/').pop();
      console.log("Current File Name:", currentFileName);

      if (currentFileName) {
        const { data, error } = await supabaseClient.storage
          .from('cover-images')
          .remove([`${userId}/${currentFileName}`]);
        console.log(data);
        if (error) {
          console.error('Error deleting previous cover image:', error.message);
        } else {
          console.log('Previous cover image deleted successfully');
        }
      }
    }

    const fileName = `${Date.now()}_${file.name}`;
    const filePath = `${userId}/${fileName}`;

    const { data, error } = await supabaseClient.storage
      .from('cover-images')
      .upload(filePath, file);

    if (error) {
      throw new Error(error.message);
    }

    const { data: { publicUrl } } = supabaseClient.storage
      .from('cover-images')
      .getPublicUrl(filePath);

    dispatch(updateCoverUrl(publicUrl));
    toast.success('Cover image uploaded successfully',{
      position: 'bottom-left',
      style: {
        background: '#4caf50',
        color: '#fff',
      },
    });
    dispatch(createUserActivity({
      activity_type: 'cover_image_uploaded',
      metadata: { url: publicUrl },
    }));
  } catch (error) {
    console.error('Error uploading cover image:', error.message);
    toast.error('Failed to upload cover image',{
      position: 'bottom-left',
      style: {
        background: '#f44336',
        color: '#fff',
      },
    });
  }
};
export const updateUserProfile = (userData: Partial<User>): AppThunk => async (dispatch) => {
  try {
    const supabaseClient = createSupabaseClient();
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (user) {
      // Update user profile data
      const { first_name, last_name, date_of_birth, address } = userData;
      console.log(address);

      // Fetch the user's existing address_id
      const { data: existingUser, error: fetchUserError } = await supabaseClient
        .from('User')
        .select('address_id')
        .eq('uuid', user.id)
        .single();

      if (fetchUserError) {
        throw new Error(fetchUserError.message);
      }

      let addressId = existingUser?.address_id || null;

      if (address) {
        if (addressId) {
          // Address exists, update the existing one
          const { error: updateAddressError } = await supabaseClient
            .from('Address')
            .update({
              description: address.description,
              main_text: address.structured_formatting.main_text,
              secondary_text: address.structured_formatting.secondary_text,
            })
            .eq('id', addressId);

          if (updateAddressError) {
            throw new Error(updateAddressError.message);
          }
        } else {
          // Address doesn't exist, create a new one
          const { data: newAddress, error: insertAddressError } = await supabaseClient
            .from('Address')
            .insert({
              description: address.description,
              main_text: address.structured_formatting.main_text,
              secondary_text: address.structured_formatting.secondary_text,
            })
            .single();

          if (insertAddressError) {
            throw new Error(insertAddressError.message);
          }

          // @ts-ignore
          addressId = newAddress?.id || null;
        }
      }

      const { error: userError } = await supabaseClient
        .from('User')
        .update({ first_name, last_name, date_of_birth, address_id: addressId })
        .eq('uuid', user.id);

      if (userError) {
        throw new Error(userError.message);
      }


      // Update user settings data
      if (userData.userSettings) {
        const { data: existingSettings, error: fetchSettingsError } = await supabaseClient
          .from('UserSettings')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (fetchSettingsError && fetchSettingsError.code !== 'PGRST116') {
          throw new Error(fetchSettingsError.message);
        }

        if (existingSettings) {
          const { error: updateSettingsError } = await supabaseClient
            .from('UserSettings')
            .update(userData.userSettings)
            .eq('user_id', user.id);

          if (updateSettingsError) {
            throw new Error(updateSettingsError.message);
          }
        } else {
          // Create new user settings
          const { error: createSettingsError } = await supabaseClient
            .from('UserSettings')
            .insert({ ...userData.userSettings, user_id: user.id });

          if (createSettingsError) {
            throw new Error(createSettingsError.message);
          }
        }
      }

      dispatch(slice.actions.updateUserProfileSuccess(userData));
      toast.success('User profile updated successfully',{
        position: 'bottom-left',
        style: {
          background: '#4caf50',
          color: '#fff',
        },
      });
      dispatch(createUserActivity({
        activity_type: 'user_profile_updated',
        metadata: { userData },
      }));
    } else {
      throw new Error('User not authenticated');
    }
  } catch (error) {
    console.error('Error updating user profile:', error.message);
    toast.error('Failed to update user profile',{
      position: 'bottom-left',
      style: {
        background: '#f44336',
        color: '#fff',
      },
    });
  }
};
