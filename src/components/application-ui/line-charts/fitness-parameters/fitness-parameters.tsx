import DirectionsRunTwoToneIcon from '@mui/icons-material/DirectionsRunTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import PoolTwoToneIcon from '@mui/icons-material/PoolTwoTone';
import { Box, Card, Unstable_Grid2 as Grid, Typography, useTheme } from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

function Parameters() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        sm={6}
        md={4}
        xs={12}
      >
        <Card
          sx={{
            p: 2,
            overflow: 'visible',
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <AvatarState
                state="success"
                isSoft
                sx={{
                  mr: 1,
                }}
              >
                <FavoriteTwoToneIcon fontSize="small" />
              </AvatarState>
              <Typography variant="h5">{t('Heart Rate')}</Typography>
            </Box>
            <Box>
              <Typography
                align="right"
                lineHeight={1}
                variant="h3"
              >
                65
              </Typography>
              <Typography
                align="right"
                variant="subtitle2"
                color="text.secondary"
              >
                {t('bpm')}
              </Typography>
            </Box>
          </Box>
          <SparkLineChart
            data={[22, 15, 19, 7, 13, 1, 18]}
            height={120}
            margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
            curve="step"
            sx={{
              '&:hover': {
                '.MuiLineElement-root': { strokeDasharray: '2 8', strokeWidth: 4 },
              },
              '.MuiLineElement-root': {
                stroke: "url('#successGradient')",
                fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
                strokeWidth: 3,
                strokeLinecap: 'round',
              },
            }}
          >
            <defs>
              <linearGradient id="successGradient">
                <stop
                  offset="0%"
                  stopColor={theme.palette.error.main}
                />
                <stop
                  offset="35%"
                  stopColor={theme.palette.warning.main}
                />
                <stop
                  offset="70%"
                  stopColor={theme.palette.info.main}
                />
                <stop
                  offset="100%"
                  stopColor={theme.palette.success.main}
                />
              </linearGradient>
            </defs>
          </SparkLineChart>
        </Card>
      </Grid>
      <Grid
        sm={6}
        md={4}
        xs={12}
      >
        <Card
          sx={{
            p: 2,
            overflow: 'visible',
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <AvatarState
                state="error"
                sx={{
                  mr: 1,
                }}
              >
                <DirectionsRunTwoToneIcon fontSize="small" />
              </AvatarState>
              <Typography variant="h5">{t('Running')}</Typography>
            </Box>
            <Box>
              <Typography
                align="right"
                lineHeight={1}
                variant="h3"
              >
                15
              </Typography>
              <Typography
                align="right"
                variant="subtitle2"
                color="text.secondary"
              >
                {t('km/h')}
              </Typography>
            </Box>
          </Box>
          <SparkLineChart
            data={[1, 4, 2, 5, 7, 2, 4, 6]}
            height={120}
            margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
            curve="step"
            sx={{
              '&:hover': {
                '.MuiLineElement-root': { strokeDasharray: '2 8', strokeWidth: 4 },
              },
              '.MuiLineElement-root': {
                stroke: "url('#successGradient')",
                fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
                strokeWidth: 3,
                strokeLinecap: 'round',
              },
            }}
          >
            <defs>
              <linearGradient id="successGradient">
                <stop
                  offset="0%"
                  stopColor={theme.palette.error.main}
                />
                <stop
                  offset="35%"
                  stopColor={theme.palette.warning.main}
                />
                <stop
                  offset="70%"
                  stopColor={theme.palette.info.main}
                />
                <stop
                  offset="100%"
                  stopColor={theme.palette.success.main}
                />
              </linearGradient>
            </defs>
          </SparkLineChart>
        </Card>
      </Grid>
      <Grid
        md={4}
        xs={12}
      >
        <Card
          sx={{
            p: 2,
            overflow: 'visible',
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <AvatarState
                isSoft
                state="info"
                sx={{
                  mr: 1,
                }}
              >
                <PoolTwoToneIcon fontSize="small" />
              </AvatarState>
              <Typography variant="h5">{t('Swimming')}</Typography>
            </Box>
            <Box>
              <Typography
                align="right"
                lineHeight={1}
                variant="h3"
              >
                12
              </Typography>
              <Typography
                align="right"
                variant="subtitle2"
                color="text.secondary"
              >
                {t('miles')}
              </Typography>
            </Box>
          </Box>
          <SparkLineChart
            data={[11, 73, 19, 14, 70, 17, 10]}
            height={120}
            margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
            curve="step"
            sx={{
              '&:hover': {
                '.MuiLineElement-root': { strokeDasharray: '2 8', strokeWidth: 4 },
              },
              '.MuiLineElement-root': {
                stroke: "url('#successGradient')",
                fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
                strokeWidth: 3,
                strokeLinecap: 'round',
              },
            }}
          >
            <defs>
              <linearGradient id="successGradient">
                <stop
                  offset="0%"
                  stopColor={theme.palette.error.main}
                />
                <stop
                  offset="35%"
                  stopColor={theme.palette.warning.main}
                />
                <stop
                  offset="70%"
                  stopColor={theme.palette.info.main}
                />
                <stop
                  offset="100%"
                  stopColor={theme.palette.success.main}
                />
              </linearGradient>
            </defs>
          </SparkLineChart>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Parameters;
