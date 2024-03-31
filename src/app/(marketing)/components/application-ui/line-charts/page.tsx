'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiLineChartsAudienceOverview from 'src/components/application-ui/line-charts/audience-overview/audience-overview';
import ApplicationUiLineChartsBurnedCalories from 'src/components/application-ui/line-charts/burned-calories/burned-calories';
import ApplicationUiLineChartsFitnessParameters from 'src/components/application-ui/line-charts/fitness-parameters/fitness-parameters';
import ApplicationUiLineChartsHelpdeskStatus from 'src/components/application-ui/line-charts/helpdesk-status/helpdesk-status';
import ApplicationUiLineChartsHospitalStatus from 'src/components/application-ui/line-charts/hospital-status/hospital-status';
import ApplicationUiLineChartsInvestments from 'src/components/application-ui/line-charts/investments/investments';
import ApplicationUiLineChartsSales from 'src/components/application-ui/line-charts/sales/sales';
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
    element: <ApplicationUiLineChartsAudienceOverview />,
    title: 'AudienceOverview',
    isComplex: 'false',
    size: 'lg',
    description: 'Line chart providing an overview of audience metrics or engagement over time.',
    height: '',
    category: 'line-charts',
  },
  {
    element: <ApplicationUiLineChartsBurnedCalories />,
    title: 'BurnedCalories',
    isComplex: 'false',
    size: 'sm',
    description:
      'Chart focused on visualizing calories burned, often used in health and fitness contexts.',
    height: '',
    category: 'line-charts',
  },
  {
    element: <ApplicationUiLineChartsFitnessParameters />,
    title: 'FitnessParameters',
    isComplex: 'false',
    size: 'lg',
    description: 'Charts designed to track various fitness parameters over time.',
    height: '',
    category: 'line-charts',
  },
  {
    element: <ApplicationUiLineChartsHelpdeskStatus />,
    title: 'HelpdeskStatus',
    isComplex: 'false',
    size: 'lg',
    description:
      'Charts providing a quick overview of helpdesk or customer support performance metrics.',
    height: '',
    category: 'line-charts',
  },
  {
    element: <ApplicationUiLineChartsHospitalStatus />,
    title: 'HospitalStatus',
    isComplex: 'false',
    size: 'md',
    description:
      'Chart designed to showcase hospital status, including patient counts or resource usage.',
    height: '',
    category: 'line-charts',
  },
  {
    element: <ApplicationUiLineChartsInvestments />,
    title: 'Investments',
    isComplex: 'false',
    size: 'md',
    description:
      'Investment-related line chart, ideal for tracking financial performance over time.',
    height: '',
    category: 'line-charts',
  },
  {
    element: <ApplicationUiLineChartsSales />,
    title: 'Sales',
    isComplex: 'false',
    size: 'md',
    description: 'Sales-focused line chart, commonly used to analyze sales trends and performance.',
    height: '',
    category: 'line-charts',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'LineCharts';
  const pageDescription =
    'View our line charts for a clear depiction of data trends over time, using lines to connect individual data points.';
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
