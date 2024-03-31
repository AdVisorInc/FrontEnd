import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveTwoTone';
import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import FolderTwoToneIcon from '@mui/icons-material/FolderTwoTone';
import InsightsTwoToneIcon from '@mui/icons-material/InsightsTwoTone';
import MessageTwoToneIcon from '@mui/icons-material/MessageTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem } from 'src/router/menuItem';
import { routes } from 'src/router/routes';

export const useMenuItems = (): MenuItem[] => {
  const { t } = useTranslation();
  return useMemo(() => {
    return [
      {
        title: t('Main Dashboard'),
        subMenu: [
          {
            title: t('Overview'),
            icon: <DashboardTwoToneIcon />,
            route: '/shells/vertical-shell-light',
          },
          {
            title: t('Analytics'),
            icon: <BarChartTwoToneIcon />,
            route: routes.dummy,
          },
          {
            title: t('Event Calendar'),
            icon: <CalendarTodayTwoToneIcon />,
            route: routes.dummy,
          },
          {
            title: t('Resource Planning'),
            icon: <FolderTwoToneIcon />,
            subMenu: [
              {
                title: t('Documents'),
                route: routes.dummy,
              },
              {
                title: t('Project Files'),
                route: routes.dummy,
                subMenu: [
                  {
                    title: t('Reports'),
                    route: routes.dummy,
                  },
                  {
                    title: t('Logs'),
                    route: routes.dummy,
                  },
                ],
              },
            ],
          },
          {
            title: t('Insights'),
            icon: <InsightsTwoToneIcon />,
            route: routes.dummy,
          },
        ],
      },
      {
        title: t('System'),
        subMenu: [
          {
            title: t('Archive'),
            icon: <ArchiveTwoToneIcon />,
            route: routes.dummy,
          },
          {
            title: t('Settings'),
            icon: <SettingsTwoToneIcon />,
            subMenu: [
              {
                title: t('General'),
                route: routes.dummy,
              },
              {
                title: t('User Preferences'),
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
            icon: <MessageTwoToneIcon />,
            route: routes.dummy,
          },
        ],
      },
    ];
  }, [t]);
};
