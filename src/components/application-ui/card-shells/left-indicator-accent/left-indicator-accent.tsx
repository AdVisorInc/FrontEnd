import { CardContent, Unstable_Grid2 as Grid } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';
import { CardIndicatorColor } from 'src/components/base/styles/card-indicator-color';

type indicatorColor = 'primary' | 'error' | 'success' | 'secondary' | 'warning' | 'info';

const Component = () => {
  const indicatorColors: indicatorColor[] = [
    'primary',
    'error',
    'success',
    'secondary',
    'warning',
    'info',
  ];

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      {indicatorColors.map((color) => (
        <Grid
          key={color}
          xs={12}
          md={4}
          sm={6}
        >
          <CardIndicatorColor
            elevation={6}
            indicatorColor={color}
          >
            <CardContent>
              <PlaceholderBox height={64} />
            </CardContent>
          </CardIndicatorColor>
        </Grid>
      ))}
    </Grid>
  );
};

export default Component;
