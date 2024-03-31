import { alpha, StepButton, styled } from '@mui/material';

export const StepButtonLine = styled(StepButton)(({ theme }) => ({
  '.MuiStepLabel-label': { fontWeight: 600, marginTop: '0 !important' },
  height: 40,
  width: 'auto',
  paddingTop: 0,
  paddingBottom: 0,

  '&:hover': {
    backgroundColor: alpha(theme.palette.secondary.main, 0.03),
    color: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
  },
}));
