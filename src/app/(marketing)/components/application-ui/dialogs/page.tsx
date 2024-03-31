'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiDialogsAlertAlternate from 'src/components/application-ui/dialogs/alert-alternate/alert-alternate';
import ApplicationUiDialogsAlert from 'src/components/application-ui/dialogs/alert/alert';
import ApplicationUiDialogsBasic from 'src/components/application-ui/dialogs/basic/basic';
import ApplicationUiDialogsBodyScroll from 'src/components/application-ui/dialogs/body-scroll/body-scroll';
import ApplicationUiDialogsConfirmationAlternate from 'src/components/application-ui/dialogs/confirmation-alternate/confirmation-alternate';
import ApplicationUiDialogsConfirmation from 'src/components/application-ui/dialogs/confirmation/confirmation';
import ApplicationUiDialogsContentScrollWell from 'src/components/application-ui/dialogs/content-scroll-well/content-scroll-well';
import ApplicationUiDialogsContentScroll from 'src/components/application-ui/dialogs/content-scroll/content-scroll';
import ApplicationUiDialogsCustomization from 'src/components/application-ui/dialogs/customization/customization';
import ApplicationUiDialogsFullScreen from 'src/components/application-ui/dialogs/full-screen/full-screen';
import ApplicationUiDialogsSidebarNavigation from 'src/components/application-ui/dialogs/sidebar-navigation/sidebar-navigation';
import ApplicationUiDialogsTabsNavigation from 'src/components/application-ui/dialogs/tabs-navigation/tabs-navigation';
import ApplicationUiDialogsTransitions from 'src/components/application-ui/dialogs/transitions/transitions';
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
    element: <ApplicationUiDialogsAlert />,
    title: 'Alert',
    isComplex: 'false',
    size: 'sm',
    description: 'Dialogs designed for alert messages, warnings, or critical information.',
    height: '512px',
    category: 'dialogs',
  },
  {
    element: <ApplicationUiDialogsAlertAlternate />,
    title: 'AlertAlternate',
    isComplex: 'false',
    size: 'sm',
    description: 'Alternate alert dialog box for displaying critical notifications or warnings.',
    height: '512px',
    category: 'dialogs',
  },
  {
    element: <ApplicationUiDialogsBasic />,
    title: 'Basic',
    isComplex: 'false',
    size: 'sm',
    description: 'Basic dialog layout for general use, adaptable for various content types.',
    height: '728px',
    category: 'dialogs',
  },
  {
    element: <ApplicationUiDialogsBodyScroll />,
    title: 'BodyScroll',
    isComplex: 'false',
    size: 'sm',
    description: 'Dialogs with a body-scroll feature for lengthy content.',
    height: '512px',
    category: 'dialogs',
  },
  {
    element: <ApplicationUiDialogsConfirmation />,
    title: 'Confirmation',
    isComplex: 'false',
    size: 'sm',
    description:
      'Dialogs specifically designed for confirmation actions, such as accepting or declining.',
    height: '512px',
    category: 'dialogs',
  },
  {
    element: <ApplicationUiDialogsConfirmationAlternate />,
    title: 'ConfirmationAlternate',
    isComplex: 'false',
    size: 'sm',
    description:
      'An alternative style for confirmation dialogs, offering a different visual approach.',
    height: '512px',
    category: 'dialogs',
  },
  {
    element: <ApplicationUiDialogsContentScroll />,
    title: 'ContentScroll',
    isComplex: 'false',
    size: 'sm',
    description: 'Dialogs with scrollable content, suitable for presenting detailed information.',
    height: '512px',
    category: 'dialogs',
  },
  {
    element: <ApplicationUiDialogsContentScrollWell />,
    title: 'ContentScrollWell',
    isComplex: 'false',
    size: 'sm',
    description: 'Scrollable content dialogs with a `well` design for depth and emphasis.',
    height: '512px',
    category: 'dialogs',
  },
  {
    element: <ApplicationUiDialogsCustomization />,
    title: 'Customization',
    isComplex: 'false',
    size: 'sm',
    description: 'Customizable dialogs that can be tailored to specific user needs or preferences.',
    height: 'full',
    category: 'dialogs',
  },
  {
    element: <ApplicationUiDialogsFullScreen />,
    title: 'FullScreen',
    isComplex: 'false',
    size: 'sm',
    description: 'Full-screen dialogs for immersive content presentation or complex interactions.',
    height: 'full',
    category: 'dialogs',
  },
  {
    element: <ApplicationUiDialogsSidebarNavigation />,
    title: 'SidebarNavigation',
    isComplex: 'false',
    size: 'sm',
    description: 'Dialogs featuring sidebar navigation for efficient user flow and organization.',
    height: '728px',
    category: 'dialogs',
  },
  {
    element: <ApplicationUiDialogsTabsNavigation />,
    title: 'TabsNavigation',
    isComplex: 'false',
    size: 'sm',
    description: 'Dialogs organized with tabbed navigation for structured content display.',
    height: 'full',
    category: 'dialogs',
  },
  {
    element: <ApplicationUiDialogsTransitions />,
    title: 'Transitions',
    isComplex: 'false',
    size: 'sm',
    description: 'Dialogs enhanced with transition effects for a dynamic user experience.',
    height: '512px',
    category: 'dialogs',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Dialogs';
  const pageDescription =
    'Explore various dialog designs, ideal for engaging user interactions, confirmations, or displaying important information.';
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
