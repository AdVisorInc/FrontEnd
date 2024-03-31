'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiTimelinesAlternate from 'src/components/application-ui/timelines/alternate/alternate';
import ApplicationUiTimelinesBasic from 'src/components/application-ui/timelines/basic/basic';
import ApplicationUiTimelinesChecklist from 'src/components/application-ui/timelines/checklist/checklist';
import ApplicationUiTimelinesEvents from 'src/components/application-ui/timelines/events/events';
import ApplicationUiTimelinesIcons from 'src/components/application-ui/timelines/icons/icons';
import ApplicationUiTimelinesOnboarding from 'src/components/application-ui/timelines/onboarding/onboarding';
import ApplicationUiTimelinesTasks from 'src/components/application-ui/timelines/tasks/tasks';
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
    element: <ApplicationUiTimelinesAlternate />,
    title: 'Alternate',
    isComplex: 'false',
    size: 'sm',
    description: 'An alternate design for the timeline, offering a different visual approach.',
    height: '',
    category: 'timelines',
  },
  {
    element: <ApplicationUiTimelinesBasic />,
    title: 'Basic',
    isComplex: 'false',
    size: 'sm',
    description:
      'The fundamental and straightforward design of a timeline for chronological display.',
    height: '',
    category: 'timelines',
  },
  {
    element: <ApplicationUiTimelinesChecklist />,
    title: 'Checklist',
    isComplex: 'false',
    size: 'sm',
    description: 'Small timeline component styled as a checklist for tracking tasks or events.',
    height: '',
    category: 'timelines',
  },
  {
    element: <ApplicationUiTimelinesEvents />,
    title: 'Events',
    isComplex: 'false',
    size: 'md',
    description:
      'A timeline layout specifically designed to showcase events in a chronological order.',
    height: '',
    category: 'timelines',
  },
  {
    element: <ApplicationUiTimelinesIcons />,
    title: 'Icons',
    isComplex: 'false',
    size: 'md',
    description:
      'A timeline variant where each entry is represented with unique icons for visual emphasis.',
    height: '',
    category: 'timelines',
  },
  {
    element: <ApplicationUiTimelinesOnboarding />,
    title: 'Onboarding',
    isComplex: 'false',
    size: 'md',
    description: 'Medium-sized timeline for guiding users through the onboarding process.',
    height: '',
    category: 'timelines',
  },
  {
    element: <ApplicationUiTimelinesTasks />,
    title: 'Tasks',
    isComplex: 'false',
    size: 'md',
    description:
      'A task-focused timeline, ideal for tracking project milestones or task completion.',
    height: '',
    category: 'timelines',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Timelines';
  const pageDescription =
    'Discover our timelines for a chronological display of events, offering a visual journey through time.';
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
