import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import RegisterPage from "./Components/Pages/RegisterPage";
import DashboardPage from "./Components/Pages/DashboardPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ThemeProviderWrapper from "./theme/ThemeProvider";
import { HelmetProvider } from "react-helmet-async";
import SidebarLayout from "./SidebarLayout";
import HomePage from "./Components/Pages/HomePage";
import { useAuthStore } from "./store/useAuthStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/config";
import PrivateRoutes from "./Components/Atoms/PrivateRoutes";

const App: React.FC = () => {
  const { currentUser, checkTokenExpiration } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      useAuthStore.setState({ currentUser: user });
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(checkTokenExpiration, 60000); // Check every minute
    return () => clearInterval(intervalId);
  }, [checkTokenExpiration]);

  return (
      <HelmetProvider>
        <ThemeProviderWrapper>
          <GoogleOAuthProvider clientId="22202495353-q4duq21a6saollon2psplpgs5crl5oc4.apps.googleusercontent.com">
            <Router>
              <Routes>
                <Route element={<PrivateRoutes />}>
                  <Route path="/dashboard" element={<SidebarLayout />}>
                    <Route path=":overview" element={<DashboardPage />} />
                  </Route>
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Router>
          </GoogleOAuthProvider>
        </ThemeProviderWrapper>
      </HelmetProvider>
  );
};

export default App;