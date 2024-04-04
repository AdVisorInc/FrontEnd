'use client';

import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import { Box, Button, Container, Divider, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { ResetPasswordButton } from 'src/components/application-ui/user-auth/recover-password/auth-supabase-reset-password-button';
import { AuthLayout } from 'src/components/auth/auth-layout';
import { GuestGuard as Layout } from 'src/components/auth/guest-guard';
import { Helmet } from 'src/components/base/helmet';
import { RouterLink } from 'src/components/base/router-link';
import { AvatarState } from 'src/components/base/styles/avatar';
import { useSearchParams } from 'src/hooks/use-search-params';
import { routes } from 'src/router/routes';

function PageContent(): React.JSX.Element {
  const searchParams = useSearchParams();
  const email = searchParams.get('email') as string;
  return (
    <>
      <Helmet heading="Recover password sent" />
      <AuthLayout>
        <Box
          py={{
            xs: 2,
            sm: 3,
          }}
          mx={{
            xl: 6,
          }}
        >
          <Container maxWidth="sm">
            <Stack
              spacing={2}
              justifyContent="center"
              alignItems="center"
              direction="column"
              textAlign="center"
            >
              <AvatarState
                state="success"
                isSoft
                sx={{
                  width: 64,
                  height: 64,
                }}
              >
                <DoneRoundedIcon fontSize="large" />
              </AvatarState>
              <Stack
                display="block"
                spacing={{
                  xs: 2,
                  sm: 3,
                }}
              >
                <Box>
                  <Typography
                    color="text.primary"
                    variant="h3"
                    fontWeight={700}
                    gutterBottom
                    sx={{
                      px: {
                        xs: 0,
                        sm: 2,
                        md: 3,
                      },
                    }}
                  >
                    Recover link sent!
                  </Typography>
                  <Typography
                    color="text.secondary"
                    variant="h4"
                    fontWeight={400}
                  >
                    If an account is associated with{' '}
                    <Typography
                      component="span"
                      variant="h4"
                      fontWeight={500}
                      color="text.primary"
                    >
                      {email}
                    </Typography>
                    , you will receive a recovery email.
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  component={RouterLink}
                  href={routes.auth['supabase.reset-password']}
                >
                  Use a different email
                </Button>
                <Divider>
                  <Divider
                    sx={{
                      borderWidth: 4,
                      width: 60,
                      borderRadius: 22,
                      borderColor: 'primary.main',
                    }}
                  />
                </Divider>
                <ResetPasswordButton email={email}>Send again</ResetPasswordButton>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </AuthLayout>
    </>
  );
}
export default function Page(): React.JSX.Element {
  return (
    <Layout>
      <PageContent />
    </Layout>
  );
}
