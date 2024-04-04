import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import TrendingDown from '@mui/icons-material/TrendingDown';
import TrendingUp from '@mui/icons-material/TrendingUp';
import {
  alpha,
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Unstable_Grid2 as Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useTranslation } from 'react-i18next';

const generateRandomData = (): number[] =>
  Array.from({ length: 8 }, () => Math.floor(Math.random() * 500));

function Traffic() {
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Card>
      <CardHeader
        action={
          smUp && (
            <Button
              size="small"
              endIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
            >
              {t('More')}
            </Button>
          )
        }
        title={t('Traffic')}
      />
      <Divider />
      <Box p={{ xs: 2, sm: 3 }}>
        <Grid
          spacing={0}
          container
        >
          <Grid
            xs={12}
            md={5}
            flexDirection="column"
          >
            <Box>
              <Typography
                variant="caption"
                noWrap
                color="text.secondary"
                component="div"
              >
                {t('Total Store Visits')}
              </Typography>
              <Typography
                variant="h1"
                gutterBottom
              >
                57.483
              </Typography>
              <Box
                sx={{
                  mt: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                <Chip
                  label="694 (10.23%)"
                  color="success"
                />
                <TrendingUp
                  sx={{
                    ml: 0.7,
                    color: 'success.main',
                  }}
                  fontSize="small"
                />
              </Box>
            </Box>
            <Box mt={{ xs: 2, sm: 3 }}>
              <Typography
                variant="caption"
                color="text.secondary"
                noWrap
                component="div"
              >
                {t('Average Daily Visitors')}
              </Typography>
              <Typography
                variant="h1"
                gutterBottom
              >
                7.492
              </Typography>
              <Box
                sx={{
                  mt: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                <Chip
                  label="-583 (8.64%)"
                  color="error"
                />
                <TrendingDown
                  sx={{
                    ml: 0.7,
                    color: 'error.main',
                  }}
                  fontSize="small"
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            xs={12}
            md={7}
            justifyContent="center"
            alignItems="center"
          >
            <Card
              elevation={0}
              variant="outlined"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.neutral[25], 0.02)
                    : 'neutral.25',
                mt: { xs: 2, md: 0 },
              }}
            >
              <SparkLineChart
                plotType="line"
                height={280}
                curve="natural"
                colors={[theme.palette.primary.main]}
                margin={{ top: 12, bottom: 0, left: 0, right: 0 }}
                data={generateRandomData()}
                area
                sx={{
                  '.MuiLineElement-root': {
                    strokeWidth: 2,
                    strokeLinecap: 'round',
                    stroke: "url('#primaryGradientStroke')",
                  },

                  '.MuiAreaElement-root': {
                    fill: "url('#primaryGradient')",
                    fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
                  },
                }}
              >
                <defs>
                  <linearGradient
                    id="primaryGradientStroke"
                    gradientTransform="rotate(90)"
                  >
                    <stop
                      offset="0%"
                      stopColor={alpha(theme.palette.primary.main, 1)}
                    />
                    <stop
                      offset="100%"
                      stopColor={alpha(theme.palette.primary.main, 0)}
                    />
                  </linearGradient>
                  <linearGradient
                    id="primaryGradient"
                    gradientTransform="rotate(90)"
                  >
                    <stop
                      offset="0%"
                      stopColor={alpha(theme.palette.primary.main, 0)}
                    />
                    <stop
                      offset="100%"
                      stopColor={alpha(theme.palette.primary.main, 0.7)}
                    />
                  </linearGradient>
                </defs>
              </SparkLineChart>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default Traffic;
