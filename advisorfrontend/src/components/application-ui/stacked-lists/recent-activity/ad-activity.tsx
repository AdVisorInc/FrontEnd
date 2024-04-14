// AdActivity.tsx
import React from 'react';
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

export type AdActivity = {
  id: string;
  background: string;
  contrastText: string;
  icon: React.ReactNode;
  primaryText: string;
  secondaryText: string;
  value: string;
  amountColor?: string;
};

type AdActivityProps = {
  activities: AdActivity[];
};

const AdActivityList: React.FC<AdActivityProps> = ({ activities }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  console.log("Log:", activities)
  return (
    <List disablePadding>
      {activities.map((activity) => (
        <React.Fragment key={activity.id}>
          <ListItem sx={{ p: { xs: 1, sm: 2.5 } }}>
            <ListItemAvatar sx={{ mr: 1, display: 'flex', alignItems: 'center', minWidth: 0 }}>
              <Avatar
                sx={{
                  background: activity.background,
                  color: activity.contrastText,
                  width: 44,
                  height: 44,
                }}
              >
                {activity.icon}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              disableTypography
              primary={
                <Typography noWrap variant="h5">
                  {activity.primaryText}
                </Typography>
              }
              secondary={
                <Typography noWrap variant="subtitle2" color="text.secondary">
                  {activity.secondaryText}
                </Typography>
              }
            />
            <Box sx={{ textAlign: 'right', display: { xs: 'none', sm: 'block' } }}>
              <Typography variant="h6" noWrap color={activity.amountColor}>
                {activity.value}
              </Typography>
            </Box>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default AdActivityList;
