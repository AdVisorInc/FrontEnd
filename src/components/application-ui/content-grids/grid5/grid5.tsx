import { Unstable_Grid2 as Grid } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid xs={12}>
        <PlaceholderBox
          height={128}
          title="1"
        />
      </Grid>
      <Grid
        lg={8}
        xs={12}
      >
        <PlaceholderBox
          height={128}
          title="2"
        />
      </Grid>
      <Grid
        lg={4}
        xs={12}
      >
        <PlaceholderBox
          height={128}
          title="3"
        />
      </Grid>
      <Grid xs={12}>
        <PlaceholderBox
          height={128}
          title="4"
        />
      </Grid>
      <Grid xs={12}>
        <PlaceholderBox
          height={128}
          title="5"
        />
      </Grid>
    </Grid>
  );
};

export default Component;
