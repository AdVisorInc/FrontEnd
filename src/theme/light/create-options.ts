import type { ThemeOptions } from '@mui/material/styles/createTheme';
import { Layout } from 'src/contexts/customization';
import type { ColorPreset } from '../index';
import { createComponents } from './create-components';
import { createPalette } from './create-palette';
import { createShadows } from './create-shadows';

interface OptionsConfig {
  colorPreset?: ColorPreset;
  layout?: Layout;
}

export const createOptions = ({ colorPreset, layout }: OptionsConfig): ThemeOptions => {
  const palette = createPalette({ colorPreset });
  const shadows = createShadows({ palette, layout });
  const components = createComponents({ palette });

  return {
    components,
    palette,
    shadows,
  };
};
