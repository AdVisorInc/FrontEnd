import {
  Button,
  Card,
  Box,
  Grid,
  Typography,
  useTheme,
  styled,
  Avatar,
  Divider,
  alpha,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar,
} from "@mui/material";
import TrendingUp from "@mui/icons-material/TrendingUp";
import Text from "../../Text";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { Platform, UserData, UserProfileProps } from "../../../Services";

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.success};
`
);

const ListItemAvatarWrapper = styled(ListItemAvatar)(
  ({ theme }) => `
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${theme.spacing(1)};
  padding: ${theme.spacing(0.5)};
  border-radius: 60px;
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

const AccountBalance: React.FC<UserProfileProps> = ({ userData }) => {
  const theme = useTheme();

  const chartLabels = () => {
    return userData.platforms.map((element) => {
      return element.name;
    });
  };

  const chartLabelColors = () => {
    return userData.platforms.map((element) => {
      return element.color;
    });
  };

  const chartOptions: ApexOptions = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
        },
      },
    },
    colors: chartLabelColors(),
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      style: {
        colors: [theme.colors.alpha.trueWhite[100]],
      },
      background: {
        enabled: true,
        foreColor: theme.colors.alpha.trueWhite[100],
        padding: 8,
        borderRadius: 4,
        borderWidth: 0,
        opacity: 0.3,
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 1,
          color: theme.colors.alpha.black[70],
          opacity: 0.5,
        },
      },
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        color: theme.colors.alpha.black[50],
        opacity: 0.5,
      },
    },
    fill: {
      opacity: 1,
    },
    labels: chartLabels(),
    legend: {
      labels: {
        colors: theme.colors.alpha.trueWhite[100],
      },
      show: false,
    },
    stroke: {
      width: 0,
    },
    theme: {
      mode: theme.palette.mode,
    },
  };

  const chartSeries = () => {
    const arr = userData.platforms.map((element) => {
      const amoutn = Math.round(element.scoreContribution.total * 100);

      return amoutn;
    });

    console.log(arr);

    return arr;
  };

  const accountsListItem = (platform: Platform) => {
    return (
      <ListItem disableGutters>
        <ListItemAvatarWrapper>
          <img alt={"lol"} src={platform.image} />
        </ListItemAvatarWrapper>
        <ListItemText
          primary={platform.name}
          primaryTypographyProps={{ variant: "h5", noWrap: true }}
          secondary={platform.type}
          secondaryTypographyProps={{
            variant: "subtitle2",
            noWrap: true,
          }}
        />
        <Box>
          <Typography align="right" variant="h4" noWrap>
            {Math.round(platform.scoreContribution.total * 100)}%
          </Typography>
          <Text
            color={platform.scoreContribution.delta > 0 ? "success" : "error"}
          >
            {platform.scoreContribution.delta > 0 ? "+" : ""}
            {Math.round(platform.scoreContribution.delta * 10000) / 100}%
          </Text>
        </Box>
      </ListItem>
    );
  };

  return (
    <Card>
      <Grid spacing={0} container>
        <Grid item xs={12} md={6}>
          <Box p={4}>
            <Typography
              sx={{
                pb: 3,
              }}
              variant="h2"
            >
              Analytics Dashboard
            </Typography>
            <Box>
              <Typography variant="h1" gutterBottom>
                {userData.totalScore}
              </Typography>
              <Typography
                variant="h4"
                fontWeight="normal"
                color="text.secondary"
              >
                Out of 1000
              </Typography>
              <Box
                display="flex"
                sx={{
                  py: 4,
                }}
                alignItems="center"
              >
                <AvatarSuccess
                  sx={{
                    mr: 2,
                  }}
                  variant="rounded"
                >
                  <TrendingUp fontSize="large" />
                </AvatarSuccess>
                <Box>
                  <Typography variant="h4">
                    {userData.totalScoreDelta > 0 ? "+" : "-"}{" "}
                    {userData.totalScoreDelta}
                  </Typography>
                  <Typography variant="subtitle2" noWrap>
                    this month
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Grid container spacing={3}>
              <Grid sm item>
                <Button fullWidth variant="outlined">
                  Improve Score
                </Button>
              </Grid>
              <Grid sm item>
                <Button fullWidth variant="contained">
                  Deploy Campaigns
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          sx={{
            position: "relative",
          }}
          display="flex"
          alignItems="center"
          item
          xs={12}
          md={6}
        >
          <Box
            component="span"
            sx={{
              display: { xs: "none", md: "inline-block" },
            }}
          >
            <Divider absolute orientation="vertical" />
          </Box>
          <Box py={4} pr={4} flex={1}>
            <Grid container spacing={0}>
              <Grid
                xs={12}
                sm={5}
                item
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Chart
                  height={250}
                  options={chartOptions}
                  series={chartSeries()}
                  type="donut"
                />
              </Grid>
              <Grid xs={12} sm={7} item display="flex" alignItems="center">
                <List
                  disablePadding
                  sx={{
                    width: "100%",
                  }}
                >
                  {userData.platforms.map((element) => {
                    return accountsListItem(element);
                  })}
                </List>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AccountBalance;
