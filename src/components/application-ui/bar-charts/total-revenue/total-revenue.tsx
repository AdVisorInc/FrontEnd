import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { format, subHours } from 'date-fns';
import { useTranslation } from 'react-i18next';

const DividerInfo = styled(Divider)(({ theme }) => ({
  height: '4px',
  background: theme.palette.info.main,
}));

const DividerSuccess = styled(Divider)(({ theme }) => ({
  height: '4px',
  background: theme.palette.success.main,
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  const chartValues = [1008, 940, 1010, 821, 1035, 1030, 957];
  const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  return (
    <Card
      sx={{
        height: '100%',
        flexDirection: 'column',
        display: 'flex',
      }}
    >
      <CardHeader
        sx={{ p: { xs: 2, sm: 3 } }}
        titleTypographyProps={{
          variant: 'h5',
          fontWeight: 600,
          sx: {
            textTransform: 'uppercase',
            textAlign: 'center',
          },
        }}
        title={t('Total Revenue')}
      />

      <CardContent
        sx={{
          py: 0,
          px: { xs: 0, sm: 2 },
          flex: 1,
        }}
      >
        <BarChart
          height={300}
          leftAxis={null}
          margin={{ left: 24, top: 24, right: 24 }}
          series={[
            {
              data: chartValues,
              label: 'Revenue',
              color: theme.palette.secondary.light,
            },
          ]}
          slotProps={{ legend: { hidden: true } }}
          xAxis={[
            {
              scaleType: 'band',
              data: xLabels,
              //@ts-ignore
              categoryGapRatio: 0.5,
              barGapRatio: 0.3,
            },
          ]}
          sx={{
            '.MuiBarElement-root': {
              fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
              rx: theme.shape.borderRadius / 1.5,
              fill: "url('#secondaryGradient')",
            },
          }}
        >
          <defs>
            <linearGradient
              id="secondaryGradient"
              gradientTransform="rotate(90)"
            >
              <stop
                offset="0%"
                stopColor={theme.palette.secondary.light}
              />
              <stop
                offset="100%"
                stopColor={theme.palette.secondary.dark}
              />
            </linearGradient>
          </defs>
        </BarChart>
        <Stack
          sx={{
            px: 4,
          }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Box
            py={3}
            sx={{
              width: '100%',
            }}
          >
            <Typography
              component="h6"
              variant="h6"
              textTransform="uppercase"
              fontWeight={500}
              textAlign="center"
              sx={{
                pb: 1,
              }}
            >
              {t('Income')}
            </Typography>
            <DividerInfo />
          </Box>
          <Box
            py={3}
            sx={{
              width: '100%',
            }}
          >
            <Typography
              component="h6"
              variant="h6"
              textTransform="uppercase"
              fontWeight={500}
              textAlign="center"
              sx={{
                pb: 1,
              }}
            >
              {t('Expenses')}
            </Typography>
            <DividerSuccess />
          </Box>
        </Stack>
        <Typography
          component="h6"
          variant="subtitle2"
          fontWeight={600}
          textAlign="center"
          color="text.secondary"
        >
          {format(subHours(new Date(), 5), 'MMMM dd yyyy')}
        </Typography>
        <Stack
          sx={{
            mt: 2,
            px: 4,
          }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Box
            sx={{
              width: '100%',
            }}
          >
            <Typography
              component="h6"
              variant="h2"
              textAlign="center"
              sx={{
                color: theme.palette.info.main,
                pb: 1,
              }}
            >
              32.5%
            </Typography>
          </Box>
          <Box
            sx={{
              width: '100%',
            }}
          >
            <Typography
              component="h6"
              variant="h2"
              textAlign="center"
              sx={{
                color: theme.palette.success.main,
                pb: 1,
              }}
            >
              67.5%
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default Component;
