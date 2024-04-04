import {
  BarChartRounded,
  DataThresholdingRounded,
  AutoGraphRounded,
  TuneRounded,
} from '@mui/icons-material';
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Unstable_Grid2 as Grid,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { formatDistance } from 'date-fns';
import Tilt from 'react-parallax-tilt';
import { AvatarState } from 'src/components/base/styles/avatar';

const HomepageRegularUpdates = () => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      flex={1}
      sx={{
        position: 'relative',

        '&::after': {
          content: '" "',
          position: 'absolute',
          top: 0,
          opacity: 0.5,
          right: 0,
          width: '75%',
          height: '60%',
          backgroundImage: 'url(/placeholders/covers/glow.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundPosition: 'right top',
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ height: '100%', zIndex: 2, position: 'relative' }}
      >
        <Box
          flex={1}
          pl={{ xs: 0, md: 16 }}
          py={{ xs: 6, md: 10 }}
          position="relative"
          display="flex"
          flexDirection="column"
        >
          {mdUp && (
            <Box
              sx={{
                width: 4,
                backgroundColor: 'success.main',
                position: 'absolute',
                left: theme.spacing(1.3),
                top: theme.spacing(0),

                '&::before': {
                  content: '" "',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 4,
                  height: 130,
                  backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 20%, ${theme.palette.success.main} 100%)`,
                },
              }}
            >
              <Box
                sx={{
                  width: theme.spacing(11),
                  height: theme.spacing(12.5),
                  background: 'none',
                  borderLeft: `4px solid ${theme.palette.success.main}`,
                  borderBottom: `4px solid ${theme.palette.success.main}`,
                  borderBottomLeftRadius: theme.shape.borderRadius * 3,
                  position: 'absolute',
                  zIndex: 3,
                  top: theme.spacing(9.5),
                  left: theme.spacing(0),
                  boxShadow: `-35px 35px 35px 0 ${alpha(
                    theme.palette.background.paper,
                    0.5
                  )}, -40px 45px 45px 0 ${alpha(theme.palette.success.main, 0.15)}`,

                  '&&::after': {
                    content: '" "',
                    position: 'absolute',
                    bottom: -4,
                    right: 0,
                    width: 60,
                    height: 4,
                    backgroundImage: `linear-gradient(45deg, ${theme.palette.success.main} 20%, ${theme.palette.background.default} 100%)`,
                  },
                }}
              />
              <Box
                sx={{
                  width: theme.spacing(11),
                  height: theme.spacing(31),
                  background: 'none',
                  borderLeft: `4px solid ${theme.palette.success.main}`,
                  borderBottom: `4px solid ${theme.palette.success.main}`,
                  borderBottomLeftRadius: theme.shape.borderRadius * 3,
                  position: 'absolute',
                  zIndex: 3,
                  top: theme.spacing(9.5),
                  left: theme.spacing(0),
                  boxShadow: `-35px 35px 35px 0 ${alpha(
                    theme.palette.background.paper,
                    0.5
                  )}, -40px 45px 45px 0 ${alpha(theme.palette.success.main, 0.15)}`,

                  '&&::after': {
                    content: '" "',
                    position: 'absolute',
                    bottom: -4,
                    right: 0,
                    width: 60,
                    height: 4,
                    backgroundImage: `linear-gradient(45deg, ${theme.palette.success.main} 20%, ${theme.palette.background.default} 100%)`,
                  },
                }}
              >
                <Box
                  sx={{
                    borderRadius: 100,
                    zIndex: 4,
                    backgroundColor: 'success.main',
                    border: '1px solid background.paper',
                    width: 22,
                    height: 22,
                    left: theme.spacing(-1.3),
                    top: theme.spacing(0),
                    position: 'absolute',
                    boxShadow: `0 0 0 3px ${theme.palette.background.paper}, 0 3px 12px 0 ${alpha(
                      theme.palette.success.main,
                      0.8
                    )}`,

                    '&::after': {
                      borderRadius: 'inherit',
                      content: '" "',
                      position: 'absolute',
                      top: 6,
                      left: 6,
                      width: 10,
                      height: 10,
                      backgroundColor: 'common.white',
                      boxShadow: `0 5px 35px 5px ${theme.palette.success.main}`,
                    },
                  }}
                />
              </Box>
            </Box>
          )}
          <Box flex={1}>
            <Chip
              variant="outlined"
              color="success"
              sx={{
                borderRadius: theme.shape.borderRadius,
              }}
              label={
                <>
                  <Typography variant="h5">Always Evolving. Always Ahead.</Typography>
                </>
              }
            />
            <Grid container>
              <Grid
                xs={12}
                md={10}
                lg={8}
                xl={6}
                py={{ xs: 2, sm: 4 }}
              >
                <Typography
                  variant="h1"
                  gutterBottom
                  lineHeight={1.4}
                  color="text.primary"
                >
                  Stay Ahead of the Curve with AdVisor's Continuous Updates and Improvements
                </Typography>
              </Grid>
            </Grid>
            <Grid
              mt={{ xs: 0, sm: 1 }}
              container
              spacing={{ xs: 2, sm: 3 }}
            >
              <Grid xs={12}>
                <Tilt
                  scale={1}
                  tiltMaxAngleX={1.26}
                  perspective={1300}
                  glarePosition="all"
                  glareEnable={true}
                  glareColor={theme.palette.success.main}
                  glareMaxOpacity={0.05}
                  tiltMaxAngleY={1.26}
                >
                  <Card
                    elevation={0}
                    variant="outlined"
                    sx={{
                      boxShadow: theme.shadows[18],
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                      <Stack
                        spacing={2}
                        direction={{ xs: 'column', xl: 'row' }}
                      >
                        <Box flex={1}>
                          <Typography
                            variant="h3"
                            component="h5"
                            gutterBottom
                          >
                            Continuous Updates and Improvements
                          </Typography>
                          <Typography
                            variant="h4"
                            color="text.secondary"
                            fontWeight={400}
                            sx={{ pb: 2 }}
                          >
                            AdVisor is committed to staying at the forefront of digital marketing innovation.
                            We continuously update our platform with the latest features, algorithms, and best practices
                            to ensure you always have access to the most advanced tools and insights.
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: theme.shape.borderRadius + 'px',
                            backgroundColor: 'background.default',
                          }}
                          textAlign="center"
                        >
                          <Box>
                            <Typography
                              variant="h4"
                              component="p"
                              sx={{ pb: 0.5 }}
                            >
                              AdVisor 1.0.0
                            </Typography>
                            <Typography
                              variant="h4"
                              color="text.secondary"
                              fontWeight={500}
                              component="p"
                              lineHeight={1}
                            >
                              Last updated{' '}
                              <Typography
                                color="text.primary"
                                fontWeight={600}
                                component="span"
                                variant="h4"
                                lineHeight={1}
                              >
                                {formatDistance(new Date('2024-03-21'), new Date(), {
                                  addSuffix: true,
                                })}
                              </Typography>
                            </Typography>
                          </Box>
                          <Box
                            flexWrap="wrap"
                            gap={1}
                            display="flex"
                            sx={{ mt: { xs: 2, sm: 3 } }}
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Chip
                              variant="outlined"
                              color="primary"
                              sx={{
                                borderRadius: theme.shape.borderRadius,
                              }}
                              label={
                                <Box
                                  display="flex"
                                  gap={1}
                                  alignItems="center"
                                >
                                  <Typography variant="subtitle2">Python</Typography>
                                  <Typography
                                    variant="subtitle2"
                                    fontWeight={600}
                                  >
                                    3.9
                                  </Typography>
                                </Box>
                              }
                            />
                            <Chip
                              color="success"
                              variant="outlined"
                              sx={{
                                borderRadius: theme.shape.borderRadius,
                              }}
                              label={
                                <Box
                                  display="flex"
                                  gap={1}
                                  alignItems="center"
                                >
                                  <Typography variant="subtitle2">TensorFlow</Typography>
                                  <Typography
                                    variant="subtitle2"
                                    fontWeight={600}
                                  >
                                    2.9
                                  </Typography>
                                </Box>
                              }
                            />
                            <Chip
                              variant="outlined"
                              color="warning"
                              sx={{
                                borderRadius: theme.shape.borderRadius,
                              }}
                              label={
                                <Box
                                  display="flex"
                                  gap={1}
                                  alignItems="center"
                                >
                                  <Typography variant="subtitle2">PyTorch</Typography>
                                  <Typography
                                    variant="subtitle2"
                                    fontWeight={600}
                                  >
                                    1.12
                                  </Typography>
                                </Box>
                              }
                            />
                            <Chip
                              color="info"
                              variant="outlined"
                              sx={{
                                borderRadius: theme.shape.borderRadius,
                              }}
                              label={
                                <Box
                                  display="flex"
                                  gap={1}
                                  alignItems="center"
                                >
                                  <Typography variant="subtitle2">scikit-learn</Typography>
                                  <Typography
                                    variant="subtitle2"
                                    fontWeight={600}
                                  >
                                    1.1
                                  </Typography>
                                </Box>
                              }
                            />
                          </Box>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Tilt>
              </Grid>
              <Grid
                xs={12}
                lg={6}
                sm={6}
              >
                <Tilt
                  scale={1}
                  tiltMaxAngleX={1}
                  perspective={800}
                  glarePosition="all"
                  glareEnable={true}
                  glareColor={theme.palette.success.main}
                  glareMaxOpacity={0.05}
                  tiltMaxAngleY={1.56}
                >
                  <Card
                    elevation={21}
                    sx={{
                      transformStyle: 'preserve-3d',
                      mt: { xs: 4, sm: 5 },
                      overflow: 'visible',
                      backgroundColor: 'background.default',
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', p: { xs: 2, xl: 3 } }}>
                      <AvatarState
                        useShadow
                        variant="rounded"
                        state="success"
                        sx={{
                          height: 64,
                          width: 64,
                          mx: 'auto',
                          mb: 2,
                          mt: { xs: -5, sm: -6 },
                        }}
                      >
                        <AutoGraphRounded fontSize="large" />
                      </AvatarState>
                      <Typography
                        variant="h4"
                        component="h5"
                        fontWeight={500}
                        gutterBottom
                        noWrap
                      >
                        Evolving AI Models
                      </Typography>
                      <Typography
                        variant="h5"
                        fontWeight={400}
                        color="text.secondary"
                        sx={{ pb: 2 }}
                      >
                        Our machine learning models are constantly trained on the latest data to improve their accuracy and adapt to changing market trends.
                      </Typography>
                    </CardContent>
                  </Card>
                </Tilt>
              </Grid>
              <Grid
                xs={12}
                lg={6}
                sm={6}
              >
                <Tilt
                  scale={1}
                  tiltMaxAngleX={1}
                  perspective={800}
                  glarePosition="all"
                  glareEnable={true}
                  glareColor={theme.palette.success.main}
                  glareMaxOpacity={0.05}
                  tiltMaxAngleY={1.56}
                >
                  <Card
                    elevation={21}
                    sx={{
                      transformStyle: 'preserve-3d',
                      mt: { xs: 4, sm: 5 },
                      overflow: 'visible',
                      backgroundColor: 'background.default',
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', p: { xs: 2, xl: 3 } }}>
                      <AvatarState
                        useShadow
                        variant="rounded"
                        state="success"
                        sx={{
                          height: 64,
                          width: 64,
                          mx: 'auto',
                          mb: 2,
                          mt: { xs: -5, sm: -6 },
                        }}
                      >
                        <BarChartRounded fontSize="large" />
                      </AvatarState>
                      <Typography
                        variant="h4"
                        component="h5"
                        fontWeight={500}
                        gutterBottom
                        noWrap
                      >
                        Expanded KPIs and Metrics
                      </Typography>
                      <Typography
                        variant="h5"
                        fontWeight={400}
                        color="text.secondary"
                        sx={{ pb: 2 }}
                      >
                        We regularly add new KPIs and metrics to provide deeper insights into your ad performance and help you make data-driven decisions.
                      </Typography>
                    </CardContent>
                  </Card>
                </Tilt>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomepageRegularUpdates;
