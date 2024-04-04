import type { PaletteOptions } from '@mui/material';
import { alpha, darken, lighten } from '@mui/material/styles';
import type { ColorPreset } from 'src/theme';
import { darkTheme, neutral } from 'src/theme/colors';
import { getPrimaryDark } from 'src/theme/utils';

interface PaletteConfig {
  colorPreset?: ColorPreset;
}

export const createPalette = (config: PaletteConfig): PaletteOptions => {
  const { colorPreset } = config;

  const info = darkTheme.info;
  const error = darkTheme.error;
  const success = darkTheme.success;
  const warning = darkTheme.warning;

  return {
    action: {
      disabledBackground: alpha(neutral[800], 0.2),
      disabled: neutral[600],
      disabledOpacity: 0.3,
      hover: alpha(neutral[800], 0.5),
      hoverOpacity: 0.08,
      selected: lighten(neutral[900], 0.15),
      selectedOpacity: 0.12,
      active: neutral[300],
      focus: neutral[300],
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
    background: {
      default: neutral[900],
      paper: lighten(neutral[900], 0.025),
    },
    divider: darken(neutral[800], 0.2),
    info,
    error,
    success,
    warning,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    mode: 'dark',
    neutral,
    primary: getPrimaryDark(colorPreset),
    secondary: {
      dark: alpha(neutral[700], 0.3),
      main: alpha(neutral[700], 0.2),
      light: neutral[800],
      contrastText: neutral[300],
    },
    text: {
      primary: neutral[50],
      secondary: neutral[500],
      disabled: alpha(neutral[500], 0.7),
    },
  };
};
