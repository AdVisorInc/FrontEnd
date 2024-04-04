import { alpha, styled, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { FC, ReactNode } from 'react';
import SimpleBar from 'simplebar-react';

const ScrollbarWrapper = styled(SimpleBar)(() => ({}));

interface ScrollbarProps {
  children?: ReactNode;
  dark?: boolean;
}

export const Scrollbar: FC<ScrollbarProps> = ({ dark, children, ...rest }) => {
  const theme = useTheme();

  return (
    <ScrollbarWrapper
      autoHide
      sx={{
        height: '100%',

        '.simplebar-scrollbar': {
          '&::before': {
            background: dark
              ? theme.palette.mode === 'dark'
                ? alpha(theme.palette.neutral[800], 0.8)
                : alpha(theme.palette.neutral[500], 0.8)
              : theme.palette.mode === 'dark'
                ? alpha(theme.palette.neutral[800], 0.3)
                : alpha(theme.palette.neutral[300], 0.7),

            borderRadius: theme.shape.borderRadius,
          },
          '&.simplebar-hover': {
            '&::before': {
              background: dark
                ? theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[400], 0.3)
                  : theme.palette.neutral[400]
                : theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[800], 0.3)
                  : alpha(theme.palette.neutral[300], 0.7),
            },
          },
        },
      }}
      {...rest}
    >
      {children}
    </ScrollbarWrapper>
  );
};

Scrollbar.propTypes = {
  children: PropTypes.node,
  dark: PropTypes.bool,
};
