import { alpha, darken, PaletteColor, PaletteOptions, type Shadows } from '@mui/material';
import { Layout } from 'src/contexts/customization';
import { neutral } from '../colors';

interface ShadowsConfig {
  palette: PaletteOptions;
  layout: Layout;
}

const generateShadows = (color: string): string => {
  return `0px 2px 3px ${alpha(darken(color, 0.12), 0.25)}, 0px 2px 6px ${alpha(
    darken(color, 0.13),
    0.08
  )}, 0px 4px 9px ${alpha(darken(color, 0.14), 0.25)}, 0px 8px 18px ${alpha(
    darken(color, 0.15),
    0.08
  )}`;
};

const elevation6 = `0px 0px 0px 1px ${darken(neutral[900], 0.08)}`;
const elevation7 = `0px 0px 0px 2px ${darken(neutral[900], 0.06)}`;

const elevation9 = `0px 4px 3px ${alpha(darken(neutral[900], 0.06), 0.5)}, 0px 2px 5px ${alpha(
  darken(neutral[900], 0.07),
  0.5
)}`;
const elevation10 = `0px 4px 4px ${alpha(darken(neutral[900], 0.08), 0.5)}, 0px 2px 6px ${alpha(
  darken(neutral[900], 0.09),
  0.5
)}`;
const elevation11 = `0px 5px 5px ${alpha(darken(neutral[900], 0.1), 0.5)}, 0px 2px 7px ${alpha(
  darken(neutral[900], 0.11),
  0.5
)}`;
const elevation12 = `0px 5px 6px ${alpha(darken(neutral[900], 0.12), 0.5)}, 0px 2px 8px ${alpha(
  darken(neutral[900], 0.13),
  0.5
)}`;
const elevation13 = `0px 6px 7px ${alpha(darken(neutral[900], 0.14), 0.5)}, 0px 2px 9px ${alpha(
  darken(neutral[900], 0.15),
  0.5
)}`;
const elevation14 = `0px 6px 8px ${alpha(darken(neutral[900], 0.16), 0.5)}, 0px 2px 10px ${alpha(
  darken(neutral[900], 0.17),
  0.5
)}`;
const elevation15 = `${alpha(darken(neutral[900], 0.25), 0.5)} 0px 4px 8px -2px, ${alpha(
  darken(neutral[900], 0.08),
  0.5
)} 0px 0px 0px 1px`;

const elevation16 = `0px 7px 10px ${alpha(darken(neutral[900], 0.19), 0.5)}, 0px 2px 12px ${alpha(
  darken(neutral[900], 0.2),
  0.5
)}`;
const elevation17 = `0px 7px 11px ${alpha(darken(neutral[900], 0.2), 0.5)}, 0px 2px 13px ${alpha(
  darken(neutral[900], 0.21),
  0.5
)}`;
const elevation18 = `0px 8px 12px ${alpha(darken(neutral[900], 0.21), 0.5)}, 0px 2px 14px ${alpha(
  darken(neutral[900], 0.22),
  0.5
)}`;
const elevation19 = `0px 8px 13px ${alpha(darken(neutral[900], 0.22), 0.5)}, 0px 2px 15px ${alpha(
  darken(neutral[900], 0.23),
  0.5
)}`;
const elevation20 = `0px 9px 2px ${alpha(darken(neutral[900], 0.19), 0.5)}, 0px 2px 4px ${alpha(
  darken(neutral[900], 0.2),
  0.5
)}, 0px 4px 8px ${alpha(darken(neutral[900], 0.21), 0.5)}, 0px 8px 16px ${alpha(
  darken(neutral[900], 0.22),
  0.5
)}, 0px 16px 32px ${alpha(darken(neutral[900], 0.23), 0.5)}`;

const elevation21 = `
  0px 2px 3px ${alpha(darken(neutral[900], 0.2), 0.5)},
  0px 2px 5px ${alpha(darken(neutral[900], 0.21), 0.5)},
  0px 5px 10px ${alpha(darken(neutral[900], 0.22), 0.5)},
  0px 10px 20px ${alpha(darken(neutral[900], 0.23), 0.5)},
  0px 18px 36px ${alpha(darken(neutral[900], 0.24), 0.5)}
`;

const elevation22 = `
  0px 2px 4px ${alpha(darken(neutral[900], 0.21), 0.5)},
  0px 3px 6px ${alpha(darken(neutral[900], 0.22), 0.5)},
  0px 6px 12px ${alpha(darken(neutral[900], 0.23), 0.5)},
  0px 12px 24px ${alpha(darken(neutral[900], 0.24), 0.5)},
  0px 20px 40px ${alpha(darken(neutral[900], 0.25), 0.5)}
`;

const elevation23 = `
  0px 2px 5px ${alpha(darken(neutral[900], 0.22), 0.5)},
  0px 4px 8px ${alpha(darken(neutral[900], 0.23), 0.5)},
  0px 8px 16px ${alpha(darken(neutral[900], 0.24), 0.5)},
  0px 14px 28px ${alpha(darken(neutral[900], 0.25), 0.5)},
  0px 22px 44px ${alpha(darken(neutral[900], 0.26), 0.5)}
`;

const elevation24 = `
  0px 3px 6px ${alpha(darken(neutral[900], 0.23), 0.5)},
  0px 5px 10px ${alpha(darken(neutral[900], 0.24), 0.5)},
  0px 9px 18px ${alpha(darken(neutral[900], 0.25), 0.5)},
  0px 16px 32px ${alpha(darken(neutral[900], 0.26), 0.5)},
  0px 24px 48px ${alpha(darken(neutral[900], 0.27), 0.5)}
`;

const layoutCardShadow = `
  0px 0px 0px 1px ${darken(neutral[900], 0.34)},
  0px 9px 16px ${alpha(darken(neutral[900], 0.34), 0.3)},
  0px 2px 2px ${alpha(darken(neutral[900], 0.34), 0.34)}
`;

export const createShadows = ({ palette }: ShadowsConfig): Shadows => {
  const {
    primary: { main: primaryMain },
    success: { main: successMain },
    error: { main: errorMain },
    warning: { main: warningMain },
    info: { main: infoMain },
  } = palette as { [key: string]: PaletteColor };

  return [
    'none',
    generateShadows(primaryMain),
    generateShadows(successMain),
    generateShadows(errorMain),
    generateShadows(warningMain),
    generateShadows(infoMain),
    elevation6,
    elevation7,
    layoutCardShadow,
    elevation9,
    elevation10,
    elevation11,
    elevation12,
    elevation13,
    elevation14,
    elevation15,
    elevation16,
    elevation17,
    elevation18,
    elevation19,
    elevation20,
    elevation21,
    elevation22,
    elevation23,
    elevation24,
  ];
};
