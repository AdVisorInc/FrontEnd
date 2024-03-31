import { zodResolver } from '@hookform/resolvers/zod';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Unstable_Grid2 as Grid,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { CardIndicatorColor } from 'src/components/base/styles/card-indicator-color';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'), // Add password validation
});

type FormData = z.infer<typeof schema>;

function LoginFormBasic() {
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
    toast.custom(
      (t) => (
        <CardIndicatorColor
          elevation={21}
          indicatorColor="success"
          className={`${t.visible ? 'animate-enter' : 'animate-leave'}`}
        >
          <CardContent
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <AvatarState
              state="success"
              variant="rounded"
              useShadow
              sx={{
                width: 38,
                height: 38,
                mt: 0.4,
              }}
            >
              <CheckRoundedIcon fontSize="small" />
            </AvatarState>
            <Box ml={2}>
              <Typography variant="h6">Save Successful</Typography>

              <Typography
                variant="subtitle1"
                color="text.secondary"
              >
                The form has been successfully saved!
              </Typography>
            </Box>
            <IconButton
              sx={{
                ml: 2,
                p: 0.2,
                position: 'absolute',
                right: (theme) => theme.spacing(1),
                top: (theme) => theme.spacing(1),
              }}
              size="small"
              onClick={() => toast.dismiss(t.id)}
            >
              <CloseRoundedIcon fontSize="inherit" />
            </IconButton>
          </CardContent>
        </CardIndicatorColor>
      ),
      {
        position: 'top-right',
      }
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 2, sm: 3 }}
      >
        <Container maxWidth="sm">
          <Card
            elevation={0}
            variant="outlined"
            sx={{
              width: '100%',
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[50], 0.02)
                  : 'neutral.50',
              p: { xs: 2, sm: 3 },
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                mb: 2,
              }}
              color="text.secondary"
              variant="h6"
              fontWeight={500}
            >
              {t('Sign in with')}
            </Typography>
            <Stack
              justifyContent="center"
              direction="row"
              spacing={1}
            >
              <Tooltip
                arrow
                title={t('Sign in with Google')}
              >
                <ButtonIcon
                  size="large"
                  variant="outlined"
                  color="secondary"
                >
                  <img
                    style={{ height: 28, width: 28 }}
                    alt="Google"
                    src="/placeholders/logo/google-icon.svg"
                  />
                </ButtonIcon>
              </Tooltip>
              <Tooltip
                arrow
                title={t('Sign in with Amplify')}
              >
                <ButtonIcon
                  color="secondary"
                  size="large"
                  variant="outlined"
                >
                  <img
                    style={{ height: 28, width: 28 }}
                    alt="Amplify"
                    src="/placeholders/logo/amplify.svg"
                  />
                </ButtonIcon>
              </Tooltip>
              <Tooltip
                arrow
                title={t('Sign in with Auth0')}
              >
                <ButtonIcon
                  size="large"
                  color="secondary"
                  variant="outlined"
                >
                  <img
                    style={{ height: 28, width: 28 }}
                    alt="Amplify"
                    src="/placeholders/logo/auth0.svg"
                  />
                </ButtonIcon>
              </Tooltip>
            </Stack>
          </Card>
        </Container>
        <Divider flexItem>
          <Chip
            variant="outlined"
            color="primary"
            label="or"
          />
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
                      <Typography
                        noWrap
                        variant="body1"
                      >
                        {t('Keep me signed in')}
                      </Typography>
                    </>
                  }
                />
                <Link
                  href=""
                  onClick={(e) => e.preventDefault()}
                  underline="hover"
                  noWrap
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
              >
                Sign in
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </form>
  );
}

export default LoginFormBasic;
