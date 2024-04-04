import { Stack } from '@mui/material';
import AlternateDropdown from './alternate-dropdown';

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <AlternateDropdown />
    </Stack>
  );
};

export default Component;
