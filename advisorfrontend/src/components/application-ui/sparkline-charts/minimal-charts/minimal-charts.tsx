import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import { alpha, Box, Card, Unstable_Grid2 as Grid, Typography, useTheme } from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useTranslation } from 'react-i18next';

const generateRandomData = (): number[] =>
  Array.from({ length: 8 }, () => Math.floor(Math.random() * 500));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card
          sx={{
            overflow: 'visible',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box p={{ xs: 1, sm: 2 }}>
            <Typography
              variant="h5"
              fontWeight={600}
              lineHeight={1}
              color="text.secondary"
            >
              {t('Customers')}
            </Typography>
            <Typography
              fontWeight={700}
              lineHeight={1}
              variant="h3"
              gutterBottom
              sx={{
                pt: 1.5,
              }}
            >
              653
            </Typography>
            <Typography
              lineHeight={1}
              variant="subtitle1"
              fontWeight={500}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
              color="success.main"
            >
              <span>52,12%</span>
              <KeyboardArrowUpTwoToneIcon
                sx={{ pl: 0.5 }}
                fontSize="small"
              />
            </Typography>
          </Box>
          <Box
            pt={2}
            flex={1}
          >
            <SparkLineChart
              plotType="bar"
              height={100}
              colors={[theme.palette.primary.main]}
              margin={{ top: 0, bottom: 0, left: 0, right: 3 }}
              data={generateRandomData()}
              sx={{
                '.MuiBarElement-root': {
                  fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
                  rx: theme.shape.borderRadius,
                },
              }}
            />
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card
          sx={{
            overflow: 'visible',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box p={{ xs: 1, sm: 2 }}>
            <Typography
              variant="h5"
              fontWeight={600}
              lineHeight={1}
              color="text.secondary"
            >
              {t('Growth')}
            </Typography>
            <Typography
              fontWeight={700}
              lineHeight={1}
              variant="h3"
              gutterBottom
              sx={{
                pt: 1.5,
              }}
            >
              $586
            </Typography>
            <Typography
              lineHeight={1}
              variant="subtitle1"
              fontWeight={500}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
              color="success.main"
            >
              <span>32,76%</span>
              <KeyboardArrowUpTwoToneIcon
                sx={{ pl: 0.5 }}
                fontSize="small"
              />
            </Typography>
          </Box>
          <Box
            pt={2}
            flex={1}
          >
            <SparkLineChart
              plotType="bar"
              height={100}
              colors={[theme.palette.success.main]}
              margin={{ top: 0, bottom: 0, left: 0, right: 3 }}
              data={generateRandomData()}
              sx={{
                '.MuiBarElement-root': {
                  fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
                  rx: theme.shape.borderRadius,
                },
              }}
            />
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card
          sx={{
            overflow: 'visible',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box p={{ xs: 1, sm: 2 }}>
            <Typography
              variant="h5"
              fontWeight={600}
              lineHeight={1}
              color="text.secondary"
            >
              {t('Orders')}
            </Typography>
            <Typography
              fontWeight={700}
              lineHeight={1}
              variant="h3"
              gutterBottom
              sx={{
                pt: 1.5,
              }}
            >
              276
            </Typography>
            <Typography
              lineHeight={1}
              variant="subtitle1"
              fontWeight={500}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
              color="success.main"
            >
              <span>67,34%</span>
              <KeyboardArrowUpTwoToneIcon
                sx={{ pl: 0.5 }}
                fontSize="small"
              />
            </Typography>
          </Box>
          <Box flex={1}>
            <SparkLineChart
              plotType="line"
              height={100}
              colors={[theme.palette.error.main]}
              margin={{ top: 0, bottom: 0, left: 0, right: 3 }}
              data={generateRandomData()}
              area
              sx={{
                '.MuiLineElement-root': {
                  strokeWidth: 2,
                },

                '.MuiAreaElement-root': {
                  fill: "url('#errorGradient')",
                  fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
                },
              }}
            >
              <defs>
                <linearGradient
                  id="errorGradient"
                  gradientTransform="rotate(90)"
                >
                  <stop
                    offset="0%"
                    stopColor={alpha(theme.palette.error.main, 0.4)}
                  />
                  <stop
                    offset="100%"
                    stopColor={alpha(theme.palette.error.main, 0.01)}
                  />
                </linearGradient>
              </defs>
            </SparkLineChart>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card
          sx={{
            overflow: 'visible',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box p={{ xs: 1, sm: 2 }}>
            <Typography
              variant="h5"
              fontWeight={600}
              lineHeight={1}
              color="text.secondary"
            >
              {t('Expenses')}
            </Typography>
            <Typography
              fontWeight={700}
              lineHeight={1}
              variant="h3"
              gutterBottom
              sx={{
                pt: 1.5,
              }}
            >
              $675
            </Typography>
            <Typography
              lineHeight={1}
              variant="subtitle1"
              fontWeight={500}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
              color="error.main"
            >
              <span>-23%</span>
              <KeyboardArrowDownTwoToneIcon
                sx={{ pl: 0.5 }}
                fontSize="small"
              />
            </Typography>
          </Box>
          <Box flex={1}>
            <SparkLineChart
              plotType="line"
              height={100}
              curve="natural"
              colors={[theme.palette.primary.main]}
              margin={{ top: 0, bottom: 0, left: 0, right: 3 }}
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
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
