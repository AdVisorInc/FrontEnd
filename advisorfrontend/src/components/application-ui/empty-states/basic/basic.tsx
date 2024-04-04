import { Stack } from '@mui/material';
import EmptyStateBasic from './empy-state-basic';

const Component = () => {
  return (
    <Stack
      justifyContent="center"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <EmptyStateBasic />
    </Stack>
  );
};

export default Component;
