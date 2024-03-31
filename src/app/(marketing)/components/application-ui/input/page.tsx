'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiInputComposed from 'src/components/application-ui/input/composed/composed';
import ApplicationUiInputFilled from 'src/components/application-ui/input/filled/filled';
import ApplicationUiInputMasks from 'src/components/application-ui/input/masks/masks';
import ApplicationUiInputNumberSelector from 'src/components/application-ui/input/number-selector/number-selector';
import ApplicationUiInputOutlinedLabelInsetVisible from 'src/components/application-ui/input/outlined-label-inset-visible/outlined-label-inset-visible';
import ApplicationUiInputOutlinedLabelInset from 'src/components/application-ui/input/outlined-label-inset/outlined-label-inset';
import ApplicationUiInputOutlined from 'src/components/application-ui/input/outlined/outlined';
import ApplicationUiInputSearch from 'src/components/application-ui/input/search/search';
import ApplicationUiInputValidation from 'src/components/application-ui/input/validation/validation';
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
    element: <ApplicationUiInputComposed />,
    title: 'Composed',
    isComplex: 'false',
    size: 'sm',
    description:
      'An input variant with a composite structure, possibly including additional elements like icons or buttons.',
    height: '',
    category: 'input',
  },
  {
    element: <ApplicationUiInputFilled />,
    title: 'Filled',
    isComplex: 'false',
    size: 'md',
    description:
      'Filled-style input fields, offering a distinct visual presence with a solid background.',
    height: '',
    category: 'input',
  },
  {
    element: <ApplicationUiInputMasks />,
    title: 'Masks',
    isComplex: 'false',
    size: 'md',
    description:
      'Input fields with masking capabilities, useful for formatting content like dates or phone numbers.',
    height: '',
    category: 'input',
  },
  {
    element: <ApplicationUiInputNumberSelector />,
    title: 'NumberSelector',
    isComplex: 'false',
    size: 'sm',
    description: 'Small input component for selecting and adjusting numerical values.',
    height: '',
    category: 'input',
  },
  {
    element: <ApplicationUiInputOutlined />,
    title: 'Outlined',
    isComplex: 'false',
    size: 'md',
    description: 'Input fields with an outlined style, providing a clear boundary and focus.',
    height: '',
    category: 'input',
  },
  {
    element: <ApplicationUiInputOutlinedLabelInset />,
    title: 'OutlinedLabelInset',
    isComplex: 'false',
    size: 'md',
    description:
      'Outlined input fields with an inset label, combining clarity and efficient use of space.',
    height: '',
    category: 'input',
  },
  {
    element: <ApplicationUiInputOutlinedLabelInsetVisible />,
    title: 'OutlinedLabelInsetVisible',
    isComplex: 'false',
    size: 'md',
    description:
      'A variant of the outlined input with a visibly inset label, enhancing label readability.',
    height: '',
    category: 'input',
  },
  {
    element: <ApplicationUiInputSearch />,
    title: 'Search',
    isComplex: 'false',
    size: 'md',
    description:
      'Input fields specifically designed for search functionality, often including a search icon.',
    height: '',
    category: 'input',
  },
  {
    element: <ApplicationUiInputValidation />,
    title: 'Validation',
    isComplex: 'false',
    size: 'md',
    description:
      'Input fields with built-in validation features, providing immediate feedback on user input.',
    height: '',
    category: 'input',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Input';
  const pageDescription =
    'Explore various input field designs, crafted for userFriendly data entry with clear labels and intuitive interactions.';
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
