'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiVerticalMenusAccentDropdown from 'src/components/application-ui/vertical-menus/accent-dropdown/accent-dropdown';
import ApplicationUiVerticalMenusBrandDropdown from 'src/components/application-ui/vertical-menus/brand-dropdown/brand-dropdown';
import ApplicationUiVerticalMenusDarkDropdown from 'src/components/application-ui/vertical-menus/dark-dropdown/dark-dropdown';
import ApplicationUiVerticalMenusGrayDropdown from 'src/components/application-ui/vertical-menus/gray-dropdown/gray-dropdown';
import ApplicationUiVerticalMenusGridAccent from 'src/components/application-ui/vertical-menus/grid-accent/grid-accent';
import ApplicationUiVerticalMenusGridCentered from 'src/components/application-ui/vertical-menus/grid-centered/grid-centered';
import ApplicationUiVerticalMenusGridDescription from 'src/components/application-ui/vertical-menus/grid-description/grid-description';
import ApplicationUiVerticalMenusGridGradients from 'src/components/application-ui/vertical-menus/grid-gradients/grid-gradients';
import ApplicationUiVerticalMenusGrid from 'src/components/application-ui/vertical-menus/grid/grid';
import ApplicationUiVerticalMenusIndicator from 'src/components/application-ui/vertical-menus/indicator/indicator';
import ApplicationUiVerticalMenusPills from 'src/components/application-ui/vertical-menus/pills/pills';
import ApplicationUiVerticalMenusRoundedDropdown from 'src/components/application-ui/vertical-menus/rounded-dropdown/rounded-dropdown';
import ApplicationUiVerticalMenusRounded from 'src/components/application-ui/vertical-menus/rounded/rounded';
import ApplicationUiVerticalMenusSmall from 'src/components/application-ui/vertical-menus/small/small';
import ApplicationUiVerticalMenusSquare from 'src/components/application-ui/vertical-menus/square/square';
import ApplicationUiVerticalMenusState from 'src/components/application-ui/vertical-menus/state/state';
import ApplicationUiVerticalMenusWhiteDropdown from 'src/components/application-ui/vertical-menus/white-dropdown/white-dropdown';
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
    element: <ApplicationUiVerticalMenusAccentDropdown />,
    title: 'AccentDropdown',
    isComplex: 'false',
    size: 'xs',
    description: 'A vertical menu with an accentuated dropdown style.',
    height: '',
    category: 'vertical-menus',
  },
  {
    element: <ApplicationUiVerticalMenusBrandDropdown />,
    title: 'BrandDropdown',
    isComplex: 'false',
    size: 'xs',
    description: 'Vertical menu featuring a branded dropdown design.',
    height: '',
    category: 'vertical-menus',
  },
  {
    element: <ApplicationUiVerticalMenusDarkDropdown />,
    title: 'DarkDropdown',
    isComplex: 'false',
    size: 'xs',
    description: 'A dark-themed dropdown menu for vertical navigation.',
    height: '',
    category: 'vertical-menus',
  },
  {
    element: <ApplicationUiVerticalMenusGrayDropdown />,
    title: 'GrayDropdown',
    isComplex: 'false',
    size: 'xs',
    description: 'Vertical menu with a gray dropdown design, offering a neutral aesthetic.',
    height: '',
    category: 'vertical-menus',
  },
  {
    element: <ApplicationUiVerticalMenusGrid />,
    title: 'Grid',
    isComplex: 'false',
    size: 'lg',
    description: 'Vertical menu arranged in a grid format.',
    height: '',
    category: 'vertical-menus',
  },
  {
    element: <ApplicationUiVerticalMenusGridAccent />,
    title: 'GridAccent',
    isComplex: 'false',
    size: 'lg',
    description: 'A grid-style vertical menu with accentuated elements.',
    height: '',
    category: 'vertical-menus',
  },
  {
    element: <ApplicationUiVerticalMenusGridCentered />,
    title: 'GridCentered',
    isComplex: 'false',
    size: 'lg',
    description: 'Vertical menu in a grid layout with centered alignment.',
    height: '',
    category: 'vertical-menus',
  },
  {
    element: <ApplicationUiVerticalMenusGridDescription />,
    title: 'GridDescription',
    isComplex: 'false',
    size: 'lg',
    description: 'Grid-based vertical menu with additional descriptive elements.',
    height: '',
    category: 'vertical-menus',
  },
  {
    element: <ApplicationUiVerticalMenusGridGradients />,
    title: 'GridGradients',
    isComplex: 'false',
    size: 'lg',
    description: 'Vertical menu in a grid layout featuring gradient styling.',
    height: '',
    category: 'vertical-menus',
  },
  {
    element: <ApplicationUiVerticalMenusIndicator />,
    title: 'Indicator',
    isComplex: 'false',
    size: 'md',
    description: 'Vertical menu with indicators for active or focused items.',
    height: '',
    category: 'vertical-menus',
  },
  {
    element: <ApplicationUiVerticalMenusPills />,
    title: 'Pills',
    isComplex: 'false',
    size: 'md',
    description: 'Vertical menu styled with pill-shaped elements.',
    height: '',
    category: 'vertical-menus',
  },
  {
    element: <ApplicationUiVerticalMenusRounded />,
    title: 'Rounded',
    isComplex: 'false',
    size: 'md',
    description: 'Vertical menu with rounded design elements.',
    height: '',
    category: 'vertical-menus',
  },
  {
    element: <ApplicationUiVerticalMenusRoundedDropdown />,
    title: 'RoundedDropdown',
    isComplex: 'false',
    size: 'xs',
    description: 'A vertical menu with a rounded dropdown style.',
    height: '',
    category: 'vertical-menus',
  },
  {
    element: <ApplicationUiVerticalMenusSmall />,
    title: 'Small',
    isComplex: 'false',
    size: 'md',
    description: 'Compact vertical menu with smaller elements.',
    height: '',
    category: 'vertical-menus',
  },
  {
    element: <ApplicationUiVerticalMenusSquare />,
    title: 'Square',
    isComplex: 'false',
    size: 'md',
    description: 'Vertical menu with square-shaped elements.',
    height: '',
    category: 'vertical-menus',
  },
  {
    element: <ApplicationUiVerticalMenusState />,
    title: 'State',
    isComplex: 'false',
    size: 'md',
    description:
      'Vertical menu with elements that change based on state (active, inactive, hover, etc.).',
    height: '',
    category: 'vertical-menus',
  },
  {
    element: <ApplicationUiVerticalMenusWhiteDropdown />,
    title: 'WhiteDropdown',
    isComplex: 'false',
    size: 'xs',
    description: 'Vertical menu with a clean, white dropdown style.',
    height: '',
    category: 'vertical-menus',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'VerticalMenus';
  const pageDescription =
    'View our vertical menus for a spaceEfficient navigation solution, aligning items along the vertical axis.';
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
