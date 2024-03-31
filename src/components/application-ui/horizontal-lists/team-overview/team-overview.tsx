import {
  Avatar,
  Badge,
  Box,
  Unstable_Grid2 as Grid,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { formatDistance, subDays, subHours, subMinutes } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { LinearProgressSlim } from 'src/components/base/styles/progress-bar';

const DotLegend = styled('span')(({ theme }) => ({
  borderRadius: '22px',
  width: theme.spacing(1.5),
  height: theme.spacing(1.5),
  display: 'inline-block',
  marginRight: theme.spacing(0.5),
  border: `${theme.palette.background.paper} solid 2px`,
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
        md={4}
        sm={6}
      >
        <Box>
          <Box
            display="flex"
            alignItems="center"
            pb={2}
          >
            <Badge
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              overlap="circular"
              badgeContent={
                <Tooltip
                  arrow
                  placement="top"
                  title={
                    t('Offline since') +
                    ' ' +
                    formatDistance(subDays(new Date(), 14), new Date(), {
                      addSuffix: true,
                    })
                  }
                >
                  <DotLegend style={{ background: theme.palette.error.main }} />
                </Tooltip>
              }
            >
              <Avatar
                sx={{
                  width: 54,
                  height: 54,
                }}
                alt="Remy Sharp"
                src="/avatars/4.png"
              />
            </Badge>
            <Box
              sx={{
                ml: 1.5,
              }}
            >
              <Typography
                variant="h5"
                noWrap
              >
                Hanna Siphron
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                noWrap
              >
                {t('Web Dev Support Team')}
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="subtitle2"
            gutterBottom
          >
            4 {t('out of')} 6 {t('tasks completed')}
          </Typography>
          <LinearProgressSlim
            value={65}
            color="primary"
            variant="determinate"
          />
        </Box>
      </Grid>
      <Grid
        xs={12}
        md={4}
        sm={6}
      >
        <Box>
          <Box
            display="flex"
            alignItems="center"
            pb={2}
          >
            <Badge
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              overlap="circular"
              badgeContent={
                <Tooltip
                  arrow
                  placement="top"
                  title={
                    t('Online since') +
                    ' ' +
                    formatDistance(subMinutes(new Date(), 6), new Date(), {
                      addSuffix: true,
                    })
                  }
                >
                  <DotLegend style={{ background: theme.palette.success.main }} />
                </Tooltip>
              }
            >
              <Avatar
                sx={{
                  width: 54,
                  height: 54,
                }}
                alt="Ann Saris"
                src="/avatars/3.png"
              />
            </Badge>
            <Box
              sx={{
                ml: 1.5,
              }}
            >
              <Typography
                variant="h5"
                noWrap
              >
                Ann Saris
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                noWrap
              >
                {t('Senior Book Keeper')}
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="subtitle2"
            gutterBottom
          >
            2 {t('out of')} 8 {t('tasks completed')}
          </Typography>
          <LinearProgressSlim
            value={25}
            color="primary"
            variant="determinate"
          />
        </Box>
      </Grid>
      <Grid
        xs={12}
        md={4}
        sm={6}
      >
        <Box>
          <Box
            display="flex"
            alignItems="center"
            pb={2}
          >
            <Badge
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              overlap="circular"
              badgeContent={
                <Tooltip
                  arrow
                  placement="top"
                  title={
                    t('Offline since') +
                    ' ' +
                    formatDistance(subHours(new Date(), 7), new Date(), {
                      addSuffix: true,
                    })
                  }
                >
                  <DotLegend style={{ background: theme.palette.error.main }} />
                </Tooltip>
              }
            >
              <Avatar
                sx={{
                  width: 54,
                  height: 54,
                }}
                alt="James Stanton"
                src="/avatars/5.png"
              />
            </Badge>
            <Box
              sx={{
                ml: 1.5,
              }}
            >
              <Typography
                variant="h5"
                noWrap
              >
                James Stanton
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                noWrap
              >
                {t('Phone Pre-Sales Assistant')}
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="subtitle2"
            gutterBottom
          >
            10 {t('out of')} 20 {t('tasks completed')}
          </Typography>
          <LinearProgressSlim
            value={50}
            color="primary"
            variant="determinate"
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Component;
