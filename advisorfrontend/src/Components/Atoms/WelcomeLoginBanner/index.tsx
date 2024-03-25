import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import Spline from "@splinetool/react-spline";

interface WelcomeBannerProps {
  isLargeScreen: boolean;
}

const WelcomeBanner: FC<WelcomeBannerProps> = ({ isLargeScreen }) => {
  return (
    <Box
      flex={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography variant="h2" fontWeight={800} align="center" gutterBottom>
        It's not only a rock.
      </Typography>
      <Spline scene="https://prod.spline.design/nTRxHxuH1r-qbFrZ/scene.splinecode" />
      <Typography variant="h2" fontWeight={800} align="center" gutterBottom>
        Its the foundation of your marketing goals.
      </Typography>
    </Box>
  );
};

export default WelcomeBanner;
