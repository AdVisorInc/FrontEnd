import AttachMoneyIcon from '@mui/icons-material/AttachMoneyOutlined';
import BusinessIcon from '@mui/icons-material/BusinessCenterOutlined';
import ChatIcon from '@mui/icons-material/ChatOutlined';
import CalendarIcon from '@mui/icons-material/EventOutlined';
import FeedbackIcon from '@mui/icons-material/FeedbackOutlined';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import PeopleIcon from '@mui/icons-material/PeopleOutlineOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasketOutlined';
import StarIcon from '@mui/icons-material/StarOutlineOutlined';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem } from 'src/router/menuItem';
import { routes } from 'src/router/routes';

export const useMenuItems = (): MenuItem[] => {
  const { t } = useTranslation();
  return useMemo(() => {
    return [
      {
        title: t('Events'),
        icon: <CalendarIcon />,
        route: routes.dummy,
        subMenu: [
          { title: t('Upcoming'), route: routes.dummy },
          { title: t('Past Events'), route: routes.dummy },
          {
            title: t('Calendar Types'),
            route: '/shells/collapsed-shell-double-accent',
            subMenu: [
              { title: t('Business'), route: routes.dummy },
              { title: t('Holiday'), route: '/shells/collapsed-shell-double-accent' },
              { title: t('Personal'), route: routes.dummy },
            ],
          },
          { title: t('Notifications'), route: routes.dummy },
        ],
      },
      {
        title: t('Communication'),
        icon: <ChatIcon />,
        route: routes.dummy,
        subMenu: [
          { title: t('Chats'), route: routes.dummy },
          { title: t('Announcements'), route: routes.dummy },
          { title: t('Feedback'), route: routes.dummy, icon: <FeedbackIcon /> },
        ],
      },
      {
        title: t('Business Development'),
        icon: <BusinessIcon />,
        route: routes.dummy,
        subMenu: [
          { title: t('Leads'), route: routes.dummy },
          { title: t('Opportunities'), route: routes.dummy },
          { title: t('Clients'), route: routes.dummy },
          { title: t('Finance'), route: routes.dummy, icon: <AttachMoneyIcon /> },
        ],
      },
      {
        title: t('Favorites'),
        icon: <StarIcon />,
        route: routes.dummy,
        subMenu: [
          { title: t('Bookmarked Items'), route: routes.dummy },
          { title: t('Highlighted Tasks'), route: routes.dummy },
          { title: t('Preferences'), route: routes.dummy, icon: <SettingsIcon /> },
        ],
      },
      {
        title: t('Teams'),
        icon: <PeopleIcon />,
        route: routes.dummy,
        subMenu: [
          { title: t('Management'), route: routes.dummy },
          { title: t('Developers'), route: routes.dummy },
          { title: t('Sales'), route: routes.dummy },
          { title: t('HR'), route: routes.dummy },
        ],
      },
      {
        title: t('Orders'),
        icon: <ShoppingBasketIcon />,
        route: routes.dummy,
        subMenu: [
          { title: t('New Orders'), route: routes.dummy },
          { title: t('Shipped Orders'), route: routes.dummy },
          { title: t('Returns'), route: routes.dummy },
          { title: t('Invoices'), route: routes.dummy },
        ],
      },
      {
        title: t('Documentation'),
        icon: <FileCopyIcon />,
        route: routes.dummy,
        subMenu: [
          { title: t('API Docs'), route: routes.dummy },
          { title: t('User Guide'), route: routes.dummy },
          { title: t('Technical Papers'), route: routes.dummy },
          { title: t('Release Notes'), route: routes.dummy },
        ],
      },
    ];
  }, [t]);
};
