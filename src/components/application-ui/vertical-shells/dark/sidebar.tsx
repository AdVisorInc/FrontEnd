import KeyboardArrowLeftTwoToneIcon from '@mui/icons-material/KeyboardArrowLeftTwoTone';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import {
  alpha,
  Box,
  Drawer,
  IconButton,
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
import TenantSwitcher from './sidebar-tenant-switcher';

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

  const sampleTenants = [
    {
      id: 1,
      name: 'TechSolutions',
      logo: '/placeholders/logo/adobe.jpg',
      description: 'A leading tech consultancy firm.',
    },
    {
      id: 2,
      name: 'GreenGrocers',
      logo: '/placeholders/logo/ibm.jpg',
      description: 'Organic produce suppliers since 1990.',
    },
    {
      id: 3,
      name: 'UrbanArch',
      logo: '/placeholders/logo/oracle.jpg',
      description: 'Modern architectural designs and solutions.',
    },
  ];

  const [currentTenant, setCurrentTenant] = useState(sampleTenants[0]);

  const handleTenantSwitch = (tenant: any) => {
    setCurrentTenant(tenant);
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

          height: '250px',
          position: 'absolute',
          bottom: '-95px',
          right: '-85px',
          display: 'block',
        },
      }}
    >
      <Box
        p={2}
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
          <TenantSwitcher
            sidebarCollapsed={isSidebarCollapsed}
            isHovered={isSidebarHovered}
            tenants={sampleTenants}
            currentTenant={currentTenant}
            onSwitch={handleTenantSwitch}
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
      {mdUp && isSidebarCollapsed ? isSidebarHovered && <SidebarFooter /> : <SidebarFooter />}
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
            backgroundColor: 'neutral.900',
            width: isSidebarCollapsed
              ? isSidebarHovered
                ? SIDEBAR_WIDTH
                : SIDEBAR_WIDTH_COLLAPSED
              : SIDEBAR_WIDTH,
            boxShadow: (theme) =>
              isSidebarCollapsed
                ? isSidebarHovered
                  ? theme.shadows[24]
                  : theme.shadows[0]
                : theme.shadows[0],

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
  menuItems: PropTypes.array,
};
