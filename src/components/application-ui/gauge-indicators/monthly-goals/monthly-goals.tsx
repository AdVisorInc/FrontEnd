import { alpha, Box, Card, Typography, useTheme } from '@mui/material';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';

export const GaugeChart = dynamic(() => import('react-gauge-chart'), { ssr: false });

function MonthlyGoalsTarget() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        pt: { xs: 2, sm: 3 },
      }}
    >
      <Typography
        align="center"
        variant="h3"
        gutterBottom
      >
        {t('Monthly Goals Target')}
      </Typography>
      <Typography
        align="center"
        variant="subtitle1"
        color="text.secondary"
      >
        {t('This si your main goals target indicator')}
      </Typography>
      <Box
        sx={{
          mt: { xs: 2, sm: 3 },
          mx: 'auto',
          maxWidth: '530px',
        }}
      >
        <GaugeChart
          //@ts-ignore
          nrOfLevels={24}
          hideText
          cornerRadius={3}
          needleColor={
            theme.palette.mode === 'dark' ? theme.palette.neutral[800] : theme.palette.neutral[400]
          }
          needleBaseColor={
            theme.palette.mode === 'dark' ? theme.palette.neutral[400] : theme.palette.neutral[900]
          }
          colors={[
            theme.palette.error.main,
            theme.palette.warning.main,
            theme.palette.success.main,
          ]}
          arcWidth={0.3}
          percent={0.46}
        />
      </Box>
      <Box
        sx={{
          textAlign: 'center',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
          p: { xs: 2, sm: 3 },
        }}
      >
        <Typography
          component="span"
          align="center"
          variant="h5"
        >
          {t('You have reached')}
        </Typography>
        <Typography
          component="span"
          align="center"
          variant="h3"
          color="warning.main"
          sx={{
            px: 0.5,
          }}
        >
          46%
        </Typography>
        <Typography
          component="span"
          align="center"
          variant="h5"
        >
          {t('of your monthly target!')}
        </Typography>
      </Box>
    </Card>
  );
}

export default MonthlyGoalsTarget;
