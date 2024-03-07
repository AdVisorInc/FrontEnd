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
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { Label } from "@mui/icons-material";
import Text from "../../Text";

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
  const chartOptions: ApexOptions = {
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false, // Hides the toolbar for an even cleaner look
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      show: false, // Hide the grid lines
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
      labels: {
        show: false, // This hides the x-axis labels for minimalism
      },
      axisBorder: {
        show: false, // Optionally hide the axis border
      },
      axisTicks: {
        show: false, // Optionally hide the axis ticks
      },
    },
    yaxis: {
      labels: {
        show: false, // Hides the Y-axis labels
      },
    },
    legend: {
      show: false, // Optionally hide the legend if desired for minimalism
    },
    // Remove the title property entirely or set it as below:
    title: {
      text: "", // Setting the title text to an empty string effectively removes it
      align: "left",
    },
  };

  const chartData = [
    {
      name: "Conversions",
      data: [28, 29, 33, 36, 32, 32, 33], // Example data, replace with actual conversion data
    },
  ];

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
        <Typography variant="h4">Your Overview</Typography>
        <Button
          size="small"
          variant="outlined"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Add new graph
        </Button>
      </Box>
      <Grid container spacing={1}>
        <Grid xs={12} sm={6} md={3.5} item>
          <Card
            sx={{
              overflow: "visible",
            }}
          >
            <Box
              sx={{
                p: 2,
              }}
            >
              <Box display="flex" alignItems="center">
                <Box>
                  <Typography variant="h3" noWrap>
                    Conversions
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  pt: 2,
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    pr: 1,
                    mb: 1,
                  }}
                >
                  229.03
                </Typography>
                <Text color="error">
                  <b>-0.33%</b>
                </Text>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Label color="error">-5</Label>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    pl: 1,
                  }}
                >
                  last 7 days
                </Typography>
              </Box>
            </Box>
            <Chart
              options={chartOptions}
              series={chartData}
              type="area"
              height={150}
            />
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={3} item>
          <Tooltip arrow title="Click to add a new metric">
            <CardAddAction>
              <CardActionArea
                sx={{
                  px: 1,
                }}
              >
                <CardContent>
                  <AvatarAddWrapper>
                    <AddTwoToneIcon fontSize="large" />
                  </AvatarAddWrapper>
                </CardContent>
              </CardActionArea>
            </CardAddAction>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
}

export default Wallets;
