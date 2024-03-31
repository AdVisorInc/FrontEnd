'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiPaginationBasic from 'src/components/application-ui/pagination/basic/basic';
import ApplicationUiPaginationButtons from 'src/components/application-ui/pagination/buttons/buttons';
import ApplicationUiPaginationFullWidth from 'src/components/application-ui/pagination/full-width/full-width';
import ApplicationUiPaginationOutlined from 'src/components/application-ui/pagination/outlined/outlined';
import ApplicationUiPaginationRanges from 'src/components/application-ui/pagination/ranges/ranges';
import ApplicationUiPaginationRounded from 'src/components/application-ui/pagination/rounded/rounded';
import ApplicationUiPaginationSimple from 'src/components/application-ui/pagination/simple/simple';
import ApplicationUiPaginationSizes from 'src/components/application-ui/pagination/sizes/sizes';
import ApplicationUiPaginationTable from 'src/components/application-ui/pagination/table/table';
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
    element: <ApplicationUiPaginationBasic />,
    title: 'Basic',
    isComplex: 'false',
    size: 'md',
    description: 'A standard, straightforward pagination layout suitable for most applications.',
    height: '',
    category: 'pagination',
  },
  {
    element: <ApplicationUiPaginationButtons />,
    title: 'Buttons',
    isComplex: 'false',
    size: 'md',
    description: 'Pagination using button elements for navigation between pages.',
    height: '',
    category: 'pagination',
  },
  {
    element: <ApplicationUiPaginationFullWidth />,
    title: 'FullWidth',
    isComplex: 'false',
    size: 'md',
    description: 'A full-width pagination layout, extending across the available space.',
    height: '',
    category: 'pagination',
  },
  {
    element: <ApplicationUiPaginationOutlined />,
    title: 'Outlined',
    isComplex: 'false',
    size: 'md',
    description:
      'Pagination with an outlined style, providing a clear boundary for each page link.',
    height: '',
    category: 'pagination',
  },
  {
    element: <ApplicationUiPaginationRanges />,
    title: 'Ranges',
    isComplex: 'false',
    size: 'md',
    description:
      'Pagination that includes range selection, allowing users to jump between wider intervals.',
    height: '',
    category: 'pagination',
  },
  {
    element: <ApplicationUiPaginationRounded />,
    title: 'Rounded',
    isComplex: 'false',
    size: 'md',
    description: 'Pagination with rounded edges for a softer, more modern look.',
    height: '',
    category: 'pagination',
  },
  {
    element: <ApplicationUiPaginationSimple />,
    title: 'Simple',
    isComplex: 'false',
    size: 'md',
    description: 'A simplified version of pagination, focusing on minimalism and ease of use.',
    height: '',
    category: 'pagination',
  },
  {
    element: <ApplicationUiPaginationSizes />,
    title: 'Sizes',
    isComplex: 'false',
    size: 'md',
    description:
      'Various size options for pagination, allowing customization to fit different design needs.',
    height: '',
    category: 'pagination',
  },
  {
    element: <ApplicationUiPaginationTable />,
    title: 'Table',
    isComplex: 'false',
    size: 'md',
    description:
      'Pagination designed specifically for use with tables, integrating seamlessly into tabular layouts.',
    height: '',
    category: 'pagination',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Pagination';
  const pageDescription =
    'Implement our pagination controls for efficient navigation through large sets of data or content.';
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
