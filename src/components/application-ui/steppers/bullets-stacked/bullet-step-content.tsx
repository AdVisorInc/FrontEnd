import { StepContent, styled } from '@mui/material';

export const BulletStepContent = styled(StepContent)(({ theme }) => ({
  marginLeft: 8,
  paddingLeft: 18,
  paddingTop: 20,
  paddingBottom: 20,
  marginTop: 0,
  borderLeft:
    theme.palette.mode === 'dark'
      ? `1px solid ${theme.palette.neutral[800]}`
      : `1px solid ${theme.palette.neutral[400]}`,

  '&.MuiStepContent-last': {
    borderLeftColor: 'transparent',
  },
}));
