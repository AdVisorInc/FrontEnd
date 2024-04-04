import AccessAlarmTwoToneIcon from '@mui/icons-material/AccessAlarmTwoTone';
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import { Box, Chip, Unstable_Grid2 as Grid, IconButton, Typography, useTheme } from '@mui/material';
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
          borderColor="info"
          borderPosition="top"
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            p={2}
          >
            <Typography color="info.main">
              <AccessAlarmTwoToneIcon fontSize="large" />
            </Typography>
            <Chip
              label={t('New')}
              color="info"
            />
          </Box>
          <Box px={2}>
            <Typography
              component="span"
              sx={{
                lineHeight: 1,
                pr: 0.6,
              }}
              variant="h3"
            >
              2,356
            </Typography>
            <Typography
              component="span"
              variant="subtitle2"
              color="text.secondary"
            >
              {t('users')}
            </Typography>
          </Box>
          <Box>
            <SparkLineChart
              data={generateRandomData()}
              height={120}
              showTooltip
              curve="linear"
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
              colors={[theme.palette.info.main]}
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
          borderPosition="top"
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            p={2}
          >
            <Typography color="error.main">
              <ArchiveTwoToneIcon fontSize="large" />
            </Typography>
            <Chip
              label={t('Hot')}
              variant="outlined"
              color="secondary"
            />
          </Box>
          <Box px={2}>
            <Typography
              component="span"
              sx={{
                lineHeight: 1,
                pr: 0.6,
              }}
              variant="h3"
            >
              $9,685
            </Typography>
            <Typography
              component="span"
              variant="subtitle2"
              color="text.secondary"
            >
              {t('revenue')}
            </Typography>
          </Box>
          <Box>
            <SparkLineChart
              data={generateRandomData()}
              height={120}
              showTooltip
              curve="linear"
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
          borderPosition="top"
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            p={2}
          >
            <Typography color="success.main">
              <BallotTwoToneIcon fontSize="large" />
            </Typography>
            <IconButton size="small">
              <MoreHorizTwoToneIcon />
            </IconButton>
          </Box>
          <Box px={2}>
            <Typography
              component="span"
              sx={{
                lineHeight: 1,
                pr: 0.6,
              }}
              variant="h3"
            >
              763
            </Typography>
            <Typography
              component="span"
              variant="subtitle2"
              color="text.secondary"
            >
              {t('bugfixes')}
            </Typography>
          </Box>
          <Box>
            <SparkLineChart
              data={generateRandomData()}
              height={120}
              showTooltip
              curve="linear"
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
