import { Box, Unstable_Grid2 as Grid, Typography, useTheme } from '@mui/material';

const rgbToHex = (rgb: string) => {
  const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!match) return rgb;

  const hexValue = (decimal: number) => {
    const hex = decimal.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${hexValue(Number(match[1]))}${hexValue(Number(match[2]))}${hexValue(Number(match[3]))}`;
};

const Component = () => {
  const theme = useTheme();

  const neutralColors = [
    { name: 'neutral.50', value: theme.palette.neutral[50] },
    { name: 'neutral.100', value: theme.palette.neutral[100] },
    { name: 'neutral.200', value: theme.palette.neutral[200] },
    { name: 'neutral.300', value: theme.palette.neutral[300] },
    { name: 'neutral.400', value: theme.palette.neutral[400] },
    { name: 'neutral.500', value: theme.palette.neutral[500] },
    { name: 'neutral.600', value: theme.palette.neutral[600] },
    { name: 'neutral.700', value: theme.palette.neutral[700] },
    { name: 'neutral.800', value: theme.palette.neutral[800] },
    { name: 'neutral.900', value: theme.palette.neutral[900] },
  ];

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
      columns={24}
    >
      {neutralColors.map((color) => (
        <Grid
          xs={24}
          sm={6}
          md={4}
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
            color="text.primary"
          >
            {color.name}
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            color="text.secondary"
          >
            {color.value}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{ opacity: 0.8 }}
          >
            {rgbToHex(color.value)}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Component;
