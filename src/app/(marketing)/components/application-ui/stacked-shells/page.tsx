'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { StackedShellsTopNavAccent } from 'src/components/application-ui/stacked-shells/top-nav-accent/top-nav-accent';
import { StackedShellsTopNavTabs } from 'src/components/application-ui/stacked-shells/top-nav-tabs/top-nav-tabs';
import { StackedShellsTopNavWide } from 'src/components/application-ui/stacked-shells/top-nav-wide/top-nav-wide';
import { StackedShellsTopNav } from 'src/components/application-ui/stacked-shells/top-nav/top-nav';
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
    element: <StackedShellsTopNav />,
    title: 'TopNav',
    isComplex: '/shells/stacked-shell-top-nav',
    size: '',
    description: 'Stacked shell layout with a top navigation bar.',
    height: '',
    category: 'stacked-shells',
  },
  {
    element: <StackedShellsTopNavAccent />,
    title: 'TopNavAccent',
    isComplex: '/shells/stacked-shell-top-nav-accent',
    size: '',
    description: 'A top navigation stacked shell variant with accentuated design elements.',
    height: '',
    category: 'stacked-shells',
  },
  {
    element: <StackedShellsTopNavTabs />,
    title: 'TopNavTabs',
    isComplex: '/shells/stacked-shell-top-nav-tabs',
    size: '',
    description: 'Stacked shell layout featuring top navigation with tabbed interface.',
    height: '',
    category: 'stacked-shells',
  },
  {
    element: <StackedShellsTopNavWide />,
    title: 'TopNavWide',
    isComplex: '/shells/stacked-shell-top-nav-wide',
    size: '',
    description:
      'A wider version of the top navigation stacked shell, suitable for broader content or more extensive navigation options.',
    height: '',
    category: 'stacked-shells',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'StackedShells';
  const pageDescription =
    'Discover stacked shells for creating layered layouts, enhancing the depth and structure of your content.';
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
