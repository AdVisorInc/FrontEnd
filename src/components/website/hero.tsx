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
                  The ultimate fully coded UI kit and design system
                </Typography>
                <Typography
                  variant="h4"
                  component="p"
                  fontWeight={400}
                  color="neutral.500"
                >
                  Designed for both developers and designers, this toolkit empowers you to swiftly
                  create robust, enterprise-level user interfaces with unparalleled ease and
                  efficiency.
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
                component={RouterLink}
                href={routes.components.index}
              >
                Browse components
              </Button>
              <Link
                href="#discover-more"
                color="primary"
                variant="h5"
                underline="hover"
                fontWeight={500}
              >
                Discover more
              </Link>
            </Stack>
            <Container
              disableGutters
              maxWidth="xl"
              sx={{
                pt: { xs: 2, sm: 3, md: 6 },
                pb: { xs: 2, md: 0 },
              }}
            >
              <Carousel />
            </Container>
          </Box>
        </Box>

        <Box
          id="discover-more"
          mt={{ xs: 2, md: 3 }}
          mb={{ xs: 2, sm: 4, md: 10 }}
        >
          <Box pl={{ xs: 0, md: 14, lg: 30 }}>
            <Chip
              variant="outlined"
              color="primary"
              sx={{
                borderRadius: theme.shape.borderRadius,
              }}
              label={
                <>
                  <Typography variant="h5">built with modern technologies.</Typography>
                </>
              }
            />
            <Grid
              mt={2}
              container
              spacing={{ xs: 2, sm: 3 }}
            >
              <Grid
                xs={12}
                md={4}
                sm={6}
              >
                <Card
                  sx={{
                    overflow: 'visible',
                    mt: 2,
                  }}
                >
                  <CardContent>
                    <Stack
                      mt={-4}
                      pb={2}
                      spacing={2}
                      direction="row"
                    >
                      <AvatarState
                        useShadow
                        state="secondary"
                        variant="rounded"
                        src="/placeholders/logo/react-logo.svg"
                        sx={{
                          width: 64,
                          img: { objectFit: 'fill' },
                          backgroundColor: 'common.white',
                          p: 1,
                          height: 64,
                        }}
                      />
                      <AvatarState
                        useShadow
                        state="secondary"
                        variant="rounded"
                        sx={{
                          width: 64,
                          img: { objectFit: 'fill' },
                          backgroundColor: 'common.white',
                          p: 1,
                          height: 64,
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="32"
                          viewBox="0 0 36 32"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
                            fill="#007FFF"
                          ></path>
                        </svg>
                      </AvatarState>
                    </Stack>
                    <Typography
                      variant="h5"
                      fontWeight={500}
                      color="text.secondary"
                      noWrap
                    >
                      Powered by{' '}
                      <Typography
                        color="text.primary"
                        component="span"
                        variant="h5"
                        fontWeight={500}
                      >
                        React{' '}
                      </Typography>
                      and{' '}
                      <Typography
                        color="text.primary"
                        component="span"
                        variant="h5"
                        fontWeight={500}
                      >
                        Material UI
                      </Typography>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                xs={12}
                md={4}
                sm={6}
              >
                <Card
                  sx={{
                    overflow: 'visible',
                    mt: 2,
                  }}
                >
                  <CardContent>
                    <Stack
                      mt={-4}
                      pb={2}
                      spacing={2}
                      direction="row"
                    >
                      <AvatarState
                        useShadow
                        state="secondary"
                        variant="rounded"
                        src="/placeholders/logo/nextjs-logo.svg"
                        sx={{
                          width: 64,
                          img: { objectFit: 'fill' },
                          backgroundColor: 'common.white',
                          p: 1,
                          height: 64,
                        }}
                      />
                      <AvatarState
                        useShadow
                        state="secondary"
                        variant="rounded"
                        src="/placeholders/logo/vitejs-logo.svg"
                        sx={{
                          width: 64,
                          img: { objectFit: 'fill' },
                          backgroundColor: 'common.white',
                          p: 1,
                          height: 64,
                        }}
                      />
                    </Stack>
                    <Typography
                      variant="h5"
                      fontWeight={500}
                      color="text.secondary"
                      noWrap
                    >
                      Tailored for both{' '}
                      <Typography
                        color="text.primary"
                        component="span"
                        variant="h5"
                        fontWeight={500}
                      >
                        Next.js
                      </Typography>{' '}
                      and{' '}
                      <Typography
                        color="text.primary"
                        component="span"
                        variant="h5"
                        fontWeight={500}
                      >
                        Vite
                      </Typography>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                xs={12}
                md={4}
                sm={6}
              >
                <Card
                  sx={{
                    overflow: 'visible',
                    mt: 2,
                  }}
                >
                  <CardContent>
                    <Stack
                      mt={-4}
                      pb={2}
                      spacing={2}
                      direction="row"
                    >
                      <AvatarState
                        useShadow
                        state="secondary"
                        variant="rounded"
                        src="/placeholders/logo/typescript-logo.svg"
                        sx={{
                          width: 64,
                          img: { objectFit: 'fill' },
                          backgroundColor: 'common.white',
                          p: 1,
                          height: 64,
                        }}
                      />
                      <AvatarState
                        useShadow
                        state="secondary"
                        variant="rounded"
                        src="/placeholders/logo/javascript-logo.svg"
                        sx={{
                          width: 64,
                          img: { objectFit: 'fill' },
                          backgroundColor: 'common.white',
                          p: 1,
                          height: 64,
                        }}
                      />
                    </Stack>
                    <Typography
                      variant="h5"
                      fontWeight={500}
                      color="text.secondary"
                      noWrap
                    >
                      Choose between{' '}
                      <Typography
                        color="text.primary"
                        component="span"
                        variant="h5"
                        fontWeight={500}
                      >
                        Typescript
                      </Typography>{' '}
                      or{' '}
                      <Typography
                        color="text.primary"
                        component="span"
                        variant="h5"
                        fontWeight={500}
                      >
                        Javascript
                      </Typography>
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
