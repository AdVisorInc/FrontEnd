import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import {
  alpha,
  AppBar,
  Avatar,
  Box,
  darken,
  IconButton,
  Stack,
  styled,
  Theme,
  useMediaQuery,
  useTheme,
} from '@mui/material';
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

const TopBarWrapper = styled(AppBar)(({ theme }) => ({
  height: HEADER_HEIGHT,
  background: alpha(darken(theme.palette.neutral[900], 0.1), 0.9),
  color: theme.palette.neutral[400],
  backdropFilter: 'blur(8px)',
  right: 0,
  left: 'auto',
  display: 'flex',
  transition: theme.transitions.create(['height', 'width']),
}));

export const TopBar = () => {
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
    <TopBarWrapper
      role="banner"
      elevation={0}
    >
      <Stack
        pl={{ xs: 2, sm: 3 }}
        pr={1}
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
              sx={{
                height: 24,
                alignSelf: 'center',
              }}
            />
          }
          alignItems="center"
          spacing={1}
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
                color: theme.palette.common.white,
              },
              '& .MuiSvgIcon-root': {
                fontSize: 21,
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
              sx={{
                height: 24,
                alignSelf: 'center',
              }}
            />
          }
          alignItems="center"
          spacing={1}
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
                      color: theme.palette.common.white,
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: 21,
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
                    '& .MuiSvgIcon-root': {
                      fontSize: 21,
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
                    '& .MuiSvgIcon-root': {
                      fontSize: 21,
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
                '& .MuiSvgIcon-root': {
                  fontSize: 21,
                },
              }}
            />
          </Stack>
          <Box>
            <IconButton
              id="profile-button"
              sx={{
                p: 0,
                ml: 1,
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
          </Box>
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
    </TopBarWrapper>
  );
};
