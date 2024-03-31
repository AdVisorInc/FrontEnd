import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import {
  alpha,
  AppBar,
  Avatar,
  Box,
  Divider,
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
import { SidebarNavMenu } from 'src/components/application-ui/vertical-shells/white/sidebar-nav-menu';
import CustomizationButton from 'src/components/base/customization';
import { Logo } from 'src/components/base/logo';
import { Scrollbar } from 'src/components/base/scrollbar';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';
import { useDialog } from 'src/hooks/use-dialog';
import { usePopover } from 'src/hooks/use-popover';
import { MenuItem } from 'src/router/menuItem';
import { neutral } from 'src/theme/colors';
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from 'src/theme/utils';
import { Menu } from './menu';

const HeaderWrapper = styled(AppBar)(({ theme }) => ({
  display: 'flex',
  transition: theme.transitions.create(['height', 'width']),
  color: 'inherit',
  background: theme.palette.background.paper,
}));

interface HeaderProps {
  onClose?: () => void;
  menuItems?: MenuItem[];
  onOpen?: () => void;
  open?: boolean;
}

const SidebarWrapper = styled(Box)({
  height: '100vh',
  color: neutral[200],
  display: 'flex',
  flexDirection: 'column',
});

export const Header: FC<HeaderProps> = (props) => {
  const { onClose, onOpen, menuItems, open, ...other } = props;
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const popover = usePopover<HTMLButtonElement>();
  const popoverChat = usePopover<HTMLButtonElement>();
  const theme = useTheme();
  const notifications = useDialog();
  const widgets = useDialog();
  const dialog = useDialog();

  const user = {
    avatar: '/avatars/3.png',
    name: 'Ethan Donovan',
    jobTitle: 'Principal Engineer',
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
        <Logo isLinkStatic />
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
        elevation={7}
        role="banner"
        sx={{
          height: HEADER_HEIGHT * 1.3,
          width: {
            xs: '100%',
          },
        }}
      >
        <Stack
          px={2}
          flex={1}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <Logo isLinkStatic />
            {lgUp && <Menu menuItems={menuItems} />}
          </Stack>
          <Stack
            direction="row"
            divider={
              <Divider
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
                        background: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                      },

                      '& .MuiSvgIcon-root': {
                        fontSize: 21,
                      },
                      p: 1,
                    }}
                  >
                    <SearchRoundedIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      '&:hover': {
                        background: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                      },

                      '& .MuiSvgIcon-root': {
                        fontSize: 21,
                      },
                      p: 1,
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
                        background: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                      },

                      '& .MuiSvgIcon-root': {
                        fontSize: 21,
                      },
                      p: 1,
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
                        background: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                      },

                      '& .MuiSvgIcon-root': {
                        fontSize: 21,
                      },
                      p: 1,
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
                        background: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                      },

                      '& .MuiSvgIcon-root': {
                        fontSize: 21,
                      },
                      p: 1,
                    }}
                  />
                </>
              )}
              <CustomizationButton
                sx={{
                  '&:hover': {
                    background: alpha(theme.palette.primary.main, 0.1),
                    color: theme.palette.primary.main,
                  },

                  '& .MuiSvgIcon-root': {
                    fontSize: 21,
                  },
                  p: 1,
                }}
              />
            </Stack>

            <IconButton
              id="profile-button"
              sx={{
                p: 0,
                '&:hover': {
                  boxShadow: `0 0 0 3px ${theme.palette.common.white}`,
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
                    background: alpha(theme.palette.primary.main, 0.1),
                    color: theme.palette.primary.main,
                  },

                  '& .MuiSvgIcon-root': {
                    fontSize: 21,
                  },
                  p: 1,
                }}
              >
                <MenuRoundedIcon />
              </IconButton>
            )}
          </Stack>
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
              boxShadow: (theme) => theme.shadows[24],
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
