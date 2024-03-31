'use client';

import React from 'react';
import { AuthCustomRegisterForm } from 'src/components/application-ui/user-auth/register/auth-custom-register-form';
import { AuthLayout } from 'src/components/auth/auth-layout';
import { GuestGuard as Layout } from 'src/components/auth/guest-guard';
import { Helmet } from 'src/components/base/helmet';

function PageContent(): React.JSX.Element {
  return (
    <>
      <Helmet heading="Create new account" />
      <AuthLayout>
        <AuthCustomRegisterForm />
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
