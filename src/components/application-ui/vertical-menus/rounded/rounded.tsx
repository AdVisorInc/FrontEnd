import { alpha, Card, CardContent, CardHeader, Divider, Stack } from '@mui/material';
import VerticalMenuRoundedPrimary from './menu-rounded-primary';
import VerticalMenuRoundedSecondary from './menu-rounded-secondary';

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
          width: '100%',
        }}
      >
        <CardHeader
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
          }}
          title="Primary"
        />
        <Divider />
        <CardContent>
          <VerticalMenuRoundedPrimary />
        </CardContent>
      </Card>
      <Card
        sx={{
          width: '100%',
        }}
      >
        <CardHeader
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
          }}
          title="Secondary"
        />
        <Divider />
        <CardContent>
          <VerticalMenuRoundedSecondary />
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Component;
