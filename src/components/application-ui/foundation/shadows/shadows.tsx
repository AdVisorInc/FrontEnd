import {
  Alert,
  AlertTitle,
  Box,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const Component = () => {
  const { t } = useTranslation();
  const elevations: number[] = Array.from({ length: 25 }, (_, i) => i).filter(
    (elevation) => elevation > 5
  );
  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid xs={12}>
        <Alert severity="warning">
          <AlertTitle>{t('Card default elevation')}</AlertTitle>
          The theme configures all cards with a default <b>elevation=8</b>. The shadow value for
          this elevation varies depending on the selected layout shell.
        </Alert>
        <Box
          sx={{
            mt: { xs: 2, sm: 3 },
          }}
        >
          <Card
            elevation={8}
            sx={{ py: { xs: 2, sm: 4 }, textAlign: 'center' }}
          >
            <Typography variant="subtitle2">Elevation</Typography>
            <Typography
              variant="h1"
              noWrap
            >
              {8}
            </Typography>
          </Card>
        </Box>
      </Grid>
      <Grid xs={12}>
        <Divider />
      </Grid>
      <Grid
        xs={12}
        sm={6}
        md={3}
      >
        <Card
          elevation={0}
          sx={{ py: { xs: 2, sm: 4 }, textAlign: 'center' }}
        >
          <Typography variant="subtitle2">Elevation</Typography>
          <Typography
            variant="h2"
            noWrap
          >
            {0}
          </Typography>
        </Card>
      </Grid>

      {elevations.map((elevation) => (
        <Grid
          key={elevation}
          xs={12}
          sm={6}
          md={3}
        >
          <Card
            elevation={elevation}
            sx={{ p: { xs: 2, sm: 4 }, textAlign: 'center' }}
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
