import { Box, SxProps, Theme, useTheme } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Scrollbar } from 'src/components/base/scrollbar';

interface ScrollableContainerProps {
  height?: number;
  children?: ReactNode;
  useCustomScrollbar?: boolean;
  sx?: SxProps<Theme>;
}

export const ScrollableContainer: FC<ScrollableContainerProps> = (props) => {
  const { height, children, useCustomScrollbar, ...other } = props;
  const theme = useTheme();

  const isDarkMode = theme.palette.mode === 'dark';

  const content = useCustomScrollbar ? (
    <Scrollbar dark={isDarkMode}>{children}</Scrollbar>
  ) : (
    children
  );

  return (
    <Box
      overflow="auto"
      height={height ? height : 256}
      {...other}
    >
      {content}
    </Box>
  );
};

export default ScrollableContainer;
