'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiPieDoughnutChartsAccountBalance from 'src/components/application-ui/pie-doughnut-charts/account-balance/account-balance';
import ApplicationUiPieDoughnutChartsCustomerSatisfaction from 'src/components/application-ui/pie-doughnut-charts/customer-satisfaction/customer-satisfaction';
import ApplicationUiPieDoughnutChartsExpenses from 'src/components/application-ui/pie-doughnut-charts/expenses/expenses';
import ApplicationUiPieDoughnutChartsHealthStatus from 'src/components/application-ui/pie-doughnut-charts/health-status/health-status';
import ApplicationUiPieDoughnutChartsHealthcareStatus from 'src/components/application-ui/pie-doughnut-charts/healthcare-status/healthcare-status';
import ApplicationUiPieDoughnutChartsHospitalDepartments from 'src/components/application-ui/pie-doughnut-charts/hospital-departments/hospital-departments';
import ApplicationUiPieDoughnutChartsProfileGoals from 'src/components/application-ui/pie-doughnut-charts/profile-goals/profile-goals';
import ApplicationUiPieDoughnutChartsSalesCategories from 'src/components/application-ui/pie-doughnut-charts/sales-categories/sales-categories';
import ApplicationUiPieDoughnutChartsUsageStats from 'src/components/application-ui/pie-doughnut-charts/usage-stats/usage-stats';
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
    element: <ApplicationUiPieDoughnutChartsAccountBalance />,
    title: 'AccountBalance',
    isComplex: 'false',
    size: 'lg',
    description: 'A pie or doughnut chart representing different aspects of account balances.',
    height: '',
    category: 'pie-doughnut-charts',
  },
  {
    element: <ApplicationUiPieDoughnutChartsCustomerSatisfaction />,
    title: 'CustomerSatisfaction',
    isComplex: 'false',
    size: 'md',
    description: 'A chart showing customer satisfaction levels in different categories.',
    height: '',
    category: 'pie-doughnut-charts',
  },
  {
    element: <ApplicationUiPieDoughnutChartsExpenses />,
    title: 'Expenses',
    isComplex: 'false',
    size: 'sm',
    description: 'This chart variant focuses on visualizing various expense categories.',
    height: '',
    category: 'pie-doughnut-charts',
  },
  {
    element: <ApplicationUiPieDoughnutChartsHealthStatus />,
    title: 'HealthStatus',
    isComplex: 'false',
    size: 'md',
    description:
      'A pie chart depicting various health-related metrics, suitable for devices or metrics tracking.',
    height: '',
    category: 'pie-doughnut-charts',
  },
  {
    element: <ApplicationUiPieDoughnutChartsHealthcareStatus />,
    title: 'HealthcareStatus',
    isComplex: 'false',
    size: 'xs',
    description:
      'A chart tailored for displaying different metrics in healthcare, such as patient demographics or treatment outcomes.',
    height: '',
    category: 'pie-doughnut-charts',
  },
  {
    element: <ApplicationUiPieDoughnutChartsHospitalDepartments />,
    title: 'HospitalDepartments',
    isComplex: 'false',
    size: 'md',
    description:
      'A pie or doughnut chart detailing the distribution of various departments within a hospital or healthcare facility.',
    height: '',
    category: 'pie-doughnut-charts',
  },
  {
    element: <ApplicationUiPieDoughnutChartsProfileGoals />,
    title: 'ProfileGoals',
    isComplex: 'false',
    size: 'sm',
    description:
      'A chart typically used in personal profiles to illustrate goal completion or progress.',
    height: '',
    category: 'pie-doughnut-charts',
  },
  {
    element: <ApplicationUiPieDoughnutChartsSalesCategories />,
    title: 'SalesCategories',
    isComplex: 'false',
    size: 'sm',
    description:
      'This variant is focused on depicting sales data across different categories or products.',
    height: '',
    category: 'pie-doughnut-charts',
  },
  {
    element: <ApplicationUiPieDoughnutChartsUsageStats />,
    title: 'UsageStats',
    isComplex: 'false',
    size: 'md',
    description: 'Usage statistics gauges for monitoring and displaying usage data.',
    height: '',
    category: 'pie-doughnut-charts',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'PieDoughnutCharts';
  const pageDescription =
    'Explore our pie and doughnut charts for a visually appealing comparison of data in a circular format.';
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
