import ArchiveIcon from '@heroicons/react/24/outline/ArchiveBoxIcon';
import CityIcon from '@heroicons/react/24/outline/BuildingLibraryIcon';
import CalendarIcon from '@heroicons/react/24/outline/CalendarIcon';
import MessageIcon from '@heroicons/react/24/outline/ChatBubbleLeftEllipsisIcon';
import SettingsIcon from '@heroicons/react/24/outline/Cog6ToothIcon';
import DocumentIcon from '@heroicons/react/24/outline/DocumentMagnifyingGlassIcon';
import ReportIcon from '@heroicons/react/24/outline/FlagIcon';
import HomeIcon from '@heroicons/react/24/outline/HomeIcon';
import { Box } from '@mui/material';
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
            title: t('Home'),
            icon: (
              <Box
                width={24}
                height={24}
              >
                <HomeIcon />
              </Box>
            ),
            route: '/shells/vertical-shell-dark',
          },
          {
            title: t('Reports'),
            icon: (
              <Box
                width={24}
                height={24}
              >
                <ReportIcon />
              </Box>
            ),
            route: routes.dummy,
          },
          {
            title: t('Calendar'),
            icon: (
              <Box
                width={24}
                height={24}
              >
                <CalendarIcon />
              </Box>
            ),
            route: routes.dummy,
          },
          {
            title: t('Documents'),
            icon: (
              <Box
                width={24}
                height={24}
              >
                <DocumentIcon />
              </Box>
            ),
            subMenu: [
              {
                title: t('Listings'),
                route: routes.dummy,
              },
              {
                title: t('Reviews'),
                route: routes.dummy,
              },
              {
                title: t('Files'),
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
            title: t('City Insights'),
            icon: (
              <Box
                width={24}
                height={24}
              >
                <CityIcon />
              </Box>
            ),
            route: routes.dummy,
          },
        ],
      },
      {
        title: t('Archive'),
        subMenu: [
          {
            title: t('Old Docs'),
            icon: (
              <Box
                width={24}
                height={24}
              >
                <ArchiveIcon />
              </Box>
            ),
            route: routes.dummy,
          },
          {
            title: t('Configurations'),
            icon: (
              <Box
                width={24}
                height={24}
              >
                <SettingsIcon />
              </Box>
            ),
            subMenu: [
              {
                title: t('Settings'),
                route: routes.dummy,
              },
              {
                title: t('Backups'),
                route: routes.dummy,
              },
              {
                title: t('Updates'),
                route: routes.dummy,
              },
            ],
          },
        ],
      },
      {
        title: t('Messages'),
        subMenu: [
          {
            title: t('Chats'),
            icon: (
              <Box
                width={24}
                height={24}
              >
                <MessageIcon />
              </Box>
            ),
            route: routes.dummy,
          },
        ],
      },
    ];
  }, [t]);
};
