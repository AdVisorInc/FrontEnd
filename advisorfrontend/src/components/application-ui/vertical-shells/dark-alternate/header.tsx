import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import {
  alpha,
  AppBar,
  Avatar,
  Divider,
  IconButton,
  Stack,
  styled,
  Theme,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import { FC } from 'react';
import { NotificationsHeader } from 'src/components/application-ui/drawers/notifications/notifications-header';
import { WidgetsHeader } from 'src/components/application-ui/drawers/widgets/widgets-header';
import { ComposedDropdown } from 'src/components/application-ui/dropdowns/composed/composed-dropdown';
import { HeaderUserDropdown } from 'src/components/application-ui/dropdowns/header/header-dropdown';
import LanguageDropdown from 'src/components/application-ui/dropdowns/language/language-dropdown';
import { BasicSpotlightSearch } from 'src/components/application-ui/navigation-overlays/basic/basic-search-overlay';
import CustomizationButton from 'src/components/base/customization';
import { Logo } from 'src/components/base/logo';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';
import { useSidebarContext } from 'src/contexts/sidebar-context';
import { useDialog } from 'src/hooks/use-dialog';
import { usePopover } from 'src/hooks/use-popover';
import useScrollDirection from 'src/hooks/use-scroll-direction';
import { HEADER_HEIGHT, SIDEBAR_WIDTH, SIDEBAR_WIDTH_COLLAPSED } from 'src/theme/utils';

const HeaderWrapper = styled(AppBar)(({ theme }) => ({
  height: HEADER_HEIGHT,
  background: alpha(theme.palette.background.paper, 0.9),
  backdropFilter: 'blur(8px)',
  boxShadow: theme.shadows[6],
  color: 'inherit',
  right: 0,
  left: 'auto',
  display: 'flex',
  transition: theme.transitions.create(['height']),
}));

interface HeaderProps {
  onMobileNav?: () => void;
}

export const Header: FC<HeaderProps> = (props) => {
  const { onMobileNav } = props;
  const scroll = useScrollDirection();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  const { isSidebarCollapsed } = useSidebarContext();
  const dialog = useDialog();
  const popover = usePopover<HTMLButtonElement>();
  const theme = useTheme();
  const notifications = useDialog();
  const widgets = useDialog();
  const popoverChat = usePopover<HTMLButtonElement>();

  const user = {
    avatar: '/avatars/1.png',
    name: 'Alex Thompson',
    jobTitle: 'Principal Engineer',
  };

  return (
    <HeaderWrapper
      role="banner"
      sx={{
        height: scroll === 'down' ? HEADER_HEIGHT : HEADER_HEIGHT * 1.5,
        width: {
          xs: '100%',
          lg: `calc(100% - ${isSidebarCollapsed ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px)`,
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
          divider={
            <Divider
              orientation="vertical"
              flexItem
            />
          }
          alignItems="center"
          spacing={{ xs: 1, sm: 2 }}
        >
          {!lgUp && <Logo isLinkStatic />}
          <IconButton
            color="inherit"
            onClick={dialog.handleOpen}
            sx={{
              borderRadius: 50,
              '&:hover': {
                background: alpha(theme.palette.secondary.main, 0.04),
              },
              '& .MuiSvgIcon-root': {
                fontSize: 23,
              },
              p: 1,
            }}
          >
            <SearchRoundedIcon />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          divider={
            <Divider
              orientation="vertical"
              flexItem
            />
          }
          alignItems="center"
          spacing={{ xs: 1, sm: 2 }}
        >
          <Stack
            display="flex"
            spacing={0.5}
            direction="row"
            alignItems="center"
          >
            {smUp && (
              <>
                <IconButton
                  sx={{
                    borderRadius: 50,
                    '&:hover': {
                      background: alpha(theme.palette.secondary.main, 0.04),
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: 23,
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
                    borderRadius: 50,
                    '&:hover': {
                      background: alpha(theme.palette.secondary.main, 0.04),
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: 23,
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
                    borderRadius: 50,
                    '&:hover': {
                      background: alpha(theme.palette.secondary.main, 0.04),
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: 23,
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
                  color="inherit"
                  sx={{
                    borderRadius: 50,
                    '&:hover': {
                      background: alpha(theme.palette.secondary.main, 0.04),
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: 23,
                    },
                    p: 1,
                  }}
                />
              </>
            )}
            <CustomizationButton
              color="inherit"
              sx={{
                borderRadius: 50,
                '&:hover': {
                  background: alpha(theme.palette.secondary.main, 0.04),
                },
                '& .MuiSvgIcon-root': {
                  fontSize: 23,
                },
                p: 1,
              }}
            />
          </Stack>

          <IconButton
            id="profile-button"
            sx={{
              p: 0,
              borderRadius: 50,
              '&:hover': {
                boxShadow: `0 0 0 3px ${theme.palette.primary.main}`,
              },
            }}
            color="inherit"
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
              onClick={onMobileNav}
              color="inherit"
              sx={{
                borderRadius: 50,
                '&:hover': {
                  background: alpha(theme.palette.secondary.main, 0.04),
                },
                '& .MuiSvgIcon-root': {
                  fontSize: 23,
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
      <HeaderUserDropdown
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
  );
};

Header.propTypes = {
  onMobileNav: PropTypes.func,
};
