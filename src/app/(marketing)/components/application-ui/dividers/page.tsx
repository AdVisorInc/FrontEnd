'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiDividersButtonGroup from 'src/components/application-ui/dividers/button-group/button-group';
import ApplicationUiDividersButton from 'src/components/application-ui/dividers/button/button';
import ApplicationUiDividersChip from 'src/components/application-ui/dividers/chip/chip';
import ApplicationUiDividersIcon from 'src/components/application-ui/dividers/icon/icon';
import ApplicationUiDividersText from 'src/components/application-ui/dividers/text/text';
import ApplicationUiDividersVerticalChip from 'src/components/application-ui/dividers/vertical-chip/vertical-chip';
import ApplicationUiDividersVerticalText from 'src/components/application-ui/dividers/vertical-text/vertical-text';
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
    element: <ApplicationUiDividersButton />,
    title: 'Button',
    isComplex: 'false',
    size: 'lg',
    description: 'A simple divider used to segregate individual buttons.',
    height: '',
    category: 'dividers',
  },
  {
    element: <ApplicationUiDividersButtonGroup />,
    title: 'ButtonGroup',
    isComplex: 'false',
    size: 'lg',
    description: 'Divider meant for distinguishing buttons within a button group.',
    height: '',
    category: 'dividers',
  },
  {
    element: <ApplicationUiDividersChip />,
    title: 'Chip',
    isComplex: 'false',
    size: 'lg',
    description: 'Divider intended for separating chip elements.',
    height: '',
    category: 'dividers',
  },
  {
    element: <ApplicationUiDividersIcon />,
    title: 'Icon',
    isComplex: 'false',
    size: 'lg',
    description: 'A divider designed to differentiate between icons.',
    height: '',
    category: 'dividers',
  },
  {
    element: <ApplicationUiDividersText />,
    title: 'Text',
    isComplex: 'false',
    size: 'lg',
    description: 'A divider tailored for text-based content separation.',
    height: '',
    category: 'dividers',
  },
  {
    element: <ApplicationUiDividersVerticalChip />,
    title: 'VerticalChip',
    isComplex: 'false',
    size: 'lg',
    description: 'Divider designed to segregate inline chip elements vertically.',
    height: '',
    category: 'dividers',
  },
  {
    element: <ApplicationUiDividersVerticalText />,
    title: 'VerticalText',
    isComplex: 'false',
    size: 'lg',
    description: 'A vertical divider used to separate inline text elements.',
    height: '',
    category: 'dividers',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Dividers';
  const pageDescription =
    'Utilize our dividers to neatly separate content or sections, enhancing readability and organization of your UI.';
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
