'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiCardShellsBottomBorderAccent from 'src/components/application-ui/card-shells/bottom-border-accent/bottom-border-accent';
import ApplicationUiCardShellsComposedLargeAlternate from 'src/components/application-ui/card-shells/composed-large-alternate/composed-large-alternate';
import ApplicationUiCardShellsComposedLargeStacked from 'src/components/application-ui/card-shells/composed-large-stacked/composed-large-stacked';
import ApplicationUiCardShellsComposedLarge from 'src/components/application-ui/card-shells/composed-large/composed-large';
import ApplicationUiCardShellsContentScrollableCustom from 'src/components/application-ui/card-shells/content-scrollable-custom/content-scrollable-custom';
import ApplicationUiCardShellsContentScrollableFooterWell from 'src/components/application-ui/card-shells/content-scrollable-footer-well/content-scrollable-footer-well';
import ApplicationUiCardShellsContentScrollableFooter from 'src/components/application-ui/card-shells/content-scrollable-footer/content-scrollable-footer';
import ApplicationUiCardShellsContentScrollableSectionWell from 'src/components/application-ui/card-shells/content-scrollable-section-well/content-scrollable-section-well';
import ApplicationUiCardShellsContentScrollableSection from 'src/components/application-ui/card-shells/content-scrollable-section/content-scrollable-section';
import ApplicationUiCardShellsContentScrollable from 'src/components/application-ui/card-shells/content-scrollable/content-scrollable';
import ApplicationUiCardShellsDarkBackground from 'src/components/application-ui/card-shells/dark-background/dark-background';
import ApplicationUiCardShellsFooterDividerWell from 'src/components/application-ui/card-shells/footer-divider-well/footer-divider-well';
import ApplicationUiCardShellsFooterWell from 'src/components/application-ui/card-shells/footer-well/footer-well';
import ApplicationUiCardShellsFooter from 'src/components/application-ui/card-shells/footer/footer';
import ApplicationUiCardShellsGradientBackground from 'src/components/application-ui/card-shells/gradient-background/gradient-background';
import ApplicationUiCardShellsHeaderFooter from 'src/components/application-ui/card-shells/header-footer/header-footer';
import ApplicationUiCardShellsHeaderWellDivider from 'src/components/application-ui/card-shells/header-well-divider/header-well-divider';
import ApplicationUiCardShellsHeaderWellScrollableSearch from 'src/components/application-ui/card-shells/header-well-scrollable-search/header-well-scrollable-search';
import ApplicationUiCardShellsHeaderWell from 'src/components/application-ui/card-shells/header-well/header-well';
import ApplicationUiCardShellsHeader from 'src/components/application-ui/card-shells/header/header';
import ApplicationUiCardShellsLeftIndicatorAccent from 'src/components/application-ui/card-shells/left-indicator-accent/left-indicator-accent';
import ApplicationUiCardShellsSimple from 'src/components/application-ui/card-shells/simple/simple';
import ApplicationUiCardShellsTopBorderAccent from 'src/components/application-ui/card-shells/top-border-accent/top-border-accent';
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
    element: <ApplicationUiCardShellsBottomBorderAccent />,
    title: 'BottomBorderAccent',
    isComplex: 'false',
    size: 'lg',
    description: 'A card shell featuring a distinctive accent on the bottom border.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsComposedLarge />,
    title: 'ComposedLarge',
    isComplex: 'false',
    size: 'lg',
    description: 'A large card shell with a composed layout for various content types.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsComposedLargeAlternate />,
    title: 'ComposedLargeAlternate',
    isComplex: 'false',
    size: 'lg',
    description: 'An alternative layout for the large composed card shell.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsComposedLargeStacked />,
    title: 'ComposedLargeStacked',
    isComplex: 'false',
    size: 'sm',
    description: 'A large composed card shell with a stacked layout design.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsContentScrollable />,
    title: 'ContentScrollable',
    isComplex: 'false',
    size: 'sm',
    description: 'A card shell with scrollable content.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsContentScrollableCustom />,
    title: 'ContentScrollableCustom',
    isComplex: 'false',
    size: 'sm',
    description: 'A card shell with scrollable content with custom scrollbar.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsContentScrollableFooter />,
    title: 'ContentScrollableFooter',
    isComplex: 'false',
    size: 'sm',
    description: 'A card shell with scrollable content and a footer.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsContentScrollableFooterWell />,
    title: 'ContentScrollableFooterWell',
    isComplex: 'false',
    size: 'sm',
    description: 'A card shell with scrollable content and a footer on a gray background.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsContentScrollableSection />,
    title: 'ContentScrollableSection',
    isComplex: 'false',
    size: 'md',
    description: 'A card shell with scrollable content and an additional section.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsContentScrollableSectionWell />,
    title: 'ContentScrollableSectionWell',
    isComplex: 'false',
    size: 'md',
    description: 'A card shell with scrollable content and a section on a gray background.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsDarkBackground />,
    title: 'DarkBackground',
    isComplex: 'false',
    size: 'sm',
    description: 'A card shell with a dark background for a sleek, modern look.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsFooter />,
    title: 'Footer',
    isComplex: 'false',
    size: 'sm',
    description: 'A card shell with a footer.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsFooterDividerWell />,
    title: 'FooterDividerWell',
    isComplex: 'false',
    size: 'sm',
    description: 'A card shell with a footer on a gray background, separated by a divider.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsFooterWell />,
    title: 'FooterWell',
    isComplex: 'false',
    size: 'sm',
    description: 'A card shell with a footer on a gray background.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsGradientBackground />,
    title: 'GradientBackground',
    isComplex: 'false',
    size: 'sm',
    description: 'A card shell with a gradient background for a dynamic visual effect.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsHeader />,
    title: 'Header',
    isComplex: 'false',
    size: 'sm',
    description: 'A card shell with a header.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsHeaderFooter />,
    title: 'HeaderFooter',
    isComplex: 'false',
    size: 'sm',
    description: 'A card shell with both a header and footer.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsHeaderWell />,
    title: 'HeaderWell',
    isComplex: 'false',
    size: 'sm',
    description: 'A card shell with a header on a gray background.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsHeaderWellDivider />,
    title: 'HeaderWellDivider',
    isComplex: 'false',
    size: 'sm',
    description: 'A card shell with a header on a gray background, separated by a divider.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsHeaderWellScrollableSearch />,
    title: 'HeaderWellScrollableSearch',
    isComplex: 'false',
    size: 'sm',
    description: 'A card shell with a header on a gray background and a scrollable search area.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsLeftIndicatorAccent />,
    title: 'LeftIndicatorAccent',
    isComplex: 'false',
    size: 'lg',
    description:
      'A card shell featuring a left-side indicator accent for emphasis or categorization.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsSimple />,
    title: 'Simple',
    isComplex: 'false',
    size: 'md',
    description: 'A basic card shell.',
    height: '',
    category: 'card-shells',
  },
  {
    element: <ApplicationUiCardShellsTopBorderAccent />,
    title: 'TopBorderAccent',
    isComplex: 'false',
    size: 'lg',
    description: 'A card shell featuring a top border accent for added visual interest.',
    height: '',
    category: 'card-shells',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'CardShells';
  const pageDescription =
    'View our card shells that provide a basic structure for content, ideal for creating a uniform and organized layout.';
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
