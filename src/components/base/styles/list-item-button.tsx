import { alpha, lighten, ListItemButton, styled } from '@mui/material';

export const ListItemButtonWrapper = styled(ListItemButton)(({ theme }) => ({
  transform: 'scale(1)',
  background: theme.palette.background.paper,
  position: 'relative',
  zIndex: 5,

  '&:hover': {
    borderRadius: theme.shape.borderRadius,
    background: lighten(theme.palette.background.default, 0.05),
    zIndex: 6,
    boxShadow: `
        0 0.56875rem 3.3rem ${theme.palette.background.default},
        0 0.9975rem 2.4rem ${alpha(theme.palette.common.black, 0.07)},
        0 0.35rem 1rem ${alpha(theme.palette.common.black, 0.1)},
        0 0.225rem 0.8rem ${alpha(theme.palette.common.black, 0.15)}
      `,
    transform: 'scale(1.08)',
  },

  '&:last-child': {
    borderBottomRightRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: theme.shape.borderRadius,
  },
}));

export const ListItemButtonWrapperLight = styled(ListItemButton)(({ theme }) => ({
  background: 'transparent',
  transition: 'none',

  '&:hover': {
    background: alpha(theme.palette.background.paper, 0.06),
  },
}));
