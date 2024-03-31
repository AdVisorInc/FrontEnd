'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiHorizontalListsHorizontalIcons from 'src/components/application-ui/horizontal-lists/horizontal-icons/horizontal-icons';
import ApplicationUiHorizontalListsHorizontalNumbers from 'src/components/application-ui/horizontal-lists/horizontal-numbers/horizontal-numbers';
import ApplicationUiHorizontalListsIconGrids from 'src/components/application-ui/horizontal-lists/icon-grids/icon-grids';
import ApplicationUiHorizontalListsInvoiceStats from 'src/components/application-ui/horizontal-lists/invoice-stats/invoice-stats';
import ApplicationUiHorizontalListsReports from 'src/components/application-ui/horizontal-lists/reports/reports';
import ApplicationUiHorizontalListsRevenueProgress from 'src/components/application-ui/horizontal-lists/revenue-progress/revenue-progress';
import ApplicationUiHorizontalListsStatsBlocks from 'src/components/application-ui/horizontal-lists/stats-blocks/stats-blocks';
import ApplicationUiHorizontalListsTeamOverview from 'src/components/application-ui/horizontal-lists/team-overview/team-overview';
import ApplicationUiHorizontalListsTopUsers from 'src/components/application-ui/horizontal-lists/top-users/top-users';
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
    element: <ApplicationUiHorizontalListsHorizontalIcons />,
    title: 'HorizontalIcons',
    isComplex: 'false',
    size: 'lg',
    description: 'A horizontal list layout emphasizing icons for visual engagement.',
    height: '',
    category: 'horizontal-lists',
  },
  {
    element: <ApplicationUiHorizontalListsHorizontalNumbers />,
    title: 'HorizontalNumbers',
    isComplex: 'false',
    size: 'lg',
    description: 'A numeric-focused horizontal list, ideal for rankings or statistics.',
    height: '',
    category: 'horizontal-lists',
  },
  {
    element: <ApplicationUiHorizontalListsIconGrids />,
    title: 'IconGrids',
    isComplex: 'false',
    size: 'lg',
    description: 'Grid-style icon presentations in a horizontal list format.',
    height: '',
    category: 'horizontal-lists',
  },
  {
    element: <ApplicationUiHorizontalListsInvoiceStats />,
    title: 'InvoiceStats',
    isComplex: 'false',
    size: 'lg',
    description: 'Horizontal list layout for displaying key statistics and data on invoices.',
    height: '',
    category: 'horizontal-lists',
  },
  {
    element: <ApplicationUiHorizontalListsReports />,
    title: 'Reports',
    isComplex: 'false',
    size: 'md',
    description: 'List designed for displaying various types of reports or analytics.',
    height: '',
    category: 'horizontal-lists',
  },
  {
    element: <ApplicationUiHorizontalListsRevenueProgress />,
    title: 'RevenueProgress',
    isComplex: 'false',
    size: 'lg',
    description: 'A list layout tailored for tracking and displaying revenue progress.',
    height: '',
    category: 'horizontal-lists',
  },
  {
    element: <ApplicationUiHorizontalListsStatsBlocks />,
    title: 'StatsBlocks',
    isComplex: 'false',
    size: 'lg',
    description: 'List format that presents key statistics or metrics in block format.',
    height: '',
    category: 'horizontal-lists',
  },
  {
    element: <ApplicationUiHorizontalListsTeamOverview />,
    title: 'TeamOverview',
    isComplex: 'false',
    size: 'lg',
    description:
      'Horizontal list display for summarizing team members and their roles or statuses.',
    height: '',
    category: 'horizontal-lists',
  },
  {
    element: <ApplicationUiHorizontalListsTopUsers />,
    title: 'TopUsers',
    isComplex: 'false',
    size: 'sm',
    description: 'Designed to showcase top users or performers in a horizontal list.',
    height: '',
    category: 'horizontal-lists',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'HorizontalLists';
  const pageDescription =
    'Implement our horizontal lists for a linear and spaceEfficient display of items or information.';
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
