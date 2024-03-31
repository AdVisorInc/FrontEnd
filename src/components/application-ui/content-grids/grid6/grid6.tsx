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
      <Grid xs={12}>
        <PlaceholderBox
          height={128}
          title="2"
        />
      </Grid>
      <Grid xs={12}>
        <PlaceholderBox
          height={128}
          title="3"
        />
      </Grid>
      <Grid
        xs={12}
        md={6}
      >
        <PlaceholderBox
          height={128}
          title="4"
        />
      </Grid>
      <Grid
        xs={12}
        md={6}
      >
        <PlaceholderBox
          height={128}
          title="5"
        />
      </Grid>
      <Grid
        xs={12}
        md={6}
      >
        <PlaceholderBox
          height={128}
          title="6"
        />
      </Grid>
      <Grid
        xs={12}
        md={6}
      >
        <PlaceholderBox
          height={128}
          title="7"
        />
      </Grid>
      <Grid xs={12}>
        <PlaceholderBox
          height={128}
          title="8"
        />
      </Grid>
    </Grid>
  );
};

export default Component;
