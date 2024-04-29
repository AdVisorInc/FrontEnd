import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Unstable_Grid2 as Grid,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { RouterLink } from 'src/components/base/router-link';
import { AvatarState } from 'src/components/base/styles/avatar';
import { routes } from 'src/router/routes';
import Carousel from './carousel';

const HomepageHero = () => {
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
          top: -36,
          opacity: 0.5,
          right: 0,
          width: '80%',
          height: '55%',
          backgroundImage: 'url(/placeholders/covers/glow.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '80% 80%',
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
          pt={{ xs: 8, md: 16 }}
          position="relative"
          display="flex"
          flexDirection="column"
        >
          {mdUp && (
            <Box
              sx={{
                width: 4,
                height: '100%',
                backgroundColor: 'primary.main',
                position: 'absolute',
                left: theme.spacing(1.3),
                top: 0,

                '&::before': {
                  content: '" "',
                  position: 'absolute',
                  top: 22,
                  left: 0,
                  width: 4,
                  height: 130,
                  backgroundImage: `linear-gradient(180deg, ${theme.palette.background.default} 20%, ${theme.palette.primary.main} 100%)`,
                },
              }}
            >
              <Box
                sx={{
                  width: theme.spacing(11),
                  height: theme.spacing(14.5),
                  background: 'none',
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  borderBottom: `4px solid ${theme.palette.primary.main}`,
                  borderBottomLeftRadius: theme.shape.borderRadius * 3,
                  position: 'absolute',
                  zIndex: 3,
                  top: theme.spacing(11),
                  left: theme.spacing(0),
                  boxShadow: `-35px 35px 35px 0 ${alpha(
                    theme.palette.background.paper,
                    0.5
                  )}, -40px 45px 45px 0 ${alpha(theme.palette.primary.main, 0.15)}`,

                  '&&::after': {
                    content: '" "',
                    position: 'absolute',
                    bottom: -4,
                    right: 0,
                    width: 60,
                    height: 4,
                    backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main} 20%, ${theme.palette.background.default} 100%)`,
                  },
                }}
              >
                <Box
                  sx={{
                    borderRadius: 100,
                    zIndex: 4,
                    backgroundColor: 'primary.main',
                    border: '1px solid background.paper',
                    width: 22,
                    height: 22,
                    left: theme.spacing(-1.3),
                    top: 0,
                    position: 'absolute',
                    boxShadow: `0 0 0 3px ${theme.palette.background.paper}, 0 3px 12px 0 ${alpha(
                      theme.palette.primary.main,
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
              <Box
                sx={{
                  width: { md: theme.spacing(10), lg: theme.spacing(24) },
                  height: theme.spacing(10),
                  background: 'none',
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  borderBottom: `4px solid ${theme.palette.primary.main}`,
                  borderBottomLeftRadius: theme.shape.borderRadius * 3,
                  position: 'absolute',
                  zIndex: 3,
                  bottom: theme.spacing(-4.6),
                  left: theme.spacing(0),
                  boxShadow: `-35px 35px 35px 0 ${alpha(
                    theme.palette.background.paper,
                    0.5
                  )}, -40px 45px 45px 0 ${alpha(theme.palette.primary.main, 0.15)}`,
                }}
              >
                <Box
                  sx={{
                    borderRadius: 100,
                    zIndex: 4,
                    backgroundColor: 'primary.main',
                    border: '1px solid background.paper',
                    width: 22,
                    height: 22,
                    left: {
                      md: theme.spacing(8),
                      lg: theme.spacing(23),
                    },
                    bottom: theme.spacing(-1.3),
                    position: 'absolute',
                    boxShadow: `0 0 0 3px ${theme.palette.background.paper}, 0 3px 12px 0 ${alpha(
                      theme.palette.primary.main,
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
                      boxShadow: `0 5px 35px 5px ${theme.palette.warning.main}`,
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
                  <Typography variant="h5">Optimize Your Ads. Maximize ROI.</Typography>
                </>
              }
            />
            <Grid container>
              <Grid xs={12} lg={10} md={12} py={{ xs: 2, sm: 3, md: 4 }}>
                <Typography variant="h1" gutterBottom color="text.primary">
                  AdVisor: The Ultimate AI-Driven Ad Optimization Platform
                </Typography>
                <Typography variant="subtitle2" gutterBottom color="text.secondary" sx={{ mb: 2 }}>
                  Powered By Aniceto Holdings LLC
                </Typography>
                <Typography variant="h4" component="p" fontWeight={400} color="neutral.300">
                  Harness the power of AI and machine learning to streamline your ad campaigns across
                  multiple platforms. AdVisor saves you time, optimizes your budget allocation, and
                  provides actionable insights to boost your marketing ROI by up to 30%.
                </Typography>
                <Box mt={4}>
                  <Typography variant="h6" fontWeight={500} color="text.secondary">
                    "AdVisor has revolutionized our ad optimization process. We've seen a significant
                    increase in conversions and ROI since implementing their platform."
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    - John Doe, Marketing Manager at XYZ Company
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Stack direction="row" spacing={3} alignItems="center">
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                href={routes.components.index}
              >
                Request a Demo
              </Button>
              <Link
                href="#discover-more"
                color="primary"
                variant="h5"
                underline="hover"
                fontWeight={500}
              >
                Learn More
              </Link>
            </Stack>
            <Container disableGutters maxWidth="xl" sx={{ pt: { xs: 2, sm: 3, md: 6 }, pb: { xs: 2, md: 0 } }}>
              <Carousel />
            </Container>
          </Box>
        </Box>

        <Box id="discover-more" mt={{ xs: 2, md: 3 }} mb={{ xs: 2, sm: 4, md: 10 }}>
          <Box pl={{ xs: 0, md: 14, lg: 30 }}>
            <Chip
              variant="outlined"
              color="primary"
              sx={{
                borderRadius: theme.shape.borderRadius,
              }}
              label={
                <>
                  <Typography variant="h5">Powered by Advanced Analytics.</Typography>
                </>
              }
            />
            <Grid mt={2} container spacing={{ xs: 2, sm: 3 }}>
              <Grid xs={12} md={4} sm={6}>
                <Card sx={{ overflow: 'visible', mt: 2 }}>
                  <CardContent>
                    <Stack mt={-4} pb={2} spacing={2} direction="row">
                      <AvatarState
                        useShadow
                        state="secondary"
                        variant="rounded"
                        src="/placeholders/icons/dataintegration.svg"
                        sx={{
                          width: 64,
                          img: { objectFit: 'fill' },
                          backgroundColor: 'common.white',
                          p: 1,
                          height: 64,
                        }}
                      />
                    </Stack>
                    <Typography variant="h5" fontWeight={500} color="text.secondary" noWrap>
                      Seamless{' '}
                      <Typography color="text.primary" component="span" variant="h5" fontWeight={500}>
                        Data Integration
                      </Typography>
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Easily connect and sync your ad data from multiple platforms, saving you time and
                      providing a holistic view of your marketing efforts.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} md={4} sm={6}>
                <Card sx={{ overflow: 'visible', mt: 2 }}>
                  <CardContent>
                    <Stack mt={-4} pb={2} spacing={2} direction="row">
                      <AvatarState
                        useShadow
                        state="secondary"
                        variant="rounded"
                        src="/placeholders/icons/machinelearning.svg"
                        sx={{
                          width: 64,
                          img: { objectFit: 'fill' },
                          backgroundColor: 'common.white',
                          p: 1,
                          height: 64,
                        }}
                      />
                    </Stack>
                    <Typography variant="h5" fontWeight={500} color="text.secondary" noWrap>
                      Cutting-Edge{' '}
                      <Typography color="text.primary" component="span" variant="h5" fontWeight={500}>
                        Machine Learning
                      </Typography>
                      {' '}Models
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Our advanced machine learning algorithms analyze your ad data to uncover insights
                      and optimize your campaigns for maximum performance.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} md={4} sm={6}>
                <Card sx={{ overflow: 'visible', mt: 2 }}>
                  <CardContent>
                    <Stack mt={-4} pb={2} spacing={2} direction="row">
                      <AvatarState
                        useShadow
                        state="secondary"
                        variant="rounded"
                        src="/placeholders/icons/insights.svg"
                        sx={{
                          width: 64,
                          img: { objectFit: 'fill' },
                          backgroundColor: 'common.white',
                          p: 1,
                          height: 64,
                        }}
                      />
                    </Stack>
                    <Typography variant="h5" fontWeight={500} color="text.secondary" noWrap>
                      Actionable{' '}
                      <Typography color="text.primary" component="span" variant="h5" fontWeight={500}>
                        Insights{' '}
                      </Typography>
                      and Recommendations
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      AdVisor provides clear, actionable recommendations based on data-driven insights,
                      empowering you to make informed decisions and optimize your ad strategy.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomepageHero;
