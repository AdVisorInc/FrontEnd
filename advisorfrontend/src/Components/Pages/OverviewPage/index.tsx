import { Helmet } from "react-helmet-async";
import PageHeader from "./PageHeader";
import PageTitleWrapper from "../../PageTitleWrapper";
import { Container, Grid, alpha, styled } from "@mui/material";
import Footer from "../../Footer";

import AccountBalance from "./AccountBalance";
import Wallets from "./Wallets";
import WatchList from "./WatchList";
import RecentActivity from "./RecentActivity";

import { useTheme } from "@emotion/react";

function OverviewPage() {
  const theme = useTheme();
  return (
    <>
      <Helmet>
        <title>Overview Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container style={{ padding: "0" }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={9}>
            <Grid item xs={12}>
              <Wallets />
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid item xs={12}>
              <RecentActivity />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default OverviewPage;
