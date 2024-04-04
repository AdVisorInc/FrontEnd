import { Card, CardContent, Stack } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Stack
      spacing={{ xs: 2, sm: 3 }}
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <PlaceholderBox />
        </CardContent>
      </Card>
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <PlaceholderBox />
        </CardContent>
      </Card>
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <PlaceholderBox />
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Component;
