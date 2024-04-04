import { Card, CardContent, Stack } from '@mui/material';
import GridNavigationAccent from './grid-navigation-accent';

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Card
        sx={{
          background: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%) !important',
          border: 0,
        }}
        variant="outlined"
      >
        <CardContent>
          <GridNavigationAccent />
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Component;
