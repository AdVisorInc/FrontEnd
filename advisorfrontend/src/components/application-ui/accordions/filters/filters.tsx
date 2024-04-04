import { Card, Unstable_Grid2 as Grid } from '@mui/material';
import FiltersContent from './filters-content';
import FiltersContentAlternate from './filters-content-alternate';

const Component = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        md={6}
      >
        <Card>
          <FiltersContent />
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
      >
        <Card>
          <FiltersContentAlternate />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Component;
