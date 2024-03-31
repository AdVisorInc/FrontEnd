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
  IconButton,
  lighten,
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
import { neutral } from 'src/theme/colors';
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from 'src/theme/utils';
import { Menu } from './menu';

interface HeaderProps {
  onClose?: () => void;
  onOpen?: () => void;
  menuItems?: MenuItem[];
  open?: boolean;
}

const HeaderWrapper = styled(AppBar)(({ theme }) => ({
  height: HEADER_HEIGHT,
  background: lighten(theme.palette.neutral[900], 0.04),
  color: theme.palette.neutral[400],
  backdropFilter: 'blur(8px)',
  right: 0,
  left: 'auto',
  display: 'flex',
}));

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
        elevation={12}
        sx={{
          height: HEADER_HEIGHT * 1.3,
          width: '100%',
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
            <Logo
              dark
              isLinkStatic
            />
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
                        background: alpha(theme.palette.common.white, 0.08),
                        color: theme.palette.common.white,
                      },
                    }}
                  >
                    <SearchRoundedIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      '&:hover': {
                        background: alpha(theme.palette.common.white, 0.08),
                        color: theme.palette.common.white,
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
                        background: alpha(theme.palette.common.white, 0.08),
                        color: theme.palette.common.white,
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
                        background: alpha(theme.palette.common.white, 0.08),
                        color: theme.palette.common.white,
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
                        background: alpha(theme.palette.common.white, 0.08),
                        color: theme.palette.common.white,
                      },
                    }}
                  />
                </>
              )}
              <CustomizationButton
                sx={{
                  '&:hover': {
                    background: alpha(theme.palette.common.white, 0.08),
                    color: theme.palette.common.white,
                  },
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
                    background: alpha(theme.palette.common.white, 0.08),
                    color: theme.palette.common.white,
                  },
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
              backgroundColor: 'neutral.900',
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
  onOpen: PropTypes.func,
  menuItems: PropTypes.array,
  open: PropTypes.bool,
};
