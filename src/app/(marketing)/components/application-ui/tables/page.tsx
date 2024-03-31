'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiTablesEmployeeStatus from 'src/components/application-ui/tables/employee-status/employee-status';
import ApplicationUiTablesFiles from 'src/components/application-ui/tables/files/files';
import ApplicationUiTablesInvoices from 'src/components/application-ui/tables/invoices/invoices';
import ApplicationUiTablesLeaderboard from 'src/components/application-ui/tables/leaderboard/leaderboard';
import ApplicationUiTablesOrdersList from 'src/components/application-ui/tables/orders-list/orders-list';
import ApplicationUiTablesPendingTickets from 'src/components/application-ui/tables/pending-tickets/pending-tickets';
import ApplicationUiTablesProducts from 'src/components/application-ui/tables/products/products';
import ApplicationUiTablesProjects from 'src/components/application-ui/tables/projects/projects';
import ApplicationUiTablesRecentOrdersCard from 'src/components/application-ui/tables/recent-orders-card/recent-orders-card';
import ApplicationUiTablesRecentOrders from 'src/components/application-ui/tables/recent-orders/recent-orders';
import ApplicationUiTablesRecentPatients from 'src/components/application-ui/tables/recent-patients/recent-patients';
import ApplicationUiTablesSecurityLogs from 'src/components/application-ui/tables/security-logs/security-logs';
import ApplicationUiTablesTechnicalSupport from 'src/components/application-ui/tables/technical-support/technical-support';
import ApplicationUiTablesTopProducts from 'src/components/application-ui/tables/top-products/top-products';
import ApplicationUiTablesTransactionsList from 'src/components/application-ui/tables/transactions-list/transactions-list';
import ApplicationUiTablesUsers from 'src/components/application-ui/tables/users/users';
import ApplicationUiTablesWeeklySales from 'src/components/application-ui/tables/weekly-sales/weekly-sales';
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
    element: <ApplicationUiTablesEmployeeStatus />,
    title: 'EmployeeStatus',
    isComplex: 'false',
    size: 'md',
    description: 'Table layout designed to display employee status and related metrics.',
    height: '',
    category: 'tables',
  },
  {
    element: <ApplicationUiTablesFiles />,
    title: 'Files',
    isComplex: 'false',
    size: 'md',
    description: 'Medium-sized table for organizing and displaying file information.',
    height: '',
    category: 'tables',
  },
  {
    element: <ApplicationUiTablesInvoices />,
    title: 'Invoices',
    isComplex: 'false',
    size: 'lg',
    description: 'Large table layout specifically designed for managing and viewing invoices.',
    height: '',
    category: 'tables',
  },
  {
    element: <ApplicationUiTablesLeaderboard />,
    title: 'Leaderboard',
    isComplex: 'false',
    size: 'sm',
    description:
      'A table format that presents a leaderboard, ideal for competitions or ranking scenarios.',
    height: '',
    category: 'tables',
  },
  {
    element: <ApplicationUiTablesOrdersList />,
    title: 'OrdersList',
    isComplex: 'false',
    size: 'lg',
    description:
      'Table designed to list orders, useful for tracking sales, inventory, or purchase orders.',
    height: '',
    category: 'tables',
  },
  {
    element: <ApplicationUiTablesPendingTickets />,
    title: 'PendingTickets',
    isComplex: 'false',
    size: 'lg',
    description: 'Table layout focusing on tickets that are pending action or review.',
    height: '',
    category: 'tables',
  },
  {
    element: <ApplicationUiTablesProducts />,
    title: 'Products',
    isComplex: 'false',
    size: 'lg',
    description: 'Large table for detailed listing and management of various products.',
    height: '',
    category: 'tables',
  },
  {
    element: <ApplicationUiTablesProjects />,
    title: 'Projects',
    isComplex: 'false',
    size: 'lg',
    description: 'Large table format for organizing and presenting project-related information.',
    height: '',
    category: 'tables',
  },
  {
    element: <ApplicationUiTablesRecentOrders />,
    title: 'RecentOrders',
    isComplex: 'false',
    size: 'lg',
    description: 'Table showcasing recent orders, suitable for e-commerce or retail scenarios.',
    height: '',
    category: 'tables',
  },
  {
    element: <ApplicationUiTablesRecentOrdersCard />,
    title: 'RecentOrdersCard',
    isComplex: 'false',
    size: 'sm',
    description:
      'A card-style table layout displaying recent orders with additional design elements.',
    height: '',
    category: 'tables',
  },
  {
    element: <ApplicationUiTablesRecentPatients />,
    title: 'RecentPatients',
    isComplex: 'false',
    size: 'lg',
    description: 'Table format for displaying recent patient records or appointments.',
    height: '',
    category: 'tables',
  },
  {
    element: <ApplicationUiTablesSecurityLogs />,
    title: 'SecurityLogs',
    isComplex: 'false',
    size: 'lg',
    description: 'Large table dedicated to displaying and managing security logs and records.',
    height: '',
    category: 'tables',
  },
  {
    element: <ApplicationUiTablesTechnicalSupport />,
    title: 'TechnicalSupport',
    isComplex: 'false',
    size: 'md',
    description: 'Table designed for listing technical support queries or tickets.',
    height: '',
    category: 'tables',
  },
  {
    element: <ApplicationUiTablesTopProducts />,
    title: 'TopProducts',
    isComplex: 'false',
    size: 'sm',
    description: 'Table layout that highlights top-selling or most popular products.',
    height: '',
    category: 'tables',
  },
  {
    element: <ApplicationUiTablesTransactionsList />,
    title: 'TransactionsList',
    isComplex: 'false',
    size: 'sm',
    description:
      'Table format focusing on financial transactions, suitable for banking or accounting applications.',
    height: '',
    category: 'tables',
  },
  {
    element: <ApplicationUiTablesUsers />,
    title: 'Users',
    isComplex: 'false',
    size: 'xl',
    description: 'Extra-large table layout for comprehensive display and management of user data.',
    height: '',
    category: 'tables',
  },
  {
    element: <ApplicationUiTablesWeeklySales />,
    title: 'WeeklySales',
    isComplex: 'false',
    size: 'lg',
    description:
      'Table showcasing weekly sales data, ideal for retail or sales performance monitoring.',
    height: '',
    category: 'tables',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Tables';
  const pageDescription =
    'View our table components, ideal for presenting complex data in a structured, tabular format for easy comprehension.';
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
