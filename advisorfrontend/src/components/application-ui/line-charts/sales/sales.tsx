import ScreenSearchDesktopTwoToneIcon from '@mui/icons-material/ScreenSearchDesktopTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTranslation } from 'react-i18next';

const salesData = [16855, 14938, 16250, 12491, 16040, 19388, 18563];
const expenseData = [8324, 8620, 6741, 7348, 9992, 7374, 7357];
const profitData = [8531, 6318, 9509, 5143, 6048, 12614, 11206];
const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

const DotLegend = styled('span')(({ theme }) => ({
  borderRadius: '22px',
  width: theme.spacing(1.8),
  height: theme.spacing(1.8),
  display: 'inline-block',
  marginRight: theme.spacing(0.8),
  border: `${theme.palette.background.paper} solid 2px`,
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Card>
      <CardHeader
        sx={{
          p: { xs: 2, sm: 3 },
        }}
        title={<Typography variant="h4">{t('Sales')}</Typography>}
        subheader={
          <Typography
            component="div"
            fontWeight={400}
            color="text.secondary"
            variant="h5"
          >
            {t('Last 7 days sales statistics report')}
          </Typography>
        }
        disableTypography
        action={
          <Button
            size="small"
            variant="outlined"
            startIcon={<ScreenSearchDesktopTwoToneIcon />}
          >
            {t('Advanced search')}
          </Button>
        }
      />
      <Card
        variant="outlined"
        elevation={0}
        sx={{
          p: { xs: 2, sm: 3 },
          mx: { xs: 2, sm: 3 },
          mb: { xs: 2, sm: 3 },
          border: 0,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          divider={
            <Divider
              orientation={smUp ? 'vertical' : 'horizontal'}
              flexItem
            />
          }
          justifyContent="space-evenly"
          alignItems="center"
          spacing={{ xs: 2, sm: 3 }}
        >
          <Box
            py={{ xs: 0, md: 2 }}
            textAlign="center"
          >
            <Typography
              variant="h5"
              color="text.secondary"
              gutterBottom
            >
              {t("Today's Earnings")}
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <DotLegend
                style={{
                  background: theme.palette.info.main,
                }}
              />
              <Typography
                color="text.primary"
                variant="h4"
              >
                <small>$</small>8,685
              </Typography>
            </Box>
          </Box>
          <Box
            py={{ xs: 0, md: 2 }}
            textAlign="center"
          >
            <Typography
              variant="h5"
              color="text.secondary"
              gutterBottom
            >
              {t('Current Week')}
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <DotLegend
                style={{
                  background: theme.palette.success.main,
                }}
              />
              <Typography
                color="text.primary"
                variant="h4"
              >
                <small>$</small>34,543
              </Typography>
            </Box>
          </Box>
          <Box
            py={{ xs: 0, md: 2 }}
            textAlign="center"
          >
            <Typography
              variant="h5"
              color="text.secondary"
              gutterBottom
            >
              {t('Previous Week')}
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <DotLegend
                style={{
                  background: theme.palette.error.main,
                }}
              />
              <Typography
                color="text.primary"
                variant="h4"
              >
                <small>$</small>76,645
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Card>
      <LineChart
        height={300}
        slotProps={{ legend: { hidden: true } }}
        leftAxis={null}
        margin={{ top: 0, bottom: 36, left: smUp ? 36 : 12, right: smUp ? 36 : 12 }}
        series={[
          {
            data: salesData,
            label: 'Sales',
            color: theme.palette.primary.main,
            showMark: false,
          },
          {
            data: expenseData,
            label: 'Expenses',
            color: theme.palette.error.main,
          },
          {
            data: profitData,
            label: 'Profit',
            color: theme.palette.success.main,
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
