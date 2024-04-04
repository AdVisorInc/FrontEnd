import { Box, Unstable_Grid2 as Grid, Typography, useTheme } from '@mui/material';

const Component = () => {
  const theme = useTheme();

  const states = [
    { name: 'success.main', value: theme.palette.success.main },
    { name: 'info.main', value: theme.palette.info.main },
    { name: 'warning.main', value: theme.palette.warning.main },
    { name: 'error.main', value: theme.palette.error.main },
  ];

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      {states.map((color) => (
        <Grid
          xs={12}
          sm={6}
          md={3}
          key={color.name}
          sx={{
            borderRadius: `${theme.shape.borderRadius}px`,
          }}
        >
          <Box
            height={80}
            sx={{
              background: color.value,
              borderRadius: 'inherit',
              mb: 1,
            }}
          />
          <Typography
            variant="h5"
            fontWeight={600}
            gutterBottom
            color={color.name}
          >
            {color.name}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.primary"
          >
            {color.value}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Component;
