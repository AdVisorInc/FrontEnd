'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiToggleButtonsEnforceValue from 'src/components/application-ui/toggle-buttons/enforce-value/enforce-value';
import ApplicationUiToggleButtonsExclusive from 'src/components/application-ui/toggle-buttons/exclusive/exclusive';
import ApplicationUiToggleButtonsMultipleSelection from 'src/components/application-ui/toggle-buttons/multiple-selection/multiple-selection';
import ApplicationUiToggleButtonsSingle from 'src/components/application-ui/toggle-buttons/single/single';
import ApplicationUiToggleButtonsVertical from 'src/components/application-ui/toggle-buttons/vertical/vertical';
import ApplicationUiToggleButtonsWithText from 'src/components/application-ui/toggle-buttons/with-text/with-text';
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
    element: <ApplicationUiToggleButtonsExclusive />,
    title: 'Exclusive',
    isComplex: 'false',
    size: 'md',
    description: 'A toggle button where only one option can be selected at a time.',
    height: '',
    category: 'toggle-buttons',
  },
  {
    element: <ApplicationUiToggleButtonsMultipleSelection />,
    title: 'MultipleSelection',
    isComplex: 'false',
    size: 'md',
    description: 'Toggle buttons that allow for multiple options to be selected simultaneously.',
    height: '',
    category: 'toggle-buttons',
  },
  {
    element: <ApplicationUiToggleButtonsSingle />,
    title: 'Single',
    isComplex: 'false',
    size: 'md',
    description: 'A single toggle button for binary choices.',
    height: '',
    category: 'toggle-buttons',
  },
  {
    element: <ApplicationUiToggleButtonsWithText />,
    title: 'WithText',
    isComplex: 'false',
    size: 'md',
    description: 'Toggle button featuring an accompanying text label.',
    height: '',
    category: 'toggle-buttons',
  },
  {
    element: <ApplicationUiToggleButtonsVertical />,
    title: 'Vertical',
    isComplex: 'false',
    size: 'md',
    description: 'A set of vertically aligned toggle buttons.',
    height: '',
    category: 'toggle-buttons',
  },
  {
    element: <ApplicationUiToggleButtonsEnforceValue />,
    title: 'EnforceValue',
    isComplex: 'false',
    size: 'md',
    description: 'Toggle button that enforces a value to be always selected.',
    height: '',
    category: 'toggle-buttons',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'ToggleButtons';
  const pageDescription =
    'View our toggle buttons, providing a fun and interactive way for users to switch between two states or options.';
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
