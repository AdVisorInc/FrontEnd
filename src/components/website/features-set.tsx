import {
  BarChartRounded,
  DataThresholdingRounded,
  IntegrationInstructionsRounded,
  TuneRounded,
  AutoGraphRounded,
  RocketLaunchRounded,
} from '@mui/icons-material';
import {
  alpha,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Unstable_Grid2 as Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Tilt from 'react-parallax-tilt';
import { AvatarState } from 'src/components/base/styles/avatar';

const HomepageFeaturesSet = () => {
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
          left: 0,
          opacity: 0.5,
          bottom: 0,
          width: '80%',
          height: '80%',
          backgroundImage: 'url(/placeholders/covers/glow.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundPosition: 'left bottom',
          zIndex: 1,
          transform: 'rotate(-180deg)',
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
                height: '50%',
                backgroundColor: 'error.main',
                position: 'absolute',
                left: theme.spacing(1.3),
                top: theme.spacing(-35),

                '&::before': {
                  content: '" "',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 4,
                  height: 130,
                  backgroundImage: `linear-gradient(180deg, ${theme.palette.primary.main} 20%, ${theme.palette.error.main} 100%)`,
                },
              }}
            >
              <Box
                sx={{
                  width: theme.spacing(11),
                  height: theme.spacing(12.3),
                  background: 'none',
                  borderLeft: `4px solid ${theme.palette.error.main}`,
                  borderBottom: `4px solid ${theme.palette.error.main}`,
                  borderBottomLeftRadius: theme.shape.borderRadius * 3,
                  position: 'absolute',
                  zIndex: 3,
                  top: theme.spacing(42),
                  left: theme.spacing(0),
                  boxShadow: `-35px 35px 35px 0 ${alpha(
                    theme.palette.background.paper,
                    0.5
                  )}, -40px 45px 45px 0 ${alpha(theme.palette.error.main, 0.15)}`,

                  '&&::after': {
                    content: '" "',
                    position: 'absolute',
                    bottom: -4,
                    right: 0,
                    width: 60,
                    height: 4,
                    backgroundImage: `linear-gradient(45deg, ${theme.palette.error.main} 20%, ${theme.palette.background.default} 100%)`,
                  },
                }}
              />
              <Box
                sx={{
                  width: theme.spacing(11),
                  height: theme.spacing(39.3),
                  background: 'none',
                  borderLeft: `4px solid ${theme.palette.error.main}`,
                  borderBottom: `4px solid ${theme.palette.error.main}`,
                  borderBottomLeftRadius: theme.shape.borderRadius * 3,
                  position: 'absolute',
                  zIndex: 3,
                  top: theme.spacing(42),
                  left: theme.spacing(0),
                  boxShadow: `-35px 35px 35px 0 ${alpha(
                    theme.palette.background.paper,
                    0.5
                  )}, -40px 45px 45px 0 ${alpha(theme.palette.error.main, 0.15)}`,

                  '&&::after': {
                    content: '" "',
                    position: 'absolute',
                    bottom: -4,
                    right: 0,
                    width: 60,
                    height: 4,
                    backgroundImage: `linear-gradient(45deg, ${theme.palette.error.main} 20%, ${theme.palette.background.default} 100%)`,
                  },
                }}
              >
                <Box
                  sx={{
                    borderRadius: 100,
                    zIndex: 4,
                    backgroundColor: 'error.main',
                    border: '1px solid background.paper',
                    width: 22,
                    height: 22,
                    left: theme.spacing(-1.3),
                    top: theme.spacing(3.4),
                    position: 'absolute',
                    boxShadow: `0 0 0 3px ${theme.palette.background.paper}, 0 3px 12px 0 ${alpha(
                      theme.palette.error.main,
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
                      boxShadow: `0 5px 35px 5px ${theme.palette.error.main}`,
                    },
                  }}
                />
              </Box>
            </Box>
          )}
          <Box flex={1}>
            <Chip
              variant="outlined"
              color="error"
              sx={{
                borderRadius: theme.shape.borderRadius,
              }}
              label={
                <>
                  <Typography
                    variant="h5"
                    component="p"
                  >
                    Unleash the Power of AI-Driven Ad Optimization
                  </Typography>
                </>
              }
            />
            <Grid container>
              <Grid
                xs={12}
                md={6}
                py={{ xs: 2, sm: 4 }}
              >
                <Typography
                  variant="h1"
                  component="h3"
                  gutterBottom
                  lineHeight={1.4}
                  color="text.primary"
                >
                  Revolutionize Your Digital Marketing with AdVisor's Advanced Features
                </Typography>
              </Grid>
            </Grid>
            <Grid
              mt={{ xs: 0, sm: 1 }}
              container
              spacing={{ xs: 2, sm: 3 }}
            >
              <Grid
                xs={12}
                md={4}
                sm={6}
              >
                <Tilt
                  scale={1}
                  tiltMaxAngleX={1}
                  perspective={500}
                  glarePosition="all"
                  glareEnable={true}
                  glareColor={theme.palette.error.main}
                  glareMaxOpacity={0.05}
                  tiltMaxAngleY={1.56}
                >
                  <Card
                    sx={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', py: { xs: 2, sm: 3 } }}>
                      <AvatarState
                        useShadow
                        variant="rounded"
                        state="error"
                        sx={{
                          height: 64,
                          width: 64,
                          mx: 'auto',
                          mb: 2,
                        }}
                      >
                        <IntegrationInstructionsRounded fontSize="large" />
                      </AvatarState>
                      <Typography
                        variant="h4"
                        component="h5"
                        fontWeight={500}
                        gutterBottom
                      >
                        Multi-Platform Integration
                      </Typography>
                      <Typography
                        variant="h5"
                        component="p"
                        fontWeight={400}
                        color="text.secondary"
                      >
                        Seamlessly connect and manage your ad campaigns across Meta Ads, Google Ads, and TikTok Ads from a single platform.
                      </Typography>
                    </CardContent>
                  </Card>
                </Tilt>
              </Grid>
              <Grid
                xs={12}
                md={4}
                sm={6}
              >
                <Tilt
                  scale={1}
                  tiltMaxAngleX={1}
                  perspective={500}
                  glarePosition="all"
                  glareEnable={true}
                  glareColor={theme.palette.error.main}
                  glareMaxOpacity={0.05}
                  tiltMaxAngleY={1.56}
                >
                  <Card
                    sx={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', py: { xs: 2, sm: 3 } }}>
                      <AvatarState
                        useShadow
                        variant="rounded"
                        state="error"
                        sx={{
                          height: 64,
                          width: 64,
                          mx: 'auto',
                          mb: 2,
                        }}
                      >
                        <BarChartRounded fontSize="large" />
                      </AvatarState>
                      <Typography
                        variant="h4"
                        component="h5"
                        fontWeight={500}
                        gutterBottom
                      >
                        Advanced Analytics
                      </Typography>
                      <Typography
                        variant="h5"
                        component="p"
                        fontWeight={400}
                        color="text.secondary"
                      >
                        Gain deep insights into your ad performance with our comprehensive suite of analytics and reporting tools.
                      </Typography>
                    </CardContent>
                  </Card>
                </Tilt>
              </Grid>
              <Grid
                xs={12}
                md={4}
                sm={6}
              >
                <Tilt
                  scale={1}
                  tiltMaxAngleX={1}
                  perspective={500}
                  glarePosition="all"
                  glareEnable={true}
                  glareColor={theme.palette.error.main}
                  glareMaxOpacity={0.05}
                  tiltMaxAngleY={1.56}
                >
                  <Card
                    sx={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', py: { xs: 2, sm: 3 } }}>
                      <AvatarState
                        useShadow
                        variant="rounded"
                        state="error"
                        sx={{
                          height: 64,
                          width: 64,
                          mx: 'auto',
                          mb: 2,
                        }}
                      >
                        <AutoGraphRounded fontSize="large" />
                      </AvatarState>
                      <Typography
                        variant="h4"
                        component="h5"
                        fontWeight={500}
                        gutterBottom
                      >
                        AI-Driven Recommendations
                      </Typography>
                      <Typography
                        variant="h5"
                        component="p"
                        fontWeight={400}
                        color="text.secondary"
                      >
                        Receive personalized recommendations powered by advanced AI algorithms to optimize your ad campaigns for maximum ROI.
                      </Typography>
                    </CardContent>
                  </Card>
                </Tilt>
              </Grid>
              <Grid
                xs={12}
                md={4}
                sm={6}
              >
                <Tilt
                  scale={1}
                  tiltMaxAngleX={1}
                  perspective={500}
                  glarePosition="all"
                  glareEnable={true}
                  glareColor={theme.palette.error.main}
                  glareMaxOpacity={0.05}
                  tiltMaxAngleY={1.56}
                >
                  <Card
                    sx={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', py: { xs: 2, sm: 3 } }}>
                      <AvatarState
                        useShadow
                        variant="rounded"
                        state="error"
                        sx={{
                          height: 64,
                          width: 64,
                          mx: 'auto',
                          mb: 2,
                        }}
                      >
                        <TuneRounded fontSize="large" />
                      </AvatarState>
                      <Typography
                        variant="h4"
                        component="h5"
                        fontWeight={500}
                        gutterBottom
                      >
                        Customizable KPI Weighting
                      </Typography>
                      <Typography
                        variant="h5"
                        component="p"
                        fontWeight={400}
                        color="text.secondary"
                      >
                        Tailor your performance metrics to your specific business goals with our flexible KPI weighting system.
                      </Typography>
                    </CardContent>
                  </Card>
                </Tilt>
              </Grid>
              <Grid
                xs={12}
                md={4}
                sm={6}
              >
                <Tilt
                  scale={1}
                  tiltMaxAngleX={1}
                  perspective={500}
                  glarePosition="all"
                  glareEnable={true}
                  glareColor={theme.palette.error.main}
                  glareMaxOpacity={0.05}
                  tiltMaxAngleY={1.56}
                >
                  <Card
                    sx={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', py: { xs: 2, sm: 3 } }}>
                      <AvatarState
                        useShadow
                        variant="rounded"
                        state="error"
                        sx={{
                          height: 64,
                          width: 64,
                          mx: 'auto',
                          mb: 2,
                        }}
                      >
                        <DataThresholdingRounded fontSize="large" />
                      </AvatarState>
                      <Typography
                        variant="h4"
                        component="h5"
                        fontWeight={500}
                        gutterBottom
                      >
                        Budget Optimization
                      </Typography>
                      <Typography
                        variant="h5"
                        component="p"
                        fontWeight={400}
                        color="text.secondary"
                      >
                        Maximize your ad spend efficiency with our intelligent budget allocation and optimization algorithms.
                      </Typography>
                    </CardContent>
                  </Card>
                </Tilt>
              </Grid>
              <Grid
                xs={12}
                md={4}
                sm={6}
              >
                <Tilt
                  scale={1}
                  tiltMaxAngleX={1}
                  perspective={500}
                  glarePosition="all"
                  glareEnable={true}
                  glareColor={theme.palette.error.main}
                  glareMaxOpacity={0.05}
                  tiltMaxAngleY={1.56}
                >
                  <Card
                    sx={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', py: { xs: 2, sm: 3 } }}>
                      <AvatarState
                        useShadow
                        variant="rounded"
                        state="error"
                        sx={{
                          height: 64,
                          width: 64,
                          mx: 'auto',
                          mb: 2,
                        }}
                      >
                        <RocketLaunchRounded fontSize="large" />
                      </AvatarState>
                      <Typography
                        variant="h4"
                        component="h5"
                        fontWeight={500}
                        gutterBottom
                      >
                        Automated Campaign Management
                      </Typography>
                      <Typography
                        variant="h5"
                        component="p"
                        fontWeight={400}
                        color="text.secondary"
                      >
                        Save time and effort with our automated campaign management features, including bid adjustments and performance monitoring.
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


export default HomepageFeaturesSet;
