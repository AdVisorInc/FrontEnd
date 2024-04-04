import { Avatar, AvatarGroup, Stack } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <AvatarGroup>
        <Avatar
          alt="Remy Sharp"
          src="/avatars/1.png"
          sx={{ width: 24, height: 24 }}
        />
        <Avatar
          alt="Travis Howard"
          src="/avatars/2.png"
          sx={{ width: 24, height: 24 }}
        />
        <Avatar
          alt="Cindy Baker"
          src="/avatars/3.png"
          sx={{ width: 24, height: 24 }}
        />
        <Avatar
          alt="Agnes Walker"
          src="/avatars/4.png"
          sx={{ width: 24, height: 24 }}
        />
        <Avatar
          alt="Trevor Henderson"
          src="/avatars/5.png"
          sx={{ width: 24, height: 24 }}
        />
      </AvatarGroup>
      <AvatarGroup max={4}>
        <Avatar
          alt="Remy Sharp"
          src="/avatars/1.png"
        />
        <Avatar
          alt="Travis Howard"
          src="/avatars/2.png"
        />
        <Avatar
          alt="Cindy Baker"
          src="/avatars/3.png"
        />
        <Avatar
          alt="Agnes Walker"
          src="/avatars/4.png"
        />
        <Avatar
          alt="Trevor Henderson"
          src="/avatars/5.png"
        />
      </AvatarGroup>
      <AvatarGroup>
        <Avatar
          alt="Remy Sharp"
          src="/avatars/1.png"
          sx={{ width: 52, height: 52 }}
        />
        <Avatar
          sx={{ backgroundColor: deepPurple[600], color: 'common.white', width: 52, height: 52 }}
        >
          JD
        </Avatar>
        <Avatar
          alt="Cindy Baker"
          src="/avatars/3.png"
          sx={{ width: 52, height: 52 }}
        />
      </AvatarGroup>
    </Stack>
  );
};

export default Component;
