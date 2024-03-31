'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiRatingsBasic from 'src/components/application-ui/ratings/basic/basic';
import ApplicationUiRatingsHover from 'src/components/application-ui/ratings/hover/hover';
import ApplicationUiRatingsIcons from 'src/components/application-ui/ratings/icons/icons';
import ApplicationUiRatingsPrecision from 'src/components/application-ui/ratings/precision/precision';
import ApplicationUiRatingsRadio from 'src/components/application-ui/ratings/radio/radio';
import ApplicationUiRatingsSizes from 'src/components/application-ui/ratings/sizes/sizes';
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
    element: <ApplicationUiRatingsBasic />,
    title: 'Basic',
    isComplex: 'false',
    size: 'lg',
    description: 'A simple rating system with standard star icons.',
    height: '',
    category: 'ratings',
  },
  {
    element: <ApplicationUiRatingsHover />,
    title: 'Hover',
    isComplex: 'false',
    size: 'lg',
    description: 'Displays a preview of the rating value when users hover over the stars.',
    height: '',
    category: 'ratings',
  },
  {
    element: <ApplicationUiRatingsIcons />,
    title: 'Icons',
    isComplex: 'false',
    size: 'lg',
    description: 'Uses custom icons for ratings instead of the traditional star icons.',
    height: '',
    category: 'ratings',
  },
  {
    element: <ApplicationUiRatingsPrecision />,
    title: 'Precision',
    isComplex: 'false',
    size: 'lg',
    description: 'Allows users to select ratings with decimal values, for more precise feedback.',
    height: '',
    category: 'ratings',
  },
  {
    element: <ApplicationUiRatingsRadio />,
    title: 'Radio',
    isComplex: 'false',
    size: 'lg',
    description:
      'Integrates radio buttons to select ratings, providing a different user experience.',
    height: '',
    category: 'ratings',
  },
  {
    element: <ApplicationUiRatingsSizes />,
    title: 'Sizes',
    isComplex: 'false',
    size: 'lg',
    description: 'Showcases different sizes of the rating icons, catering to varied design needs.',
    height: '',
    category: 'ratings',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Ratings';
  const pageDescription =
    'Discover our rating systems, perfect for collecting user feedback or evaluating content quality.';
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
