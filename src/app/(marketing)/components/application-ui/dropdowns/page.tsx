'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiDropdownsAlternate from 'src/components/application-ui/dropdowns/alternate/alternate';
import ApplicationUiDropdownsBasic from 'src/components/application-ui/dropdowns/basic/basic';
import ApplicationUiDropdownsComposed from 'src/components/application-ui/dropdowns/composed/composed';
import ApplicationUiDropdownsContext from 'src/components/application-ui/dropdowns/context/context';
import ApplicationUiDropdownsDividers from 'src/components/application-ui/dropdowns/dividers/dividers';
import ApplicationUiDropdownsFooter from 'src/components/application-ui/dropdowns/footer/footer';
import ApplicationUiDropdownsGridNavigationAccent from 'src/components/application-ui/dropdowns/grid-navigation-accent/grid-navigation-accent';
import ApplicationUiDropdownsGridNavigation from 'src/components/application-ui/dropdowns/grid-navigation/grid-navigation';
import ApplicationUiDropdownsHeader from 'src/components/application-ui/dropdowns/header/header';
import ApplicationUiDropdownsIcons from 'src/components/application-ui/dropdowns/icons/icons';
import ApplicationUiDropdownsLanguage from 'src/components/application-ui/dropdowns/language/language';
import ApplicationUiDropdownsMegaMenu from 'src/components/application-ui/dropdowns/mega-menu/mega-menu';
import ApplicationUiDropdownsProfile from 'src/components/application-ui/dropdowns/profile/profile';
import ApplicationUiDropdownsSelectedAccent from 'src/components/application-ui/dropdowns/selected-accent/selected-accent';
import ApplicationUiDropdownsSelected from 'src/components/application-ui/dropdowns/selected/selected';
import ApplicationUiDropdownsTransitions from 'src/components/application-ui/dropdowns/transitions/transitions';
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
    element: <ApplicationUiDropdownsAlternate />,
    title: 'Alternate',
    isComplex: 'false',
    size: 'lg',
    description: 'An alternative design for the standard dropdown.',
    height: '512px',
    category: 'dropdowns',
  },
  {
    element: <ApplicationUiDropdownsBasic />,
    title: 'Basic',
    isComplex: 'false',
    size: 'lg',
    description: 'A basic dropdown with minimal styling.',
    height: '512px',
    category: 'dropdowns',
  },
  {
    element: <ApplicationUiDropdownsComposed />,
    title: 'Composed',
    isComplex: 'false',
    size: 'lg',
    description: 'A dropdown designed with a composite structure.',
    height: '560px',
    category: 'dropdowns',
  },
  {
    element: <ApplicationUiDropdownsContext />,
    title: 'Context',
    isComplex: 'false',
    size: 'lg',
    description: 'A contextual dropdown adjusting to its content.',
    height: 'medium',
    category: 'dropdowns',
  },
  {
    element: <ApplicationUiDropdownsDividers />,
    title: 'Dividers',
    isComplex: 'false',
    size: 'lg',
    description: 'Dropdown with dividers to segment content.',
    height: '512px',
    category: 'dropdowns',
  },
  {
    element: <ApplicationUiDropdownsFooter />,
    title: 'Footer',
    isComplex: 'false',
    size: 'lg',
    description: 'A dropdown featuring a footer section.',
    height: '512px',
    category: 'dropdowns',
  },
  {
    element: <ApplicationUiDropdownsGridNavigation />,
    title: 'GridNavigation',
    isComplex: 'false',
    size: 'lg',
    description: 'A grid dropdown geared for navigation purposes.',
    height: '512px',
    category: 'dropdowns',
  },
  {
    element: <ApplicationUiDropdownsGridNavigationAccent />,
    title: 'GridNavigationAccent',
    isComplex: 'false',
    size: 'lg',
    description: 'A variant of the grid navigation dropdown with accentuated design elements.',
    height: '512px',
    category: 'dropdowns',
  },
  {
    element: <ApplicationUiDropdownsHeader />,
    title: 'Header',
    isComplex: 'false',
    size: 'lg',
    description: 'Dropdown with a distinctive header.',
    height: '512px',
    category: 'dropdowns',
  },
  {
    element: <ApplicationUiDropdownsIcons />,
    title: 'Icons',
    isComplex: 'false',
    size: 'lg',
    description: 'Dropdown items adorned with icons.',
    height: '512px',
    category: 'dropdowns',
  },
  {
    element: <ApplicationUiDropdownsLanguage />,
    title: 'Language',
    isComplex: 'false',
    size: 'lg',
    description: 'A dropdown designed for language selection.',
    height: '512px',
    category: 'dropdowns',
  },
  {
    element: <ApplicationUiDropdownsMegaMenu />,
    title: 'MegaMenu',
    isComplex: 'false',
    size: 'lg',
    description: 'An expansive dropdown designed for extensive navigation.',
    height: '548px',
    category: 'dropdowns',
  },
  {
    element: <ApplicationUiDropdownsProfile />,
    title: 'Profile',
    isComplex: 'false',
    size: 'lg',
    description: 'Profile-centric dropdown with user details.',
    height: '548px',
    category: 'dropdowns',
  },
  {
    element: <ApplicationUiDropdownsSelected />,
    title: 'Selected',
    isComplex: 'false',
    size: 'sm',
    description: 'Dropdown for highlighting and managing selected options.',
    height: '548px',
    category: 'dropdowns',
  },
  {
    element: <ApplicationUiDropdownsSelectedAccent />,
    title: 'SelectedAccent',
    isComplex: 'false',
    size: 'sm',
    description: 'Accent-themed dropdown to showcase and select highlighted options.',
    height: '548px',
    category: 'dropdowns',
  },
  {
    element: <ApplicationUiDropdownsTransitions />,
    title: 'Transitions',
    isComplex: 'false',
    size: 'lg',
    description: 'Dropdown with smooth transitions for interactions.',
    height: '512px',
    category: 'dropdowns',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Dropdowns';
  const pageDescription =
    'See how our dropdown menus can streamline user choices, offering a compact way to present multiple options.';
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
