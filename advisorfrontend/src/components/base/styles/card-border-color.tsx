import { Card, styled } from '@mui/material';
import { ReactNode } from 'react';

export type BorderColor = 'primary' | 'error' | 'success' | 'secondary' | 'warning' | 'info';
type BorderPosition = 'top' | 'bottom';

interface CardBorderColorProps {
  borderColor?: BorderColor;
  borderPosition?: BorderPosition;
  children?: ReactNode;
}

export const CardBorderColor = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'borderColor' && prop !== 'borderPosition',
})<CardBorderColorProps>(({ theme, borderColor, borderPosition }) => {
  const computedColor = borderColor ? theme.palette[borderColor].main : theme.palette.primary.main;
  const defaultBorderPosition = borderPosition || 'bottom';

  const styles: any = {
    position: 'relative',
    overflow: 'visible',

    '&::before': {
      position: 'absolute',
      content: '""',
      height: '6px',

      left: '-1px',
      width: 'calc(100% + 2px)',
      backgroundColor: computedColor,

      ...(defaultBorderPosition === 'top'
        ? {
            borderTopLeftRadius: 'inherit',
            borderTopRightRadius: 'inherit',
            top: '-1px',
          }
        : {
            bottom: '-2px',
            borderBottomLeftRadius: 'inherit',
            borderBottomRightRadius: 'inherit',
          }),
    },
  };

  return styles;
});
