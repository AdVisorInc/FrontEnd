import { Box, styled } from '@mui/material';

export const InlineBadge = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  '& .MuiBadge-badge': {
    position: 'static',
    transform: 'none',
  },
}));
