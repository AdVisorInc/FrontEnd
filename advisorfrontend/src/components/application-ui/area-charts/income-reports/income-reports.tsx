import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Unstable_Grid2 as Grid,
  LinearProgress,
  Typography,
  useTheme,
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTranslation } from 'react-i18next';

const salesData = [16855, 14938, 16250, 12491, 16040, 19388, 18563];
const expenseData = [8324, 8620, 6741, 7348, 9992, 7374, 7357];
const profitData = [8531, 6318, 9509, 5143, 6048, 12614, 11206];
const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

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
            {t('Export')}
          </Button>
        }
        title={t('Income Reports')}
      />
      <Divider />
      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Grid
          container
          spacing={{ xs: 2, sm: 3 }}
        >
          <Grid
            xs={12}
            sm={6}
          >
            <Typography
              component="div"
              color="text.secondary"
              variant="h5"
            >
              {t('YoY Income')}
            </Typography>
            <Typography
              component="div"
              variant="h3"
            >
              <small>$</small> 165,594.00
            </Typography>
          </Grid>
          <Grid
            xs={12}
            sm={6}
          >
            <Typography
              component="div"
              color="text.secondary"
              variant="h5"
            >
              {t('Best Seller')}
            </Typography>
            <Typography
              component="div"
              noWrap
              variant="h4"
            >
              Macbook PRO 14 2021
            </Typography>
          </Grid>
          <Grid
            xs={12}
            sm={6}
          >
            <Typography
              component="div"
              color="text.secondary"
              variant="h5"
            >
              {t('Orders Volume')}
            </Typography>
            <Typography
              component="div"
              variant="h3"
            >
              45,954
            </Typography>
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <Typography
              component="div"
              color="text.secondary"
              variant="h5"
              sx={{
                pb: 1,
              }}
            >
              {t('Sales Target')}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  mr: 1.5,
                }}
              >
                <LinearProgress
                  color="error"
                  variant="determinate"
                  value={67.5}
                />
              </Box>
              <Box
                sx={{
                  minWidth: 35,
                }}
              >
                <Typography variant="h5">67.5%</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>

      <LineChart
        height={300}
        slotProps={{ legend: { hidden: true } }}
        leftAxis={null}
        margin={{ top: 12, bottom: 36, left: 24, right: 24 }}
        series={[
          {
            data: salesData,
            label: 'Sales',
            color: theme.palette.primary.main,
            area: true,
            showMark: false,
          },
          {
            data: expenseData,
            label: 'Expenses',
            area: false,
            color: theme.palette.error.main,
          },
          {
            data: profitData,
            label: 'Profit',
            color: theme.palette.success.main,
            area: true,
            showMark: false,
          },
        ]}
        xAxis={[
          {
            scaleType: 'point',
            data: monthLabels,
          },
        ]}
        sx={{
          '.MuiLineElement-root': {
            strokeWidth: 3,
            strokeLinecap: 'round',
            strokeOpacity: 0.8,
          },
          '.MuiHighlightElement-root': {
            scale: '1.2',
          },
          '.MuiAreaElement-root': {
            fillOpacity: 0.12,
          },
        }}
      />
    </Card>
  );
}

export default Component;
