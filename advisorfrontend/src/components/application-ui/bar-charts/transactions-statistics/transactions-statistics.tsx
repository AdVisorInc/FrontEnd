import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Unstable_Grid2 as Grid,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'];

function TransactionsStatistics() {
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const periods = [
    {
      value: 'current_year',
      text: t('Current Year'),
    },
    {
      value: 'last_year',
      text: t('Last Year'),
    },
    {
      value: 'all_time',
      text: t('All time'),
    },
  ];

  const data = {
    bills: '$684.00',
    income: '$3,200.00',
    expenses: '$1596.85',
    taxes: '$785.00',
  };
  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>(periods[0].text);

  return (
    <Card
      sx={{
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
      }}
    >
      <CardHeader title={t('Transactions Statistics')} />
      <Divider />
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button
            size="small"
            variant="outlined"
            ref={actionRef1}
            onClick={() => setOpenMenuPeriod(true)}
            endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
          >
            {period}
          </Button>
        </Box>
        <Menu
          disableScrollLock
          anchorEl={actionRef1.current}
          onClose={() => setOpenMenuPeriod(false)}
          open={openPeriod}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          {periods.map((_period) => (
            <MenuItem
              key={_period.value}
              onClick={() => {
                setPeriod(_period.text);
                setOpenMenuPeriod(false);
              }}
            >
              {_period.text}
            </MenuItem>
          ))}
        </Menu>

        <BarChart
          height={360}
          margin={{ top: 56, right: smUp ? 24 : 0, bottom: 24, left: smUp ? 54 : 0 }}
          series={[
            { data: pData, label: 'pv', id: 'pvId', color: theme.palette.primary.main },
            { data: uData, label: 'uv', id: 'uvId', color: theme.palette.secondary.main },
          ]}
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

        <Box
          sx={{
            py: 2,
            textAlign: 'center',
          }}
        >
          <Grid
            spacing={{ xs: 2, sm: 3 }}
            container
          >
            <Grid
              xs={12}
              sm={6}
            >
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                {t('Income')}
              </Typography>
              <Typography variant="h3">{data.income}</Typography>
            </Grid>
            <Grid
              xs={12}
              sm={6}
            >
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                {t('Expenses')}
              </Typography>
              <Typography variant="h3">{data.expenses}</Typography>
            </Grid>
            <Grid
              xs={12}
              sm={6}
            >
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                {t('Taxes')}
              </Typography>
              <Typography variant="h3">{data.taxes}</Typography>
            </Grid>
            <Grid
              xs={12}
              sm={6}
            >
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                {t('Bills')}
              </Typography>
              <Typography variant="h3">{data.bills}</Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}

export default TransactionsStatistics;
