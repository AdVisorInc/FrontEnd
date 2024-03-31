'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiProgressGridListsBudget from 'src/components/application-ui/progress-grid-lists/budget/budget';
import ApplicationUiProgressGridListsFitnessBlocksAlternate from 'src/components/application-ui/progress-grid-lists/fitness-blocks-alternate/fitness-blocks-alternate';
import ApplicationUiProgressGridListsFitnessBlocks from 'src/components/application-ui/progress-grid-lists/fitness-blocks/fitness-blocks';
import ApplicationUiProgressGridListsGradientAccentProgress from 'src/components/application-ui/progress-grid-lists/gradient-accent-progress/gradient-accent-progress';
import ApplicationUiProgressGridListsGradientHorizontalProgress from 'src/components/application-ui/progress-grid-lists/gradient-horizontal-progress/gradient-horizontal-progress';
import ApplicationUiProgressGridListsHorizontalStatusProgress from 'src/components/application-ui/progress-grid-lists/horizontal-status-progress/horizontal-status-progress';
import ApplicationUiProgressGridListsIconProgressBlocks from 'src/components/application-ui/progress-grid-lists/icon-progress-blocks/icon-progress-blocks';
import ApplicationUiProgressGridListsLists from 'src/components/application-ui/progress-grid-lists/lists/lists';
import ApplicationUiProgressGridListsMinimalProgressCards from 'src/components/application-ui/progress-grid-lists/minimal-progress-cards/minimal-progress-cards';
import ApplicationUiProgressGridListsMonthlyTargets from 'src/components/application-ui/progress-grid-lists/monthly-targets/monthly-targets';
import ApplicationUiProgressGridListsProfileCardAlternate from 'src/components/application-ui/progress-grid-lists/profile-card-alternate/profile-card-alternate';
import ApplicationUiProgressGridListsProjectManagement from 'src/components/application-ui/progress-grid-lists/project-management/project-management';
import ApplicationUiProgressGridListsSalesCountry from 'src/components/application-ui/progress-grid-lists/sales-country/sales-country';
import ApplicationUiProgressGridListsSessionsCountry from 'src/components/application-ui/progress-grid-lists/sessions-country/sessions-country';
import ApplicationUiProgressGridListsShadowIconsProgress from 'src/components/application-ui/progress-grid-lists/shadow-icons-progress/shadow-icons-progress';
import ApplicationUiProgressGridListsStatusProgressCards from 'src/components/application-ui/progress-grid-lists/status-progress-cards/status-progress-cards';
import ApplicationUiProgressGridListsTeamPerformance from 'src/components/application-ui/progress-grid-lists/team-performance/team-performance';
import ApplicationUiProgressGridListsUserAnalytics from 'src/components/application-ui/progress-grid-lists/user-analytics/user-analytics';
import ApplicationUiProgressGridListsWeeklySales from 'src/components/application-ui/progress-grid-lists/weekly-sales/weekly-sales';
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
    element: <ApplicationUiProgressGridListsBudget />,
    title: 'Budget',
    isComplex: 'false',
    size: 'sm',
    description: 'A progress grid focusing on budget tracking or financial goals.',
    height: '',
    category: 'progress-grid-lists',
  },
  {
    element: <ApplicationUiProgressGridListsFitnessBlocks />,
    title: 'FitnessBlocks',
    isComplex: 'false',
    size: 'sm',
    description:
      'Grid lists designed for fitness progress tracking, displaying various workout or health metrics.',
    height: '',
    category: 'progress-grid-lists',
  },
  {
    element: <ApplicationUiProgressGridListsFitnessBlocksAlternate />,
    title: 'FitnessBlocksAlternate',
    isComplex: 'false',
    size: 'sm',
    description:
      'An alternative layout for fitness progress, possibly offering a different perspective or metrics.',
    height: '',
    category: 'progress-grid-lists',
  },
  {
    element: <ApplicationUiProgressGridListsGradientAccentProgress />,
    title: 'GradientAccentProgress',
    isComplex: 'false',
    size: 'lg',
    description:
      'Progress grids featuring gradient accents, emphasizing visual appeal and clarity.',
    height: '',
    category: 'progress-grid-lists',
  },
  {
    element: <ApplicationUiProgressGridListsGradientHorizontalProgress />,
    title: 'GradientHorizontalProgress',
    isComplex: 'false',
    size: 'lg',
    description: 'Horizontal progress indicators with gradient styling, providing a modern look.',
    height: '',
    category: 'progress-grid-lists',
  },
  {
    element: <ApplicationUiProgressGridListsHorizontalStatusProgress />,
    title: 'HorizontalStatusProgress',
    isComplex: 'false',
    size: 'lg',
    description:
      'Grids focused on horizontal progress indicators for various status updates or milestones.',
    height: '',
    category: 'progress-grid-lists',
  },
  {
    element: <ApplicationUiProgressGridListsIconProgressBlocks />,
    title: 'IconProgressBlocks',
    isComplex: 'false',
    size: 'lg',
    description: 'Progress blocks incorporating icons for a more intuitive and engaging display.',
    height: '',
    category: 'progress-grid-lists',
  },
  {
    element: <ApplicationUiProgressGridListsLists />,
    title: 'Lists',
    isComplex: 'false',
    size: 'sm',
    description:
      'List-based progress grids, ideal for tasks, goals, or step-by-step progress tracking.',
    height: '',
    category: 'progress-grid-lists',
  },
  {
    element: <ApplicationUiProgressGridListsMinimalProgressCards />,
    title: 'MinimalProgressCards',
    isComplex: 'false',
    size: 'lg',
    description: 'A minimalistic approach to progress cards, focusing on simplicity and clarity.',
    height: '',
    category: 'progress-grid-lists',
  },
  {
    element: <ApplicationUiProgressGridListsMonthlyTargets />,
    title: 'MonthlyTargets',
    isComplex: 'false',
    size: 'sm',
    description:
      'Grids designed for tracking and visualizing progress towards monthly targets or goals.',
    height: '',
    category: 'progress-grid-lists',
  },
  {
    element: <ApplicationUiProgressGridListsProfileCardAlternate />,
    title: 'ProfileCardAlternate',
    isComplex: 'false',
    size: 'sm',
    description:
      'An alternate design to the standard profile progress card, possibly with different metrics or layout.',
    height: '',
    category: 'progress-grid-lists',
  },
  {
    element: <ApplicationUiProgressGridListsProjectManagement />,
    title: 'ProjectManagement',
    isComplex: 'false',
    size: 'lg',
    description:
      'Grid lists tailored for project management, showcasing progress in various aspects of projects.',
    height: '',
    category: 'progress-grid-lists',
  },
  {
    element: <ApplicationUiProgressGridListsSalesCountry />,
    title: 'SalesCountry',
    isComplex: 'false',
    size: 'sm',
    description:
      'Progress grids focusing on sales metrics, possibly segmented by country or region.',
    height: '',
    category: 'progress-grid-lists',
  },
  {
    element: <ApplicationUiProgressGridListsSessionsCountry />,
    title: 'SessionsCountry',
    isComplex: 'false',
    size: 'sm',
    description:
      'Grids displaying session data, potentially broken down by country or geographic region.',
    height: '',
    category: 'progress-grid-lists',
  },
  {
    element: <ApplicationUiProgressGridListsShadowIconsProgress />,
    title: 'ShadowIconsProgress',
    isComplex: 'false',
    size: 'lg',
    description: 'Icon-based progress indicators with shadow effects, adding depth and emphasis.',
    height: '',
    category: 'progress-grid-lists',
  },
  {
    element: <ApplicationUiProgressGridListsStatusProgressCards />,
    title: 'StatusProgressCards',
    isComplex: 'false',
    size: 'lg',
    description:
      'Progress cards that focus on status updates, ideal for tracking project milestones or personal achievements.',
    height: '',
    category: 'progress-grid-lists',
  },
  {
    element: <ApplicationUiProgressGridListsTeamPerformance />,
    title: 'TeamPerformance',
    isComplex: 'false',
    size: 'sm',
    description:
      'Grids showcasing team performance metrics, useful in corporate or collaborative environments.',
    height: '',
    category: 'progress-grid-lists',
  },
  {
    element: <ApplicationUiProgressGridListsUserAnalytics />,
    title: 'UserAnalytics',
    isComplex: 'false',
    size: 'md',
    description:
      'Analytics-focused progress grids, providing insights into user behavior or engagement.',
    height: '',
    category: 'progress-grid-lists',
  },
  {
    element: <ApplicationUiProgressGridListsWeeklySales />,
    title: 'WeeklySales',
    isComplex: 'false',
    size: 'md',
    description:
      'Weekly sales performance presented in a grid format, useful for tracking and analysis.',
    height: '',
    category: 'progress-grid-lists',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'ProgressGridLists';
  const pageDescription =
    'Explore progress grid lists, showcasing various tasks or processes and their respective progress states.';
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
