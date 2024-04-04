import { zodResolver } from '@hookform/resolvers/zod';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  FilledInput,
  FormControl,
  FormHelperText,
  Unstable_Grid2 as Grid,
  InputAdornment,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { RouterLink } from 'src/components/base/router-link';
import { useRouter } from 'src/hooks/use-router';
import { routes } from 'src/router/routes';
import { createClient as createSupabaseClient } from 'src/utils/supabase/client';
import { z as zod } from 'zod';

const schema = zod.object({
  email: zod.string().min(1, { message: 'Email is required' }).email(),
});

type Values = zod.infer<typeof schema>;

const defaultValues = {
  email: '',
} satisfies Values;

export function ResetPasswordForm(): React.JSX.Element {
  const [supabaseClient] = React.useState(createSupabaseClient());
  const router = useRouter();
  const [isPending, setIsPending] = React.useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Values>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit = React.useCallback(
    async (values: Values): Promise<void> => {
      setIsPending(true);

      const redirectToUrl = new URL(routes.auth['supabase.callback'], window.location.origin);
      redirectToUrl.searchParams.set('next', routes.auth['supabase.update-password']);

      const { error } = await supabaseClient.auth.resetPasswordForEmail(values.email, {
        redirectTo: redirectToUrl.href,
      });

      if (error) {
        setError('root', {
          type: 'server',
          message: error.message,
        });
        setIsPending(false);
        return;
      }

      const searchParams = new URLSearchParams({ email: values.email });
      router.push(`${routes.auth['supabase.recover-link-sent']}?${searchParams.toString()}`);
    },
    [supabaseClient, router, setError]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        py={{ xs: 2, sm: 3 }}
        mx={{ xl: 6 }}
      >
        <Container maxWidth="sm">
          <Typography variant="h3">Recover password</Typography>
          <Typography
            variant="h6"
            fontWeight={400}
          >
            Enter your email to reset your password
          </Typography>
          <Divider sx={{ my: 2 }} />
        </Container>
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 2, sm: 3 }}
        >
          <Container maxWidth="sm">
            <Grid
              container
              spacing={2}
            >
              <Grid xs={12}>
                <FormControl
                  fullWidth
                  error={Boolean(errors.email)}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="label"
                    htmlFor="email-input"
                    fontWeight={500}
                  >
                    Email
                  </Typography>
                  <FilledInput
                    {...register('email')}
                    type="email"
                    hiddenLabel
                    id="email-input"
                    placeholder="Write your email"
                    startAdornment={
                      <InputAdornment position="start">
                        <MailOutlineRoundedIcon fontSize="small" />
                      </InputAdornment>
                    }
                  />
                  {errors.email && <FormHelperText>{errors.email.message}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  size="large"
                  fullWidth
                  disabled={isPending}
                >
                  Send reset link
                </Button>
              </Grid>
              {errors.root && (
                <Grid xs={12}>
                  <Alert severity="error">{errors.root.message}</Alert>
                </Grid>
              )}
              <Grid xs={12}>
                <Grid xs={12}>
                  <Button
                    component={RouterLink}
                    href={routes.auth['supabase.login']}
                    size="large"
                    startIcon={<KeyboardBackspaceRoundedIcon />}
                  >
                    Go to sign in
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Stack>
      </Box>
    </form>
  );
}
