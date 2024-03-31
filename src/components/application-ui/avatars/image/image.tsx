import { Avatar, Stack } from '@mui/material';

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Avatar
        alt="..."
        src="/avatars/1.png"
        sx={{ width: 24, height: 24 }}
      />
      <Avatar
        alt="..."
        src="/avatars/2.png"
      />
      <Avatar
        alt="..."
        src="/avatars/3.png"
        sx={{ width: 52, height: 52 }}
      />
      <Avatar
        alt="..."
        src="/avatars/4.png"
        sx={{ width: 64, height: 64 }}
      />
      <Avatar
        alt="..."
        src="/avatars/5.png"
        sx={{ width: 82, height: 82 }}
      />
    </Stack>
  );
};

export default Component;
