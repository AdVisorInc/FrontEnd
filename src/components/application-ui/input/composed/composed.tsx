import { Stack } from '@mui/material';
import ComposedWithSelect from './composed-with-select';
import ComposedWithSelectMedium from './composed-with-select-medium';

const Component = () => {
  return (
    <Stack
      spacing={{ xs: 2, sm: 3 }}
      direction="column"
    >
      <ComposedWithSelect />
      <ComposedWithSelectMedium />
    </Stack>
  );
};

export default Component;
