import { Divider, FormGroup, FormLabel, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import SelectManager from './select-manager';
import SelectProjectManager from './select-project-manager';

const Component = () => {
  return (
    <FormGroup>
      <FormLabel>
        <Typography
          variant="h5"
          color="text.primary"
        >
          Configuration
        </Typography>
        <Typography variant="subtitle2">Adjust project settings and parameters</Typography>
        <Divider sx={{ my: 2 }} />
      </FormLabel>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
      >
        <Grid
          xs={12}
          md={6}
        >
          <SelectManager />
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
          <SelectProjectManager />
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default Component;
