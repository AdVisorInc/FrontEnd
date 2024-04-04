import { Card, Divider, FormControlLabel, Stack, Switch, Typography } from '@mui/material';

const Component = () => {
  return (
    <Card>
      <Stack divider={<Divider />}>
        <FormControlLabel
          sx={{ p: 2, mr: 0 }}
          value="off"
          control={<Switch />}
          label={
            <>
              <Typography
                variant="h5"
                lineHeight={1}
                sx={{ pl: 1, whiteSpace: 'nowrap' }}
              >
                Spatial audio
              </Typography>
              <Typography
                variant="body1"
                sx={{ pl: 1 }}
                color="text.secondary"
                noWrap
              >
                More immersive sound in meetings.
              </Typography>
            </>
          }
          disableTypography
        />
        <FormControlLabel
          sx={{ p: 2, mr: 0 }}
          value="off"
          control={<Switch defaultChecked />}
          label={
            <>
              <Typography
                variant="h5"
                lineHeight={1}
                sx={{ pl: 1, whiteSpace: 'nowrap' }}
              >
                Music mode
              </Typography>
              <Typography
                variant="body1"
                sx={{ pl: 1 }}
                color="text.primary"
                noWrap
              >
                Deliver high fidelity sound in meetings.
              </Typography>
            </>
          }
          disableTypography
        />
      </Stack>
    </Card>
  );
};

export default Component;
