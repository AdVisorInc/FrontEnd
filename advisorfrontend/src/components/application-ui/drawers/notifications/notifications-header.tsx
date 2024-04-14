import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import {
  alpha,
  Box,
  Button,
  CardActions,
  CardHeader,
  Divider,
  SwipeableDrawer,
  Theme,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import {FC, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import NotificationTabsLine from 'src/components/application-ui/tabs/line/line';
import { ButtonSoft } from 'src/components/base/styles/button-soft';
import DrawerContent, {NotificationType} from './drawer-content';
import {RootState, useDispatch, useSelector} from "../../../../store";
import {fetchNotifications, subscribeToNotifications} from "../../../../slices/notifications";
import {getNotificationUnsubscribe} from "../../../../utils/notificationUtils";

interface NotificationsHeaderProps {
  onOpen?: () => void;
  onClose?: () => void;
  open?: boolean;
}
const mockNotifications : NotificationType[] = [
  {
    id: 1,
    user_id: '1',
    notification_type: 'new_follower',
    data: {
      follower_id: '2',
      follower_name: 'John Doe',
      follower_avatar: '/avatars/1.png',
    },
    created_at: '2023-06-10T10:30:00Z',
    read: false,
  },
  {
    id: 2,
    user_id: '1',
    notification_type: 'organization_invite',
    data: {
      organization_id: '1',
      organization_name: 'Acme Inc.',
      inviter_id: '3',
      inviter_name: 'Jane Smith',
    },
    created_at: '2023-06-09T14:45:00Z',
    read: true,
  },
  {
    id: 3,
    user_id: '1',
    notification_type: 'campaign_progress_update',
    data: {
      campaign_id: '1',
      campaign_name: 'Summer Sale',
      progress_percentage: 75,
      target_amount: 10000,
      current_amount: 7500,
    },
    created_at: '2023-06-08T09:15:00Z',
    read: false,
  },
];

export const NotificationsHeader: FC<NotificationsHeaderProps> = (props) => {
  const { onClose, onOpen, open = false, ...other } = props;
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const theme = useTheme();
  const { t } = useTranslation();

  const handleDrawerClose = () => {
    if (onClose) {
      onClose();
    }
  };
  const dispatch = useDispatch();
  const notifications = useSelector((state: RootState) => state.notification.notifications);

  useEffect(() => {
    dispatch(fetchNotifications());
    dispatch(subscribeToNotifications());

    return () => {
      const unsubscribe = getNotificationUnsubscribe();
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, [dispatch]);

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      elevation={0}
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: { xs: 340, md: 420, lg: 460 },
          overflow: 'visible',
          flexDirection: 'row',
        },
      }}
      {...other}
    >
      <Box
        overflow="hidden"
        display="flex"
        flexDirection="column"
        width="100%"
      >
        <CardHeader
          title="Notifications"
          titleTypographyProps={{
            variant: 'h5',
            textAlign: { xs: 'center', sm: 'left' },
          }}
          sx={{
            p: 1.5,
            '.MuiCardHeader-action': {
              position: { xs: 'absolute', sm: 'static' },
              right: theme.spacing(1),
              top: theme.spacing(1),
              mt: 0,
            },
          }}
          action={
            <Tooltip
              arrow
              placement="right"
              title={t('Mark all as read')}
            >
              <ButtonSoft
                color="error"
                sx={{
                  minWidth: 0,
                  p: 0.5,
                }}
                size="small"
              >
                <DoneAllRoundedIcon fontSize="small" />
              </ButtonSoft>
            </Tooltip>
          }
        />
        <Divider />
        <Box
          p={{ xs: 1, sm: 0 }}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
          }}
        >
          <NotificationTabsLine notifications={notifications} />

        </Box>
        {!smUp && <Divider />}
        <Box
          overflow="hidden"
          flex={1}
        >
          <DrawerContent notifications={notifications} />
        </Box>
        <Divider />
        <CardActions
          sx={{
            width: '100%',
            flexDirection: { xs: 'column-reverse', sm: 'row' },

            '& > :not(:first-of-type)': {
              marginLeft: { xs: 0, sm: theme.spacing(1) },
              marginBottom: { xs: theme.spacing(1), sm: 0 },
            },
            justifyContent: 'flex-end',
          }}
        >
          <Button
            onClick={handleDrawerClose}
            fullWidth={!mdUp}
          >
            Close
          </Button>
          <ButtonSoft
            color="primary"
            onClick={handleDrawerClose}
            fullWidth={!mdUp}
          >
            View all
          </ButtonSoft>
        </CardActions>
      </Box>
    </SwipeableDrawer>
  );
};

NotificationsHeader.propTypes = {
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
};
