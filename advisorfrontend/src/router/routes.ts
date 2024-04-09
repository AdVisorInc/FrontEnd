export const routes = {
  index: '/',
  dummy: '',
  auth: {
    'custom.login': '/auth/custom/login',
    'custom.register': '/auth/custom/register',
    'custom.reset-password': '/auth/custom/reset-password',

    'supabase.callback': '/auth/supabase/callback',
    'supabase.login': '/auth/supabase/login',
    'supabase.register': '/auth/supabase/register',
    'supabase.register-confirm': '/auth/supabase/register-confirm',
    'supabase.reset-password': '/auth/supabase/reset-password',
    'supabase.recover-link-sent': '/auth/supabase/recover-link-sent',
    'supabase.update-password': '/auth/supabase/update-password',
  },

  components: {
    // Features landing page
    index: '/features',

    // Application Shells
    'vertical-shells': '/features/application-ui/vertical-shells',
    'collapsed-shells': '/features/application-ui/collapsed-shells',
    'stacked-shells': '/features/application-ui/stacked-shells',

    // Layout
    foundation: '/features/application-ui/foundation',
    'content-grids': '/features/application-ui/content-grids',
    'content-shells': '/features/application-ui/content-shells',
    'card-shells': '/features/application-ui/card-shells',
    'list-containers': '/features/application-ui/list-containers',
    dividers: '/features/application-ui/dividers',

    // Headings
    'page-headings': '/features/application-ui/page-headings',
    'card-headings': '/features/application-ui/card-headings',
    'section-headings': '/features/application-ui/section-headings',

    // Elements
    buttons: '/features/application-ui/buttons',
    'button-groups': '/features/application-ui/button-groups',
    'toggle-buttons': '/features/application-ui/toggle-buttons',
    badges: '/features/application-ui/badges',
    chips: '/features/application-ui/chips',
    avatars: '/features/application-ui/avatars',

    dropdowns: '/features/application-ui/dropdowns',
    ratings: '/features/application-ui/ratings',
    accordions: '/features/application-ui/accordions',
    'progress-indicators': '/features/application-ui/progress-indicators',

    // Navigation
    'horizontal-menus': '/features/application-ui/horizontal-menus',
    'vertical-menus': '/features/application-ui/vertical-menus',
    pagination: '/features/application-ui/pagination',
    tabs: '/features/application-ui/tabs',
    steppers: '/features/application-ui/steppers',
    breadcrumbs: '/features/application-ui/breadcrumbs',
    'speed-dials': '/features/application-ui/speed-dials',

    // Feedback
    alerts: '/features/application-ui/alerts',
    'empty-states': '/features/application-ui/empty-states',
    skeleton: '/features/application-ui/skeleton',

    // Overlays
    popovers: '/features/application-ui/popovers',
    tooltips: '/features/application-ui/tooltips',
    notifications: '/features/application-ui/notifications',
    dialogs: '/features/application-ui/dialogs',
    drawers: '/features/application-ui/drawers',
    'navigation-overlays': '/features/application-ui/navigation-overlays',

    // Lists
    'stacked-lists': '/features/application-ui/stacked-lists',
    'horizontal-lists': '/features/application-ui/horizontal-lists',
    tables: '/features/application-ui/tables',
    timelines: '/features/application-ui/timelines',

    // Grid Data Display
    'data-grid-lists': '/features/application-ui/data-grid-lists',
    'stats-grid-lists': '/features/application-ui/stats-grid-lists',
    'description-grid-lists': '/features/application-ui/description-grid-lists',
    'visualization-grid-lists': '/features/application-ui/visualization-grid-lists',
    'progress-grid-lists': '/features/application-ui/progress-grid-lists',
    'image-grid-lists': '/features/application-ui/image-grid-lists',
    'icon-grid-lists': '/features/application-ui/icon-grid-lists',
    'composed-blocks': '/features/application-ui/composed-blocks',

    // Data Visualization
    'area-charts': '/features/application-ui/area-charts',
    'bar-charts': '/features/application-ui/bar-charts',
    'line-charts': '/features/application-ui/line-charts',
    'pie-doughnut-charts': '/features/application-ui/pie-doughnut-charts',
    'sparkline-charts': '/features/application-ui/sparkline-charts',
    'gauge-indicators': '/features/application-ui/gauge-indicators',
    'composed-visualization-blocks': '/features/application-ui/composed-visualization-blocks',

    // Forms
    'form-layouts': '/features/application-ui/form-layouts',
    'user-auth': '/features/application-ui/user-auth',
    autocomplete: '/features/application-ui/autocomplete',
    checkboxes: '/features/application-ui/checkboxes',
    'radio-groups': '/features/application-ui/radio-groups',
    select: '/features/application-ui/select',
    switches: '/features/application-ui/switches',
    textarea: '/features/application-ui/textarea',
    input: '/features/application-ui/input',
    slider: '/features/application-ui/slider',
    upload: '/features/application-ui/upload',
    datepicker: '/features/application-ui/datepicker',
  },
  website: {
    index: '/',
    pricing: '/pricing',
  },
  blueprints: {
    index: '/blueprints',
    'generic-admin-dashboard': {
      index: '/blueprints/generic-admin-dashboard/dashboards/reports',

      dashboards: {
        reports: '/blueprints/generic-admin-dashboard/dashboards/reports',
        expenses: '/blueprints/generic-admin-dashboard/dashboards/expenses',
        statistics: '/blueprints/generic-admin-dashboard/dashboards/statistics',
        automation: '/blueprints/generic-admin-dashboard/dashboards/automation',
        analytics: '/blueprints/generic-admin-dashboard/dashboards/analytics',
        hospital: '/blueprints/generic-admin-dashboard/dashboards/hospital',
        helpdesk: '/blueprints/generic-admin-dashboard/dashboards/helpdesk',
        monitoring: '/blueprints/generic-admin-dashboard/dashboards/monitoring',
      },
      applications: {
        calendar: '/blueprints/generic-admin-dashboard/applications/calendar',
        'file-manager': '/blueprints/generic-admin-dashboard/applications/file-manager',
        'jobs-platform': '/blueprints/generic-admin-dashboard/applications/jobs-platform',
        mailbox: '/blueprints/generic-admin-dashboard/applications/mailbox',
        messenger: '/blueprints/generic-admin-dashboard/applications/messenger',
        'projects-board': '/blueprints/generic-admin-dashboard/applications/projects-board',
        tasks: '/blueprints/generic-admin-dashboard/applications/tasks',
      },
      management: {
        users: {
          listing: '/blueprints/generic-admin-dashboard/management/users-listing',
          profile: '/blueprints/generic-admin-dashboard/management/users-profile',
        },
        projects: '/blueprints/generic-admin-dashboard/management/projects',
        commerce: {
          'shop-front': '/blueprints/generic-admin-dashboard/management/shop-front',
          'shop-listing': '/blueprints/generic-admin-dashboard/management/shop-listing',
          'shop-product-create':
            '/blueprints/generic-admin-dashboard/management/shop-product-create',
          'shop-product-details':
            '/blueprints/generic-admin-dashboard/management/shop-product-details',
          'invoices-listing': '/blueprints/generic-admin-dashboard/management/invoices-listing',
          'invoices-details': '/blueprints/generic-admin-dashboard/management/invoices-details',
        },
      },
    },
  },
  general: {
    index: '/general',
    'overview': {
      index: '/general/overview',
    },
  },

  404: '/404',
};
