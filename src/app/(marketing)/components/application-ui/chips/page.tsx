'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiChipsAction from 'src/components/application-ui/chips/action/action';
import ApplicationUiChipsAvatar from 'src/components/application-ui/chips/avatar/avatar';
import ApplicationUiChipsBasicDot from 'src/components/application-ui/chips/basic-dot/basic-dot';
import ApplicationUiChipsBasic from 'src/components/application-ui/chips/basic/basic';
import ApplicationUiChipsIcon from 'src/components/application-ui/chips/icon/icon';
import ApplicationUiChipsOutlinedDot from 'src/components/application-ui/chips/outlined-dot/outlined-dot';
import ApplicationUiChipsOutlined from 'src/components/application-ui/chips/outlined/outlined';
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
    element: <ApplicationUiChipsAction />,
    title: 'Action',
    isComplex: 'false',
    size: 'lg',
    description:
      'Interactive chips designed with actions or commands, facilitating quick user tasks.',
    height: '',
    category: 'chips',
  },
  {
    element: <ApplicationUiChipsAvatar />,
    title: 'Avatar',
    isComplex: 'false',
    size: 'lg',
    description:
      'Chips incorporating avatars for visual emphasis, often used in user-related contexts.',
    height: '',
    category: 'chips',
  },
  {
    element: <ApplicationUiChipsBasic />,
    title: 'Basic',
    isComplex: 'false',
    size: 'lg',
    description: 'Standard chips for compact display of information, tags, or actions.',
    height: '',
    category: 'chips',
  },
  {
    element: <ApplicationUiChipsBasicDot />,
    title: 'BasicDot',
    isComplex: 'false',
    size: 'lg',
    description: 'Simplified chips with dots for discreet data representation or selection.',
    height: '',
    category: 'chips',
  },
  {
    element: <ApplicationUiChipsIcon />,
    title: 'Icon',
    isComplex: 'false',
    size: 'lg',
    description: 'Chips enriched with icons for better context and visual appeal.',
    height: '',
    category: 'chips',
  },
  {
    element: <ApplicationUiChipsOutlined />,
    title: 'Outlined',
    isComplex: 'false',
    size: 'lg',
    description:
      'Chips with defined boundaries using outlines, providing clear distinction in a UI.',
    height: '',
    category: 'chips',
  },
  {
    element: <ApplicationUiChipsOutlinedDot />,
    title: 'OutlinedDot',
    isComplex: 'false',
    size: 'lg',
    description: 'Outlined chips accentuated with dots for both clarity and subtle emphasis.',
    height: '',
    category: 'chips',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Chips';
  const pageDescription =
    'Utilize our chips for a compact representation of information, actions, or inputs in a minimalistic yet informative manner.';
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
