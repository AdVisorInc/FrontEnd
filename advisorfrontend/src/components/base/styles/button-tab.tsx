import { alpha, Button, ButtonProps, lighten, styled, Tab, TabProps, Theme } from '@mui/material';
import React from 'react';

interface BaseButtonTabProps {
  componentType: 'tab' | 'button';
  children?: React.ReactNode;
}

type ButtonTabProps =
  | (BaseButtonTabProps & TabProps & { componentType: 'tab' })
  | (BaseButtonTabProps & ButtonProps & { componentType: 'button' });

const commonStyles = (theme: Theme) => ({
  fontSize: 15,
  letterSpacing: -0.025,
  fontWeight: 600,
  padding: theme.spacing(1, 2.2),
  color: theme.palette.mode === 'dark' ? theme.palette.neutral[500] : theme.palette.neutral[800],
  background:
    theme.palette.mode === 'dark'
      ? alpha(theme.palette.neutral[25], 0.01)
      : theme.palette.neutral[25],
  borderRadius: 0,
  borderTopLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius,
  border:
    theme.palette.mode === 'dark'
      ? `1px solid ${alpha(theme.palette.neutral[800], 0.3)}`
      : `1px solid ${theme.palette.neutral[300]}`,
  marginLeft: 0,
  marginRight: theme.spacing(1),
  borderBottom: 0,
  '&::after': {
    height: 0,
    content: '""',
    width: '100%',
    position: 'absolute',
    bottom: -2,
    left: 0,
    background:
      theme.palette.mode === 'dark'
        ? lighten(theme.palette.neutral[900], 0.035)
        : theme.palette.common.white,
  },
  '&:hover': {
    color: theme.palette.mode === 'dark' ? theme.palette.neutral[200] : theme.palette.neutral[900],
    borderColor:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.neutral[700], 0.5)
        : theme.palette.neutral[400],
    background:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.background.paper, 0.6)
        : theme.palette.common.white,
  },
  '&.Mui-selected': {
    color: theme.palette.mode === 'dark' ? theme.palette.neutral[25] : theme.palette.neutral[900],
    background:
      theme.palette.mode === 'dark'
        ? lighten(theme.palette.neutral[900], 0.035)
        : theme.palette.common.white,
    borderColor:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.neutral[600], 0.4)
        : theme.palette.neutral[400],
    '&::after': {
      height: 2,
    },
  },
});

const StyledTab = styled(Tab)(({ theme }) => ({
  ...commonStyles(theme),
  overflow: 'visible',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  ...commonStyles(theme),
}));

const BaseButtonTab: React.FC<ButtonTabProps> = (props) => {
  const { componentType, children, ...otherProps } = props;

  return componentType === 'tab' ? (
    <StyledTab {...(otherProps as TabProps)} />
  ) : (
    <StyledButton {...(otherProps as ButtonProps)}>{children}</StyledButton>
  );
};

export default BaseButtonTab;
