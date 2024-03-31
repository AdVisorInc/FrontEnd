import { Unstable_Grid2 as Grid } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        lg={8}
      >
        <PlaceholderBox
          height={128}
          title="1"
        />
      </Grid>
      <Grid
        xs={12}
        lg={4}
        container
        spacing={{ xs: 2, sm: 3 }}
      >
        <Grid xs={12}>
          <PlaceholderBox
            height={128}
            title="2"
          />
        </Grid>
        <Grid
          xs={12}
          md={6}
          lg={12}
        >
          <PlaceholderBox
            height={128}
            title="3"
          />
        </Grid>
        <Grid
          xs={12}
          md={6}
          lg={12}
        >
          <PlaceholderBox
            height={128}
            title="4"
          />
        </Grid>
        <Grid
          xs={12}
          xl={12}
        >
          <PlaceholderBox
            height={128}
            title="5"
          />
        </Grid>
      </Grid>
      <Grid
        xs={12}
        lg={6}
      >
        <PlaceholderBox
          height={128}
          title="6"
        />
      </Grid>
      <Grid
        xs={12}
        lg={6}
      >
        <PlaceholderBox
          height={128}
          title="7"
        />
      </Grid>
      <Grid
        xs={12}
        lg={8}
        container
        spacing={{ xs: 2, sm: 3 }}
      >
        <Grid
          xs={12}
          md={5}
        >
          <PlaceholderBox
            height={128}
            title="8"
          />
        </Grid>
        <Grid
          xs={12}
          md={7}
        >
          <PlaceholderBox
            height={128}
            title="9"
          />
        </Grid>
      </Grid>
      <Grid
        xs={12}
        lg={4}
      >
        <PlaceholderBox
          height={128}
          title="10"
        />
      </Grid>
    </Grid>
  );
};

export default Component;
