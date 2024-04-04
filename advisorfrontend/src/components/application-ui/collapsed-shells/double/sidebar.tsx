import { alpha, Box, Drawer, styled, SwipeableDrawer, Theme, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import { FC, useState } from 'react';
import { MenuItem } from 'src/router/menuItem';
import { SIDEBAR_WIDTH } from 'src/theme/utils';
import { Menu } from './menu';
import SubMenu from './sub-menu';

const SidebarWrapper = styled(Box)(({ theme }) => ({
  height: '100vh',
  color: theme.palette.neutral[200],
  display: 'flex',
  flexDirection: 'column',
}));

interface SidebarProps {
  onClose?: () => void;
  onOpen?: () => void;
  open?: boolean;
  menuItems?: MenuItem[];
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { onClose, onOpen, menuItems, open, ...other } = props;
  const [activeSubMenu, setActiveSubMenu] = useState<MenuItem | null>(null);

  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  const sidebarContent = (
    <SidebarWrapper
      component="nav"
      role="navigation"
      sx={{
        width: SIDEBAR_WIDTH * 1.2,
      }}
    >
      <Box
        flex={1}
        overflow="hidden"
        position="relative"
        zIndex={6}
        height="100%"
        display="flex"
        flexDirection="row"
      >
        <Box
          display="flex"
          flexDirection="column"
          overflow="auto"
        >
          <Menu
            menuItems={menuItems}
            setSubMenu={setActiveSubMenu}
          />
        </Box>
        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          overflow="auto"
          sx={{
            borderRight: (theme) =>
              theme.palette.mode === 'dark'
                ? `1px solid ${alpha(theme.palette.neutral[800], 0.5)}`
                : `1px solid ${theme.palette.neutral[200]}`,
            borderLeft: (theme) =>
              theme.palette.mode === 'dark'
                ? `1px solid ${alpha(theme.palette.neutral[800], 0.5)}`
                : `1px solid ${theme.palette.neutral[200]}`,
          }}
        >
          <SubMenu submenu={activeSubMenu} />
        </Box>
      </Box>
    </SidebarWrapper>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            overflow: 'hidden',
            border: 0,
            width: SIDEBAR_WIDTH * 1.2,

            position: 'sticky',
            height: '100vh',
          },
        }}
        variant="persistent"
        {...other}
        sx={{ zIndex: 6 }}
      >
        {sidebarContent}
      </Drawer>
    );
  }

  return (
    <SwipeableDrawer
      anchor="left"
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      ModalProps={{
        keepMounted: true,
      }}
      PaperProps={{
        sx: {
          overflow: 'hidden',
          boxShadow: (theme) => theme.shadows[16],
        },
      }}
      variant="temporary"
      {...other}
    >
      {sidebarContent}
    </SwipeableDrawer>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
};
