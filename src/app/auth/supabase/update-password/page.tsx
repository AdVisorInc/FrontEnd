'use client';

import React from 'react';
import { UpdatePasswordForm } from 'src/components/application-ui/user-auth/recover-password/auth-supabase-update-password-form';
import { AuthGuard as Layout } from 'src/components/auth/auth-guard';
import { AuthLayout } from 'src/components/auth/auth-layout';
import { Helmet } from 'src/components/base/helmet';

function PageContent(): React.JSX.Element {
  return (
    <>
      <Helmet heading="Update password" />
      <AuthLayout>
        <UpdatePasswordForm />
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
