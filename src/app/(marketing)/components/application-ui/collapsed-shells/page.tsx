'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { CollapsedShellsDoubleAccent } from 'src/components/application-ui/collapsed-shells/double-accent/double-accent';
import { CollapsedShellsDoubleDark } from 'src/components/application-ui/collapsed-shells/double-dark/double-dark';
import { CollapsedShellsDouble } from 'src/components/application-ui/collapsed-shells/double/double';
import { CollapsedShellsSingleAccent } from 'src/components/application-ui/collapsed-shells/single-accent/single-accent';
import { CollapsedShellsSingleWhiteOff } from 'src/components/application-ui/collapsed-shells/single-white-off/single-white-off';
import { CollapsedShellsSingleWhite } from 'src/components/application-ui/collapsed-shells/single-white/single-white';
import { CollapsedShellsSingle } from 'src/components/application-ui/collapsed-shells/single/single';
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
    element: <CollapsedShellsDouble />,
    title: 'Double',
    isComplex: '/shells/collapsed-shell-double',
    size: '',
    description: 'A collapsed shell variant with a double layout for expanded functionality.',
    height: '',
    category: 'collapsed-shells',
  },
  {
    element: <CollapsedShellsDoubleAccent />,
    title: 'DoubleAccent',
    isComplex: '/shells/collapsed-shell-double-accent',
    size: '',
    description: 'Double-layout collapsed shell with accentuated design elements.',
    height: '',
    category: 'collapsed-shells',
  },
  {
    element: <CollapsedShellsDoubleDark />,
    title: 'DoubleDark',
    isComplex: '/shells/collapsed-shell-double-dark',
    size: '',
    description: 'A dark-themed double-layout collapsed shell for more visually intense UIs.',
    height: '',
    category: 'collapsed-shells',
  },
  {
    element: <CollapsedShellsSingle />,
    title: 'Single',
    isComplex: '/shells/collapsed-shell-single',
    size: '',
    description: 'A basic single-layout collapsed shell, suitable for streamlined interfaces.',
    height: '',
    category: 'collapsed-shells',
  },
  {
    element: <CollapsedShellsSingleAccent />,
    title: 'SingleAccent',
    isComplex: '/shells/collapsed-shell-single-accent',
    size: '',
    description:
      'Single-layout collapsed shell with additional accent features for visual distinction.',
    height: '',
    category: 'collapsed-shells',
  },
  {
    element: <CollapsedShellsSingleWhite />,
    title: 'SingleWhite',
    isComplex: '/shells/collapsed-shell-single-white',
    size: '',
    description: 'A clean and minimalist single-layout collapsed shell in white.',
    height: '',
    category: 'collapsed-shells',
  },
  {
    element: <CollapsedShellsSingleWhiteOff />,
    title: 'SingleWhiteOff',
    isComplex: '/shells/collapsed-shell-single-white-off',
    size: '',
    description: 'Single-layout collapsed shell in off-white for a subtle, refined appearance.',
    height: '',
    category: 'collapsed-shells',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'CollapsedShells';
  const pageDescription =
    'Explore collapsed shells, perfect for creating spaceEfficient layouts with expandable sections for more content.';
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
