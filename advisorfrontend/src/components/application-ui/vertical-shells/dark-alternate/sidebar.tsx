import KeyboardArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardArrowLeftTwoTone';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import {
  alpha,
  Box,
  Divider,
  Drawer,
  IconButton,
  lighten,
  styled,
  SwipeableDrawer,
  Theme,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import { FC, useState } from 'react';
import { Logo } from 'src/components/base/logo';
import { Scrollbar } from 'src/components/base/scrollbar';
import { useSidebarContext } from 'src/contexts/sidebar-context';
import { MenuItem } from 'src/router/menuItem';
import { neutral } from 'src/theme/colors';
import { SIDEBAR_WIDTH, SIDEBAR_WIDTH_COLLAPSED } from 'src/theme/utils';
import SidebarFooter from './sidebar-footer';
import { SidebarNavMenu } from './sidebar-nav-menu';
import { SidebarNavMenuCollapsed } from './sidebar-nav-menu-collapsed';

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

  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  const sampleUsers = [
    {
      id: 1,
      name: 'Benjamin Wallace',
      avatar: '/avatars/4.png',
      userRole: 'Software Engineer',
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: '/avatars/3.png',
      userRole: 'Product Manager',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      avatar: '/avatars/2.png',
      userRole: 'UX Designer',
    },
    {
      id: 4,
      name: 'Robert Brown',
      avatar: '/avatars/1.png',
      userRole: 'Data Scientist',
    },
    {
      id: 5,
      name: 'Lucy Williams',
      avatar: '/avatars/5.png',
      userRole: 'Business Analyst',
    },
  ];

  const [currentUser, setCurrentUser] = useState(sampleUsers[0]);

  const handleUserSwitch = (tenant: any) => {
    setCurrentUser(tenant);
  };

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
        background: alpha(theme.palette.primary.main, 0.03),
        width:
          mdUp && isSidebarCollapsed
            ? isSidebarHovered
              ? SIDEBAR_WIDTH
              : SIDEBAR_WIDTH_COLLAPSED
            : SIDEBAR_WIDTH,

        '&::before': {
          content: '""',
          backgroundImage: `radial-gradient(circle, ${alpha(
            theme.palette.primary.main,
            0.06
          )} 0%, transparent 65%)`,
          width: '280px',
          opacity: theme.palette.mode === 'dark' ? 0.3 : 1,

          height: '250px',
          position: 'absolute',
          top: '-95px',
          left: '-85px',
          display: 'block',
        },
        '&::after': {
          content: '""',
          backgroundImage: `radial-gradient(circle, ${alpha(
            theme.palette.primary.main,
            0.08
          )} 0%, transparent 65%)`,
          width: '280px',
          opacity: theme.palette.mode === 'dark' ? 0.3 : 1,

          height: '250px',
          position: 'absolute',
          bottom: '100px',
          right: '-85px',
          display: 'block',
        },
      }}
    >
      <Box
        px={2}
        py={2.5}
        display="flex"
        justifyContent={{
          xs: 'flex-start',
          lg:
            mdUp && isSidebarCollapsed
              ? isSidebarHovered
                ? 'space-between'
                : 'center'
              : 'space-between',
        }}
        alignItems="center"
      >
        <Logo
          dark
          isLinkStatic
        />
        {lgUp && (
          <IconButton
            sx={{
              display: mdUp && isSidebarCollapsed ? (isSidebarHovered ? 'flex' : 'none') : 'flex',

              color: neutral[400],
              textAlign: 'left',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'transparent',

              '&:hover': {
                background: alpha(neutral[700], 0.2),
                color: neutral[200],
                borderColor: alpha(neutral[700], 0.2),
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
          <Divider
            sx={{
              mb: 2,
              mx: 2,
              borderColor: alpha(theme.palette.common.white, 0.08),
            }}
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
      {mdUp && isSidebarCollapsed ? (
        isSidebarHovered && (
          <SidebarFooter
            sidebarCollapsed={isSidebarCollapsed}
            isHovered={isSidebarHovered}
            users={sampleUsers}
            currentUser={currentUser}
            onSwitch={handleUserSwitch}
          />
        )
      ) : (
        <SidebarFooter
          sidebarCollapsed={isSidebarCollapsed}
          isHovered={isSidebarHovered}
          users={sampleUsers}
          currentUser={currentUser}
          onSwitch={handleUserSwitch}
        />
      )}
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
            borderRight:
              theme.palette.mode === 'dark' && `1px solid ${alpha(theme.palette.divider, 0.6)}`,
            background:
              theme.palette.mode === 'dark'
                ? lighten(neutral[900], 0.016)
                : lighten(neutral[900], 0.07),
            width: isSidebarCollapsed
              ? isSidebarHovered
                ? SIDEBAR_WIDTH
                : SIDEBAR_WIDTH_COLLAPSED
              : SIDEBAR_WIDTH,
            boxShadow: (theme) =>
              isSidebarCollapsed
                ? isSidebarHovered
                  ? theme.shadows[24]
                  : theme.shadows[9]
                : theme.shadows[9],

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
              ? lighten(neutral[900], 0.016)
              : lighten(neutral[900], 0.07),
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
