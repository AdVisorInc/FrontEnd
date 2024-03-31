'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiDrawersBasicDarkBackdrop from 'src/components/application-ui/drawers/basic-dark-backdrop/basic-dark-backdrop';
import ApplicationUiDrawersBasicInvisibleBackdrop from 'src/components/application-ui/drawers/basic-invisible-backdrop/basic-invisible-backdrop';
import ApplicationUiDrawersBasicLightBackdrop from 'src/components/application-ui/drawers/basic-light-backdrop/basic-light-backdrop';
import ApplicationUiDrawersDark from 'src/components/application-ui/drawers/dark/dark';
import ApplicationUiDrawersFileDetails from 'src/components/application-ui/drawers/file-details/file-details';
import ApplicationUiDrawersMultiColumn from 'src/components/application-ui/drawers/multi-column/multi-column';
import ApplicationUiDrawersNotifications from 'src/components/application-ui/drawers/notifications/notifications';
import ApplicationUiDrawersPositions from 'src/components/application-ui/drawers/positions/positions';
import ApplicationUiDrawersWideForm from 'src/components/application-ui/drawers/wide-form/wide-form';
import ApplicationUiDrawersWidgets from 'src/components/application-ui/drawers/widgets/widgets';
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
    element: <ApplicationUiDrawersBasicDarkBackdrop />,
    title: 'BasicDarkBackdrop',
    isComplex: 'false',
    size: 'sm',
    description: 'Drawer variant with a dark backdrop, providing a strong visual contrast.',
    height: 'full',
    category: 'drawers',
  },
  {
    element: <ApplicationUiDrawersBasicInvisibleBackdrop />,
    title: 'BasicInvisibleBackdrop',
    isComplex: 'false',
    size: 'sm',
    description: 'Drawer with an invisible backdrop for a seamless integration with the page.',
    height: 'full',
    category: 'drawers',
  },
  {
    element: <ApplicationUiDrawersBasicLightBackdrop />,
    title: 'BasicLightBackdrop',
    isComplex: 'false',
    size: 'sm',
    description: 'Standard drawer style with a light backdrop for subtle visual separation.',
    height: 'full',
    category: 'drawers',
  },
  {
    element: <ApplicationUiDrawersDark />,
    title: 'Dark',
    isComplex: 'false',
    size: 'sm',
    description: 'Drawer with a dark theme, offering a sleek and modern look.',
    height: 'full',
    category: 'drawers',
  },
  {
    element: <ApplicationUiDrawersFileDetails />,
    title: 'FileDetails',
    isComplex: 'false',
    size: 'sm',
    description: 'Drawer specifically designed to present file details or document information.',
    height: 'full',
    category: 'drawers',
  },
  {
    element: <ApplicationUiDrawersMultiColumn />,
    title: 'MultiColumn',
    isComplex: 'false',
    size: 'sm',
    description: 'Multi-column drawer for organizing content or navigation elements.',
    height: 'full',
    category: 'drawers',
  },
  {
    element: <ApplicationUiDrawersNotifications />,
    title: 'Notifications',
    isComplex: 'false',
    size: 'sm',
    description: 'Drawer component for displaying notifications and alerts in a compact space.',
    height: 'full',
    category: 'drawers',
  },
  {
    element: <ApplicationUiDrawersWidgets />,
    title: 'Widgets',
    isComplex: 'false',
    size: 'sm',
    description: 'Drawer featuring an outlined container, ideal for showing widgets data.',
    height: 'full',
    category: 'drawers',
  },
  {
    element: <ApplicationUiDrawersPositions />,
    title: 'Positions',
    isComplex: 'false',
    size: 'sm',
    description: 'Drawer showcasing various positioning options for different UI contexts.',
    height: 'full',
    category: 'drawers',
  },
  {
    element: <ApplicationUiDrawersWideForm />,
    title: 'WideForm',
    isComplex: 'false',
    size: 'sm',
    description: 'A wide drawer variant, suitable for forms or extended content.',
    height: 'full',
    category: 'drawers',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Drawers';
  const pageDescription =
    'Discover our drawer components, providing a hidden yet accessible space for navigation menus or additional information.';
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
