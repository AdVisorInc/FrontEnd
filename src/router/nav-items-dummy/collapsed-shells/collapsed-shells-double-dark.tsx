import BuildIcon from '@mui/icons-material/BuildOutlined';
import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import FolderIcon from '@mui/icons-material/FolderOutlined';
import SchoolIcon from '@mui/icons-material/SchoolOutlined';
import StorefrontIcon from '@mui/icons-material/StorefrontOutlined';
import WorkIcon from '@mui/icons-material/WorkHistoryOutlined';
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
        icon: <DashboardIcon />,
        route: routes.dummy,
        subMenu: [
          { title: t('Overview'), route: routes.dummy },
          { title: t('Analytics'), route: routes.dummy },
          { title: t('User Insights'), route: routes.dummy },
          { title: t('Performance'), route: routes.dummy },
          {
            title: t('Reports'),
            route: routes.dummy,
            subMenu: [
              {
                title: t('Monthly Report'),
                route: routes.dummy,
              },
              {
                title: t('Yearly Report'),
                route: routes.dummy,
              },
              {
                title: t('Custom Report'),
                route: routes.dummy,
              },
            ],
          },
          { title: t('Notifications'), route: routes.dummy },
          { title: t('Trends'), route: routes.dummy },
          { title: t('Settings'), route: routes.dummy },
        ],
      },
      {
        title: t('Projects'),
        icon: <FolderIcon />,
        route: '/shells/collapsed-shell-double-dark',
        subMenu: [
          { title: t('All Projects'), route: routes.dummy },
          { title: t('Ongoing'), route: '/shells/collapsed-shell-double-dark' },
          { title: t('Completed'), route: routes.dummy },
          { title: t('Archived'), route: routes.dummy },
        ],
      },
      {
        title: t('Tasks'),
        icon: <WorkIcon />,
        route: routes.dummy,
        subMenu: [
          { title: t('My Tasks'), route: routes.dummy },
          { title: t('Team Tasks'), route: routes.dummy },
          { title: t('All Tasks'), route: routes.dummy },
        ],
      },
      {
        title: t('Settings'),
        icon: <BuildIcon />,
        route: routes.dummy,
        subMenu: [
          { title: t('Profile'), route: routes.dummy },
          { title: t('Billing'), route: routes.dummy },
          { title: t('Security'), route: routes.dummy },
        ],
      },
      {
        title: t('Marketplace'),
        icon: <StorefrontIcon />,
        route: routes.dummy,
        subMenu: [
          { title: t('Products'), route: routes.dummy },
          { title: t('Vendors'), route: routes.dummy },
          { title: t('Categories'), route: routes.dummy },
        ],
      },
      {
        title: t('Education'),
        icon: <SchoolIcon />,
        route: routes.dummy,
        subMenu: [
          { title: t('Courses'), route: routes.dummy },
          { title: t('Students'), route: routes.dummy },
          { title: t('Teachers'), route: routes.dummy },
        ],
      },
    ];
  }, [t]);
};
