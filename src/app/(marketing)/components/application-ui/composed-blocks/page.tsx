'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiComposedBlocksCamera from 'src/components/application-ui/composed-blocks/camera/camera';
import ApplicationUiComposedBlocksComposedNavigation from 'src/components/application-ui/composed-blocks/composed-navigation/composed-navigation';
import ApplicationUiComposedBlocksLearningProfile from 'src/components/application-ui/composed-blocks/learning-profile/learning-profile';
import ApplicationUiComposedBlocksMessenger from 'src/components/application-ui/composed-blocks/messenger/messenger';
import ApplicationUiComposedBlocksMultiPanel from 'src/components/application-ui/composed-blocks/multi-panel/multi-panel';
import ApplicationUiComposedBlocksMyCards from 'src/components/application-ui/composed-blocks/my-cards/my-cards';
import ApplicationUiComposedBlocksNavigationBlocks from 'src/components/application-ui/composed-blocks/navigation-blocks/navigation-blocks';
import ApplicationUiComposedBlocksNavigationList from 'src/components/application-ui/composed-blocks/navigation-list/navigation-list';
import ApplicationUiComposedBlocksProfileBlocksAlternate from 'src/components/application-ui/composed-blocks/profile-blocks-alternate/profile-blocks-alternate';
import ApplicationUiComposedBlocksProfileBlocks from 'src/components/application-ui/composed-blocks/profile-blocks/profile-blocks';
import ApplicationUiComposedBlocksProfileComposed from 'src/components/application-ui/composed-blocks/profile-composed/profile-composed';
import ApplicationUiComposedBlocksProfileListAccent from 'src/components/application-ui/composed-blocks/profile-list-accent/profile-list-accent';
import ApplicationUiComposedBlocksProfileList from 'src/components/application-ui/composed-blocks/profile-list/profile-list';
import ApplicationUiComposedBlocksUserNavigationAlternate from 'src/components/application-ui/composed-blocks/user-navigation-alternate/user-navigation-alternate';
import ApplicationUiComposedBlocksUserNavigation from 'src/components/application-ui/composed-blocks/user-navigation/user-navigation';
import ApplicationUiComposedBlocksWeather from 'src/components/application-ui/composed-blocks/weather/weather';
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
    element: <ApplicationUiComposedBlocksCamera />,
    title: 'Camera',
    isComplex: 'false',
    size: 'sm',
    description: 'A composed block focused on camera or photography-related content.',
    height: '',
    category: 'composed-blocks',
  },
  {
    element: <ApplicationUiComposedBlocksComposedNavigation />,
    title: 'ComposedNavigation',
    isComplex: 'false',
    size: 'lg',
    description: 'Navigation block with a composed structure for complex interfaces.',
    height: '',
    category: 'composed-blocks',
  },
  {
    element: <ApplicationUiComposedBlocksLearningProfile />,
    title: 'LearningProfile',
    isComplex: 'false',
    size: 'lg',
    description: 'Designed specifically for showcasing learning or educational profiles.',
    height: '',
    category: 'composed-blocks',
  },
  {
    element: <ApplicationUiComposedBlocksMessenger />,
    title: 'Messenger',
    isComplex: 'false',
    size: 'sm',
    description: 'A messenger-themed composed block for chat or communication interfaces.',
    height: '',
    category: 'composed-blocks',
  },
  {
    element: <ApplicationUiComposedBlocksMultiPanel />,
    title: 'MultiPanel',
    isComplex: 'false',
    size: 'md',
    description: 'Composed block with multiple panels for detailed content segmentation.',
    height: '',
    category: 'composed-blocks',
  },
  {
    element: <ApplicationUiComposedBlocksMyCards />,
    title: 'MyCards',
    isComplex: 'false',
    size: 'sm',
    description: 'Personalized card-like composed blocks for individual user information.',
    height: '',
    category: 'composed-blocks',
  },
  {
    element: <ApplicationUiComposedBlocksNavigationBlocks />,
    title: 'NavigationBlocks',
    isComplex: 'false',
    size: 'lg',
    description: 'Blocks specifically designed for navigation purposes within an application.',
    height: '',
    category: 'composed-blocks',
  },
  {
    element: <ApplicationUiComposedBlocksNavigationList />,
    title: 'NavigationList',
    isComplex: 'false',
    size: 'lg',
    description: 'List-style navigation block for straightforward user guidance.',
    height: '',
    category: 'composed-blocks',
  },
  {
    element: <ApplicationUiComposedBlocksProfileBlocks />,
    title: 'ProfileBlocks',
    isComplex: 'false',
    size: 'sm',
    description: 'Blocks tailored for displaying user profile information.',
    height: '',
    category: 'composed-blocks',
  },
  {
    element: <ApplicationUiComposedBlocksProfileBlocksAlternate />,
    title: 'ProfileBlocksAlternate',
    isComplex: 'false',
    size: 'sm',
    description: 'An alternate design for profile information composed blocks.',
    height: '',
    category: 'composed-blocks',
  },
  {
    element: <ApplicationUiComposedBlocksProfileComposed />,
    title: 'ProfileComposed',
    isComplex: 'false',
    size: 'md',
    description: 'Composed blocks for a detailed and structured display of profile data.',
    height: '',
    category: 'composed-blocks',
  },
  {
    element: <ApplicationUiComposedBlocksProfileList />,
    title: 'ProfileList',
    isComplex: 'false',
    size: 'sm',
    description: 'Profile information displayed in a list format within a composed block.',
    height: '',
    category: 'composed-blocks',
  },
  {
    element: <ApplicationUiComposedBlocksProfileListAccent />,
    title: 'ProfileListAccent',
    isComplex: 'false',
    size: 'sm',
    description: 'Profile list block with accentuated design elements for emphasis.',
    height: '',
    category: 'composed-blocks',
  },
  {
    element: <ApplicationUiComposedBlocksUserNavigation />,
    title: 'UserNavigation',
    isComplex: 'false',
    size: 'sm',
    description: 'User navigation block tailored for individual user journey through an app.',
    height: '',
    category: 'composed-blocks',
  },
  {
    element: <ApplicationUiComposedBlocksUserNavigationAlternate />,
    title: 'UserNavigationAlternate',
    isComplex: 'false',
    size: 'sm',
    description: 'An alternate layout for user navigation within composed blocks.',
    height: '',
    category: 'composed-blocks',
  },
  {
    element: <ApplicationUiComposedBlocksWeather />,
    title: 'Weather',
    isComplex: 'false',
    size: 'lg',
    description: 'A weather-focused composed block for displaying meteorological data.',
    height: '',
    category: 'composed-blocks',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'ComposedBlocks';
  const pageDescription =
    'Discover our composed blocks, a combination of various UI elements assembled for more complex and dynamic content presentation.';
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
