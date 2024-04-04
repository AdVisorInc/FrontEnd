import { Stack } from '@mui/material';
import FooterDropdown from './footer-dropdown';

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <FooterDropdown />
    </Stack>
  );
};

export default Component;
