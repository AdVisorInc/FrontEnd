'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiFormLayoutsCompanyStacked from 'src/components/application-ui/form-layouts/company-stacked/company-stacked';
import ApplicationUiFormLayoutsCompany from 'src/components/application-ui/form-layouts/company/company';
import ApplicationUiFormLayoutsCreateProduct from 'src/components/application-ui/form-layouts/create-product/create-product';
import ApplicationUiFormLayoutsEditProfileDetails from 'src/components/application-ui/form-layouts/edit-profile-details/edit-profile-details';
import ApplicationUiFormLayoutsProfileCards from 'src/components/application-ui/form-layouts/profile-cards/profile-cards';
import ApplicationUiFormLayoutsProfileStacked from 'src/components/application-ui/form-layouts/profile-stacked/profile-stacked';
import ApplicationUiFormLayoutsProfile from 'src/components/application-ui/form-layouts/profile/profile';
import ApplicationUiFormLayoutsSettingsNotifications from 'src/components/application-ui/form-layouts/settings-notifications/settings-notifications';
import ApplicationUiFormLayoutsSettingsSecurity from 'src/components/application-ui/form-layouts/settings-security/settings-security';
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
    element: <ApplicationUiFormLayoutsCompany />,
    title: 'Company',
    isComplex: 'false',
    size: 'md',
    description: 'A form layout designed for company or organization information.',
    height: '',
    category: 'form-layouts',
  },
  {
    element: <ApplicationUiFormLayoutsCompanyStacked />,
    title: 'CompanyStacked',
    isComplex: 'false',
    size: 'lg',
    description: 'A stacked layout variant for company forms, offering an organized appearance.',
    height: '',
    category: 'form-layouts',
  },
  {
    element: <ApplicationUiFormLayoutsCreateProduct />,
    title: 'CreateProduct',
    isComplex: 'false',
    size: 'xl',
    description: 'Form layout for creating and submitting new product details.',
    height: '',
    category: 'form-layouts',
  },
  {
    element: <ApplicationUiFormLayoutsEditProfileDetails />,
    title: 'EditProfileDetails',
    isComplex: 'false',
    size: 'lg',
    description: 'Layout designed for editing and updating user profile information.',
    height: '',
    category: 'form-layouts',
  },
  {
    element: <ApplicationUiFormLayoutsProfile />,
    title: 'Profile',
    isComplex: 'false',
    size: 'lg',
    description: 'A standard form layout for individual user profiles.',
    height: '',
    category: 'form-layouts',
  },
  {
    element: <ApplicationUiFormLayoutsProfileCards />,
    title: 'ProfileCards',
    isComplex: 'false',
    size: 'lg',
    description: 'A form layout using card elements, suitable for detailed profile information.',
    height: '',
    category: 'form-layouts',
  },
  {
    element: <ApplicationUiFormLayoutsProfileStacked />,
    title: 'ProfileStacked',
    isComplex: 'false',
    size: 'md',
    description: 'A stacked form layout specifically designed for user profile data.',
    height: '',
    category: 'form-layouts',
  },
  {
    element: <ApplicationUiFormLayoutsSettingsNotifications />,
    title: 'SettingsNotifications',
    isComplex: 'false',
    size: 'lg',
    description: 'Form layout for adjusting and customizing notification settings.',
    height: '',
    category: 'form-layouts',
  },
  {
    element: <ApplicationUiFormLayoutsSettingsSecurity />,
    title: 'SettingsSecurity',
    isComplex: 'false',
    size: 'lg',
    description: 'Security settings form layout for managing and configuring security preferences.',
    height: '',
    category: 'form-layouts',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'FormLayouts';
  const pageDescription =
    'View various form layouts, structured for optimal user input efficiency and clarity in data collection.';
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
