import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import {
  alpha,
  Avatar,
  Badge,
  Box,
  Card,
  CircularProgress,
  circularProgressClasses,
  Unstable_Grid2 as Grid,
  IconButton,
  Stack,
  styled,
  Theme,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { formatDistance, subMinutes } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { DividerLight } from 'src/components/base/styles/card';

const DotLegend = styled('span')(({ theme }) => ({
  borderRadius: '22px',
  width: theme.spacing(1.5),
  height: theme.spacing(1.5),
  display: 'inline-block',
  marginRight: theme.spacing(0.5),
  border: `${theme.palette.background.paper} solid 2px`,
}));

const generateRandomData = (): number[] =>
  Array.from({ length: 6 }, () => Math.floor(Math.random() * 1000));

const salesData = generateRandomData();
const expenseData = generateRandomData();
const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  const data = {
    percentageLocal: 63,
    percentageExternal: 37,
  };

  return (
    <Card
      sx={{
        background: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%) !important',
      }}
    >
      <Box>
        <Box p={2}>
          <LineChart
            height={260}
            slotProps={{ legend: { hidden: true } }}
            leftAxis={null}
            bottomAxis={null}
            margin={{ top: 12, bottom: 12, left: 12, right: 12 }}
            series={[
              {
                data: expenseData,
                label: 'Current period',
                area: true,
                color: theme.palette.primary.main,
              },
              {
                data: salesData,
                label: 'Previous period',
                area: false,
                showMark: false,
                color: theme.palette.success.main,
              },
            ]}
            xAxis={[
              {
                scaleType: 'point',
                data: monthLabels,
              },
            ]}
            sx={{
              '.MuiAreaElement-root': {
                fillOpacity: 0.1,
                fill: "url('#primaryGradient')",
              },
              '.MuiMarkElement-root': {
                fill: theme.palette.primary.main,
              },
              '.MuiLineElement-root': {
                strokeLinecap: 'round',

                '&:nth-of-type(1)': {
                  strokeWidth: 3,
                  strokeDasharray: '4 8',
                },
                '&:nth-of-type(2)': {
                  strokeWidth: 2,
                  strokeOpacity: 0.8,
                },
              },
              '.MuiHighlightElement-root': {
                scale: '1.5',
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
                  stopColor={theme.palette.primary.main}
                />
                <stop
                  offset="100%"
                  stopColor={alpha(theme.palette.primary.main, 0)}
                />
              </linearGradient>
            </defs>
          </LineChart>
        </Box>
      </Box>
      <Stack
        sx={{
          py: { xs: 2, sm: 3 },
        }}
        direction={{ xs: 'column', sm: 'row' }}
        divider={
          <DividerLight
            orientation={smUp ? 'vertical' : 'horizontal'}
            flexItem
          />
        }
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <Box>
          <Typography
            variant="subtitle1"
            textAlign="center"
            color="common.white"
            sx={{
              pb: 2,
            }}
            fontWeight={600}
          >
            {t('Returning Users')}
          </Typography>
          <Box
            display="inline-flex"
            position="relative"
          >
            <Typography
              position="absolute"
              top={0}
              left={0}
              width={148}
              height={148}
              display="flex"
              justifyContent="center"
              alignItems="center"
              variant="h4"
            >
              {data.percentageLocal}%
            </Typography>
            <CircularProgress
              variant="determinate"
              color="info"
              sx={{
                opacity: 0.3,
              }}
              size={148}
              thickness={6}
              value={100}
            />
            <CircularProgress
              size={148}
              color="info"
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                top: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round',
                },
              }}
              thickness={6}
              variant="determinate"
              value={data.percentageLocal}
            />
          </Box>
        </Box>
        <Box>
          <Typography
            variant="subtitle1"
            textAlign="center"
            color="common.white"
            sx={{
              pb: 2,
            }}
            fontWeight={600}
          >
            {t('New Customers')}
          </Typography>
          <Box
            display="inline-flex"
            position="relative"
          >
            <Typography
              position="absolute"
              top={0}
              left={0}
              width={148}
              height={148}
              display="flex"
              justifyContent="center"
              alignItems="center"
              variant="h4"
            >
              {data.percentageExternal}%
            </Typography>
            <CircularProgress
              variant="determinate"
              color="success"
              sx={{
                opacity: 0.3,
              }}
              size={148}
              thickness={6}
              value={100}
            />
            <CircularProgress
              size={148}
              color="success"
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                top: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round',
                },
              }}
              thickness={6}
              variant="determinate"
              value={data.percentageExternal}
            />
          </Box>
        </Box>
      </Stack>
      <Box p={{ xs: 2, sm: 3 }}>
        <Grid
          container
          spacing={{ xs: 2, sm: 3 }}
        >
          <Grid
            xs={12}
            sm={6}
          >
            <Card sx={{ p: 2 }}>
              <Box
                mb={{ xs: 2, sm: 3 }}
                display="flex"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Box
                  display="flex"
                  alignItems="center"
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
                          formatDistance(subMinutes(new Date(), 37), new Date(), {
                            addSuffix: true,
                          })
                        }
                      >
                        <DotLegend
                          style={{
                            background: theme.palette.success.main,
                          }}
                        />
                      </Tooltip>
                    }
                  >
                    <Avatar
                      sx={{
                        height: 54,
                        width: 54,
                      }}
                      alt="Leonardo Delgado"
                      src="/avatars/3.png"
                    />
                  </Badge>
                  <Box
                    sx={{
                      ml: 1,
                    }}
                  >
                    <Typography
                      variant="caption"
                      gutterBottom
                      color="text.secondary"
                      noWrap
                    >
                      {t('Customer')}
                    </Typography>
                    <Typography
                      variant="h5"
                      noWrap
                    >
                      Leonardo D.
                    </Typography>
                  </Box>
                </Box>
                <IconButton
                  size="small"
                  color="secondary"
                >
                  <MoreHorizTwoToneIcon />
                </IconButton>
              </Box>
              <Typography
                variant="h3"
                component="span"
              >
                1865
              </Typography>
              <Typography
                variant="h6"
                component="span"
                color="text.secondary"
              >
                {' '}
                {t('purchases')}
              </Typography>
            </Card>
          </Grid>
          <Grid
            xs={12}
            sm={6}
          >
            <Card sx={{ p: 2 }}>
              <Box
                mb={{ xs: 2, sm: 3 }}
                display="flex"
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Box
                  display="flex"
                  alignItems="center"
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
                          formatDistance(subMinutes(new Date(), 37), new Date(), {
                            addSuffix: true,
                          })
                        }
                      >
                        <DotLegend
                          style={{
                            background: theme.palette.success.main,
                          }}
                        />
                      </Tooltip>
                    }
                  >
                    <Avatar
                      sx={{
                        width: 54,
                        height: 54,
                      }}
                      alt="Brynn Kayghton"
                      src="/avatars/5.png"
                    />
                  </Badge>
                  <Box
                    sx={{
                      ml: 1,
                    }}
                  >
                    <Typography
                      variant="caption"
                      gutterBottom
                      color="text.secondary"
                      noWrap
                    >
                      {t('Client')}
                    </Typography>
                    <Typography
                      variant="h5"
                      noWrap
                    >
                      Brynn K.
                    </Typography>
                  </Box>
                </Box>
                <IconButton
                  size="small"
                  color="secondary"
                >
                  <MoreHorizTwoToneIcon />
                </IconButton>
              </Box>
              <Typography
                variant="h3"
                component="span"
              >
                76
              </Typography>
              <Typography
                variant="h6"
                component="span"
                color="text.secondary"
              >
                {' '}
                {t('visits today')}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default Component;
