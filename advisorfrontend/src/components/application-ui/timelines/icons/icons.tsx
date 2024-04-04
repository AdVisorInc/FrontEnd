import CommentIcon from '@mui/icons-material/Comment';
import EventIcon from '@mui/icons-material/Event';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import WarningIcon from '@mui/icons-material/Warning';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { Avatar, Box, Button, Chip, Typography, useTheme } from '@mui/material';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface NotificationEvent {
  time: string;
  title: string;
  description: ReactNode;
  icon: ReactNode;
  iconColor: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

const NotificationsTimeline = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const notifications: NotificationEvent[] = [
    {
      time: 'Just now',
      title: t('New Email Received'),
      description: (
        <div>
          <Typography
            gutterBottom
            sx={{ pt: 1 }}
          >
            Check your inbox for the latest newsletter.
          </Typography>
          <Button
            variant="contained"
            size="small"
          >
            Open Mail
          </Button>
        </div>
      ),
      icon: <MailOutlineIcon fontSize="small" />,
      iconColor: 'primary',
    },
    {
      time: '20 mins ago',
      title: t('Profile Liked'),
      description: (
        <div>
          <Avatar
            src="/avatars/2.png"
            sx={{ width: 32, height: 32, my: 1 }}
          />
          Alice liked your profile.
        </div>
      ),
      icon: <ThumbUpIcon fontSize="small" />,
      iconColor: 'secondary',
    },
    {
      time: '1 hour ago',
      title: t('System Alert'),
      description: (
        <Box mt={1}>
          <Chip
            label="Low Disk Space"
            color="error"
            size="small"
          />
        </Box>
      ),
      icon: <WarningIcon fontSize="small" />,
      iconColor: 'error',
    },
    {
      time: '3 hours ago',
      title: t('Event Reminder'),
      description: (
        <Typography sx={{ pt: 1 }}>Don't forget the team meeting at 4 PM today.</Typography>
      ),
      icon: <EventIcon fontSize="small" />,
      iconColor: 'info',
    },
    {
      time: 'Yesterday',
      title: t('New Comment'),
      description: (
        <Box>
          <CommentIcon sx={{ color: 'success.main', my: 1 }} />
          <Typography>Mark commented on your post.</Typography>
        </Box>
      ),
      icon: <NotificationsIcon fontSize="small" />,
      iconColor: 'success',
    },
  ];

  return (
    <Timeline>
      {notifications.map((notification, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{
              p: 2,
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
            variant="body1"
            color="text.secondary"
          >
            {notification.time}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              color={notification.iconColor}
              variant="outlined"
              sx={{ p: 1, margin: 0, borderRadius: theme.shape.borderRadius + 'px' }}
            >
              {notification.icon}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ p: 2 }}>
            <Typography
              variant="h6"
              component="span"
            >
              {notification.title}
            </Typography>
            {notification.description}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default NotificationsTimeline;
