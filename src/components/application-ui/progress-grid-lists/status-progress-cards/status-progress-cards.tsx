import { Box, Card, Unstable_Grid2 as Grid, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LinearProgressSlim } from 'src/components/base/styles/progress-bar';

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
        <Card
          sx={{
            p: { xs: 1.5, sm: 2.5 },
            flexGrow: 1,
          }}
        >
          <Box
            mb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h5">{t('Deliveries')}</Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                noWrap
              >
                {t('Total deliveries to date')}
              </Typography>
            </Box>
            <Typography variant="h3">23,594</Typography>
          </Box>
          <LinearProgressSlim
            color="secondary"
            variant="determinate"
            value={66.43}
          />
          <Box
            display="flex"
            sx={{
              mt: 0.6,
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              color="text.secondary"
              variant="subtitle2"
            >
              {t('Target')}
            </Typography>
            <Typography
              color="text.secondary"
              variant="subtitle2"
            >
              100%
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            p: { xs: 1.5, sm: 2.5 },
            flexGrow: 1,
          }}
        >
          <Box
            mb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h5">{t('Orders')}</Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                noWrap
              >
                {t('Total orders to date')}
              </Typography>
            </Box>
            <Typography
              variant="h3"
              color="info.main"
            >
              $12,346
            </Typography>
          </Box>
          <LinearProgressSlim
            color="info"
            variant="determinate"
            value={44.32}
          />
          <Box
            display="flex"
            sx={{
              mt: 0.6,
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              color="text.secondary"
              variant="subtitle2"
            >
              {t('Target')}
            </Typography>
            <Typography
              color="text.secondary"
              variant="subtitle2"
            >
              100%
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            p: { xs: 1.5, sm: 2.5 },
            flexGrow: 1,
          }}
        >
          <Box
            mb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h5">{t('Customers')}</Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                noWrap
              >
                {t('Total customers to date')}
              </Typography>
            </Box>
            <Typography
              variant="h3"
              sx={{
                color: theme.palette.warning.main,
              }}
            >
              $2.31M
            </Typography>
          </Box>
          <LinearProgressSlim
            color="warning"
            variant="determinate"
            value={37.21}
          />
          <Box
            display="flex"
            sx={{
              mt: 0.6,
            }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              color="text.secondary"
              variant="subtitle2"
            >
              {t('Target')}
            </Typography>
            <Typography
              color="text.secondary"
              variant="subtitle2"
            >
              100%
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
