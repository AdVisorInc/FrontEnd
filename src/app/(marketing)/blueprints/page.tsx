'use client';

import {
  alpha,
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  Container,
  Unstable_Grid2 as Grid,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Tilt from 'react-parallax-tilt';
import { CardActionAreaWrapper } from 'src/components/application-ui/content-shells/file-manager/quick-access';
import { Helmet } from 'src/components/base/helmet';
import { RouterLink } from 'src/components/base/router-link';
import { MarketingLayout as Layout } from 'src/layouts/marketing';
import { routes } from 'src/router/routes';

const Page = () => {
  const { t } = useTranslation();
  const pageTitle = 'Application Blueprints';
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      <Helmet heading={t(pageTitle)} />
      <Box
        flex={1}
        position="relative"
        minHeight="100vh"
        sx={{
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
          sx={{
            height: '100%',
            zIndex: 2,
            position: 'relative',
          }}
        >
          <Box
            flex={1}
            pl={{
              xs: 0,
              md: 16,
            }}
            pt={{
              xs: 8,
              md: 10,
            }}
            position="relative"
            display="flex"
            flexDirection="column"
          >
            {mdUp && (
              <Box
                sx={{
                  width: 4,
                  height: '100%',
                  backgroundColor: 'info.main',
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
                    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.default} 20%, ${theme.palette.info.main} 100%)`,
                  },
                }}
              >
                <Box
                  sx={{
                    width: theme.spacing(11),
                    height: theme.spacing(11),
                    background: 'none',
                    borderLeft: `4px solid ${theme.palette.info.main}`,
                    borderBottom: `4px solid ${theme.palette.info.main}`,
                    borderBottomLeftRadius: theme.shape.borderRadius * 3,
                    position: 'absolute',
                    zIndex: 3,
                    top: theme.spacing(11),
                    left: theme.spacing(0),
                    boxShadow: `-35px 35px 35px 0 ${alpha(
                      theme.palette.background.paper,
                      0.5
                    )}, -40px 45px 45px 0 ${alpha(theme.palette.info.main, 0.15)}`,
                    '&&::after': {
                      content: '" "',
                      position: 'absolute',
                      bottom: -4,
                      right: 0,
                      width: 60,
                      height: 4,
                      backgroundImage: `linear-gradient(45deg, ${theme.palette.info.main} 20%, ${theme.palette.background.default} 100%)`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: 100,
                      zIndex: 4,
                      backgroundColor: 'info.main',
                      border: '1px solid background.paper',
                      width: 22,
                      height: 22,
                      left: theme.spacing(-1.3),
                      top: 0,
                      position: 'absolute',
                      boxShadow: `0 0 0 3px ${theme.palette.background.paper}, 0 3px 12px 0 ${alpha(
                        theme.palette.info.main,
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
                        boxShadow: `0 5px 35px 5px ${theme.palette.info.main}`,
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: {
                      md: theme.spacing(10),
                      lg: theme.spacing(24),
                    },
                    height: theme.spacing(10),
                    background: 'none',
                    borderLeft: `4px solid ${theme.palette.info.main}`,
                    borderBottom: `4px solid ${theme.palette.info.main}`,
                    borderBottomLeftRadius: theme.shape.borderRadius * 3,
                    position: 'absolute',
                    zIndex: 3,
                    bottom: theme.spacing(-9),
                    left: theme.spacing(0),
                    boxShadow: `-35px 35px 35px 0 ${alpha(
                      theme.palette.background.paper,
                      0.5
                    )}, -40px 45px 45px 0 ${alpha(theme.palette.info.main, 0.15)}`,
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: 100,
                      zIndex: 4,
                      backgroundColor: 'info.main',
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
                        theme.palette.info.main,
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
                        boxShadow: `0 5px 35px 5px ${theme.palette.info.main}`,
                      },
                    }}
                  />
                </Box>
              </Box>
            )}
            <Box
              pb={{
                xs: 2,
                md: 8,
              }}
              flex={1}
            >
              <Chip
                variant="outlined"
                color="info"
                sx={{
                  borderRadius: theme.shape.borderRadius,
                }}
                label={
                  <>
                    <Typography variant="h5">Production-ready dashboards</Typography>
                  </>
                }
              />
              <Grid container>
                <Grid
                  xs={12}
                  lg={10}
                  md={12}
                  py={{
                    xs: 2,
                    sm: 3,
                    md: 4,
                  }}
                >
                  <Typography
                    variant="h1"
                    gutterBottom
                    color="text.primary"
                  >
                    Application Blueprints
                  </Typography>
                  <Typography
                    variant="h4"
                    fontWeight={400}
                    color="neutral.500"
                  >
                    Application blueprints are pre-built, production-ready dashboard templates and
                    are included in all our plans.
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
                  href={routes.blueprints['generic-admin-dashboard'].dashboards.reports}
                >
                  View dashboard template
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
            mt={{
              xs: 2,
              md: 3,
            }}
            pb={{
              xs: 2,
              sm: 4,
              md: 10,
            }}
          >
            <Box
              pl={{
                xs: 0,
                md: 14,
                lg: 30,
              }}
            >
              <Stack
                direction={{
                  xs: 'column-reverse',
                  lg: 'column',
                }}
                spacing={{
                  xs: 2,
                  sm: 3,
                }}
              >
                <Box p={2}>
                  <Grid
                    container
                    spacing={2}
                  >
                    <Grid
                      xs={12}
                      sm={6}
                      lg={3}
                    >
                      <Box>
                        <Box
                          display="flex"
                          alignItems="center"
                        >
                          <Box
                            sx={{
                              backgroundColor: 'info.light',
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
                            color="text.primary"
                            sx={{
                              pl: 1,
                            }}
                          >
                            layout shells
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={6}
                      lg={3}
                    >
                      <Box>
                        <Box
                          display="flex"
                          alignItems="center"
                        >
                          <Box
                            sx={{
                              backgroundColor: 'info.light',
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
                            8
                          </Typography>
                          <Typography
                            variant="h3"
                            component="p"
                            fontWeight={400}
                            color="text.primary"
                            sx={{
                              pl: 1,
                            }}
                          >
                            dashboard pages
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={6}
                      lg={3}
                    >
                      <Box>
                        <Box
                          display="flex"
                          alignItems="center"
                        >
                          <Box
                            sx={{
                              backgroundColor: 'info.light',
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
                            7
                          </Typography>
                          <Typography
                            variant="h3"
                            component="p"
                            fontWeight={400}
                            color="text.primary"
                            sx={{
                              pl: 1,
                            }}
                          >
                            app examples
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={6}
                      lg={3}
                    >
                      <Box>
                        <Box
                          display="flex"
                          alignItems="center"
                        >
                          <Box
                            sx={{
                              backgroundColor: 'info.light',
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
                            9
                          </Typography>
                          <Typography
                            variant="h3"
                            component="p"
                            fontWeight={400}
                            color="text.primary"
                            sx={{
                              pl: 1,
                            }}
                          >
                            management areas
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Tilt
                  scale={1}
                  tiltMaxAngleX={1}
                  perspective={1300}
                  tiltMaxAngleY={1.56}
                >
                  <Card
                    sx={{
                      transformStyle: 'preserve-3d',
                      p: 2,
                    }}
                  >
                    <Box pb={2}>
                      <Link
                        component={RouterLink}
                        variant="h4"
                        href={routes.blueprints['generic-admin-dashboard'].dashboards.reports}
                        fontWeight={500}
                        gutterBottom
                        color="text.primary"
                      >
                        Generic Admin Dashboard Template
                      </Link>
                    </Box>
                    <CardActionAreaWrapper
                      sx={{
                        height: '100%',
                        borderRadius: theme.shape.borderRadius + 'px',
                        boxShadow: theme.shadows[12],
                      }}
                      // @ts-ignore
                      href={routes.blueprints['generic-admin-dashboard'].dashboards.reports}
                      component={RouterLink}
                    >
                      <CardMedia
                        height="580"
                        component="img"
                        image="/placeholders/covers/generic-admin-dashboard-dark.png"
                        alt="UIFort React Admin Dashboard Template"
                      />
                    </CardActionAreaWrapper>
                  </Card>
                </Tilt>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Page;
