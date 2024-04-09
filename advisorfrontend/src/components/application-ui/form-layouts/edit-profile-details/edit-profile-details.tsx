import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';

import { getTimeZones } from '@vvo/tzdb';
import languageList from 'language-list';

import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Unstable_Grid2 as Grid,
  Stack,
  Typography,
  TextField, Autocomplete,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { RootState, useDispatch, useSelector } from '../../../../store';
import { User } from '../../../../mocks/users';
import { useState } from 'react';
import { updateUserProfile } from '../../../../slices/userProfile';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {format} from "date-fns";
import GoogleMapsDropdown, {PlaceType} from "../../dropdowns/google-maps/google-maps-dropdown";
import { toast } from 'react-hot-toast';

function EditProfileDetails() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data: user } = useSelector((state: RootState) => state.userProfile);

  const [formData, setFormData] = useState<Partial<User>>({
    first_name: user?.first_name || '',
    last_name: user?.last_name || '',
    date_of_birth: user?.date_of_birth || '',
    address: user?.address || null,
    userSettings: {
      language: user?.userSettings?.language || '',
      timezone: user?.userSettings?.timezone || '',
    },
  });

  const [editingSection, setEditingSection] = useState<'personal' | 'account' | ''>('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(user?.date_of_birth ? new Date(user.date_of_birth) : null);
  const [cleared, setCleared] = useState(false);
  const timezoneOptions = getTimeZones().map((tz) => ({
    label: `${tz.currentTimeFormat} (${tz.abbreviation})`,
    value: tz.name,
  }));
  var languages = require('language-list')();
  const languageOptions = languages.getData().map((lang) => ({
    label: lang.language,
    value: lang.code,
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSettingsChange = (field: keyof typeof formData.userSettings, value: string) => {
    setFormData({
      ...formData,
      userSettings: { ...formData.userSettings, [field]: value },
    });
  };
  const handleAddressChange = (address: PlaceType | null) => {
    setFormData((prevData) => ({
      ...prevData,
      address,
    }));
  };
  const handlePersonalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const personalData = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      date_of_birth: formData.date_of_birth,
      address: formData.address,
    };
    dispatch(updateUserProfile(personalData));
    setEditingSection('');
    toast.success('Personal details updated successfully');
  };

  const handleAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const accountData = {
      userSettings: formData.userSettings,
    };
    dispatch(updateUserProfile(accountData));
    setEditingSection('');
    toast.success('Account settings updated successfully');
  };

  const handleCancel = () => {
    setEditingSection('');
    setFormData({
      first_name: user?.first_name || '',
      last_name: user?.last_name || '',
      date_of_birth: user?.date_of_birth || '',
      address: user?.address || null,
      userSettings: {
        language: user?.userSettings?.language || '',
        timezone: user?.userSettings?.timezone || '',
      },
    });
    setDateOfBirth(user?.date_of_birth ? new Date(user.date_of_birth) : null);
  };

  return (
    <Grid container spacing={{ xs: 2, sm: 3 }}>
      <Grid xs={12}>
        <Card>
          <Box
            p={2}
            display="flex"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            flexDirection={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
            }}
          >
            <Box mb={{ xs: 2, sm: 0 }}>
              <Typography variant="h4">{t('Personal details')}</Typography>
              <Typography variant="subtitle1">{t('Manage informations related to your personal details')}</Typography>
            </Box>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<EditTwoToneIcon />}
              onClick={() => setEditingSection('personal')}
            >
              {t('Edit')}
            </Button>
          </Box>
          <Divider />
          <CardContent>
            <form onSubmit={handlePersonalSubmit}>
              <Typography variant="subtitle2">
                <Grid container spacing={1}>
                  <Grid xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box pr={{ xs: 2, sm: 3 }}>{t('Name')}:</Box>
                  </Grid>
                  <Grid xs={12} sm={8} md={9}>
                    {editingSection === 'personal' ? (
                      <>
                        <TextField
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleChange}
                          fullWidth
                          sx={{ mb: 1 }}
                        />
                        <TextField
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleChange}
                          fullWidth
                          sx={{ mb: 1 }}
                        />
                      </>
                    ) : (
                      <Typography variant="h6" fontWeight={500}>
                        {user?.first_name} {user?.last_name}
                      </Typography>
                    )}
                  </Grid>
                  <Grid xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box pr={{ xs: 2, sm: 3 }}>{t('Date of birth')}:</Box>
                  </Grid>
                  <Grid xs={12} sm={8} md={9}>
                    {editingSection === 'personal' ? (
                      <DatePicker
                        value={dateOfBirth}
                        onChange={(newValue) => {
                          setDateOfBirth(newValue);
                          setFormData({ ...formData, date_of_birth: newValue?.toISOString() || '' });
                        }}
                        slotProps={{
                          field: { clearable: true, onClear: () => setCleared(true) },
                        }}
                        sx={{
                          '& .MuiInputAdornment-positionEnd': {
                            pr: 0.5,
                          },
                        }}
                      />
                    ) : (
                      <Typography variant="h6" fontWeight={500}>
                        {dateOfBirth ? format(dateOfBirth, 'MMMM d, yyyy') : ''}
                      </Typography>
                    )}
                  </Grid>
                  <Grid xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box pr={{ xs: 2, sm: 3 }}>{t('Address')}:</Box>
                  </Grid>
                  <Grid xs={12} sm={8} md={9}>
                    {editingSection === 'personal' ? (
                      <GoogleMapsDropdown value={formData.address} onChange={handleAddressChange} />
                    ) : (
                      <Box sx={{ maxWidth: { xs: 'auto', sm: 340 } }}>
                        <Typography variant="h6" fontWeight={500}>
                          {formData.address?.description || ''}
                        </Typography>
                      </Box>
                    )}
                  </Grid>
                </Grid>
              </Typography>
              {editingSection === 'personal' && (
                <Box mt={2} display="flex" justifyContent="flex-end">
                  <Button variant="outlined" color="secondary" onClick={handleCancel} sx={{ mr: 1 }}>
                    {t('Cancel')}
                  </Button>
                  <Button variant="contained" color="primary" type="submit">
                    {t('Save')}
                  </Button>
                </Box>
              )}
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={12}>
        <Card>
          <Box
            p={2}
            display="flex"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            flexDirection={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
            }}
          >
            <Box mb={{ xs: 2, sm: 0 }}>
              <Typography variant="h4">{t('Account settings')}</Typography>
              <Typography variant="subtitle2">{t('Manage details related to your account')}</Typography>
            </Box>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<EditTwoToneIcon />}
              onClick={() => setEditingSection('account')}
            >
              {t('Edit')}
            </Button>
          </Box>
          <Divider />
          <CardContent>
            <form onSubmit={handleAccountSubmit}>
              <Typography variant="subtitle2">
                <Grid container spacing={1}>
                  <Grid xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box pr={{ xs: 2, sm: 3 }}>{t('Language')}:</Box>
                  </Grid>
                  <Grid xs={12} sm={8} md={9}>
                    {editingSection === 'account' ? (
                      <Autocomplete
                        options={languageOptions}
                        getOptionLabel={(option) => option.label}
                        value={
                          languageOptions.find((lang) => lang.value === formData.userSettings?.language) || null
                        }
                        onChange={(event, newValue) => {
                          handleSettingsChange('language', newValue?.value || '');
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        fullWidth
                        sx={{ mb: 1 }}
                      />
                    ) : (
                      <Typography variant="h6" fontWeight={500}>
                        {languageOptions.find((lang) => lang.value === user?.userSettings?.language)?.label || ''}
                      </Typography>
                    )}
                  </Grid>
                  <Grid xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box pr={{ xs: 2, sm: 3 }}>{t('Timezone')}:</Box>
                  </Grid>
                  <Grid xs={12} sm={8} md={9}>
                    {editingSection === 'account' ? (
                      <Autocomplete
                        options={timezoneOptions}
                        getOptionLabel={(option) => option.label}
                        value={timezoneOptions.find((tz) => tz.value === formData.userSettings?.timezone) || null}
                        onChange={(event, newValue) => {
                          handleSettingsChange('timezone', newValue?.value || '');
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        fullWidth
                        sx={{ mb: 1 }}
                      />
                    ) : (
                      <Typography variant="h6" fontWeight={500}>
                        {timezoneOptions.find((tz) => tz.value === user?.userSettings?.timezone)?.label || ''}
                      </Typography>
                    )}
                  </Grid>
                  <Grid xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                    <Box pr={{ xs: 2, sm: 3 }}>{t('Account status')}:</Box>
                  </Grid>
                  <Grid xs={12} sm={8} md={9}>
                    <Chip
                      size="small"
                      label={
                        <Box fontWeight={600} display="flex" alignItems="center">
                          <DoneTwoToneIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                          {t('Active')}
                        </Box>
                      }
                      color="success"
                    />
                  </Grid>
                </Grid>
              </Typography>
              {editingSection === 'account' && (
                <Box mt={2} display="flex" justifyContent="flex-end">
                  <Button variant="outlined" color="secondary" onClick={handleCancel} sx={{ mr: 1 }}>
                    {t('Cancel')}
                  </Button>
                  <Button variant="contained" color="primary" type="submit">
                    {t('Save')}
                  </Button>
                </Box>
              )}
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={12}>
        <Card>
          <Box
            p={2}
            display="flex"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            flexDirection={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
            }}
          >
            <Box mb={{ xs: 2, sm: 0 }}>
              <Typography variant="h4">{t('Email addresses')}</Typography>
              <Typography variant="subtitle2">{t('Manage details related to your associated email addresses')}</Typography>
            </Box>
            <Button variant="outlined" color="secondary" startIcon={<EditTwoToneIcon />} disabled>
              {t('Edit')}
            </Button>
          </Box>
          <Divider />
          <CardContent>
            <Typography variant="subtitle2">
              <Grid container spacing={1}>
                <Grid xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <Box pr={{ xs: 2, sm: 3 }}>{t('Primary email address')}:</Box>
                </Grid>
                <Grid xs={12} sm={8} md={9}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="h6" fontWeight={500} lineHeight={1}>
                      {user?.email}
                    </Typography>
                    <Chip
                      size="small"
                      label={
                        <Box fontWeight={600} display="flex" alignItems="center">
                          <DoneTwoToneIcon fontSize="inherit" sx={{ mr: 0.5 }} />
                          {t('Primary')}
                        </Box>
                      }
                      color="success"
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default EditProfileDetails;
