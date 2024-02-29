import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {
  Container,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { Dict } from "styled-components/dist/types";

const HomePage: React.FC = () => {
  const theme = useTheme();
  const renderDesktopVersion = useMediaQuery(theme.breakpoints.up("md"));

  const platformCircles = [
    {
      alt: "TikTok",
      src: `tiktok_logo.png`,
      positions: { top: "8em", left: "1em" },
    },
    {
      alt: "Google",
      src: "google_logo.png",
      positions: { bottom: "2em", left: "8em" },
    },
    {
      alt: "Meta",
      src: "meta_logo.png",
      positions: { top: "6em", right: "0em" },
    },
    {
      alt: "X",
      src: "x_logo.png",
      positions: { bottom: "6em", right: "8em" },
    },
  ];

  const UserAvatarsDesktop = () => {
    return (
      <>
        {platformCircles.map((element) => {
          return (
            <Avatar
              alt={element.alt}
              sx={{
                position: "absolute",
                zIndex: 2,
                width: 64,
                height: 64,
                ...element.positions,
                boxShadow: "0 4px 20px rgba(255, 255, 255, .3)",
              }}
              src={`${process.env.PUBLIC_URL}/social_icons/${element.src}`}
            />
          );
        })}
      </>
    );
  };

  interface IHateTypeScript {
    alt: string;
    src: string;
    positions: any;
  }

  const UserAvatarsMobile = () => {
    const mobileAvatarCircle = (element: IHateTypeScript) => {
      return (
        <Avatar
          alt={element.alt}
          sx={{
            width: 48,
            height: 48,
            boxShadow: "0 2px 6px rgba(255, 255, 255, .15)",
          }}
          src={`${process.env.PUBLIC_URL}/social_icons/${element.src}`}
        />
      );
    };

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "50%",
          gap: 2,
          paddingTop: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {mobileAvatarCircle(platformCircles[0])}
          {mobileAvatarCircle(platformCircles[3])}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "75%",
          }}
        >
          {mobileAvatarCircle(platformCircles[2])}
          {mobileAvatarCircle(platformCircles[1])}
        </Box>
      </Box>
    );
  };

  const HeroTitle = () => {
    return (
      <Box
        sx={{
          display: "flex",
          gap: {
            xs: 0,
            sm: 0,
            md: 2,
            lg: 2,
            xl: 2,
          },
          my: 2,
          textAlign: "center",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "white",
            letterSpacing: 2,
            fontSize: {
              xs: 32,
              sm: 52,
              md: 52,
              lg: 52,
              xl: 52,
            },
          }}
        >
          Excel Without
        </Typography>
        <Typography
          sx={{
            backgroundImage: "linear-gradient(to right, #DE0D92, #4D6CFA)",
            color: "transparent",
            backgroundClip: "text",
            // Cross-browser compatibility
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
            textAlign: "center",
            letterSpacing: 2,
            fontSize: {
              xs: 32,
              sm: 52,
              md: 52,
              lg: 52,
              xl: 52,
            },
          }}
        >
          Excel
        </Typography>
      </Box>
    );
  };

  const HeroSection = () => {
    return (
      <Container
        sx={{
          paddingTop: {
            xs: 2,
            sm: 4,
            md: 12,
            lg: 12,
            xl: 12,
          },
          position: "relative",
        }}
      >
        {renderDesktopVersion ? <UserAvatarsDesktop /> : <div />}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <HeroTitle />
          <Typography
            fontWeight="regular"
            gutterBottom
            color={"white"}
            sx={{
              variant: "h6",
              textAlign: "center",
              width: {
                xs: "90%",
                sm: "75%",
                md: "48%",
                lg: "48%",
                xl: "48%",
              },
              opacity: 0.5,
              lineHeight: 1.25,
            }}
          >
            Integrate TikTok, Google, and more to compare your advertising
            campaigns across platforms and launch new ones.
          </Typography>
          {!renderDesktopVersion ? <UserAvatarsMobile /> : <div />}
          <HeroButtons />
        </Box>
      </Container>
    );
  };

  const HeroButtons = () => {
    const navigate = useNavigate(); // Using the useNavigate hook

    return (
      <Box
        sx={{
          padding: 2,
          paddingTop: 8,
          textAlign: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#DE0D92",
            borderRadius: "32px",
            padding: "8px 72px",
            textTransform: "none",
            fontSize: 20,
            ":hover": {
              backgroundColor: "#9A0965",
            },
          }}
          onClick={() => navigate("/register")} // Navigate to /register
        >
          Start For Free
        </Button>
        <Typography
          variant="body1"
          display="block"
          sx={{
            color: "white",
            opacity: 0.5,
            marginTop: 1,
          }}
        >
          No credit card required.
        </Typography>
      </Box>
    );
  };

  const ToolbarButton = (props: {
    title: string;
    outline?: boolean;
    onClick: () => void;
  }) => {
    const buttonStyle = {
      ...(props.outline
        ? {
            border: "1.2px solid rgba(204, 204, 204, 0.25)",
            borderRadius: 10,
            paddingX: 2,
          }
        : {}),
      color: "white",
      display: "block",
      marginLeft: 1.5,
      textTransform: "none",
    };

    return (
      <Button sx={buttonStyle} onClick={props.onClick}>
        {props.title}
      </Button>
    );
  };

  const LandingToolBar = () => {
    const navigate = useNavigate();

    return (
      <AppBar
        position="static"
        sx={{ background: "#0d1b2a", paddingTop: 4 }}
        elevation={0}
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Advisr
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ToolbarButton
                title={"Sign In"}
                onClick={() => navigate("/login")}
              />
              <ToolbarButton
                title={"Get Started"}
                outline
                onClick={() => navigate("/register")}
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        background: "#0d1b2a",
      }}
    >
      <LandingToolBar />
      <HeroSection />
    </Box>
  );
};

export default HomePage;
