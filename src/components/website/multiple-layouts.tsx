import { DarkModeRounded } from '@mui/icons-material';
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Unstable_Grid2 as Grid,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Tilt from 'react-parallax-tilt';
import { RouterLink } from 'src/components/base/router-link';
import { AvatarState } from 'src/components/base/styles/avatar';
import { routes } from 'src/router/routes';

const HomepageMultipleLayouts = () => {
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
          pt={{ xs: 2, md: 10 }}
          position="relative"
          display="flex"
          flexDirection="column"
        >
          {mdUp && (
            <Box
              sx={{
                width: 4,
                height: '100%',
                backgroundColor: 'warning.main',
                position: 'absolute',
                left: theme.spacing(1.3),
                top: theme.spacing(-0.5),

                '&::before': {
                  content: '" "',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 4,
                  height: 130,
                  backgroundImage: `linear-gradient(180deg, ${theme.palette.background.default} 20%, ${theme.palette.warning.main} 100%)`,
                },
              }}
            >
              <Box
                sx={{
                  width: theme.spacing(11),
                  height: theme.spacing(11),
                  background: 'none',
                  borderLeft: `4px solid ${theme.palette.warning.main}`,
                  borderBottom: `4px solid ${theme.palette.warning.main}`,
                  borderBottomLeftRadius: theme.shape.borderRadius * 3,
                  position: 'absolute',
                  zIndex: 3,
                  top: theme.spacing(11),
                  left: theme.spacing(0),
                  boxShadow: `-35px 35px 35px 0 ${alpha(
                    theme.palette.background.paper,
                    0.5
                  )}, -40px 45px 45px 0 ${alpha(theme.palette.warning.main, 0.15)}`,

                  '&&::after': {
                    content: '" "',
                    position: 'absolute',
                    bottom: -4,
                    right: 0,
                    width: 60,
                    height: 4,
                    backgroundImage: `linear-gradient(45deg, ${theme.palette.warning.main} 20%, ${theme.palette.background.default} 100%)`,
                  },
                }}
              >
                <Box
                  sx={{
                    borderRadius: 100,
                    zIndex: 4,
                    backgroundColor: 'warning.main',
                    border: '1px solid background.paper',
                    width: 22,
                    height: 22,
                    left: theme.spacing(-1.3),
                    top: 0,
                    position: 'absolute',
                    boxShadow: `0 0 0 3px ${theme.palette.background.paper}, 0 3px 12px 0 ${alpha(
                      theme.palette.warning.main,
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
              <Box
                sx={{
                  width: { md: theme.spacing(10), lg: theme.spacing(24) },
                  height: theme.spacing(10),
                  background: 'none',
                  borderLeft: `4px solid ${theme.palette.warning.main}`,
                  borderBottom: `4px solid ${theme.palette.warning.main}`,
                  borderBottomLeftRadius: theme.shape.borderRadius * 3,
                  position: 'absolute',
                  zIndex: 3,
                  bottom: theme.spacing(-9),
                  left: theme.spacing(0),
                  boxShadow: `-35px 35px 35px 0 ${alpha(
                    theme.palette.background.paper,
                    0.5
                  )}, -40px 45px 45px 0 ${alpha(theme.palette.warning.main, 0.15)}`,
                }}
              >
                <Box
                  sx={{
                    borderRadius: 100,
                    zIndex: 4,
                    backgroundColor: 'warning.main',
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
                      theme.palette.warning.main,
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
          <Box
            pb={{ xs: 2, md: 8 }}
            flex={1}
          >
            <Chip
              variant="outlined"
              color="warning"
              sx={{
                borderRadius: theme.shape.borderRadius,
              }}
              label={
                <>
                  <Typography variant="h5">Accelerate Development. Elevate UX.</Typography>
                </>
              }
            />
            <Grid container>
              <Grid
                xs={12}
                lg={10}
                md={12}
                py={{ xs: 2, sm: 3, md: 4 }}
              >
                <Typography
                  variant="h1"
                  gutterBottom
                  color="text.primary"
                >
                  Versatile layouts, Rich color palettes, and smart dark mode
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight={400}
                  color="neutral.500"
                >
                  Crafted for both developers and designers, our toolkit offers the flexibility to
                  build robust, enterprise-grade interfaces with superior ease and efficiency.
                </Typography>
              </Grid>
            </Grid>
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
            >
              <Button
                size="large"
                variant="contained"
              >
                Browse components
              </Button>
              <Link
                component={RouterLink}
                href={routes.website.pricing}
                color="primary"
                variant="h5"
                underline="hover"
                fontWeight={500}
              >
                Pricing
              </Link>
            </Stack>
          </Box>
        </Box>

        <Box
          id="discover-more"
          mt={{ xs: 2, md: 3 }}
          mb={{ xs: 2, sm: 4, md: 10 }}
        >
          <Box pl={{ xs: 0, md: 14, lg: 30 }}>
            <Grid
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
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', p: { xs: 2, md: 3 } }}>
                      <AvatarState
                        useShadow
                        variant="rounded"
                        state="warning"
                        sx={{
                          height: 64,
                          width: 64,
                          mx: 'auto',
                          mb: 3,
                        }}
                      >
                        <DarkModeRounded fontSize="large" />
                      </AvatarState>
                      <Typography
                        variant="h4"
                        fontWeight={500}
                        gutterBottom
                      >
                        Adaptive Dark Mode
                      </Typography>
                      <Typography
                        variant="h5"
                        fontWeight={400}
                        color="text.secondary"
                      >
                        Improve user experience with our dark mode, designed for visual comfort in
                        any lighting and optimized for energy savings.
                      </Typography>
                    </CardContent>
                  </Card>
                </Tilt>
              </Grid>
              <Grid
                xs={12}
                md={8}
                sm={6}
              >
                <Box p={2}>
                  <Grid
                    container
                    spacing={{ xs: 2, sm: 3, md: 4 }}
                  >
                    <Grid
                      xs={12}
                      sm={6}
                    >
                      <Box>
                        <Box
                          display="flex"
                          alignItems="center"
                        >
                          <Box
                            sx={{
                              backgroundColor: 'warning.light',
                              borderRadius: theme.shape.borderRadius,
                              width: 8,
                              height: 64,
                              mr: 2,
                            }}
                          />
                          <Typography
                            variant="h1"
                            component="p"
                            fontWeight={700}
                            color="text.primary"
                          >
                            18
                          </Typography>
                          <Typography
                            variant="h3"
                            component="p"
                            fontWeight={400}
                            sx={{ pl: 1 }}
                            color="text.primary"
                          >
                            layout shells
                          </Typography>
                        </Box>
                        <Typography
                          variant="h5"
                          fontWeight={500}
                          color="text.secondary"
                          component="p"
                          sx={{
                            pl: 3,
                          }}
                        >
                          Includes a variety of shells, such as vertical, collapsed, and stacked, to
                          match your design needs.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={6}
                    >
                      <Box>
                        <Box
                          display="flex"
                          alignItems="center"
                        >
                          <Box
                            sx={{
                              backgroundColor: 'warning.light',
                              borderRadius: theme.shape.borderRadius,
                              width: 8,
                              height: 64,
                              mr: 2,
                            }}
                          />
                          <Typography
                            variant="h1"
                            component="p"
                            fontWeight={700}
                            color="text.primary"
                          >
                            16
                          </Typography>
                          <Typography
                            variant="h3"
                            component="p"
                            fontWeight={400}
                            color="text.primary"
                            sx={{ pl: 1 }}
                          >
                            app pages
                          </Typography>
                        </Box>
                        <Typography
                          variant="h5"
                          fontWeight={500}
                          color="text.secondary"
                          component="p"
                          sx={{
                            pl: 3,
                          }}
                        >
                          Pre-designed pages like file managers, calendars, and project dashboards
                          to fast-track your app development.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={6}
                    >
                      <Box>
                        <Box
                          display="flex"
                          alignItems="center"
                        >
                          <Box
                            sx={{
                              backgroundColor: 'warning.light',
                              borderRadius: theme.shape.borderRadius,
                              width: 8,
                              height: 64,
                              mr: 2,
                            }}
                          />
                          <Typography
                            variant="h1"
                            component="p"
                            fontWeight={700}
                            color="text.primary"
                          >
                            91
                          </Typography>
                          <Typography
                            variant="h3"
                            component="p"
                            fontWeight={400}
                            color="text.primary"
                            sx={{ pl: 1 }}
                          >
                            form elements
                          </Typography>
                        </Box>
                        <Typography
                          variant="h5"
                          fontWeight={500}
                          color="text.secondary"
                          component="p"
                          sx={{
                            pl: 3,
                          }}
                        >
                          A wide range of input types and controls to create intuitive and
                          responsive forms for all applications.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={6}
                    >
                      <Box>
                        <Box
                          display="flex"
                          alignItems="center"
                        >
                          <Box
                            sx={{
                              backgroundColor: 'warning.light',
                              borderRadius: theme.shape.borderRadius,
                              width: 8,
                              height: 64,
                              mr: 2,
                            }}
                          />
                          <Typography
                            variant="h1"
                            component="p"
                            fontWeight={700}
                            color="text.primary"
                          >
                            676
                          </Typography>
                          <Typography
                            variant="h3"
                            component="p"
                            fontWeight={400}
                            color="text.primary"
                            sx={{ pl: 1 }}
                          >
                            components
                          </Typography>
                        </Box>
                        <Typography
                          variant="h5"
                          fontWeight={500}
                          color="text.secondary"
                          component="p"
                          sx={{
                            pl: 3,
                          }}
                        >
                          An extensive collection of elements, from navigation to data display,
                          ensuring comprehensive UI solutions.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Divider />
        <Box
          py={{ xs: 2, sm: 4, md: 8 }}
          textAlign="center"
        >
          <Typography
            variant="subtitle1"
            color="text.secondary"
          >
            Copyright &copy; 2024 - uifort.com
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HomepageMultipleLayouts;
