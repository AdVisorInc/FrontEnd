import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import FiberManualRecordTwoToneIcon from '@mui/icons-material/FiberManualRecordTwoTone';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import { Box, Card, Unstable_Grid2 as Grid, IconButton, Typography, useTheme } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTranslation } from 'react-i18next';

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  const chartValues = [8531, 6318, 9509, 5143, 6048, 12614, 11206];
  const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  const chartValues2 = [8531, 9509, 5143, 12614, 6318, 6048, 9684];
  const xLabels2 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card>
          <Box
            p={{ xs: 2, sm: 3 }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="subtitle1"
              fontWeight={500}
              textTransform="uppercase"
              color="text.secondary"
            >
              {t('Monthly sales')}
            </Typography>
            <IconButton
              size="small"
              color="secondary"
            >
              <MoreVertTwoToneIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              px: 2,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <FiberManualRecordTwoToneIcon sx={{ color: 'warning.primary' }} />
            <Typography
              sx={{
                px: 1,
              }}
              variant="h1"
            >
              $8,489
            </Typography>
            <Typography
              fontWeight={500}
              variant="h4"
              color="success.primary"
            >
              +54
            </Typography>
          </Box>
          <LineChart
            height={170}
            leftAxis={null}
            margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
            bottomAxis={null}
            slotProps={{ legend: { hidden: true } }}
            series={[
              {
                data: chartValues,
                label: 'Sales',
                area: true,
                color: theme.palette.warning.main,
                showMark: false,
              },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            sx={{
              '.MuiLineElement-root': {
                strokeWidth: 3,
              },
              '.MuiHighlightElement-root': {
                strokeWidth: 2,
                scale: '1.2',
                stroke: theme.palette.warning.main,
                fill: theme.palette.background.paper,
              },
              '.MuiAreaElement-root': {
                fill: "url('#warningGradient')",
                fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
              },
            }}
          >
            <defs>
              <linearGradient
                id="warningGradient"
                gradientTransform="rotate(90)"
              >
                <stop
                  offset="0%"
                  stopColor={theme.palette.warning.main}
                />
                <stop
                  offset="100%"
                  stopColor={theme.palette.background.paper}
                />
              </linearGradient>
            </defs>
          </LineChart>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card>
          <Box
            p={{ xs: 2 }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="subtitle1"
              fontWeight={500}
              textTransform="uppercase"
              color="text.secondary"
            >
              {t('Last 10 orders')}
            </Typography>
            <IconButton
              size="small"
              color="secondary"
            >
              <MoreVertTwoToneIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              px: 2,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ArrowUpwardTwoToneIcon
              sx={{
                color: 'success.main',
              }}
            />
            <Typography
              sx={{
                px: 1,
              }}
              variant="h1"
            >
              $1,598
            </Typography>
            <Typography
              fontWeight={500}
              variant="h4"
              color="error.main"
            >
              -20%
            </Typography>
          </Box>
          <BarChart
            height={170}
            leftAxis={null}
            margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
            bottomAxis={null}
            slotProps={{ legend: { hidden: true } }}
            series={[
              {
                data: chartValues,
                label: 'Current week',
                color: theme.palette.primary.main,
              },
              {
                data: chartValues2,
                label: 'Last week',
                color: theme.palette.error.light,
              },
            ]}
            xAxis={[
              {
                scaleType: 'band',
                data: xLabels,
                //@ts-ignore
                categoryGapRatio: 0.4,
                barGapRatio: 0.3,
              },
            ]}
            sx={{
              '.MuiBarElement-root': {
                fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
                ry: theme.shape.borderRadius / 1.5,
              },
            }}
          />
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card>
          <Box
            p={{ xs: 2 }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="subtitle1"
              fontWeight={500}
              textTransform="uppercase"
              color="text.secondary"
            >
              {t('Total sales')}
            </Typography>
            <IconButton
              size="small"
              color="secondary"
            >
              <MoreVertTwoToneIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              px: 2,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <KeyboardArrowDownTwoToneIcon
              sx={{
                color: 'error.main',
              }}
            />
            <Typography
              sx={{
                px: 1,
              }}
              variant="h1"
            >
              $9,324
            </Typography>
            <Typography
              fontWeight={500}
              variant="h4"
              color="info.main"
            >
              +546
            </Typography>
          </Box>
          <LineChart
            height={170}
            leftAxis={null}
            margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
            bottomAxis={null}
            slotProps={{ legend: { hidden: true } }}
            series={[
              {
                data: chartValues2,
                label: 'Sales',
                area: true,
                color: theme.palette.success.main,
                showMark: false,
              },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels2 }]}
            sx={{
              '.MuiLineElement-root': {
                strokeWidth: 3,
              },
              '.MuiHighlightElement-root': {
                strokeWidth: 2,
                scale: '1.2',
                stroke: theme.palette.success.main,
                fill: theme.palette.background.paper,
              },
              '.MuiAreaElement-root': {
                fill: "url('#successGradient')",
                fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
              },
            }}
          >
            <defs>
              <linearGradient
                id="successGradient"
                gradientTransform="rotate(90)"
              >
                <stop
                  offset="0%"
                  stopColor={theme.palette.success.main}
                />
                <stop
                  offset="100%"
                  stopColor={theme.palette.background.paper}
                />
              </linearGradient>
            </defs>
          </LineChart>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
