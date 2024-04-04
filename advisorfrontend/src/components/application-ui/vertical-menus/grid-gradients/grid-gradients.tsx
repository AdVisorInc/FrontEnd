import { Card, CardContent, Stack } from '@mui/material';
import GridGradientsNavigation from './grid-gradients-navigation';

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
      >
        <CardContent>
          <GridGradientsNavigation />
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Component;
