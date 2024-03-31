'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiContentShellsCalendar from 'src/components/application-ui/content-shells/calendar/calendar';
import ApplicationUiContentShellsFileManager from 'src/components/application-ui/content-shells/file-manager/file-manager';
import ApplicationUiContentShellsInvoiceDetails from 'src/components/application-ui/content-shells/invoice-details/invoice-details';
import ApplicationUiContentShellsJobsPlatform from 'src/components/application-ui/content-shells/jobs-platform/jobs-platform';
import ApplicationUiContentShellsMailbox from 'src/components/application-ui/content-shells/mailbox/mailbox';
import ApplicationUiContentShellsMessenger from 'src/components/application-ui/content-shells/messenger/messenger';
import ApplicationUiContentShellsProductDetails from 'src/components/application-ui/content-shells/product-details/product-details';
import ApplicationUiContentShellsProjectsBoard from 'src/components/application-ui/content-shells/projects-board/projects-board';
import ApplicationUiContentShellsStorefront from 'src/components/application-ui/content-shells/storefront/storefront';
import ApplicationUiContentShellsTasks from 'src/components/application-ui/content-shells/tasks/tasks';
import ApplicationUiContentShellsUserProfile from 'src/components/application-ui/content-shells/user-profile/user-profile';
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
    element: <ApplicationUiContentShellsCalendar />,
    title: 'Calendar',
    isComplex: 'false',
    size: 'lg',
    description: 'Interactive calendar for event tracking and scheduling.',
    height: '',
    category: 'content-shells',
  },
  {
    element: <ApplicationUiContentShellsFileManager />,
    title: 'FileManager',
    isComplex: 'false',
    size: 'xl',
    description: 'File management system for organizing and accessing documents.',
    height: 'full',
    category: 'content-shells',
  },
  {
    element: <ApplicationUiContentShellsInvoiceDetails />,
    title: 'InvoiceDetails',
    isComplex: 'false',
    size: 'xl',
    description: 'Invoice details content shell for displaying comprehensive billing information.',
    height: 'full',
    category: 'content-shells',
  },
  {
    element: <ApplicationUiContentShellsJobsPlatform />,
    title: 'JobsPlatform',
    isComplex: 'false',
    size: 'xl',
    description: 'Job listing and application platform for recruitment processes.',
    height: 'full',
    category: 'content-shells',
  },
  {
    element: <ApplicationUiContentShellsMailbox />,
    title: 'Mailbox',
    isComplex: 'false',
    size: 'xl',
    description: 'Email interface for sending, receiving, and organizing messages.',
    height: 'full',
    category: 'content-shells',
  },
  {
    element: <ApplicationUiContentShellsMessenger />,
    title: 'Messenger',
    isComplex: 'false',
    size: 'xl',
    description: 'Instant messaging application for real-time communication.',
    height: 'full',
    category: 'content-shells',
  },
  {
    element: <ApplicationUiContentShellsProductDetails />,
    title: 'ProductDetails',
    isComplex: 'false',
    size: 'xl',
    description: 'Content shell for detailed presentation of product features and specifications.',
    height: 'full',
    category: 'content-shells',
  },
  {
    element: <ApplicationUiContentShellsProjectsBoard />,
    title: 'ProjectsBoard',
    isComplex: 'false',
    size: 'xl',
    description: 'Project management tool for tracking progress and collaboration.',
    height: 'full',
    category: 'content-shells',
  },
  {
    element: <ApplicationUiContentShellsStorefront />,
    title: 'Storefront',
    isComplex: 'false',
    size: 'xl',
    description: 'E-commerce storefront content shell for showcasing products and services.',
    height: 'full',
    category: 'content-shells',
  },
  {
    element: <ApplicationUiContentShellsTasks />,
    title: 'Tasks',
    isComplex: 'false',
    size: 'xl',
    description: 'Task manager for creating, organizing, and tracking to-dos.',
    height: 'full',
    category: 'content-shells',
  },
  {
    element: <ApplicationUiContentShellsUserProfile />,
    title: 'UserProfile',
    isComplex: 'false',
    size: 'lg',
    description:
      'User profile content shell for displaying individual user information and settings.',
    height: 'full',
    category: 'content-shells',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'ContentShells';
  const pageDescription = 'A collection of diverse content shells for various application needs.';
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
