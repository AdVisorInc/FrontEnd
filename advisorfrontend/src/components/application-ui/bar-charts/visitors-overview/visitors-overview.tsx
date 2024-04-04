import { Box, Card, Unstable_Grid2 as Grid, Typography, useTheme } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTranslation } from 'react-i18next';

const pData = [2400, 1398, -9800, 3908, 4800, -3800, 4300];
const uData = [4000, -3000, -2000, 2780, -1890, 2390, 3490];

const xLabels = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'];
function VisitorsOverview() {
  const { t } = useTranslation();
  const theme = useTheme();

  const data = {
    visitors: '23.584',
    conversion: '7.23%',
    revenue: '$18.12',
  };

  return (
    <Card>
      <Box
        sx={{
          p: { xs: 2, sm: 3 },
        }}
      >
        <BarChart
          height={360}
          leftAxis={null}
          margin={{ left: 0, top: 56, right: 0 }}
          series={[
            {
              data: pData,
              label: 'pv',
              color: theme.palette.secondary.main,
              id: 'pvId',
              stack: 'stack1',
            },
            {
              data: uData,
              label: 'uv',
              color: theme.palette.info.main,
              id: 'uvId',
              stack: 'stack1',
            },
          ]}
          sx={{
            '.MuiBarElement-root': {
              fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
              rx: theme.shape.borderRadius / 2,
            },
          }}
          xAxis={[{ data: xLabels, scaleType: 'band' }]}
        />
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Grid
            spacing={{ xs: 2, sm: 3 }}
            container
          >
            <Grid
              xs={12}
              md={4}
            >
              <Typography
                variant="caption"
                color="text.secondary"
                gutterBottom
              >
                {t('Visitors')}
              </Typography>
              <Typography variant="h3">{data.visitors}</Typography>
            </Grid>
            <Grid
              xs={12}
              md={4}
            >
              <Typography
                variant="caption"
                color="text.secondary"
                gutterBottom
              >
                {t('Conversion')}
              </Typography>
              <Typography variant="h3">{data.conversion}</Typography>
            </Grid>
            <Grid
              xs={12}
              md={4}
            >
              <Typography
                variant="caption"
                color="text.secondary"
                gutterBottom
              >
                {t('Revenue/Visitor')}
              </Typography>
              <Typography variant="h3">{data.revenue}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Card>
  );
}

export default VisitorsOverview;
