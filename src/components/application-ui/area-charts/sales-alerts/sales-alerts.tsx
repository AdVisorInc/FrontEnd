import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import {
  Box,
  Card,
  Chip,
  Unstable_Grid2 as Grid,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

const ChartOverlay = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  opacity: 0.2,
  zIndex: 5,

  '& > div': {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
  },
}));

const BoxAbsoluteOverlay = styled(Card)(() => ({
  position: 'relative',
}));

const CardContentOverlay = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 6,
  padding: theme.spacing(4, 0),
}));

const laptopSales = [8531, 9509, 5143, 12614, 6318, 6048, 9684];
const totalSales = [285483, 312000, 298500, 320000, 305000, 310000, 295000];
const newAccounts = [5843, 6000, 5700, 6200, 5900, 6100, 5800];
const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

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
        lg={4}
        md={6}
      >
        <BoxAbsoluteOverlay>
          <CardContentOverlay
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AvatarState
              useShadow
              state="secondary"
              sx={{
                height: 64,
                width: 64,
              }}
            >
              <NotificationsActiveTwoToneIcon />
            </AvatarState>
            <Typography
              variant="h1"
              sx={{
                pt: 2,
              }}
            >
              86.453
            </Typography>
            <Typography
              variant="h5"
              fontWeight={500}
              sx={{ pb: 2 }}
            >
              {t('Laptops sales')}
            </Typography>
            <Chip
              label="+145%"
              variant="outlined"
              color="success"
            />
          </CardContentOverlay>
          <ChartOverlay>
            <LineChart
              height={170}
              leftAxis={null}
              margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
              bottomAxis={null}
              slotProps={{ legend: { hidden: true } }}
              series={[
                {
                  data: laptopSales,
                  label: 'Laptop sales',
                  area: true,
                  color: theme.palette.success.main,
                  showMark: false,
                },
              ]}
              xAxis={[{ scaleType: 'point', data: xLabels }]}
              sx={{
                '.MuiLineElement-root': {
                  strokeWidth: 3,
                },

                '.MuiAreaElement-root': {
                  fill: "url('#successGradient')",
                  fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
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
                    stopColor={theme.palette.success.main}
                  />
                  <stop
                    offset="100%"
                    stopColor={theme.palette.background.paper}
                  />
                </linearGradient>
              </defs>
            </LineChart>
          </ChartOverlay>
        </BoxAbsoluteOverlay>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <BoxAbsoluteOverlay>
          <CardContentOverlay
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AvatarState
              useShadow
              state="secondary"
              sx={{
                height: 64,
                width: 64,
              }}
            >
              <MonetizationOnTwoToneIcon />
            </AvatarState>
            <Typography
              variant="h1"
              sx={{
                pt: 2,
              }}
            >
              285.483
            </Typography>
            <Typography
              variant="h5"
              fontWeight={500}
              sx={{ pb: 2 }}
            >
              {t('Total sales')}
            </Typography>
            <Chip
              label="-23%"
              variant="outlined"
              color="error"
            />
          </CardContentOverlay>
          <ChartOverlay>
            <LineChart
              height={170}
              leftAxis={null}
              margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
              bottomAxis={null}
              slotProps={{ legend: { hidden: true } }}
              series={[
                {
                  data: totalSales,
                  label: 'Total sales',
                  area: true,
                  color: theme.palette.error.main,
                  showMark: false,
                },
              ]}
              xAxis={[{ scaleType: 'point', data: xLabels }]}
              sx={{
                '.MuiLineElement-root': {
                  strokeWidth: 3,
                },
                '.MuiAreaElement-root': {
                  fill: "url('#errorGradient')",
                  fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
                },
              }}
            >
              <defs>
                <linearGradient
                  id="errorGradient"
                  gradientTransform="rotate(90)"
                >
                  <stop
                    offset="0%"
                    stopColor={theme.palette.error.main}
                  />
                  <stop
                    offset="100%"
                    stopColor={theme.palette.background.paper}
                  />
                </linearGradient>
              </defs>
            </LineChart>
          </ChartOverlay>
        </BoxAbsoluteOverlay>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <BoxAbsoluteOverlay>
          <CardContentOverlay
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AvatarState
              useShadow
              state="secondary"
              sx={{
                height: 64,
                width: 64,
              }}
            >
              <AssignmentIndTwoToneIcon />
            </AvatarState>
            <Typography
              variant="h1"
              sx={{
                pt: 2,
              }}
            >
              5843
            </Typography>
            <Typography
              variant="h5"
              fontWeight={500}
              sx={{ pb: 2 }}
            >
              {t('New accounts')}
            </Typography>
            <Typography variant="h4">
              <Chip
                variant="outlined"
                label="24%"
                color="success"
              />
            </Typography>
          </CardContentOverlay>
          <ChartOverlay>
            <LineChart
              height={170}
              leftAxis={null}
              margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
              bottomAxis={null}
              slotProps={{ legend: { hidden: true } }}
              series={[
                {
                  data: newAccounts,
                  label: 'Total sales',
                  area: true,
                  color: theme.palette.success.main,
                  showMark: false,
                },
              ]}
              xAxis={[{ scaleType: 'point', data: xLabels }]}
              sx={{
                '.MuiLineElement-root': {
                  strokeWidth: 3,
                },

                '.MuiAreaElement-root': {
                  fill: "url('#successGradient')",
                  fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
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
                    stopColor={theme.palette.success.main}
                  />
                  <stop
                    offset="100%"
                    stopColor={theme.palette.background.paper}
                  />
                </linearGradient>
              </defs>
            </LineChart>
          </ChartOverlay>
        </BoxAbsoluteOverlay>
      </Grid>
    </Grid>
  );
}

export default Component;
