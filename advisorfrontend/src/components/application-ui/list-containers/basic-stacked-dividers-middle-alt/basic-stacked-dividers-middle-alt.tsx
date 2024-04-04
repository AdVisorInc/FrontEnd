import { Divider, Stack } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Stack
      spacing={2}
      divider={<Divider />}
    >
      <PlaceholderBox />
      <PlaceholderBox />
      <PlaceholderBox />
    </Stack>
  );
};

export default Component;
