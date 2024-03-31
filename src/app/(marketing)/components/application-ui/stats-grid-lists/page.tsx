'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiStatsGridListsAccentBorder from 'src/components/application-ui/stats-grid-lists/accent-border/accent-border';
import ApplicationUiStatsGridListsAccentIconIndicators from 'src/components/application-ui/stats-grid-lists/accent-icon-indicators/accent-icon-indicators';
import ApplicationUiStatsGridListsAccentIndicatorPanels from 'src/components/application-ui/stats-grid-lists/accent-indicator-panels/accent-indicator-panels';
import ApplicationUiStatsGridListsAccentSeparatorNumbers from 'src/components/application-ui/stats-grid-lists/accent-separator-numbers/accent-separator-numbers';
import ApplicationUiStatsGridListsActiveIconCards from 'src/components/application-ui/stats-grid-lists/active-icon-cards/active-icon-cards';
import ApplicationUiStatsGridListsActiveSubscriptions from 'src/components/application-ui/stats-grid-lists/active-subscriptions/active-subscriptions';
import ApplicationUiStatsGridListsAlternateIconIndicators from 'src/components/application-ui/stats-grid-lists/alternate-icon-indicators/alternate-icon-indicators';
import ApplicationUiStatsGridListsGradientAccentBorder from 'src/components/application-ui/stats-grid-lists/gradient-accent-border/gradient-accent-border';
import ApplicationUiStatsGridListsMonthlyComparison from 'src/components/application-ui/stats-grid-lists/monthly-comparison/monthly-comparison';
import ApplicationUiStatsGridListsSalesAlertsAlternate from 'src/components/application-ui/stats-grid-lists/sales-alerts-alternate/sales-alerts-alternate';
import ApplicationUiStatsGridListsSalesStats from 'src/components/application-ui/stats-grid-lists/sales-stats/sales-stats';
import ApplicationUiStatsGridListsWallets from 'src/components/application-ui/stats-grid-lists/wallets/wallets';
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
    element: <ApplicationUiStatsGridListsAccentBorder />,
    title: 'AccentBorder',
    isComplex: 'false',
    size: 'lg',
    description: 'Grid lists featuring an accentuated border for a visually distinct appearance.',
    height: '',
    category: 'stats-grid-lists',
  },
  {
    element: <ApplicationUiStatsGridListsAccentIconIndicators />,
    title: 'AccentIconIndicators',
    isComplex: 'false',
    size: 'lg',
    description:
      'Statistical grids with accentuated icons serving as indicators for various metrics.',
    height: '',
    category: 'stats-grid-lists',
  },
  {
    element: <ApplicationUiStatsGridListsAccentIndicatorPanels />,
    title: 'AccentIndicatorPanels',
    isComplex: 'false',
    size: 'lg',
    description:
      'Panels with accent indicators, providing a clear and engaging display of statistics.',
    height: '',
    category: 'stats-grid-lists',
  },
  {
    element: <ApplicationUiStatsGridListsAccentSeparatorNumbers />,
    title: 'AccentSeparatorNumbers',
    isComplex: 'false',
    size: 'lg',
    description:
      'Grid lists with accented separators and numbers, emphasizing key statistical data.',
    height: '',
    category: 'stats-grid-lists',
  },
  {
    element: <ApplicationUiStatsGridListsActiveIconCards />,
    title: 'ActiveIconCards',
    isComplex: 'false',
    size: 'lg',
    description:
      'Cards featuring active icons, designed to represent various statistical data points dynamically.',
    height: '',
    category: 'stats-grid-lists',
  },
  {
    element: <ApplicationUiStatsGridListsActiveSubscriptions />,
    title: 'ActiveSubscriptions',
    isComplex: 'false',
    size: 'lg',
    description:
      'Lists focused on displaying information about active subscriptions in a statistical format.',
    height: '',
    category: 'stats-grid-lists',
  },
  {
    element: <ApplicationUiStatsGridListsAlternateIconIndicators />,
    title: 'AlternateIconIndicators',
    isComplex: 'false',
    size: 'lg',
    description:
      'Grid lists with an alternative approach to icon indicators, offering a fresh perspective on statistics.',
    height: '',
    category: 'stats-grid-lists',
  },
  {
    element: <ApplicationUiStatsGridListsGradientAccentBorder />,
    title: 'GradientAccentBorder',
    isComplex: 'false',
    size: 'lg',
    description:
      'Statistics grids featuring borders with gradient accents, adding a modern touch to data presentation.',
    height: '',
    category: 'stats-grid-lists',
  },
  {
    element: <ApplicationUiStatsGridListsMonthlyComparison />,
    title: 'MonthlyComparison',
    isComplex: 'false',
    size: 'sm',
    description:
      'Grid lists designed for comparing monthly statistics, ideal for tracking trends or changes over time.',
    height: '',
    category: 'stats-grid-lists',
  },
  {
    element: <ApplicationUiStatsGridListsSalesAlertsAlternate />,
    title: 'SalesAlertsAlternate',
    isComplex: 'false',
    size: 'lg',
    description:
      'Alternate design for sales alert grids, offering a different view of sales data and notifications.',
    height: '',
    category: 'stats-grid-lists',
  },
  {
    element: <ApplicationUiStatsGridListsSalesStats />,
    title: 'SalesStats',
    isComplex: 'false',
    size: 'lg',
    description:
      'Grid lists dedicated to showcasing sales statistics in an organized and accessible format.',
    height: '',
    category: 'stats-grid-lists',
  },
  {
    element: <ApplicationUiStatsGridListsWallets />,
    title: 'Wallets',
    isComplex: 'false',
    size: 'lg',
    description:
      'Grid lists focusing on wallet statistics, suitable for financial applications or dashboards.',
    height: '',
    category: 'stats-grid-lists',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'StatsGridLists';
  const pageDescription =
    'Explore our stats grid lists, designed to display statistical data in an organized and visually appealing format.';
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
