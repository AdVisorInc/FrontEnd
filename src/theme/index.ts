import type { Direction, PaletteMode, Theme } from '@mui/material';
import { createTheme as createMuiTheme, responsiveFontSizes } from '@mui/material/styles';
import { Layout } from 'src/contexts/customization';
import { createOptions as createBaseOptions } from './base/create-options';
import { createOptions as createDarkOptions } from './dark/create-options';
import { createOptions as createLightOptions } from './light/create-options';

declare module '@mui/material/styles' {
  export interface NeutralColors {
    25: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface Palette {
    neutral: NeutralColors;
  }

  interface PaletteOptions {
    neutral?: NeutralColors;
  }

  interface TypeBackground {
    paper: string;
    default: string;
  }
}

export type ColorPreset =
  | 'livingCoral'
  | 'greenery'
  | 'ultraViolet'
  | 'roseQuartz'
  | 'radiantOrchid'
  | 'tangerineTango'
  | 'emerald'
  | 'honeyGold'
  | 'monacoBlue'
  | 'darkViolet'
  | 'royalBlue';

interface ThemeConfig {
  colorPreset?: ColorPreset;
  direction?: Direction;
  paletteMode?: PaletteMode;
  layout: Layout;
}

export const createTheme = (config: ThemeConfig): Theme => {
  let theme = createMuiTheme(
    createBaseOptions({
      direction: config.direction,
    }),
    config.paletteMode === 'dark'
      ? createDarkOptions({
          colorPreset: config.colorPreset,
        })
      : createLightOptions({
          colorPreset: config.colorPreset,
          layout: config.layout,
        })
  );
  theme = responsiveFontSizes(theme);

  return theme;
};
