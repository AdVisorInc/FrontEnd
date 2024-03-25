// LoginForm.tsx
import React, { useState, FC } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  TextField,
  IconButton,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { useAuthStore } from "../../../store/useAuthStore";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  navigate: ReturnType<typeof useNavigate>;
}
const LoginForm: FC<LoginFormProps> = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const loginWithGoogle = useAuthStore((state) => state.loginWithGoogle);

  const { loginUser, emailVerified, loading, error, currentUser } =
    useAuthStore((state) => ({
      loginUser: state.loginUser,
      emailVerified: state.emailVerified,
      loading: state.loading,
      error: state.error,
      currentUser: state.currentUser,
    }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await loginUser(email, password, rememberMe);
    console.log(error);
    if (
      (currentUser && !emailVerified) ||
      error === "Please verify your email before logging in."
    ) {
      alert("Please verify your email before logging in.");
    } else if (
      !error &&
      currentUser &&
      currentUser.email === email &&
      currentUser.emailVerified
    ) {
      navigate("/dashboard/overview");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
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
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
        <Button
          onClick={() => loginWithGoogle()}
          variant="contained"
          color="secondary"
        >
          Sign in with Google
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
