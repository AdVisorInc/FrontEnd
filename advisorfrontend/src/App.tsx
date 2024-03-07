import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import RegisterPage from "./Components/Pages/RegisterPage";
import OverviewPage from "./Components/Pages/OverviewPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ThemeProviderWrapper from "./theme/ThemeProvider";
import { HelmetProvider } from "react-helmet-async";
import SidebarLayout from "./SidebarLayout";
import AnalyticsPage from "./Components/Pages/AnalyticsPage";
import HomePage from "./Components/Pages/HomePage";
import ManagerPage from "./Components/Pages/ManagerPage";

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
                <Route path="overview" element={<OverviewPage />} />
                <Route path="analytics" element={<AnalyticsPage />} />
                <Route path="manager" element={<ManagerPage />} />
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
