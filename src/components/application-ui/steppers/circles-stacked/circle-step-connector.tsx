import { StepConnector, stepConnectorClasses, styled } from '@mui/material';

export const CircleStepConnector = styled(StepConnector)(({ theme }) => ({
  marginLeft: 16,
  marginTop: 0,
  marginBottom: 0,
  [`& .${stepConnectorClasses.line}`]: {
    minHeight: 42,
  },

  [`&.${stepConnectorClasses.active}`]: {
    marginTop: -32,

    [`& .${stepConnectorClasses.line}`]: {
      height: 42,
      background: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    marginTop: -32,

    [`& .${stepConnectorClasses.line}`]: {
      height: 42,

      background: theme.palette.primary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    width: 2,
    border: 0,
    background:
      theme.palette.mode === 'dark' ? theme.palette.neutral[800] : theme.palette.neutral[400],
  },
}));
