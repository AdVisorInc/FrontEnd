import { Stack } from '@mui/material';
import LanguageDropdown from './language-dropdown';

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 3, sm: 0, md: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <LanguageDropdown />
    </Stack>
  );
};

export default Component;
