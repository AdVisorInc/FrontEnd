import AppsTwoToneIcon from '@mui/icons-material/AppsTwoTone';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import LayersTwoToneIcon from '@mui/icons-material/LayersTwoTone';
import { MenuItem } from 'src/router/menuItem';
import { routes } from 'src/router/routes';
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

const useMenuItemsCollapsedShells = (t: (token: string) => string): MenuItem[] => {
  return [
    {
      title: t('Overview'),
      icon: <DashboardRoundedIcon/>,
      route: routes.blueprints['generic-admin-dashboard'].dashboards.overview,
    },
    {
      title: 'Dashboards',
      icon: <DashboardTwoToneIcon />,
      route: routes.blueprints['generic-admin-dashboard'].dashboards.organization,
      subMenu: [
        {
          title: t('Organization'),
          icon: <DashboardRoundedIcon/>,
          route: routes.blueprints['generic-admin-dashboard'].dashboards.organization,
        },
      ],
    },
    {
      title: 'Apps',
      icon: <AppsTwoToneIcon />,
      route: routes.blueprints['generic-admin-dashboard'].applications.calendar,
      subMenu: [
        {
          title: t('Calendar'),
          route: routes.blueprints['generic-admin-dashboard'].applications.calendar,
        },
        {
          title: t('File manager'),
          route: routes.blueprints['generic-admin-dashboard'].applications['file-manager'],
        },
        {
          title: t('Jobs platform'),
          route: routes.blueprints['generic-admin-dashboard'].applications['jobs-platform'],
        },
        {
          title: t('Mailbox'),
          route: routes.blueprints['generic-admin-dashboard'].applications.mailbox,
        },
        {
          title: t('Messenger'),
          route: routes.blueprints['generic-admin-dashboard'].applications.messenger,
        },
        {
          title: t('Projects board'),
          route: routes.blueprints['generic-admin-dashboard'].applications['projects-board'],
        },
        {
          title: t('Tasks'),
          route: routes.blueprints['generic-admin-dashboard'].applications.tasks,
        },
      ],
    },
    {
      title: 'Manage',
      icon: <BusinessCenterTwoToneIcon />,
      route: routes.blueprints['generic-admin-dashboard'].management.users.listing,
      subMenu: [
        {
          title: 'Users',
          route: routes.blueprints['generic-admin-dashboard'].management.users.listing,
          subMenu: [
            {
              title: t('Listing'),
              route: routes.blueprints['generic-admin-dashboard'].management.users.listing,
            },
            {
              title: t('User profile'),
              route: routes.blueprints['generic-admin-dashboard'].management.users.profile,
            },
          ],
        },
        {
          title: t('Projects'),
          route: routes.blueprints['generic-admin-dashboard'].management.projects,
        },
        {
          title: 'Commerce',
          route: routes.blueprints['generic-admin-dashboard'].management.commerce['shop-listing'],
          subMenu: [
            {
              title: t('Shop front'),
              route: routes.blueprints['generic-admin-dashboard'].management.commerce['shop-front'],
            },
            {
              title: t('Shop listing'),
              route:
                routes.blueprints['generic-admin-dashboard'].management.commerce['shop-listing'],
            },
            {
              title: t('Product details'),
              route:
                routes.blueprints['generic-admin-dashboard'].management.commerce[
                  'shop-product-details'
                ],
            },
            {
              title: t('Create product'),
              route:
                routes.blueprints['generic-admin-dashboard'].management.commerce[
                  'shop-product-create'
                ],
            },
          ],
        },
        {
          title: 'Invoices',
          route:
            routes.blueprints['generic-admin-dashboard'].management.commerce['invoices-listing'],
          subMenu: [
            {
              title: t('Listing'),
              route:
                routes.blueprints['generic-admin-dashboard'].management.commerce[
                  'invoices-listing'
                ],
            },
            {
              title: t('Invoice details'),
              route:
                routes.blueprints['generic-admin-dashboard'].management.commerce[
                  'invoices-details'
                ],
            },
          ],
        },
      ],
    },
    {
      title: t('UI Comps'),
      icon: <LayersTwoToneIcon />,
      route: routes.components.index,
    },
  ];
};

export default useMenuItemsCollapsedShells;
