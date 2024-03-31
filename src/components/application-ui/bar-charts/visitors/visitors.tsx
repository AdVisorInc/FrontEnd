import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import {
  alpha,
  Box,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  circularProgressClasses,
  Divider,
  IconButton,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { StackOrderType } from '@mui/x-charts/models';
import React from 'react';
import { useTranslation } from 'react-i18next';

const commonTransportation = [6.5, 12.5, 17.2, 19.6, 20.1];
const car = [48.8, 56.3, 63.2, 67.3, 72.1];
const motorcycle = [1.3, 2.1, 2.5, 2.6, 2.7];
const biking = [4.0, 5.9, 5.8, 5.0, 4.0];
const walking = [39.4, 23.2, 11.3, 5.5, 6.5];
const xAxis = {
  label: 'Distance between home and office (km)',
  scaleType: 'band' as const,
  categoryGapRatio: 0.5,
  barGapRatio: 0.3,
  data: ['0-1', '1-2', '2-3', '3-4', '20-21'],
};

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [stackOrder, setStackOrder] = React.useState<StackOrderType>('none');
  const series = [
    { label: 'Car', data: car, color: alpha(theme.palette.secondary.main, 0.8) },
    {
      label: 'Public T.',
      data: commonTransportation,
      stack: 'total',
      color: alpha(theme.palette.primary.main, 0.9),
    },
    {
      label: 'Motorcycle',
      data: motorcycle,
      stack: 'total',
      color: alpha(theme.palette.secondary.main, 0.7),
    },
    {
      label: 'Walk',
      data: walking,
      stack: 'total',
      color: alpha(theme.palette.error.main, 0.9),
    },
    { label: 'Bike', data: biking, stack: 'total', color: alpha(theme.palette.success.main, 0.9) },
  ];

  const modifiedSeries = [{ ...series[0], stackOrder }, ...series.slice(1)];
  const data = {
    percentageLocal: 63,
    percentageExternal: 37,
  };
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardHeader
        sx={{
          p: 2,
          position: 'relative',
          '& .MuiCardHeader-action': {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
          },
        }}
        titleTypographyProps={{
          variant: 'h6',
          fontWeight: 600,
          sx: {
            textTransform: 'uppercase',
            textAlign: 'center',
          },
        }}
        action={
          <IconButton color="primary">
            <MoreVertTwoToneIcon />
          </IconButton>
        }
        title={t('Visitors Locations')}
      />
      <CardContent sx={{ px: { xs: 0, sm: 2 }, flex: 1, py: 0 }}>
        <BarChart
          height={300}
          xAxis={[
            {
              ...xAxis,
              tickLabelStyle: {
                dominantBaseline: 'hanging',
                textAnchor: 'start',
              },
            },
          ]}
          sx={{
            '.MuiBarElement-root': {
              fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
              rx: theme.shape.borderRadius / 2,
            },
            '.MuiChartsAxis-left': {
              display: { xs: 'none', sm: 'block' },
            },
          }}
          yAxis={[{ min: 0, max: 100 }]}
          series={modifiedSeries}
          margin={{ top: 50, left: smUp ? 54 : 12, right: smUp ? 24 : 12, bottom: 50 }}
        />
        <Stack
          sx={{
            mt: 2,
          }}
          direction={{ xs: 'column', sm: 'row' }}
          divider={
            <Divider
              orientation={smUp ? 'vertical' : 'horizontal'}
              flexItem
            />
          }
          justifyContent="space-evenly"
          alignItems="center"
          spacing={{ xs: 2, sm: 0 }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              component="h6"
              variant="caption"
              fontWeight={500}
              textAlign="center"
              color="success.main"
              sx={{
                pb: 2,
              }}
            >
              {t('Local Visitors')}
            </Typography>

            <Box
              display="inline-flex"
              position="relative"
            >
              <Typography
                position="absolute"
                top={0}
                left={0}
                width={124}
                height={124}
                display="flex"
                justifyContent="center"
                alignItems="center"
                variant="h4"
              >
                {data.percentageLocal}%
              </Typography>
              <CircularProgress
                variant="determinate"
                color="success"
                sx={{
                  opacity: 0.3,
                }}
                size={124}
                thickness={6}
                value={100}
              />
              <CircularProgress
                size={124}
                color="success"
                sx={{
                  animationDuration: '550ms',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  [`& .${circularProgressClasses.circle}`]: {
                    strokeLinecap: 'round',
                  },
                }}
                thickness={6}
                variant="determinate"
                value={data.percentageLocal}
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              component="h6"
              variant="caption"
              fontWeight={500}
              textAlign="center"
              color="error.main"
              sx={{
                pb: 2,
              }}
            >
              {t('External Visitors')}
            </Typography>

            <Box
              display="inline-flex"
              position="relative"
            >
              <Typography
                position="absolute"
                top={0}
                left={0}
                width={124}
                height={124}
                display="flex"
                justifyContent="center"
                alignItems="center"
                variant="h4"
              >
                {data.percentageExternal}%
              </Typography>
              <CircularProgress
                variant="determinate"
                color="error"
                sx={{
                  opacity: 0.3,
                }}
                size={124}
                thickness={6}
                value={100}
              />
              <CircularProgress
                size={124}
                color="error"
                sx={{
                  animationDuration: '550ms',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  [`& .${circularProgressClasses.circle}`]: {
                    strokeLinecap: 'round',
                  },
                }}
                thickness={6}
                variant="determinate"
                value={data.percentageExternal}
              />
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default Component;
