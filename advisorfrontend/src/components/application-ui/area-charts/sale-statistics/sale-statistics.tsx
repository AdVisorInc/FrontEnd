import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Unstable_Grid2 as Grid,
  IconButton,
  styled,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTranslation } from 'react-i18next';
import { LinearProgressAlternate } from 'src/components/base/styles/progress-bar';

const CardWrapper = styled(Card)(({ theme }) => ({
  background: theme.palette.background.default,
  boxShadow: 'none',
  borderRadius: 0,
}));

const xLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const weeklySales = [100, 150, 140, 130, 160, 180, 170];
const newCustomers = [50, 55, 52, 48, 50, 65, 88];

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  const config = {
    series: [
      {
        data: weeklySales,
        label: t('Weekly Sales'),
        color: theme.palette.primary.main,
        showMark: false,
        area: true,
      },
      {
        data: newCustomers,
        label: t('New Customers'),
        color: theme.palette.success.main,
        showMark: false,
        area: true,
      },
    ],
    leftAxis: null,
    height: 320,
    sx: {
      '.MuiLineElement-root': {
        strokeWidth: 3,

        '&:nth-of-type(1)': {
          stroke: theme.palette.primary.main,
        },
        '&:nth-of-type(2)': {
          stroke: theme.palette.success.main,
        },
      },

      '.MuiAreaElement-root': {
        '&:nth-of-type(1)': {
          fill: "url('#primaryGradient')",
          fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
        },
        '&:nth-of-type(2)': {
          fill: "url('#successGradient')",
          fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
        },
      },
    },

    margin: { top: 24, bottom: 36, left: 32, right: 32 },
  };

  const salesTarget = 2500;
  const customerTarget = 250;

  const salesProgress = (weeklySales.reduce((a, b) => a + b, 0) / salesTarget) * 100;
  const customerProgress = (newCustomers.reduce((a, b) => a + b, 0) / customerTarget) * 100;

  return (
    <Card>
      <CardHeader
        sx={{
          p: { xs: 2, sm: 3 },
        }}
        disableTypography
        action={
          <IconButton
            size="small"
            color="secondary"
          >
            <MoreVertTwoToneIcon />
          </IconButton>
        }
        title={
          <>
            <Typography variant="h5">{t('Sales Statistics')}</Typography>
          </>
        }
      />
      <Divider />

      <LineChart
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        {...config}
      >
        <defs>
          <linearGradient
            id="primaryGradient"
            gradientTransform="rotate(90)"
          >
            <stop
              offset="0%"
              stopColor={theme.palette.primary.light}
            />
            <stop
              offset="100%"
              stopColor={theme.palette.background.paper}
            />
          </linearGradient>
          <linearGradient
            id="successGradient"
            gradientTransform="rotate(90)"
          >
            <stop
              offset="0%"
              stopColor={theme.palette.success.light}
            />
            <stop
              offset="100%"
              stopColor={theme.palette.background.paper}
            />
          </linearGradient>
        </defs>
      </LineChart>
      <CardWrapper
        sx={{
          p: { xs: 2, sm: 3 },
          textAlign: 'center',
        }}
      >
        <ToggleButtonGroup
          exclusive
          color="primary"
        >
          <ToggleButton
            selected
            value=""
          >
            {t('Last week')}
          </ToggleButton>
          <ToggleButton
            sx={{
              textTransform: 'none',
              py: 0.6,
              px: 1.8,
              fontWeight: 500,
            }}
            value=""
          >
            {t('Last month')}
          </ToggleButton>
        </ToggleButtonGroup>
      </CardWrapper>
      <CardContent
        sx={{
          p: { xs: 2, sm: 3 },
        }}
      >
        <Typography variant="h4">{t('Performance')}</Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
        >
          {t('Portfolio performance for selected period.')}
        </Typography>
      </CardContent>
      <Divider />
      <CardContent
        sx={{
          p: { xs: 2, sm: 3 },
        }}
      >
        <Grid
          container
          spacing={6}
        >
          <Grid
            xs={12}
            sm={6}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h5">{t('Weekly Sales')}</Typography>
              <Typography
                variant="h6"
                fontWeight={700}
                color="error.main"
              >
                {`$${weeklySales.reduce((a, b) => a + b, 0)}`}
              </Typography>
            </Box>
            <LinearProgressAlternate
              color="error"
              sx={{
                my: 1,
              }}
              variant="determinate"
              value={salesProgress}
            />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                variant="body2"
                color="text.secondary"
              >
                {t('Target')}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                100%
              </Typography>
            </Box>
          </Grid>
          <Grid
            xs={12}
            sm={6}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h5">{t('New Customers')}</Typography>
              <Typography
                variant="h6"
                fontWeight={700}
                color="success.main"
              >
                {newCustomers.reduce((a, b) => a + b, 0)}
              </Typography>
            </Box>
            <LinearProgressAlternate
              color="success"
              sx={{
                my: 1,
              }}
              variant="determinate"
              value={customerProgress}
            />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                variant="body2"
                color="text.secondary"
              >
                {t('Target')}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                100%
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Component;
