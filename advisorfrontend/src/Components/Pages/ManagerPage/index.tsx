import { Helmet } from "react-helmet-async";
import { Container, Grid } from "@mui/material";
import Footer from "../../Footer";

import Wallets from "./Wallets";

export interface Campaign {
  id: string;
  name: string;
  objective: string;
  budget: number;
  status: string;
}

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
