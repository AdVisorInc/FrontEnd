import { alpha, Card, CardContent, Stack } from '@mui/material';
import GridNavigation from './grid-navigation';

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
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[50], 0.02) : 'neutral.50',
        }}
        variant="outlined"
      >
        <CardContent>
          <GridNavigation />
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Component;
