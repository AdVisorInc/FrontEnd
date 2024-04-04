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
            p: 2,
            boxShadow: `
                    0 0.47rem 2.2rem ${alpha(theme.palette.success.main, 0.04)}, 
                    0 0.94rem 1.4rem ${alpha(theme.palette.success.main, 0.04)}, 
                    0 0.25rem 0.54rem ${alpha(theme.palette.success.main, 0.06)}, 
                    0 0.13rem 0.19rem ${alpha(theme.palette.success.main, 0.04)}`,
          }}
        >
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {t('Expenses')}
          </Typography>
          <Box
            pt={1.5}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h2"
              sx={{ color: 'success.main' }}
            >
              <CountUp
                start={0}
                end={4.658}
                duration={6}
                separator=""
                delay={1}
                decimals={3}
                decimal=","
                prefix="$"
                suffix=""
              />
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: 'success.main' }}
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
            p: 2,
            boxShadow: `
                    0 0.47rem 2.2rem ${alpha(theme.palette.warning.main, 0.04)}, 
                    0 0.94rem 1.4rem ${alpha(theme.palette.warning.main, 0.04)}, 
                    0 0.25rem 0.54rem ${alpha(theme.palette.warning.main, 0.06)}, 
                    0 0.13rem 0.19rem ${alpha(theme.palette.warning.main, 0.04)}`,
          }}
        >
          <Typography
            variant="subtitle2"
            color="text.secondary"
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
                color: theme.palette.warning.main,
              }}
            >
              <CountUp
                start={0}
                end={18.564}
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
                color: theme.palette.warning.main,
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
            p: 2,
            boxShadow: `
                    0 0.47rem 2.2rem ${alpha(theme.palette.info.main, 0.04)}, 
                    0 0.94rem 1.4rem ${alpha(theme.palette.info.main, 0.04)}, 
                    0 0.25rem 0.54rem ${alpha(theme.palette.info.main, 0.06)}, 
                    0 0.13rem 0.19rem ${alpha(theme.palette.info.main, 0.04)}`,
          }}
        >
          <Typography
            variant="subtitle2"
            color="text.secondary"
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
              color="info.main"
            >
              <CountUp
                start={0}
                end={56.484}
                duration={6}
                separator=""
                delay={3}
                decimals={3}
                decimal=","
                prefix="$"
                suffix=""
              />
            </Typography>
            <Typography
              variant="h5"
              color="info.main"
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
            p: 2,
            boxShadow: `
                    0 0.47rem 2.2rem ${alpha(theme.palette.error.main, 0.04)}, 
                    0 0.94rem 1.4rem ${alpha(theme.palette.error.main, 0.04)}, 
                    0 0.25rem 0.54rem ${alpha(theme.palette.error.main, 0.06)}, 
                    0 0.13rem 0.19rem ${alpha(theme.palette.error.main, 0.04)}`,
          }}
        >
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {t('Visitors')}
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
                color: 'error.main',
              }}
            >
              <CountUp
                start={0}
                end={5849}
                duration={6}
                separator=""
                delay={4}
                decimals={0}
                decimal=","
                prefix=""
                suffix=""
              />
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'error.main',
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
