import {
  Button,
  Card,
  Grid,
  Box,
  CardContent,
  Typography,
  Avatar,
  alpha,
  Tooltip,
  CardActionArea,
  styled,
} from "@mui/material";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import GoogleLogo from "../../../assets/google.png";
import MetaLogo from "../../../assets/meta.png";
import TiktokLogo from "../../../assets/tiktok.png";
import React from "react";

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    margin: ${theme.spacing(2, 0, 1, -0.5)};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(1)};
    padding: ${theme.spacing(0.5)};
    border-radius: 60px;
    height: ${theme.spacing(5.5)};
    width: ${theme.spacing(5.5)};
    background: ${
      theme.palette.mode === "dark"
        ? theme.colors.alpha.trueWhite[30]
        : alpha(theme.colors.alpha.black[100], 0.07)
    };
  
    img {
      background: ${theme.colors.alpha.trueWhite[100]};
      padding: ${theme.spacing(0.5)};
      display: block;
      border-radius: inherit;
      height: ${theme.spacing(4.5)};
      width: ${theme.spacing(4.5)};
    }
`
);

const AvatarAddWrapper = styled(Avatar)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[10]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`
);

const CardAddAction = styled(Card)(
  ({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        transition: ${theme.transitions.create(["all"])};
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[70]};
        }
`
);

const cardData = [
  {
    id: 1,
    title: "Impressions",
    value: "18,034",
    lastUpdated: "just now",
  },
  {
    id: 2,
    title: "Cost per Click",
    value: "$5.87",
    lastUpdated: "just now",
  },
  {
    id: 3,
    title: "Clicks",
    value: "224",
    lastUpdated: "just now",
  },
  {
    id: 4,
    title: "Conversions",
    value: "12",
    lastUpdated: "just now",
  },
  {
    id: 5,
    title: "Conversion Rate",
    value: "5.4%",
    lastUpdated: "just now",
  },
  {
    id: 6,
    title: "Return on Ad Spend",
    value: "3.2",
    lastUpdated: "just now",
  },
  {
    id: 7,
    title: "Cost per Conversion",
    value: "$12.3",
    lastUpdated: "just now",
  },
  {
    id: 8,
    title: "Cost per Mille",
    value: "$3.2",
    lastUpdated: "just now",
  },
  {
    id: 9,
    title: "Cost per Acquisition",
    value: "$12.3",
    lastUpdated: "just now",
  },
  {
    id: 10,
    title: "Cost per Lead",
    value: "$3.2",
    lastUpdated: "just now",
  },
  {
    id: 11,
    title: "Cost per Sale",
    value: "$12.3",
    lastUpdated: "just now",
  },
  {
    id: 12,
    title: "Cost per Engagement",
    value: "$12.3",
    lastUpdated: "just now",
  },
  {
    id: 13,
    title: "Cost per Like",
    value: "$12.3",
    lastUpdated: "just now",
  },
];

function Performance() {
  const handleCardClick = (cardId: number) => {
    console.log(`Card ${cardId} clicked`);
    // Implement any action upon clicking the card
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ pb: 3 }}
      >
        <Typography variant="h3">Performance (on all accounts)</Typography>
      </Box>
      <Grid container spacing={2.5}>
        {cardData.map((card) => (
          <Grid key={card.id} xs={12} sm={6} md={3} item>
            <Card
              sx={{
                px: 1,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardActionArea onClick={() => handleCardClick(card.id)}>
                <CardContent>
                  <Typography variant="h3">{card.title}</Typography>
                  <Box sx={{ pt: 1.5 }}>
                    <Typography variant="h1" gutterBottom noWrap>
                      {card.value}
                    </Typography>
                    <Typography variant="subtitle1" noWrap>
                      Updated: {card.lastUpdated}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Performance;
