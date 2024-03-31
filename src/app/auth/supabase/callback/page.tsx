'use client';

import { Alert } from '@mui/material';
import React from 'react';
import toast from 'react-hot-toast';
import { useAuth } from 'src/hooks/use-auth';
import { useRouter } from 'src/hooks/use-router';
import { Layout } from 'src/layouts/base';
import { routes } from 'src/router/routes';
import { createClient as createSupabaseClient } from 'src/utils/supabase/client';

function PageContent(): React.JSX.Element | null {
  const [supabaseClient] = React.useState(createSupabaseClient());
  const router = useRouter();
  const { checkSession } = useAuth();
  const executedRef = React.useRef<boolean>(false);
  const [displayError, setDisplayError] = React.useState<string | null>(null);
  const handle = React.useCallback(async (): Promise<void> => {
    if (executedRef.current) {
      return;
    }
    executedRef.current = true;
    const hash = window.location.hash || '#';
    const hashParams = new URLSearchParams(hash.split('#')[1]);
    const searchParams = new URLSearchParams(window.location.search);
    if (hashParams.get('error')) {
      console.debug(hashParams.get('error_description'));
      setDisplayError('Something went wrong');
      return;
    }
    const accessToken = hashParams.get('access_token');
    const refreshToken = hashParams.get('refresh_token');
    if (!accessToken || !refreshToken) {
      setDisplayError('Access token or refresh token is missing');
      return;
    }
    const { error } = await supabaseClient.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });
    if (error) {
      console.debug(error.message);
      toast.error('Something went wrong');
      router.push(routes.auth['supabase.login']);
      return;
    }
    await checkSession();
    const next = searchParams.get('next') || routes.blueprints['generic-admin-dashboard'].index;
    router.push(next);
  }, [supabaseClient, router, checkSession]);
  React.useEffect((): void => {
    handle().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Expected
  }, []);
  if (displayError) {
    return <Alert severity="error">{displayError}</Alert>;
  }
  return null;
}
export default function Page(): React.JSX.Element {
  return (
    <Layout>
      <PageContent />
    </Layout>
  );
}
