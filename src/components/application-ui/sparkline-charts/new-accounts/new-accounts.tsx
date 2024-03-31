import { alpha, Box, Button, Card, Typography, useTheme } from '@mui/material';
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
        p={{ xs: 2, sm: 3 }}
        display="flex"
        alignItems="center"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
      >
        <Box textAlign={{ xs: 'center', sm: 'left' }}>
          <Typography variant="h4">{t('New Accounts')}</Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {t('Since your last visit there were ')}{' '}
            <Typography
              component="span"
              color="success.main"
            >
              <b>23</b>
            </Typography>{' '}
            {t('new accounts created')}
          </Typography>
        </Box>
        <Button
          sx={{
            width: { xs: '100%', sm: 'auto' },
            mt: { xs: 2, sm: 0 },
          }}
          size="small"
          variant="outlined"
        >
          {t('View all')}
        </Button>
      </Box>
      <SparkLineChart
        plotType="line"
        height={220}
        curve="natural"
        colors={[theme.palette.primary.main]}
        margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
        data={generateRandomData()}
        area
        sx={{
          '.MuiLineElement-root': {
            strokeWidth: 2,
          },

          '.MuiAreaElement-root': {
            fill: "url('#primaryGradient')",
            fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
          },
        }}
      >
        <defs>
          <linearGradient
            id="primaryGradient"
            gradientTransform="rotate(90)"
          >
            <stop
              offset="0%"
              stopColor={alpha(theme.palette.primary.main, 0.4)}
            />
            <stop
              offset="100%"
              stopColor={alpha(theme.palette.primary.main, 0.01)}
            />
          </linearGradient>
        </defs>
      </SparkLineChart>
    </Card>
  );
}

export default Component;
