import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import RegisterPage from "./Components/Pages/RegisterPage";
import DashboardPage from "./Components/Pages/DashboardPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ThemeProviderWrapper from "./theme/ThemeProvider";
import { HelmetProvider } from "react-helmet-async";
import SidebarLayout from "./SidebarLayout";

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProviderWrapper>
        <GoogleOAuthProvider clientId="22202495353-q4duq21a6saollon2psplpgs5crl5oc4.apps.googleusercontent.com">
          <Router>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/dashboard" element={<SidebarLayout />}>
                <Route path=":overview" element={<DashboardPage />} />
              </Route>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Router>
        </GoogleOAuthProvider>
      </ThemeProviderWrapper>
    </HelmetProvider>
  );
};

export default App;
