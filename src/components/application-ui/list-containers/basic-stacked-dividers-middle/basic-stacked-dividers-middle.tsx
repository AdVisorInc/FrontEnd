import { Box, Card, Divider, Stack } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Card>
      <Stack divider={<Divider variant="middle" />}>
        <Box p={2}>
          <PlaceholderBox />
        </Box>
        <Box p={2}>
          <PlaceholderBox />
        </Box>
        <Box p={2}>
          <PlaceholderBox />
        </Box>
      </Stack>
    </Card>
  );
};

export default Component;
