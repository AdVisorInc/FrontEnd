import {
  alpha,
  Box,
  Card,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import type { FC } from 'react';
import { VisuallyHiddenRadio } from 'src/components/base/styles/visually-hidden';
import type { ColorPreset } from 'src/theme';
import { darkTheme, lightTheme, ThemeColors } from 'src/theme/colors';

interface Option {
  label: string;
  value: ColorPreset;
  color: string;
}

interface OptionsColorSchemeProps {
  onChange?: (value: ColorPreset) => void;
  value?: ColorPreset;
}

export const OptionsColorScheme: FC<OptionsColorSchemeProps> = (props) => {
  const { onChange, value } = props;

  const theme = useTheme();

  const isDarkMode = theme.palette.mode === 'dark';
  const themeColors: ThemeColors = isDarkMode ? darkTheme : lightTheme;

  const options: Option[] = [
    {
      label: 'Living Coral',
      value: 'livingCoral',
      color: themeColors.livingCoral.main,
    },
    {
      label: 'Greenery',
      value: 'greenery',
      color: themeColors.greenery.main,
    },
    {
      label: 'Ultra Violet',
      value: 'ultraViolet',
      color: themeColors.ultraViolet.main,
    },
    {
      label: 'Rose Quartz',
      value: 'roseQuartz',
      color: themeColors.roseQuartz.main,
    },
    {
      label: 'Radiant Orchid',
      value: 'radiantOrchid',
      color: themeColors.radiantOrchid.main,
    },
    {
      label: 'Tangerine Tango',
      value: 'tangerineTango',
      color: themeColors.tangerineTango.main,
    },
    {
      label: 'Emerald',
      value: 'emerald',
      color: themeColors.emerald.main,
    },
    {
      label: 'Honey Gold',
      value: 'honeyGold',
      color: themeColors.honeyGold.main,
    },
    {
      label: 'Monaco Blue',
      value: 'monacoBlue',
      color: themeColors.monacoBlue.main,
    },
    {
      label: 'Dark Violet',
      value: 'darkViolet',
      color: themeColors.darkViolet.main,
    },
    {
      label: 'Royal Blue',
      value: 'royalBlue',
      color: themeColors.royalBlue.main,
    },
  ];

  return (
    <>
      <Box p={{ xs: 2, md: 3 }}>
        <Typography variant="h5">Color Scheme</Typography>
        <Typography
          color="text.secondary"
          noWrap
        >
          Choose from predefined color schemes or easily create your own
        </Typography>
      </Box>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        flexWrap="wrap"
        px={{ xs: 2, md: 3 }}
        pb={{ xs: 2, md: 3 }}
        gap={{ xs: 1, md: 2 }}
      >
        {options.map((option) => (
          <Card
            key={option.value}
            elevation={0}
            sx={{
              border: 0,
            }}
          >
            <ListItemButton
              sx={{
                px: 2,
                py: 1,
                borderRadius: 'inherit',
                transition: 'none',
                boxShadow: `0 0 0 1px ${alpha(option.color, 0.3)} inset`,

                '&:hover': {
                  backgroundColor: alpha(option.color, 0.08),
                  boxShadow: `0 0 0 2px ${alpha(option.color, 0.6)} inset`,
                },

                '&.Mui-selected': {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  boxShadow: `0 0 0 5px ${alpha(option.color, 0.5)}`,

                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                  },
                },
              }}
              selected={option.value === value}
              key={option.value}
              onClick={() => onChange?.(option.value)}
            >
              <ListItemText
                disableTypography
                primary={
                  <>
                    <Typography
                      variant="h5"
                      fontWeight={700}
                      color={option.value === value ? 'common.white' : option.color}
                    >
                      {option.label}
                    </Typography>
                  </>
                }
              />
              <VisuallyHiddenRadio
                onChange={() => onChange?.(option.value)}
                value={option.value}
                name="radio-buttons"
                inputProps={{ 'aria-label': option.label }}
                color="primary"
                checked={option.value === value}
              />
            </ListItemButton>
          </Card>
        ))}
      </Stack>
    </>
  );
};

OptionsColorScheme.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOf([
    'livingCoral',
    'greenery',
    'ultraViolet',
    'roseQuartz',
    'radiantOrchid',
    'tangerineTango',
    'emerald',
    'honeyGold',
    'monacoBlue',
    'darkViolet',
    'royalBlue',
  ]),
};
