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

function ManagerPage() {
  return (
    <>
      <Helmet>
        <title>Analytics Dashboard</title>
      </Helmet>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item lg={8} xs={12}>
            <Wallets />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ManagerPage;
