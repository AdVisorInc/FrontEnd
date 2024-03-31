'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiBreadcrumbsBasic from 'src/components/application-ui/breadcrumbs/basic/basic';
import ApplicationUiBreadcrumbsChips from 'src/components/application-ui/breadcrumbs/chips/chips';
import ApplicationUiBreadcrumbsCollapsed from 'src/components/application-ui/breadcrumbs/collapsed/collapsed';
import ApplicationUiBreadcrumbsFullWidth from 'src/components/application-ui/breadcrumbs/full-width/full-width';
import ApplicationUiBreadcrumbsIcons from 'src/components/application-ui/breadcrumbs/icons/icons';
import ApplicationUiBreadcrumbsLastActive from 'src/components/application-ui/breadcrumbs/last-active/last-active';
import ApplicationUiBreadcrumbsNavigation from 'src/components/application-ui/breadcrumbs/navigation/navigation';
import ApplicationUiBreadcrumbsRounded from 'src/components/application-ui/breadcrumbs/rounded/rounded';
import ApplicationUiBreadcrumbsSeparators from 'src/components/application-ui/breadcrumbs/separators/separators';
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
    element: <ApplicationUiBreadcrumbsBasic />,
    title: 'Basic',
    isComplex: 'false',
    size: 'lg',
    description: 'Standard breadcrumb navigation for basic website structures.',
    height: '',
    category: 'breadcrumbs',
  },
  {
    element: <ApplicationUiBreadcrumbsChips />,
    title: 'Chips',
    isComplex: 'false',
    size: 'lg',
    description: 'Breadcrumb style using chip elements for each navigation point.',
    height: '',
    category: 'breadcrumbs',
  },
  {
    element: <ApplicationUiBreadcrumbsCollapsed />,
    title: 'Collapsed',
    isComplex: 'false',
    size: 'lg',
    description: 'Breadcrumbs that collapse to save space, showing key navigation points.',
    height: '',
    category: 'breadcrumbs',
  },
  {
    element: <ApplicationUiBreadcrumbsFullWidth />,
    title: 'FullWidth',
    isComplex: 'false',
    size: 'lg',
    description: 'Full-width breadcrumb design for broader navigation visibility.',
    height: '',
    category: 'breadcrumbs',
  },
  {
    element: <ApplicationUiBreadcrumbsIcons />,
    title: 'Icons',
    isComplex: 'false',
    size: 'lg',
    description: 'Breadcrumbs with icons, adding visual cues to navigation links.',
    height: '',
    category: 'breadcrumbs',
  },
  {
    element: <ApplicationUiBreadcrumbsLastActive />,
    title: 'LastActive',
    isComplex: 'false',
    size: 'lg',
    description: 'Breadcrumb style where the last item is highlighted as the current page.',
    height: '',
    category: 'breadcrumbs',
  },
  {
    element: <ApplicationUiBreadcrumbsNavigation />,
    title: 'Navigation',
    isComplex: 'false',
    size: 'lg',
    description: 'Large breadcrumb navigation element for guiding user through site paths.',
    height: '',
    category: 'breadcrumbs',
  },
  {
    element: <ApplicationUiBreadcrumbsRounded />,
    title: 'Rounded',
    isComplex: 'false',
    size: 'lg',
    description: 'Breadcrumbs with rounded edges for a softer UI appearance.',
    height: '',
    category: 'breadcrumbs',
  },
  {
    element: <ApplicationUiBreadcrumbsSeparators />,
    title: 'Separators',
    isComplex: 'false',
    size: 'lg',
    description: 'Breadcrumbs with customized separators between navigation items.',
    height: '',
    category: 'breadcrumbs',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Breadcrumbs';
  const pageDescription =
    'Implement our breadcrumb navigation to improve user orientation within your website or application, showing a clear path of pages visited.';
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
