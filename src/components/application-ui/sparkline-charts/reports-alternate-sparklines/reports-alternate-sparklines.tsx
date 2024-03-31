import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import PieChartTwoToneIcon from '@mui/icons-material/PieChartTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import { alpha, Box, Button, Card, Divider, Stack, Typography, useTheme } from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useTranslation } from 'react-i18next';

const generateRandomData = (): number[] =>
  Array.from({ length: 8 }, () => Math.floor(Math.random() * 500));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <Box
        pt={{ xs: 2, sm: 3 }}
        px={{ xs: 2, sm: 3 }}
      >
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="stretch"
          spacing={0}
        >
          <Box
            sx={{
              textAlign: 'center',
            }}
          >
            <MonetizationOnTwoToneIcon
              sx={{
                color: 'warning.main',
              }}
              fontSize="large"
            />
            <Typography
              sx={{
                pt: 1,
              }}
              variant="h4"
            >
              $9,658
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              {t('revenue')}
            </Typography>
          </Box>
          <Box
            sx={{
              textAlign: 'center',
            }}
          >
            <SubscriptionsTwoToneIcon
              sx={{
                color: 'info.main',
              }}
              fontSize="large"
            />
            <Typography
              sx={{
                pt: 1,
              }}
              variant="h4"
            >
              1,064
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              {t('orders')}
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Box pb={{ xs: 2, sm: 3 }}>
        <SparkLineChart
          plotType="line"
          height={100}
          showHighlight
          showTooltip
          curve="natural"
          colors={[theme.palette.info.main]}
          margin={{ top: 12, bottom: 12, left: 12, right: 12 }}
          data={generateRandomData()}
          sx={{
            '.MuiLineElement-root': {
              strokeWidth: 2,
              strokeDasharray: '4 8',
              strokeLinecap: 'round',
            },
          }}
        />
      </Box>
      <Divider />
      <Box
        p={1.5}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.error.main,
          }}
        >
          <ArrowDownwardTwoToneIcon />
          <span>-15.4%</span>
        </Typography>
        <Typography
          component="span"
          sx={{
            pl: 1,
          }}
          variant="subtitle2"
          color="text.secondary"
        >
          {t('new sales today')}
        </Typography>
      </Box>
      <Divider />
      <Box
        p={{ xs: 2, sm: 3 }}
        sx={{
          textAlign: 'center',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Button
          color="info"
          sx={{
            px: 2.5,
            borderRadius: 10,
            transform: 'translateY(0px)',
            boxShadow: `0px 1px 4px ${alpha(
              theme.palette.info.main,
              0.25
            )}, 0px 3px 12px 2px ${alpha(theme.palette.info.main, 0.35)}`,

            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: `0px 1px 4px ${alpha(
                theme.palette.info.main,
                0.25
              )}, 0px 3px 12px 2px ${alpha(theme.palette.info.main, 0.35)}`,
            },
            '&:active': {
              boxShadow: 'none',
            },
          }}
          variant="contained"
          startIcon={<PieChartTwoToneIcon />}
        >
          {t('Download report')}
        </Button>
      </Box>
    </Card>
  );
}

export default Component;
