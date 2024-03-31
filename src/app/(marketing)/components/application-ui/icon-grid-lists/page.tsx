'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiIconGridListsAccentBackground from 'src/components/application-ui/icon-grid-lists/accent-background/accent-background';
import ApplicationUiIconGridListsAccountVerification from 'src/components/application-ui/icon-grid-lists/account-verification/account-verification';
import ApplicationUiIconGridListsActivityCard from 'src/components/application-ui/icon-grid-lists/activity-card/activity-card';
import ApplicationUiIconGridListsAvatarCards from 'src/components/application-ui/icon-grid-lists/avatar-cards/avatar-cards';
import ApplicationUiIconGridListsCardDetails from 'src/components/application-ui/icon-grid-lists/card-details/card-details';
import ApplicationUiIconGridListsCustomersStatus from 'src/components/application-ui/icon-grid-lists/customers-status/customers-status';
import ApplicationUiIconGridListsNavigationCards from 'src/components/application-ui/icon-grid-lists/navigation-cards/navigation-cards';
import ApplicationUiIconGridListsOffsetIconsLeft from 'src/components/application-ui/icon-grid-lists/offset-icons-left/offset-icons-left';
import ApplicationUiIconGridListsOffsetIcons from 'src/components/application-ui/icon-grid-lists/offset-icons/offset-icons';
import ApplicationUiIconGridListsPerformance from 'src/components/application-ui/icon-grid-lists/performance/performance';
import ApplicationUiIconGridListsRoundedAvatarCards from 'src/components/application-ui/icon-grid-lists/rounded-avatar-cards/rounded-avatar-cards';
import ApplicationUiIconGridListsTaskSearch from 'src/components/application-ui/icon-grid-lists/task-search/task-search';
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
    element: <ApplicationUiIconGridListsAccentBackground />,
    title: 'AccentBackground',
    isComplex: 'false',
    size: 'lg',
    description: 'Grid lists with an accentuated background for visual emphasis.',
    height: '',
    category: 'icon-grid-lists',
  },
  {
    element: <ApplicationUiIconGridListsAccountVerification />,
    title: 'AccountVerification',
    isComplex: 'false',
    size: 'md',
    description: 'Grid lists tailored for displaying account verification steps or statuses.',
    height: '',
    category: 'icon-grid-lists',
  },
  {
    element: <ApplicationUiIconGridListsActivityCard />,
    title: 'ActivityCard',
    isComplex: 'false',
    size: 'lg',
    description: 'Large icon grid list designed to showcase various activities or tasks.',
    height: '',
    category: 'icon-grid-lists',
  },
  {
    element: <ApplicationUiIconGridListsAvatarCards />,
    title: 'AvatarCards',
    isComplex: 'false',
    size: 'lg',
    description: 'Icon grid lists incorporating avatar images, ideal for user-focused data.',
    height: '',
    category: 'icon-grid-lists',
  },
  {
    element: <ApplicationUiIconGridListsCardDetails />,
    title: 'CardDetails',
    isComplex: 'false',
    size: 'lg',
    description: 'Grid lists designed to display detailed information in a card format.',
    height: '',
    category: 'icon-grid-lists',
  },
  {
    element: <ApplicationUiIconGridListsCustomersStatus />,
    title: 'CustomersStatus',
    isComplex: 'false',
    size: 'lg',
    description: 'Grids focusing on customer statuses, visually represented through icons.',
    height: '',
    category: 'icon-grid-lists',
  },
  {
    element: <ApplicationUiIconGridListsNavigationCards />,
    title: 'NavigationCards',
    isComplex: 'false',
    size: 'lg',
    description: 'Grid lists combining navigation elements with card layouts.',
    height: '',
    category: 'icon-grid-lists',
  },
  {
    element: <ApplicationUiIconGridListsOffsetIcons />,
    title: 'OffsetIcons',
    isComplex: 'false',
    size: 'lg',
    description: 'Icon grids with an offset arrangement for a dynamic visual effect.',
    height: '',
    category: 'icon-grid-lists',
  },
  {
    element: <ApplicationUiIconGridListsOffsetIconsLeft />,
    title: 'OffsetIconsLeft',
    isComplex: 'false',
    size: 'lg',
    description: 'Similar to offset-icons, but with a focus on the left alignment.',
    height: '',
    category: 'icon-grid-lists',
  },
  {
    element: <ApplicationUiIconGridListsPerformance />,
    title: 'Performance',
    isComplex: 'false',
    size: 'xs',
    description: 'Extra small icon grid list for displaying key performance indicators or metrics.',
    height: '',
    category: 'icon-grid-lists',
  },
  {
    element: <ApplicationUiIconGridListsRoundedAvatarCards />,
    title: 'RoundedAvatarCards',
    isComplex: 'false',
    size: 'lg',
    description: 'Grid lists with rounded avatars, combining imagery with concise data.',
    height: '',
    category: 'icon-grid-lists',
  },
  {
    element: <ApplicationUiIconGridListsTaskSearch />,
    title: 'TaskSearch',
    isComplex: 'false',
    size: 'lg',
    description:
      'Large grid list for task searching, combining icons with efficient data presentation.',
    height: '',
    category: 'icon-grid-lists',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'IconGridLists';
  const pageDescription =
    'Discover our icon grid lists, combining icons with labels for a visually engaging and informative display.';
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
