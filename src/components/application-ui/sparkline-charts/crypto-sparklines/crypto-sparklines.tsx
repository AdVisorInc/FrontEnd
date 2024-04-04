import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import { Box, Card, Unstable_Grid2 as Grid, Typography, useTheme } from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

const generateRandomData = (): number[] =>
  Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000));

function Component() {
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        md={6}
        lg={4}
      >
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2,
          }}
        >
          <Box>
            <Typography
              variant="caption"
              fontWeight={500}
              color="text.secondary"
            >
              Bitcoin
            </Typography>
            <Typography
              variant="h5"
              sx={{
                pb: 1,
                pt: 0.5,
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                color: theme.palette.success.main,
              }}
            >
              <span>54%</span>
              <KeyboardArrowUpTwoToneIcon fontSize="small" />
            </Typography>
            <Typography variant="h3">$8,583</Typography>
          </Box>
          <Box
            ml={1}
            flexGrow={1}
            py={1}
          >
            <SparkLineChart
              data={generateRandomData()}
              height={100}
              showTooltip
              curve="natural"
              margin={{ top: 12, bottom: 12, left: 0, right: 0 }}
              xAxis={{
                scaleType: 'band',
                data: [
                  new Date(2013, 0, 1),
                  new Date(2014, 0, 1),
                  new Date(2015, 0, 1),
                  new Date(2016, 0, 1),
                  new Date(2017, 0, 1),
                  new Date(2018, 0, 1),
                  new Date(2019, 0, 1),
                  new Date(2020, 0, 1),
                  new Date(2021, 0, 1),
                  new Date(2022, 0, 1),
                  new Date(2023, 0, 1),
                  new Date(2024, 0, 1),
                ],
                valueFormatter: (value) => value.getFullYear(),
              }}
              colors={[theme.palette.error.main]}
              sx={{ '.MuiLineElement-root': { strokeWidth: 3, strokeLinecap: 'round' } }}
            />
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={4}
      >
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2,
          }}
        >
          <Box>
            <Typography
              variant="caption"
              fontWeight={500}
              color="text.secondary"
            >
              Cardano
            </Typography>
            <Typography
              variant="h5"
              sx={{
                pb: 1,
                pt: 0.5,
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
                color: theme.palette.success.main,
              }}
            >
              <span>21,59%</span>
              <KeyboardArrowUpTwoToneIcon fontSize="small" />
            </Typography>
            <Typography variant="h3">$2,19</Typography>
          </Box>
          <Box
            ml={1}
            flexGrow={1}
            py={1}
          >
            <SparkLineChart
              data={generateRandomData()}
              height={100}
              showTooltip
              curve="linear"
              margin={{ top: 12, bottom: 12, left: 0, right: 0 }}
              xAxis={{
                scaleType: 'band',
                data: [
                  new Date(2013, 0, 1),
                  new Date(2014, 0, 1),
                  new Date(2015, 0, 1),
                  new Date(2016, 0, 1),
                  new Date(2017, 0, 1),
                  new Date(2018, 0, 1),
                  new Date(2019, 0, 1),
                  new Date(2020, 0, 1),
                  new Date(2021, 0, 1),
                  new Date(2022, 0, 1),
                  new Date(2023, 0, 1),
                  new Date(2024, 0, 1),
                ],
                valueFormatter: (value) => value.getFullYear(),
              }}
              colors={[theme.palette.primary.main]}
              sx={{ '.MuiLineElement-root': { strokeWidth: 3, strokeLinecap: 'round' } }}
            />
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={4}
      >
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 2,
          }}
        >
          <Box>
            <Typography
              variant="caption"
              fontWeight={500}
              color="text.secondary"
            >
              Ethereum
            </Typography>
            <Typography
              variant="h5"
              sx={{
                pb: 1,
                pt: 0.5,
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center',
              }}
              color="error"
            >
              <span>7,42%</span>
              <KeyboardArrowDownTwoToneIcon fontSize="small" />
            </Typography>
            <Typography variant="h3">$4,635</Typography>
          </Box>
          <Box
            ml={2}
            flexGrow={1}
          >
            <SparkLineChart
              data={generateRandomData()}
              height={120}
              showTooltip
              plotType="bar"
              margin={{ top: 12, bottom: 12, left: 0, right: 0 }}
              xAxis={{
                scaleType: 'band',
                data: [
                  new Date(2013, 0, 1),
                  new Date(2014, 0, 1),
                  new Date(2015, 0, 1),
                  new Date(2016, 0, 1),
                  new Date(2017, 0, 1),
                  new Date(2018, 0, 1),
                  new Date(2019, 0, 1),
                  new Date(2020, 0, 1),
                  new Date(2021, 0, 1),
                  new Date(2022, 0, 1),
                  new Date(2023, 0, 1),
                  new Date(2024, 0, 1),
                ],
                valueFormatter: (value) => value.getFullYear(),
              }}
              colors={[theme.palette.info.main]}
              sx={{
                '.MuiBarElement-root': {
                  fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
                  rx: theme.shape.borderRadius / 1.5,
                  fill: "url('#successGradient')",
                },
              }}
            >
              <defs>
                <linearGradient
                  id="successGradient"
                  gradientTransform="rotate(90)"
                >
                  <stop
                    offset="0%"
                    stopColor={theme.palette.primary.dark}
                  />
                  <stop
                    offset="100%"
                    stopColor={theme.palette.primary.main}
                  />
                </linearGradient>
              </defs>
            </SparkLineChart>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
