import ApartmentIcon from '@mui/icons-material/ApartmentOutlined';
import GroupWorkIcon from '@mui/icons-material/GroupWorkOutlined';
import LocalLibraryIcon from '@mui/icons-material/LocalLibraryOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShippingOutlined';
import LoyaltyIcon from '@mui/icons-material/LoyaltyOutlined';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import GraphIcon from '@mui/icons-material/ShowChartOutlined';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem } from 'src/router/menuItem';
import { routes } from 'src/router/routes';

export const useMenuItems = (): MenuItem[] => {
  const { t } = useTranslation();
  return useMemo(() => {
    return [
      {
        title: t('Collaboration'),
        icon: <GroupWorkIcon />,
        route: '/shells/collapsed-shell-double',
        subMenu: [
          { title: t('Teams'), route: routes.dummy },
          { title: t('Projects'), route: routes.dummy },
          {
            title: t('Knowledge Base'),
            icon: <LocalLibraryIcon />,
            route: '/shells/collapsed-shell-double',
            subMenu: [
              { title: t('FAQs'), route: routes.dummy },
              { title: t('Guidelines'), route: '/shells/collapsed-shell-double' },
              { title: t('Best Practices'), route: routes.dummy },
            ],
          },
          { title: t('Calendar'), route: routes.dummy },
        ],
      },
      {
        title: t('Analytics'),
        icon: <GraphIcon />,
        route: routes.dummy,
      },
      {
        title: t('Supply Chain'),
        icon: <LocalShippingIcon />,
        route: routes.dummy,
      },
      {
        title: t('Checklists'),
        icon: <PlaylistAddCheckIcon />,
        route: routes.dummy,
      },
      {
        title: t('Departments'),
        icon: <ApartmentIcon />,
        route: routes.dummy,
      },
      {
        title: t('Loyalty Program'),
        icon: <LoyaltyIcon />,
        route: routes.dummy,
      },
    ];
  }, [t]);
};
