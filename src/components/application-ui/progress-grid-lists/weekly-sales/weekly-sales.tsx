import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import {
  alpha,
  Box,
  Card,
  Divider,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTranslation } from 'react-i18next';
import {
  LinearProgress1,
  LinearProgress2,
  LinearProgress3,
} from '../gradient-horizontal-progress/gradient-horizontal-progress';

const generateRandomData = (): number[] =>
  Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000));

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

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Card>
      <Box
        p={{ xs: 2, sm: 3 }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="h4">{t('Weekly Sales')}</Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {t('Reports for what we sold this week')}
          </Typography>
        </Box>
        <IconButton
          size="small"
          color="secondary"
        >
          <MoreVertTwoToneIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box
        p={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <LineChart
          height={180}
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
      </Box>
      <Divider />
      <Box py={2}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          divider={
            <Divider
              flexItem
              orientation={smUp ? 'vertical' : 'horizontal'}
            />
          }
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Box
            p={{ xs: 2, sm: 3 }}
            flex={1}
            width="100%"
          >
            <Typography
              variant="h3"
              fontWeight={600}
            >
              76%
            </Typography>
            <LinearProgress1
              sx={{
                my: 1,
              }}
              variant="determinate"
              value={76}
            />
            <Typography
              color="text.secondary"
              variant="subtitle1"
            >
              {t('Sales')}
            </Typography>
          </Box>
          <Box
            p={{ xs: 2, sm: 3 }}
            flex={1}
            width="100%"
          >
            <Typography
              color="error.main"
              variant="h3"
            >
              43%
            </Typography>
            <LinearProgress2
              sx={{
                my: 1,
              }}
              variant="determinate"
              value={43}
            />
            <Typography
              color="text.secondary"
              variant="subtitle1"
            >
              {t('Profiles')}
            </Typography>
          </Box>
          <Box
            p={{ xs: 2, sm: 3 }}
            flex={1}
            width="100%"
          >
            <Typography
              variant="h3"
              fontWeight={600}
            >
              59%
            </Typography>
            <LinearProgress3
              sx={{
                my: 1,
              }}
              variant="determinate"
              value={59}
            />
            <Typography
              color="text.secondary"
              variant="subtitle1"
            >
              {t('Tickets')}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}

export default Component;
