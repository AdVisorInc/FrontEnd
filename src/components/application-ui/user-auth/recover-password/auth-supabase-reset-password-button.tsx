import { Alert, Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import toast from 'react-hot-toast';
import { routes } from 'src/router/routes';
import { createClient as createSupabaseClient } from 'src/utils/supabase/client';

interface ResetPasswordButtonProps {
  children: React.ReactNode;
  email?: string;
}

export function ResetPasswordButton({
  children,
  email,
}: ResetPasswordButtonProps): React.JSX.Element {
  const [supabaseClient] = React.useState(createSupabaseClient());
  const [isPending, setIsPending] = React.useState<boolean>(false);
  const [submitError, setSubmitError] = React.useState<string>();
  const [timer, setTimer] = React.useState<number>(15);

  const handle = React.useCallback(async (): Promise<void> => {
    if (!email) {
      return;
    }

    setIsPending(true);
    setSubmitError(undefined);

    setTimer(15);

    const redirectToUrl = new URL(routes.auth['supabase.callback'], window.location.origin);
    redirectToUrl.searchParams.set('next', routes.auth['supabase.update-password']);

    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: redirectToUrl.href,
    });

    if (error) {
      setSubmitError(error.message);
      setIsPending(false);
      return;
    }

    setIsPending(false);
    toast.success('Recover link sent');
  }, [supabaseClient, email]);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer <= 0) {
      setIsPending(false);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPending, timer]);

  return (
    <Stack
      display="block"
      spacing={2}
    >
      {submitError ? <Alert severity="error">{submitError}</Alert> : null}
      <Box>
        <Button
          variant="outlined"
          color="secondary"
          disabled={!email || isPending || timer != 0}
          onClick={handle}
        >
          {children}
        </Button>
        <Typography
          variant="subtitle2"
          textAlign="center"
        >
          {timer != 0 && (
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              You have to wait for {timer} seconds before requesting another link.
            </Typography>
          )}
        </Typography>
      </Box>
    </Stack>
  );
}
