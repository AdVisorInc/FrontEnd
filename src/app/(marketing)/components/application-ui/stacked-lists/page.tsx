'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiStackedListsAccountSecurity from 'src/components/application-ui/stacked-lists/account-security/account-security';
import ApplicationUiStackedListsAvatarLabelAction from 'src/components/application-ui/stacked-lists/avatar-label-action/avatar-label-action';
import ApplicationUiStackedListsChat from 'src/components/application-ui/stacked-lists/chat/chat';
import ApplicationUiStackedListsDoctorsList from 'src/components/application-ui/stacked-lists/doctors-list/doctors-list';
import ApplicationUiStackedListsLandingPages from 'src/components/application-ui/stacked-lists/landing-pages/landing-pages';
import ApplicationUiStackedListsLatestActions from 'src/components/application-ui/stacked-lists/latest-actions/latest-actions';
import ApplicationUiStackedListsLatestIssues from 'src/components/application-ui/stacked-lists/latest-issues/latest-issues';
import ApplicationUiStackedListsMembersSelectInput from 'src/components/application-ui/stacked-lists/members-select-input/members-select-input';
import ApplicationUiStackedListsMessenger from 'src/components/application-ui/stacked-lists/messenger/messenger';
import ApplicationUiStackedListsNavigationPills from 'src/components/application-ui/stacked-lists/navigation-pills/navigation-pills';
import ApplicationUiStackedListsOpenTickets from 'src/components/application-ui/stacked-lists/open-tickets/open-tickets';
import ApplicationUiStackedListsPatientNotifications from 'src/components/application-ui/stacked-lists/patient-notifications/patient-notifications';
import ApplicationUiStackedListsPortfolio from 'src/components/application-ui/stacked-lists/portfolio/portfolio';
import ApplicationUiStackedListsPricingPlans from 'src/components/application-ui/stacked-lists/pricing-plans/pricing-plans';
import ApplicationUiStackedListsProductsRoadmap from 'src/components/application-ui/stacked-lists/products-roadmap/products-roadmap';
import ApplicationUiStackedListsRecentActivity from 'src/components/application-ui/stacked-lists/recent-activity/recent-activity';
import ApplicationUiStackedListsRecentFiles from 'src/components/application-ui/stacked-lists/recent-files/recent-files';
import ApplicationUiStackedListsRecentTransactions from 'src/components/application-ui/stacked-lists/recent-transactions/recent-transactions';
import ApplicationUiStackedListsShoppingCard from 'src/components/application-ui/stacked-lists/shopping-card/shopping-card';
import ApplicationUiStackedListsTopGrossing from 'src/components/application-ui/stacked-lists/top-grossing/top-grossing';
import ApplicationUiStackedListsTopSellers from 'src/components/application-ui/stacked-lists/top-sellers/top-sellers';
import ApplicationUiStackedListsTopTrainers from 'src/components/application-ui/stacked-lists/top-trainers/top-trainers';
import ApplicationUiStackedListsTransactions from 'src/components/application-ui/stacked-lists/transactions/transactions';
import ApplicationUiStackedListsUpcomingConsults from 'src/components/application-ui/stacked-lists/upcoming-consults/upcoming-consults';
import ApplicationUiStackedListsUpdates from 'src/components/application-ui/stacked-lists/updates/updates';
import ApplicationUiStackedListsUserAnalytics from 'src/components/application-ui/stacked-lists/user-analytics/user-analytics';
import ApplicationUiStackedListsUsersList from 'src/components/application-ui/stacked-lists/users-list/users-list';
import ApplicationUiStackedListsVirtualServers from 'src/components/application-ui/stacked-lists/virtual-servers/virtual-servers';
import ApplicationUiStackedListsWeeklySales from 'src/components/application-ui/stacked-lists/weekly-sales/weekly-sales';
import { Helmet } from 'src/components/base/helmet';
import MarketingPageTitle from 'src/components/website/page-title';
import { MarketingLayout as Layout } from 'src/layouts/marketing';

const components: {
  element: JSX.Element;
  sourceCode?: string;
  title: string;
  isComplex: string;
  size: string;
  description: string;
  height: string;
  category: string;
}[] = [
  {
    element: <ApplicationUiStackedListsAccountSecurity />,
    title: 'AccountSecurity',
    isComplex: 'false',
    size: 'xs',
    description: 'This card variant comes with a header section.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsAvatarLabelAction />,
    title: 'AvatarLabelAction',
    isComplex: 'false',
    size: 'sm',
    description: 'Stacked list featuring avatars, labels, and action items.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsChat />,
    title: 'Chat',
    isComplex: 'false',
    size: 'sm',
    description: 'A stacked list layout designed for chat interfaces.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsDoctorsList />,
    title: 'DoctorsList',
    isComplex: 'false',
    size: 'sm',
    description: 'List focusing on doctor profiles, ideal for healthcare applications.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsLandingPages />,
    title: 'LandingPages',
    isComplex: 'false',
    size: 'md',
    description: 'List variant showcasing different landing page designs or options.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsLatestActions />,
    title: 'LatestActions',
    isComplex: 'false',
    size: 'sm',
    description: 'A list displaying the most recent actions or activities.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsLatestIssues />,
    title: 'LatestIssues',
    isComplex: 'false',
    size: 'sm',
    description:
      'List detailing recent issues or concerns, suitable for tracking or management interfaces.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsMembersSelectInput />,
    title: 'MembersSelectInput',
    isComplex: 'false',
    size: 'sm',
    description:
      'A list design for selecting members, with input fields for filtering or adding members.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsMessenger />,
    title: 'Messenger',
    isComplex: 'false',
    size: 'sm',
    description: 'A list layout designed for messenger or chat application interfaces.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsNavigationPills />,
    title: 'NavigationPills',
    isComplex: 'false',
    size: 'md',
    description:
      'A navigational list using pill-style elements for selecting different views or sections.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsOpenTickets />,
    title: 'OpenTickets',
    isComplex: 'false',
    size: 'sm',
    description:
      'List focused on displaying open or active tickets, commonly used in helpdesk or support tools.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsPatientNotifications />,
    title: 'PatientNotifications',
    isComplex: 'false',
    size: 'md',
    description: 'List layout for showing notifications or updates specifically for patients.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsPortfolio />,
    title: 'Portfolio',
    isComplex: 'false',
    size: 'sm',
    description: 'List variant designed to showcase portfolio items or projects.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsPricingPlans />,
    title: 'PricingPlans',
    isComplex: 'false',
    size: 'sm',
    description: 'List layout ideal for presenting different pricing plans or packages.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsProductsRoadmap />,
    title: 'ProductsRoadmap',
    isComplex: 'false',
    size: 'sm',
    description: 'A list format that outlines a roadmap or timeline for product development.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsRecentActivity />,
    title: 'RecentActivity',
    isComplex: 'false',
    size: 'sm',
    description: 'List highlighting recent activities or user interactions.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsRecentFiles />,
    title: 'RecentFiles',
    isComplex: 'false',
    size: 'sm',
    description: 'List showing recently accessed or modified files.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsRecentTransactions />,
    title: 'RecentTransactions',
    isComplex: 'false',
    size: 'sm',
    description: 'A list layout focusing on recent financial transactions or account activity.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsShoppingCard />,
    title: 'ShoppingCard',
    isComplex: 'false',
    size: 'sm',
    description:
      'A list variant used for shopping cart interfaces, showing selected items and pricing.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsTopGrossing />,
    title: 'TopGrossing',
    isComplex: 'false',
    size: 'sm',
    description:
      'List showcasing top-grossing items or categories, useful for sales and marketing insights.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsTopSellers />,
    title: 'TopSellers',
    isComplex: 'false',
    size: 'sm',
    description: 'A list focused on top-selling products or services, highlighting market trends.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsTopTrainers />,
    title: 'TopTrainers',
    isComplex: 'false',
    size: 'sm',
    description:
      'List featuring top trainers or instructors, likely in a fitness or educational context.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsTransactions />,
    title: 'Transactions',
    isComplex: 'false',
    size: 'sm',
    description:
      'List layout displaying transaction details, commonly used in financial applications.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsUpcomingConsults />,
    title: 'UpcomingConsults',
    isComplex: 'false',
    size: 'sm',
    description:
      'A list of upcoming consultations or appointments, particularly relevant in healthcare settings.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsUpdates />,
    title: 'Updates',
    isComplex: 'false',
    size: 'sm',
    description: 'List designed to inform users about recent updates or changes.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsUserAnalytics />,
    title: 'UserAnalytics',
    isComplex: 'false',
    size: 'sm',
    description: 'A list format that presents analytics for various metrics.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsUsersList />,
    title: 'UsersList',
    isComplex: 'false',
    size: 'sm',
    description: 'A list format that presents user profiles or account information.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsVirtualServers />,
    title: 'VirtualServers',
    isComplex: 'false',
    size: 'lg',
    description: 'List detailing virtual server instances or configurations.',
    height: '',
    category: 'stacked-lists',
  },
  {
    element: <ApplicationUiStackedListsWeeklySales />,
    title: 'WeeklySales',
    isComplex: 'false',
    size: 'sm',
    description: 'A list focusing on sales data compiled on a weekly basis.',
    height: '',
    category: 'stacked-lists',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'StackedLists';
  const pageDescription =
    'View our stacked lists, where items are layered on top of each other, offering a unique way to present list data.';
  const formatTitle = (title: string) => {
    return title.replace(/([A-Z])/g, ' $1');
  };
  const pageTitleDisplay = formatTitle(pageTitle);
  function generateSrcPath(title: string, category?: string): string {
    const processString = (str: string) => {
      return str
        .replace(/([A-Z])/g, ' $1')
        .trim()
        .toLowerCase()
        .replace(/[\s]+/g, '-');
    };
    const processedTitle = processString(title);
    let processedCategory = category && processString(category);
    return `/src/components/application-ui/${processedTitle}/${processedCategory}/`;
  }
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
    toast.success('Component path copied to clipboard');
  };
  return (
    <>
      <Helmet heading={t(pageTitleDisplay)} />
      <MarketingPageTitle
        title={t(pageTitleDisplay)}
        subheading={t(pageDescription)}
      />
      <Box
        py={{
          xs: 2,
          md: 3,
        }}
      >
        <Container maxWidth="xl">
          <Stack
            spacing={{
              xs: 3,
              sm: 4,
              md: 5,
            }}
            divider={<Divider />}
          >
            {components.map((component) => (
              <Card
                key={component.title}
                elevation={0}
                variant="outlined"
                sx={{
                  borderWidth: 2,
                  boxShadow: (theme) => `0 0 0 6px ${theme.palette.divider}`,
                  borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'neutral.700' : 'neutral.500',
                  pb:
                    (component.size as Breakpoint) !== 'xl'
                      ? {
                          xs: 2,
                          sm: 3,
                        }
                      : undefined,
                }}
              >
                <Box
                  p={{
                    xs: 2,
                    sm: 3,
                  }}
                  mb={
                    (component.size as Breakpoint) !== 'xl'
                      ? {
                          xs: 2,
                          sm: 3,
                        }
                      : undefined
                  }
                  sx={{
                    backgroundColor: 'background.default',
                  }}
                >
                  <Typography variant="h4">{formatTitle(component.title)}</Typography>
                  {component.description && (
                    <Typography
                      variant="h5"
                      fontWeight={400}
                      color="text.secondary"
                    >
                      {component.description}
                    </Typography>
                  )}
                  <Box
                    mt={{
                      xs: 1,
                      sm: 2,
                    }}
                    display="flex"
                  >
                    <Card
                      elevation={0}
                      variant="outlined"
                    >
                      <CopyToClipboard
                        text={generateSrcPath(component.category, component.title)}
                        onCopy={handleCopy}
                      >
                        <CardActionArea
                          sx={{
                            py: 1,
                            px: 1.5,
                          }}
                        >
                          <Typography
                            variant="h6"
                            component="span"
                          >
                            {generateSrcPath(component.category, component.title)}
                          </Typography>
                        </CardActionArea>
                      </CopyToClipboard>
                    </Card>
                  </Box>
                </Box>
                <Container
                  disableGutters
                  maxWidth={component.size as Breakpoint}
                >
                  {component.element}
                </Container>
              </Card>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};
export default Page;
