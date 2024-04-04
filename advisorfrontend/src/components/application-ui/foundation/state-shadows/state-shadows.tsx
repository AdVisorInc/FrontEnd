import { Card, Unstable_Grid2 as Grid, Typography } from '@mui/material';

const Component = () => {
  const elevations: number[] = Array.from({ length: 25 }, (_, i) => i).filter(
    (elevation) => elevation >= 1 && elevation <= 5
  );

  return (
    <Grid
      container
      columns={20}
      spacing={{ xs: 2, sm: 3 }}
    >
      {elevations.map((elevation) => (
        <Grid
          xs={22}
          sm={6}
          md={4}
          key={elevation}
        >
          <Card
            elevation={elevation}
            sx={{ py: 2, textAlign: 'center' }}
          >
            <Typography variant="subtitle2">Elevation</Typography>
            <Typography
              variant="h2"
              noWrap
            >
              {elevation}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Component;
