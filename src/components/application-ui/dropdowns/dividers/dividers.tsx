import { Stack } from '@mui/material';
import DividersDropdown from './dividers-dropdown';

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <DividersDropdown />
    </Stack>
  );
};

export default Component;
