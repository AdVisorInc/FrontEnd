import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone';
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import { Card, CardActionArea, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

type DashboardItem = {
  label: string;
  icon: JSX.Element;
  color: string;
  description: string;
};

const DASHBOARD_ITEMS: DashboardItem[] = [
  {
    label: 'Calendar',
    icon: <CalendarTodayTwoToneIcon />,
    color: 'secondary.main',
    description: 'Plan your schedule',
  },
  {
    label: 'Settings',
    icon: <SettingsTwoToneIcon />,
    color: 'secondary.main',
    description: 'Change application settings',
  },
  {
    label: 'Finances',
    icon: <AttachMoneyTwoToneIcon />,
    color: 'secondary.main',
    description: 'Monitor financial flow',
  },
  {
    label: 'Notifications',
    icon: <NotificationsActiveTwoToneIcon />,
    color: 'secondary.main',
    description: 'View app notifications',
  },
  {
    label: 'Tasks',
    icon: <DashboardCustomizeTwoToneIcon />,
    color: 'secondary.main',
    description: 'Track work tasks',
  },
  {
    label: 'Feedback',
    icon: <ContactSupportTwoToneIcon />,
    color: 'secondary.main',
    description: 'User suggestions and issues',
  },
];

const GridNavigationCentered: FC = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      spacing={0}
      sx={{
        '--Grid-borderWidth': '1px',
        borderTop: 'var(--Grid-borderWidth) solid',
        borderLeft: 'var(--Grid-borderWidth) solid',
        borderColor: 'divider',
        '& > div': {
          borderRight: 'var(--Grid-borderWidth) solid',
          borderBottom: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
        },
      }}
    >
      {DASHBOARD_ITEMS.map((item) => (
        <Grid
          key={item.label}
          xs={12}
          sm={6}
          md={4}
        >
          <Card
            elevation={0}
            variant="outlined"
            sx={{
              borderWidth: 0,
              borderRadius: 0,
            }}
          >
            <CardActionArea
              sx={{
                p: 2,
                transition: 'none',
                textAlign: 'center',
                '&:hover': {
                  backgroundColor: '(theme) => alpha(theme.palette.primary.main, 0.01)',

                  '& > .MuiSvgIcon-root': {
                    opacity: 1,
                  },
                },
              }}
            >
              {React.cloneElement(item.icon, {
                sx: {
                  mb: 1,
                  opacity: 0.5,
                  color: item.color,
                },
              })}
              <Typography variant="h5">{t(item.label)}</Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                noWrap
              >
                {t(item.description)}
              </Typography>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridNavigationCentered;
