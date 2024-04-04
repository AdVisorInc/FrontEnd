import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import {
  alpha,
  AppBar,
  Avatar,
  darken,
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
import { DividerLight } from 'src/components/base/styles/card';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';
import { useDialog } from 'src/hooks/use-dialog';
import { usePopover } from 'src/hooks/use-popover';
import { HEADER_HEIGHT } from 'src/theme/utils';

const HeaderWrapper = styled(AppBar)(({ theme }) => ({
  height: HEADER_HEIGHT,
  background: darken(theme.palette.primary.main, 0.3),
  color: theme.palette.primary.contrastText,
  backdropFilter: 'blur(8px)',
  position: 'fixed',
  top: 0,
  display: 'flex',
  transition: theme.transitions.create(['height', 'width']),
}));

interface HeaderProps {
  onMobileNav?: () => void;
}

export const Header: FC<HeaderProps> = (props) => {
  const { onMobileNav } = props;
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
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
      elevation={8}
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
          divider={
            <DividerLight
              orientation="vertical"
              flexItem
            />
          }
          alignItems="center"
          spacing={{ xs: 1, sm: 2 }}
        >
          <Logo
            dark
            isLinkStatic
          />
          <IconButton
            color="inherit"
            onClick={dialog.handleOpen}
            sx={{
              '&:hover': {
                background: alpha(theme.palette.common.white, 0.08),
              },
            }}
          >
            <SearchRoundedIcon />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          divider={
            <DividerLight
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
                  sx={{
                    '&:hover': {
                      background: alpha(theme.palette.common.white, 0.08),
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
                    },
                  }}
                />
              </>
            )}
            <CustomizationButton
              sx={{
                '&:hover': {
                  background: alpha(theme.palette.common.white, 0.08),
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
              onClick={onMobileNav}
              color="inherit"
              sx={{
                '&:hover': {
                  background: alpha(theme.palette.common.white, 0.08),
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
