import { Box, Card, CardHeader, Divider, Stack } from '@mui/material';
import VerticalMenuIndicatorError from './menu-indicator-error';
import VerticalMenuIndicatorPrimary from './menu-indicator-primary';
import VerticalMenuIndicatorSecondary from './menu-indicator-secondary';
import VerticalMenuIndicatorSuccess from './menu-indicator-success';

const Component = () => {
  return (
    <>
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Card
          variant="outlined"
          sx={{
            width: '100%',
          }}
        >
          <CardHeader title="Primary" />
          <Box
            pb={2}
            pr={2}
          >
            <VerticalMenuIndicatorPrimary />
          </Box>
        </Card>
        <Card
          variant="outlined"
          sx={{
            width: '100%',
          }}
        >
          <CardHeader title="Secondary" />
          <Box
            pb={2}
            pr={2}
          >
            <VerticalMenuIndicatorSecondary />
          </Box>
        </Card>
      </Stack>
      <Divider sx={{ my: { xs: 3, md: 4 } }} />
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Card
          variant="outlined"
          sx={{
            width: '100%',
          }}
        >
          <CardHeader title="Success" />
          <Box
            pb={2}
            pr={2}
          >
            <VerticalMenuIndicatorSuccess />
          </Box>
        </Card>
        <Card
          variant="outlined"
          sx={{
            width: '100%',
          }}
        >
          <CardHeader title="Error" />
          <Box
            pb={2}
            pr={2}
          >
            <VerticalMenuIndicatorError />
          </Box>
        </Card>
      </Stack>
    </>
  );
};

export default Component;
