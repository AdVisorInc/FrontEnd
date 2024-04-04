import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { type FC, type ReactNode } from 'react';
import { useMobileNav } from 'src/hooks/use-mobile-nav';
import { MenuItem } from 'src/router/menuItem';
import { HEADER_HEIGHT } from 'src/theme/utils';
import { Header } from './header';
import { Sidebar } from './sidebar';

interface CollapsedShellsDoubleDarkProps {
  children?: ReactNode;
  menuItems?: MenuItem[];
}

export const CollapsedShellsDoubleDark: FC<CollapsedShellsDoubleDarkProps> = (props) => {
  const { children, menuItems } = props;
  const mobileNav = useMobileNav();

  return (
    <>
      <Sidebar
        menuItems={menuItems}
        onClose={mobileNav.handleClose}
        open={mobileNav.open}
        onOpen={mobileNav.handleOpen}
      />
      <Box
        flex={1}
        overflow="hidden"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: `${HEADER_HEIGHT * 1.5}px`,
        }}
      >
        <Header onMobileNav={mobileNav.handleOpen} />
        {children}
      </Box>
    </>
  );
};

CollapsedShellsDoubleDark.propTypes = {
  children: PropTypes.node,
  menuItems: PropTypes.array,
};