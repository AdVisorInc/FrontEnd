import { StepConnector, stepConnectorClasses, styled } from '@mui/material';

export const CircleStepConnector = styled(StepConnector)(({ theme }) => ({
  left: `calc(-50% + 17px)`,
  right: `calc(50% + 17px)`,

  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 16,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: theme.palette.primary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    background:
      theme.palette.mode === 'dark' ? theme.palette.neutral[800] : theme.palette.neutral[400],
  },
}));
