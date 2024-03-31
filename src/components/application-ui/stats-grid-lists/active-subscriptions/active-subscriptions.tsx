import { Box, Button, Card, Chip, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function ActiveSubscriptions() {
  const { t } = useTranslation();

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 2,
        }}
      >
        <Typography variant="h4">{t('Active Subscriptions')}</Typography>
        <Button
          color="secondary"
          variant="outlined"
          size="small"
        >
          {t('View all')}
        </Button>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
      >
        <Grid
          sm={6}
          xs={12}
        >
          <Card
            sx={{
              p: 2,
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                display="flex"
                alignItems="center"
              >
                <img
                  alt="Spotify"
                  src="/placeholders/logo/spotify.svg"
                />
                <Typography
                  variant="h5"
                  sx={{
                    pl: 1,
                  }}
                  noWrap
                >
                  Spotify
                </Typography>
              </Box>
              <Box
                sx={{
                  fontWeight: 'normal',
                }}
              >
                <Chip
                  label={
                    <>
                      {t('due in')}&nbsp;<b>17 {t('days')}</b>
                    </>
                  }
                  color="warning"
                />
              </Box>
            </Box>
            <Box
              sx={{
                pt: 4,
              }}
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Typography
                sx={{
                  pr: 1.5,
                }}
                variant="h3"
              >
                $32.00
              </Typography>
              <Button
                size="small"
                variant="outlined"
              >
                {t('Pay')}
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid
          sm={6}
          xs={12}
        >
          <Card
            sx={{
              p: 2,
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                display="flex"
                alignItems="center"
              >
                <img
                  alt="Slack"
                  src="/placeholders/logo/slack.svg"
                />
                <Typography
                  variant="h5"
                  sx={{
                    pl: 1,
                  }}
                  noWrap
                >
                  Slack
                </Typography>
              </Box>
              <Box
                sx={{
                  fontWeight: 'normal',
                }}
              >
                <Chip
                  label={t('just paid')}
                  color="success"
                />
              </Box>
            </Box>
            <Box
              sx={{
                pt: 4,
              }}
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Typography
                sx={{
                  pr: 1.5,
                }}
                variant="h3"
              >
                $9.99
              </Typography>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
              >
                {t('View')}
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid
          sm={6}
          xs={12}
        >
          <Card
            sx={{
              p: 2,
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                display="flex"
                alignItems="center"
              >
                <img
                  height={28}
                  alt="Google"
                  src="/placeholders/logo/google-icon.svg"
                />
                <Typography
                  variant="h5"
                  sx={{
                    pl: 1,
                  }}
                  noWrap
                >
                  Google
                </Typography>
              </Box>
              <Box
                sx={{
                  fontWeight: 'normal',
                }}
              >
                <Chip
                  label={
                    <>
                      {t('due in')}&nbsp;<b>3 {t('days')}</b>
                    </>
                  }
                  color="error"
                />
              </Box>
            </Box>
            <Box
              sx={{
                pt: 4,
              }}
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Typography
                sx={{
                  pr: 1.5,
                }}
                variant="h3"
              >
                $8,695.00
              </Typography>
              <Button
                size="small"
                variant="outlined"
              >
                {t('Pay')}
              </Button>
            </Box>
          </Card>
        </Grid>
        <Grid
          sm={6}
          xs={12}
        >
          <Card
            sx={{
              p: 2,
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                display="flex"
                alignItems="center"
              >
                <img
                  height={28}
                  alt="Airbnb"
                  src="/placeholders/logo/airbnb.svg"
                />
                <Typography
                  variant="h5"
                  sx={{
                    pl: 1,
                  }}
                  noWrap
                >
                  Airbnb
                </Typography>
              </Box>
              <Box
                sx={{
                  fontWeight: 'normal',
                }}
              >
                <Chip
                  label={
                    <>
                      {t('due in')}&nbsp;<b>8 {t('months')}</b>
                    </>
                  }
                  color="success"
                />
              </Box>
            </Box>
            <Box
              sx={{
                pt: 4,
              }}
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Typography
                sx={{
                  pr: 1.5,
                }}
                variant="h3"
              >
                $499.00
              </Typography>
              <Button
                size="small"
                variant="outlined"
              >
                {t('View')}
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default ActiveSubscriptions;
