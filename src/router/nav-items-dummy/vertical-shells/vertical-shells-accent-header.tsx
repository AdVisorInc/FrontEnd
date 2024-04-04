import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import CommentTwoToneIcon from '@mui/icons-material/CommentTwoTone';
import EventNoteTwoToneIcon from '@mui/icons-material/EventNoteTwoTone';
import FolderTwoToneIcon from '@mui/icons-material/FolderTwoTone';
import InboxTwoToneIcon from '@mui/icons-material/InboxTwoTone';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';
import SettingsApplicationsTwoToneIcon from '@mui/icons-material/SettingsApplicationsTwoTone';
import StorageTwoToneIcon from '@mui/icons-material/StorageTwoTone';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem } from 'src/router/menuItem';
import { routes } from 'src/router/routes';

export const useMenuItems = (): MenuItem[] => {
  const { t } = useTranslation();
  return useMemo(() => {
    return [
      {
        title: t('Workspace'),
        subMenu: [
          {
            title: t('Inbox'),
            icon: <InboxTwoToneIcon />,
            route: '/shells/vertical-shell-accent-header',
          },
          {
            title: t('Analytics'),
            icon: <BarChartTwoToneIcon />,
            route: routes.dummy,
          },
          {
            title: t('Schedule'),
            icon: <EventNoteTwoToneIcon />,
            route: routes.dummy,
          },
          {
            title: t('Folders'),
            icon: <FolderTwoToneIcon />,
            subMenu: [
              {
                title: t('Categories'),
                route: routes.dummy,
              },
              {
                title: t('Tags'),
                route: routes.dummy,
              },
              {
                title: t('Items'),
                route: routes.dummy,
              },
            ],
          },
          {
            title: t('Region Data'),
            icon: <MapTwoToneIcon />,
            route: routes.dummy,
          },
        ],
      },
      {
        title: t('Storage'),
        subMenu: [
          {
            title: t('Databases'),
            icon: <StorageTwoToneIcon />,
            route: routes.dummy,
          },
          {
            title: t('Preferences'),
            icon: <SettingsApplicationsTwoToneIcon />,
            subMenu: [
              {
                title: t('General'),
                route: routes.dummy,
              },
              {
                title: t('Backup & Restore'),
                route: routes.dummy,
              },
              {
                title: t('Versioning'),
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
            title: t('Feedback'),
            icon: <CommentTwoToneIcon />,
            route: routes.dummy,
          },
        ],
      },
    ];
  }, [t]);
};
