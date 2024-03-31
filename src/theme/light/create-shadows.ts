import { alpha, PaletteColor, PaletteOptions, type Shadows } from '@mui/material';
import { Layout } from 'src/contexts/customization';
import { neutral } from '../colors';

interface ShadowsConfig {
  palette: PaletteOptions;
  layout: Layout;
}

const generateShadows = (color: string): string => {
  return `0px 2px 2px ${alpha(color, 0.16)}, 0px 2px 4px ${alpha(color, 0.17)}, 0px 4px 8px ${alpha(
    color,
    0.18
  )}, 0px 8px 16px ${alpha(color, 0.19)}`;
};

const elevation6 = `0px 0px 0px 1px ${alpha(neutral[900], 0.08)}`;
const elevation7 = `0px 0px 0px 2px ${alpha(neutral[900], 0.06)}`;

const elevation9 = `0px 4px 3px ${alpha(neutral[600], 0.06)}, 0px 2px 5px ${alpha(
  neutral[700],
  0.07
)}`;
const elevation10 = `0px 4px 4px ${alpha(neutral[600], 0.08)}, 0px 2px 6px ${alpha(
  neutral[700],
  0.09
)}`;
const elevation11 = `0px 5px 5px ${alpha(neutral[600], 0.1)}, 0px 2px 7px ${alpha(
  neutral[700],
  0.11
)}`;
const elevation12 = `0px 5px 6px ${alpha(neutral[600], 0.12)}, 0px 2px 8px ${alpha(
  neutral[700],
  0.13
)}`;
const elevation13 = `0px 6px 7px ${alpha(neutral[600], 0.14)}, 0px 2px 9px ${alpha(
  neutral[700],
  0.15
)}`;
const elevation14 = `0px 6px 8px ${alpha(neutral[600], 0.16)}, 0px 2px 10px ${alpha(
  neutral[700],
  0.17
)}`;
const elevation15 = `${alpha(neutral[700], 0.25)} 0px 4px 8px -2px, ${alpha(
  neutral[800],
  0.08
)} 0px 0px 0px 1px`;

const elevation16 = `0px 7px 10px ${alpha(neutral[600], 0.19)}, 0px 2px 12px ${alpha(
  neutral[700],
  0.2
)}`;
const elevation17 = `0px 7px 11px ${alpha(neutral[600], 0.2)}, 0px 2px 13px ${alpha(
  neutral[700],
  0.21
)}`;
const elevation18 = `0px 8px 12px ${alpha(neutral[600], 0.21)}, 0px 2px 14px ${alpha(
  neutral[700],
  0.22
)}`;
const elevation19 = `0px 8px 13px ${alpha(neutral[600], 0.22)}, 0px 2px 15px ${alpha(
  neutral[700],
  0.23
)}`;
const elevation20 = `0px 9px 2px ${alpha(neutral[600], 0.19)}, 0px 2px 4px ${alpha(
  neutral[500],
  0.2
)}, 0px 4px 8px ${alpha(neutral[500], 0.21)}, 0px 8px 16px ${alpha(
  neutral[500],
  0.22
)}, 0px 16px 32px ${alpha(neutral[500], 0.23)}`;

const elevation21 = `
  0px 2px 3px ${alpha(neutral[500], 0.2)},
  0px 2px 5px ${alpha(neutral[500], 0.21)},
  0px 5px 10px ${alpha(neutral[500], 0.22)},
  0px 10px 20px ${alpha(neutral[500], 0.23)},
  0px 18px 36px ${alpha(neutral[500], 0.24)}
`;

const elevation22 = `
  0px 2px 4px ${alpha(neutral[500], 0.21)},
  0px 3px 6px ${alpha(neutral[500], 0.22)},
  0px 6px 12px ${alpha(neutral[500], 0.23)},
  0px 12px 24px ${alpha(neutral[500], 0.24)},
  0px 20px 40px ${alpha(neutral[500], 0.25)}
`;

const elevation23 = `
  0px 2px 5px ${alpha(neutral[500], 0.22)},
  0px 4px 8px ${alpha(neutral[500], 0.23)},
  0px 8px 16px ${alpha(neutral[500], 0.24)},
  0px 14px 28px ${alpha(neutral[500], 0.25)},
  0px 22px 44px ${alpha(neutral[500], 0.26)}
`;

const elevation24 = `
  0px 3px 6px ${alpha(neutral[800], 0.23)},
  0px 5px 10px ${alpha(neutral[800], 0.24)},
  0px 9px 18px ${alpha(neutral[800], 0.25)},
  0px 16px 32px ${alpha(neutral[800], 0.26)},
  0px 24px 48px ${alpha(neutral[800], 0.27)}
`;

const layoutCardShadow = `
  0px 9px 16px ${alpha(neutral[700], 0.14)},
  0px 2px 2px ${alpha(neutral[500], 0.38)}
`;
const layoutCardShadowAlt = `
  0px 0 0 1px ${alpha(neutral[700], 0.14)},
  0px 9px 16px ${alpha(neutral[700], 0.12)},
  0px 2px 2px ${alpha(neutral[500], 0.34)}
`;

export const createShadows = ({ palette, layout }: ShadowsConfig): Shadows => {
  const {
    primary: { main: primaryMain },
    success: { main: successMain },
    error: { main: errorMain },
    warning: { main: warningMain },
    info: { main: infoMain },
  } = palette as { [key: string]: PaletteColor };

  const layoutShadows = {
    'vertical-shells-white': elevation7,
    'vertical-shells-dark': layoutCardShadow,
    'vertical-shells-dark-alternate': layoutCardShadow,
    'vertical-shells-brand': elevation9,
    'vertical-shells-accent-header': layoutCardShadowAlt,
    'vertical-shells-white-off': elevation7,
    'vertical-shells-light': elevation15,
    'collapsed-shells-double': layoutCardShadowAlt,
    'collapsed-shells-double-accent': elevation7,
    'collapsed-shells-single': layoutCardShadow,
    'collapsed-shells-single-accent': layoutCardShadowAlt,
    'collapsed-shells-single-white': elevation7,
    'collapsed-shells-single-white-off': layoutCardShadow,
    'stacked-shells-top-nav': layoutCardShadowAlt,
    'stacked-shells-top-nav-accent': elevation7,
    'stacked-shells-top-nav-tabs': layoutCardShadow,
    'stacked-shells-top-nav-wide': elevation7,
  };

  const cardShadow = layoutShadows[layout] || elevation12;

  return [
    'none',
    generateShadows(primaryMain),
    generateShadows(successMain),
    generateShadows(errorMain),
    generateShadows(warningMain),
    generateShadows(infoMain),
    elevation6,
    elevation7,
    cardShadow,
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
