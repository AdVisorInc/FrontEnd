import { Stack } from '@mui/material';
import EmptyStateBasicLarge from './empy-state-basic-large';

const Component = () => {
  return (
    <Stack
      justifyContent="center"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <EmptyStateBasicLarge />
    </Stack>
  );
};

export default Component;
