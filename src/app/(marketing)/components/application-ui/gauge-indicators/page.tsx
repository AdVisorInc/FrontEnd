'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiGaugeIndicatorsCircularProgressCards from 'src/components/application-ui/gauge-indicators/circular-progress-cards/circular-progress-cards';
import ApplicationUiGaugeIndicatorsCircularProgressExtended from 'src/components/application-ui/gauge-indicators/circular-progress-extended/circular-progress-extended';
import ApplicationUiGaugeIndicatorsConversionsGauge from 'src/components/application-ui/gauge-indicators/conversions-gauge/conversions-gauge';
import ApplicationUiGaugeIndicatorsExpandedStatusDisplay from 'src/components/application-ui/gauge-indicators/expanded-status-display/expanded-status-display';
import ApplicationUiGaugeIndicatorsGaugeIndicators from 'src/components/application-ui/gauge-indicators/gauge-indicators/gauge-indicators';
import ApplicationUiGaugeIndicatorsMonthlyGoals from 'src/components/application-ui/gauge-indicators/monthly-goals/monthly-goals';
import ApplicationUiGaugeIndicatorsPremiumSellers from 'src/components/application-ui/gauge-indicators/premium-sellers/premium-sellers';
import ApplicationUiGaugeIndicatorsProgressStatsAccentBorder from 'src/components/application-ui/gauge-indicators/progress-stats-accent-border/progress-stats-accent-border';
import ApplicationUiGaugeIndicatorsProgressStats from 'src/components/application-ui/gauge-indicators/progress-stats/progress-stats';
import ApplicationUiGaugeIndicatorsRecentCustomers from 'src/components/application-ui/gauge-indicators/recent-customers/recent-customers';
import ApplicationUiGaugeIndicatorsServerStatus from 'src/components/application-ui/gauge-indicators/server-status/server-status';
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
    element: <ApplicationUiGaugeIndicatorsCircularProgressCards />,
    title: 'CircularProgressCards',
    isComplex: 'false',
    size: 'lg',
    description: 'Gauge indicators designed as cards, featuring circular progress indicators.',
    height: '',
    category: 'gauge-indicators',
  },
  {
    element: <ApplicationUiGaugeIndicatorsCircularProgressExtended />,
    title: 'CircularProgressExtended',
    isComplex: 'false',
    size: 'lg',
    description: 'Extended version of circular progress indicators, offering detailed information.',
    height: '',
    category: 'gauge-indicators',
  },
  {
    element: <ApplicationUiGaugeIndicatorsConversionsGauge />,
    title: 'ConversionsGauge',
    isComplex: 'false',
    size: 'sm',
    description: 'A gauge specifically designed to track and display conversion metrics.',
    height: '',
    category: 'gauge-indicators',
  },
  {
    element: <ApplicationUiGaugeIndicatorsExpandedStatusDisplay />,
    title: 'ExpandedStatusDisplay',
    isComplex: 'false',
    size: 'lg',
    description: 'Expanded gauge indicators for a comprehensive status display.',
    height: '',
    category: 'gauge-indicators',
  },
  {
    element: <ApplicationUiGaugeIndicatorsGaugeIndicators />,
    title: 'GaugeIndicators',
    isComplex: 'false',
    size: 'lg',
    description: 'Standard gauge indicators for representing various metrics and progress.',
    height: '',
    category: 'gauge-indicators',
  },
  {
    element: <ApplicationUiGaugeIndicatorsMonthlyGoals />,
    title: 'MonthlyGoals',
    isComplex: 'false',
    size: 'sm',
    description: 'Gauges tailored to track and display progress towards monthly goals.',
    height: '',
    category: 'gauge-indicators',
  },
  {
    element: <ApplicationUiGaugeIndicatorsPremiumSellers />,
    title: 'PremiumSellers',
    isComplex: 'false',
    size: 'sm',
    description: 'Indicators designed to highlight the performance of premium sellers or products.',
    height: '',
    category: 'gauge-indicators',
  },
  {
    element: <ApplicationUiGaugeIndicatorsProgressStats />,
    title: 'ProgressStats',
    isComplex: 'false',
    size: 'lg',
    description: 'Progress statistics visualized through intuitive gauge indicators.',
    height: '',
    category: 'gauge-indicators',
  },
  {
    element: <ApplicationUiGaugeIndicatorsProgressStatsAccentBorder />,
    title: 'ProgressStatsAccentBorder',
    isComplex: 'false',
    size: 'lg',
    description: 'Progress stats with an added accent border for emphasis.',
    height: '',
    category: 'gauge-indicators',
  },
  {
    element: <ApplicationUiGaugeIndicatorsRecentCustomers />,
    title: 'RecentCustomers',
    isComplex: 'false',
    size: 'sm',
    description: 'Gauges designed to provide insights into recent customer activities or numbers.',
    height: '',
    category: 'gauge-indicators',
  },
  {
    element: <ApplicationUiGaugeIndicatorsServerStatus />,
    title: 'ServerStatus',
    isComplex: 'false',
    size: 'lg',
    description: 'Indicators focused on displaying server status and performance metrics.',
    height: '',
    category: 'gauge-indicators',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'GaugeIndicators';
  const pageDescription =
    'Explore gauge indicators for a visually compelling representation of data in a circular or semiCircular format.';
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
