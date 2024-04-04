import type { PaletteOptions } from '@mui/material';
import { common } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';
import type { ColorPreset } from 'src/theme';
import { lightTheme, neutral } from 'src/theme/colors';
import { getPrimary } from 'src/theme/utils';

interface PaletteConfig {
  colorPreset?: ColorPreset;
}

export const createPalette = (config: PaletteConfig): PaletteOptions => {
  const { colorPreset } = config;

  const info = lightTheme.info;
  const error = lightTheme.error;
  const success = lightTheme.success;
  const warning = lightTheme.warning;

  return {
    action: {
      disabledBackground: alpha(neutral[25], 0.8),
      disabledOpacity: 0.6,
    },
    background: {
      default: neutral[50],
      paper: common.white,
    },
    divider: neutral[200],
    info,
    error,
    success,
    warning,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    mode: 'light',
    neutral,
    primary: getPrimary(colorPreset),
    secondary: {
      dark: neutral[800],
      main: neutral[900],
      light: neutral[700],
      contrastText: neutral[50],
    },
    text: {
      primary: neutral[800],
      secondary: neutral[700],
      disabled: alpha(neutral[900], 0.35),
    },
  };
};
