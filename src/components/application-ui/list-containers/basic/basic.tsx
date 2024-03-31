import { Box, Stack } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Stack
      spacing={{ xs: 2, sm: 3 }}
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Box width="100%">
        <PlaceholderBox />
      </Box>
      <Box width="100%">
        <PlaceholderBox />
      </Box>
      <Box width="100%">
        <PlaceholderBox />
      </Box>
    </Stack>
  );
};

export default Component;
