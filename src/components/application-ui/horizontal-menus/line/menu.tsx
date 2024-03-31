import { Button, Chip, Stack, styled } from '@mui/material';

const ButtonWrapper = styled(Button)(({ theme }) => ({
  padding: theme.spacing(0.9, 1.5, 0.9, 1.8),
  fontSize: 15,
  paddingLeft: 0,
  paddingRight: 0,
  letterSpacing: -0.025,
  fontWeight: 600,
  height: 64,
  color: theme.palette.mode === 'dark' ? theme.palette.neutral[500] : theme.palette.neutral[700],

  '&::before': {
    position: 'absolute',
    content: '""',
    width: '100%',
    height: 2,
    bottom: 0,
    borderRadius: 3,
    opacity: 0,
    background:
      theme.palette.mode === 'dark' ? theme.palette.neutral[800] : theme.palette.neutral[400],
    transform: 'translateY(-4px)',
    transition: theme.transitions.create(['opacity', 'transform']),
  },

  '&:hover': {
    color: theme.palette.mode === 'dark' ? theme.palette.neutral[500] : theme.palette.neutral[900],
    background: 'transparent',

    '&::before': {
      opacity: 1,
      transform: 'translateY(0px)',
    },
  },

  '&.Mui-selected': {
    color: theme.palette.primary.main,

    '&::before': {
      opacity: 1,
      background: theme.palette.primary.main,
      transform: 'translateY(0px)',
    },
  },
}));

const Menu = () => {
  return (
    <Stack
      spacing={{ xs: 2, sm: 3 }}
      direction={{ xs: 'column', sm: 'row' }}
      alignItems="center"
    >
      <ButtonWrapper className="Mui-selected">Dashboard</ButtonWrapper>
      <ButtonWrapper>Members</ButtonWrapper>
      <ButtonWrapper>
        Events
        <Chip
          size="small"
          variant="filled"
          color="primary"
          sx={{ ml: 1 }}
          label={5}
        />
      </ButtonWrapper>
      <ButtonWrapper>Settings</ButtonWrapper>
    </Stack>
  );
};

export default Menu;
