import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem } from 'src/router/menuItem';
import { routes } from 'src/router/routes';

export const useMenuItems = (): MenuItem[] => {
  const { t } = useTranslation();
  return useMemo(() => {
    return [
      {
        title: t('Overview'),
        icon: <DashboardOutlinedIcon />,
        route: '/shells/collapsed-shell-single-white',
        subMenu: [
          { title: t('Metrics'), route: routes.dummy },
          { title: t('Insights'), route: '/shells/collapsed-shell-single-white' },
          { title: t('Reports'), route: routes.dummy },
          {
            title: t('Configuration'),
            subMenu: [
              {
                title: t('Preferences'),
                route: routes.dummy,
              },
              {
                title: t('Settings'),
                route: routes.dummy,
              },
            ],
          },
          { title: t('Schedules'), route: routes.dummy },
        ],
      },
      { title: t('Documentation'), icon: <FolderOutlinedIcon />, route: routes.dummy },
      { title: t('Chats'), icon: <ChatOutlinedIcon />, route: routes.dummy },
      {
        title: t('Team'),
        icon: <GroupOutlinedIcon />,
        route: routes.dummy,
        subMenu: [
          { title: t('Members'), route: routes.dummy },
          { title: t('Groups'), route: routes.dummy },
        ],
      },
    ];
  }, [t]);
};
