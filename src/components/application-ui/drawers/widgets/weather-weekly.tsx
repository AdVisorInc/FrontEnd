import AirTwoToneIcon from '@mui/icons-material/AirTwoTone';
import CloudTwoToneIcon from '@mui/icons-material/CloudTwoTone';
import GrainTwoToneIcon from '@mui/icons-material/GrainTwoTone';
import MyLocationTwoToneIcon from '@mui/icons-material/MyLocationTwoTone';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import {
  alpha,
  Box,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { addDays, format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { ButtonLight } from 'src/components/base/styles/button';

const WeatherBox = styled(Card)(() => ({
  background: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%) !important',
  overflow: 'hidden',
  position: 'relative',
}));

const WeatherBoxContent = styled(Box)(({ theme }) => ({
  zIndex: 5,
  position: 'relative',
  color: theme.palette.common.white,
}));

const TopBarImage = styled(Box)({
  backgroundSize: 'cover',
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  opacity: 0.3,
});

const WeatherIcon = styled(Box)({
  height: 'auto',
  width: '100%',
  textAlign: 'center',

  img: {
    maxWidth: '158px',
  },
});

const BoxWeather = styled(Box)(({ theme }) => ({
  width: '100%',
  backdropFilter: 'blur(8px)',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));

const DividerWrapper = styled(Divider)(({ theme }) => ({
  borderColor: alpha(theme.palette.common.white, 0.1),
}));

const LinearHighLow = styled(Box)({
  height: '4px',
  width: '100%',
  borderRadius: '50px',
  background: 'linear-gradient(90deg, rgba(103,188,255,1) 0%, rgba(255,184,90,1) 100%)',
});

function WeatherWeekly() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <WeatherBox>
      <TopBarImage
        sx={{
          backgroundImage: 'url("/placeholders/covers/automation-bg.jpg")',
        }}
      />
      <WeatherBoxContent>
        <BoxWeather>
          <Grid
            container
            spacing={1}
          >
            <Grid
              xs={12}
              sm={4}
            >
              <WeatherIcon>
                <img
                  src="/placeholders/illustrations/partly-cloudy-day-rain.svg"
                  alt="Partly cloudy"
                />
              </WeatherIcon>
            </Grid>
            <Grid
              xs={12}
              sm={8}
              sx={{
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              <Typography
                noWrap
                sx={{
                  fontWeight: 700,
                  fontSize: theme.typography.pxToRem(45),
                }}
                variant="h1"
              >
                17<sup>°</sup>
              </Typography>
              <Typography
                noWrap
                sx={{
                  pt: 1,
                  pb: 0.5,
                }}
                variant="h5"
              >
                {t('Rain Shower')}
              </Typography>
              <Typography
                fontWeight={400}
                noWrap
                variant="h6"
              >
                Today, {format(new Date(), 'MMM dd yyyy')}
              </Typography>
              <Box
                display="flex"
                pt={2}
                justifyContent={{ xs: 'center', sm: 'flex-start' }}
                alignItems="center"
              >
                <MyLocationTwoToneIcon />
                <Typography
                  sx={{
                    pl: 1,
                  }}
                  noWrap
                >
                  Berlin, Germany
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <DividerWrapper
            sx={{
              mt: 2,
            }}
          />

          <Stack
            py={1}
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
            divider={<DividerWrapper flexItem />}
          >
            <Box
              display="flex"
              width="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                sx={{
                  width: 65,
                }}
              >
                <Typography
                  fontWeight={400}
                  variant="h5"
                >
                  {format(addDays(new Date(), 1), 'MMM dd')}
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                px={2}
              >
                <WbSunnyTwoToneIcon />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: alpha(theme.palette.common.white, 0.5),
                  }}
                  variant="h5"
                >
                  10<sup>°</sup>
                </Typography>
              </Box>
              <Box
                mx={1}
                sx={{
                  width: '35%',
                }}
              >
                <LinearHighLow />
              </Box>
              <Box>
                <Typography variant="h5">
                  21<sup>°</sup>
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              width="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                sx={{
                  width: 65,
                }}
              >
                <Typography
                  fontWeight={400}
                  variant="h5"
                >
                  {format(addDays(new Date(), 2), 'MMM dd')}
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                px={2}
              >
                <GrainTwoToneIcon />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: alpha(theme.palette.common.white, 0.5),
                  }}
                  variant="h5"
                >
                  13<sup>°</sup>
                </Typography>
              </Box>
              <Box
                mx={1}
                sx={{
                  width: '35%',
                }}
              >
                <LinearHighLow />
              </Box>
              <Box>
                <Typography variant="h5">
                  18<sup>°</sup>
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              width="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                sx={{
                  width: 65,
                }}
              >
                <Typography
                  fontWeight={400}
                  variant="h5"
                >
                  {format(addDays(new Date(), 3), 'MMM dd')}
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                px={2}
              >
                <AirTwoToneIcon />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: alpha(theme.palette.common.white, 0.5),
                  }}
                  variant="h5"
                >
                  12<sup>°</sup>
                </Typography>
              </Box>
              <Box
                mx={1}
                sx={{
                  width: '35%',
                }}
              >
                <LinearHighLow />
              </Box>
              <Box>
                <Typography variant="h5">
                  17<sup>°</sup>
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              width="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                sx={{
                  width: 65,
                }}
              >
                <Typography
                  fontWeight={400}
                  variant="h5"
                >
                  {format(addDays(new Date(), 4), 'MMM dd')}
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                px={2}
              >
                <WbSunnyTwoToneIcon />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: alpha(theme.palette.common.white, 0.5),
                  }}
                  variant="h5"
                >
                  12<sup>°</sup>
                </Typography>
              </Box>
              <Box
                mx={1}
                sx={{
                  width: '35%',
                }}
              >
                <LinearHighLow />
              </Box>
              <Box>
                <Typography variant="h5">
                  16<sup>°</sup>
                </Typography>
              </Box>
            </Box>
          </Stack>
          <DividerWrapper
            sx={{
              mb: 2,
            }}
          />
          <ButtonLight fullWidth>{t('View 10-day forecast')}</ButtonLight>
        </BoxWeather>
      </WeatherBoxContent>
    </WeatherBox>
  );
}

export default WeatherWeekly;
