import { Helmet } from "react-helmet-async";
import { Container, Grid, alpha, styled } from "@mui/material";
import Footer from "../../Footer";

import AccountBalance from "./AccountBalance";
import Wallets from "./Wallets";
import WatchList from "./WatchList";
import useFetchUserData from "../../../Services/queries/useFetchUserData";

// Import the useFetchUserData hook here

function AnalyticsPage() {
  // Use the hook to fetch user data
  const { data, loading, error } = useFetchUserData();

  // You can use the fetched data, loading status, and error info as needed in your component
  // For example, you might show a loading spinner while the data is being fetched,
  // display an error message if there's an error, or render the user data once it's available.

  return (
    <>
      <Helmet>
        <title>Analytics Dashboard</title>
      </Helmet>
      <Container maxWidth="lg">
        {loading && <div>Loading user data...</div>}
        {error && <div>Error fetching user data: {error}</div>}
        {data && (
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12}>
              <AccountBalance userData={data} />
            </Grid>
            <Grid item lg={8} xs={12}>
              <Wallets userData={data} />
            </Grid>
            <Grid item xs={12}>
              <WatchList userData={data} />
            </Grid>
          </Grid>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default AnalyticsPage;
