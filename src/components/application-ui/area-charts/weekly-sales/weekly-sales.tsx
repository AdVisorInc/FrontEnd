import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import {
  Box,
  Button,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';
import { LinearProgressSlim } from 'src/components/base/styles/progress-bar';

const laptopSales = [8531, 9509, 5143, 12614, 6318, 6048, 9684];
const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <Box
        p={{ xs: 2, sm: 3 }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="h4">{t('Weekly sales')}</Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {t('Reports for what we sold this week')}
          </Typography>
        </Box>
        <IconButton color="primary">
          <MoreVertTwoToneIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box
        px={{ xs: 2, sm: 3, lg: 4, xl: 5 }}
        pt={{ xs: 2, sm: 3, lg: 4, xl: 5 }}
      >
        <Typography
          variant="h1"
          fontWeight={700}
          sx={{
            mb: { xs: 2, sm: 3, lg: 4, xl: 5 },
          }}
        >
          <CountUp
            start={0}
            end={487.385}
            duration={4}
            separator=""
            delay={3}
            decimals={3}
            decimal=","
            prefix="$"
            suffix=""
          />
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 6 }}
        >
          <Grid
            xs={12}
            md={4}
            sm={6}
          >
            <Typography variant="h3">14%</Typography>
            <LinearProgressSlim
              color="error"
              sx={{
                my: 1,
              }}
              variant="determinate"
              value={14}
            />
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {t('Cars')}
            </Typography>
          </Grid>
          <Grid
            xs={12}
            md={4}
            sm={6}
          >
            <Typography variant="h3">46%</Typography>
            <LinearProgressSlim
              color="success"
              sx={{
                my: 1,
              }}
              variant="determinate"
              value={46}
            />
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {t('Outdoor')}
            </Typography>
          </Grid>
          <Grid
            xs={12}
            md={4}
            sm={12}
          >
            <Typography variant="h3">40%</Typography>
            <LinearProgressSlim
              color="warning"
              sx={{
                my: 1,
              }}
              variant="determinate"
              value={40}
            />
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {t('Electronics')}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <LineChart
        height={240}
        leftAxis={null}
        margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
        bottomAxis={null}
        slotProps={{ legend: { hidden: true } }}
        series={[
          {
            data: laptopSales,
            label: 'Laptop sales',
            area: true,
            color: theme.palette.info.main,
            showMark: false,
          },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        sx={{
          '.MuiLineElement-root': {
            strokeWidth: 3,
          },

          '.MuiAreaElement-root': {
            fill: "url('#infoGradient')",
            fillOpacity: theme.palette.mode === 'dark' ? 0.66 : 1,
          },
        }}
      >
        <defs>
          <linearGradient
            id="infoGradient"
            gradientTransform="rotate(90)"
          >
            <stop
              offset="0%"
              stopColor={theme.palette.info.main}
            />
            <stop
              offset="100%"
              stopColor={theme.palette.background.paper}
            />
          </linearGradient>
        </defs>
      </LineChart>
      <Box
        p={2}
        sx={{
          textAlign: 'center',
        }}
      >
        <Button
          variant="outlined"
          endIcon={<ArrowForwardTwoToneIcon />}
        >
          {t('View complete report')}
        </Button>
      </Box>
    </Card>
  );
}

export default Component;
