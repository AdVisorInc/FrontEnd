import ContractTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import EventTwoToneIcon from '@mui/icons-material/EventTwoTone';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';
import PlaceTwoToneIcon from '@mui/icons-material/PlaceTwoTone';
import SettingsApplicationsTwoToneIcon from '@mui/icons-material/SettingsApplicationsTwoTone';
import ChartTwoToneIcon from '@mui/icons-material/ShowChartTwoTone';
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
            route: '/shells/vertical-shell-white-off',
          },
          {
            title: t('Analytics'),
            icon: <ChartTwoToneIcon />,
            route: routes.dummy,
          },
          {
            title: t('Events'),
            icon: <EventTwoToneIcon />,
            route: routes.dummy,
          },
          {
            title: t('Contracts'),
            icon: <ContractTwoToneIcon />,
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
            title: t('Places'),
            icon: <PlaceTwoToneIcon />,
            route: routes.dummy,
          },
        ],
      },
      {
        title: t('Library'),
        subMenu: [
          {
            title: t('Books'),
            icon: <LibraryBooksTwoToneIcon />,
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
                title: t('Storage'),
                route: routes.dummy,
              },
              {
                title: t('Print'),
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
            icon: <EmailTwoToneIcon />,
            route: routes.dummy,
          },
        ],
      },
    ];
  }, [t]);
};
