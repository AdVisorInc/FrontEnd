import { Box, CardContent } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <>
      <CardContent sx={{ flex: 1 }}>
        <Box height={2} />
        <PlaceholderBox flex={1} />
      </CardContent>
    </>
  );
};

export default Component;
