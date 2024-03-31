'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiAvatarsAvatarGroupTooltips from 'src/components/application-ui/avatars/avatar-group-tooltips/avatar-group-tooltips';
import ApplicationUiAvatarsGroups from 'src/components/application-ui/avatars/groups/groups';
import ApplicationUiAvatarsIcon from 'src/components/application-ui/avatars/icon/icon';
import ApplicationUiAvatarsImage from 'src/components/application-ui/avatars/image/image';
import ApplicationUiAvatarsInitials from 'src/components/application-ui/avatars/initials/initials';
import ApplicationUiAvatarsStateError from 'src/components/application-ui/avatars/state-error/state-error';
import ApplicationUiAvatarsStateInfo from 'src/components/application-ui/avatars/state-info/state-info';
import ApplicationUiAvatarsStateLight from 'src/components/application-ui/avatars/state-light/state-light';
import ApplicationUiAvatarsStatePrimary from 'src/components/application-ui/avatars/state-primary/state-primary';
import ApplicationUiAvatarsStateSecondary from 'src/components/application-ui/avatars/state-secondary/state-secondary';
import ApplicationUiAvatarsStateSuccess from 'src/components/application-ui/avatars/state-success/state-success';
import ApplicationUiAvatarsStateWarning from 'src/components/application-ui/avatars/state-warning/state-warning';
import ApplicationUiAvatarsVariants from 'src/components/application-ui/avatars/variants/variants';
import ApplicationUiAvatarsWithBadge from 'src/components/application-ui/avatars/with-badge/with-badge';
import ApplicationUiAvatarsWithText from 'src/components/application-ui/avatars/with-text/with-text';
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
    element: <ApplicationUiAvatarsAvatarGroupTooltips />,
    title: 'AvatarGroupTooltips',
    isComplex: 'false',
    size: 'lg',
    description:
      'Set of overlapped avatars showcasing shared content or group collaboration with tooltips.',
    height: 'medium',
    category: 'avatars',
  },
  {
    element: <ApplicationUiAvatarsGroups />,
    title: 'Groups',
    isComplex: 'false',
    size: 'lg',
    description: 'Cluster of avatars representing groups or teams.',
    height: '',
    category: 'avatars',
  },
  {
    element: <ApplicationUiAvatarsIcon />,
    title: 'Icon',
    isComplex: 'false',
    size: 'lg',
    description: 'Avatar with icons for generic user representation or specific roles.',
    height: '',
    category: 'avatars',
  },
  {
    element: <ApplicationUiAvatarsImage />,
    title: 'Image',
    isComplex: 'false',
    size: 'lg',
    description: 'Standard avatar displaying user profile pictures.',
    height: '',
    category: 'avatars',
  },
  {
    element: <ApplicationUiAvatarsInitials />,
    title: 'Initials',
    isComplex: 'false',
    size: 'lg',
    description: 'Avatar showcasing user initials, ideal for when an image is unavailable.',
    height: '',
    category: 'avatars',
  },
  {
    element: <ApplicationUiAvatarsStateError />,
    title: 'StateError',
    isComplex: 'false',
    size: 'lg',
    description: 'Large avatar element indicating an error state.',
    height: '',
    category: 'avatars',
  },
  {
    element: <ApplicationUiAvatarsStateInfo />,
    title: 'StateInfo',
    isComplex: 'false',
    size: 'lg',
    description: 'Large avatar element representing informational state.',
    height: '',
    category: 'avatars',
  },
  {
    element: <ApplicationUiAvatarsStateLight />,
    title: 'StateLight',
    isComplex: 'false',
    size: 'lg',
    description: 'Large avatar element for light-themed state representation.',
    height: '',
    category: 'avatars',
  },
  {
    element: <ApplicationUiAvatarsStatePrimary />,
    title: 'StatePrimary',
    isComplex: 'false',
    size: 'lg',
    description: 'Large avatar element for primary state visualization.',
    height: '',
    category: 'avatars',
  },
  {
    element: <ApplicationUiAvatarsStateSecondary />,
    title: 'StateSecondary',
    isComplex: 'false',
    size: 'lg',
    description: 'Large avatar element depicting a secondary state.',
    height: '',
    category: 'avatars',
  },
  {
    element: <ApplicationUiAvatarsStateSuccess />,
    title: 'StateSuccess',
    isComplex: 'false',
    size: 'lg',
    description: 'Large avatar element symbolizing a success state.',
    height: '',
    category: 'avatars',
  },
  {
    element: <ApplicationUiAvatarsStateWarning />,
    title: 'StateWarning',
    isComplex: 'false',
    size: 'lg',
    description: 'Large avatar element for warning state indication.',
    height: '',
    category: 'avatars',
  },
  {
    element: <ApplicationUiAvatarsVariants />,
    title: 'Variants',
    isComplex: 'false',
    size: 'lg',
    description: 'Variety of avatars with different shapes, sizes, and appearances.',
    height: '',
    category: 'avatars',
  },
  {
    element: <ApplicationUiAvatarsWithBadge />,
    title: 'WithBadge',
    isComplex: 'false',
    size: 'lg',
    description: 'Avatar adorned with badges to indicate statuses or notifications.',
    height: '',
    category: 'avatars',
  },
  {
    element: <ApplicationUiAvatarsWithText />,
    title: 'WithText',
    isComplex: 'false',
    size: 'lg',
    description: 'Avatar combined with textual information, enhancing user context.',
    height: '',
    category: 'avatars',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'Avatars';
  const pageDescription =
    'Choose from a collection of avatars, representing users or entities in a visually appealing and personalized manner.';
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
