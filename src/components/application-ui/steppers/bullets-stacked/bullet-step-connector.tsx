import { StepConnector, stepConnectorClasses, styled } from '@mui/material';

export const BulletStepConnector = styled(StepConnector)(({ theme }) => ({
  marginLeft: 8,
  marginTop: 0,
  marginBottom: 10,
  [`& .${stepConnectorClasses.line}`]: {
    minHeight: 40,
  },

  [`&.${stepConnectorClasses.active}`]: {
    marginTop: -40,
    marginBottom: 14,

    [`& .${stepConnectorClasses.line}`]: {
      height: 40,
      background: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    marginTop: -40,

    [`& .${stepConnectorClasses.line}`]: {
      height: 40,

      background: theme.palette.primary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    width: 1,
    border: 0,
    background:
      theme.palette.mode === 'dark' ? theme.palette.neutral[800] : theme.palette.neutral[400],
  },
}));
