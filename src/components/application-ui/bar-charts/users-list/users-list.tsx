import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Unstable_Grid2 as Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTranslation } from 'react-i18next';
import { LinearProgressAlternate } from 'src/components/base/styles/progress-bar';

const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const Box2Data = [
    { label: 'Orders', data: [1008, 940, 1010, 821, 1035], id: 'ordersId', color: 'primary' },
    { label: 'Sales', data: [648, 745, 897, 743, 635], id: 'salesId', color: 'secondary' },
    { label: 'Users', data: [1030, 897, 463, 856, 285], id: 'usersId', color: 'info' },
    { label: 'Customers', data: [675, 386, 283, 897, 498], id: 'customersId', color: 'warning' },
  ];

  return (
    <Card>
      <CardHeader
        sx={{
          p: { xs: 2, sm: 3 },
        }}
        action={
          <Button
            size="small"
            variant="outlined"
            endIcon={<ExpandMoreTwoToneIcon />}
          >
            {t('Actions')}
          </Button>
        }
        title={t('Users list')}
      />
      <Divider />
      <CardContent
        sx={{
          p: 2,
        }}
      >
        <Box
          sx={{
            mb: 2,
          }}
        >
          <BarChart
            height={360}
            margin={{ top: 56, right: smUp ? 24 : 0, bottom: 24, left: smUp ? 54 : 0 }}
            series={Box2Data.map((series) => ({
              data: series.data,
              label: series.label,
              id: series.id,
              color: theme.palette[series.color].main,
            }))}
            xAxis={[{ data: xLabels, scaleType: 'band' }]}
            sx={{
              '.MuiBarElement-root': {
                fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
                rx: theme.shape.borderRadius / 1.5,
              },
              '.MuiChartsAxis-left': {
                display: { xs: 'none', sm: 'block' },
              },
            }}
          />
        </Box>
        <Grid
          container
          spacing={{ xs: 2, sm: 3 }}
        >
          <Grid
            xs={12}
            sm={6}
          >
            <Typography
              variant="h5"
              sx={{
                pb: 1,
              }}
            >
              {t('Orders')}
            </Typography>
            <LinearProgressAlternate
              color="primary"
              variant="determinate"
              value={35.76}
            />
            <Box
              display="flex"
              sx={{
                mt: 0.5,
              }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                component="div"
                variant="subtitle2"
                color="text.secondary"
              >
                0
              </Typography>
              <Typography
                component="div"
                variant="subtitle2"
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
            <Typography
              variant="h5"
              sx={{
                pb: 1,
              }}
            >
              {t('Sales')}
            </Typography>
            <LinearProgressAlternate
              color="success"
              variant="determinate"
              value={83.12}
            />
            <Box
              display="flex"
              sx={{
                mt: 0.5,
              }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                component="div"
                variant="subtitle2"
                color="text.secondary"
              >
                0
              </Typography>
              <Typography
                component="div"
                variant="subtitle2"
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
            <Typography
              variant="h5"
              sx={{
                pb: 1,
              }}
            >
              {t('Users')}
            </Typography>
            <LinearProgressAlternate
              color="warning"
              variant="determinate"
              value={17.98}
            />
            <Box
              display="flex"
              sx={{
                mt: 0.5,
              }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                component="div"
                variant="subtitle2"
                color="text.secondary"
              >
                0
              </Typography>
              <Typography
                component="div"
                variant="subtitle2"
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
            <Typography
              variant="h5"
              sx={{
                pb: 1,
              }}
            >
              {t('Customers')}
            </Typography>
            <LinearProgressAlternate
              color="error"
              variant="determinate"
              value={65.34}
            />
            <Box
              display="flex"
              sx={{
                mt: 0.5,
              }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                component="div"
                variant="subtitle2"
                color="text.secondary"
              >
                0
              </Typography>
              <Typography
                component="div"
                variant="subtitle2"
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
