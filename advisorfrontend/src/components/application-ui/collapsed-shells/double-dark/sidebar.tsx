import {
  alpha,
  Box,
  Drawer,
  lighten,
  styled,
  SwipeableDrawer,
  Theme,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import { FC, useState } from 'react';
import { MenuItem } from 'src/router/menuItem';
import { neutral } from 'src/theme/colors';
import { SIDEBAR_WIDTH } from 'src/theme/utils';
import { Menu } from './menu';
import SubMenu from './sub-menu';

const SidebarWrapper = styled(Box)({
  height: '100vh',
  color: neutral[200],
  display: 'flex',
  flexDirection: 'column',
});

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

  const theme = useTheme();

  const sidebarContent = (
    <SidebarWrapper
      component="nav"
      role="navigation"
      sx={{
        width: SIDEBAR_WIDTH * 1.2,
        '&::before': {
          content: '""',
          backgroundImage: `radial-gradient(circle, ${alpha(
            alpha(theme.palette.neutral[50], 0.5),
            0.06
          )} 0%, transparent 65%)`,
          width: '280px',

          height: '250px',
          position: 'absolute',
          top: '-95px',
          left: '-85px',
          display: 'block',
        },

        [theme.breakpoints.up('md')]: {
          '&::after': {
            content: '""',
            backgroundImage: `radial-gradient(circle, ${alpha(
              theme.palette.neutral[50],
              0.1
            )} 0%, transparent 65%)`,
            width: '280px',

            height: '250px',
            position: 'absolute',
            bottom: '-95px',
            right: '-85px',
            display: 'block',
          },
        },
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
            backgroundColor: 'neutral.900',
            borderLeft: `1px solid ${alpha(lighten(neutral[900], 0.2), 0.4)}`,
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
        sx={{
          backgroundColor: 'neutral.900',
          zIndex: 6,
        }}
        PaperProps={{
          sx: {
            overflow: 'hidden',
            border: 0,
            background: alpha(lighten(neutral[900], 0.1), 0.2),
            width: SIDEBAR_WIDTH * 1.2,
            position: 'sticky',
            height: '100vh',
            transition: (theme) => theme.transitions.create(['width', 'box-shadow']),
            borderRight:
              theme.palette.mode === 'dark' &&
              `1px solid ${alpha(theme.palette.neutral[800], 0.5)}`,
          },
        }}
        variant="persistent"
        {...other}
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
          backgroundColor: 'neutral.900',
          overflow: 'hidden',
          boxShadow: (theme) => theme.shadows[24],
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
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
