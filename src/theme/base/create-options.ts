import type { Direction, ThemeOptions } from '@mui/material';
import { BORDER_RADIUS } from '../utils';
import { createComponents } from './create-components';
import { createTypography } from './create-typography';

interface ComponentsConfig {
  direction?: Direction;
}

export const createOptions = (config: ComponentsConfig): ThemeOptions => {
  const { direction = 'ltr' } = config;

  return {
    components: createComponents(),
    direction,
    spacing: 10,
    shape: {
      borderRadius: BORDER_RADIUS,
    },
    typography: createTypography(),
  };
};
