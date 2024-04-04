import { StepConnector, stepConnectorClasses, styled } from '@mui/material';

export const LineStepConnector = styled(StepConnector)(({ theme }) => ({
  marginLeft: 12,
  marginRight: 12,

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
