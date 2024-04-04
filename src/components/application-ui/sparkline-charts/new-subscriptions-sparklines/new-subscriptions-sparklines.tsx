import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
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
      <Box pt={{ xs: 2, sm: 3 }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-evenly"
          alignItems="stretch"
          spacing={0}
        >
          <Box
            pt={2}
            px={2}
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
            <Typography variant="h3">$9,658</Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
            >
              {t('revenue')}
            </Typography>
          </Box>
          <Box
            pt={2}
            px={2}
            sx={{
              textAlign: 'center',
            }}
          >
            <PersonTwoToneIcon
              sx={{
                color: 'success.main',
              }}
              fontSize="large"
            />
            <Typography variant="h3">23,594</Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
            >
              {t('users')}
            </Typography>
          </Box>
          <Box
            pt={2}
            px={2}
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
            <Typography variant="h3">1,064</Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
            >
              {t('orders')}
            </Typography>
          </Box>
        </Stack>
      </Box>
      <SparkLineChart
        plotType="line"
        height={160}
        curve="natural"
        colors={[theme.palette.primary.main]}
        margin={{ top: 12, bottom: 12, left: 12, right: 12 }}
        data={generateRandomData()}
        sx={{
          '.MuiLineElement-root': {
            strokeWidth: 4,
            strokeLinecap: 'round',
            stroke: "url('#primaryGradient')",
            fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
          },
        }}
      >
        <defs>
          <linearGradient
            id="primaryGradient"
            gradientTransform="rotate(0)"
          >
            <stop
              offset="0%"
              stopColor={alpha(theme.palette.primary.main, 1)}
            />
            <stop
              offset="50%"
              stopColor={alpha(theme.palette.primary.main, 0.5)}
            />
            <stop
              offset="100%"
              stopColor={alpha(theme.palette.primary.main, 0.1)}
            />
          </linearGradient>
        </defs>
      </SparkLineChart>
      <Divider />
      <Box
        p={1.5}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
          color="success.main"
        >
          <ArrowUpwardTwoToneIcon />
          <span>+24.65%</span>
        </Typography>
        <Typography
          component="span"
          sx={{
            pl: 1,
          }}
          variant="subtitle2"
          color="text.secondary"
        >
          {t('new subscription sign-ups')}
        </Typography>
      </Box>
      <Divider />
      <Box
        p={{ xs: 1, sm: 2 }}
        sx={{
          textAlign: 'center',
        }}
      >
        <Button
          sx={{
            px: 2.5,
            borderRadius: 10,
            transform: 'scale(1)',
            transition: theme.transitions.create(['all']),
            boxShadow: theme.shadows[6],

            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: theme.shadows[6],
            },
            '&:active': {
              boxShadow: 'none',
            },
          }}
          variant="contained"
          color="error"
          startIcon={<PieChartTwoToneIcon />}
        >
          {t('Download report')}
        </Button>
      </Box>
    </Card>
  );
}

export default Component;
