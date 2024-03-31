'use client';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  alpha,
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Unstable_Grid2 as Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Tilt from 'react-parallax-tilt';
import { Helmet } from 'src/components/base/helmet';
// import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import { AvatarState } from 'src/components/base/styles/avatar';
import { MarketingLayout as Layout } from 'src/layouts/marketing';

const Page = () => {
  const { t } = useTranslation();
  const pageTitle = 'Pricing';
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
                  backgroundColor: 'success.main',
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
                    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.default} 20%, ${theme.palette.success.main} 100%)`,
                  },
                }}
              >
                <Box
                  sx={{
                    width: theme.spacing(11),
                    height: theme.spacing(11),
                    background: 'none',
                    borderLeft: `4px solid ${theme.palette.success.main}`,
                    borderBottom: `4px solid ${theme.palette.success.main}`,
                    borderBottomLeftRadius: theme.shape.borderRadius * 3,
                    position: 'absolute',
                    zIndex: 3,
                    top: theme.spacing(11),
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
                      top: 0,
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
                <Box
                  sx={{
                    width: theme.spacing(10),
                    height: theme.spacing(10),
                    background: 'none',
                    borderLeft: `4px solid ${theme.palette.success.main}`,
                    borderBottom: `4px solid ${theme.palette.success.main}`,
                    borderBottomLeftRadius: theme.shape.borderRadius * 3,
                    position: 'absolute',
                    zIndex: 3,
                    bottom: theme.spacing(-9),
                    left: theme.spacing(0),
                    boxShadow: `-35px 35px 35px 0 ${alpha(
                      theme.palette.background.paper,
                      0.5
                    )}, -40px 45px 45px 0 ${alpha(theme.palette.success.main, 0.15)}`,
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
                      left: theme.spacing(8),
                      bottom: theme.spacing(-1.3),
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
            <Box
              // pb={{ xs: 2, md: 8 }}
              flex={1}
            >
              <Chip
                variant="outlined"
                color="success"
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
                  >
                    Pricing
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight={400}
                    color="neutral.500"
                    lineHeight={1.8}
                  >
                    All licenses include all components and blueprints + starter templates depending
                    on chosen license.
                    <br />
                    Also, support and free updates for 12 months.
                  </Typography>
                </Grid>
              </Grid>
              {/* <Stack direction="row" spacing={3} alignItems="center">
                <Button
                  size="large"
                  variant="contained"
                  href=""
                  target="_blank"
                  rel="noopener"
                  endIcon={<LaunchRoundedIcon fontSize="small" />}
                >
                  View product page
                </Button>
               </Stack> */}
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
                lg: 16.5,
              }}
            >
              <Grid
                container
                columns={24}
                spacing={{
                  xs: 2,
                  sm: 3,
                }}
              >
                <Grid
                  xs={24}
                  lg={8}
                  md={12}
                >
                  <Tilt
                    scale={1}
                    tiltMaxAngleX={1}
                    perspective={800}
                    tiltMaxAngleY={1.56}
                    glarePosition="all"
                    glareEnable={true}
                    glareColor={theme.palette.primary.main}
                    glareMaxOpacity={0.05}
                  >
                    <Card
                      sx={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <Box
                        p={2}
                        sx={{
                          backgroundColor: alpha(theme.palette.neutral[400], 0.02),
                        }}
                      >
                        <Typography
                          variant="h3"
                          component="h6"
                          fontWeight={500}
                          sx={{
                            pb: 0.5,
                          }}
                        >
                          Standard License
                        </Typography>
                        <Typography
                          variant="h5"
                          color="text.secondary"
                          component="p"
                          fontWeight={400}
                          sx={{
                            pb: 1,
                          }}
                        >
                          End-users <b>can't</b> be charged for.
                        </Typography>
                        <Typography
                          variant="h1"
                          component="p"
                          lineHeight={1}
                        >
                          $69
                        </Typography>
                      </Box>
                      <Divider />
                      <Box
                        p={2}
                        display="flex"
                        justifyContent="center"
                      >
                        <Button
                          sx={{
                            px: {
                              xs: 3,
                              md: 4,
                              lg: 5,
                            },
                          }}
                          size="large"
                          variant="contained"
                          href="https://buy.stripe.com/14k7ue9C9gBlbqEeUV"
                          target="_blank"
                          rel="noopener"
                        >
                          Buy now
                        </Button>
                      </Box>
                      <Divider />
                      <List
                        sx={{
                          p: 2,
                        }}
                        disablePadding
                      >
                        <ListItem
                          disablePadding
                          sx={{
                            py: 0.8,
                          }}
                        >
                          <ListItemAvatar
                            sx={{
                              minWidth: 38,
                            }}
                          >
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{
                                height: 28,
                                width: 28,
                              }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="Includes Next.js JavaScript files" />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{
                            py: 0.8,
                          }}
                        >
                          <ListItemAvatar
                            sx={{
                              minWidth: 38,
                            }}
                          >
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{
                                height: 28,
                                width: 28,
                              }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="Includes Vite JavaScript files" />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{
                            py: 0.8,
                          }}
                        >
                          <ListItemAvatar
                            sx={{
                              minWidth: 38,
                            }}
                          >
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{
                                height: 28,
                                width: 28,
                              }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="Includes starter templates (2)" />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{
                            py: 0.8,
                          }}
                        >
                          <ListItemAvatar
                            sx={{
                              minWidth: 38,
                            }}
                          >
                            <AvatarState
                              isSoft
                              state="error"
                              sx={{
                                height: 28,
                                width: 28,
                              }}
                            >
                              <CloseRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="Doesn't include Next.js App Router version" />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{
                            py: 0.8,
                          }}
                        >
                          <ListItemAvatar
                            sx={{
                              minWidth: 38,
                            }}
                          >
                            <AvatarState
                              isSoft
                              state="error"
                              sx={{
                                height: 28,
                                width: 28,
                              }}
                            >
                              <CloseRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="Doesn't include Typescript files" />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{
                            py: 0.8,
                          }}
                        >
                          <ListItemAvatar
                            sx={{
                              minWidth: 38,
                            }}
                          >
                            <AvatarState
                              isSoft
                              state="error"
                              sx={{
                                height: 28,
                                width: 28,
                              }}
                            >
                              <CloseRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="Doesn't include Figma design files" />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{
                            py: 0.8,
                          }}
                        >
                          <ListItemAvatar
                            sx={{
                              minWidth: 38,
                            }}
                          >
                            <AvatarState
                              isSoft
                              state="error"
                              sx={{
                                height: 28,
                                width: 28,
                              }}
                            >
                              <CloseRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="Can't be used in commercial products" />
                        </ListItem>
                      </List>
                    </Card>
                  </Tilt>
                </Grid>
                <Grid
                  xs={24}
                  lg={8}
                  md={12}
                >
                  <Chip
                    variant="outlined"
                    color="primary"
                    label="Recommended"
                    sx={{
                      mt: -7,
                      display: {
                        xs: 'none',
                        lg: 'inline-flex',
                      },
                    }}
                  />
                  <Tilt
                    scale={1}
                    tiltMaxAngleX={1}
                    perspective={800}
                    tiltMaxAngleY={1.56}
                    glarePosition="all"
                    glareEnable={true}
                    glareColor={theme.palette.primary.main}
                    glareMaxOpacity={0.05}
                  >
                    <Card
                      sx={{
                        transformStyle: 'preserve-3d',
                        mt: -2,
                      }}
                    >
                      <Box
                        p={2}
                        sx={{
                          backgroundColor: alpha(theme.palette.neutral[400], 0.02),
                        }}
                      >
                        <Typography
                          variant="h3"
                          component="h6"
                          fontWeight={500}
                          sx={{
                            pb: 0.5,
                          }}
                        >
                          Standard Plus License
                        </Typography>
                        <Typography
                          variant="h5"
                          color="text.secondary"
                          component="p"
                          fontWeight={400}
                          sx={{
                            pb: 1,
                          }}
                        >
                          End-users <b>can't</b> be charged for.
                        </Typography>
                        <Typography
                          variant="h1"
                          component="p"
                          lineHeight={1}
                        >
                          $129
                        </Typography>
                      </Box>
                      <Divider />
                      <Box
                        p={2}
                        display="flex"
                        justifyContent="center"
                      >
                        <Button
                          sx={{
                            px: {
                              xs: 3,
                              md: 4,
                              lg: 5,
                            },
                          }}
                          size="large"
                          variant="contained"
                          href="https://buy.stripe.com/28o5m629H1Gr2U8002"
                          target="_blank"
                          rel="noopener"
                        >
                          Buy now
                        </Button>
                      </Box>
                      <Divider />
                      <List
                        sx={{
                          p: 2,
                        }}
                        disablePadding
                      >
                        <ListItem
                          disablePadding
                          sx={{
                            py: 0.8,
                          }}
                        >
                          <ListItemAvatar
                            sx={{
                              minWidth: 38,
                            }}
                          >
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{
                                height: 28,
                                width: 28,
                              }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="Includes Next.js JavaScript files" />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{
                            py: 0.8,
                          }}
                        >
                          <ListItemAvatar
                            sx={{
                              minWidth: 38,
                            }}
                          >
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{
                                height: 28,
                                width: 28,
                              }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="Includes Vite JavaScript files" />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{
                            py: 0.8,
                          }}
                        >
                          <ListItemAvatar
                            sx={{
                              minWidth: 38,
                            }}
                          >
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{
                                height: 28,
                                width: 28,
                              }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="Includes Typescript files (Next.js & Vite)" />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{
                            py: 0.8,
                          }}
                        >
                          <ListItemAvatar
                            sx={{
                              minWidth: 38,
                            }}
                          >
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{
                                height: 28,
                                width: 28,
                              }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="Includes Next.js App Router version" />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{
                            py: 0.8,
                          }}
                        >
                          <ListItemAvatar
                            sx={{
                              minWidth: 38,
                            }}
                          >
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{
                                height: 28,
                                width: 28,
                              }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="Includes starter templates (4)" />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{
                            py: 0.8,
                          }}
                        >
                          <ListItemAvatar
                            sx={{
                              minWidth: 38,
                            }}
                          >
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{
                                height: 28,
                                width: 28,
                              }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="Includes Figma design files" />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{
                            py: 0.8,
                          }}
                        >
                          <ListItemAvatar
                            sx={{
                              minWidth: 38,
                            }}
                          >
                            <AvatarState
                              isSoft
                              state="error"
                              sx={{
                                height: 28,
                                width: 28,
                              }}
                            >
                              <CloseRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="Can't be used in commercial products" />
                        </ListItem>
                      </List>
                    </Card>
                  </Tilt>
                </Grid>
                <Grid
                  xs={24}
                  lg={8}
                >
                  <Tilt
                    scale={1}
                    tiltMaxAngleX={1}
                    perspective={800}
                    tiltMaxAngleY={1.56}
                    glarePosition="all"
                    glareEnable={true}
                    glareColor={theme.palette.primary.main}
                    glareMaxOpacity={0.05}
                  >
                    <Card
                      sx={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <Box
                        p={2}
                        sx={{
                          backgroundColor: alpha(theme.palette.neutral[400], 0.02),
                        }}
                      >
                        <Typography
                          variant="h3"
                          component="h6"
                          fontWeight={500}
                          sx={{
                            pb: 0.5,
                          }}
                        >
                          Enterprise License
                        </Typography>
                        <Typography
                          variant="h5"
                          color="text.secondary"
                          component="p"
                          fontWeight={400}
                          sx={{
                            pb: 1,
                          }}
                        >
                          End-users <b>can</b> be charged for.
                        </Typography>
                        <Typography
                          variant="h1"
                          component="p"
                          lineHeight={1}
                        >
                          $599
                        </Typography>
                      </Box>
                      <Divider />
                      <Box
                        p={2}
                        display="flex"
                        justifyContent="center"
                      >
                        <Button
                          sx={{
                            px: {
                              xs: 3,
                              md: 4,
                              lg: 5,
                            },
                          }}
                          size="large"
                          variant="contained"
                          href="https://buy.stripe.com/aEU7uecOldp9bqE7sv"
                          target="_blank"
                          rel="noopener"
                        >
                          Buy now
                        </Button>
                      </Box>
                      <Divider />
                      <List
                        sx={{
                          p: 2,
                        }}
                        disablePadding
                      >
                        <ListItem
                          disablePadding
                          sx={{
                            py: 0.8,
                          }}
                        >
                          <ListItemAvatar
                            sx={{
                              minWidth: 38,
                            }}
                          >
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{
                                height: 28,
                                width: 28,
                              }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText
                            sx={{
                              color: 'success.main',
                            }}
                            primary="Includes everything from Standard Plus license"
                            primaryTypographyProps={{
                              variant: 'h5',
                            }}
                          />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{
                            py: 0.8,
                          }}
                        >
                          <ListItemAvatar
                            sx={{
                              minWidth: 38,
                            }}
                          >
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{
                                height: 28,
                                width: 28,
                              }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>

                          <ListItemText
                            primaryTypographyProps={{
                              variant: 'h6',
                            }}
                            primary="Can be used in applications for which the end user will be charged for"
                          />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{
                            py: 0.8,
                          }}
                        >
                          <ListItemAvatar
                            sx={{
                              minWidth: 38,
                            }}
                          >
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{
                                height: 28,
                                width: 28,
                              }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText
                            primaryTypographyProps={{
                              variant: 'h6',
                            }}
                            primary="Can be used in SaaS subscription based products"
                          />
                        </ListItem>
                      </List>
                    </Card>
                  </Tilt>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default Page;
