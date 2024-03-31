import { Stack } from '@mui/material';
import AlertNotificationAlternate from './alert-notification-alternate';

const Component = () => {
  return (
    <Stack
      justifyContent="center"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <AlertNotificationAlternate />
    </Stack>
  );
};

export default Component;
