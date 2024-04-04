import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { FC, ReactNode } from 'react';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
