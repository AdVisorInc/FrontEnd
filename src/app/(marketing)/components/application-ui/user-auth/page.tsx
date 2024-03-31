'use client';

import { Box, Card, CardActionArea, Container, Divider, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import ApplicationUiUserAuthLoginCover from 'src/components/application-ui/user-auth/login-cover/login-cover';
import ApplicationUiUserAuthLogin from 'src/components/application-ui/user-auth/login/login';
import ApplicationUiUserAuthRecoverPasswordCover from 'src/components/application-ui/user-auth/recover-password-cover/recover-password-cover';
import ApplicationUiUserAuthRecoverPassword from 'src/components/application-ui/user-auth/recover-password/recover-password';
import ApplicationUiUserAuthRegisterCover from 'src/components/application-ui/user-auth/register-cover/register-cover';
import ApplicationUiUserAuthRegister from 'src/components/application-ui/user-auth/register/register';
import ApplicationUiUserAuthVerificationCodeCover from 'src/components/application-ui/user-auth/verification-code-cover/verification-code-cover';
import ApplicationUiUserAuthVerificationCode from 'src/components/application-ui/user-auth/verification-code/verification-code';
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
    element: <ApplicationUiUserAuthLogin />,
    title: 'Login',
    isComplex: 'false',
    size: 'lg',
    description:
      'A standard layout for a login interface, offering essential fields for user authentication.',
    height: '',
    category: 'user-auth',
  },
  {
    element: <ApplicationUiUserAuthLoginCover />,
    title: 'LoginCover',
    isComplex: 'false',
    size: 'xl',
    description:
      'A login layout with an additional cover image or graphic, enhancing visual appeal.',
    height: 'full',
    category: 'user-auth',
  },
  {
    element: <ApplicationUiUserAuthRecoverPassword />,
    title: 'RecoverPassword',
    isComplex: 'false',
    size: 'lg',
    description: 'A dedicated layout for users to recover or reset their passwords.',
    height: '',
    category: 'user-auth',
  },
  {
    element: <ApplicationUiUserAuthRecoverPasswordCover />,
    title: 'RecoverPasswordCover',
    isComplex: 'false',
    size: 'lg',
    description:
      'Provides a visually enriched interface for password recovery, incorporating a cover image to foster a calming user experience.',
    height: 'full',
    category: 'user-auth',
  },
  {
    element: <ApplicationUiUserAuthRegister />,
    title: 'Register',
    isComplex: 'false',
    size: 'xl',
    description: 'The registration interface, potentially with an engaging cover image or design.',
    height: '',
    category: 'user-auth',
  },
  {
    element: <ApplicationUiUserAuthRegisterCover />,
    title: 'RegisterCover',
    isComplex: 'false',
    size: 'xl',
    description:
      'A comprehensive sign-up layout with an attractive cover image or design to create a strong first impression for new users.',
    height: 'full',
    category: 'user-auth',
  },
  {
    element: <ApplicationUiUserAuthVerificationCode />,
    title: 'VerificationCode',
    isComplex: 'false',
    size: 'lg',
    description:
      'A layout designed for inputting verification codes, often used in multi-factor authentication processes.',
    height: '',
    category: 'user-auth',
  },
  {
    element: <ApplicationUiUserAuthVerificationCodeCover />,
    title: 'VerificationCodeCover',
    isComplex: 'false',
    size: 'lg',
    description:
      'This layout combines the functionality of code verification with additional graphic elements to enhance user engagement during the authentication phase.',
    height: 'full',
    category: 'user-auth',
  },
];
const Page = () => {
  const {
    t,
  }: {
    t: any;
  } = useTranslation();
  const pageTitle = 'UserAuth';
  const pageDescription =
    'Discover our user authentication components, essential for secure login and user identity verification.';
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
