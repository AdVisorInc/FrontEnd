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

function Wallets() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3,
        }}
      >
        <Typography variant="h3">Ad Spend</Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3} item>
          <Card
            sx={{
              px: 1,
            }}
          >
            <CardContent>
              <AvatarWrapper>
                <img alt="meta" src={MetaLogo} />
              </AvatarWrapper>
              <Typography variant="h5" noWrap>
                Meta
              </Typography>
              <Typography variant="subtitle1" noWrap>
                Bui's Cupcake Shop
              </Typography>
              <Box
                sx={{
                  pt: 3,
                }}
              >
                <Typography variant="h3" gutterBottom noWrap>
                  $3,586.22
                </Typography>
                <Typography variant="subtitle2" noWrap>
                  Updated: just now
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
          <Card
            sx={{
              px: 1,
            }}
          >
            <CardContent>
              <AvatarWrapper>
                <img alt="tiktok" src={TiktokLogo} />
              </AvatarWrapper>
              <Typography variant="h5" noWrap>
                TikTok
              </Typography>
              <Typography variant="subtitle1" noWrap>
                Bui's Computer Parts
              </Typography>
              <Box
                sx={{
                  pt: 3,
                }}
              >
                <Typography variant="h3" gutterBottom noWrap>
                  $586.83
                </Typography>
                <Typography variant="subtitle2" noWrap>
                  Updated: 1 hour
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
          <Card
            sx={{
              px: 1,
            }}
          >
            <CardContent>
              <AvatarWrapper>
                <img alt="Google" src={GoogleLogo} />
              </AvatarWrapper>
              <Typography variant="h5" noWrap>
                Google
              </Typography>
              <Typography variant="subtitle1" noWrap>
                Ramzi's Pharmacy
              </Typography>
              <Box
                sx={{
                  pt: 3,
                }}
              >
                <Typography variant="h3" gutterBottom noWrap>
                  $4,985.00
                </Typography>
                <Typography variant="subtitle2" noWrap>
                  Updated: just now
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Wallets;
