import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import RegisterPage from "./Components/Pages/RegisterPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#007BFF", // Example primary color
    },
    secondary: {
      main: "#F50057", // Example secondary color
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined", // Use outlined variant for text fields by default
        margin: "normal",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          margin: "8px",
        },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId="22202495353-q4duq21a6saollon2psplpgs5crl5oc4.apps.googleusercontent.com">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
      ,
    </GoogleOAuthProvider>
  );
};

export default App;
