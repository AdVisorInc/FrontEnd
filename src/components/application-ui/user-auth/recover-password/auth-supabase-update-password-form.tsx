import { zodResolver } from '@hookform/resolvers/zod';
import {
  Alert,
  Button,
  Container,
  FilledInput,
  FormControl,
  FormHelperText,
  Unstable_Grid2 as Grid,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'src/hooks/use-router';
import { routes } from 'src/router/routes';
import { createClient as createSupabaseClient } from 'src/utils/supabase/client';
import { z as zod } from 'zod';

const schema = zod
  .object({
    password: zod.string().min(6, { message: 'Password should be at least 6 characters' }),
    confirm: zod.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  });

type Values = zod.infer<typeof schema>;

const defaultValues = {
  password: '',
  confirm: '',
} satisfies Values;

export function UpdatePasswordForm(): React.JSX.Element {
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

      const { error } = await supabaseClient.auth.updateUser({
        password: values.password,
      });

      if (error) {
        setError('root', {
          type: 'server',
          message: error.message,
        });
        setIsPending(false);
        return;
      }

      router.push(routes.blueprints['generic-admin-dashboard'].index);
    },
    [supabaseClient, router, setError]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container maxWidth="sm">
        <Typography
          align="center"
          variant="h3"
          gutterBottom
        >
          Update password
        </Typography>
        <Typography
          align="center"
          variant="h6"
          fontWeight={400}
        >
          Reset and update your account password securely
        </Typography>
      </Container>
      <Stack
        mt={{ xs: 2, sm: 3 }}
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
                error={Boolean(errors.password)}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  component="label"
                  htmlFor="password-input"
                  fontWeight={500}
                >
                  Current password
                </Typography>
                <FilledInput
                  hiddenLabel
                  {...register('password')}
                  type="password"
                  id="password-input"
                  placeholder="Current password"
                />
                {errors.password && <FormHelperText>{errors.password.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <FormControl
                fullWidth
                error={Boolean(errors.confirm)}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  component="label"
                  htmlFor="confirm-input"
                  fontWeight={500}
                >
                  New password
                </Typography>
                <FilledInput
                  hiddenLabel
                  {...register('confirm')}
                  type="password"
                  id="confirm-input"
                  placeholder="New password"
                />
                {errors.confirm && <FormHelperText>{errors.confirm.message}</FormHelperText>}
              </FormControl>
            </Grid>
            <Grid xs={12}>
              <Button
                disabled={isPending}
                variant="contained"
                type="submit"
                size="large"
                fullWidth
              >
                Update password
              </Button>
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
          </Grid>
        </Container>
      </Stack>
    </form>
  );
}
