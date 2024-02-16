import React, { useEffect, useRef, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
  Checkbox,
  FormControlLabel,
  Link,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  ThemeProvider,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../Firebase/config";
import Spline from "@splinetool/react-spline";
import { useNavigate } from "react-router-dom";
import { ThemeOptions, createTheme } from "@mui/material/styles";
import { Application, SPEObject } from "@splinetool/runtime";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
} as ThemeOptions);
const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [openResetDialog, setOpenResetDialog] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      await setPersistence(
        auth,
        rememberMe ? browserLocalPersistence : browserSessionPersistence
      );
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard/overview"); // Redirect after successful login
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const isLargeScreen = useMediaQuery("(min-width:600px)");

  const handlePasswordReset = async () => {
    if (!resetEmail) {
      setError("Please enter your email address.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      alert("Password reset email sent!");
      setOpenResetDialog(false);
      setResetEmail("");
    } catch (error: any) {
      setError(error.message);
    }
  };
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Handle redirect after successful login if needed
    } catch (error: any) {
      setError(error.message);
    }
  };

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
        {isLargeScreen && (
          <Box
            flex={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {isLargeScreen && (
              <Box
                flex={1}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Typography
                  variant="h2"
                  fontWeight={800}
                  align="center"
                  gutterBottom
                >
                  This is not just a rock,
                </Typography>
                <Spline scene="https://prod.spline.design/nTRxHxuH1r-qbFrZ/scene.splinecode" />

                <Typography
                  variant="h3"
                  fontWeight={800}
                  align="center"
                  letterSpacing={2}
                  gutterBottom
                >
                  it's the foundation of your marketing success.
                </Typography>
              </Box>
            )}
          </Box>
        )}
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
            <Typography variant="h5">Login</Typography>
            <form
              onSubmit={handleLogin}
              style={{ maxWidth: "35em", padding: "3em", margin: "auto" }}
            >
              <Box display="flex" flexDirection="column" gap="2em">
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    ),
                  }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      color="primary"
                    />
                  }
                  label="Remember me"
                />
                <Box
                  mt={2}
                  width="100%"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loading}
                  >
                    {loading ? <CircularProgress size={24} /> : "Login"}
                  </Button>
                  <Link
                    href="#"
                    variant="body2"
                    onClick={() => setOpenResetDialog(true)}
                  >
                    Forgot password?
                  </Link>
                </Box>
                {error && (
                  <Typography color="error" align="center" mt={2}>
                    {error}
                  </Typography>
                )}
                <Box mt={2} textAlign="center">
                  <Typography variant="body2">
                    Don't have an account? <Link href="/register">Sign Up</Link>
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleGoogleSignIn}
                    style={{ marginTop: "20px" }}
                  >
                    Sign in with Google
                  </Button>
                </Box>
              </Box>
            </form>

            <Dialog
              open={openResetDialog}
              onClose={() => setOpenResetDialog(false)}
            >
              <DialogTitle>Password Reset</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Enter your email address to request a password reset link.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="outlined"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenResetDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={handlePasswordReset}>Send</Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LoginPage;
