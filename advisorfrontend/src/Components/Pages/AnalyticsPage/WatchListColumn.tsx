import {
  Card,
  Box,
  Typography,
  Avatar,
  Grid,
  alpha,
  useTheme,
  styled,
} from "@mui/material";
import Label from "../../Label";
import Text from "../../Text";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { Platform, UserProfileProps } from "../../../Services";

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    margin: ${theme.spacing(0, 0, 1, -0.5)};
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

const WatchListColumn: React.FC<UserProfileProps> = ({ userData }) => {
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      zoom: {
        enabled: false,
      },
    },
    fill: {
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.1,
        inverseColors: false,
        opacityFrom: 0.8,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    colors: [theme.colors.primary.main],
    dataLabels: {
      enabled: false,
    },
    theme: {
      mode: theme.palette.mode,
    },
    stroke: {
      show: true,
      colors: [theme.colors.primary.main],
      width: 3,
    },
    legend: {
      show: false,
    },
    labels: [
      "Monday",
      "Tueday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      tickAmount: 5,
    },
    tooltip: {
      x: {
        show: true,
      },
      y: {
        title: {
          formatter: function () {
            return "Price: $";
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };
  const chart1Data = [
    {
      name: "Bitcoin Price",
      data: [55.701, 57.598, 48.607, 46.439, 58.755, 46.978, 58.16],
    },
  ];
  const chart2Data = [
    {
      name: "Ethereum Price",
      data: [13, 16, 14, 20, 8, 11, 20],
    },
  ];
  const chart3Data = [
    {
      name: "Cardano Price",
      data: [51.85, 41.77, 22.09, 42.0, 71.9, 51.84, 31.84],
    },
  ];

  const platformCard = (platform: Platform) => {
    return (
      <Grid item md={4} xs={12}>
        <Card
          sx={{
            overflow: "visible",
          }}
        >
          <Box
            sx={{
              p: 3,
            }}
          >
            <Box display="flex" alignItems="center">
              <AvatarWrapper>
                <img alt="meta" src={platform.image} />
              </AvatarWrapper>
              <Box>
                <Typography variant="h4" noWrap>
                  {platform.name}
                </Typography>
                <Typography variant="subtitle1" noWrap>
                  {platform.nickname}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                pt: 3,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1,
                  mb: 1,
                }}
              >
                {platform.stats.ctr.total}
              </Typography>
              <Text
                color={
                  (platform.stats.ctr.deltaPercent ?? 0) > 0
                    ? "success"
                    : "error"
                }
              >
                <b>
                  {(platform.stats.ctr.deltaPercent ?? 0) > 0 ? "+" : ""}
                  {Math.round((platform.stats.ctr.deltaPercent ?? 0) * 10000) /
                    100}
                  %
                </b>
              </Text>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Label
                color={
                  (platform.stats.ctr.deltaUnits ?? 0) > 0 ? "success" : "error"
                }
              >
                {(platform.stats.ctr.deltaUnits ?? 0) > 0 ? "+" : ""}
                {platform.stats.ctr.deltaUnits}
              </Label>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  pl: 1,
                }}
              >
                last 24h
              </Typography>
            </Box>
          </Box>
          <Chart
            options={chartOptions}
            series={chart1Data}
            type="area"
            height={200}
          />
        </Card>
      </Grid>
    );
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={3}
    >
      {userData.platforms.map((element) => {
        return platformCard(element);
      })}
    </Grid>
  );
};

export default WatchListColumn;
