import { Stack } from '@mui/material';
import AlertProgressAlternate from './alert-progress-alternate';

const Component = () => {
  return (
    <Stack
      justifyContent="center"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <AlertProgressAlternate />
    </Stack>
  );
};

export default Component;
