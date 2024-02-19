// LoginPage.tsx
import React, { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  Button,
} from "@mui/material";
import { useAuthStore } from "../../../store/useAuthStore";
import WelcomeBanner from "../../Atoms/WelcomeLoginBanner";
import LoginForm from "../../Molecules/LoginForm";
import SignupForm from "../../Molecules/SignupForm"; // Adjust import path
import ResetPasswordDialog from "../../Organisms/ResetPasswordDialog";
import { ThemeOptions } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
} as ThemeOptions);

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const { loading, error } = useAuthStore((state) => ({
    loading: state.loading,
    error: state.error,
  }));
  const [openResetDialog, setOpenResetDialog] = useState(false);
  const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup
  const isLargeScreen = useMediaQuery("(min-width:600px)");
  const [verificationSent, setVerificationSent] = useState(false);
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: isLargeScreen ? "row" : "column-reverse",
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <WelcomeBanner isLargeScreen={isLargeScreen} />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={isLargeScreen ? "30%" : "100%"}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="100%"
            maxWidth="50em"
          >
            {isSignup ? (
              <Typography variant="h5">Sign Up</Typography>
            ) : (
              <Typography variant="h5">Login</Typography>
            )}
            {isSignup ? (
              <SignupForm setIsSignup={setIsSignup} />
            ) : (
              <LoginForm navigate={navigate} />
            )}
            <Button onClick={() => setIsSignup(!isSignup)}>
              {isSignup
                ? "Already have an account? Log in"
                : "Don't have an account? Sign up"}
            </Button>
            {loading && <CircularProgress />}
            {error && <Typography color="error">{error}</Typography>}
            {!isSignup && (
              <ResetPasswordDialog
                open={openResetDialog}
                onClose={() => setOpenResetDialog(false)}
                setOpen={setOpenResetDialog}
              />
            )}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LoginPage;
