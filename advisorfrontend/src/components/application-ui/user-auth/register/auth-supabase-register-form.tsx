import { zodResolver } from '@hookform/resolvers/zod';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FilledInput,
  FormControl,
  FormControlLabel,
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
  firstName: zod.string().min(1, { message: 'First name is required' }),
  lastName: zod.string().min(1, { message: 'Last name is required' }),
  email: zod.string().min(1, { message: 'Email is required' }).email(),
  password: zod.string().min(6, { message: 'Password should be at least 6 characters' }),
  terms: zod.boolean().refine((value) => value, 'You must accept the terms and conditions'),
});

type Values = zod.infer<typeof schema>;

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  terms: false,
} satisfies Values;

export function AuthSupabaseRegisterForm(): React.JSX.Element {
  const [supabaseClient] = React.useState(createSupabaseClient());
  const { t } = useTranslation();

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

  const router = useRouter();
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

      const redirectToUrl = new URL(routes.auth['supabase.callback'], window.location.origin);
      redirectToUrl.searchParams.set('next', routes.blueprints['generic-admin-dashboard'].index);

      const { data, error } = await supabaseClient.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            full_name: `${values.firstName} ${values.lastName}`,
          },
          emailRedirectTo: redirectToUrl.href,
        },
      });

      if (error) {
        setError('root', {
          type: 'server',
          message: error.message,
        });
        setIsPending(false);
        return;
      }

      if (data.session) {
        await checkSession();

        router.refresh();
        return;
      }

      if (data.user) {
        const searchParams = new URLSearchParams({ email: values.email });
        router.push(`${routes.auth['supabase.register-confirm']}?${searchParams.toString()}`);
        return;
      }

      setIsPending(false);
    },
    [supabaseClient, router, setError, checkSession]
  );

  const [showPassword, setShowPassword] = React.useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        py={{ xs: 2, sm: 3 }}
        mx={{ xl: 6 }}
      >
        <Container maxWidth="sm">
          <Typography
            align="center"
            variant="h3"
            gutterBottom
          >
            Create new account
          </Typography>
          <Typography
            align="center"
            variant="h6"
            fontWeight={400}
          >
            Join our platform by creating a new account for exclusive access
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
                  Sign up with {provider.name}
                </Button>
              ))}
            </Stack>
          </Container>
          <Divider flexItem>
            <Typography variant="subtitle1">or register with email</Typography>
          </Divider>
          <Container maxWidth="sm">
            <Grid
              container
              spacing={2}
            >
              <Grid xs={12}>
                <FormControl fullWidth>
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="label"
                    htmlFor="firstname-input"
                    fontWeight={500}
                  >
                    Full name
                  </Typography>
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                  >
                    <Grid
                      xs={12}
                      sm={6}
                    >
                      <FilledInput
                        error={Boolean(errors.firstName)}
                        hiddenLabel
                        {...register('firstName')}
                        id="firstname-input"
                        fullWidth
                        placeholder="First name"
                      />

                      {errors.firstName && (
                        <FormHelperText>{errors.firstName.message}</FormHelperText>
                      )}
                    </Grid>
                    <Grid
                      xs={12}
                      sm={6}
                    >
                      <FilledInput
                        error={Boolean(errors.lastName)}
                        hiddenLabel
                        {...register('lastName')}
                        fullWidth
                        id="lastname-input"
                        placeholder="Last name"
                      />
                      {errors.lastName && (
                        <FormHelperText>{errors.lastName.message}</FormHelperText>
                      )}
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
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
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
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
                    {...register('password')}
                    type={showPassword ? 'text' : 'password'}
                    hiddenLabel
                    id="password-input"
                    placeholder="Write your password"
                    startAdornment={
                      <InputAdornment position="start">
                        <MailOutlineRoundedIcon fontSize="small" />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <ButtonIcon
                          variant="outlined"
                          color="secondary"
                          sx={{ mr: -0.3 }}
                          onClick={handlePasswordVisibility}
                        >
                          {showPassword ? (
                            <VisibilityOff fontSize="inherit" />
                          ) : (
                            <Visibility fontSize="inherit" />
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
                  <FormControl error={Boolean(errors.terms)}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...register('terms')}
                          name="terms"
                          color="primary"
                        />
                      }
                      label={
                        <>
                          <Typography variant="body1">
                            {t('I accept the Terms and Conditions')}
                          </Typography>
                        </>
                      }
                    />
                    {errors.terms && <FormHelperText>{errors.terms.message}</FormHelperText>}
                  </FormControl>
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
                  Create account
                </Button>
              </Grid>
              {errors.root && (
                <Grid xs={12}>
                  <Alert severity="error">{errors.root.message}</Alert>
                </Grid>
              )}
              <Grid
                xs={12}
                textAlign="center"
              >
                <Typography
                  component="span"
                  color="text.secondary"
                >
                  Already a Member?
                </Typography>{' '}
                <Link
                  component={RouterLink}
                  href={routes.auth['supabase.login']}
                  underline="hover"
                  fontWeight={500}
                >
                  Sign in here
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Stack>
      </Box>
    </form>
  );
}
