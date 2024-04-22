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
import Skeleton from '@mui/material/Skeleton';
import { LineChart } from '@mui/x-charts/LineChart';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import {
  eachDayOfInterval,
  endOfMonth,
  endOfYear,
  format,
  startOfDay,
  startOfMonth,
  startOfYear,
  subDays,
  subMonths,
  subYears,
} from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchPerformanceData, fetchPerformanceGraphData } from 'src/slices/analytics';
import { useDispatch, useSelector } from 'src/store';

function PerformanceMetrics() {
  const { t } = useTranslation();
  const [audienceInitial, setInitialAudience] = useState('Impressions'); // Initially selected audience
  const dispatch = useDispatch();
  const { data, isLoaded, error } = useSelector((state) => state.analyticsPerformance);
  const { dataGraph, isLoadedGraph, errorGraph } = useSelector(
    (state) => state.analyticsPerformanceGraph
  );

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
      value: 'this_month',
      text: t('This month'),
    },
    {
      value: 'last_month',
      text: t('Last month'),
    },
    {
      value: 'this_year',
      text: t('This year'),
    },
    {
      value: 'last_year',
      text: t('Last year'),
    },
  ];

  const periodsToText = {
    today: t('Today'),
    yesterday: t('Yesterday'),
    this_month: t('This month'),
    last_month: t('Last month'),
    this_year: t('This year'),
    last_year: t('Last year'),
  };

  const [selectedPeriod, setSelectedPeriod] = useState(periods[2].value);
  const [selectedAudienceData, setSelectedAudienceData] = useState([]);
  const [xAxisLabels, setXAxisLabels] = useState([]);

  const generateDateLabels = (period) => {
    const today = new Date();
    let start, end;

    switch (selectedPeriod) {
      case 'today':
        start = end = startOfDay(today);
        break;
      case 'yesterday':
        start = end = startOfDay(subDays(today, 1));
        break;
      case 'this_month':
        start = startOfMonth(today);
        end = new Date();
        break;
      case 'last_month':
        start = startOfDay(startOfMonth(subMonths(today, 1)));
        end = endOfMonth(start);
        break;
      case 'this_year':
        start = startOfDay(startOfYear(today));
        end = today;
        break;
      case 'last_year':
        start = startOfDay(startOfYear(subYears(today, 1)));
        end = endOfYear(start);
        break;
      default:
        start = startOfDay(today.setDate(1));
        end = today;
    }

    const dates = eachDayOfInterval({ start, end }).map((day) => format(day, 'MMM d'));
    setXAxisLabels(dates);
  };

  useEffect(() => {
    if (selectedPeriod) {
      dispatch(fetchPerformanceData(selectedPeriod));
      dispatch(fetchPerformanceGraphData(selectedPeriod));
    }
  }, [selectedPeriod, dispatch]); // Include selectedPeriod in dependency array

  useEffect(() => {
    if (dataGraph) {
      updateChartData('impressions'); // Default to impressions or any other metric
    }
  }, [dataGraph, xAxisLabels]);

  // Effect to set initial data for selectedAudienceData
  useEffect(() => {
    if (dataGraph && audienceInitial) {
      updateChartData(audienceInitial.toLowerCase());
    }
  }, [dataGraph, audienceInitial]);

  useEffect(() => {
    generateDateLabels(selectedPeriod);
  }, [selectedPeriod]);

  // Handle period menu selection
  const handlePeriodChange = (period) => {
    setSelectedPeriod(period.value);
    setOpenMenuPeriod(false);
  };

  const updateChartData = (metric) => {
    const rawData = dataGraph[metric] || [];
    const paddedData = new Array(xAxisLabels.length - rawData.length).fill(null); // Create an array of nulls for padding
    const metricData = paddedData.concat(rawData); // Concatenate paddedData and rawData to align with xAxisLabels
    console.log(metricData);
    console.log('HERE');
    setSelectedAudienceData(metricData);
  };

  const audiences = [
    {
      value: 'impressions',
      text: t('Impressions'),
    },
    {
      value: 'clicks',
      text: t('Clicks'),
    },
    {
      value: 'ctr',
      text: t('CTR'),
    },
    {
      value: 'cpc',
      text: t('CPC'),
    },
    {
      value: 'cpm',
      text: t('CPM'),
    },
    {
      value: 'views',
      text: t('Views'),
    },
  ];

  interface AudienceData {
    title: string;
    value: string | number;
    sparkLineData: number[];
  }

  const audienceData: AudienceData[] = [
    {
      title: t('Impresions'),
      value: data?.impressions ? data?.impressions : 'N/A',
      sparkLineData: dataGraph?.impressions ? dataGraph?.impressions : [0],
    },
    {
      title: t('Clicks'),
      value: data?.clicks ? data?.clicks : 'N/A',
      sparkLineData: dataGraph?.clicks ? dataGraph?.clicks : [0],
    },
    {
      title: t('CTR'),
      value: data?.ctr ? parseFloat(data.ctr).toFixed(2) + '%' : 'N/A',
      sparkLineData: dataGraph?.ctr ? dataGraph?.ctr : [0],
    },
    {
      title: t('CPC'),
      value: data?.cpc ? '$' + parseFloat(data.cpc).toFixed(2) : 'N/A',
      sparkLineData: dataGraph?.cpc ? dataGraph?.cpc : [0],
    },
    {
      title: t('CPM'),
      value: data?.cpm ? '$' + parseFloat(data.cpm).toFixed(2) : 'N/A',
      sparkLineData: dataGraph?.cpm ? dataGraph?.cpm : [0],
    },
    {
      title: t('Views'),
      value: 'N/A',
      sparkLineData: [0],
    },
  ];

  const salesData = [0];
  const expenseData = [0];
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
              {periodsToText[selectedPeriod]}
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
                    handlePeriodChange(_period);
                  }}
                >
                  {_period.text}
                </MenuItem>
              ))}
            </Menu>
          </>
        }
        title={t('Performance Metrics')}
      />
      <Divider />

      {!isLoaded ? (
        <CardContent>
          <Skeleton
            variant="text"
            width="40%"
            height={30}
          />
          <Skeleton
            variant="rectangular"
            height={118}
            animation="wave"
          />
          <Skeleton
            variant="text"
            width="60%"
            height={30}
          />
          <Grid
            container
            spacing={3}
          >
            {Array.from(new Array(3)).map((_, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
              >
                <Box p={2}>
                  <Skeleton
                    variant="text"
                    width="80%"
                    height={20}
                  />
                  <Skeleton
                    variant="rectangular"
                    height={60}
                  />
                  <Skeleton
                    variant="text"
                    width="50%"
                    height={20}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      ) : error ? (
        <CardContent>
          <Typography color="error">Error: {error}</Typography>
        </CardContent>
      ) : !data ? (
        <CardContent>
          <Typography>No data available.</Typography>
        </CardContent>
      ) : (
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
                  //setSelectedAudienceData(dataGraph ? dataGraph[_audience.value] : []);
                  updateChartData(_audience.value);
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
                data: selectedAudienceData,
                label: 'Current period',
                area: false,
                color: theme.palette.primary.main,
              },
            ]}
            xAxis={[
              {
                scaleType: 'point',
                data: xAxisLabels,
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
      )}

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

export default PerformanceMetrics;
