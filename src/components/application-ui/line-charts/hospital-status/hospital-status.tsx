import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Menu,
  MenuItem,
  useTheme,
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const generateRandomData = (): number[] =>
  Array.from({ length: 6 }, () => Math.floor(Math.random() * 1000));

const salesData = generateRandomData();
const expenseData = generateRandomData();
const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();
  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);

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

  const [period, setPeriod] = useState<string>(periods[2].text);

  return (
    <Card>
      <CardHeader
        action={
          <>
            <Button
              size="small"
              variant="outlined"
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
          </>
        }
        title={t('Overall Status')}
      />
      <Divider />
      <CardContent>
        <LineChart
          height={236}
          leftAxis={null}
          slotProps={{
            legend: {
              labelStyle: {
                fontWeight: 500,
              },
              itemMarkWidth: 12,
              itemMarkHeight: 12,
              markGap: 6,
              itemGap: 12,
              position: { vertical: 'top', horizontal: 'right' },
              padding: { bottom: 12 },
            },
          }}
          margin={{ top: 46, bottom: 36, left: 10, right: 10 }}
          series={[
            {
              data: expenseData,
              label: 'Current period',
              curve: 'monotoneY',
              color: theme.palette.primary.main,
            },
            {
              data: salesData,
              label: 'Previous period',

              curve: 'monotoneY',
              color: theme.palette.success.main,
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
              strokeLinecap: 'round',

              '&:nth-of-type(1)': {
                strokeWidth: 2,
              },
              '&:nth-of-type(2)': {
                strokeWidth: 4,
                strokeOpacity: 0.8,
              },
            },
            '.MuiChartsLegend-mark': {
              rx: theme.shape.borderRadius,
            },
            '.MuiHighlightElement-root': {
              scale: '1.2',
              strokeWidth: 4,
              fill: theme.palette.background.paper,
              '&:nth-of-type(1)': {
                stroke: theme.palette.primary.main,
              },
              '&:nth-of-type(2)': {
                stroke: theme.palette.success.main,
              },
            },
            '.MuiMarkElement-root': {
              scale: '1.2',
              strokeWidth: 2,
            },
          }}
        />
      </CardContent>
    </Card>
  );
}

export default Component;
