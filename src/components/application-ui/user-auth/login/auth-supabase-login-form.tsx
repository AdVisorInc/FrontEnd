import { zodResolver } from '@hookform/resolvers/zod';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Container,
  Divider,
  FilledInput,
  FormControl,
  FormHelperText,
  Unstable_Grid2 as Grid,
  InputAdornment,
  Link,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { RouterLink } from 'src/components/base/router-link';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { useAuth } from 'src/hooks/use-auth';
import { useRouter } from 'src/hooks/use-router';
import { routes } from 'src/router/routes';
import { createClient as createSupabaseClient } from 'src/utils/supabase/client';
import { z as zod } from 'zod';

interface OAuthProvider {
  id: 'google' | 'github';
  name: string;
  logo: string;
}

const oAuthProviders = [
  {
    id: 'google',
    name: 'Google',
    logo: '/placeholders/logo/google-icon.svg',
  },
  {
    id: 'github',
    name: 'Github',
    logo: '/placeholders/logo/github-icon.svg',
  },
] satisfies OAuthProvider[];

const schema = zod.object({
  email: zod.string().min(1, { message: 'Email is required' }).email(),
  password: zod.string().min(1, { message: 'Password is required' }),
});

type Values = zod.infer<typeof schema>;

const defaultValues = {
  email: '',
  password: '',
} satisfies Values;

export function AuthSupabaseLoginForm(): React.JSX.Element {
  const [supabaseClient] = React.useState(createSupabaseClient());
  const router = useRouter();

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const updatedOAuthProviders = oAuthProviders.map((provider) => ({
    ...provider,
    logo:
      provider.id === 'github'
        ? isDarkMode
          ? '/placeholders/logo/github-icon-light.svg'
          : '/placeholders/logo/github-icon.svg'
        : provider.logo,
  }));

  const { checkSession } = useAuth();
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

  const onAuth = React.useCallback(
    async (provider: OAuthProvider['id']): Promise<void> => {
      setIsPending(true);

      const redirectToUrl = new URL(routes.auth['supabase.callback'], window.location.origin);
      redirectToUrl.searchParams.set('next', routes.blueprints['generic-admin-dashboard'].index);

      const { data, error } = await supabaseClient.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: redirectToUrl.href,
        },
      });

      if (error) {
        setIsPending(false);
        // toast.error(error.message);
        return;
      }

      window.location.href = data.url;
    },
    [supabaseClient]
  );

  const onSubmit = React.useCallback(
    async (values: Values): Promise<void> => {
      setIsPending(true);

      const { error } = await supabaseClient.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        if (error.message.includes('Email not confirmed')) {
          const searchParams = new URLSearchParams({ email: values.email });
          router.push(`${routes.auth['supabase.register-confirm']}?${searchParams.toString()}`);
        } else {
          setError('root', {
            type: 'server',
            message: error.message,
          });
          setIsPending(false);
        }

        return;
      }

      await checkSession();
      router.refresh();
    },
    [supabaseClient, router, setError, checkSession]
  );

  const [showPassword, setShowPassword] = React.useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="sm">
        <Typography
          align="center"
          variant="h3"
          gutterBottom
        >
          Sign in
        </Typography>
        <Typography
          align="center"
          variant="h6"
          fontWeight={400}
        >
          Access your account and continue your journey
        </Typography>
      </Container>
      <Stack
        mt={{ xs: 2, sm: 3 }}
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 2, sm: 3 }}
      >
        <Container maxWidth="sm">
          <Stack
            justifyContent="center"
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
          >
            {updatedOAuthProviders.map((provider) => (
              <Button
                fullWidth
                disabled={isPending}
                sx={{
                  whiteSpace: 'nowrap',
                }}
                variant="outlined"
                color="secondary"
                key={provider.id}
                onClick={() => onAuth(provider.id).catch(() => {})}
                startIcon={
                  <img
                    style={{ height: 24, width: 24 }}
                    alt="Google"
                    src={provider.logo}
                  />
                }
              >
                Sign in with {provider.name}
              </Button>
            ))}
          </Stack>
        </Container>
        <Divider flexItem>
          <Typography variant="subtitle1">or with email</Typography>
        </Divider>
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
                  hiddenLabel
                  {...register('email')}
                  type="email"
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
              <FormControl
                fullWidth
                error={Boolean(errors.password)}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  component="label"
                  htmlFor="password-input"
                  fontWeight={500}
                >
                  Password
                </Typography>
                <FilledInput
                  hiddenLabel
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  id="password-input"
                  placeholder="Write your password"
                  endAdornment={
                    <InputAdornment position="end">
                      <ButtonIcon
                        variant="outlined"
                        color="secondary"
                        sx={{ mr: -0.8 }}
                        onClick={handlePasswordVisibility}
                      >
                        {showPassword ? (
                          <VisibilityOff fontSize="small" />
                        ) : (
                          <Visibility fontSize="small" />
                        )}
                      </ButtonIcon>
                    </InputAdornment>
                  }
                />
                {errors.password && <FormHelperText>{errors.password.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <Box
                alignItems="center"
                display="flex"
                justifyContent="space-between"
              >
                <Link
                  component={RouterLink}
                  href={routes.auth['supabase.reset-password']}
                  underline="hover"
                >
                  {t('Recover password')}
                </Link>
              </Box>
            </Grid>
            <Grid xs={12}>
              <Button
                disabled={isPending}
                variant="contained"
                type="submit"
                size="large"
                fullWidth
              >
                Sign in
              </Button>
            </Grid>
            <Grid
              xs={12}
              textAlign="center"
            >
              <Typography
                component="span"
                color="text.secondary"
              >
                Not a Member yet?
              </Typography>{' '}
              <Link
                component={RouterLink}
                href={routes.auth['supabase.register']}
                underline="hover"
                fontWeight={500}
              >
                Sign up
              </Link>
            </Grid>
            {errors.root && (
              <Grid xs={12}>
                <Alert
                  variant="outlined"
                  severity="error"
                >
                  {errors.root.message}
                </Alert>
              </Grid>
            )}
            {/* REMOVE_START */}
            <Grid xs={12}>
              <Alert
                severity="warning"
                variant="outlined"
              >
                <AlertTitle sx={{ pb: 0.3, textTransform: 'uppercase', fontWeight: 600 }}>
                  Sign in credentials
                </AlertTitle>
                <Typography
                  variant="h5"
                  fontWeight={400}
                >
                  Email <b>example@uifort.com</b> and password <b>DemoPass123</b>
                </Typography>
              </Alert>
            </Grid>
            {/* REMOVE_END */}
          </Grid>
        </Container>
      </Stack>
    </form>
  );
}
