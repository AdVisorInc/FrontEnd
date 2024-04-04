import { Divider, Stack } from '@mui/material';
import FadeTransitionDropdown from './fade-transition-dropdown';
import ZoomTransitionDropdown from './zoom-transition-dropdown';

const Component = () => {
  return (
    <>
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <FadeTransitionDropdown />
      </Stack>
      <Divider sx={{ my: { xs: 3, md: 4 } }} />
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <ZoomTransitionDropdown />
      </Stack>
    </>
  );
};

export default Component;
