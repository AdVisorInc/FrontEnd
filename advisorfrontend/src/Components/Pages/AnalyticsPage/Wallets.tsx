import {
  Card,
  Grid,
  Box,
  CardContent,
  Typography,
  Avatar,
  alpha,
  styled,
} from "@mui/material";
import { Platform, UserProfileProps } from "../../../Services";

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

const Wallets: React.FC<UserProfileProps> = ({ userData }) => {
  const unixTimestampToRelativeTime = (
    timestamp: number | undefined
  ): string => {
    if (!timestamp) {
      return "Just now";
    }

    const now = Date.now(); // Current timestamp in milliseconds
    const secondsPast = (now - timestamp * 1000) / 1000; // Convert input to milliseconds and calculate difference

    if (secondsPast < 60) {
      // Less than a minute
      return "Just now";
    } else if (secondsPast < 3600) {
      // Less than an hour
      return `${Math.floor(secondsPast / 60)} minutes ago`;
    } else if (secondsPast < 86400) {
      // Less than a day
      return `${Math.floor(secondsPast / 3600)} hours ago`;
    } else {
      return `${Math.floor(secondsPast / 86400)} days ago`;
    }
  };

  const platformCard = (platform: Platform) => {
    return (
      <Grid xs={12} sm={6} md={4} item>
        <Card
          sx={{
            px: 1,
          }}
        >
          <CardContent>
            <AvatarWrapper>
              <img alt="meta" src={platform.image} />
            </AvatarWrapper>
            <Typography variant="h5" noWrap>
              {platform.name}
            </Typography>
            <Typography variant="subtitle1" noWrap>
              {platform.nickname}
            </Typography>
            <Box
              sx={{
                pt: 3,
              }}
            >
              <Typography variant="h3" gutterBottom noWrap>
                ${platform.stats.spend.total}
              </Typography>
              <Typography variant="subtitle2" noWrap>
                Updated:{" "}
                {unixTimestampToRelativeTime(platform.stats.spend.updated)}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent="center"
        sx={{
          pb: 3,
        }}
        width={"100%"}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          sx={{
            pb: 3,
          }}
          width={"100%"}
        >
          <Typography variant="h3">Ad Spend</Typography>
        </Box>
        <Grid container spacing={3}>
          {userData.platforms.map((element) => {
            return platformCard(element);
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Wallets;
