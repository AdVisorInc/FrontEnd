import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
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
        variant="square"
        sx={{
          width: 52,
          height: 52,
          backgroundColor: 'secondary.light',
          color: 'secondary.contrastText',
        }}
      >
        HS
      </Avatar>
      <Avatar
        sx={{
          width: 52,
          height: 52,
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
        }}
      >
        <HomeTwoToneIcon fontSize="small" />
      </Avatar>
      <Avatar
        variant="rounded"
        sx={{
          width: 52,
          height: 52,
          backgroundColor: 'warning.main',
          color: 'warning.contrastText',
        }}
      >
        A
      </Avatar>
    </Stack>
  );
};

export default Component;
