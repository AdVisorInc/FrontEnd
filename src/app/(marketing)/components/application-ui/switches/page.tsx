'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiSwitchesBasic from 'src/components/application-ui/switches/basic/basic';
import ApplicationUiSwitchesCardDividersMiddle from 'src/components/application-ui/switches/card-dividers-middle/card-dividers-middle';
import ApplicationUiSwitchesCardDividers from 'src/components/application-ui/switches/card-dividers/card-dividers';
import ApplicationUiSwitchesCard from 'src/components/application-ui/switches/card/card';
import ApplicationUiSwitchesColors from 'src/components/application-ui/switches/colors/colors';
import ApplicationUiSwitchesList from 'src/components/application-ui/switches/list/list';
import ApplicationUiSwitchesPositions from 'src/components/application-ui/switches/positions/positions';
import ApplicationUiSwitchesSizes from 'src/components/application-ui/switches/sizes/sizes';
import ApplicationUiSwitchesSwitches from 'src/components/application-ui/switches/switches/switches';
import ApplicationUiSwitchesThermostat from 'src/components/application-ui/switches/thermostat/thermostat';
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
    element: <ApplicationUiSwitchesBasic />,
    title: 'Basic',
    isComplex: 'false',
    size: 'md',
    description: 'A basic and straightforward switch design for simple on/off functionality.',
    height: '',
    category: 'switches',
  },
  {
    element: <ApplicationUiSwitchesCard />,
    title: 'Card',
    isComplex: 'false',
    size: 'md',
    description:
      'Switches integrated within a card layout, suitable for settings or preferences panels.',
    height: '',
    category: 'switches',
  },
  {
    element: <ApplicationUiSwitchesCardDividers />,
    title: 'CardDividers',
    isComplex: 'false',
    size: 'md',
    description: 'Switches presented on cards with dividers, enhancing organization and clarity.',
    height: '',
    category: 'switches',
  },
  {
    element: <ApplicationUiSwitchesCardDividersMiddle />,
    title: 'CardDividersMiddle',
    isComplex: 'false',
    size: 'md',
    description:
      'A variation of switch cards with dividers placed in the middle for a distinct layout.',
    height: '',
    category: 'switches',
  },
  {
    element: <ApplicationUiSwitchesColors />,
    title: 'Colors',
    isComplex: 'false',
    size: 'md',
    description:
      'Switches available in various colors, offering customization to match different UI themes.',
    height: '',
    category: 'switches',
  },
  {
    element: <ApplicationUiSwitchesList />,
    title: 'List',
    isComplex: 'false',
    size: 'md',
    description: 'Switches presented in a list format, ideal for settings or option lists.',
    height: '',
    category: 'switches',
  },
  {
    element: <ApplicationUiSwitchesPositions />,
    title: 'Positions',
    isComplex: 'false',
    size: 'md',
    description: 'Switches with various position options, providing flexibility in UI design.',
    height: '',
    category: 'switches',
  },
  {
    element: <ApplicationUiSwitchesSizes />,
    title: 'Sizes',
    isComplex: 'false',
    size: 'md',
    description:
      'Switches offered in different sizes to accommodate different space requirements and design needs.',
    height: '',
    category: 'switches',
  },
  {
    element: <ApplicationUiSwitchesSwitches />,
    title: 'Switches',
    isComplex: 'false',
    size: 'md',
    description: 'Switches styled differently that toggle interaction across the parent component.',
    height: '',
    category: 'switches',
  },
  {
    element: <ApplicationUiSwitchesThermostat />,
    title: 'Thermostat',
    isComplex: 'false',
    size: 'sm',
    description: 'This integration shows an UI built for a thermostat component.',
    height: '',
    category: 'switches',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Switches';
  const pageDescription =
    'Discover our switches, a graphical representation for toggling between two states, often used for preferences or settings.';
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
