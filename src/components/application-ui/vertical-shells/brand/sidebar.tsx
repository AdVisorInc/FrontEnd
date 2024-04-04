import KeyboardArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardArrowLeftTwoTone';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import {
  alpha,
  Box,
  darken,
  Drawer,
  IconButton,
  styled,
  SwipeableDrawer,
  Theme,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import { FC } from 'react';
import { Logo } from 'src/components/base/logo';
import { Scrollbar } from 'src/components/base/scrollbar';
import { useSidebarContext } from 'src/contexts/sidebar-context';
import { MenuItem } from 'src/router/menuItem';
import { neutral } from 'src/theme/colors';
import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_COLLAPSED } from 'src/theme/utils';
import { SidebarNavMenu } from './sidebar-nav-menu';
import { SidebarNavMenuCollapsed } from './sidebar-nav-menu-collapsed';
import UserAccount from './user-account';

const SidebarWrapper = styled(Box)({
  height: '100vh',
  color: neutral[50],
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

  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  const { isSidebarCollapsed, isSidebarHovered, toggleSidebarCollapsed, toggleSidebarHover } =
    useSidebarContext();

  const handleMouseEnter = () => {
    toggleSidebarHover(true);
  };

  const handleMouseLeave = () => {
    toggleSidebarHover(false);
  };

  const handleCollapseSidebar = () => {
    toggleSidebarCollapsed();
  };

  const theme = useTheme();

  const sidebarContent = (
    <SidebarWrapper
      component="nav"
      role="navigation"
      sx={{
        width:
          mdUp && isSidebarCollapsed
            ? isSidebarHovered
              ? SIDEBAR_WIDTH
              : SIDEBAR_WIDTH_COLLAPSED
            : SIDEBAR_WIDTH,
      }}
    >
      <Box
        p={2}
        display="flex"
        justifyContent={{ xs: 'flex-start', lg: 'space-between' }}
        alignItems="center"
        sx={{
          pl: mdUp && isSidebarCollapsed ? (isSidebarHovered ? 2 : 2.5) : 2,
        }}
      >
        <Logo
          dark
          isLinkStatic
        />
        {lgUp && (
          <IconButton
            sx={{
              opacity: isSidebarCollapsed ? (isSidebarHovered ? 1 : 0) : 1,
              visibility: isSidebarCollapsed
                ? isSidebarHovered
                  ? 'initial'
                  : 'hidden'
                : 'initial',

              background: alpha(theme.palette.common.white, 0.05),
              color: alpha(theme.palette.common.white, 0.95),
              '&:hover': {
                color: alpha(theme.palette.common.white, 0.95),
                background: theme.palette.primary.main,
              },
            }}
            size="small"
            onClick={handleCollapseSidebar}
          >
            {isSidebarCollapsed ? (
              <KeyboardArrowRightTwoToneIcon fontSize="small" />
            ) : (
              <KeyboardArrowLeftTwoToneIcon fontSize="small" />
            )}
          </IconButton>
        )}
      </Box>

      <Box
        flex={1}
        overflow="auto"
        position="relative"
        zIndex={6}
      >
        <Scrollbar dark>
          <UserAccount
            sidebarCollapsed={isSidebarCollapsed}
            isHovered={isSidebarHovered}
          />
          {mdUp && isSidebarCollapsed ? (
            isSidebarHovered ? (
              <SidebarNavMenu menuItems={menuItems} />
            ) : (
              <SidebarNavMenuCollapsed menuItems={menuItems} />
            )
          ) : (
            <SidebarNavMenu menuItems={menuItems} />
          )}
        </Scrollbar>
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        PaperProps={{
          sx: {
            overflow: 'hidden',
            border: 0,
            background:
              theme.palette.mode === 'dark'
                ? darken(theme.palette.primary.dark, 0.9)
                : darken(theme.palette.primary.main, 0.7),
            width: isSidebarCollapsed
              ? isSidebarHovered
                ? SIDEBAR_WIDTH
                : SIDEBAR_WIDTH_COLLAPSED
              : SIDEBAR_WIDTH,
            boxShadow: (theme) =>
              isSidebarCollapsed
                ? isSidebarHovered
                  ? theme.shadows[20]
                  : theme.shadows[8]
                : theme.shadows[8],

            position: isSidebarCollapsed ? 'fixed' : 'sticky',
            height: '100vh',
            transition: (theme) => theme.transitions.create(['width', 'box-shadow']),
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
          background:
            theme.palette.mode === 'dark'
              ? darken(theme.palette.primary.dark, 0.9)
              : darken(theme.palette.primary.main, 0.7),
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
  menuItems: PropTypes.array,
};
