import KeyboardArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardArrowLeftTwoTone';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import {
  Box,
  Drawer,
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
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { useSidebarContext } from 'src/contexts/sidebar-context';
import { MenuItem } from 'src/router/menuItem';
import { neutral } from 'src/theme/colors';
import { HEADER_HEIGHT, SIDEBAR_WIDTH, SIDEBAR_WIDTH_COLLAPSED } from 'src/theme/utils';
import SidebarFooter from './sidebar-footer';
import { SidebarNavMenu } from './sidebar-nav-menu';
import { SidebarNavMenuCollapsed } from './sidebar-nav-menu-collapsed';

const SidebarWrapper = styled(Box)({
  height: '100%',
  color: neutral[700],
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
      {mdUp ? (
        <Box
          px={2}
          pt={2}
          display="flex"
          justifyContent={{ xs: 'flex-start', lg: 'space-between' }}
          alignItems="center"
        >
          <ButtonIcon
            sx={{
              opacity: isSidebarCollapsed ? (isSidebarHovered ? 1 : 0) : 1,
              visibility: isSidebarCollapsed
                ? isSidebarHovered
                  ? 'initial'
                  : 'hidden'
                : 'initial',
            }}
            size="small"
            variant="outlined"
            color="primary"
            startIcon={
              isSidebarCollapsed ? (
                <KeyboardArrowRightTwoToneIcon fontSize="small" />
              ) : (
                <KeyboardArrowLeftTwoToneIcon fontSize="small" />
              )
            }
            onClick={handleCollapseSidebar}
          />
        </Box>
      ) : (
        <Box
          px={2}
          py={1}
        >
          <Logo isLinkStatic />
        </Box>
      )}
      <Box
        flex={1}
        overflow="auto"
        position="relative"
        zIndex={6}
      >
        <Scrollbar dark>
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
            background: theme.palette.background.paper,
            width: isSidebarCollapsed
              ? isSidebarHovered
                ? SIDEBAR_WIDTH
                : SIDEBAR_WIDTH_COLLAPSED
              : SIDEBAR_WIDTH,
            boxShadow: (theme) =>
              isSidebarCollapsed
                ? isSidebarHovered
                  ? theme.shadows[16]
                  : theme.shadows[7]
                : theme.shadows[7],

            position: isSidebarCollapsed ? 'fixed' : 'sticky',
            pt: isSidebarCollapsed ? (isSidebarHovered ? `${HEADER_HEIGHT * 1.3}px` : 0) : 0,
            height: `calc(100vh - ${isSidebarCollapsed ? 0 : HEADER_HEIGHT * 1.3}px)`,
            transition: (theme) => theme.transitions.create(['width', 'box-shadow']),
          },
        }}
        sx={{
          position: 'fixed',
          zIndex: 3,
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
      PaperProps={{
        sx: {
          overflow: 'hidden',
          background: theme.palette.background.paper,
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
  onClose: PropTypes.func,
  open: PropTypes.bool,
  menuItems: PropTypes.array,
};
