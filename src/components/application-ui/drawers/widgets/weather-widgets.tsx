import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import OpacityTwoToneIcon from '@mui/icons-material/OpacityTwoTone';
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone';
import WaterTwoToneIcon from '@mui/icons-material/WaterTwoTone';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import {
  alpha,
  Box,
  Card,
  Unstable_Grid2 as Grid,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useTranslation } from 'react-i18next';

const BoxWeatherSmall = styled(Card)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backdropFilter: 'blur(8px)',
  background: alpha(theme.palette.neutral[900], 0.8),
  color: theme.palette.common.white,
  padding: theme.spacing(2),

  '.MuiTypography-root': {
    color: theme.palette.common.white,
  },

  '.MuiTypography-caption': {
    fontSize: theme.typography.pxToRem(13),
    display: 'flex',
    color: alpha(theme.palette.common.white, 0.5),
    alignItems: 'center',

    '.MuiSvgIcon-root': {
      width: '18px',
      height: '18px',
      marginRight: theme.spacing(0.5),
    },
  },

  '.MuiTypography-body2': {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 1.5,
  },
}));

const LinearUv = styled(Box)(({ theme }) => ({
  height: '4px',
  width: '100%',
  borderRadius: '50px',
  position: 'relative',
  background:
    'linear-gradient(to right, #41ea55 0%,#f2f22e 25%,#ef8c2f 50%,#ff0c0c 75%,#ba0cff 100%)',

  ':after': {
    content: '" "',
    borderRadius: '50px',
    background: theme.palette.common.white,
    boxShadow: `0 0 0 2px ${theme.palette.common.black}`,
    position: 'absolute',
    left: '30%',
    top: '-2px',
    height: '8px',
    width: '8px',
  },
}));

function WeatherWidgets() {
  const { t } = useTranslation();
  const theme = useTheme();

  const data = {
    percentage: 67,
  };

  return (
    <Box m={-2}>
      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
      >
        <Grid
          xs={12}
          md={6}
        >
          <BoxWeatherSmall elevation={23}>
            <Typography variant="caption">
              <WbSunnyTwoToneIcon />
              {t('UV Index')}
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              sx={{
                height: 120,
              }}
            >
              <Box mb={2}>
                <Typography variant="h2">2</Typography>
                <Typography variant="h4">{t('Low')}</Typography>
              </Box>
              <LinearUv />
            </Box>
            <Typography variant="body2">
              Use sun protection
              <br />
              from 12PM to 3PM.
            </Typography>
          </BoxWeatherSmall>
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
          <BoxWeatherSmall elevation={23}>
            <Typography variant="caption">
              <WaterTwoToneIcon />
              {t('Humidity')}
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              sx={{
                height: 120,
              }}
            >
              <Box mb={2}>
                <Typography variant="h1">92%</Typography>
              </Box>
            </Box>
            <Typography variant="body2">
              The dew point is
              <br />
              16 <sup>°</sup>
              right now.
            </Typography>
          </BoxWeatherSmall>
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
          <BoxWeatherSmall elevation={23}>
            <Typography variant="caption">
              <OpacityTwoToneIcon />
              {t('Rainfall')}
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              sx={{
                height: 120,
              }}
            >
              <Box mb={2}>
                <Typography variant="h2">1.15"</Typography>
                <Typography variant="h4">{t('in last 6h')}</Typography>
              </Box>
            </Box>
            <Typography variant="body2">
              .75" expected in <br />
              next 24h.
            </Typography>
          </BoxWeatherSmall>
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
          <BoxWeatherSmall elevation={23}>
            <Typography variant="caption">
              <SpeedTwoToneIcon />
              {t('Pressure')}
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              sx={{
                pt: 4,
                height: 157,
              }}
            >
              <Box width={110}>
                <CircularProgressbarWithChildren
                  circleRatio={0.75}
                  styles={buildStyles({
                    rotation: 1 / 2.2 + 1 / 5.85,
                    trailColor: alpha(theme.palette.common.white, 0.15),
                    pathColor: theme.palette.common.white,
                    strokeLinecap: 'round',
                  })}
                  strokeWidth={6}
                  value={data.percentage}
                >
                  <Box sx={{ mt: -1.5 }}>
                    <ArrowDownwardTwoToneIcon />
                    <Typography variant="h3">29.98</Typography>
                    <Typography variant="body2">inHg</Typography>
                  </Box>
                </CircularProgressbarWithChildren>
              </Box>
            </Box>
          </BoxWeatherSmall>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WeatherWidgets;
