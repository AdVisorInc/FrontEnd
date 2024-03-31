'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiComposedVisualizationBlocksComposedGauge from 'src/components/application-ui/composed-visualization-blocks/composed-gauge/composed-gauge';
import ApplicationUiComposedVisualizationBlocksFinancialStatus from 'src/components/application-ui/composed-visualization-blocks/financial-status/financial-status';
import ApplicationUiComposedVisualizationBlocksInventory from 'src/components/application-ui/composed-visualization-blocks/inventory/inventory';
import ApplicationUiComposedVisualizationBlocksReturningCustomers from 'src/components/application-ui/composed-visualization-blocks/returning-customers/returning-customers';
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
    element: <ApplicationUiComposedVisualizationBlocksComposedGauge />,
    title: 'ComposedGauge',
    isComplex: 'false',
    size: 'lg',
    description: 'A visualization block featuring a gauge-style display for metrics and data.',
    height: '',
    category: 'composed-visualization-blocks',
  },
  {
    element: <ApplicationUiComposedVisualizationBlocksFinancialStatus />,
    title: 'FinancialStatus',
    isComplex: 'false',
    size: 'lg',
    description: 'Block focused on presenting financial status through various visual elements.',
    height: '',
    category: 'composed-visualization-blocks',
  },
  {
    element: <ApplicationUiComposedVisualizationBlocksInventory />,
    title: 'Inventory',
    isComplex: 'false',
    size: 'md',
    description: 'Visualization block designed for showcasing inventory metrics and data.',
    height: '',
    category: 'composed-visualization-blocks',
  },
  {
    element: <ApplicationUiComposedVisualizationBlocksReturningCustomers />,
    title: 'ReturningCustomers',
    isComplex: 'false',
    size: 'md',
    description: 'A block highlighting data and metrics about returning customers.',
    height: '',
    category: 'composed-visualization-blocks',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'ComposedVisualizationBlocks';
  const pageDescription =
    'View composed visualization blocks that integrate multiple data visualization tools for a comprehensive display.';
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
