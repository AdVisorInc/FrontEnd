'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiButtonGroupsContained from 'src/components/application-ui/button-groups/contained/contained';
import ApplicationUiButtonGroupsIconLabel from 'src/components/application-ui/button-groups/icon-label/icon-label';
import ApplicationUiButtonGroupsIconOnly from 'src/components/application-ui/button-groups/icon-only/icon-only';
import ApplicationUiButtonGroupsOutlined from 'src/components/application-ui/button-groups/outlined/outlined';
import ApplicationUiButtonGroupsSplit from 'src/components/application-ui/button-groups/split/split';
import ApplicationUiButtonGroupsSwitchesAlternate from 'src/components/application-ui/button-groups/switches-alternate/switches-alternate';
import ApplicationUiButtonGroupsText from 'src/components/application-ui/button-groups/text/text';
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
    element: <ApplicationUiButtonGroupsContained />,
    title: 'Contained',
    isComplex: 'false',
    size: 'lg',
    description: 'A fundamental group of buttons for common use-cases, offering cohesive actions.',
    height: '',
    category: 'button-groups',
  },
  {
    element: <ApplicationUiButtonGroupsIconLabel />,
    title: 'IconLabel',
    isComplex: 'false',
    size: 'lg',
    description: 'Buttons combining icons with labels, enhancing clarity and recognition.',
    height: '',
    category: 'button-groups',
  },
  {
    element: <ApplicationUiButtonGroupsIconOnly />,
    title: 'IconOnly',
    isComplex: 'false',
    size: 'lg',
    description: 'Group of icon buttons for actions where visuals speak louder than words.',
    height: '',
    category: 'button-groups',
  },
  {
    element: <ApplicationUiButtonGroupsOutlined />,
    title: 'Outlined',
    isComplex: 'false',
    size: 'lg',
    description: 'A set of secondary-styled buttons, ideal for less prominent actions or filters.',
    height: '',
    category: 'button-groups',
  },
  {
    element: <ApplicationUiButtonGroupsSplit />,
    title: 'Split',
    isComplex: 'false',
    size: 'lg',
    description: 'Buttons with a primary action and a split dropdown for related actions.',
    height: '',
    category: 'button-groups',
  },
  {
    element: <ApplicationUiButtonGroupsSwitchesAlternate />,
    title: 'SwitchesAlternate',
    isComplex: 'false',
    size: 'md',
    description: 'An alternate design for button groups featuring switch-like functionality.',
    height: '',
    category: 'button-groups',
  },
  {
    element: <ApplicationUiButtonGroupsText />,
    title: 'Text',
    isComplex: 'false',
    size: 'lg',
    description: 'Text-only buttons grouped together, providing a clean and unobtrusive option.',
    height: '',
    category: 'button-groups',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'ButtonGroups';
  const pageDescription =
    'See how button groups can organize related actions together, providing a streamlined and cohesive user interface.';
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
