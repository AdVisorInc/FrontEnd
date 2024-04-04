import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { type FC, type ReactNode } from 'react';
import { useSidebarContext } from 'src/contexts/sidebar-context';
import { useMobileNav } from 'src/hooks/use-mobile-nav';
import { MenuItem } from 'src/router/menuItem';
import { HEADER_HEIGHT, SIDEBAR_WIDTH, SIDEBAR_WIDTH_COLLAPSED } from 'src/theme/utils';
import { Header } from './header';
import { Sidebar } from './sidebar';

interface VerticalShellsAccentHeaderProps {
  children?: ReactNode;
  menuItems?: MenuItem[];
}

export const VerticalShellsAccentHeader: FC<VerticalShellsAccentHeaderProps> = (props) => {
  const { children, menuItems } = props;
  const mobileNav = useMobileNav();

  const { isSidebarCollapsed } = useSidebarContext();

  return (
    <>
      <Header onMobileNav={mobileNav.handleOpen} />
      <Box
        flex={1}
        display="flex"
        sx={{
          pt: `${HEADER_HEIGHT * 1.3}px`,
          backgroundColor: 'background.paper',
        }}
      >
        <Sidebar
          menuItems={menuItems}
          onClose={mobileNav.handleClose}
          onOpen={mobileNav.handleOpen}
          open={mobileNav.open}
        />
        <Box
          flex={1}
          overflow="hidden"
          sx={{
            position: 'relative',
            zIndex: 1,
            ml: {
              xs: 0,
              lg: isSidebarCollapsed ? `${SIDEBAR_WIDTH_COLLAPSED}px` : `${SIDEBAR_WIDTH}px`,
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

VerticalShellsAccentHeader.propTypes = {
  children: PropTypes.node,
  menuItems: PropTypes.array,
};
