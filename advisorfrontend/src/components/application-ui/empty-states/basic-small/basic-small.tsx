import { Stack } from '@mui/material';
import EmptyStateBasicSmall from './empy-state-basic-small';

const Component = () => {
  return (
    <Stack
      justifyContent="center"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <EmptyStateBasicSmall />
    </Stack>
  );
};

export default Component;
