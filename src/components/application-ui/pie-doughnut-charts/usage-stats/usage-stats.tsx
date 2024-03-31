import {
  alpha,
  Box,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';

export const GaugeChart = dynamic(() => import('react-gauge-chart'), { ssr: false });

function CpuUsage() {
  const { t } = useTranslation();
  const theme = useTheme();

  const data1 = [
    { label: 'Free', value: 400, color: alpha(theme.palette.primary.main, 0.3) },
    { label: 'Used', value: 300, color: alpha(theme.palette.primary.main, 0.5) },
    { label: 'Available', value: 300, color: alpha(theme.palette.primary.main, 0.7) },
    { label: 'Unallocated', value: 200, color: alpha(theme.palette.primary.main, 0.9) },
  ];
  const data2 = [
    { label: 'Mobile devices', value: 100, color: theme.palette.primary.main },
    { label: 'Workstations', value: 300, color: theme.palette.error.main },
    { label: 'Cloud serviers', value: 100, color: theme.palette.success.main },
  ];

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        md={5}
      >
        <Card
          sx={{
            py: 2,
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Box
            sx={{
              width: '100%',
            }}
          >
            <Typography
              align="center"
              variant="h4"
              sx={{
                mb: 2,
              }}
            >
              {t('CPU Usage')}
            </Typography>
            <Typography
              align="center"
              variant="h5"
              color="text.secondary"
              gutterBottom
            >
              {t('Today')}
            </Typography>
            <GaugeChart
              style={{ width: '90%', margin: '0 auto' }}
              nrOfLevels={16}
              hideText
              colors={[
                theme.palette.error.main,
                theme.palette.warning.main,
                theme.palette.success.main,
              ]}
              needleColor={
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.common.white, 0.5)
                  : theme.palette.neutral[400]
              }
              needleBaseColor={
                theme.palette.mode === 'dark'
                  ? theme.palette.neutral[200]
                  : theme.palette.neutral[900]
              }
              arcWidth={0.25}
              arcPadding={0.02}
              cornerRadius={3}
              percent={0.59}
            />
            <Typography
              align="center"
              variant="h3"
            >
              59%
            </Typography>
            <Divider
              sx={{
                mx: 3,
                mt: 2,
                mb: 4,
              }}
            />
            <Typography
              align="center"
              variant="h5"
              fontWeight={400}
              color="text.secondary"
              gutterBottom
            >
              {t('Yesterday')}
            </Typography>

            <GaugeChart
              style={{ width: '80%', margin: '0 auto' }}
              nrOfLevels={16}
              hideText
              colors={[
                theme.palette.primary.main,
                theme.palette.primary.light,
                theme.palette.primary.light,
              ]}
              needleColor={
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.common.white, 0.5)
                  : theme.palette.neutral[400]
              }
              needleBaseColor={
                theme.palette.mode === 'dark'
                  ? theme.palette.neutral[200]
                  : theme.palette.neutral[900]
              }
              arcWidth={0.2}
              arcPadding={0.02}
              cornerRadius={3}
              percent={0.47}
            />

            <Typography
              align="center"
              variant="h3"
            >
              47%
              <Typography
                component="span"
                variant="h5"
                sx={{ pl: 0.5 }}
                color="error.main"
              >
                ({t('bad')})
              </Typography>
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={7}
        container
        spacing={{ xs: 2, sm: 3 }}
      >
        <Grid xs={12}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              pt: { xs: 2, sm: 3 },
            }}
          >
            <Typography
              variant="h4"
              noWrap
            >
              {t('Storage Usage')}
            </Typography>
            <PieChart
              series={[
                {
                  innerRadius: 0,
                  paddingAngle: 4,
                  cornerRadius: 6,
                  outerRadius: 60,
                  data: data1,
                  highlightScope: { faded: 'series', highlighted: 'item' },
                },
                {
                  innerRadius: 80,
                  paddingAngle: 8,
                  outerRadius: 90,
                  cornerRadius: 32,
                  data: data2,
                },
              ]}
              margin={{ right: 0 }}
              height={220}
              slotProps={{
                legend: { hidden: true },
              }}
            />
          </Card>
        </Grid>
        <Grid xs={12}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              pt: { xs: 2, sm: 3 },
            }}
          >
            <Typography variant="h4">{t('Memory Usage')}</Typography>
            <PieChart
              series={[
                {
                  innerRadius: 60,
                  outerRadius: 80,
                  paddingAngle: 5,
                  cornerRadius: 8,
                  startAngle: -90,
                  endAngle: 180,
                  data: data2,
                },
              ]}
              margin={{ right: 0 }}
              height={220}
              slotProps={{
                legend: { hidden: true },
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CpuUsage;
