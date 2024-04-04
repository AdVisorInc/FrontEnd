import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import { Avatar, Badge, StepIconProps, useTheme } from '@mui/material';
import React from 'react';

export const CircleStepIndicator: React.FC<StepIconProps> = (props) => {
  const { active, completed } = props;
  const theme = useTheme();

  if (completed) {
    return (
      <Avatar
        sx={{
          width: 34,
          height: 34,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          border: `2px solid ${theme.palette.primary.main}`,
        }}
      >
        <CheckTwoToneIcon fontSize="small" />
      </Avatar>
    );
  }
  if (active) {
    return (
      <Avatar
        sx={{
          width: 34,
          height: 34,
          backgroundColor: 'inherit',
          border: `2px solid ${theme.palette.primary.main}`,
        }}
      >
        <Badge
          badgeContent=" "
          variant="dot"
          color={active ? 'primary' : 'secondary'}
          sx={{
            '.MuiBadge-badge': {
              width: 10,
              height: 10,
              borderRadius: '50%',
            },
            opacity: active ? 1 : 0.5,
          }}
        />
      </Avatar>
    );
  }

  return (
    <Avatar
      sx={{
        width: 34,
        height: 34,
        backgroundColor: 'inherit',
        border:
          theme.palette.mode === 'dark'
            ? `2px solid ${theme.palette.neutral[800]}`
            : `2px solid ${theme.palette.neutral[400]}`,
      }}
    >
      {' '}
    </Avatar>
  );
};
