import AnalyticsIcon from '@mui/icons-material/Analytics';
import ArchiveIcon from '@mui/icons-material/Archive';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EmailIcon from '@mui/icons-material/Email';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FolderIcon from '@mui/icons-material/Folder';
import InsightsIcon from '@mui/icons-material/Insights';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem } from 'src/router/menuItem';
import { routes } from 'src/router/routes';

export const useMenuItems = (): MenuItem[] => {
  const { t } = useTranslation();
  return useMemo(() => {
    return [
      {
        title: t('Dashboard'),
        subMenu: [
          {
            title: t('Overview'),
            icon: <DashboardIcon />,
            route: routes.dummy,
          },
          {
            title: t('Analytics'),
            icon: <AnalyticsIcon />,
            route: '/shells/vertical-shell-white',
          },
          {
            title: t('Events'),
            icon: <EventNoteIcon />,
            route: routes.dummy,
          },
          {
            title: t('Documents'),
            icon: <FolderIcon />,
            subMenu: [
              {
                title: t('All Files'),
                route: routes.dummy,
              },
              {
                title: t('Recent'),
                route: routes.dummy,
              },
              {
                title: t('Shared'),
                route: routes.dummy,
              },
            ],
          },
          {
            title: t('Market Insights'),
            icon: <InsightsIcon />,
            route: routes.dummy,
          },
        ],
      },
      {
        title: t('Management'),
        subMenu: [
          {
            title: t('Archive'),
            icon: <ArchiveIcon />,
            route: routes.dummy,
          },
          {
            title: t('Settings'),
            icon: <SettingsIcon />,
            subMenu: [
              {
                title: t('Profile'),
                route: routes.dummy,
              },
              {
                title: t('Security'),
                route: routes.dummy,
              },
              {
                title: t('Notifications'),
                route: routes.dummy,
              },
            ],
          },
        ],
      },
      {
        title: t('Communication'),
        subMenu: [
          {
            title: t('Messages'),
            icon: <MessageIcon />,
            route: routes.dummy,
          },
          {
            title: t('Emails'),
            icon: <EmailIcon />,
            route: routes.dummy,
          },
        ],
      },
    ];
  }, [t]);
};
