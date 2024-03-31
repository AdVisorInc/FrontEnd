'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiSparklineChartsAccentBorderSparklines from 'src/components/application-ui/sparkline-charts/accent-border-sparklines/accent-border-sparklines';
import ApplicationUiSparklineChartsCryptoSparklines from 'src/components/application-ui/sparkline-charts/crypto-sparklines/crypto-sparklines';
import ApplicationUiSparklineChartsCryptoWatchlist from 'src/components/application-ui/sparkline-charts/crypto-watchlist/crypto-watchlist';
import ApplicationUiSparklineChartsDetailedSparklines from 'src/components/application-ui/sparkline-charts/detailed-sparklines/detailed-sparklines';
import ApplicationUiSparklineChartsEnergyStatus from 'src/components/application-ui/sparkline-charts/energy-status/energy-status';
import ApplicationUiSparklineChartsEnergy from 'src/components/application-ui/sparkline-charts/energy/energy';
import ApplicationUiSparklineChartsEventTickets from 'src/components/application-ui/sparkline-charts/event-tickets/event-tickets';
import ApplicationUiSparklineChartsExpandedSparklines from 'src/components/application-ui/sparkline-charts/expanded-sparklines/expanded-sparklines';
import ApplicationUiSparklineChartsMinimalCharts from 'src/components/application-ui/sparkline-charts/minimal-charts/minimal-charts';
import ApplicationUiSparklineChartsNewAccounts from 'src/components/application-ui/sparkline-charts/new-accounts/new-accounts';
import ApplicationUiSparklineChartsNewSubscriptionsSparklines from 'src/components/application-ui/sparkline-charts/new-subscriptions-sparklines/new-subscriptions-sparklines';
import ApplicationUiSparklineChartsQuarterReport from 'src/components/application-ui/sparkline-charts/quarter-report/quarter-report';
import ApplicationUiSparklineChartsRecentSalesSparklines from 'src/components/application-ui/sparkline-charts/recent-sales-sparklines/recent-sales-sparklines';
import ApplicationUiSparklineChartsReportsAlternateSparklines from 'src/components/application-ui/sparkline-charts/reports-alternate-sparklines/reports-alternate-sparklines';
import ApplicationUiSparklineChartsReportsSparklines from 'src/components/application-ui/sparkline-charts/reports-sparklines/reports-sparklines';
import ApplicationUiSparklineChartsSalesSparklines from 'src/components/application-ui/sparkline-charts/sales-sparklines/sales-sparklines';
import ApplicationUiSparklineChartsSparklinesProgress from 'src/components/application-ui/sparkline-charts/sparklines-progress/sparklines-progress';
import ApplicationUiSparklineChartsTraffic from 'src/components/application-ui/sparkline-charts/traffic/traffic';
import ApplicationUiSparklineChartsUserOverview from 'src/components/application-ui/sparkline-charts/user-overview/user-overview';
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
    element: <ApplicationUiSparklineChartsAccentBorderSparklines />,
    title: 'AccentBorderSparklines',
    isComplex: 'false',
    size: 'lg',
    description: 'Sparkline charts featuring an accentuated border for visual emphasis.',
    height: '',
    category: 'sparkline-charts',
  },
  {
    element: <ApplicationUiSparklineChartsCryptoSparklines />,
    title: 'CryptoSparklines',
    isComplex: 'false',
    size: 'lg',
    description:
      'Sparkline charts specifically designed for displaying cryptocurrency data trends.',
    height: '',
    category: 'sparkline-charts',
  },
  {
    element: <ApplicationUiSparklineChartsCryptoWatchlist />,
    title: 'CryptoWatchlist',
    isComplex: 'false',
    size: 'lg',
    description: 'A set of sparkline charts ideal for monitoring cryptocurrency watchlists.',
    height: '',
    category: 'sparkline-charts',
  },
  {
    element: <ApplicationUiSparklineChartsDetailedSparklines />,
    title: 'DetailedSparklines',
    isComplex: 'false',
    size: 'lg',
    description:
      'Sparklines with detailed data representation, providing an in-depth look at trends.',
    height: '',
    category: 'sparkline-charts',
  },
  {
    element: <ApplicationUiSparklineChartsEnergy />,
    title: 'Energy',
    isComplex: 'false',
    size: 'sm',
    description: 'Sparkline charts tailored for displaying energy consumption or production data.',
    height: '',
    category: 'sparkline-charts',
  },
  {
    element: <ApplicationUiSparklineChartsEnergyStatus />,
    title: 'EnergyStatus',
    isComplex: 'false',
    size: 'sm',
    description: 'Charts focusing on the status and trends in energy usage or resources.',
    height: '',
    category: 'sparkline-charts',
  },
  {
    element: <ApplicationUiSparklineChartsEventTickets />,
    title: 'EventTickets',
    isComplex: 'false',
    size: 'md',
    description: 'Sparkline charts for visualizing trends in event ticket sales or attendance.',
    height: '',
    category: 'sparkline-charts',
  },
  {
    element: <ApplicationUiSparklineChartsExpandedSparklines />,
    title: 'ExpandedSparklines',
    isComplex: 'false',
    size: 'lg',
    description: 'An expanded form of sparklines, offering a broader view of the data trends.',
    height: '',
    category: 'sparkline-charts',
  },
  {
    element: <ApplicationUiSparklineChartsMinimalCharts />,
    title: 'MinimalCharts',
    isComplex: 'false',
    size: 'lg',
    description: 'Minimalistic sparkline charts focusing on simplicity and clean presentation.',
    height: '',
    category: 'sparkline-charts',
  },
  {
    element: <ApplicationUiSparklineChartsNewAccounts />,
    title: 'NewAccounts',
    isComplex: 'false',
    size: 'sm',
    description: 'Charts showing the trend or growth of new account creations.',
    height: '',
    category: 'sparkline-charts',
  },
  {
    element: <ApplicationUiSparklineChartsNewSubscriptionsSparklines />,
    title: 'NewSubscriptionsSparklines',
    isComplex: 'false',
    size: 'md',
    description: 'Charts tracking the rate of new subscriptions or sign-ups.',
    height: '',
    category: 'sparkline-charts',
  },
  {
    element: <ApplicationUiSparklineChartsQuarterReport />,
    title: 'QuarterReport',
    isComplex: 'false',
    size: 'sm',
    description: 'Sparklines designed to present quarterly reports or data trends.',
    height: '',
    category: 'sparkline-charts',
  },
  {
    element: <ApplicationUiSparklineChartsRecentSalesSparklines />,
    title: 'RecentSalesSparklines',
    isComplex: 'false',
    size: 'sm',
    description: 'Charts focusing on the visualization of recent sales data.',
    height: '',
    category: 'sparkline-charts',
  },
  {
    element: <ApplicationUiSparklineChartsReportsAlternateSparklines />,
    title: 'ReportsAlternateSparklines',
    isComplex: 'false',
    size: 'md',
    description: 'Alternative designs for sparkline charts used in reporting.',
    height: '',
    category: 'sparkline-charts',
  },
  {
    element: <ApplicationUiSparklineChartsReportsSparklines />,
    title: 'ReportsSparklines',
    isComplex: 'false',
    size: 'sm',
    description: 'Sparkline charts commonly used in various types of reports.',
    height: '',
    category: 'sparkline-charts',
  },
  {
    element: <ApplicationUiSparklineChartsSalesSparklines />,
    title: 'SalesSparklines',
    isComplex: 'false',
    size: 'lg',
    description: 'Charts designed to showcase sales data and trends in a compact format.',
    height: '',
    category: 'sparkline-charts',
  },
  {
    element: <ApplicationUiSparklineChartsSparklinesProgress />,
    title: 'SparklinesProgress',
    isComplex: 'false',
    size: 'lg',
    description: 'Sparkline charts that are used to indicate progress in various contexts.',
    height: '',
    category: 'sparkline-charts',
  },
  {
    element: <ApplicationUiSparklineChartsTraffic />,
    title: 'Traffic',
    isComplex: 'false',
    size: 'md',
    description: 'Charts ideal for visualizing web traffic or similar data over time.',
    height: '',
    category: 'sparkline-charts',
  },
  {
    element: <ApplicationUiSparklineChartsUserOverview />,
    title: 'UserOverview',
    isComplex: 'false',
    size: 'sm',
    description: 'Charts providing a quick overview of user engagement or activity.',
    height: '',
    category: 'sparkline-charts',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'SparklineCharts';
  const pageDescription =
    'Utilize our sparkline charts for compact and simplified data visualization, perfect for small spaces.';
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
