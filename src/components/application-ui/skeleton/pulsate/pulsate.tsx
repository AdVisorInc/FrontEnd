import { Box, Unstable_Grid2 as Grid, Skeleton } from '@mui/material';

const Component = () => {
  return (
    <Grid
      container
      spacing={2}
    >
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Skeleton
          variant="rectangular"
          height={118}
        />
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Skeleton
          variant="rectangular"
          height={118}
        />
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Skeleton
          variant="rectangular"
          height={118}
        />
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Component;
