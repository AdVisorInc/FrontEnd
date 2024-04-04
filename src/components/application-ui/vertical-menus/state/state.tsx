import { Box, Card, CardContent, CardHeader, Divider, Stack, useTheme } from '@mui/material';
import VerticalMenuStateError from './menu-state-error';
import VerticalMenuStateInfo from './menu-state-info';
import VerticalMenuStatePrimary from './menu-state-primary';
import VerticalMenuStateSecondary from './menu-state-secondary';
import VerticalMenuStateSuccess from './menu-state-success';
import VerticalMenuStateWarning from './menu-state-warning';

const Component = () => {
  const theme = useTheme();

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
          <Divider />
          <CardContent>
            <VerticalMenuStatePrimary />
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{
            width: '100%',
          }}
        >
          <CardHeader title="Secondary" />
          <Divider />
          <CardContent>
            <VerticalMenuStateSecondary />
          </CardContent>
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
          <Divider />
          <CardContent>
            <VerticalMenuStateSuccess />
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{
            width: '100%',
          }}
        >
          <CardHeader title="Error" />
          <Divider />
          <CardContent>
            <VerticalMenuStateError />
          </CardContent>
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
          <CardHeader title="Warning" />
          <Divider />
          <CardContent>
            <VerticalMenuStateWarning />
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{
            width: '100%',
          }}
        >
          <CardHeader title="Info" />
          <Divider />
          <CardContent>
            <VerticalMenuStateInfo />
          </CardContent>
        </Card>
      </Stack>
      <Box
        p={4}
        sx={{
          '.MuiLink-root': {
            display: 'flex',
            alignItems: 'center',
            lineHeight: 1,
            fontWeight: 500,

            '.MuiSvgIcon-root': {
              fontSize: 18,
              ml: 0.3,
              mt: '1px',
              transition: theme.transitions.create('margin', {
                duration: theme.transitions.duration.shortest,
              }),
            },

            '&:hover': {
              '.MuiSvgIcon-root': {
                ml: 0.8,
              },
            },
          },
        }}
      />
    </>
  );
};

export default Component;
