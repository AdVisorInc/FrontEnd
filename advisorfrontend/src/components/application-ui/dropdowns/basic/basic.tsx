import { Divider, Stack } from '@mui/material';
import BasicDropdown from './basic-dropdown';
import RightAlignedDropdown from './right-aligned-dropdown';

const Component = () => {
  return (
    <>
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <BasicDropdown />
      </Stack>
      <Divider sx={{ my: { xs: 2, sm: 3 } }} />
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <RightAlignedDropdown />
      </Stack>
    </>
  );
};

export default Component;
