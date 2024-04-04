import { Box, Unstable_Grid2 as Grid, Typography, useTheme } from '@mui/material';
import { darkTheme, lightTheme, ThemeColors } from 'src/theme/colors';

const Component = () => {
  const theme = useTheme();

  const isDarkMode = theme.palette.mode === 'dark';
  const themeColors: ThemeColors = isDarkMode ? darkTheme : lightTheme;

  const colors = [
    { name: 'Living Coral', value: themeColors.livingCoral.main },
    { name: 'Greenery', value: themeColors.greenery.main },
    { name: 'Ultra Violet', value: themeColors.ultraViolet.main },
    { name: 'Rose Quartz', value: themeColors.roseQuartz.main },
    { name: 'Radiant Orchid', value: themeColors.radiantOrchid.main },
    { name: 'Tangerine Tango', value: themeColors.tangerineTango.main },
    { name: 'Emerald', value: themeColors.emerald.main },
    { name: 'Honey Gold', value: themeColors.honeyGold.main },
    { name: 'Monaco Blue', value: themeColors.monacoBlue.main },
    { name: 'Dark Violet', value: themeColors.darkViolet.main },
    { name: 'Royal Blue', value: themeColors.royalBlue.main },
  ];

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
      columns={24}
    >
      {colors.map((color) => (
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
            noWrap
          >
            {color.name}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            noWrap
          >
            {color.value}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Component;
