import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import {
  alpha,
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const chartValues = [100, 90, 90, 81, 35, 30, 57];
const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

const chartValues2 = [48, 75, 87, 43, 35, 82, 81];

function TasksAnalytics() {
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const periods = [
    {
      value: 'today',
      text: t('Today'),
    },
    {
      value: 'yesterday',
      text: t('Yesterday'),
    },
    {
      value: 'last_month',
      text: t('Last month'),
    },
    {
      value: 'last_year',
      text: t('Last year'),
    },
  ];

  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>(periods[3].text);

  return (
    <Box>
      <Box
        mb={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h4">{t('Tasks Analytics')}</Typography>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          ref={actionRef1}
          onClick={() => setOpenMenuPeriod(true)}
          endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
        >
          {period}
        </Button>
        <Menu
          disableScrollLock
          anchorEl={actionRef1.current}
          onClose={() => setOpenMenuPeriod(false)}
          open={openPeriod}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
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
      </Box>
      <BarChart
        height={320}
        margin={{ left: smUp ? 40 : 0, bottom: 20, top: 48, right: 0 }}
        series={[
          {
            data: chartValues,
            label: 'Completeted',
            color: theme.palette.primary.main,
          },
          {
            data: chartValues2,
            label: 'Cancelled',
            color: alpha(theme.palette.primary.light, 0.5),
          },
        ]}
        xAxis={[
          {
            scaleType: 'band',
            data: xLabels,
            //@ts-ignore
            categoryGapRatio: 0.6,
            barGapRatio: 0.9,
          },
        ]}
        sx={{
          '.MuiBarElement-root': {
            fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
            ry: theme.shape.borderRadius * 1.5,
          },
          '.MuiChartsAxis-left': {
            display: { xs: 'none', sm: 'block' },
          },
        }}
      />
    </Box>
  );
}

export default TasksAnalytics;
