'use client';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import LaunchRoundedIcon from '@mui/icons-material/CheckRounded';
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
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Tilt from 'react-parallax-tilt';
import { Helmet } from 'src/components/base/helmet';
// import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import { AvatarState } from 'src/components/base/styles/avatar';

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
              pb={{ xs: 2, md: 8 }}
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
                    <Typography variant="h5">AI-Powered Ad Optimization</Typography>
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
                    AdVisor Pricing
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight={400}
                    color="neutral.500"
                    lineHeight={1.8}
                  >
                    Choose the plan that fits your business needs and unlock the power of AI-driven
                    ad optimization. All plans include advanced analytics, customizable KPI
                    weighting, and dedicated support.
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
                  href=""
                  target="_blank"
                  rel="noopener"
                  endIcon={<LaunchRoundedIcon fontSize="small" />}
                >
                  View product page
                </Button>
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
                          Starter
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
                          For small businesses and startups
                        </Typography>
                        <Typography
                          variant="h1"
                          component="p"
                          lineHeight={1}
                        >
                          $99
                          <Typography
                            variant="h5"
                            component="span"
                            color="text.secondary"
                          >
                            /mo
                          </Typography>
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
                          Get Started
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
                          sx={{ py: 0.8 }}
                        >
                          <ListItemAvatar sx={{ minWidth: 38 }}>
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{ height: 28, width: 28 }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="3 Ad Platforms" />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{ py: 0.8 }}
                        >
                          <ListItemAvatar sx={{ minWidth: 38 }}>
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{ height: 28, width: 28 }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="10 Campaigns" />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{ py: 0.8 }}
                        >
                          <ListItemAvatar sx={{ minWidth: 38 }}>
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{ height: 28, width: 28 }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="Basic Analytics" />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{ py: 0.8 }}
                        >
                          <ListItemAvatar sx={{ minWidth: 38 }}>
                            <AvatarState
                              isSoft
                              state="error"
                              sx={{ height: 28, width: 28 }}
                            >
                              <CloseRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="AI-Driven Recommendations" />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{ py: 0.8 }}
                        >
                          <ListItemAvatar sx={{ minWidth: 38 }}>
                            <AvatarState
                              isSoft
                              state="error"
                              sx={{ height: 28, width: 28 }}
                            >
                              <CloseRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="Advanced Reporting" />
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
                          Professional
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
                          For growing businesses
                        </Typography>
                        <Typography
                          variant="h1"
                          component="p"
                          lineHeight={1}
                        >
                          $299
                          <Typography
                            variant="h5"
                            component="span"
                            color="text.secondary"
                          >
                            /mo
                          </Typography>
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
                          Get Started
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
                          sx={{ py: 0.8 }}
                        >
                          <ListItemAvatar sx={{ minWidth: 38 }}>
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{ height: 28, width: 28 }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="5 Ad Platforms" />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{ py: 0.8 }}
                        >
                          <ListItemAvatar sx={{ minWidth: 38 }}>
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{ height: 28, width: 28 }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="Unlimited Campaigns" />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{ py: 0.8 }}
                        >
                          <ListItemAvatar sx={{ minWidth: 38 }}>
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{ height: 28, width: 28 }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="Advanced Analytics" />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{ py: 0.8 }}
                        >
                          <ListItemAvatar sx={{ minWidth: 38 }}>
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{ height: 28, width: 28 }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="AI-Driven Recommendations" />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{ py: 0.8 }}
                        >
                          <ListItemAvatar sx={{ minWidth: 38 }}>
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{ height: 28, width: 28 }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText primary="Custom Reporting" />
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
                          Enterprise
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
                          For large enterprises
                        </Typography>
                        <Typography
                          variant="h1"
                          component="p"
                          lineHeight={1}
                        >
                          Custom
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
                          Contact Us
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
                          sx={{ py: 0.8 }}
                        >
                          <ListItemAvatar sx={{ minWidth: 38 }}>
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{ height: 28, width: 28 }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText
                            sx={{
                              color: 'success.main',
                            }}
                            primary="Includes everything from Professional plan"
                            primaryTypographyProps={{
                              variant: 'h5',
                            }}
                          />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{ py: 0.8 }}
                        >
                          <ListItemAvatar sx={{ minWidth: 38 }}>
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{ height: 28, width: 28 }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText
                            primaryTypographyProps={{
                              variant: 'h6',
                            }}
                            primary="Dedicated Account Manager"
                          />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{ py: 0.8 }}
                        >
                          <ListItemAvatar sx={{ minWidth: 38 }}>
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{ height: 28, width: 28 }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText
                            primaryTypographyProps={{
                              variant: 'h6',
                            }}
                            primary="Custom Integrations"
                          />
                        </ListItem>
                        <ListItem
                          disablePadding
                          sx={{ py: 0.8 }}
                        >
                          <ListItemAvatar sx={{ minWidth: 38 }}>
                            <AvatarState
                              isSoft
                              state="success"
                              sx={{ height: 28, width: 28 }}
                            >
                              <CheckRoundedIcon fontSize="small" />
                            </AvatarState>
                          </ListItemAvatar>
                          <ListItemText
                            primaryTypographyProps={{
                              variant: 'h6',
                            }}
                            primary="Priority Support"
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
