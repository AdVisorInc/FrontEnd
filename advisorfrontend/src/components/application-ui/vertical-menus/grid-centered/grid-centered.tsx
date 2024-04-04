import { Card, Stack } from '@mui/material';
import GridNavigationCentered from './grid-centered-navigation';

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
          border: 0,
          borderRadius: 0,
        }}
        variant="outlined"
      >
        <GridNavigationCentered />
      </Card>
    </Stack>
  );
};

export default Component;
