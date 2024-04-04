import { Card, styled } from '@mui/material';
import { ReactNode } from 'react';

type indicatorColor = 'primary' | 'error' | 'success' | 'secondary' | 'warning' | 'info';

interface CardIndicatorColorProps {
  indicatorColor?: indicatorColor;
  children?: ReactNode;
}

export const CardIndicatorColor = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'indicatorColor' && prop !== 'borderPosition',
})<CardIndicatorColorProps>(({ theme, indicatorColor }) => {
  const computedColor = indicatorColor
    ? theme.palette[indicatorColor].main
    : theme.palette.primary.main;

  const styles: any = {
    position: 'relative',
    overflow: 'visible',

    '&::before': {
      borderRadius: 'inherit',
      position: 'absolute',
      content: '""',
      height: '60%',
      top: '20%',

      left: -4,
      width: 7,
      backgroundColor: computedColor,
    },
  };

  return styles;
});
