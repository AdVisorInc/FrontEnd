import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import {
  alpha,
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
  useTheme,
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

function AudienceOverview() {
  const { t } = useTranslation();

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
  const audiences = [
    {
      value: 'users',
      text: t('Users'),
    },
    {
      value: 'new_users',
      text: t('New users'),
    },
    {
      value: 'page_views',
      text: t('Page views'),
    },
    {
      value: 'avg_session_duration',
      text: t('Avg. session duration'),
    },
    {
      value: 'bounce_rate',
      text: t('Bounce rate'),
    },
    {
      value: 'sessions',
      text: t('Sessions'),
    },
  ];

  interface AudienceData {
    title: string;
    value: string | number;
    sparkLineData: number[];
  }

  const generateRandomData = (): number[] =>
    Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000));

  const audienceData: AudienceData[] = [
    {
      title: t('Users'),
      value: '14.586',
      sparkLineData: generateRandomData(),
    },
    {
      title: t('Page Views'),
      value: '67.492',
      sparkLineData: generateRandomData(),
    },
    {
      title: t('New Users'),
      value: '12.847',
      sparkLineData: generateRandomData(),
    },
    {
      title: t('Sessions'),
      value: '25.694',
      sparkLineData: generateRandomData(),
    },
    {
      title: t('Avg. Session Duration'),
      value: '03:21 min',
      sparkLineData: generateRandomData(),
    },
    {
      title: t('Bounce Rate'),
      value: '65.37%',
      sparkLineData: generateRandomData(),
    },
  ];

  const salesData = generateRandomData();
  const expenseData = generateRandomData();
  const monthLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const actionRef1 = useRef<any>(null);
  const actionRef2 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [openAudience, setOpenMenuAudience] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>(periods[3].text);
  const [audience, setAudience] = useState<string>(audiences[1].text);
  const theme = useTheme();
  const colWidth = { xs: 12, sm: 6, md: 4, lg: 4 } as const;

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
        title={t('Audience Overview')}
      />
      <Divider />
      <CardContent>
        <Button
          size="small"
          variant="outlined"
          ref={actionRef2}
          onClick={() => setOpenMenuAudience(true)}
          endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
        >
          {audience}
        </Button>
        <Menu
          disableScrollLock
          anchorEl={actionRef2.current}
          onClose={() => setOpenMenuAudience(false)}
          open={openAudience}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          {audiences.map((_audience) => (
            <MenuItem
              key={_audience.value}
              onClick={() => {
                setAudience(_audience.text);
                setOpenMenuAudience(false);
              }}
            >
              {_audience.text}
            </MenuItem>
          ))}
        </Menu>
        <LineChart
          height={260}
          slotProps={{ legend: { hidden: true } }}
          leftAxis={null}
          bottomAxis={null}
          margin={{ top: 12, bottom: 12, left: 6, right: 6 }}
          series={[
            {
              data: expenseData,
              label: 'Current period',
              area: false,
              color: theme.palette.primary.main,
            },
            {
              data: salesData,
              label: 'Previous period',
              area: false,
              showMark: false,
              color: theme.palette.error.main,
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
                strokeWidth: 4,
                strokeDasharray: '4 8',
              },
              '&:nth-of-type(2)': {
                strokeOpacity: 0.8,
              },
            },
            '.MuiHighlightElement-root': {
              scale: '1.2',
            },
          }}
        />
      </CardContent>
      <Divider />
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Grid
          container
          sx={(theme) => ({
            '--Grid-borderWidth': '1px',
            borderColor: 'divider',
            '& > div': {
              borderRight: 'var(--Grid-borderWidth) solid',
              borderBottom: 'var(--Grid-borderWidth) solid',
              borderColor: 'divider',
              ...(Object.keys(colWidth) as Array<keyof typeof colWidth>).reduce(
                (result, key) => ({
                  ...result,
                  [`&:nth-of-type(${12 / colWidth[key]}n)`]: {
                    [theme.breakpoints.only(key)]: {
                      borderRight: 'none',
                    },
                  },
                }),
                {}
              ),
            },
          })}
        >
          {audienceData.map((item, index) => (
            <Grid
              xs={12}
              sm={6}
              md={4}
              key={index}
            >
              <Box p={2}>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  {t(item.title)}
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight={500}
                >
                  {item.value}
                </Typography>
                <SparkLineChart
                  data={item.sparkLineData}
                  height={65}
                  colors={[theme.palette.primary.main]}
                  sx={{ '.MuiLineElement-root': { strokeWidth: 2, strokeLinecap: 'round' } }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Card>
  );
}

export default AudienceOverview;
