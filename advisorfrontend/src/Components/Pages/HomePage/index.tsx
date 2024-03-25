import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Container, Box, Typography } from "@mui/material";

import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const UserAvatars = () => {
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

  const HeroSection = () => {
    return (
      <Container sx={{ paddingTop: 12, position: "relative" }}>
        <UserAvatars />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: 2, my: 2, textAlign: "center" }}>
            <Typography
              variant="h1"
              sx={{ fontWeight: "bold", color: "white", letterSpacing: 2 }}
            >
              Excel Without
            </Typography>
            <Typography
              variant="h1"
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
              }}
            >
              Excel
            </Typography>
          </Box>
          <Typography
            variant="h6"
            fontWeight="regular"
            gutterBottom
            color={"white"}
            sx={{
              textAlign: "center",
              width: "48%",
              opacity: 0.5,
              lineHeight: 1.25,
            }}
          >
            Integrate TikTok, Google, and more to compare your advertising
            campaigns across platforms and launch new ones.
          </Typography>
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
      <AppBar position="static" sx={{ background: "#0d1b2a" }} elevation={0}>
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
