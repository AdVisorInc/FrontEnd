'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiProgressIndicatorsCircularColors from 'src/components/application-ui/progress-indicators/circular-colors/circular-colors';
import ApplicationUiProgressIndicatorsCircular from 'src/components/application-ui/progress-indicators/circular/circular';
import ApplicationUiProgressIndicatorsLinearAlternateSlim from 'src/components/application-ui/progress-indicators/linear-alternate-slim/linear-alternate-slim';
import ApplicationUiProgressIndicatorsLinearAlternate from 'src/components/application-ui/progress-indicators/linear-alternate/linear-alternate';
import ApplicationUiProgressIndicatorsLinearBuffer from 'src/components/application-ui/progress-indicators/linear-buffer/linear-buffer';
import ApplicationUiProgressIndicatorsLinearGradients from 'src/components/application-ui/progress-indicators/linear-gradients/linear-gradients';
import ApplicationUiProgressIndicatorsLinearIndeterminate from 'src/components/application-ui/progress-indicators/linear-indeterminate/linear-indeterminate';
import ApplicationUiProgressIndicatorsLinear from 'src/components/application-ui/progress-indicators/linear/linear';
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
    element: <ApplicationUiProgressIndicatorsCircular />,
    title: 'Circular',
    isComplex: 'false',
    size: 'md',
    description: 'Circular format for a minimalistic progress indication.',
    height: '',
    category: 'progress-indicators',
  },
  {
    element: <ApplicationUiProgressIndicatorsCircularColors />,
    title: 'CircularColors',
    isComplex: 'false',
    size: 'md',
    description: 'Colorful circular bars to represent various progress states.',
    height: '',
    category: 'progress-indicators',
  },
  {
    element: <ApplicationUiProgressIndicatorsLinear />,
    title: 'Linear',
    isComplex: 'false',
    size: 'md',
    description: 'Straightforward horizontal progress tracking.',
    height: '',
    category: 'progress-indicators',
  },
  {
    element: <ApplicationUiProgressIndicatorsLinearAlternate />,
    title: 'LinearAlternate',
    isComplex: 'false',
    size: 'md',
    description: 'Creative twist on the standard linear bar.',
    height: '',
    category: 'progress-indicators',
  },
  {
    element: <ApplicationUiProgressIndicatorsLinearAlternateSlim />,
    title: 'LinearAlternateSlim',
    isComplex: 'false',
    size: 'md',
    description: 'A sleek, slim linear progress bar perfect for minimalist interfaces.',
    height: '',
    category: 'progress-indicators',
  },
  {
    element: <ApplicationUiProgressIndicatorsLinearBuffer />,
    title: 'LinearBuffer',
    isComplex: 'false',
    size: 'md',
    description: 'Linear bar with buffering for uncertain timelines.',
    height: '',
    category: 'progress-indicators',
  },
  {
    element: <ApplicationUiProgressIndicatorsLinearIndeterminate />,
    title: 'LinearIndeterminate',
    isComplex: 'false',
    size: 'md',
    description: 'Indicates ongoing, undefined progress.',
    height: '',
    category: 'progress-indicators',
  },
  {
    element: <ApplicationUiProgressIndicatorsLinearGradients />,
    title: 'LinearGradients',
    isComplex: 'false',
    size: 'md',
    description: 'A linear progress bar with gradient effects for a modern, dynamic look.',
    height: '',
    category: 'progress-indicators',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'ProgressIndicators';
  const pageDescription =
    'View our progress indicators, visually indicating the progress of a task or the loading state of content.';
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
