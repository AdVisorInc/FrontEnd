'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiPageHeadingsBasicActions from 'src/components/application-ui/page-headings/basic-actions/basic-actions';
import ApplicationUiPageHeadingsBasic from 'src/components/application-ui/page-headings/basic/basic';
import ApplicationUiPageHeadingsBreadcrumb from 'src/components/application-ui/page-headings/breadcrumb/breadcrumb';
import ApplicationUiPageHeadingsBreadcrumbsInner from 'src/components/application-ui/page-headings/breadcrumbs-inner/breadcrumbs-inner';
import ApplicationUiPageHeadingsIconActions from 'src/components/application-ui/page-headings/icon-actions/icon-actions';
import ApplicationUiPageHeadingsIconBreadcrumbs from 'src/components/application-ui/page-headings/icon-breadcrumbs/icon-breadcrumbs';
import ApplicationUiPageHeadingsIcon from 'src/components/application-ui/page-headings/icon/icon';
import ApplicationUiPageHeadingsTabsBreadcrumbs from 'src/components/application-ui/page-headings/tabs-breadcrumbs/tabs-breadcrumbs';
import ApplicationUiPageHeadingsTabs from 'src/components/application-ui/page-headings/tabs/tabs';
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
    element: <ApplicationUiPageHeadingsBasic />,
    title: 'Basic',
    isComplex: 'false',
    size: 'xl',
    description: 'A standard page heading layout with a clear and straightforward design.',
    height: '',
    category: 'page-headings',
  },
  {
    element: <ApplicationUiPageHeadingsBasicActions />,
    title: 'BasicActions',
    isComplex: 'false',
    size: 'xl',
    description: 'A basic page heading format enhanced with action buttons for user interaction.',
    height: '',
    category: 'page-headings',
  },
  {
    element: <ApplicationUiPageHeadingsBreadcrumb />,
    title: 'Breadcrumb',
    isComplex: 'false',
    size: 'xl',
    description:
      'A page heading layout featuring breadcrumb navigation for enhanced user guidance.',
    height: '',
    category: 'page-headings',
  },
  {
    element: <ApplicationUiPageHeadingsBreadcrumbsInner />,
    title: 'BreadcrumbsInner',
    isComplex: 'false',
    size: 'xl',
    description:
      'A unique heading style that integrates breadcrumbs within the header for a seamless navigation experience.',
    height: '',
    category: 'page-headings',
  },
  {
    element: <ApplicationUiPageHeadingsIcon />,
    title: 'Icon',
    isComplex: 'false',
    size: 'xl',
    description:
      'A visually appealing page heading design that includes thematic icons for an enhanced visual appeal.',
    height: '',
    category: 'page-headings',
  },
  {
    element: <ApplicationUiPageHeadingsIconActions />,
    title: 'IconActions',
    isComplex: 'false',
    size: 'xl',
    description:
      'Combines iconic elements with actionable buttons, offering both aesthetic and functional benefits.',
    height: '',
    category: 'page-headings',
  },
  {
    element: <ApplicationUiPageHeadingsIconBreadcrumbs />,
    title: 'IconBreadcrumbs',
    isComplex: 'false',
    size: 'xl',
    description:
      'This variant merges icons with breadcrumb trails, providing a rich and navigable heading structure.',
    height: '',
    category: 'page-headings',
  },
  {
    element: <ApplicationUiPageHeadingsTabs />,
    title: 'Tabs',
    isComplex: 'false',
    size: 'xl',
    description:
      'Incorporates tabbed navigation within the page heading, offering a clean and organized layout.',
    height: '',
    category: 'page-headings',
  },
  {
    element: <ApplicationUiPageHeadingsTabsBreadcrumbs />,
    title: 'TabsBreadcrumbs',
    isComplex: 'false',
    size: 'xl',
    description:
      'A sophisticated layout that combines tabs and breadcrumbs for a comprehensive navigation experience.',
    height: '',
    category: 'page-headings',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'PageHeadings';
  const pageDescription =
    'Efficiently structure your page content with our versatile page headings, offering clear hierarchy and focus for your web app interface.';
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
