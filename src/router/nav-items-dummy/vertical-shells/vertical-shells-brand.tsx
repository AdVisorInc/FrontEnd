import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import BookTwoToneIcon from '@mui/icons-material/BookTwoTone';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';
import CalendarViewDayTwoToneIcon from '@mui/icons-material/CalendarViewDayTwoTone';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
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
        title: t('Operations'),
        subMenu: [
          {
            title: t('Overview'),
            icon: <DashboardTwoToneIcon />,
            route: routes.dummy,
          },
          {
            title: t('Analytics'),
            icon: <BarChartTwoToneIcon />,
            route: '/shells/vertical-shell-brand',
          },
          {
            title: t('Schedule'),
            icon: <CalendarViewDayTwoToneIcon />,
            route: routes.dummy,
          },
          {
            title: t('Contracts'),
            icon: <BusinessCenterTwoToneIcon />,
            subMenu: [
              {
                title: t('Manage Contracts'),
                route: routes.dummy,
              },
              {
                title: t('Contract Analysis'),
                route: routes.dummy,
              },
              {
                title: t('Agreements'),
                subMenu: [
                  {
                    title: t('Partnerships'),
                    route: routes.dummy,
                  },
                  {
                    title: t('Deals'),
                    route: routes.dummy,
                  },
                ],
              },
            ],
          },
          {
            title: t('Locations'),
            icon: <MapTwoToneIcon />,
            route: routes.dummy,
          },
        ],
      },
      {
        title: t('Library'),
        subMenu: [
          {
            title: t('Documents'),
            icon: <BookTwoToneIcon />,
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
                title: t('Storage'),
                route: routes.dummy,
              },
              {
                title: t('Printing'),
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
            title: t('Emails'),
            icon: <MailOutlineTwoToneIcon />,
            route: routes.dummy,
          },
        ],
      },
    ];
  }, [t]);
};
