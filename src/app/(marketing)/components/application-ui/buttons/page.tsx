'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiButtonsIconButtons from 'src/components/application-ui/buttons/icon-buttons/icon-buttons';
import ApplicationUiButtonsIcon from 'src/components/application-ui/buttons/icon/icon';
import ApplicationUiButtonsLeadingIcons from 'src/components/application-ui/buttons/leading-icons/leading-icons';
import ApplicationUiButtonsLoading from 'src/components/application-ui/buttons/loading/loading';
import ApplicationUiButtonsOutlinedPrimary from 'src/components/application-ui/buttons/outlined-primary/outlined-primary';
import ApplicationUiButtonsOutlinedSecondary from 'src/components/application-ui/buttons/outlined-secondary/outlined-secondary';
import ApplicationUiButtonsPrimary from 'src/components/application-ui/buttons/primary/primary';
import ApplicationUiButtonsRounded from 'src/components/application-ui/buttons/rounded/rounded';
import ApplicationUiButtonsScenes from 'src/components/application-ui/buttons/scenes/scenes';
import ApplicationUiButtonsSecondary from 'src/components/application-ui/buttons/secondary/secondary';
import ApplicationUiButtonsSoft from 'src/components/application-ui/buttons/soft/soft';
import ApplicationUiButtonsStates from 'src/components/application-ui/buttons/states/states';
import ApplicationUiButtonsTextPrimary from 'src/components/application-ui/buttons/text-primary/text-primary';
import ApplicationUiButtonsTextSecondary from 'src/components/application-ui/buttons/text-secondary/text-secondary';
import ApplicationUiButtonsTrailingIcons from 'src/components/application-ui/buttons/trailing-icons/trailing-icons';
import ApplicationUiButtonsUpload from 'src/components/application-ui/buttons/upload/upload';
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
    element: <ApplicationUiButtonsIcon />,
    title: 'Icon',
    isComplex: 'false',
    size: 'lg',
    description: 'Soft button for icon-centric actions.',
    height: '',
    category: 'buttons',
  },
  {
    element: <ApplicationUiButtonsIconButtons />,
    title: 'IconButtons',
    isComplex: 'false',
    size: 'lg',
    description: 'Button with only icons.',
    height: '',
    category: 'buttons',
  },
  {
    element: <ApplicationUiButtonsLeadingIcons />,
    title: 'LeadingIcons',
    isComplex: 'false',
    size: 'lg',
    description: 'Button with leading icon for clarity.',
    height: '',
    category: 'buttons',
  },
  {
    element: <ApplicationUiButtonsLoading />,
    title: 'Loading',
    isComplex: 'false',
    size: 'lg',
    description: 'Button with loading indicator.',
    height: '',
    category: 'buttons',
  },
  {
    element: <ApplicationUiButtonsOutlinedPrimary />,
    title: 'OutlinedPrimary',
    isComplex: 'false',
    size: 'lg',
    description: 'Primary button with a defined outline.',
    height: '',
    category: 'buttons',
  },
  {
    element: <ApplicationUiButtonsOutlinedSecondary />,
    title: 'OutlinedSecondary',
    isComplex: 'false',
    size: 'lg',
    description: 'Secondary button with a distinct outline.',
    height: '',
    category: 'buttons',
  },
  {
    element: <ApplicationUiButtonsPrimary />,
    title: 'Primary',
    isComplex: 'false',
    size: 'lg',
    description: 'Bold button for primary actions and CTAs.',
    height: '',
    category: 'buttons',
  },
  {
    element: <ApplicationUiButtonsRounded />,
    title: 'Rounded',
    isComplex: 'false',
    size: 'lg',
    description: 'Buttons that have a full border radius.',
    height: '',
    category: 'buttons',
  },
  {
    element: <ApplicationUiButtonsScenes />,
    title: 'Scenes',
    isComplex: 'false',
    size: 'lg',
    description: 'Various button designs adaptable to different scenes or contexts.',
    height: '',
    category: 'buttons',
  },
  {
    element: <ApplicationUiButtonsSecondary />,
    title: 'Secondary',
    isComplex: 'false',
    size: 'lg',
    description: 'Versatile button for secondary actions.',
    height: '',
    category: 'buttons',
  },
  {
    element: <ApplicationUiButtonsSoft />,
    title: 'Soft',
    isComplex: 'false',
    size: 'lg',
    description: 'Smooth-edged button for secondary actions.',
    height: '',
    category: 'buttons',
  },
  {
    element: <ApplicationUiButtonsStates />,
    title: 'States',
    isComplex: 'false',
    size: 'lg',
    description: 'Button showcasing various interactive states.',
    height: '',
    category: 'buttons',
  },
  {
    element: <ApplicationUiButtonsTextPrimary />,
    title: 'TextPrimary',
    isComplex: 'false',
    size: 'lg',
    description: 'Minimalist button emphasizing primary text.',
    height: '',
    category: 'buttons',
  },
  {
    element: <ApplicationUiButtonsTextSecondary />,
    title: 'TextSecondary',
    isComplex: 'false',
    size: 'lg',
    description: 'Elegant button highlighting secondary text.',
    height: '',
    category: 'buttons',
  },
  {
    element: <ApplicationUiButtonsTrailingIcons />,
    title: 'TrailingIcons',
    isComplex: 'false',
    size: 'lg',
    description: 'Button with trailing icon for context.',
    height: '',
    category: 'buttons',
  },
  {
    element: <ApplicationUiButtonsUpload />,
    title: 'Upload',
    isComplex: 'false',
    size: 'lg',
    description: 'Button tailored for uploading actions.',
    height: '',
    category: 'buttons',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Buttons';
  const pageDescription =
    'Discover a variety of button styles for various user actions, designed for clarity, usability, and aesthetic appeal.';
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
