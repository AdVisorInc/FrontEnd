import React, { useEffect } from 'react';
import { Avatar, Badge, Box, Typography, Skeleton } from '@mui/material';
import { RootState, useDispatch, useSelector } from '../../../../store';
import { fetchUserProfile } from '../../../../slices/userProfile';

const Component = () => {
  const user = useSelector((state: RootState) => state.userProfile.data);
  const isLoading = useSelector((state: RootState) => state.userProfile.isLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, user]);

  if (!user || !isLoading) {
    return (
      <Box display="flex" alignItems="center">
        <Skeleton variant="circular" width={48} height={48} />
        <Box mx={1} overflow="hidden">
          <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
          <Skeleton variant="text" sx={{ fontSize: '0.875rem' }} />
        </Box>
      </Box>
    );
  }

  const { avatar_url, first_name, last_name, jobtitle } = user;
  const initials = `${first_name[0]}${last_name[0]}`.toUpperCase();

  return (
    <Box display="flex" alignItems="center">
      <Badge
        color="secondary"
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        badgeContent="12"
        overlap="circular"
      >
        <Avatar
          src={avatar_url}
          alt={`${first_name} ${last_name}`}
          sx={{
            width: 48,
            height: 48,
          }}
        >
          {initials}
        </Avatar>
      </Badge>
      <Box mx={1} overflow="hidden">
        <Typography variant="h5" component="div">
          {`${first_name} ${last_name}`}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" noWrap>
          {jobtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default Component;
