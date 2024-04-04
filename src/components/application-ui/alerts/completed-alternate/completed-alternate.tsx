import { Stack } from '@mui/material';
import AlertCompletedAlternate from './alert-completed-alternate';

const Component = () => {
  return (
    <Stack
      justifyContent="center"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <AlertCompletedAlternate />
    </Stack>
  );
};

export default Component;
