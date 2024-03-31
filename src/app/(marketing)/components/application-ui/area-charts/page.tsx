'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiAreaChartsIncomeReports from 'src/components/application-ui/area-charts/income-reports/income-reports';
import ApplicationUiAreaChartsMonthlySales from 'src/components/application-ui/area-charts/monthly-sales/monthly-sales';
import ApplicationUiAreaChartsPowerConsumption from 'src/components/application-ui/area-charts/power-consumption/power-consumption';
import ApplicationUiAreaChartsSaleStatistics from 'src/components/application-ui/area-charts/sale-statistics/sale-statistics';
import ApplicationUiAreaChartsSalesAlerts from 'src/components/application-ui/area-charts/sales-alerts/sales-alerts';
import ApplicationUiAreaChartsWatchList from 'src/components/application-ui/area-charts/watch-list/watch-list';
import ApplicationUiAreaChartsWeeklySales from 'src/components/application-ui/area-charts/weekly-sales/weekly-sales';
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
    element: <ApplicationUiAreaChartsIncomeReports />,
    title: 'IncomeReports',
    isComplex: 'false',
    size: 'md',
    description: 'Charts detailing income reports for financial analysis.',
    height: '',
    category: 'area-charts',
  },
  {
    element: <ApplicationUiAreaChartsMonthlySales />,
    title: 'MonthlySales',
    isComplex: 'false',
    size: 'lg',
    description: 'Visualization of monthly sales data.',
    height: '',
    category: 'area-charts',
  },
  {
    element: <ApplicationUiAreaChartsPowerConsumption />,
    title: 'PowerConsumption',
    isComplex: 'false',
    size: 'md',
    description: 'Charts representing power consumption over a period of time.',
    height: '',
    category: 'area-charts',
  },
  {
    element: <ApplicationUiAreaChartsSaleStatistics />,
    title: 'SaleStatistics',
    isComplex: 'false',
    size: 'md',
    description: 'Statistical analysis of sales data presented in a chart.',
    height: '',
    category: 'area-charts',
  },
  {
    element: <ApplicationUiAreaChartsSalesAlerts />,
    title: 'SalesAlerts',
    isComplex: 'false',
    size: 'lg',
    description: 'Charts focused on highlighting alerts in sales trends.',
    height: '',
    category: 'area-charts',
  },
  {
    element: <ApplicationUiAreaChartsWatchList />,
    title: 'WatchList',
    isComplex: 'false',
    size: 'lg',
    description: 'Charts for monitoring selected metrics or indicators.',
    height: '',
    category: 'area-charts',
  },
  {
    element: <ApplicationUiAreaChartsWeeklySales />,
    title: 'WeeklySales',
    isComplex: 'false',
    size: 'md',
    description: 'Graphical representation of sales data on a weekly basis.',
    height: '',
    category: 'area-charts',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'AreaCharts';
  const pageDescription =
    'Discover our range of area charts, perfect for visualizing quantitative data with shaded regions to emphasize volume or magnitude.';
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
