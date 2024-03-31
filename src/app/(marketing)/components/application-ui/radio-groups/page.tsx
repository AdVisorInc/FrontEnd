'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiRadioGroupsBasic from 'src/components/application-ui/radio-groups/basic/basic';
import ApplicationUiRadioGroupsCardsImage from 'src/components/application-ui/radio-groups/cards-image/cards-image';
import ApplicationUiRadioGroupsCards from 'src/components/application-ui/radio-groups/cards/cards';
import ApplicationUiRadioGroupsColors from 'src/components/application-ui/radio-groups/colors/colors';
import ApplicationUiRadioGroupsIcon from 'src/components/application-ui/radio-groups/icon/icon';
import ApplicationUiRadioGroupsListCardDescription from 'src/components/application-ui/radio-groups/list-card-description/list-card-description';
import ApplicationUiRadioGroupsListCard from 'src/components/application-ui/radio-groups/list-card/list-card';
import ApplicationUiRadioGroupsListDescription from 'src/components/application-ui/radio-groups/list-description/list-description';
import ApplicationUiRadioGroupsList from 'src/components/application-ui/radio-groups/list/list';
import ApplicationUiRadioGroupsMyCards from 'src/components/application-ui/radio-groups/my-cards/my-cards';
import ApplicationUiRadioGroupsProductColors from 'src/components/application-ui/radio-groups/product-colors/product-colors';
import ApplicationUiRadioGroupsSelectAvatar from 'src/components/application-ui/radio-groups/select-avatar/select-avatar';
import ApplicationUiRadioGroupsSizes from 'src/components/application-ui/radio-groups/sizes/sizes';
import ApplicationUiRadioGroupsSmallCards from 'src/components/application-ui/radio-groups/small-cards/small-cards';
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
    element: <ApplicationUiRadioGroupsBasic />,
    title: 'Basic',
    isComplex: 'false',
    size: 'md',
    description: 'A basic radio group layout for simple selection options.',
    height: '',
    category: 'radio-groups',
  },
  {
    element: <ApplicationUiRadioGroupsCards />,
    title: 'Cards',
    isComplex: 'false',
    size: 'md',
    description: 'Radio button options presented within card layouts for enhanced visual appeal.',
    height: '',
    category: 'radio-groups',
  },
  {
    element: <ApplicationUiRadioGroupsCardsImage />,
    title: 'CardsImage',
    isComplex: 'false',
    size: 'md',
    description:
      'Radio groups incorporated into cards with images, offering a more graphical selection process.',
    height: '',
    category: 'radio-groups',
  },
  {
    element: <ApplicationUiRadioGroupsColors />,
    title: 'Colors',
    isComplex: 'false',
    size: 'md',
    description: 'Radio buttons with color options, allowing for a visually intuitive choice.',
    height: '',
    category: 'radio-groups',
  },
  {
    element: <ApplicationUiRadioGroupsIcon />,
    title: 'Icon',
    isComplex: 'false',
    size: 'md',
    description: 'Radio groups that use icons as part of their selection indicators.',
    height: '',
    category: 'radio-groups',
  },
  {
    element: <ApplicationUiRadioGroupsList />,
    title: 'List',
    isComplex: 'false',
    size: 'md',
    description: 'Radio buttons organized in a list format, suitable for longer sets of options.',
    height: '',
    category: 'radio-groups',
  },
  {
    element: <ApplicationUiRadioGroupsListCard />,
    title: 'ListCard',
    isComplex: 'false',
    size: 'md',
    description:
      'A list of radio buttons each within a card layout, combining structure with design.',
    height: '',
    category: 'radio-groups',
  },
  {
    element: <ApplicationUiRadioGroupsListCardDescription />,
    title: 'ListCardDescription',
    isComplex: 'false',
    size: 'md',
    description: 'List-style radio groups with cards, each featuring additional descriptive text.',
    height: '',
    category: 'radio-groups',
  },
  {
    element: <ApplicationUiRadioGroupsListDescription />,
    title: 'ListDescription',
    isComplex: 'false',
    size: 'md',
    description:
      'Radio button lists with added descriptions for each option, providing more context.',
    height: '',
    category: 'radio-groups',
  },
  {
    element: <ApplicationUiRadioGroupsMyCards />,
    title: 'MyCards',
    isComplex: 'false',
    size: 'lg',
    description: 'Large radio group for selecting from various card options.',
    height: '',
    category: 'radio-groups',
  },
  {
    element: <ApplicationUiRadioGroupsProductColors />,
    title: 'ProductColors',
    isComplex: 'false',
    size: 'sm',
    description: 'Small radio group for choosing different product colors.',
    height: '',
    category: 'radio-groups',
  },
  {
    element: <ApplicationUiRadioGroupsSelectAvatar />,
    title: 'SelectAvatar',
    isComplex: 'false',
    size: 'sm',
    description: 'Radio groups designed for selecting avatars, typically used in profile settings.',
    height: '',
    category: 'radio-groups',
  },
  {
    element: <ApplicationUiRadioGroupsSizes />,
    title: 'Sizes',
    isComplex: 'false',
    size: 'md',
    description:
      'Radio buttons available in various sizes, offering flexibility for different design needs.',
    height: '',
    category: 'radio-groups',
  },
  {
    element: <ApplicationUiRadioGroupsSmallCards />,
    title: 'SmallCards',
    isComplex: 'false',
    size: 'md',
    description: 'Compact card-style radio buttons, suitable for space-efficient designs.',
    height: '',
    category: 'radio-groups',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'RadioGroups';
  const pageDescription =
    'Utilize our radio groups for exclusive selection options, allowing users to choose a single option from a set.';
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
