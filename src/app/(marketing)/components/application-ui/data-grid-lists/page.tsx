'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiDataGridListsAvatarGroupsDetailsAccent from 'src/components/application-ui/data-grid-lists/avatar-groups-details-accent/avatar-groups-details-accent';
import ApplicationUiDataGridListsAvatarGroupsDetails from 'src/components/application-ui/data-grid-lists/avatar-groups-details/avatar-groups-details';
import ApplicationUiDataGridListsCounterCardAccent from 'src/components/application-ui/data-grid-lists/counter-card-accent/counter-card-accent';
import ApplicationUiDataGridListsCounterCard from 'src/components/application-ui/data-grid-lists/counter-card/counter-card';
import ApplicationUiDataGridListsNumbersIconsCardsAccent from 'src/components/application-ui/data-grid-lists/numbers-icons-cards-accent/numbers-icons-cards-accent';
import ApplicationUiDataGridListsNumbersIconsCards from 'src/components/application-ui/data-grid-lists/numbers-icons-cards/numbers-icons-cards';
import ApplicationUiDataGridListsProjects from 'src/components/application-ui/data-grid-lists/projects/projects';
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
    element: <ApplicationUiDataGridListsAvatarGroupsDetails />,
    title: 'AvatarGroupsDetails',
    isComplex: 'false',
    size: 'lg',
    description:
      'A data grid list featuring avatars and group details, ideal for user-centric data.',
    height: '',
    category: 'data-grid-lists',
  },
  {
    element: <ApplicationUiDataGridListsAvatarGroupsDetailsAccent />,
    title: 'AvatarGroupsDetailsAccent',
    isComplex: 'false',
    size: 'lg',
    description: 'This avatars cards groups use an accent background for all the card examples.',
    height: '',
    category: 'data-grid-lists',
  },
  {
    element: <ApplicationUiDataGridListsCounterCard />,
    title: 'CounterCard',
    isComplex: 'false',
    size: 'lg',
    description:
      'Grid list card focused on numerical counters, suitable for analytics and summaries.',
    height: '',
    category: 'data-grid-lists',
  },
  {
    element: <ApplicationUiDataGridListsCounterCardAccent />,
    title: 'CounterCardAccent',
    isComplex: 'false',
    size: 'lg',
    description: 'An accentuated version of the counter card, adding visual emphasis to data.',
    height: '',
    category: 'data-grid-lists',
  },
  {
    element: <ApplicationUiDataGridListsNumbersIconsCards />,
    title: 'NumbersIconsCards',
    isComplex: 'false',
    size: 'xl',
    description: 'Grid list combining numbers and icons for a visually engaging data presentation.',
    height: '',
    category: 'data-grid-lists',
  },
  {
    element: <ApplicationUiDataGridListsNumbersIconsCardsAccent />,
    title: 'NumbersIconsCardsAccent',
    isComplex: 'false',
    size: 'xl',
    description: 'Enhanced version of the numbers and icons cards with additional accent features.',
    height: '',
    category: 'data-grid-lists',
  },
  {
    element: <ApplicationUiDataGridListsProjects />,
    title: 'Projects',
    isComplex: 'false',
    size: 'lg',
    description:
      'Data grid list for organizing and displaying project information in a structured format.',
    height: '',
    category: 'data-grid-lists',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'DataGridLists';
  const pageDescription =
    'Explore data grid lists for detailed data presentation, featuring sorting, filtering, and customizable views.';
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
