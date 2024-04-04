import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTranslation } from 'react-i18next';

interface ListItemData {
  value: number;
  titleKey: string;
}

const itemsData: ListItemData[] = [
  {
    titleKey: 'Monday',
    value: 435,
  },
  {
    titleKey: 'Tuesday',
    value: 724,
  },
  {
    titleKey: 'Wednesday',
    value: 643,
  },
  {
    titleKey: 'Thursday',
    value: 709,
  },
  {
    titleKey: 'Friday',
    value: 751,
  },
  {
    titleKey: 'Saturday',
    value: 744,
  },
  {
    titleKey: 'Sunday',
    value: 765,
  },
];

const chartValues = itemsData.map((item) => item.value);
const xLabels = itemsData.map((item) => item.titleKey);

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardHeader
        sx={{
          p: 2,
        }}
        titleTypographyProps={{
          variant: 'h4',
        }}
        action={
          <Button
            size="small"
            variant="contained"
          >
            {'View all'}
          </Button>
        }
        title={t('Reports')}
      />
      <Divider />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        divider={
          <Divider
            orientation="vertical"
            flexItem
          />
        }
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Box
          sx={{
            width: '100%',
          }}
          p={{ xs: 2, sm: 3 }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h5">{t('Reports')}</Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              {t('Monthly sales reports')}
            </Typography>
          </Box>
          <Typography
            variant="h4"
            color="error.main"
          >
            2,586
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
          }}
          p={{ xs: 2, sm: 3 }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h5">{t('Stats')}</Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              {t('Last month targets')}
            </Typography>
          </Box>
          <Typography
            variant="h4"
            color="warning.main"
          >
            $1,23M
          </Typography>
        </Box>
      </Stack>
      <Divider />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        divider={
          <Divider
            orientation="vertical"
            flexItem
          />
        }
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Box
          sx={{
            width: '100%',
          }}
          p={{ xs: 2, sm: 3 }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h5">{t('Users')}</Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              {t('Visitors last week')}
            </Typography>
          </Box>
          <Typography
            variant="h4"
            color="primary.main"
          >
            67,684
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
          }}
          p={{ xs: 2, sm: 3 }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h5">{t('Payments')}</Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              {t("Week's expenses")}
            </Typography>
          </Box>
          <Typography
            variant="h4"
            color="error.main"
          >
            -$123,305
          </Typography>
        </Box>
      </Stack>
      <Divider />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        divider={
          <Divider
            orientation="vertical"
            flexItem
          />
        }
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Box
          sx={{
            width: '100%',
          }}
          p={{ xs: 2, sm: 3 }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h5">{t('Sales')}</Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              {t('Total average weekly report')}
            </Typography>
          </Box>
          <Typography
            variant="h4"
            color="primary.main"
          >
            64.543
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
          }}
          p={{ xs: 2, sm: 3 }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h5">{t('Orders')}</Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              {t('Total products ordered')}
            </Typography>
          </Box>
          <Typography
            variant="h4"
            color="info.main"
          >
            745
          </Typography>
        </Box>
      </Stack>
      <Divider />
      <Box
        sx={{
          p: 2,
          textAlign: 'center',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Button
          size="small"
          color="primary"
          variant="contained"
          endIcon={<ArrowForwardTwoToneIcon />}
        >
          {t('View details')}
        </Button>
      </Box>
      <Divider />
      <Box>
        <Box p={{ xs: 2, sm: 3 }}>
          <Typography variant="h4">Sales</Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            Sales statistics from last 7 days
          </Typography>
        </Box>
        <LineChart
          height={168}
          leftAxis={null}
          margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
          bottomAxis={null}
          slotProps={{ legend: { hidden: true } }}
          series={[
            {
              data: chartValues,
              label: 'Total sales',
              area: true,
              color: theme.palette.primary.main,
              showMark: false,
            },
          ]}
          xAxis={[{ scaleType: 'point', data: xLabels }]}
          sx={{
            '.MuiLineElement-root': {
              strokeWidth: 2,
              strokeDasharray: '4 6',
              strokeLinecap: 'round',
            },
            '.MuiHighlightElement-root': {
              strokeWidth: 2,
              scale: '1.2',
              stroke: theme.palette.primary.main,
              fill: theme.palette.background.paper,
            },
            '.MuiAreaElement-root': {
              fill: alpha(theme.palette.primary.main, 0.12),
            },
          }}
        />
      </Box>
    </Card>
  );
}

export default Component;
