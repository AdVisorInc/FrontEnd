import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import CloudDownloadTwoToneIcon from '@mui/icons-material/CloudDownloadTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  LinearProgress,
  List,
  ListItem,
  Typography,
  useTheme,
} from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useTranslation } from 'react-i18next';

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <Box
        display="flex"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
        p={{ xs: 2, sm: 3 }}
        justifyContent="space-between"
      >
        <Box width={{ xs: '100%', sm: 'auto' }}>
          <Typography variant="h4">{t('Revenue progress')}</Typography>
          <Typography
            component="div"
            fontWeight={400}
            color="text.secondary"
            variant="h5"
          >
            {t('Our company revenues, split by progress')}
          </Typography>
        </Box>
        <Button
          sx={{
            mt: { xs: 2, sm: 0 },
            whiteSpace: 'nowrap',
          }}
          size="small"
          color="secondary"
          variant="outlined"
          startIcon={<CloudDownloadTwoToneIcon />}
        >
          {t('Download report')}
        </Button>
      </Box>
      <Divider />
      <Box p={{ xs: 2, sm: 3 }}>
        <Grid
          container
          spacing={{ xs: 2, sm: 3 }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            xs={12}
            md={5}
            alignItems="center"
            justifyContent="center"
          >
            <List
              sx={{
                width: '100%',
              }}
              disablePadding
            >
              <ListItem
                disableGutters
                sx={{
                  display: 'block',
                }}
              >
                <Box pb={0.5}>
                  <Typography
                    component="span"
                    variant="h3"
                    sx={{
                      pr: 1,
                    }}
                  >
                    54,695
                  </Typography>
                  <Typography
                    component="span"
                    variant="subtitle2"
                  >
                    dribbble.com
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      mr: 1.5,
                    }}
                  >
                    <LinearProgress
                      color="error"
                      variant="determinate"
                      value={34}
                    />
                  </Box>
                  <Box
                    sx={{
                      minWidth: 35,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: theme.palette.error.main,
                      }}
                    >
                      34%
                    </Typography>
                  </Box>
                </Box>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  display: 'block',
                }}
              >
                <Box pb={0.5}>
                  <Typography
                    component="span"
                    variant="h3"
                    sx={{
                      pr: 1,
                    }}
                  >
                    12,543
                  </Typography>
                  <Typography
                    component="span"
                    variant="subtitle2"
                  >
                    amazon.com
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      mr: 1.5,
                    }}
                  >
                    <LinearProgress
                      color="success"
                      variant="determinate"
                      value={21}
                    />
                  </Box>
                  <Box
                    sx={{
                      minWidth: 35,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: theme.palette.success.main,
                      }}
                    >
                      21%
                    </Typography>
                  </Box>
                </Box>
              </ListItem>

              <ListItem
                disableGutters
                sx={{
                  display: 'block',
                }}
              >
                <Box pb={0.5}>
                  <Typography
                    component="span"
                    variant="h3"
                    sx={{
                      pr: 1,
                    }}
                  >
                    6,374
                  </Typography>
                  <Typography
                    component="span"
                    variant="subtitle2"
                  >
                    youtube.com
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      mr: 1.5,
                    }}
                  >
                    <LinearProgress
                      color="info"
                      variant="determinate"
                      value={15}
                    />
                  </Box>
                  <Box
                    sx={{
                      minWidth: 35,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: theme.palette.info.main,
                      }}
                    >
                      15%
                    </Typography>
                  </Box>
                </Box>
              </ListItem>

              <ListItem
                disableGutters
                sx={{
                  display: 'block',
                }}
              >
                <Box pb={0.5}>
                  <Typography
                    component="span"
                    variant="h3"
                    sx={{
                      pr: 1,
                    }}
                  >
                    65,492
                  </Typography>
                  <Typography
                    component="span"
                    variant="subtitle2"
                  >
                    facebook.com
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      mr: 1.5,
                    }}
                  >
                    <LinearProgress
                      color="primary"
                      variant="determinate"
                      value={65}
                    />
                  </Box>
                  <Box
                    sx={{
                      minWidth: 35,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: theme.palette.primary.main,
                      }}
                    >
                      65%
                    </Typography>
                  </Box>
                </Box>
              </ListItem>
            </List>
          </Grid>
          <Grid
            xs={12}
            md={7}
            alignItems="center"
            justifyContent="center"
          >
            <Box
              sx={{
                p: 1,
                borderRadius: theme.shape.borderRadius + 'px',
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.neutral[25], 0.02)
                    : 'neutral.25',
              }}
            >
              <SparkLineChart
                plotType="bar"
                data={[1, 4, 2, 5, 7, 2, 4, 6]}
                height={260}
                showHighlight={false}
                showTooltip={true}
                sx={{
                  '.MuiBarElement-root': {
                    fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
                    rx: theme.shape.borderRadius / 1.5,
                    fill: "url('#successGradient')",
                  },
                }}
              >
                <defs>
                  <linearGradient
                    id="successGradient"
                    gradientTransform="rotate(90)"
                  >
                    <stop
                      offset="0%"
                      stopColor={theme.palette.success.light}
                    />
                    <stop
                      offset="100%"
                      stopColor={theme.palette.success.dark}
                    />
                  </linearGradient>
                </defs>
              </SparkLineChart>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box
        textAlign="center"
        p={{ xs: 2, sm: 3 }}
      >
        <Button
          variant="contained"
          endIcon={<ArrowForwardTwoToneIcon />}
        >
          {t('View complete report')}
        </Button>
      </Box>
    </Card>
  );
}

export default Component;
