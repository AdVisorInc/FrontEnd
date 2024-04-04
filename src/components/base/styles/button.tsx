import { alpha, Button, styled } from '@mui/material';

export const ButtonLight = styled(Button)(({ theme }) => ({
  background: alpha(theme.palette.common.white, 0.08),
  color: alpha(theme.palette.common.white, 0.9),
  borderColor: alpha(theme.palette.common.white, 0.12),

  '&:hover': {
    background: alpha(theme.palette.common.white, 0.1),
    color: theme.palette.common.white,
  },

  '&.MuiButton-outlined': {
    borderColor: alpha(theme.palette.common.white, 0.12),

    '&:hover': {
      borderColor: alpha(theme.palette.common.white, 0.16),
    },
  },
}));
