import { Avatar, Stack } from '@mui/material';
import { deepOrange, green, indigo, red } from '@mui/material/colors';

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Avatar
        sx={{
          width: 24,
          height: 24,
          fontSize: 11,
          backgroundColor: green[500],
          color: 'common.white',
        }}
      >
        AC
      </Avatar>
      <Avatar sx={{ fontSize: 14, backgroundColor: red[500], color: 'common.white' }}>JF</Avatar>
      <Avatar
        sx={{ width: 52, height: 52, backgroundColor: deepOrange[500], color: 'common.white' }}
      >
        JF
      </Avatar>
      <Avatar sx={{ width: 64, height: 64 }}>BE</Avatar>
      <Avatar
        sx={{
          width: 82,
          height: 82,
          fontSize: 19,
          backgroundColor: indigo[500],
          color: 'common.white',
        }}
      >
        UW
      </Avatar>
    </Stack>
  );
};

export default Component;
