import { Helmet } from "react-helmet-async";
import PageHeader from "./PageHeader";
import PageTitleWrapper from "../../PageTitleWrapper";
import { Container, Grid, alpha, styled } from "@mui/material";
import Footer from "../../Footer";

import AccountBalance from "./AccountBalance";
import Wallets from "./Wallets";
import AccountSecurity from "./AccountSecurity";
import WatchList from "./WatchList";

import Sidebar from "../../../SidebarLayout/Sidebar";
import HeaderNav from "../../../SidebarLayout/Header";

import { useTheme } from "@emotion/react";
import SidebarLayout from "../../../SidebarLayout";

function DashboardCrypto() {
  const theme = useTheme();
  return (
    <>
      <Helmet>
        <title>AdVisor Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <AccountBalance />
          </Grid>
          <Grid item lg={8} xs={12}>
            <Wallets />
          </Grid>
          <Grid item xs={12}>
            <WatchList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default DashboardCrypto;
