import BatteryCharging50TwoToneIcon from '@mui/icons-material/BatteryCharging50TwoTone';
import PowerTwoToneIcon from '@mui/icons-material/PowerTwoTone';
import { alpha, Card, Unstable_Grid2 as Grid, Typography, useTheme } from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

const generateRandomData = (): number[] =>
  Array.from({ length: 6 }, () => Math.floor(Math.random() * 500));

function VideoCameras() {
  const { t } = useTranslation();

  const theme = useTheme();

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
      >
        <Grid
          xs={12}
          sm={6}
        >
          <Card
            variant="outlined"
            elevation={0}
            sx={{
              border: 0,
              background: 'linear-gradient(135deg, #FCCF31 0%, #F55555 100%) !important',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <AvatarState
              state="light"
              sx={{
                width: theme.spacing(8),
                height: theme.spacing(8),
                my: { xs: 2, sm: 3 },
              }}
            >
              <PowerTwoToneIcon fontSize="large" />
            </AvatarState>
            <Typography
              variant="h1"
              color="common.white"
            >
              45 <small>min</small>
            </Typography>
            <Typography
              textAlign="center"
              variant="h5"
              gutterBottom
              sx={{
                color: alpha(theme.palette.common.white, 0.8),
              }}
            >
              {t('Last charged to 100%')}
            </Typography>
            <SparkLineChart
              plotType="line"
              height={172}
              curve="natural"
              colors={[theme.palette.common.white]}
              margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
              data={generateRandomData()}
              area
              sx={{
                '.MuiLineElement-root': {
                  strokeWidth: 1,
                },

                '.MuiAreaElement-root': {
                  fill: alpha(theme.palette.common.white, 0.12),
                },
              }}
            >
              <defs>
                <linearGradient
                  id="alphaWhiteGradient"
                  gradientTransform="rotate(90)"
                >
                  <stop
                    offset="0%"
                    stopColor={alpha(theme.palette.common.white, 0.4)}
                  />
                  <stop
                    offset="100%"
                    stopColor={alpha(theme.palette.common.white, 0.01)}
                  />
                </linearGradient>
              </defs>
            </SparkLineChart>
          </Card>
        </Grid>
        <Grid
          xs={12}
          sm={6}
        >
          <Card
            variant="outlined"
            elevation={0}
            sx={{
              border: 0,
              background: 'linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <AvatarState
              state="light"
              sx={{
                width: theme.spacing(8),
                height: theme.spacing(8),
                my: { xs: 2, sm: 3 },
              }}
            >
              <BatteryCharging50TwoToneIcon fontSize="large" />
            </AvatarState>
            <Typography
              variant="h1"
              color="common.white"
            >
              82 <small>%</small>
            </Typography>
            <Typography
              textAlign="center"
              variant="h5"
              gutterBottom
              sx={{
                color: alpha(theme.palette.common.white, 0.8),
              }}
            >
              {t('Remaining battery')}
            </Typography>
            <SparkLineChart
              plotType="line"
              height={172}
              curve="natural"
              colors={[theme.palette.common.white]}
              margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
              data={generateRandomData()}
              area
              sx={{
                '.MuiLineElement-root': {
                  strokeWidth: 1,
                },

                '.MuiAreaElement-root': {
                  fill: alpha(theme.palette.common.white, 0.12),
                },
              }}
            >
              <defs>
                <linearGradient
                  id="alphaWhiteGradient"
                  gradientTransform="rotate(90)"
                >
                  <stop
                    offset="0%"
                    stopColor={alpha(theme.palette.common.white, 0.4)}
                  />
                  <stop
                    offset="100%"
                    stopColor={alpha(theme.palette.common.white, 0.01)}
                  />
                </linearGradient>
              </defs>
            </SparkLineChart>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default VideoCameras;
