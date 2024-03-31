import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
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
        icon: <DashboardOutlinedIcon />,
        route: routes.dummy,
        subMenu: [
          { title: t('Performance'), route: routes.dummy },
          { title: t('KPIs'), route: routes.dummy },
          {
            title: t('Management'),
            subMenu: [
              {
                title: t('Departments'),
                route: routes.dummy,
              },
              {
                title: t('Personnel'),
                route: routes.dummy,
              },
            ],
          },
          { title: t('Strategy'), route: routes.dummy },
        ],
      },
      {
        title: t('Corporate'),
        icon: <BusinessCenterOutlinedIcon />,
        route: '/shells/stacked-shell-top-nav-wide',
        subMenu: [
          { title: t('Team Structure'), route: '/shells/stacked-shell-top-nav-wide' },
          { title: t('Projects'), route: routes.dummy },
        ],
      },
      {
        title: t('Community'),
        icon: <PeopleOutlineIcon />,
        route: routes.dummy,
        subMenu: [
          { title: t('Members'), route: routes.dummy },
          { title: t('Events'), route: routes.dummy },
        ],
      },
      { title: t('Settings'), icon: <SettingsOutlinedIcon />, route: routes.dummy },
    ];
  }, [t]);
};
