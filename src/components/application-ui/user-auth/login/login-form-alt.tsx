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
  FormControl,
  FormControlLabel,
  FormHelperText,
  Unstable_Grid2 as Grid,
  InputAdornment,
  Link,
  OutlinedInput,
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
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'), // Add password validation
});

type FormData = z.infer<typeof schema>;

function LoginFormAlt() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { t } = useTranslation();
  const onSubmit: SubmitHandler<FormData> = () => {
    toast.success('The form has been successfully saved!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              Sign in with Google
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
                  src="/placeholders/logo/amplify.svg"
                />
              }
            >
              Sign in with Amplify
            </Button>
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
                <OutlinedInput
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
                <OutlinedInput
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
                <FormHelperText>{errors.password?.message}</FormHelperText>
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
                Not a Member yet?
              </Typography>{' '}
              <Link
                href=""
                onClick={(e) => e.preventDefault()}
                underline="hover"
                fontWeight={500}
              >
                Sign up
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </form>
  );
}

export default LoginFormAlt;
