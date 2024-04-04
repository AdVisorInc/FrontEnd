import CloseIcon from '@mui/icons-material/Close';
import {
  Alert,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  IconButton,
  useTheme,
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { formatDistance, subMinutes } from 'date-fns';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: 'Jan',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'Fev',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: 'Mar',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: 'Apr',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: 'June',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: 'July',
  },
];

const valueFormatter = (value: number) => `${value}mm`;

function ResourcesAlarm() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        action={
          <Button
            variant="contained"
            size="small"
          >
            {t('Run diagnostics')}
          </Button>
        }
        title={t('Resources Alarm')}
        subheaderTypographyProps={{ noWrap: true }}
        subheader={
          <>
            {t('Server load snapshot from')}{' '}
            {formatDistance(subMinutes(new Date(), 13), new Date(), {
              addSuffix: true,
            })}
          </>
        }
      />
      <Divider />
      <CardContent>
        <BarChart
          height={260}
          layout="horizontal"
          margin={{ left: 4, bottom: 36, top: 24, right: 12 }}
          dataset={dataset}
          colors={[theme.palette.primary.main]}
          leftAxis={null}
          yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
          series={[{ dataKey: 'seoul', label: 'Seoul snapshot', valueFormatter }]}
          sx={{
            '.MuiBarElement-root': {
              fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
              rx: theme.shape.borderRadius / 1.5,
              fill: "url('#successGradient')",
            },
          }}
        >
          <defs>
            <linearGradient
              id="successGradient"
              gradientTransform="rotate(0)"
            >
              <stop
                offset="0%"
                stopColor={theme.palette.primary.light}
              />
              <stop
                offset="100%"
                stopColor={theme.palette.primary.dark}
              />
            </linearGradient>
          </defs>
        </BarChart>
        <Collapse in={open}>
          <Alert
            sx={{
              '.MuiAlert-message': {
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              },
            }}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            severity="error"
          >
            {t('Your server is overloaded, fix it as soon as possible!')}
          </Alert>
        </Collapse>
      </CardContent>
    </Card>
  );
}

export default ResourcesAlarm;
