import AddToDriveRoundedIcon from '@mui/icons-material/AddToDriveRounded';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FolderZipOutlinedIcon from '@mui/icons-material/FolderZipOutlined';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  DialogContent,
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { formatDistance } from 'date-fns';
import { t } from 'i18next';
import { FC } from 'react';
import { Scrollbar } from 'src/components/base/scrollbar';
import { AvatarState } from 'src/components/base/styles/avatar';
import { ButtonSoft } from 'src/components/base/styles/button-soft';
import { InlineBadge } from 'src/components/base/styles/inline-badge';
import { LinearProgressSlim } from 'src/components/base/styles/progress-bar';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';
import { RingBadge } from 'src/components/base/styles/ring-badge';
import {useDispatch} from "../../../../store";
import {markNotificationAsRead} from "../../../../slices/notifications";

export interface NotificationType {
  id: number;
  user_id: string;
  notification_type:
    | 'new_follower'
    | 'organization_invite'
    | 'campaign_progress_update'
    | 'campaign_ended'
    | 'new_message'
    | 'task_assigned'
    | 'meeting_scheduled'
    | 'sprint_started'
    | 'sprint_completed'
    | 'milestone_achieved'
    | 'budget_alert'
    | 'new_comment';
  data: any;
  created_at: string;
  read: boolean;
}

interface DrawerContentProps {
  notifications: NotificationType[];
}

const DrawerContent: FC<DrawerContentProps> = ({ notifications }) => {
  const dispatch = useDispatch();

  const handleMarkAsRead = (notificationId: number) => {
    dispatch(markNotificationAsRead(notificationId));
  };
  const renderNotificationContent = (notification: NotificationType) => {
    switch (notification.notification_type) {
      case 'new_follower':
        return (
          <>
            <Typography pb={0.3} pr={1}>
              <Link href="" onClick={(e) => e.preventDefault()} variant="subtitle2" fontWeight={600} color="text.primary" underline="hover">
                {notification.data.follower_name}
              </Link>{' '}
              started following you
            </Typography>
            <Stack mt={1.5} mb={0.5} spacing={1} direction="row">
              <Button variant="contained" size="small">
                Follow Back
              </Button>
              <Button variant="outlined" color="secondary" size="small">
                View Profile
              </Button>
            </Stack>
          </>
        );

      case 'organization_invite':
        return (
          <>
            <Typography pb={0.3} pr={1}>
              <Link href="" onClick={(e) => e.preventDefault()} variant="subtitle2" fontWeight={600} color="text.primary" underline="hover">
                {notification.data.inviter_name}
              </Link>{' '}
              invited you to join{' '}
              <Link href="" onClick={(e) => e.preventDefault()} variant="subtitle2" fontWeight={600} color="text.primary" underline="hover">
                {notification.data.organization_name}
              </Link>
            </Typography>
            <Stack mt={1.5} mb={0.5} spacing={1} direction="row">
              <Button variant="contained" size="small">
                Accept Invite
              </Button>
              <Button variant="outlined" color="secondary" size="small">
                Decline
              </Button>
            </Stack>
          </>
        );

      case 'campaign_progress_update':
        return (
          <>
            <Typography pb={0.3} pr={1}>
              Your campaign{' '}
              <Link href="" onClick={(e) => e.preventDefault()} variant="subtitle2" fontWeight={600} color="text.primary" underline="hover">
                {notification.data.campaign_name}
              </Link>{' '}
              has reached {notification.data.progress_percentage}% of its target
            </Typography>
            <Box pb={1}>
              <LinearProgressSlim variant="determinate" value={notification.data.progress_percentage} />
            </Box>
            <Stack mt={1.5} mb={0.5} spacing={1} direction="row">
              <Button variant="contained" size="small">
                View Campaign
              </Button>
            </Stack>
          </>
        );

      case 'campaign_ended':
        return (
          <>
            <Typography pb={0.3} pr={1}>
              Your campaign{' '}
              <Link href="" onClick={(e) => e.preventDefault()} variant="subtitle2" fontWeight={600} color="text.primary" underline="hover">
                {notification.data.campaign_name}
              </Link>{' '}
              has ended and raised a total of {notification.data.total_amount_raised}
            </Typography>
            <Stack mt={1.5} mb={0.5} spacing={1} direction="row">
              <Button variant="contained" size="small">
                View Campaign
              </Button>
            </Stack>
          </>
        );

      case 'new_message':
        return (
          <>
            <Typography pb={0.3} pr={1}>
              <Link href="" onClick={(e) => e.preventDefault()} variant="subtitle2" fontWeight={600} color="text.primary" underline="hover">
                {notification.data.sender_name}
              </Link>{' '}
              sent you a new message in{' '}
              <Link href="" onClick={(e) => e.preventDefault()} variant="subtitle2" fontWeight={600} color="text.primary" underline="hover">
                {notification.data.conversation_title}
              </Link>
            </Typography>
            <Stack mt={1.5} mb={0.5} spacing={1} direction="row">
              <Button variant="contained" size="small">
                View Message
              </Button>
            </Stack>
          </>
        );

      case 'task_assigned':
        return (
          <>
            <Typography pb={0.3} pr={1}>
              You have been assigned a new task:{' '}
              <Link href="" onClick={(e) => e.preventDefault()} variant="subtitle2" fontWeight={600} color="text.primary" underline="hover">
                {notification.data.task_title}
              </Link>
            </Typography>
            <Stack mt={1.5} mb={0.5} spacing={1} direction="row">
              <Button variant="contained" size="small">
                View Task
              </Button>
            </Stack>
          </>
        );

      case 'meeting_scheduled':
        return (
          <>
            <Typography pb={0.3} pr={1}>
              A new meeting has been scheduled by{' '}
              <Link href="" onClick={(e) => e.preventDefault()} variant="subtitle2" fontWeight={600} color="text.primary" underline="hover">
                {notification.data.organizer_name}
              </Link>
              : {notification.data.meeting_title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Date: {new Date(notification.data.start_time).toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Location: {notification.data.location}
            </Typography>
            <Stack mt={1.5} mb={0.5} spacing={1} direction="row">
              <Button variant="contained" size="small">
                View Meeting
              </Button>
            </Stack>
          </>
        );

      case 'sprint_started':
        return (
          <>
            <Typography pb={0.3} pr={1}>
              A new sprint has started:{' '}
              <Link href="" onClick={(e) => e.preventDefault()} variant="subtitle2" fontWeight={600} color="text.primary" underline="hover">
                {notification.data.sprint_name}
              </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Duration: {new Date(notification.data.start_date).toLocaleDateString()} - {new Date(notification.data.end_date).toLocaleDateString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Goals: {notification.data.goals.join(', ')}
            </Typography>
            <Stack mt={1.5} mb={0.5} spacing={1} direction="row">
              <Button variant="contained" size="small">
                View Sprint
              </Button>
            </Stack>
          </>
        );

      case 'sprint_completed':
        return (
          <>
            <Typography pb={0.3} pr={1}>
              The sprint{' '}
              <Link href="" onClick={(e) => e.preventDefault()} variant="subtitle2" fontWeight={600} color="text.primary" underline="hover">
                {notification.data.sprint_name}
              </Link>{' '}
              has been completed
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Completion Date: {new Date(notification.data.completion_date).toLocaleDateString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Goals Achieved: {notification.data.goals_achieved.join(', ')}
            </Typography>
            <Stack mt={1.5} mb={0.5} spacing={1} direction="row">
              <Button variant="contained" size="small">
                View Sprint
              </Button>
            </Stack>
          </>
        );

      case 'milestone_achieved':
        return (
          <>
            <Typography pb={0.3} pr={1}>
              A milestone has been achieved:{' '}
              <Link href="" onClick={(e) => e.preventDefault()} variant="subtitle2" fontWeight={600} color="text.primary" underline="hover">
                {notification.data.milestone_name}
              </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Achievement Date: {new Date(notification.data.achievement_date).toLocaleDateString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Associated Project: {notification.data.associated_project}
            </Typography>
            <Stack mt={1.5} mb={0.5} spacing={1} direction="row">
              <Button variant="contained" size="small">
                View Milestone
              </Button>
            </Stack>
          </>
        );

      case 'budget_alert':
        return (
          <>
            <Typography pb={0.3} pr={1}>
              Budget alert for campaign{' '}
              <Link href="" onClick={(e) => e.preventDefault()} variant="subtitle2" fontWeight={600} color="text.primary" underline="hover">
                {notification.data.campaign_name}
              </Link>
              : Current spend is approaching the budget threshold
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Budget Threshold: {notification.data.budget_threshold}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Current Spend: {notification.data.current_spend}
            </Typography>
            <Stack mt={1.5} mb={0.5} spacing={1} direction="row">
              <Button variant="contained" size="small">
                View Campaign
              </Button>
            </Stack>
          </>
        );

      case 'new_comment':
        return (
          <>
            <Typography pb={0.3} pr={1}>
              <Link href="" onClick={(e) => e.preventDefault()} variant="subtitle2" fontWeight={600} color="text.primary" underline="hover">
                {notification.data.commenter_name}
              </Link>{' '}
              commented on your {notification.data.associated_item_type}
            </Typography>
            <Stack mt={1.5} mb={0.5} spacing={1} direction="row">
              <Button variant="contained" size="small">
                View Comment
              </Button>
            </Stack>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Scrollbar>
      <DialogContent sx={{ p: 0 }}>
        <Stack divider={<Divider />}>
          {notifications.map((notification) => (
            <ListItemButton key={notification.id}
                            onClick={() => handleMarkAsRead(notification.id)}
            >
              <Box
                sx={{
                  pl: 0,
                  pr: 1,
                  py: 1,
                  display: 'flex',
                  transition: 'none',
                  alignItems: 'flex-start',
                  '&:hover': {
                    backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.01),
                  },
                }}
              >
                <PulseBadge
                  color={notification.read ? undefined : 'success'}
                  variant="dot"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  badgeContent=" "
                  overlap="circular"
                >
                  <Avatar
                    sx={{
                      width: 38,
                      height: 38,
                    }}
                    src={notification.data.avatar}
                  />
                </PulseBadge>
                <Box ml={1.5} flex={1} overflow="hidden">
                  {renderNotificationContent(notification)}
                  <Stack flexWrap="wrap" gap={{ xs: 0.5, sm: 1 }} direction="row" alignItems="center" divider={<Divider orientation="vertical" flexItem />}>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {formatDistance(new Date(notification.created_at), new Date(), {
                        addSuffix: true,
                      })}
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </ListItemButton>
          ))}
        </Stack>
      </DialogContent>
    </Scrollbar>
  );
};

export default DrawerContent;
