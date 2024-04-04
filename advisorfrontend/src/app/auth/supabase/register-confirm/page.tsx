'use client';

import PublishedWithChangesRoundedIcon from '@mui/icons-material/PublishedWithChangesRounded';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { SignUpResendButton } from 'src/components/application-ui/user-auth/register/auth-supabase-register-resend-button';
import { AuthLayout } from 'src/components/auth/auth-layout';
import { GuestGuard as Layout } from 'src/components/auth/guest-guard';
import { Helmet } from 'src/components/base/helmet';
import { AvatarState } from 'src/components/base/styles/avatar';
import { useSearchParams } from 'src/hooks/use-search-params';

function PageContent(): React.JSX.Element {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  return (
    <>
      <Helmet heading="Confirm email address" />
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
                <PublishedWithChangesRoundedIcon fontSize="large" />
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
                    Verify email address
                  </Typography>
                  <Typography
                    color="text.secondary"
                    variant="h4"
                    fontWeight={400}
                  >
                    Check your inbox for a confirmation email sent to{' '}
                    <Typography
                      component="span"
                      variant="h4"
                      fontWeight={500}
                      color="text.primary"
                    >
                      {email}
                    </Typography>
                    .
                  </Typography>
                </Box>
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
                <SignUpResendButton email={email}>Resend email</SignUpResendButton>
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
