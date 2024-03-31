import { Box, Unstable_Grid2 as Grid, Typography, useTheme } from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useTranslation } from 'react-i18next';
import { CardBorderColor } from 'src/components/base/styles/card-border-color';

const generateRandomData = (): number[] =>
  Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000));

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
        lg={4}
      >
        <CardBorderColor
          elevation={6}
          borderColor="primary"
          borderPosition="bottom"
          sx={{ p: { xs: 1, sm: 2 } }}
        >
          <Box p={2}>
            <Typography
              fontWeight={600}
              variant="h2"
            >
              <small>$</small>869
            </Typography>
            <Typography
              variant="h5"
              fontWeight={500}
              color="text.secondary"
            >
              {t('sales last month')}
            </Typography>
          </Box>
          <Box>
            <SparkLineChart
              data={generateRandomData()}
              height={100}
              showTooltip
              curve="natural"
              margin={{ top: 12, bottom: 12, left: 0, right: 0 }}
              xAxis={{
                scaleType: 'band',
                data: [
                  new Date(2013, 0, 1),
                  new Date(2014, 0, 1),
                  new Date(2015, 0, 1),
                  new Date(2016, 0, 1),
                  new Date(2017, 0, 1),
                  new Date(2018, 0, 1),
                  new Date(2019, 0, 1),
                  new Date(2020, 0, 1),
                  new Date(2021, 0, 1),
                  new Date(2022, 0, 1),
                  new Date(2023, 0, 1),
                  new Date(2024, 0, 1),
                ],
                valueFormatter: (value) => value.getFullYear(),
              }}
              colors={[theme.palette.primary.main]}
              sx={{ '.MuiLineElement-root': { strokeWidth: 3, strokeLinecap: 'round' } }}
            />
          </Box>
        </CardBorderColor>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={4}
      >
        <CardBorderColor
          elevation={6}
          borderColor="error"
          borderPosition="bottom"
          sx={{ p: { xs: 1, sm: 2 } }}
        >
          <Box p={2}>
            <Typography
              fontWeight={600}
              variant="h2"
            >
              <small>$</small>98,564
            </Typography>
            <Typography
              variant="h5"
              fontWeight={500}
              color="text.secondary"
            >
              {t('sales this quarter')}
            </Typography>
          </Box>
          <Box>
            <SparkLineChart
              data={generateRandomData()}
              height={100}
              showTooltip
              curve="natural"
              margin={{ top: 12, bottom: 12, left: 0, right: 0 }}
              xAxis={{
                scaleType: 'band',
                data: [
                  new Date(2013, 0, 1),
                  new Date(2014, 0, 1),
                  new Date(2015, 0, 1),
                  new Date(2016, 0, 1),
                  new Date(2017, 0, 1),
                  new Date(2018, 0, 1),
                  new Date(2019, 0, 1),
                  new Date(2020, 0, 1),
                  new Date(2021, 0, 1),
                  new Date(2022, 0, 1),
                  new Date(2023, 0, 1),
                  new Date(2024, 0, 1),
                ],
                valueFormatter: (value) => value.getFullYear(),
              }}
              colors={[theme.palette.error.main]}
              sx={{ '.MuiLineElement-root': { strokeWidth: 3, strokeLinecap: 'round' } }}
            />
          </Box>
        </CardBorderColor>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={4}
      >
        <CardBorderColor
          elevation={6}
          borderColor="success"
          borderPosition="bottom"
          sx={{ p: { xs: 1, sm: 2 } }}
        >
          <Box p={2}>
            <Typography
              fontWeight={600}
              variant="h2"
            >
              <small>$</small>565.00
            </Typography>
            <Typography
              variant="h5"
              fontWeight={500}
              color="text.secondary"
            >
              {t('sales made today')}
            </Typography>
          </Box>
          <Box>
            <SparkLineChart
              data={generateRandomData()}
              height={100}
              showTooltip
              curve="natural"
              margin={{ top: 12, bottom: 12, left: 0, right: 0 }}
              xAxis={{
                scaleType: 'band',
                data: [
                  new Date(2013, 0, 1),
                  new Date(2014, 0, 1),
                  new Date(2015, 0, 1),
                  new Date(2016, 0, 1),
                  new Date(2017, 0, 1),
                  new Date(2018, 0, 1),
                  new Date(2019, 0, 1),
                  new Date(2020, 0, 1),
                  new Date(2021, 0, 1),
                  new Date(2022, 0, 1),
                  new Date(2023, 0, 1),
                  new Date(2024, 0, 1),
                ],
                valueFormatter: (value) => value.getFullYear(),
              }}
              colors={[theme.palette.success.main]}
              sx={{ '.MuiLineElement-root': { strokeWidth: 3, strokeLinecap: 'round' } }}
            />
          </Box>
        </CardBorderColor>
      </Grid>
    </Grid>
  );
}

export default Component;
