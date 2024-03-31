'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiImageGridListsActionCards from 'src/components/application-ui/image-grid-lists/action-cards/action-cards';
import ApplicationUiImageGridListsBankAccountMinimal from 'src/components/application-ui/image-grid-lists/bank-account-minimal/bank-account-minimal';
import ApplicationUiImageGridListsBankAccount from 'src/components/application-ui/image-grid-lists/bank-account/bank-account';
import ApplicationUiImageGridListsCircleProfilePanel from 'src/components/application-ui/image-grid-lists/circle-profile-panel/circle-profile-panel';
import ApplicationUiImageGridListsCommerceCards from 'src/components/application-ui/image-grid-lists/commerce-cards/commerce-cards';
import ApplicationUiImageGridListsCompanyCard from 'src/components/application-ui/image-grid-lists/company-card/company-card';
import ApplicationUiImageGridListsDarkOverlay from 'src/components/application-ui/image-grid-lists/dark-overlay/dark-overlay';
import ApplicationUiImageGridListsDataCenters from 'src/components/application-ui/image-grid-lists/data-centers/data-centers';
import ApplicationUiImageGridListsFullReport from 'src/components/application-ui/image-grid-lists/full-report/full-report';
import ApplicationUiImageGridListsGradientFill from 'src/components/application-ui/image-grid-lists/gradient-fill/gradient-fill';
import ApplicationUiImageGridListsHoverCards from 'src/components/application-ui/image-grid-lists/hover-cards/hover-cards';
import ApplicationUiImageGridListsHoverReveal from 'src/components/application-ui/image-grid-lists/hover-reveal/hover-reveal';
import ApplicationUiImageGridListsMonthlyGoals from 'src/components/application-ui/image-grid-lists/monthly-goals/monthly-goals';
import ApplicationUiImageGridListsMonthlyStats from 'src/components/application-ui/image-grid-lists/monthly-stats/monthly-stats';
import ApplicationUiImageGridListsProfileImageCards from 'src/components/application-ui/image-grid-lists/profile-image-cards/profile-image-cards';
import ApplicationUiImageGridListsRecentCourses from 'src/components/application-ui/image-grid-lists/recent-courses/recent-courses';
import ApplicationUiImageGridListsRoundedProfilePanel from 'src/components/application-ui/image-grid-lists/rounded-profile-panel/rounded-profile-panel';
import ApplicationUiImageGridListsStatusShadowIcons from 'src/components/application-ui/image-grid-lists/status-shadow-icons/status-shadow-icons';
import ApplicationUiImageGridListsTrainingPrograms from 'src/components/application-ui/image-grid-lists/training-programs/training-programs';
import ApplicationUiImageGridListsUpgradeAccountAlternate from 'src/components/application-ui/image-grid-lists/upgrade-account-alternate/upgrade-account-alternate';
import ApplicationUiImageGridListsUpgradeAccount from 'src/components/application-ui/image-grid-lists/upgrade-account/upgrade-account';
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
    element: <ApplicationUiImageGridListsActionCards />,
    title: 'ActionCards',
    isComplex: 'false',
    size: 'lg',
    description: 'Image grid lists designed as action cards for interactive purposes.',
    height: '',
    category: 'image-grid-lists',
  },
  {
    element: <ApplicationUiImageGridListsBankAccount />,
    title: 'BankAccount',
    isComplex: 'false',
    size: 'md',
    description: 'Grid lists themed around bank account information, featuring relevant images.',
    height: '',
    category: 'image-grid-lists',
  },
  {
    element: <ApplicationUiImageGridListsBankAccountMinimal />,
    title: 'BankAccountMinimal',
    isComplex: 'false',
    size: 'md',
    description:
      'A minimalistic design approach to bank account information in a grid list format.',
    height: '',
    category: 'image-grid-lists',
  },
  {
    element: <ApplicationUiImageGridListsCircleProfilePanel />,
    title: 'CircleProfilePanel',
    isComplex: 'false',
    size: 'sm',
    description: 'Circular profile images incorporated into a grid panel layout.',
    height: '',
    category: 'image-grid-lists',
  },
  {
    element: <ApplicationUiImageGridListsCommerceCards />,
    title: 'CommerceCards',
    isComplex: 'false',
    size: 'lg',
    description: 'Grid lists tailored for commerce and retail with image-focused cards.',
    height: '',
    category: 'image-grid-lists',
  },
  {
    element: <ApplicationUiImageGridListsCompanyCard />,
    title: 'CompanyCard',
    isComplex: 'false',
    size: 'lg',
    description: 'Corporate-themed image grid lists resembling company cards.',
    height: '',
    category: 'image-grid-lists',
  },
  {
    element: <ApplicationUiImageGridListsDarkOverlay />,
    title: 'DarkOverlay',
    isComplex: 'false',
    size: 'sm',
    description: 'Image grid lists with a dark overlay for added depth and focus.',
    height: '',
    category: 'image-grid-lists',
  },
  {
    element: <ApplicationUiImageGridListsDataCenters />,
    title: 'DataCenters',
    isComplex: 'false',
    size: 'sm',
    description: 'Grid lists focusing on data center themes, complete with relevant imagery.',
    height: '',
    category: 'image-grid-lists',
  },
  {
    element: <ApplicationUiImageGridListsFullReport />,
    title: 'FullReport',
    isComplex: 'false',
    size: 'xs',
    description: 'Grid lists designed to provide a comprehensive overview or full reports.',
    height: '',
    category: 'image-grid-lists',
  },
  {
    element: <ApplicationUiImageGridListsGradientFill />,
    title: 'GradientFill',
    isComplex: 'false',
    size: 'sm',
    description: 'Grid lists with a gradient fill, creating a visually appealing background.',
    height: '',
    category: 'image-grid-lists',
  },
  {
    element: <ApplicationUiImageGridListsHoverCards />,
    title: 'HoverCards',
    isComplex: 'false',
    size: 'lg',
    description: 'Interactive image grid lists that change or reveal content on hover.',
    height: '',
    category: 'image-grid-lists',
  },
  {
    element: <ApplicationUiImageGridListsHoverReveal />,
    title: 'HoverReveal',
    isComplex: 'false',
    size: 'lg',
    description: 'Grid lists with a hover effect that reveals additional information or options.',
    height: '',
    category: 'image-grid-lists',
  },
  {
    element: <ApplicationUiImageGridListsMonthlyGoals />,
    title: 'MonthlyGoals',
    isComplex: 'false',
    size: 'sm',
    description: 'Grid lists designed to track and display monthly goals or achievements.',
    height: '',
    category: 'image-grid-lists',
  },
  {
    element: <ApplicationUiImageGridListsMonthlyStats />,
    title: 'MonthlyStats',
    isComplex: 'false',
    size: 'md',
    description: 'List showing statistics or data trends on a monthly basis.',
    height: '',
    category: 'image-grid-lists',
  },
  {
    element: <ApplicationUiImageGridListsProfileImageCards />,
    title: 'ProfileImageCards',
    isComplex: 'false',
    size: 'lg',
    description: 'Grid lists showcasing profiles, each card featuring a prominent image.',
    height: '',
    category: 'image-grid-lists',
  },
  {
    element: <ApplicationUiImageGridListsRecentCourses />,
    title: 'RecentCourses',
    isComplex: 'false',
    size: 'lg',
    description: 'Grid lists focusing on recently accessed or available courses.',
    height: '',
    category: 'image-grid-lists',
  },
  {
    element: <ApplicationUiImageGridListsRoundedProfilePanel />,
    title: 'RoundedProfilePanel',
    isComplex: 'false',
    size: 'sm',
    description: 'Grid list panels with rounded profiles, often used for user interfaces.',
    height: '',
    category: 'image-grid-lists',
  },
  {
    element: <ApplicationUiImageGridListsStatusShadowIcons />,
    title: 'StatusShadowIcons',
    isComplex: 'false',
    size: 'md',
    description:
      'Grid lists where each item combines an image with status icons and shadow effects.',
    height: '',
    category: 'image-grid-lists',
  },
  {
    element: <ApplicationUiImageGridListsTrainingPrograms />,
    title: 'TrainingPrograms',
    isComplex: 'false',
    size: 'lg',
    description: 'Grid lists dedicated to showcasing various training programs or courses.',
    height: '',
    category: 'image-grid-lists',
  },
  {
    element: <ApplicationUiImageGridListsUpgradeAccount />,
    title: 'UpgradeAccount',
    isComplex: 'false',
    size: 'lg',
    description: 'Grid lists designed to encourage account upgrades, featuring persuasive imagery.',
    height: '',
    category: 'image-grid-lists',
  },
  {
    element: <ApplicationUiImageGridListsUpgradeAccountAlternate />,
    title: 'UpgradeAccountAlternate',
    isComplex: 'false',
    size: 'sm',
    description:
      'An alternative layout for upgrade-account grid lists, offering a different visual approach.',
    height: '',
    category: 'image-grid-lists',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'ImageGridLists';
  const pageDescription =
    'Utilize our image grid lists, perfect for showcasing visuals in an organized and aesthetically pleasing layout.';
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
