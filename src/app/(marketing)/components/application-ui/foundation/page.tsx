'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiFoundationAccentColors from 'src/components/application-ui/foundation/accent-colors/accent-colors';
import ApplicationUiFoundationNeutralColors from 'src/components/application-ui/foundation/neutral-colors/neutral-colors';
import ApplicationUiFoundationShadows from 'src/components/application-ui/foundation/shadows/shadows';
import ApplicationUiFoundationStateColors from 'src/components/application-ui/foundation/state-colors/state-colors';
import ApplicationUiFoundationStateShadows from 'src/components/application-ui/foundation/state-shadows/state-shadows';
import ApplicationUiFoundationTypography from 'src/components/application-ui/foundation/typography/typography';
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
    element: <ApplicationUiFoundationAccentColors />,
    title: 'AccentColors',
    isComplex: 'false',
    size: 'lg',
    description: 'Vibrant shades tailored to bring attention to key elements and actions.',
    height: '',
    category: 'foundation',
  },
  {
    element: <ApplicationUiFoundationNeutralColors />,
    title: 'NeutralColors',
    isComplex: 'false',
    size: 'lg',
    description: 'Balanced colors offering understated elegance without overwhelming the design.',
    height: '',
    category: 'foundation',
  },
  {
    element: <ApplicationUiFoundationShadows />,
    title: 'Shadows',
    isComplex: 'false',
    size: 'lg',
    description: 'Depth-enhancing shadows, perfect for element distinction and focus.',
    height: '',
    category: 'foundation',
  },
  {
    element: <ApplicationUiFoundationStateColors />,
    title: 'StateColors',
    isComplex: 'false',
    size: 'lg',
    description: 'Colors optimized for UI states, enhancing feedback and interactivity.',
    height: '',
    category: 'foundation',
  },
  {
    element: <ApplicationUiFoundationStateShadows />,
    title: 'StateShadows',
    isComplex: 'false',
    size: 'lg',
    description: 'Dynamic shadows responding to UI states, enriching user interactions.',
    height: '',
    category: 'foundation',
  },
  {
    element: <ApplicationUiFoundationTypography />,
    title: 'Typography',
    isComplex: 'false',
    size: 'lg',
    description: 'Expertly curated fonts and styles ensuring readability and brand consistency.',
    height: '',
    category: 'foundation',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Foundation';
  const pageDescription =
    'Discover the foundational UI elements and layouts, forming the basis for creating cohesive and functional interfaces.';
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
