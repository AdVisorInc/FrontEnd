import { Card, CardHeader, Stack } from '@mui/material';
import VerticalMenuSquarePrimary from './menu-square-primary';
import VerticalMenuSquareSecondary from './menu-square-secondary';

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Card
        elevation={0}
        variant="outlined"
        sx={{
          width: '100%',
        }}
      >
        <CardHeader title="Primary" />
        <VerticalMenuSquarePrimary />
      </Card>
      <Card
        elevation={0}
        variant="outlined"
        sx={{
          width: '100%',
        }}
      >
        <CardHeader title="Secondary" />
        <VerticalMenuSquareSecondary />
      </Card>
    </Stack>
  );
};

export default Component;
