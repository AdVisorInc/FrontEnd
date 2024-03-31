import { alpha, Button, Chip, Stack, styled } from '@mui/material';

const ButtonWrapper = styled(Button)(({ theme }) => ({
  fontSize: 15,
  letterSpacing: -0.025,
  fontWeight: 600,
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  color: theme.palette.mode === 'dark' ? theme.palette.neutral[500] : theme.palette.neutral[700],
  borderRadius: 28,

  '&:hover': {
    color: theme.palette.mode === 'dark' ? theme.palette.neutral[500] : theme.palette.neutral[900],
    background:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.neutral[100], 0.06)
        : theme.palette.neutral[100],
  },

  '&.Mui-selected': {
    color: theme.palette.primary.main,
    background: alpha(theme.palette.primary.main, 0.08),
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
      <ButtonWrapper sx={{ pr: 1, mr: 1 }}>
        Events
        <Chip
          size="small"
          variant="outlined"
          color="secondary"
          sx={{ ml: 1, borderRadius: 12 }}
          label={5}
        />
      </ButtonWrapper>
      <ButtonWrapper>Settings</ButtonWrapper>
    </Stack>
  );
};

export default Menu;
