'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiNotificationsBackup from 'src/components/application-ui/notifications/backup/backup';
import ApplicationUiNotificationsCallRequest from 'src/components/application-ui/notifications/call-request/call-request';
import ApplicationUiNotificationsFailedAlternate from 'src/components/application-ui/notifications/failed-alternate/failed-alternate';
import ApplicationUiNotificationsFailed from 'src/components/application-ui/notifications/failed/failed';
import ApplicationUiNotificationsMessage from 'src/components/application-ui/notifications/message/message';
import ApplicationUiNotificationsPositions from 'src/components/application-ui/notifications/positions/positions';
import ApplicationUiNotificationsRequest from 'src/components/application-ui/notifications/request/request';
import ApplicationUiNotificationsStates from 'src/components/application-ui/notifications/states/states';
import ApplicationUiNotificationsUpdate from 'src/components/application-ui/notifications/update/update';
import ApplicationUiNotificationsUser from 'src/components/application-ui/notifications/user/user';
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
    element: <ApplicationUiNotificationsBackup />,
    title: 'Backup',
    isComplex: 'false',
    size: 'sm',
    description: 'Notification layout focused on backup-related actions or status updates.',
    height: '512px',
    category: 'notifications',
  },
  {
    element: <ApplicationUiNotificationsCallRequest />,
    title: 'CallRequest',
    isComplex: 'false',
    size: 'sm',
    description: 'A notification design specifically for call requests or communication alerts.',
    height: '512px',
    category: 'notifications',
  },
  {
    element: <ApplicationUiNotificationsFailed />,
    title: 'Failed',
    isComplex: 'false',
    size: 'sm',
    description: 'Notification variant indicating failed processes or errors.',
    height: '512px',
    category: 'notifications',
  },
  {
    element: <ApplicationUiNotificationsFailedAlternate />,
    title: 'FailedAlternate',
    isComplex: 'false',
    size: 'sm',
    description: 'An alternative layout for notifications related to failures or errors.',
    height: '512px',
    category: 'notifications',
  },
  {
    element: <ApplicationUiNotificationsMessage />,
    title: 'Message',
    isComplex: 'false',
    size: 'sm',
    description:
      'Designed to display message-related notifications, possibly with user interaction options.',
    height: '512px',
    category: 'notifications',
  },
  {
    element: <ApplicationUiNotificationsPositions />,
    title: 'Positions',
    isComplex: 'false',
    size: 'md',
    description:
      'Notifications with a focus on varying positions or layouts within the user interface.',
    height: '512px',
    category: 'notifications',
  },
  {
    element: <ApplicationUiNotificationsRequest />,
    title: 'Request',
    isComplex: 'false',
    size: 'sm',
    description: 'Notification style tailored for requests, such as permissions or user actions.',
    height: '512px',
    category: 'notifications',
  },
  {
    element: <ApplicationUiNotificationsStates />,
    title: 'States',
    isComplex: 'false',
    size: 'md',
    description: 'Notification variants designed to reflect different states or statuses.',
    height: '512px',
    category: 'notifications',
  },
  {
    element: <ApplicationUiNotificationsUpdate />,
    title: 'Update',
    isComplex: 'false',
    size: 'sm',
    description:
      'A notification layout specifically for updates, such as software or status changes.',
    height: '512px',
    category: 'notifications',
  },
  {
    element: <ApplicationUiNotificationsUser />,
    title: 'User',
    isComplex: 'false',
    size: 'sm',
    description: 'User-centric notification design, likely incorporating user data or actions.',
    height: '512px',
    category: 'notifications',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Notifications';
  const pageDescription =
    'View our notification styles, designed to inform users of updates, messages, or other important information.';
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
