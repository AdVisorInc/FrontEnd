import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import { Box, Card, CardHeader, Chip, Typography, useTheme } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

const dataset = [
  { electronics: 200, clothing: 150, groceries: 100, quarter: 'Q1' },
  { electronics: 180, clothing: 200, groceries: 150, quarter: 'Q2' },
  { electronics: 220, clothing: 170, groceries: 180, quarter: 'Q3' },
  { electronics: 250, clothing: 190, groceries: 160, quarter: 'Q4' },
];

const valueFormatter = (value: number) => `$${value}K`;

function TimeSpent() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        avatar={
          <AvatarState
            isSoft
            state="success"
            sx={{
              height: 44,
              width: 44,
              mb: { xs: 2, sm: 0 },
            }}
          >
            <CalendarTodayTwoToneIcon fontSize="small" />
          </AvatarState>
        }
        action={
          <Box
            display="flex"
            alignItems="center"
          >
            <Chip
              label={
                <Box
                  display="flex"
                  alignItems="center"
                >
                  <ArrowDownwardTwoToneIcon
                    fontSize="inherit"
                    sx={{ mr: 0.5 }}
                  />
                  <b>12.31%</b>
                </Box>
              }
              color="error"
            />
            <Box
              sx={{
                pl: 2.5,
              }}
            >
              <Typography
                align="center"
                variant="h4"
              >
                23h 40min
              </Typography>
              <Typography
                align="center"
                variant="subtitle2"
                color="text.secondary"
              >
                {t('total spent')}
              </Typography>
            </Box>
          </Box>
        }
        titleTypographyProps={{ variant: 'h5' }}
        title={t('Time Spent')}
      />
      <Box pb={2}>
        <BarChart
          height={300}
          layout="horizontal"
          margin={{ left: 24, top: 54, bottom: 24, right: 24 }}
          dataset={dataset}
          colors={[
            theme.palette.primary.light,
            theme.palette.secondary.light,
            theme.palette.success.light,
          ]}
          leftAxis={null}
          yAxis={[
            {
              scaleType: 'band', //@ts-ignore
              categoryGapRatio: 0.4,
              dataKey: 'quarter',
            },
          ]}
          series={[
            { dataKey: 'electronics', stack: 'total', label: 'Electronics', valueFormatter },
            { dataKey: 'clothing', stack: 'total', label: 'Clothing', valueFormatter },
            { dataKey: 'groceries', stack: 'total', label: 'Groceries', valueFormatter },
          ]}
          sx={{
            '.MuiBarElement-root': {
              fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
              rx: theme.shape.borderRadius,
              strokeWidth: 5,
              stroke: theme.palette.background.paper,
            },
          }}
        ></BarChart>
      </Box>
    </Card>
  );
}

export default TimeSpent;
