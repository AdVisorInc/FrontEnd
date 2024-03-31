import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Stack,
  styled,
  SwipeableDrawer,
  Theme,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import { FC } from 'react';
import { NotificationsHeader } from 'src/components/application-ui/drawers/notifications/notifications-header';
import { WidgetsHeader } from 'src/components/application-ui/drawers/widgets/widgets-header';
import { ComposedDropdown } from 'src/components/application-ui/dropdowns/composed/composed-dropdown';
import LanguageDropdown from 'src/components/application-ui/dropdowns/language/language-dropdown';
import { ProfileDropdown } from 'src/components/application-ui/dropdowns/profile/profile-dropdown';
import { BasicSpotlightSearch } from 'src/components/application-ui/navigation-overlays/basic/basic-search-overlay';
import { SidebarNavMenu } from 'src/components/application-ui/vertical-shells/dark/sidebar-nav-menu';
import CustomizationButton from 'src/components/base/customization';
import { Logo } from 'src/components/base/logo';
import { Scrollbar } from 'src/components/base/scrollbar';
import { DividerLight } from 'src/components/base/styles/card';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';
import { useDialog } from 'src/hooks/use-dialog';
import { usePopover } from 'src/hooks/use-popover';
import { MenuItem } from 'src/router/menuItem';
import { SIDEBAR_WIDTH } from 'src/theme/utils';
import { Menu } from './menu';

const HeaderWrapper = styled(AppBar)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  background: 'transparent',
  color: theme.palette.neutral[300],
  zIndex: 6,
}));

interface HeaderProps {
  onClose?: () => void;
  menuItems?: MenuItem[];
  onOpen?: () => void;
  open?: boolean;
}

const SidebarWrapper = styled(Box)({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

export const Header: FC<HeaderProps> = (props) => {
  const { onClose, onOpen, menuItems, open, ...other } = props;
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const popover = usePopover<HTMLButtonElement>();
  const popoverChat = usePopover<HTMLButtonElement>();
  const theme = useTheme();
  const notifications = useDialog();
  const widgets = useDialog();
  const dialog = useDialog();

  const user = {
    avatar: '/avatars/3.png',
    name: 'Ethan Donovan',
    jobtitle: 'Principal Engineer',
  };

  const sidebarContentMobile = (
    <SidebarWrapper
      component="nav"
      role="navigation"
      sx={{
        width: SIDEBAR_WIDTH,
      }}
    >
      <Box
        p={2}
        display="flex"
        justifyContent={{ xs: 'flex-start', lg: 'space-between' }}
        alignItems="center"
      >
        <Logo
          dark
          isLinkStatic
        />
      </Box>

      <Box
        flex={1}
        overflow="auto"
        position="relative"
        zIndex={6}
      >
        <Scrollbar dark>
          <SidebarNavMenu menuItems={menuItems} />
        </Scrollbar>
      </Box>
    </SidebarWrapper>
  );

  return (
    <>
      <HeaderWrapper
        role="banner"
        elevation={0}
      >
        <Stack
          py={3}
          flex={1}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            direction="row"
            divider={
              <DividerLight
                sx={{
                  height: 24,
                  alignSelf: 'center',
                }}
                orientation="vertical"
                flexItem
              />
            }
            alignItems="center"
            spacing={2}
          >
            <Box sx={{ transform: 'scale(.86)' }}>
              <Logo
                dark
                isLinkStatic
              />
            </Box>
            {lgUp && <Menu menuItems={menuItems} />}
          </Stack>
          <Stack
            direction="row"
            divider={
              <DividerLight
                sx={{
                  height: 24,
                  alignSelf: 'center',
                }}
                orientation="vertical"
                flexItem
              />
            }
            alignItems="center"
            spacing={{ xs: 1, sm: 2 }}
          >
            <Stack
              display="flex"
              spacing={1}
              direction="row"
              alignItems="center"
            >
              {smUp && (
                <>
                  <IconButton
                    color="inherit"
                    onClick={dialog.handleOpen}
                    sx={{
                      '&:hover': {
                        background: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                      },
                      p: 1,
                      '& .MuiSvgIcon-root': {
                        fontSize: 22,
                      },
                    }}
                  >
                    <SearchRoundedIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      '&:hover': {
                        background: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                      },
                      p: 1,
                      '& .MuiSvgIcon-root': {
                        fontSize: 22,
                      },
                    }}
                    color="inherit"
                    onClick={widgets.handleOpen}
                  >
                    <WidgetsOutlinedIcon />
                  </IconButton>
                  <IconButton
                    id="chat-button"
                    sx={{
                      '&:hover': {
                        background: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                      },
                      p: 1,
                      '& .MuiSvgIcon-root': {
                        fontSize: 22,
                      },
                    }}
                    color="inherit"
                    aria-controls={popoverChat.open ? 'chat-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={popoverChat.open ? 'true' : undefined}
                    onClick={popoverChat.handleOpen}
                    ref={popoverChat.anchorRef}
                  >
                    <ChatBubbleOutlineRoundedIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      '&:hover': {
                        background: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                      },
                      p: 1,
                      '& .MuiSvgIcon-root': {
                        fontSize: 22,
                      },
                    }}
                    color="inherit"
                    onClick={notifications.handleOpen}
                  >
                    <PulseBadge
                      sx={{
                        '& .MuiBadge-badge': {
                          boxShadow: 'none',
                        },
                      }}
                      overlap="rectangular"
                      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                      variant="dot"
                      color="success"
                    >
                      <NotificationsNoneRoundedIcon />
                    </PulseBadge>
                  </IconButton>
                  <LanguageDropdown
                    sx={{
                      '&:hover': {
                        background: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                      },
                      p: 1,
                      '& .MuiSvgIcon-root': {
                        fontSize: 22,
                      },
                    }}
                  />
                </>
              )}
              <CustomizationButton
                sx={{
                  '&:hover': {
                    background: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  },
                  p: 1,
                  '& .MuiSvgIcon-root': {
                    fontSize: 22,
                  },
                }}
              />
            </Stack>

            <IconButton
              id="profile-button"
              sx={{
                p: 0,
                '&:hover': {
                  boxShadow: `0 0 0 3px ${theme.palette.primary.main}`,
                },
              }}
              color="primary"
              aria-controls={popover.open ? 'profile-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={popover.open ? 'true' : undefined}
              onClick={popover.handleOpen}
              ref={popover.anchorRef}
            >
              <Avatar
                alt={user.name}
                src={user.avatar}
                sx={{
                  borderRadius: 'inherit',
                  height: 36,
                  width: 36,
                }}
              />
            </IconButton>
            {!lgUp && (
              <IconButton
                onClick={onOpen}
                color="inherit"
                sx={{
                  '&:hover': {
                    background: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  },
                  p: 1,
                  '& .MuiSvgIcon-root': {
                    fontSize: 22,
                  },
                }}
              >
                <MenuRoundedIcon />
              </IconButton>
            )}
          </Stack>
          <BasicSpotlightSearch
            onClose={dialog.handleClose}
            open={dialog.open}
          />
          <WidgetsHeader
            onClose={widgets.handleClose}
            onOpen={widgets.handleOpen}
            open={widgets.open}
          />
          <NotificationsHeader
            onClose={notifications.handleClose}
            onOpen={notifications.handleOpen}
            open={notifications.open}
          />
          <ProfileDropdown
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            anchorEl={popover.anchorRef.current}
            onClose={popover.handleClose}
            open={popover.open}
          />
          <ComposedDropdown
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            anchorEl={popoverChat.anchorRef.current}
            onClose={popoverChat.handleClose}
            open={popoverChat.open}
          />
        </Stack>
      </HeaderWrapper>
      {!lgUp && (
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
              backgroundColor: 'neutral.900',
              boxShadow: (theme) => theme.shadows[0],
            },
          }}
          variant="temporary"
          {...other}
        >
          {sidebarContentMobile}
        </SwipeableDrawer>
      )}
    </>
  );
};

Header.propTypes = {
  onClose: PropTypes.func,
  menuItems: PropTypes.array,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
};
