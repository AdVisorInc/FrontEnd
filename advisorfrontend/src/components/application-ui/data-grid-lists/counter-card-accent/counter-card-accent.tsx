import { alpha, Box, Card, Unstable_Grid2 as Grid, Typography, useTheme } from '@mui/material';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

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
        sm={6}
        lg={3}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3 },
            background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%) !important',
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: theme.palette.common.white,
            }}
          >
            {t('Income')}
          </Typography>
          <Box
            pt={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h2"
              sx={{
                color: theme.palette.common.white,
              }}
            >
              <CountUp
                start={0}
                end={3.21}
                duration={6}
                separator=""
                delay={1}
                decimals={2}
                decimal=","
                prefix="$"
                suffix="M"
              />
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: alpha(theme.palette.common.white, 0.7),
              }}
            >
              +35.2%
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        sm={6}
        lg={3}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3 },
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important',
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: theme.palette.common.white,
            }}
          >
            {t('Spendings')}
          </Typography>
          <Box
            pt={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h2"
              sx={{
                color: theme.palette.common.white,
              }}
            >
              <CountUp
                start={0}
                end={45.347}
                duration={6}
                separator=""
                delay={2}
                decimals={3}
                decimal=","
                prefix="$"
                suffix=""
              />
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: alpha(theme.palette.common.white, 0.7),
              }}
            >
              +3.25%
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        sm={6}
        lg={3}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3 },
            background: 'linear-gradient(to bottom, #00b09b, #96c93d)!important',
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: theme.palette.common.white,
            }}
          >
            {t('Earnings')}
          </Typography>
          <Box
            pt={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h2"
              sx={{
                color: theme.palette.common.white,
              }}
            >
              <CountUp
                start={0}
                end={5873}
                duration={6}
                separator=","
                delay={2}
                decimals={1}
                decimal="."
                prefix="$"
                suffix=""
              />
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: alpha(theme.palette.common.white, 0.7),
              }}
            >
              +75.25%
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        sm={6}
        lg={3}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3 },
            background: 'linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%) !important',
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: theme.palette.common.white,
            }}
          >
            {t('Losses')}
          </Typography>
          <Box
            pt={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h2"
              sx={{
                color: theme.palette.common.white,
              }}
            >
              <CountUp
                start={0}
                end={7.685}
                duration={6}
                separator=""
                delay={4}
                decimals={3}
                decimal=","
                prefix="$"
                suffix=""
              />
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: alpha(theme.palette.common.white, 0.7),
              }}
            >
              +65.35%
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
