import { Box, Card, Unstable_Grid2 as Grid } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Card
      elevation={0}
      variant="outlined"
      sx={{
        border: 0,
        borderRadius: 0,
      }}
    >
      <Grid
        container
        sx={{
          '--Grid-borderWidth': '1px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
          },
        }}
      >
        <Grid
          xs={12}
          sm={6}
        >
          <Box p={2}>
            <PlaceholderBox />
          </Box>
        </Grid>
        <Grid
          xs={12}
          sm={6}
        >
          <Box p={2}>
            <PlaceholderBox />
          </Box>
        </Grid>
        <Grid
          xs={12}
          sm={6}
        >
          <Box p={2}>
            <PlaceholderBox />
          </Box>
        </Grid>
        <Grid
          xs={12}
          sm={6}
        >
          <Box p={2}>
            <PlaceholderBox />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Component;
