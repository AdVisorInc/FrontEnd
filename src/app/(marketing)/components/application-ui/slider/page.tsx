'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiSliderBasic from 'src/components/application-ui/slider/basic/basic';
import ApplicationUiSliderColors from 'src/components/application-ui/slider/colors/colors';
import ApplicationUiSliderLabelVisible from 'src/components/application-ui/slider/label-visible/label-visible';
import ApplicationUiSliderMarks from 'src/components/application-ui/slider/marks/marks';
import ApplicationUiSliderRangeSlider from 'src/components/application-ui/slider/range-slider/range-slider';
import ApplicationUiSliderSizes from 'src/components/application-ui/slider/sizes/sizes';
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
    element: <ApplicationUiSliderBasic />,
    title: 'Basic',
    isComplex: 'false',
    size: 'md',
    description: 'A simple and straightforward slider for basic range selection needs.',
    height: '',
    category: 'slider',
  },
  {
    element: <ApplicationUiSliderColors />,
    title: 'Colors',
    isComplex: 'false',
    size: 'md',
    description:
      'Slider variant featuring different color options, allowing customization to match design themes.',
    height: '',
    category: 'slider',
  },
  {
    element: <ApplicationUiSliderLabelVisible />,
    title: 'LabelVisible',
    isComplex: 'false',
    size: 'md',
    description:
      'Slider with always visible labels, providing clear value indication as users adjust the slider.',
    height: '',
    category: 'slider',
  },
  {
    element: <ApplicationUiSliderMarks />,
    title: 'Marks',
    isComplex: 'false',
    size: 'md',
    description:
      'A slider with marked intervals, offering visual cues about available range options.',
    height: '',
    category: 'slider',
  },
  {
    element: <ApplicationUiSliderRangeSlider />,
    title: 'RangeSlider',
    isComplex: 'false',
    size: 'md',
    description:
      'A slider designed for selecting a range of values, featuring two handles for defining the start and end points.',
    height: '',
    category: 'slider',
  },
  {
    element: <ApplicationUiSliderSizes />,
    title: 'Sizes',
    isComplex: 'false',
    size: 'md',
    description:
      'This slider variant offers different sizes, providing flexibility for various design spaces.',
    height: '',
    category: 'slider',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Slider';
  const pageDescription =
    'Discover our sliders, ideal for adjusting values or ranges with a simple and intuitive horizontal dragging motion.';
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
