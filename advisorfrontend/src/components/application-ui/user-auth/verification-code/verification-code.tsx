import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Unstable_Grid2 as Grid,
  InputAdornment,
  Link,
  OutlinedInput,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { DividerPrimary } from 'src/components/application-ui/composed-blocks/multi-panel/multi-panel';
import { AvatarState } from 'src/components/base/styles/avatar';
import { ButtonSoft } from 'src/components/base/styles/button-soft';

type FormData = {
  emailCode: string[];
};

function EmailVerificationForm() {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));
  const email = useState('demo@example.com')[0];
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      emailCode: Array(6).fill(''),
    },
  });

  const codeInputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const focusNextInput = (currentIndex: number) => {
    if (currentIndex < 6) {
      const nextInput = codeInputRefs.current[currentIndex + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const onSubmit: SubmitHandler<FormData> = () => {
    toast.success('The form has been successfully saved!');
  };

  const isEveryFieldFilled = () => {
    return !Object.values(errors.emailCode || {}).some(Boolean);
  };

  return (
    <Container
      disableGutters={!smUp}
      maxWidth="sm"
    >
      <Box py={5}>
        <AvatarState
          isSoft
          state="success"
          sx={{
            mx: 'auto',
            width: 64,
            height: 64,
          }}
        >
          <MarkEmailReadOutlinedIcon />
        </AvatarState>

        <Box textAlign="center">
          <Typography
            variant="h4"
            sx={{ pt: 1, pb: 0.5 }}
          >
            Verification email sent!
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            A 6-digit verification code has been sent to your registered email address.
          </Typography>
          <DividerPrimary
            sx={{
              my: 2,
              mx: 'auto',
            }}
          />
          <Typography
            variant="subtitle1"
            fontWeight={500}
          >
            Input the code in the fields below to confirm your email and proceed.
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            mt={2}
            container
            spacing={2}
            justifyContent="center"
          >
            <Grid xs={12}>
              <FormControl fullWidth>
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
                  type="email"
                  id="email-input"
                  value={email}
                  placeholder="Write your email"
                  startAdornment={
                    <InputAdornment position="start">
                      <MailOutlineRoundedIcon fontSize="small" />
                    </InputAdornment>
                  }
                  readOnly
                />
              </FormControl>
            </Grid>

            {Array.from({ length: 6 }).map((_, index) => (
              <Grid
                xs={2}
                key={index}
                sx={{
                  '& .MuiInputBase-input': {
                    px: 0,
                  },
                }}
              >
                <TextField
                  {...register(`emailCode.${index}`, {
                    required: 'All fields are required',
                    maxLength: 1,
                  })}
                  variant="outlined"
                  placeholder="-"
                  inputProps={{
                    maxLength: 1,

                    sx: { fontWeight: 600, fontSize: 16, textAlign: 'center' },
                  }}
                  error={Boolean(errors.emailCode?.[index])}
                  onChange={(e) => {
                    const value = e.target.value;
                    setValue(`emailCode.${index}`, value, { shouldValidate: true });
                    if (value.length === 1) {
                      focusNextInput(index);
                    }
                  }}
                  inputRef={(ref) => (codeInputRefs.current[index] = ref)}
                />
              </Grid>
            ))}
            {!isEveryFieldFilled() && (
              <FormHelperText error={true}>{errors.emailCode?.[0]?.message}</FormHelperText>
            )}
            <Grid xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
              >
                Verify
              </Button>
            </Grid>
            <Grid xs={12}>
              <Typography sx={{ mt: { xs: 2, sm: 3 } }}>
                Don't have a code?{' '}
                <Link
                  href=""
                  onClick={(e) => e.preventDefault()}
                  underline="hover"
                >
                  Resend code
                </Link>
              </Typography>
            </Grid>
            <Grid xs={12}>
              <ButtonSoft
                fullWidth
                startIcon={<KeyboardBackspaceRoundedIcon />}
              >
                Return to sign in
              </ButtonSoft>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}

export default EmailVerificationForm;
