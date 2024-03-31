import { Stack } from '@mui/material';
import IconsDropdown from './icons-dropdown';

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <IconsDropdown />
    </Stack>
  );
};

export default Component;
