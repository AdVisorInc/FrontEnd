'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiBarChartsActiveServers from 'src/components/application-ui/bar-charts/active-servers/active-servers';
import ApplicationUiBarChartsFinancialYear from 'src/components/application-ui/bar-charts/financial-year/financial-year';
import ApplicationUiBarChartsResourcesAlarm from 'src/components/application-ui/bar-charts/resources-alarm/resources-alarm';
import ApplicationUiBarChartsRevenueProgress from 'src/components/application-ui/bar-charts/revenue-progress/revenue-progress';
import ApplicationUiBarChartsTasksAnalytics from 'src/components/application-ui/bar-charts/tasks-analytics/tasks-analytics';
import ApplicationUiBarChartsTimeSpent from 'src/components/application-ui/bar-charts/time-spent/time-spent';
import ApplicationUiBarChartsTotalRevenue from 'src/components/application-ui/bar-charts/total-revenue/total-revenue';
import ApplicationUiBarChartsTrafficSources from 'src/components/application-ui/bar-charts/traffic-sources/traffic-sources';
import ApplicationUiBarChartsTransactionsStatistics from 'src/components/application-ui/bar-charts/transactions-statistics/transactions-statistics';
import ApplicationUiBarChartsUsersList from 'src/components/application-ui/bar-charts/users-list/users-list';
import ApplicationUiBarChartsVisitorsOverview from 'src/components/application-ui/bar-charts/visitors-overview/visitors-overview';
import ApplicationUiBarChartsVisitors from 'src/components/application-ui/bar-charts/visitors/visitors';
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
    element: <ApplicationUiBarChartsActiveServers />,
    title: 'ActiveServers',
    isComplex: 'false',
    size: 'lg',
    description: 'Charts displaying data on active server usage and trends.',
    height: '',
    category: 'bar-charts',
  },
  {
    element: <ApplicationUiBarChartsFinancialYear />,
    title: 'FinancialYear',
    isComplex: 'false',
    size: 'md',
    description: 'Annual financial data representation in bar chart format.',
    height: '',
    category: 'bar-charts',
  },
  {
    element: <ApplicationUiBarChartsResourcesAlarm />,
    title: 'ResourcesAlarm',
    isComplex: 'false',
    size: 'md',
    description: 'Bar charts indicating alarms or alerts in resource usage.',
    height: '',
    category: 'bar-charts',
  },
  {
    element: <ApplicationUiBarChartsRevenueProgress />,
    title: 'RevenueProgress',
    isComplex: 'false',
    size: 'md',
    description: 'Visualizing revenue progress over time using bar charts.',
    height: '',
    category: 'bar-charts',
  },
  {
    element: <ApplicationUiBarChartsTasksAnalytics />,
    title: 'TasksAnalytics',
    isComplex: 'false',
    size: 'md',
    description: 'Medium-sized bar chart for visualizing task analytics data.',
    height: '',
    category: 'bar-charts',
  },
  {
    element: <ApplicationUiBarChartsTimeSpent />,
    title: 'TimeSpent',
    isComplex: 'false',
    size: 'md',
    description: 'Charts depicting time spent on various activities or tasks.',
    height: '',
    category: 'bar-charts',
  },
  {
    element: <ApplicationUiBarChartsTotalRevenue />,
    title: 'TotalRevenue',
    isComplex: 'false',
    size: 'sm',
    description: 'Overall revenue visualization across different periods or sectors.',
    height: '',
    category: 'bar-charts',
  },
  {
    element: <ApplicationUiBarChartsTrafficSources />,
    title: 'TrafficSources',
    isComplex: 'false',
    size: 'md',
    description: 'Analysis of traffic sources presented in bar chart format.',
    height: '',
    category: 'bar-charts',
  },
  {
    element: <ApplicationUiBarChartsTransactionsStatistics />,
    title: 'TransactionsStatistics',
    isComplex: 'false',
    size: 'md',
    description: 'Statistical data on transactions represented through bar charts.',
    height: '',
    category: 'bar-charts',
  },
  {
    element: <ApplicationUiBarChartsUsersList />,
    title: 'UsersList',
    isComplex: 'false',
    size: 'md',
    description: 'User-related data, such as activity or demographics, shown in bar chart form.',
    height: '',
    category: 'bar-charts',
  },
  {
    element: <ApplicationUiBarChartsVisitors />,
    title: 'Visitors',
    isComplex: 'false',
    size: 'md',
    description: 'Charts showing visitor data, patterns, and trends.',
    height: '',
    category: 'bar-charts',
  },
  {
    element: <ApplicationUiBarChartsVisitorsOverview />,
    title: 'VisitorsOverview',
    isComplex: 'false',
    size: 'sm',
    description: 'Comprehensive overview of visitor data and analytics in bar chart format.',
    height: '',
    category: 'bar-charts',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'BarCharts';
  const pageDescription =
    'Explore bar charts for an effective graphical representation of data, using bars to compare different groups or track changes over time.';
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
