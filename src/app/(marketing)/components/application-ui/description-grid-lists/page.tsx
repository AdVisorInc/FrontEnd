'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiDescriptionGridListsAppointments from 'src/components/application-ui/description-grid-lists/appointments/appointments';
import ApplicationUiDescriptionGridListsConferences from 'src/components/application-ui/description-grid-lists/conferences/conferences';
import ApplicationUiDescriptionGridListsDatacenterClusters from 'src/components/application-ui/description-grid-lists/datacenter-clusters/datacenter-clusters';
import ApplicationUiDescriptionGridListsDoctorProfile from 'src/components/application-ui/description-grid-lists/doctor-profile/doctor-profile';
import ApplicationUiDescriptionGridListsPrescriptionsRequests from 'src/components/application-ui/description-grid-lists/prescriptions-requests/prescriptions-requests';
import ApplicationUiDescriptionGridListsProfileCard from 'src/components/application-ui/description-grid-lists/profile-card/profile-card';
import ApplicationUiDescriptionGridListsProfileDetailsAccent from 'src/components/application-ui/description-grid-lists/profile-details-accent/profile-details-accent';
import ApplicationUiDescriptionGridListsProfileNavigationBlocks from 'src/components/application-ui/description-grid-lists/profile-navigation-blocks/profile-navigation-blocks';
import ApplicationUiDescriptionGridListsProfileProgress from 'src/components/application-ui/description-grid-lists/profile-progress/profile-progress';
import ApplicationUiDescriptionGridListsProfile from 'src/components/application-ui/description-grid-lists/profile/profile';
import ApplicationUiDescriptionGridListsRecentQuestions from 'src/components/application-ui/description-grid-lists/recent-questions/recent-questions';
import ApplicationUiDescriptionGridListsRevenueBlock from 'src/components/application-ui/description-grid-lists/revenue-block/revenue-block';
import ApplicationUiDescriptionGridListsTopAgents from 'src/components/application-ui/description-grid-lists/top-agents/top-agents';
import ApplicationUiDescriptionGridListsUpcomingEvents from 'src/components/application-ui/description-grid-lists/upcoming-events/upcoming-events';
import ApplicationUiDescriptionGridListsUserBlocks from 'src/components/application-ui/description-grid-lists/user-blocks/user-blocks';
import ApplicationUiDescriptionGridListsUserInfoBlocks from 'src/components/application-ui/description-grid-lists/user-info-blocks/user-info-blocks';
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
    element: <ApplicationUiDescriptionGridListsAppointments />,
    title: 'Appointments',
    isComplex: 'false',
    size: 'md',
    description: 'Grid lists designed to display appointment schedules or bookings.',
    height: '',
    category: 'description-grid-lists',
  },
  {
    element: <ApplicationUiDescriptionGridListsConferences />,
    title: 'Conferences',
    isComplex: 'false',
    size: 'lg',
    description: 'Lists tailored for showcasing conference schedules or speaker information.',
    height: '',
    category: 'description-grid-lists',
  },
  {
    element: <ApplicationUiDescriptionGridListsDatacenterClusters />,
    title: 'DatacenterClusters',
    isComplex: 'false',
    size: 'lg',
    description: 'Grids focused on displaying datacenter clusters and related information.',
    height: '',
    category: 'description-grid-lists',
  },
  {
    element: <ApplicationUiDescriptionGridListsDoctorProfile />,
    title: 'DoctorProfile',
    isComplex: 'false',
    size: 'sm',
    description: 'Specialized lists for presenting profiles and details of medical professionals.',
    height: '',
    category: 'description-grid-lists',
  },
  {
    element: <ApplicationUiDescriptionGridListsPrescriptionsRequests />,
    title: 'PrescriptionsRequests',
    isComplex: 'false',
    size: 'md',
    description: 'Lists for managing and displaying prescription requests and statuses.',
    height: '',
    category: 'description-grid-lists',
  },
  {
    element: <ApplicationUiDescriptionGridListsProfile />,
    title: 'Profile',
    isComplex: 'false',
    size: 'sm',
    description: 'Description grid list for concise display of user profile details.',
    height: '',
    category: 'description-grid-lists',
  },
  {
    element: <ApplicationUiDescriptionGridListsProfileCard />,
    title: 'ProfileCard',
    isComplex: 'false',
    size: 'sm',
    description: 'Grid lists featuring profile cards for individual users or personnel.',
    height: '',
    category: 'description-grid-lists',
  },
  {
    element: <ApplicationUiDescriptionGridListsProfileDetailsAccent />,
    title: 'ProfileDetailsAccent',
    isComplex: 'false',
    size: 'sm',
    description: 'Enhanced profile detail lists with accent features for emphasis.',
    height: '',
    category: 'description-grid-lists',
  },
  {
    element: <ApplicationUiDescriptionGridListsProfileNavigationBlocks />,
    title: 'ProfileNavigationBlocks',
    isComplex: 'false',
    size: 'sm',
    description: 'Navigation-focused grid lists for detailed user profile interfaces.',
    height: '',
    category: 'description-grid-lists',
  },
  {
    element: <ApplicationUiDescriptionGridListsProfileProgress />,
    title: 'ProfileProgress',
    isComplex: 'false',
    size: 'sm',
    description: 'Grid lists displaying progress or achievements within user profiles.',
    height: '',
    category: 'description-grid-lists',
  },
  {
    element: <ApplicationUiDescriptionGridListsRecentQuestions />,
    title: 'RecentQuestions',
    isComplex: 'false',
    size: 'md',
    description: 'Lists for showcasing recently asked questions or FAQs.',
    height: '',
    category: 'description-grid-lists',
  },
  {
    element: <ApplicationUiDescriptionGridListsRevenueBlock />,
    title: 'RevenueBlock',
    isComplex: 'false',
    size: 'sm',
    description: 'Lists aimed at presenting revenue statistics or financial data.',
    height: '',
    category: 'description-grid-lists',
  },
  {
    element: <ApplicationUiDescriptionGridListsTopAgents />,
    title: 'TopAgents',
    isComplex: 'false',
    size: 'lg',
    description: 'Lists highlighting top-performing agents or employees.',
    height: '',
    category: 'description-grid-lists',
  },
  {
    element: <ApplicationUiDescriptionGridListsUpcomingEvents />,
    title: 'UpcomingEvents',
    isComplex: 'false',
    size: 'sm',
    description: 'Grid lists detailing upcoming events, seminars, or meetings.',
    height: '',
    category: 'description-grid-lists',
  },
  {
    element: <ApplicationUiDescriptionGridListsUserBlocks />,
    title: 'UserBlocks',
    isComplex: 'false',
    size: 'lg',
    description: 'User-centric blocks for displaying individual information or status.',
    height: '',
    category: 'description-grid-lists',
  },
  {
    element: <ApplicationUiDescriptionGridListsUserInfoBlocks />,
    title: 'UserInfoBlocks',
    isComplex: 'false',
    size: 'lg',
    description: 'Grid lists specifically designed for detailed user information presentation.',
    height: '',
    category: 'description-grid-lists',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'DescriptionGridLists';
  const pageDescription =
    'View our description grid lists, perfect for displaying items alongside detailed descriptions in an organized layout.';
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
