'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiTabsAlternate from 'src/components/application-ui/tabs/alternate/alternate';
import ApplicationUiTabsBasicAlternate from 'src/components/application-ui/tabs/basic-alternate/basic-alternate';
import ApplicationUiTabsBasicGradient from 'src/components/application-ui/tabs/basic-gradient/basic-gradient';
import ApplicationUiTabsBasic from 'src/components/application-ui/tabs/basic/basic';
import ApplicationUiTabsLineAlternate from 'src/components/application-ui/tabs/line-alternate/line-alternate';
import ApplicationUiTabsLine from 'src/components/application-ui/tabs/line/line';
import ApplicationUiTabsPills from 'src/components/application-ui/tabs/pills/pills';
import ApplicationUiTabsRounded from 'src/components/application-ui/tabs/rounded/rounded';
import ApplicationUiTabsScrollable from 'src/components/application-ui/tabs/scrollable/scrollable';
import ApplicationUiTabsShadow from 'src/components/application-ui/tabs/shadow/shadow';
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
    element: <ApplicationUiTabsAlternate />,
    title: 'Alternate',
    isComplex: 'false',
    size: 'md',
    description:
      'An alternate design of tabs, offering a unique style different from the basic layout.',
    height: '',
    category: 'tabs',
  },
  {
    element: <ApplicationUiTabsBasic />,
    title: 'Basic',
    isComplex: 'false',
    size: 'md',
    description:
      'The fundamental and standard design of tabs for navigation and content organization.',
    height: '',
    category: 'tabs',
  },
  {
    element: <ApplicationUiTabsBasicAlternate />,
    title: 'BasicAlternate',
    isComplex: 'false',
    size: 'lg',
    description: 'A variation of the basic tabs, offering an alternative visual style.',
    height: '',
    category: 'tabs',
  },
  {
    element: <ApplicationUiTabsBasicGradient />,
    title: 'BasicGradient',
    isComplex: 'false',
    size: 'lg',
    description: 'Large tabs with a basic gradient design for aesthetic and functional navigation.',
    height: '',
    category: 'tabs',
  },
  {
    element: <ApplicationUiTabsLine />,
    title: 'Line',
    isComplex: 'false',
    size: 'md',
    description: 'Tabs with a line indicator, providing a clean and minimalist design.',
    height: '',
    category: 'tabs',
  },
  {
    element: <ApplicationUiTabsLineAlternate />,
    title: 'LineAlternate',
    isComplex: 'false',
    size: 'md',
    description:
      'A line-style tabs variant with an alternate design approach for visual distinction.',
    height: '',
    category: 'tabs',
  },
  {
    element: <ApplicationUiTabsPills />,
    title: 'Pills',
    isComplex: 'false',
    size: 'md',
    description: 'Pill-shaped tabs, offering a more rounded and distinct tab navigation option.',
    height: '',
    category: 'tabs',
  },
  {
    element: <ApplicationUiTabsRounded />,
    title: 'Rounded',
    isComplex: 'false',
    size: 'md',
    description: 'Tabs with rounded corners, giving a softer and more approachable aesthetic.',
    height: '',
    category: 'tabs',
  },
  {
    element: <ApplicationUiTabsScrollable />,
    title: 'Scrollable',
    isComplex: 'false',
    size: 'md',
    description:
      'Tabs designed to be scrollable, suitable for accommodating a large number of tab items.',
    height: '',
    category: 'tabs',
  },
  {
    element: <ApplicationUiTabsShadow />,
    title: 'Shadow',
    isComplex: 'false',
    size: 'md',
    description: 'Tabs featuring a shadow effect, adding depth and emphasis to the tab structure.',
    height: '',
    category: 'tabs',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Tabs';
  const pageDescription =
    'Explore our tabs for organizing content into separate panes, allowing users to easily navigate between different sections.';
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
