'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { VerticalShellsAccentHeader } from 'src/components/application-ui/vertical-shells/accent-header/accent-header';
import { VerticalShellsBrand } from 'src/components/application-ui/vertical-shells/brand/brand';
import { VerticalShellsDarkAlternate } from 'src/components/application-ui/vertical-shells/dark-alternate/dark-alternate';
import { VerticalShellsDark } from 'src/components/application-ui/vertical-shells/dark/dark';
import { VerticalShellsLight } from 'src/components/application-ui/vertical-shells/light/light';
import { VerticalShellsWhiteOff } from 'src/components/application-ui/vertical-shells/white-off/white-off';
import { VerticalShellsWhite } from 'src/components/application-ui/vertical-shells/white/white';
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
    element: <VerticalShellsAccentHeader />,
    title: 'AccentHeader',
    isComplex: '/shells/vertical-shell-accent-header',
    size: '',
    description: 'Vertical shell with an accented header for distinctive visual appeal.',
    height: '',
    category: 'vertical-shells',
  },
  {
    element: <VerticalShellsBrand />,
    title: 'Brand',
    isComplex: '/shells/vertical-shell-brand',
    size: '',
    description: 'A vertical shell themed with brand-specific colors and styles.',
    height: '',
    category: 'vertical-shells',
  },
  {
    element: <VerticalShellsDark />,
    title: 'Dark',
    isComplex: '/shells/vertical-shell-dark',
    size: '',
    description: 'A dark-themed vertical shell, providing a sleek and modern interface.',
    height: '',
    category: 'vertical-shells',
  },
  {
    element: <VerticalShellsDarkAlternate />,
    title: 'DarkAlternate',
    isComplex: '/shells/vertical-shell-dark-alternate',
    size: '',
    description: 'An alternate version of the dark vertical shell with different styling nuances.',
    height: '',
    category: 'vertical-shells',
  },
  {
    element: <VerticalShellsLight />,
    title: 'Light',
    isComplex: '/shells/vertical-shell-light',
    size: '',
    description: 'A light-themed vertical shell, offering a clean and airy interface.',
    height: '',
    category: 'vertical-shells',
  },
  {
    element: <VerticalShellsWhite />,
    title: 'White',
    isComplex: '/shells/vertical-shell-white',
    size: '',
    description: 'A white vertical shell, providing a classic and clean design.',
    height: '',
    category: 'vertical-shells',
  },
  {
    element: <VerticalShellsWhiteOff />,
    title: 'WhiteOff',
    isComplex: '/shells/vertical-shell-white-off',
    size: '',
    description: 'A variant of the white vertical shell with subtle differences in the design.',
    height: '',
    category: 'vertical-shells',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'VerticalShells';
  const pageDescription =
    'Explore our vertical shells, offering vertical layout structures for organizing content in a clear and systematic manner.';
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
