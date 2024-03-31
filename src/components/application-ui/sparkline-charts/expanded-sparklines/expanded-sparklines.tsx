import {
  alpha,
  Box,
  Button,
  Card,
  Unstable_Grid2 as Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useTranslation } from 'react-i18next';

const generateRandomData = (): number[] =>
  Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card>
          <Box
            px={{ xs: 2, sm: 3 }}
            pt={{ xs: 2, sm: 3 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h1">789</Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{
                  fontSize: theme.typography.pxToRem(17),
                }}
              >
                {t('Total Orders')}
              </Typography>
            </Box>
            <Button
              variant="outlined"
              size="small"
              sx={{
                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              {t('View all')}
            </Button>
          </Box>
          <Box p={1}>
            <SparkLineChart
              data={generateRandomData()}
              height={120}
              showTooltip
              curve="natural"
              margin={{ top: 12, bottom: 12, left: 12, right: 12 }}
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
              sx={{ '.MuiLineElement-root': { strokeWidth: 3, strokeLinecap: 'round' } }}
            />
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card
          sx={{
            background: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%) !important',
          }}
        >
          <Box
            px={{ xs: 2, sm: 3 }}
            pt={{ xs: 2, sm: 3 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                variant="h1"
                sx={{
                  color: theme.palette.common.white,
                }}
              >
                576
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{
                  color: alpha(theme.palette.common.white, 0.7),
                  fontSize: theme.typography.pxToRem(17),
                }}
              >
                {t('Total Visitors')}
              </Typography>
            </Box>
          </Box>
          <Box p={1}>
            <SparkLineChart
              data={generateRandomData()}
              height={120}
              curve="natural"
              margin={{ top: 12, bottom: 12, left: 12, right: 12 }}
              colors={[theme.palette.common.white]}
              sx={{ '.MuiLineElement-root': { strokeWidth: 3, strokeLinecap: 'round' } }}
            />
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card
          sx={{
            background: theme.palette.error.main,
          }}
        >
          <Box
            px={{ xs: 2, sm: 3 }}
            pt={{ xs: 2, sm: 3 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                variant="h1"
                sx={{
                  color: theme.palette.common.white,
                }}
              >
                183,954
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{
                  color: alpha(theme.palette.common.white, 0.7),
                  fontSize: theme.typography.pxToRem(17),
                }}
              >
                {t('Total Deliveries')}
              </Typography>
            </Box>
          </Box>
          <Box p={1}>
            <SparkLineChart
              data={generateRandomData()}
              height={120}
              curve="natural"
              margin={{ top: 12, bottom: 12, left: 12, right: 12 }}
              colors={[theme.palette.common.white]}
              sx={{ '.MuiLineElement-root': { strokeWidth: 3, strokeLinecap: 'round' } }}
            />
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card
          sx={{
            background: 'linear-gradient(135deg, #97ABFF 10%, #123597 100%)',
          }}
        >
          <Box
            px={{ xs: 2, sm: 3 }}
            pt={{ xs: 2, sm: 3 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box>
              <Typography
                variant="h1"
                sx={{
                  color: theme.palette.common.white,
                }}
              >
                $13,253
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{
                  color: alpha(theme.palette.common.white, 0.7),
                  fontSize: theme.typography.pxToRem(17),
                }}
              >
                {t('Total Budget')}
              </Typography>
            </Box>
          </Box>
          <Box p={1}>
            <SparkLineChart
              data={generateRandomData()}
              height={120}
              curve="natural"
              margin={{ top: 12, bottom: 12, left: 12, right: 12 }}
              colors={[theme.palette.common.white]}
              sx={{ '.MuiLineElement-root': { strokeWidth: 3, strokeLinecap: 'round' } }}
            />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
