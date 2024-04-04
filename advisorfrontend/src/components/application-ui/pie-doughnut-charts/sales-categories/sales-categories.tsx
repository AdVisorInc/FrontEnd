import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { useTranslation } from 'react-i18next';
import { InlineBadge } from 'src/components/base/styles/inline-badge';

function SalesByCategory() {
  const { t } = useTranslation();
  const theme = useTheme();

  const data = [
    { value: 15, label: t('Bills'), color: theme.palette.error.main },
    { value: 20, label: t('Health'), color: theme.palette.success.main },
    { value: 25, label: t('Education'), color: theme.palette.info.main },
    { value: 30, label: t('Entertainment'), color: theme.palette.secondary.main },
    { value: 10, label: t('Others'), color: theme.palette.warning.main },
  ];

  return (
    <Card>
      <CardHeader title={t('Sales by Category')} />
      <Divider />
      <CardContent>
        <Stack
          alignItems="center"
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          mt={2}
        >
          <PieChart
            slotProps={{
              legend: {
                hidden: true,
              },
            }}
            margin={{ right: 0 }}
            series={[
              {
                data,
                innerRadius: 30,
                paddingAngle: 4,
                cornerRadius: 16,
              },
            ]}
            width={200}
            height={200}
          />
          <Stack
            minWidth={200}
            spacing={1}
            flex={1}
          >
            {data.map((item, i) => (
              <InlineBadge key={item.label}>
                <Badge
                  variant="dot"
                  sx={{
                    '& .MuiBadge-badge': {
                      background: item.color,
                    },
                  }}
                />
                <Typography
                  sx={{
                    px: 0.5,
                    color: item.color,
                  }}
                >
                  {item.value}%
                </Typography>
                {item.label}
              </InlineBadge>
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default SalesByCategory;
