import { zodResolver } from '@hookform/resolvers/zod';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
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
} from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { z } from 'zod';

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  repeatPassword: z.string().min(6, 'Please confirm your password'),
});

type FormData = z.infer<typeof schema>;

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const password = watch('password');

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { t } = useTranslation();
  const onSubmit: SubmitHandler<FormData> = () => {
    toast.success('The form has been successfully saved!');
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
              <Button
                fullWidth
                sx={{
                  whiteSpace: 'nowrap',
                }}
                variant="outlined"
                color="secondary"
                startIcon={
                  <img
                    style={{ height: 24, width: 24 }}
                    alt="Google"
                    src="/placeholders/logo/google-icon.svg"
                  />
                }
              >
                Continue with Google
              </Button>
              <Button
                fullWidth
                sx={{
                  whiteSpace: 'nowrap',
                }}
                variant="outlined"
                color="secondary"
                startIcon={
                  <img
                    style={{ height: 24, width: 24 }}
                    alt="Google"
                    src="/placeholders/logo/auth0.svg"
                  />
                }
              >
                Continue with Auth0
              </Button>
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
                <FormControl
                  fullWidth
                  size="small"
                >
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
                        error={!!errors.firstName}
                        hiddenLabel
                        {...register('firstName')}
                        id="firstname-input"
                        fullWidth
                        size="small"
                        placeholder="First name"
                      />

                      <FormHelperText error={!!errors.firstName}>
                        {errors.firstName?.message}
                      </FormHelperText>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={6}
                    >
                      <FilledInput
                        error={!!errors.lastName}
                        hiddenLabel
                        {...register('lastName')}
                        fullWidth
                        size="small"
                        id="lastname-input"
                        placeholder="Last name"
                      />
                      <FormHelperText error={!!errors.lastName}>
                        {errors.lastName?.message}
                      </FormHelperText>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
              <Grid xs={12}>
                <FormControl
                  fullWidth
                  error={!!errors.email}
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
                    size="small"
                    id="email-input"
                    placeholder="Write your email"
                    startAdornment={
                      <InputAdornment position="start">
                        <MailOutlineRoundedIcon fontSize="small" />
                      </InputAdornment>
                    }
                  />
                  <FormHelperText>{errors.email?.message}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid xs={12}>
                <FormControl
                  fullWidth
                  error={!!errors.password}
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
                    size="small"
                    id="password-input"
                    placeholder="Write your password"
                    endAdornment={
                      <InputAdornment position="end">
                        <ButtonIcon
                          size="small"
                          variant="outlined"
                          color="secondary"
                          sx={{ mr: -0.8 }}
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
                  <FormHelperText>{errors.password?.message}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid xs={12}>
                <FormControl
                  fullWidth
                  error={!!errors.repeatPassword}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="label"
                    htmlFor="repeat-password-input"
                    fontWeight={500}
                  >
                    Repeat Password
                  </Typography>
                  <FilledInput
                    {...register('repeatPassword', {
                      validate: (value) => value === password || 'The passwords do not match',
                    })}
                    type={showPassword ? 'text' : 'password'}
                    hiddenLabel
                    size="small"
                    id="repeat-password-input"
                    placeholder="Repeat your password"
                  />
                  <FormHelperText>{errors.repeatPassword?.message}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid xs={12}>
                <Box
                  alignItems="center"
                  display="flex"
                  justifyContent="space-between"
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="terms"
                        color="primary"
                      />
                    }
                    label={
                      <>
                        <Typography variant="body1">{t('Keep me signed in')}</Typography>
                      </>
                    }
                  />
                  <Link
                    href=""
                    onClick={(e) => e.preventDefault()}
                    underline="hover"
                  >
                    {t('Recover password')}
                  </Link>
                </Box>
              </Grid>
              <Grid xs={12}>
                <Button
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
                  Already a Member?
                </Typography>{' '}
                <Link
                  href=""
                  onClick={(e) => e.preventDefault()}
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

export default RegisterForm;
