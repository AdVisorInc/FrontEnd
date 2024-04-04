import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { MenuItem } from 'src/router/menuItem';
import { routes } from 'src/router/routes';

const useMenuItemsVerticalShells = (t: (token: string) => string): MenuItem[] => {
  return [
    {
      title: t('General'),
      subMenu: [
        {
          title: t('Dashboards'),
          icon: <DashboardRoundedIcon />,
          subMenu: [
            {
              title: t('Reports'),
              route: routes.blueprints['generic-admin-dashboard'].dashboards.reports,
            },
            {
              title: t('Expenses'),
              route: routes.blueprints['generic-admin-dashboard'].dashboards.expenses,
            },
            {
              title: t('Statistics'),
              route: routes.blueprints['generic-admin-dashboard'].dashboards.statistics,
            },
            {
              title: t('Automation'),
              route: routes.blueprints['generic-admin-dashboard'].dashboards.automation,
            },
            {
              title: t('Analytics'),
              route: routes.blueprints['generic-admin-dashboard'].dashboards.analytics,
            },
            {
              title: t('Hospital'),
              route: routes.blueprints['generic-admin-dashboard'].dashboards.hospital,
            },
            {
              title: t('Helpdesk'),
              route: routes.blueprints['generic-admin-dashboard'].dashboards.helpdesk,
            },
            {
              title: t('Monitoring'),
              route: routes.blueprints['generic-admin-dashboard'].dashboards.monitoring,
            },
          ],
        },
        {
          title: t('Applications'),
          icon: <AppsRoundedIcon />,
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
      ],
    },
    {
      title: t('Management'),
      subMenu: [
        {
          title: t('Users'),
          icon: <PeopleRoundedIcon />,
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
          icon: <BusinessCenterRoundedIcon />,
          route: routes.blueprints['generic-admin-dashboard'].management.projects,
        },
        {
          title: t('Commerce'),
          icon: <ShoppingCartRoundedIcon />,
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
          title: t('Invoices'),
          icon: <ReceiptRoundedIcon />,
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
      title: t('Foundation'),
      subMenu: [
        {
          title: t('UI Components'),
          icon: <LayersRoundedIcon />,
          route: routes.components.index,
        },
      ],
    },
  ];
};

export default useMenuItemsVerticalShells;
