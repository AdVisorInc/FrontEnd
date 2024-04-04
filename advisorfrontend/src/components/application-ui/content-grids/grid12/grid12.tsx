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
          title="6"
        />
      </Grid>
      <Grid xs={12}>
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
          title="6"
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
        xl={8}
        container
        spacing={{ xs: 2, sm: 3 }}
      >
        <Grid xs={12}>
          <PlaceholderBox
            height={128}
            title="6"
          />
        </Grid>
        <Grid xs={12}>
          <PlaceholderBox
            height={128}
            title="6"
          />
        </Grid>
      </Grid>
      <Grid
        xs={12}
        xl={4}
        container
        spacing={{ xs: 2, sm: 3 }}
      >
        <Grid
          xs={12}
          md={6}
          xl={12}
        >
          <PlaceholderBox
            height={128}
            title="6"
          />
        </Grid>
        <Grid
          xs={12}
          md={6}
          xl={12}
        >
          <PlaceholderBox
            height={128}
            title="6"
          />
        </Grid>
      </Grid>
      <Grid
        xs={12}
        lg={5}
      >
        <PlaceholderBox
          height={128}
          title="6"
        />
      </Grid>
      <Grid
        xs={12}
        lg={7}
      >
        <PlaceholderBox
          height={128}
          title="6"
        />
      </Grid>
    </Grid>
  );
};

export default Component;
