import { alpha, Box, Card, Chip, Typography, useTheme } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { useTranslation } from 'react-i18next';

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  const data1 = [
    { label: 'In-Person', value: 400, color: theme.palette.primary.main },
    { label: 'Telehealth', value: 300, color: theme.palette.success.main },
    { label: 'Emergency', value: 200, color: theme.palette.error.main },
    { label: 'Follow-ups', value: 100, color: theme.palette.secondary.main },
  ];
  const data2 = [
    { label: 'Medical Staff', value: 150, color: alpha(theme.palette.primary.main, 0.6) },
    { label: 'Equipment', value: 200, color: alpha(theme.palette.success.main, 0.6) },
    { label: 'Medication', value: 250, color: alpha(theme.palette.error.main, 0.6) },
  ];

  return (
    <Card
      sx={{
        p: { xs: 2, sm: 3 },
      }}
    >
      <PieChart
        series={[
          {
            innerRadius: 20,
            outerRadius: 80,
            data: data1,
            paddingAngle: 8,
            cornerRadius: 4,
            highlightScope: { faded: 'series', highlighted: 'item' },
          },
          {
            innerRadius: 100,
            outerRadius: 120,
            data: data2,
            paddingAngle: 16,
            cornerRadius: 8,
          },
        ]}
        margin={{ right: 0 }}
        height={302}
        slotProps={{
          legend: { hidden: true },
        }}
      />
      <Box
        display="flex"
        alignItems="center"
        sx={{
          py: 2,
        }}
        justifyContent="center"
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            mr: 1,
          }}
        >
          {t('Consultations')}
        </Typography>
        <Chip
          label="+10%"
          color="success"
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="h1"
          align="center"
          lineHeight={1}
          sx={{
            mr: 1,
          }}
        >
          21
        </Typography>
        <Typography
          variant="h6"
          fontWeight={600}
        >
          {t('Today')}
        </Typography>
      </Box>
    </Card>
  );
}

export default Component;
