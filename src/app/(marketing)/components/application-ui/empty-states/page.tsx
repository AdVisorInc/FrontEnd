'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiEmptyStatesBasicLarge from 'src/components/application-ui/empty-states/basic-large/basic-large';
import ApplicationUiEmptyStatesBasicSmall from 'src/components/application-ui/empty-states/basic-small/basic-small';
import ApplicationUiEmptyStatesBasic from 'src/components/application-ui/empty-states/basic/basic';
import ApplicationUiEmptyStatesDashedAction from 'src/components/application-ui/empty-states/dashed-action/dashed-action';
import ApplicationUiEmptyStatesImageTitle from 'src/components/application-ui/empty-states/image-title/image-title';
import ApplicationUiEmptyStatesNextSteps from 'src/components/application-ui/empty-states/next-steps/next-steps';
import ApplicationUiEmptyStatesNoResults from 'src/components/application-ui/empty-states/no-results/no-results';
import ApplicationUiEmptyStatesRecommandations from 'src/components/application-ui/empty-states/recommandations/recommandations';
import ApplicationUiEmptyStatesTitleAction from 'src/components/application-ui/empty-states/title-action/title-action';
import ApplicationUiEmptyStatesTitleDescriptionAction from 'src/components/application-ui/empty-states/title-description-action/title-description-action';
import ApplicationUiEmptyStatesTitleDescription from 'src/components/application-ui/empty-states/title-description/title-description';
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
    element: <ApplicationUiEmptyStatesBasic />,
    title: 'Basic',
    isComplex: 'false',
    size: 'md',
    description: 'A standard empty state layout for general purposes.',
    height: '',
    category: 'empty-states',
  },
  {
    element: <ApplicationUiEmptyStatesBasicLarge />,
    title: 'BasicLarge',
    isComplex: 'false',
    size: 'md',
    description: 'Empty state display with a basic large layout for placeholder content.',
    height: '',
    category: 'empty-states',
  },
  {
    element: <ApplicationUiEmptyStatesBasicSmall />,
    title: 'BasicSmall',
    isComplex: 'false',
    size: 'md',
    description: 'A compact version of the basic empty state for smaller areas.',
    height: '',
    category: 'empty-states',
  },
  {
    element: <ApplicationUiEmptyStatesDashedAction />,
    title: 'DashedAction',
    isComplex: 'false',
    size: 'sm',
    description: 'An empty state with a dashed outline and a call to action.',
    height: '',
    category: 'empty-states',
  },
  {
    element: <ApplicationUiEmptyStatesImageTitle />,
    title: 'ImageTitle',
    isComplex: 'false',
    size: 'xs',
    description: 'An empty state featuring an image with a title.',
    height: '',
    category: 'empty-states',
  },
  {
    element: <ApplicationUiEmptyStatesNextSteps />,
    title: 'NextSteps',
    isComplex: 'false',
    size: 'sm',
    description: 'This layout suggests the next steps a user can take.',
    height: '',
    category: 'empty-states',
  },
  {
    element: <ApplicationUiEmptyStatesNoResults />,
    title: 'NoResults',
    isComplex: 'false',
    size: 'sm',
    description: 'Used to indicate when no results are found in a search or query.',
    height: '',
    category: 'empty-states',
  },
  {
    element: <ApplicationUiEmptyStatesRecommandations />,
    title: 'Recommandations',
    isComplex: 'false',
    size: 'sm',
    description: 'A layout tailored for presenting recommendations or suggestions.',
    height: '',
    category: 'empty-states',
  },
  {
    element: <ApplicationUiEmptyStatesTitleAction />,
    title: 'TitleAction',
    isComplex: 'false',
    size: 'sm',
    description: 'An empty state layout with a title and a primary action.',
    height: '',
    category: 'empty-states',
  },
  {
    element: <ApplicationUiEmptyStatesTitleDescription />,
    title: 'TitleDescription',
    isComplex: 'false',
    size: 'xs',
    description: 'An empty state that combines a title with a descriptive text.',
    height: '',
    category: 'empty-states',
  },
  {
    element: <ApplicationUiEmptyStatesTitleDescriptionAction />,
    title: 'TitleDescriptionAction',
    isComplex: 'false',
    size: 'xs',
    description: 'An empty state that features a title, description, and an action button.',
    height: '',
    category: 'empty-states',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'EmptyStates';
  const pageDescription =
    'Explore our empty state designs, offering visually appealing placeholders for areas without content or data.';
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
