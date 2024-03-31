'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiHorizontalMenusAccentDropdown from 'src/components/application-ui/horizontal-menus/accent-dropdown/accent-dropdown';
import ApplicationUiHorizontalMenusBasicDropdown from 'src/components/application-ui/horizontal-menus/basic-dropdown/basic-dropdown';
import ApplicationUiHorizontalMenusLine from 'src/components/application-ui/horizontal-menus/line/line';
import ApplicationUiHorizontalMenusPills from 'src/components/application-ui/horizontal-menus/pills/pills';
import ApplicationUiHorizontalMenusRounded from 'src/components/application-ui/horizontal-menus/rounded/rounded';
import ApplicationUiHorizontalMenusTabsDropdown from 'src/components/application-ui/horizontal-menus/tabs-dropdown/tabs-dropdown';
import ApplicationUiHorizontalMenusTabs from 'src/components/application-ui/horizontal-menus/tabs/tabs';
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
    element: <ApplicationUiHorizontalMenusAccentDropdown />,
    title: 'AccentDropdown',
    isComplex: 'false',
    size: 'xl',
    description: 'A horizontal menu featuring dropdowns with accentuated styling.',
    height: '456px',
    category: 'horizontal-menus',
  },
  {
    element: <ApplicationUiHorizontalMenusBasicDropdown />,
    title: 'BasicDropdown',
    isComplex: 'false',
    size: 'xl',
    description: 'A straightforward horizontal menu with basic dropdown functionality.',
    height: '456px',
    category: 'horizontal-menus',
  },
  {
    element: <ApplicationUiHorizontalMenusLine />,
    title: 'Line',
    isComplex: 'false',
    size: 'xl',
    description: 'A line-styled horizontal menu offering a sleek and minimalistic design.',
    height: '',
    category: 'horizontal-menus',
  },
  {
    element: <ApplicationUiHorizontalMenusPills />,
    title: 'Pills',
    isComplex: 'false',
    size: 'xl',
    description: 'Pill-shaped menu items for a modern, rounded look in horizontal navigation.',
    height: '',
    category: 'horizontal-menus',
  },
  {
    element: <ApplicationUiHorizontalMenusRounded />,
    title: 'Rounded',
    isComplex: 'false',
    size: 'xl',
    description: 'A horizontal menu with rounded edges, offering a smooth, friendly aesthetic.',
    height: '',
    category: 'horizontal-menus',
  },
  {
    element: <ApplicationUiHorizontalMenusTabs />,
    title: 'Tabs',
    isComplex: 'false',
    size: 'xl',
    description: 'Tab-like horizontal menu items for intuitive, sectioned navigation.',
    height: '',
    category: 'horizontal-menus',
  },
  {
    element: <ApplicationUiHorizontalMenusTabsDropdown />,
    title: 'TabsDropdown',
    isComplex: 'false',
    size: 'xl',
    description: 'Combines tab navigation with dropdown elements for a comprehensive menu.',
    height: '456px',
    category: 'horizontal-menus',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'HorizontalMenus';
  const pageDescription =
    'Explore horizontal menus for streamlined site navigation, enhancing user experience with easy access to different pages.';
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
