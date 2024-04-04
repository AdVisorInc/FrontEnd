import { Box, Container, Typography } from '@mui/material';
import LoginForm from './login-form';

const Component = () => {
  return (
    <>
      <Box
        py={{ xs: 2, sm: 3 }}
        mx={{ xl: 6 }}
      >
        <Container maxWidth="sm">
          <Typography variant="h3">Sign in</Typography>
          <Typography
            variant="h6"
            fontWeight={400}
          >
            Access your account and continue your journey
          </Typography>
        </Container>
      </Box>
      <LoginForm />
    </>
  );
};

export default Component;
