'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiCheckboxesBasic from 'src/components/application-ui/checkboxes/basic/basic';
import ApplicationUiCheckboxesCardsGrid from 'src/components/application-ui/checkboxes/cards-grid/cards-grid';
import ApplicationUiCheckboxesCards from 'src/components/application-ui/checkboxes/cards/cards';
import ApplicationUiCheckboxesCheckmarks from 'src/components/application-ui/checkboxes/checkmarks/checkmarks';
import ApplicationUiCheckboxesColors from 'src/components/application-ui/checkboxes/colors/colors';
import ApplicationUiCheckboxesIcon from 'src/components/application-ui/checkboxes/icon/icon';
import ApplicationUiCheckboxesListCardDescription from 'src/components/application-ui/checkboxes/list-card-description/list-card-description';
import ApplicationUiCheckboxesListCard from 'src/components/application-ui/checkboxes/list-card/list-card';
import ApplicationUiCheckboxesList from 'src/components/application-ui/checkboxes/list/list';
import ApplicationUiCheckboxesSelectAvatar from 'src/components/application-ui/checkboxes/select-avatar/select-avatar';
import ApplicationUiCheckboxesSizes from 'src/components/application-ui/checkboxes/sizes/sizes';
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
    element: <ApplicationUiCheckboxesBasic />,
    title: 'Basic',
    isComplex: 'false',
    size: 'md',
    description: 'Standard checkboxes for basic selection needs.',
    height: '',
    category: 'checkboxes',
  },
  {
    element: <ApplicationUiCheckboxesCards />,
    title: 'Cards',
    isComplex: 'false',
    size: 'md',
    description: 'Checkboxes integrated within card elements for interactive content.',
    height: '',
    category: 'checkboxes',
  },
  {
    element: <ApplicationUiCheckboxesCardsGrid />,
    title: 'CardsGrid',
    isComplex: 'false',
    size: 'md',
    description: 'Grid-style layout of checkboxes within card elements.',
    height: '',
    category: 'checkboxes',
  },
  {
    element: <ApplicationUiCheckboxesCheckmarks />,
    title: 'Checkmarks',
    isComplex: 'false',
    size: 'md',
    description: 'Distinctive checkmark style checkboxes for clear visibility.',
    height: '',
    category: 'checkboxes',
  },
  {
    element: <ApplicationUiCheckboxesColors />,
    title: 'Colors',
    isComplex: 'false',
    size: 'md',
    description: 'Colorful checkboxes offering visual variety and emphasis.',
    height: '',
    category: 'checkboxes',
  },
  {
    element: <ApplicationUiCheckboxesIcon />,
    title: 'Icon',
    isComplex: 'false',
    size: 'md',
    description: 'Icon-based checkboxes for a graphical approach to selection.',
    height: '',
    category: 'checkboxes',
  },
  {
    element: <ApplicationUiCheckboxesList />,
    title: 'List',
    isComplex: 'false',
    size: 'md',
    description: 'Checkboxes presented in a list format for organized selections.',
    height: '',
    category: 'checkboxes',
  },
  {
    element: <ApplicationUiCheckboxesListCard />,
    title: 'ListCard',
    isComplex: 'false',
    size: 'md',
    description: 'List format checkboxes integrated within card layouts.',
    height: '',
    category: 'checkboxes',
  },
  {
    element: <ApplicationUiCheckboxesListCardDescription />,
    title: 'ListCardDescription',
    isComplex: 'false',
    size: 'md',
    description: 'List card checkboxes complemented with descriptions for context.',
    height: '',
    category: 'checkboxes',
  },
  {
    element: <ApplicationUiCheckboxesSelectAvatar />,
    title: 'SelectAvatar',
    isComplex: 'false',
    size: 'sm',
    description: 'Avatar selection checkboxes for user-centric interfaces.',
    height: '',
    category: 'checkboxes',
  },
  {
    element: <ApplicationUiCheckboxesSizes />,
    title: 'Sizes',
    isComplex: 'false',
    size: 'md',
    description: 'Variety of checkbox sizes for different UI needs.',
    height: '',
    category: 'checkboxes',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Checkboxes';
  const pageDescription =
    'Check out checkboxes that offer users a clear and straightforward way to make multiple selections in forms or surveys.';
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
