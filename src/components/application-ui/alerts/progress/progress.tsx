import { Stack } from '@mui/material';
import AlertProgress from './alert-progress';

const Component = () => {
  return (
    <Stack
      justifyContent="center"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <AlertProgress />
    </Stack>
  );
};

export default Component;
