import { Stack } from '@mui/material';
import AlertCompleted from './alert-completed';

const Component = () => {
  return (
    <Stack
      justifyContent="center"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <AlertCompleted />
    </Stack>
  );
};

export default Component;
