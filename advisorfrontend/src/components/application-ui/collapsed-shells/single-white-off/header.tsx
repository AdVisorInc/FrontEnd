import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import {
  alpha,
  AppBar,
  Avatar,
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
import LanguageDropdown from 'src/components/application-ui/dropdowns/language/language-dropdown';
import { ProfileDropdown } from 'src/components/application-ui/dropdowns/profile/profile-dropdown';
import { BasicSpotlightSearch } from 'src/components/application-ui/navigation-overlays/basic/basic-search-overlay';
import CustomizationButton from 'src/components/base/customization';
import { Logo } from 'src/components/base/logo';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';
import { useDialog } from 'src/hooks/use-dialog';
import { usePopover } from 'src/hooks/use-popover';
import useScrollDirection from 'src/hooks/use-scroll-direction';
import { HEADER_HEIGHT, SIDEBAR_WIDTH_COLLAPSED } from 'src/theme/utils';

const HeaderWrapper = styled(AppBar)(({ theme }) => ({
  height: HEADER_HEIGHT * 1.5,
  background: alpha(theme.palette.background.default, 0.8),
  backdropFilter: 'blur(8px)',
  right: 0,
  left: 'auto',
  color: theme.palette.mode === 'dark' ? theme.palette.neutral[500] : theme.palette.neutral[900],
  display: 'flex',
}));

interface HeaderProps {
  onMobileNav?: () => void;
}

export const Header: FC<HeaderProps> = (props) => {
  const { onMobileNav } = props;
  const scroll = useScrollDirection();
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const dialog = useDialog();
  const popover = usePopover<HTMLButtonElement>();
  const popoverChat = usePopover<HTMLButtonElement>();
  const theme = useTheme();
  const notifications = useDialog();
  const widgets = useDialog();

  const user = {
    avatar: '/avatars/3.png',
    name: 'Ethan Donovan',
    jobTitle: 'Principal Engineer',
  };
  return (
    <HeaderWrapper
      role="banner"
      sx={{
        boxShadow: scroll === 'down' ? (theme) => theme.shadows[6] : (theme) => theme.shadows[0],
        width: {
          xs: '100%',
          md: `calc(100% - ${SIDEBAR_WIDTH_COLLAPSED}px)`,
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
          spacing={{ xs: 1, sm: 2 }}
        >
          {!mdUp && <Logo isLinkStatic />}
          <IconButton
            color="inherit"
            onClick={dialog.handleOpen}
            sx={{
              '&:hover': {
                background: theme.palette.neutral[900],
                color: theme.palette.neutral[100],
              },
            }}
          >
            <SearchRoundedIcon />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
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
                  sx={{
                    '&:hover': {
                      background: theme.palette.neutral[900],
                      color: theme.palette.neutral[100],
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
                      background: theme.palette.neutral[900],
                      color: theme.palette.neutral[100],
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
                      background: theme.palette.neutral[900],
                      color: theme.palette.neutral[100],
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
                      background: theme.palette.neutral[900],
                      color: theme.palette.neutral[100],
                    },
                  }}
                />
              </>
            )}
            <CustomizationButton
              sx={{
                '&:hover': {
                  background: theme.palette.neutral[900],
                  color: theme.palette.neutral[100],
                },
              }}
            />
          </Stack>

          <IconButton
            id="profile-button"
            sx={{
              p: 0,
              '&:hover': {
                boxShadow: `0 0 0 3px ${theme.palette.neutral[900]}`,
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
              onClick={onMobileNav}
              color="inherit"
              sx={{
                '&:hover': {
                  background: theme.palette.neutral[900],
                  color: theme.palette.neutral[100],
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
  );
};

Header.propTypes = {
  onMobileNav: PropTypes.func,
};
