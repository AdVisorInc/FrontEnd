import { Box, CardContent, Unstable_Grid2 as Grid } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';
import { CardBorderColor } from 'src/components/base/styles/card-border-color';

type BorderColor = 'primary' | 'error' | 'success' | 'secondary' | 'warning' | 'info';

const Component = () => {
  const borderColors: BorderColor[] = [
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
      {borderColors.map((color) => (
        <Grid
          key={color}
          xs={12}
          md={4}
          sm={6}
        >
          <CardBorderColor
            elevation={6}
            borderColor={color}
            borderPosition="top"
          >
            <Box sx={{ pt: '7px' }}>
              <CardContent>
                <PlaceholderBox height={128} />
              </CardContent>
            </Box>
          </CardBorderColor>
        </Grid>
      ))}
    </Grid>
  );
};

export default Component;
