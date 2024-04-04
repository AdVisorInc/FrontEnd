import type { TypographyOptions } from '@mui/material/styles/createTypography';

export const createTypography = (): TypographyOptions => {
  return {
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.8rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 500,
    },
    caption: {
      fontSize: '0.85rem',
      fontWeight: 500,
      lineHeight: 1.5,
      textTransform: 'uppercase',
    },
    subtitle1: {
      fontSize: '.915rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 700,
      lineHeight: 2,
      textTransform: 'uppercase',
    },
    h1: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 700,
      fontSize: '2.6rem',
      lineHeight: 1.2,
      letterSpacing: '-0.05rem',
    },
    h2: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
      fontSize: '1.9rem',
      lineHeight: 1.3,
      letterSpacing: '-0.04rem',
    },
    h3: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
      letterSpacing: '-0.03rem',
    },
    h4: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
      fontSize: '1.2rem',
      lineHeight: 1.6,
    },
    h5: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
      fontSize: '.92rem',
      lineHeight: 1.5,
    },
  };
};
