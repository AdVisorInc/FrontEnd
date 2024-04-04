import { Stack } from '@mui/material';
import AlertNotification from './alert-notification';

const Component = () => {
  return (
    <Stack
      justifyContent="center"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <AlertNotification />
    </Stack>
  );
};

export default Component;
