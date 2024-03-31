'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiSelectBasic from 'src/components/application-ui/select/basic/basic';
import ApplicationUiSelectCheckmark from 'src/components/application-ui/select/checkmark/checkmark';
import ApplicationUiSelectFilled from 'src/components/application-ui/select/filled/filled';
import ApplicationUiSelectIndicatorDescription from 'src/components/application-ui/select/indicator-description/indicator-description';
import ApplicationUiSelectMultiselectBasic from 'src/components/application-ui/select/multiselect-basic/multiselect-basic';
import ApplicationUiSelectMultiselectCheckbox from 'src/components/application-ui/select/multiselect-checkbox/multiselect-checkbox';
import ApplicationUiSelectMultiselectChip from 'src/components/application-ui/select/multiselect-chip/multiselect-chip';
import ApplicationUiSelectNative from 'src/components/application-ui/select/native/native';
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
    element: <ApplicationUiSelectBasic />,
    title: 'Basic',
    isComplex: 'false',
    size: 'md',
    description:
      'A basic and straightforward select dropdown, providing a list of options to choose from.',
    height: '',
    category: 'select',
  },
  {
    element: <ApplicationUiSelectCheckmark />,
    title: 'Checkmark',
    isComplex: 'false',
    size: 'md',
    description: 'Select dropdown featuring checkmark indicators for selected options.',
    height: '',
    category: 'select',
  },
  {
    element: <ApplicationUiSelectFilled />,
    title: 'Filled',
    isComplex: 'false',
    size: 'md',
    description: 'A filled-style select dropdown, offering a more pronounced visual presence.',
    height: '',
    category: 'select',
  },
  {
    element: <ApplicationUiSelectIndicatorDescription />,
    title: 'IndicatorDescription',
    isComplex: 'false',
    size: 'md',
    description: 'Select dropdown that includes descriptive indicators alongside options.',
    height: '',
    category: 'select',
  },
  {
    element: <ApplicationUiSelectMultiselectBasic />,
    title: 'MultiselectBasic',
    isComplex: 'false',
    size: 'md',
    description: 'A basic multiselect dropdown, allowing selection of multiple options.',
    height: '',
    category: 'select',
  },
  {
    element: <ApplicationUiSelectMultiselectCheckbox />,
    title: 'MultiselectCheckbox',
    isComplex: 'false',
    size: 'md',
    description: 'Multiselect dropdown using checkboxes for selecting multiple options.',
    height: '',
    category: 'select',
  },
  {
    element: <ApplicationUiSelectMultiselectChip />,
    title: 'MultiselectChip',
    isComplex: 'false',
    size: 'md',
    description: 'A multiselect dropdown where selected options are displayed as chips.',
    height: '',
    category: 'select',
  },
  {
    element: <ApplicationUiSelectNative />,
    title: 'Native',
    isComplex: 'false',
    size: 'md',
    description: 'A native-style select dropdown, adhering to default browser styles.',
    height: '',
    category: 'select',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Select';
  const pageDescription =
    'Explore our select dropdown menus, offering users a simple way to choose from a list of options.';
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
