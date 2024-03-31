'use client';

import React from 'react';
import { ResetPasswordForm } from 'src/components/application-ui/user-auth/recover-password/auth-supabase-reset-password-form';
import { AuthLayout } from 'src/components/auth/auth-layout';
import { GuestGuard as Layout } from 'src/components/auth/guest-guard';
import { Helmet } from 'src/components/base/helmet';

function PageContent(): React.JSX.Element {
  return (
    <>
      <Helmet heading="Recover password" />
      <AuthLayout>
        <ResetPasswordForm />
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
