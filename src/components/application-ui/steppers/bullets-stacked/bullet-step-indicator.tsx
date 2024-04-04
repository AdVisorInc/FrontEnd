import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import { Avatar, Badge, StepIconProps, useTheme } from '@mui/material';
import React from 'react';
import { RingBadge } from 'src/components/base/styles/ring-badge';

export const BulletStepIndicator: React.FC<StepIconProps> = (props) => {
  const { active, completed } = props;
  const theme = useTheme();

  if (completed) {
    return (
      <Avatar
        sx={{
          width: 17,
          height: 17,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        }}
      >
        <CheckTwoToneIcon fontSize="inherit" />
      </Avatar>
    );
  }
  if (active) {
    return (
      <Avatar
        sx={{
          width: 17,
          height: 17,
          backgroundColor: 'inherit',
        }}
      >
        <RingBadge
          badgeContent=" "
          variant="dot"
          color={active ? 'primary' : 'secondary'}
          sx={{
            opacity: active ? 1 : 0.5,
          }}
        />
      </Avatar>
    );
  }

  return (
    <Avatar
      sx={{
        width: 17,
        height: 17,
        backgroundColor: 'inherit',
      }}
    >
      <Badge
        badgeContent=" "
        variant="dot"
        color="secondary"
        sx={{
          opacity: 0.3,
        }}
      />
    </Avatar>
  );
};
