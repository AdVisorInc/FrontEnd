import React, { useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ThemeProviderWrapper from "./theme/ThemeProvider";
import { HelmetProvider } from "react-helmet-async";
import { useAuthStore } from "./store/useAuthStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/config";
import {LocalizationProvider} from "@mui/lab";
import {CssBaseline} from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { useRoutes } from 'react-router-dom';
import router from "./router";
import {SnackbarProvider} from "notistack";

const App: React.FC = () => {
  const { currentUser, checkTokenExpiration } = useAuthStore();
  const content = useRoutes(router);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      useAuthStore.setState({ currentUser: user });
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(checkTokenExpiration, 60000);
    return () => clearInterval(intervalId);
  }, [checkTokenExpiration]);

  return (
      <HelmetProvider>
        <ThemeProviderWrapper>
          <GoogleOAuthProvider clientId="22202495353-q4duq21a6saollon2psplpgs5crl5oc4.apps.googleusercontent.com">
            <SnackbarProvider >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <CssBaseline />
                {content}
              </LocalizationProvider>
            </SnackbarProvider>
          </GoogleOAuthProvider>
        </ThemeProviderWrapper>
      </HelmetProvider>
  );
};

export default App;