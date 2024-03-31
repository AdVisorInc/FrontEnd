'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiListContainersBasicCardDividersMiddle from 'src/components/application-ui/list-containers/basic-card-dividers-middle/basic-card-dividers-middle';
import ApplicationUiListContainersBasicCardDividers from 'src/components/application-ui/list-containers/basic-card-dividers/basic-card-dividers';
import ApplicationUiListContainersBasicCard from 'src/components/application-ui/list-containers/basic-card/basic-card';
import ApplicationUiListContainersBasicDividersMiddle from 'src/components/application-ui/list-containers/basic-dividers-middle/basic-dividers-middle';
import ApplicationUiListContainersBasicDividers from 'src/components/application-ui/list-containers/basic-dividers/basic-dividers';
import ApplicationUiListContainersBasicStackedCardDividers from 'src/components/application-ui/list-containers/basic-stacked-card-dividers/basic-stacked-card-dividers';
import ApplicationUiListContainersBasicStackedCard from 'src/components/application-ui/list-containers/basic-stacked-card/basic-stacked-card';
import ApplicationUiListContainersBasicStackedDividersMiddleAlt from 'src/components/application-ui/list-containers/basic-stacked-dividers-middle-alt/basic-stacked-dividers-middle-alt';
import ApplicationUiListContainersBasicStackedDividersMiddle from 'src/components/application-ui/list-containers/basic-stacked-dividers-middle/basic-stacked-dividers-middle';
import ApplicationUiListContainersBasicStackedDividers from 'src/components/application-ui/list-containers/basic-stacked-dividers/basic-stacked-dividers';
import ApplicationUiListContainersBasicStacked from 'src/components/application-ui/list-containers/basic-stacked/basic-stacked';
import ApplicationUiListContainersBasic from 'src/components/application-ui/list-containers/basic/basic';
import ApplicationUiListContainersGridDividersThreeColumns from 'src/components/application-ui/list-containers/grid-dividers-three-columns/grid-dividers-three-columns';
import ApplicationUiListContainersGridDividersTwoColumns from 'src/components/application-ui/list-containers/grid-dividers-two-columns/grid-dividers-two-columns';
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
    element: <ApplicationUiListContainersBasic />,
    title: 'Basic',
    isComplex: 'false',
    size: 'lg',
    description: 'A fundamental list container layout, suitable for a variety of content.',
    height: '',
    category: 'list-containers',
  },
  {
    element: <ApplicationUiListContainersBasicCard />,
    title: 'BasicCard',
    isComplex: 'false',
    size: 'lg',
    description:
      'A basic list container styled as a card, offering a defined boundary for content.',
    height: '',
    category: 'list-containers',
  },
  {
    element: <ApplicationUiListContainersBasicCardDividers />,
    title: 'BasicCardDividers',
    isComplex: 'false',
    size: 'lg',
    description:
      'List container with card style and dividers, organizing content into clear sections.',
    height: '',
    category: 'list-containers',
  },
  {
    element: <ApplicationUiListContainersBasicCardDividersMiddle />,
    title: 'BasicCardDividersMiddle',
    isComplex: 'false',
    size: 'lg',
    description:
      'A variant of the basic card with dividers focused in the middle of the container.',
    height: '',
    category: 'list-containers',
  },
  {
    element: <ApplicationUiListContainersBasicDividers />,
    title: 'BasicDividers',
    isComplex: 'false',
    size: 'lg',
    description: 'Basic list container featuring dividers to separate and structure content.',
    height: '',
    category: 'list-containers',
  },
  {
    element: <ApplicationUiListContainersBasicDividersMiddle />,
    title: 'BasicDividersMiddle',
    isComplex: 'false',
    size: 'lg',
    description: 'A list container with dividers concentrated in the middle for a unique layout.',
    height: '',
    category: 'list-containers',
  },
  {
    element: <ApplicationUiListContainersBasicStacked />,
    title: 'BasicStacked',
    isComplex: 'false',
    size: 'lg',
    description: 'A stacked version of the basic list container, layering content for depth.',
    height: '',
    category: 'list-containers',
  },
  {
    element: <ApplicationUiListContainersBasicStackedCard />,
    title: 'BasicStackedCard',
    isComplex: 'false',
    size: 'lg',
    description: 'Stacked list container within a card format for a more pronounced presentation.',
    height: '',
    category: 'list-containers',
  },
  {
    element: <ApplicationUiListContainersBasicStackedCardDividers />,
    title: 'BasicStackedCardDividers',
    isComplex: 'false',
    size: 'lg',
    description: 'Stacked card with dividers, combining elevation with clear content separation.',
    height: '',
    category: 'list-containers',
  },
  {
    element: <ApplicationUiListContainersBasicStackedDividers />,
    title: 'BasicStackedDividers',
    isComplex: 'false',
    size: 'lg',
    description: 'Stacked list container equipped with dividers to enhance content organization.',
    height: '',
    category: 'list-containers',
  },
  {
    element: <ApplicationUiListContainersBasicStackedDividersMiddle />,
    title: 'BasicStackedDividersMiddle',
    isComplex: 'false',
    size: 'lg',
    description: 'This variant focuses dividers in the middle of a stacked list container.',
    height: '',
    category: 'list-containers',
  },
  {
    element: <ApplicationUiListContainersBasicStackedDividersMiddleAlt />,
    title: 'BasicStackedDividersMiddleAlt',
    isComplex: 'false',
    size: 'md',
    description:
      'An alternative design to the middle-focused dividers in a stacked list container.',
    height: '',
    category: 'list-containers',
  },
  {
    element: <ApplicationUiListContainersGridDividersThreeColumns />,
    title: 'GridDividersThreeColumns',
    isComplex: 'false',
    size: 'lg',
    description:
      'A grid layout with dividers, organized into three columns for content distribution.',
    height: '',
    category: 'list-containers',
  },
  {
    element: <ApplicationUiListContainersGridDividersTwoColumns />,
    title: 'GridDividersTwoColumns',
    isComplex: 'false',
    size: 'lg',
    description: 'Two-column grid list container with dividers for segmenting content clearly.',
    height: '',
    category: 'list-containers',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'ListContainers';
  const pageDescription =
    'Discover our list containers, ideal for grouping and displaying lists of items in a coherent and structured manner.';
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
