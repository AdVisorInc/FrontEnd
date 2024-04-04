'use client';

import React from 'react';
import { AuthSupabaseLoginForm } from 'src/components/application-ui/user-auth/login/auth-supabase-login-form';
import { AuthLayout } from 'src/components/auth/auth-layout';
import { GuestGuard as Layout } from 'src/components/auth/guest-guard';
import { Helmet } from 'src/components/base/helmet';
import { AuthStrategy } from 'src/utils/auth/strategy';

function PageContent(): React.JSX.Element {
  return (
    <>
      <Helmet heading="Sign in" />
      <AuthLayout strategy={AuthStrategy.SUPABASE}>
        <AuthSupabaseLoginForm />
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
