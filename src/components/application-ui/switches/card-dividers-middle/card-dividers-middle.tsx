import { Box, Card, CardContent, Divider, Stack, Switch, Typography } from '@mui/material';

const Component = () => {
  return (
    <Card>
      <Stack divider={<Divider variant="middle" />}>
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box overflow="hidden">
            <Typography
              component="label"
              htmlFor="switch-spatial-audio"
              variant="h5"
              sx={{ whiteSpace: 'nowrap' }}
            >
              Spatial audio
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              noWrap
            >
              More immersive sound in meetings.
            </Typography>
          </Box>
          <Switch
            defaultChecked
            id="switch-spatial-audio"
          />
        </CardContent>

        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box overflow="hidden">
            <Typography
              component="label"
              htmlFor="switch-music-mode"
              variant="h5"
              sx={{ whiteSpace: 'nowrap' }}
            >
              Music mode
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              noWrap
            >
              Deliver high fidelity sound in meetings.
            </Typography>
          </Box>
          <Switch id="switch-music-mode" />
        </CardContent>
      </Stack>
    </Card>
  );
};

export default Component;
