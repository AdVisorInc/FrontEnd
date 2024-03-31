'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiAlertsActions from 'src/components/application-ui/alerts/actions/actions';
import ApplicationUiAlertsBasic from 'src/components/application-ui/alerts/basic/basic';
import ApplicationUiAlertsCompletedAlternate from 'src/components/application-ui/alerts/completed-alternate/completed-alternate';
import ApplicationUiAlertsCompleted from 'src/components/application-ui/alerts/completed/completed';
import ApplicationUiAlertsDescription from 'src/components/application-ui/alerts/description/description';
import ApplicationUiAlertsFailedAlternate from 'src/components/application-ui/alerts/failed-alternate/failed-alternate';
import ApplicationUiAlertsFailed from 'src/components/application-ui/alerts/failed/failed';
import ApplicationUiAlertsFilled from 'src/components/application-ui/alerts/filled/filled';
import ApplicationUiAlertsIcons from 'src/components/application-ui/alerts/icons/icons';
import ApplicationUiAlertsNotificationAlternate from 'src/components/application-ui/alerts/notification-alternate/notification-alternate';
import ApplicationUiAlertsNotification from 'src/components/application-ui/alerts/notification/notification';
import ApplicationUiAlertsOutlined from 'src/components/application-ui/alerts/outlined/outlined';
import ApplicationUiAlertsProgressAlternate from 'src/components/application-ui/alerts/progress-alternate/progress-alternate';
import ApplicationUiAlertsProgress from 'src/components/application-ui/alerts/progress/progress';
import ApplicationUiAlertsTransition from 'src/components/application-ui/alerts/transition/transition';
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
    element: <ApplicationUiAlertsActions />,
    title: 'Actions',
    isComplex: 'false',
    size: 'md',
    description: 'Alerts designed for interactive user actions.',
    height: '',
    category: 'alerts',
  },
  {
    element: <ApplicationUiAlertsBasic />,
    title: 'Basic',
    isComplex: 'false',
    size: 'md',
    description: 'Simple and straightforward alert layout for general purposes.',
    height: '',
    category: 'alerts',
  },
  {
    element: <ApplicationUiAlertsCompleted />,
    title: 'Completed',
    isComplex: 'false',
    size: 'md',
    description: 'Alerts indicating the completion of a process or task.',
    height: '',
    category: 'alerts',
  },
  {
    element: <ApplicationUiAlertsCompletedAlternate />,
    title: 'CompletedAlternate',
    isComplex: 'false',
    size: 'md',
    description: 'An alternative design for alerts signaling task completion.',
    height: '',
    category: 'alerts',
  },
  {
    element: <ApplicationUiAlertsDescription />,
    title: 'Description',
    isComplex: 'false',
    size: 'md',
    description: 'Alerts focused on delivering detailed descriptions.',
    height: '',
    category: 'alerts',
  },
  {
    element: <ApplicationUiAlertsFailed />,
    title: 'Failed',
    isComplex: 'false',
    size: 'md',
    description: 'Alerts specifically for notifying about failures or errors.',
    height: '',
    category: 'alerts',
  },
  {
    element: <ApplicationUiAlertsFailedAlternate />,
    title: 'FailedAlternate',
    isComplex: 'false',
    size: 'md',
    description: 'Alternative design for alerts related to failures or errors.',
    height: '',
    category: 'alerts',
  },
  {
    element: <ApplicationUiAlertsFilled />,
    title: 'Filled',
    isComplex: 'false',
    size: 'md',
    description: 'Solidly filled alerts for high visibility.',
    height: '',
    category: 'alerts',
  },
  {
    element: <ApplicationUiAlertsIcons />,
    title: 'Icons',
    isComplex: 'false',
    size: 'md',
    description: 'Icon-based alerts for quick visual communication.',
    height: '',
    category: 'alerts',
  },
  {
    element: <ApplicationUiAlertsNotification />,
    title: 'Notification',
    isComplex: 'false',
    size: 'lg',
    description: 'General notification alerts for various purposes.',
    height: '',
    category: 'alerts',
  },
  {
    element: <ApplicationUiAlertsNotificationAlternate />,
    title: 'NotificationAlternate',
    isComplex: 'false',
    size: 'md',
    description: 'An alternative style for general notification alerts.',
    height: '',
    category: 'alerts',
  },
  {
    element: <ApplicationUiAlertsOutlined />,
    title: 'Outlined',
    isComplex: 'false',
    size: 'md',
    description: 'Alerts with outlined designs for a distinct appearance.',
    height: '',
    category: 'alerts',
  },
  {
    element: <ApplicationUiAlertsProgress />,
    title: 'Progress',
    isComplex: 'false',
    size: 'md',
    description: 'Alerts indicating progress of ongoing tasks or processes.',
    height: '',
    category: 'alerts',
  },
  {
    element: <ApplicationUiAlertsProgressAlternate />,
    title: 'ProgressAlternate',
    isComplex: 'false',
    size: 'md',
    description: 'Alternate design for alerts showing task or process progress.',
    height: '',
    category: 'alerts',
  },
  {
    element: <ApplicationUiAlertsTransition />,
    title: 'Transition',
    isComplex: 'false',
    size: 'md',
    description: 'Alerts designed to indicate transitions or changes.',
    height: '',
    category: 'alerts',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Alerts';
  const pageDescription =
    'Browse through various alert styles, ideal for conveying important messages, warnings, or user feedback in an engaging manner.';
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
