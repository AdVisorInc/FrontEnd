import { alpha, Button, Stack, styled } from '@mui/material';

const ButtonWrapper = styled(Button)(({ theme }) => ({
  fontSize: 15,
  letterSpacing: -0.025,
  fontWeight: 600,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  color: theme.palette.neutral[500],
  borderRadius: theme.shape.borderRadius,

  '&:hover': {
    color: theme.palette.neutral[50],
    background:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.neutral[100], 0.06)
        : alpha(theme.palette.neutral[100], 0.12),
  },

  '&.Mui-selected': {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
  },
}));

const Menu = () => {
  return (
    <Stack
      spacing={0.5}
      direction={{ xs: 'column', sm: 'row' }}
      alignItems="center"
    >
      <ButtonWrapper className="Mui-selected">Dashboard</ButtonWrapper>
      <ButtonWrapper>Members</ButtonWrapper>
      <ButtonWrapper>Events</ButtonWrapper>
      <ButtonWrapper>Settings</ButtonWrapper>
    </Stack>
  );
};

export default Menu;
