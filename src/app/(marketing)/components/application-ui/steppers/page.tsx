'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiSteppersBulletsStacked from 'src/components/application-ui/steppers/bullets-stacked/bullets-stacked';
import ApplicationUiSteppersBullets from 'src/components/application-ui/steppers/bullets/bullets';
import ApplicationUiSteppersCirclesStacked from 'src/components/application-ui/steppers/circles-stacked/circles-stacked';
import ApplicationUiSteppersCircles from 'src/components/application-ui/steppers/circles/circles';
import ApplicationUiSteppersLine from 'src/components/application-ui/steppers/line/line';
import ApplicationUiSteppersProgress from 'src/components/application-ui/steppers/progress/progress';
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
    element: <ApplicationUiSteppersBullets />,
    title: 'Bullets',
    isComplex: 'false',
    size: 'lg',
    description: 'Stepper design using bullet points to indicate steps in a process.',
    height: '',
    category: 'steppers',
  },
  {
    element: <ApplicationUiSteppersBulletsStacked />,
    title: 'BulletsStacked',
    isComplex: 'false',
    size: 'sm',
    description:
      'A variation of bullet steppers with a stacked layout for a compact representation of steps.',
    height: '',
    category: 'steppers',
  },
  {
    element: <ApplicationUiSteppersCircles />,
    title: 'Circles',
    isComplex: 'false',
    size: 'lg',
    description: 'Circular steppers that visually represent steps in a process.',
    height: '',
    category: 'steppers',
  },
  {
    element: <ApplicationUiSteppersCirclesStacked />,
    title: 'CirclesStacked',
    isComplex: 'false',
    size: 'sm',
    description:
      'Stacked circle steppers providing a vertically aligned representation of progress stages.',
    height: '',
    category: 'steppers',
  },
  {
    element: <ApplicationUiSteppersLine />,
    title: 'Line',
    isComplex: 'false',
    size: 'lg',
    description: 'A linear stepper design, indicating progress along a straight line.',
    height: '',
    category: 'steppers',
  },
  {
    element: <ApplicationUiSteppersProgress />,
    title: 'Progress',
    isComplex: 'false',
    size: 'lg',
    description:
      'Progress steppers that showcase the advancement through stages in a clear, linear format.',
    height: '',
    category: 'steppers',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Steppers';
  const pageDescription =
    'Implement our steppers for indicating progress through a sequence of steps, guiding users through multiStage processes.';
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
