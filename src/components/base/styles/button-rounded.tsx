import { Button, styled } from '@mui/material';

export const ButtonRounded = styled(Button)(() => ({
  display: 'flex',
  alignItems: 'center',
  '& .MuiBadge-badge': {
    position: 'static',
    transform: 'none',
  },
}));
