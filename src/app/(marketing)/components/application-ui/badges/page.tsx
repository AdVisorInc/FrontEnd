'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiBadgesAlignments from 'src/components/application-ui/badges/alignments/alignments';
import ApplicationUiBadgesAvatar from 'src/components/application-ui/badges/avatar/avatar';
import ApplicationUiBadgesBasic from 'src/components/application-ui/badges/basic/basic';
import ApplicationUiBadgesDotLarge from 'src/components/application-ui/badges/dot-large/dot-large';
import ApplicationUiBadgesDotRing from 'src/components/application-ui/badges/dot-ring/dot-ring';
import ApplicationUiBadgesDot from 'src/components/application-ui/badges/dot/dot';
import ApplicationUiBadgesInline from 'src/components/application-ui/badges/inline/inline';
import ApplicationUiBadgesOverlaps from 'src/components/application-ui/badges/overlaps/overlaps';
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
    element: <ApplicationUiBadgesAlignments />,
    title: 'Alignments',
    isComplex: 'false',
    size: 'lg',
    description: 'Variety of badge positions showcasing alignment options on parent elements.',
    height: '',
    category: 'badges',
  },
  {
    element: <ApplicationUiBadgesAvatar />,
    title: 'Avatar',
    isComplex: 'false',
    size: 'lg',
    description: 'Badges tailored for avatars, indicating user status or notifications.',
    height: '',
    category: 'badges',
  },
  {
    element: <ApplicationUiBadgesBasic />,
    title: 'Basic',
    isComplex: 'false',
    size: 'lg',
    description: 'Classic badge style for straightforward notifications and counts.',
    height: '',
    category: 'badges',
  },
  {
    element: <ApplicationUiBadgesDot />,
    title: 'Dot',
    isComplex: 'false',
    size: 'lg',
    description: 'Minimalist dot badges to subtly indicate updates or presence.',
    height: '',
    category: 'badges',
  },
  {
    element: <ApplicationUiBadgesDotLarge />,
    title: 'DotLarge',
    isComplex: 'false',
    size: 'lg',
    description:
      'An enlarged dot badge for more prominent visibility while maintaining a minimalist design.',
    height: '',
    category: 'badges',
  },
  {
    element: <ApplicationUiBadgesDotRing />,
    title: 'DotRing',
    isComplex: 'false',
    size: 'lg',
    description:
      'Dot badge encircled by a ring, combining the simplicity of the dot with an added layer of emphasis.',
    height: '',
    category: 'badges',
  },
  {
    element: <ApplicationUiBadgesInline />,
    title: 'Inline',
    isComplex: 'false',
    size: 'lg',
    description: 'Badges designed to fit seamlessly within textual content or inline elements.',
    height: '',
    category: 'badges',
  },
  {
    element: <ApplicationUiBadgesOverlaps />,
    title: 'Overlaps',
    isComplex: 'false',
    size: 'lg',
    description:
      'Badge style designed to overlap onto container elements, typically icons or avatars.',
    height: '',
    category: 'badges',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Badges';
  const pageDescription =
    'View our badge designs, suitable for displaying counts, status, or categorization in a compact and informative way.';
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
