import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import { formatDistance, subDays, subHours, subMinutes } from 'date-fns';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

type NotificationData = {
  avatarSrc?: string;
  avatarText?: string;
  name: string;
  role: string;
  chipLabel: string;
  chipColor: 'error' | 'info';
  postDuration: (currentDate: Date) => Date;
  description: string;
};

const notifications: NotificationData[] = [
  {
    avatarSrc: '/avatars/1.png',
    name: 'Makenna Arcand',
    role: 'Doctor (Pediatrician)',
    chipLabel: 'Time-Off',
    chipColor: 'error',
    postDuration: (currentDate) => subMinutes(currentDate, 12),
    description: 'Reported time-off leave: 21-27 March 2022',
  },
  {
    avatarSrc: '/avatars/3.png',
    name: 'Emerson Lubin',
    role: 'Patient',
    chipLabel: 'Patients',
    chipColor: 'info',
    postDuration: (currentDate) => subHours(currentDate, 13),
    description: 'Cancelled the scheduled consult set for: 21 March 2021',
  },
  {
    avatarText: 'PD',
    name: 'Phillip Dias',
    role: 'Doctor (Neurosurgeon)',
    chipLabel: 'Time-Off',
    chipColor: 'error',
    postDuration: (currentDate) => subDays(currentDate, 14),
    description: 'Reported time-off leave: 02-18 February 2021',
  },
];

function Notifications() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        title={t('Notifications')}
        action={
          <Button
            variant="outlined"
            size="small"
          >
            {t('View all')}
          </Button>
        }
      />
      <Divider />
      <List disablePadding>
        {notifications.map((notification, index) => (
          <Fragment key={notification.name}>
            <ListItem
              sx={{
                py: 2.3,
                display: 'block',
              }}
            >
              <Box
                display="flex"
                alignItems="center"
              >
                <ListItemAvatar sx={{ minWidth: 54 }}>
                  {notification.avatarSrc ? (
                    <Avatar src={notification.avatarSrc} />
                  ) : (
                    <Avatar
                      sx={{
                        background: theme.palette.primary.main,
                        color: theme.palette.common.white,
                      }}
                    >
                      {notification.avatarText}
                    </Avatar>
                  )}
                </ListItemAvatar>
                <ListItemText
                  primary={notification.name}
                  primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                  secondary={t(notification.role)}
                  secondaryTypographyProps={{
                    variant: 'body2',
                    color: 'textSecondary',
                    noWrap: true,
                  }}
                />
                <Chip
                  label={t(notification.chipLabel)}
                  color={notification.chipColor}
                />
                <Box
                  sx={{
                    display: { xs: 'none', sm: 'block' },
                    width: 140,
                    ml: { xs: 1, sm: 3, md: 6 },
                  }}
                >
                  <Typography
                    variant="h6"
                    align="right"
                    noWrap
                  >
                    {t('Posted')}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    align="right"
                    color="text.secondary"
                    noWrap
                  >
                    {formatDistance(notification.postDuration(new Date()), new Date(), {
                      addSuffix: true,
                    })}
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="subtitle1"
                sx={{ pt: 1 }}
              >
                {t(notification.description)}
              </Typography>
            </ListItem>
            {index !== notifications.length - 1 && <Divider component="li" />}
          </Fragment>
        ))}
      </List>
    </Card>
  );
}

export default Notifications;
