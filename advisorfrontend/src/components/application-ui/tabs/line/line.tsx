import {
  Box,
  Chip,
  Divider, Stack,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import {NotificationType} from "../../drawers/notifications/drawer-content";

interface NotificationTabsLineProps {
  notifications: NotificationType[];
}

const NotificationTabsLine: React.FC<NotificationTabsLineProps> = ({ notifications }) => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const [value, setValue] = React.useState('0');

  const handleTabChange = (event, newValue) => {
    setValue(String(newValue));
  };

  const unreadCount = notifications.filter((notification) => !notification.read).length;
  const readCount = notifications.length - unreadCount;

  return (
    <Stack
      justifyContent="center"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Box width="100%">
        {smUp && (
          <>
            <Tabs
              indicatorColor="secondary"
              textColor="secondary"
              sx={{
                px: 1.5,
                '& .MuiTab-root': {
                  flexDirection: 'row',
                  pr: 0,
                  fontSize: 13,

                  '& .MuiChip-root': {
                    ml: 1,
                    height: 20,
                    lineHeight: 22,
                    opacity: 0.72,
                    transition: theme.transitions.create(['background', 'color'], {
                      duration: theme.transitions.duration.complex,
                    }),
                    p: 0,

                    '& .MuiChip-label': {
                      px: 0.5,
                      fontWeight: 600,
                      fontSize: 11,
                    },
                  },
                  '&.Mui-selected': {
                    '& .MuiChip-root': {
                      opacity: 1,
                    },
                  },
                  '&:first-of-type': {
                    ml: 0,
                  },
                },
              }}
              value={Number(value)}
              onChange={handleTabChange}
            >
              <Tab
                label={
                  <>
                    All
                    <Chip
                      color="primary"
                      label={notifications.length}
                      size="small"
                    />
                  </>
                }
              />
              <Tab
                label={
                  <>
                    Unread
                    <Chip
                      color="warning"
                      label={unreadCount}
                      size="small"
                    />
                  </>
                }
              />
            </Tabs>
            <Divider />
          </>
        )}
      </Box>
    </Stack>
  );
};

export default NotificationTabsLine;
