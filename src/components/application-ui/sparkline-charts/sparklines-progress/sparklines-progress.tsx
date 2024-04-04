import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useTranslation } from 'react-i18next';

const generateRandomData = (): number[] =>
  Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000));

const DotLegend = styled('span')(({ theme }) => ({
  borderRadius: theme.spacing(2),
  width: theme.spacing(2),
  height: theme.spacing(2),
  display: 'inline-block',
  border: `${theme.palette.background.paper} solid 3px`,
}));

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(5),
  height: theme.spacing(5),
  background: 'transparent',
}));

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
        lg={4}
        md={6}
      >
        <Card>
          <Box
            display="flex"
            alignItems="center"
            p={2}
          >
            <Badge
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              overlap="circular"
              badgeContent={<DotLegend style={{ background: theme.palette.error.main }} />}
            >
              <AvatarWrapper
                alt="Spotify"
                src="/placeholders/logo/spotify.svg"
              />
            </Badge>
            <Box pl={1}>
              <Typography
                variant="h5"
                noWrap
              >
                Spotify
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                noWrap
              >
                {t('New customer')}
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box p={{ xs: 1, sm: 2 }}>
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
          <Divider />
          <Box
            p={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              size="small"
              color="error"
            >
              {t('Delete')}
            </Button>
            <Button
              variant="outlined"
              size="small"
              color="secondary"
            >
              {t('View details')}
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card>
          <Box
            display="flex"
            alignItems="center"
            p={2}
          >
            <AvatarWrapper
              sx={{
                fontSize: theme.typography.pxToRem(16),
                color: theme.palette.common.white,
                background: 'linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%) !important',
              }}
            >
              EJ
            </AvatarWrapper>
            <Box pl={1}>
              <Typography
                variant="h5"
                noWrap
              >
                Eric Johnson
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                noWrap
              >
                {t('Elite pro author')}
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box p={{ xs: 1, sm: 2 }}>
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
          <Divider />
          <Box
            p={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              size="small"
              color="error"
            >
              {t('Delete')}
            </Button>
            <Button
              variant="outlined"
              size="small"
              color="secondary"
            >
              {t('View details')}
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card>
          <Box
            display="flex"
            alignItems="center"
            p={2}
          >
            <AvatarWrapper
              alt="Slack"
              src="/placeholders/logo/slack.svg"
            />
            <Box pl={1}>
              <Typography
                variant="h5"
                noWrap
              >
                Slack
              </Typography>
              <Typography
                variant="subtitle2"
                color="warning.main"
                noWrap
              >
                {t('Overdue bills')}
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box p={{ xs: 1, sm: 2 }}>
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
          <Divider />
          <Box
            p={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              size="small"
              color="error"
            >
              {t('Delete')}
            </Button>
            <Button
              variant="outlined"
              size="small"
              color="secondary"
            >
              {t('View details')}
            </Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
