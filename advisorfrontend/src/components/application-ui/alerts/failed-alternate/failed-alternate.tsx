import { Stack } from '@mui/material';
import AlertFailedAlternate from './alert-failed-alternate';

const Component = () => {
  return (
    <Stack
      justifyContent="center"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <AlertFailedAlternate />
    </Stack>
  );
};

export default Component;
