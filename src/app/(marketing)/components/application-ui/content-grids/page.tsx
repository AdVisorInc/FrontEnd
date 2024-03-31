'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiContentGridsGrid1 from 'src/components/application-ui/content-grids/grid1/grid1';
import ApplicationUiContentGridsGrid2 from 'src/components/application-ui/content-grids/grid2/grid2';
import ApplicationUiContentGridsGrid3 from 'src/components/application-ui/content-grids/grid3/grid3';
import ApplicationUiContentGridsGrid4 from 'src/components/application-ui/content-grids/grid4/grid4';
import ApplicationUiContentGridsGrid5 from 'src/components/application-ui/content-grids/grid5/grid5';
import ApplicationUiContentGridsGrid6 from 'src/components/application-ui/content-grids/grid6/grid6';
import ApplicationUiContentGridsGrid7 from 'src/components/application-ui/content-grids/grid7/grid7';
import ApplicationUiContentGridsGrid8 from 'src/components/application-ui/content-grids/grid8/grid8';
import ApplicationUiContentGridsGrid9 from 'src/components/application-ui/content-grids/grid9/grid9';
import ApplicationUiContentGridsGrid10 from 'src/components/application-ui/content-grids/grid10/grid10';
import ApplicationUiContentGridsGrid11 from 'src/components/application-ui/content-grids/grid11/grid11';
import ApplicationUiContentGridsGrid12 from 'src/components/application-ui/content-grids/grid12/grid12';
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
    element: <ApplicationUiContentGridsGrid1 />,
    title: 'Grid1',
    isComplex: 'false',
    size: 'lg',
    description: 'Foundational layout for simple content presentations.',
    height: '',
    category: 'content-grids',
  },
  {
    element: <ApplicationUiContentGridsGrid2 />,
    title: 'Grid2',
    isComplex: 'false',
    size: 'lg',
    description: 'Two-column layout for side-by-side content.',
    height: '',
    category: 'content-grids',
  },
  {
    element: <ApplicationUiContentGridsGrid3 />,
    title: 'Grid3',
    isComplex: 'false',
    size: 'lg',
    description: 'Dynamic grid for intricate content arrangements.',
    height: '',
    category: 'content-grids',
  },
  {
    element: <ApplicationUiContentGridsGrid4 />,
    title: 'Grid4',
    isComplex: 'false',
    size: 'lg',
    description: 'Modular layout for consistent content rhythm.',
    height: '',
    category: 'content-grids',
  },
  {
    element: <ApplicationUiContentGridsGrid5 />,
    title: 'Grid5',
    isComplex: 'false',
    size: 'lg',
    description: 'Nested design for hierarchical content display.',
    height: '',
    category: 'content-grids',
  },
  {
    element: <ApplicationUiContentGridsGrid6 />,
    title: 'Grid6',
    isComplex: 'false',
    size: 'lg',
    description: 'Responsive layout for multi-block content.',
    height: '',
    category: 'content-grids',
  },
  {
    element: <ApplicationUiContentGridsGrid7 />,
    title: 'Grid7',
    isComplex: 'false',
    size: 'lg',
    description: 'Advanced system for layered content.',
    height: '',
    category: 'content-grids',
  },
  {
    element: <ApplicationUiContentGridsGrid8 />,
    title: 'Grid8',
    isComplex: 'false',
    size: 'lg',
    description: 'Multi-column design for diverse content.',
    height: '',
    category: 'content-grids',
  },
  {
    element: <ApplicationUiContentGridsGrid9 />,
    title: 'Grid9',
    isComplex: 'false',
    size: 'lg',
    description: 'Engaging layout for interactive content.',
    height: '',
    category: 'content-grids',
  },
  {
    element: <ApplicationUiContentGridsGrid10 />,
    title: 'Grid10',
    isComplex: 'false',
    size: 'lg',
    description: 'Optimized grid for fluid content arrangements.',
    height: '',
    category: 'content-grids',
  },
  {
    element: <ApplicationUiContentGridsGrid11 />,
    title: 'Grid11',
    isComplex: 'false',
    size: 'lg',
    description: 'Example grid layouts to use as guidance.',
    height: '',
    category: 'content-grids',
  },
  {
    element: <ApplicationUiContentGridsGrid12 />,
    title: 'Grid12',
    isComplex: 'false',
    size: 'lg',
    description: 'Example grid layouts to use as guidance with complex grid system.',
    height: '',
    category: 'content-grids',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'ContentGrids';
  const pageDescription =
    'Browse our content grids, offering a flexible and efficient way to arrange and display content in a structured manner.';
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
