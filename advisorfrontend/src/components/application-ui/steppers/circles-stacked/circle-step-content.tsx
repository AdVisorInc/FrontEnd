import { StepContent, styled } from '@mui/material';

export const CircleStepContent = styled(StepContent)(({ theme }) => ({
  marginLeft: 16,
  paddingLeft: 24,
  paddingTop: 32,
  marginTop: -14,
  borderLeft:
    theme.palette.mode === 'dark'
      ? `2px solid ${theme.palette.neutral[800]}`
      : `2px solid ${theme.palette.neutral[400]}`,

  '&.MuiStepContent-last': {
    borderLeftColor: 'transparent',
  },
}));
