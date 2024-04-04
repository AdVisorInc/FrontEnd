import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import LinkTwoToneIcon from '@mui/icons-material/LinkTwoTone';
import ScheduleTwoToneIcon from '@mui/icons-material/ScheduleTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import {
  alpha,
  Avatar,
  Badge,
  Box,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  IconButton,
  Link,
  styled,
  Typography,
  useTheme,
} from '@mui/material';

const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
  transform: 'translateY(0px)',

  '.MuiSvgIcon-root': {
    transform: 'scale(1)',
  },

  '&:hover': {
    transform: 'translateY(-2px)',

    '.MuiSvgIcon-root': {
      transform: 'scale(1.3)',
    },
  },
}));

function Component() {
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            background: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%) !important',
          }}
          variant="outlined"
          elevation={0}
        >
          <Box p={2}>
            <Link
              href=""
              onClick={(e) => e.preventDefault()}
              sx={{
                color: theme.palette.common.white,
                fontSize: theme.typography.pxToRem(17),
              }}
              underline="hover"
              variant="h5"
            >
              Create Figma design files
            </Link>
            <Box
              mt={2}
              display="flex"
            >
              <Avatar
                variant="rounded"
                sx={{
                  fontSize: theme.typography.pxToRem(12),
                  fontWeight: 600,
                  background: theme.palette.error.main,
                  color: theme.palette.error.contrastText,
                  borderRadius: theme.shape.borderRadius,
                  width: 34,
                  height: 34,
                  mr: 0.5,
                  boxShadow: '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
                }}
              >
                JK
              </Avatar>
              <Box mr={0.5}>
                <Badge
                  color="success"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  variant="dot"
                  overlap="rectangular"
                >
                  <Avatar
                    variant="rounded"
                    sx={{
                      fontSize: theme.typography.pxToRem(12),
                      fontWeight: 'normal',
                      background: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                      borderRadius: theme.shape.borderRadius,
                      width: 34,
                      height: 34,
                      boxShadow:
                        '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
                    }}
                  >
                    HA
                  </Avatar>
                </Badge>
              </Box>
              <Avatar
                variant="rounded"
                sx={{
                  borderRadius: theme.shape.borderRadius,
                  width: 34,
                  mr: 0.5,
                  height: 34,
                  boxShadow: '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
                }}
                alt="Cindy Baker"
                src="/avatars/3.png"
              />
              <Avatar
                variant="rounded"
                sx={{
                  borderRadius: theme.shape.borderRadius,
                  width: 34,
                  mr: 0.5,
                  height: 34,
                  boxShadow: '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
                }}
                alt="Agnes Walker"
                src="/avatars/4.png"
              />
            </Box>
          </Box>
          <Divider
            sx={{
              borderColor:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.common.white, 0.15)
                  : alpha(theme.palette.common.white, 0.2),
            }}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={2}
            sx={{
              background:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.common.white, 0.04)
                  : alpha(theme.palette.common.white, 0.1),
            }}
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <IconButtonWrapper
                size="small"
                sx={{
                  mr: 1.5,
                  background: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,

                  '&:hover': {
                    background: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  },
                }}
              >
                <AddTwoToneIcon fontSize="small" />
              </IconButtonWrapper>
              <Typography
                sx={{
                  display: 'flex',
                  mr: 1.5,
                  alignItems: 'center',
                  color: alpha(theme.palette.common.white, 0.7),
                }}
                variant="body1"
                noWrap
                color="text.secondary"
              >
                <LinkTwoToneIcon
                  sx={{
                    mr: 0.4,
                  }}
                  fontSize="small"
                />
                55
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  mr: 1.5,
                  alignItems: 'center',
                  color: alpha(theme.palette.common.white, 0.7),
                }}
                variant="body1"
                noWrap
                color="text.secondary"
              >
                <VisibilityTwoToneIcon
                  sx={{
                    mr: 0.4,
                  }}
                  fontSize="small"
                />
                458
              </Typography>
            </Box>
            <Typography
              sx={{
                color: alpha(theme.palette.common.white, 0.7),
                display: 'flex',
                alignItems: 'center',
              }}
              variant="body1"
              noWrap
              color="text.secondary"
            >
              <ScheduleTwoToneIcon
                sx={{
                  mr: 0.4,
                }}
                fontSize="small"
              />
              9:45 am
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            background: 'linear-gradient(60deg, #29323c 0%, #485563 100%) !important',
            textAlign: 'center',
          }}
          variant="outlined"
          elevation={0}
        >
          <Box p={2}>
            <Link
              href=""
              onClick={(e) => e.preventDefault()}
              sx={{
                color: theme.palette.common.white,
                fontSize: theme.typography.pxToRem(17),
              }}
              underline="hover"
              variant="h5"
            >
              Implements package.json update
            </Link>
            <Box
              display="flex"
              mt={2}
              justifyContent="center"
            >
              <Avatar
                sx={{
                  width: 44,
                  height: 44,
                  boxShadow: '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
                }}
                alt="Cindy Baker"
                src="/avatars/1.png"
              />
              <Avatar
                sx={{
                  width: 44,
                  height: 44,
                  mx: 1,
                  boxShadow: '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
                }}
                alt="Shelly Hays"
                src="/avatars/2.png"
              />
              <Avatar
                sx={{
                  width: 44,
                  height: 44,
                  boxShadow: '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
                }}
                alt="Agnes Walker"
                src="/avatars/5.png"
              />
            </Box>
          </Box>
          <Divider
            sx={{
              borderColor:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.common.white, 0.15)
                  : alpha(theme.palette.common.white, 0.2),
            }}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={1.5}
            sx={{
              background:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.common.white, 0.04)
                  : alpha(theme.palette.common.white, 0.1),
            }}
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <IconButtonWrapper
                size="small"
                sx={{
                  mr: 1.5,
                  background: theme.palette.success.main,
                  color: theme.palette.success.contrastText,

                  '&:hover': {
                    background: theme.palette.success.main,
                    color: theme.palette.success.contrastText,
                  },
                }}
              >
                <AddTwoToneIcon fontSize="small" />
              </IconButtonWrapper>
              <Typography
                sx={{
                  display: 'flex',
                  mr: 1.5,
                  alignItems: 'center',
                  color: alpha(theme.palette.common.white, 0.7),
                }}
                variant="body1"
                noWrap
                color="text.secondary"
              >
                <LinkTwoToneIcon
                  sx={{
                    mr: 0.4,
                  }}
                  fontSize="small"
                />
                34
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  mr: 1.5,
                  alignItems: 'center',
                  color: alpha(theme.palette.common.white, 0.7),
                }}
                variant="body1"
                noWrap
                color="text.secondary"
              >
                <VisibilityTwoToneIcon
                  sx={{
                    mr: 0.4,
                  }}
                  fontSize="small"
                />
                51.2k
              </Typography>
            </Box>
            <Typography
              sx={{
                color: alpha(theme.palette.common.white, 0.7),
                display: 'flex',
                alignItems: 'center',
              }}
              variant="body1"
              noWrap
              color="text.secondary"
            >
              <ScheduleTwoToneIcon
                sx={{
                  mr: 0.4,
                }}
                fontSize="small"
              />
              5:30 pm
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            background: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%) !important',
          }}
          variant="outlined"
          elevation={0}
        >
          <Box p={2}>
            <Link
              href=""
              onClick={(e) => e.preventDefault()}
              sx={{
                color: theme.palette.common.white,
                fontSize: theme.typography.pxToRem(17),
              }}
              underline="hover"
              variant="h5"
            >
              Release new features
            </Link>
            <Box
              mt={2}
              display="flex"
            >
              <Box mr={0.5}>
                <Badge
                  color="primary"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  overlap="circular"
                  badgeContent="7"
                >
                  <Avatar
                    sx={{
                      width: 44,
                      height: 44,
                      boxShadow:
                        '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
                    }}
                    alt="Cindy Baker"
                    src="/avatars/1.png"
                  />
                </Badge>
              </Box>
              <Avatar
                sx={{
                  width: 44,
                  mr: 0.5,
                  height: 44,
                  boxShadow: '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
                }}
                alt="Travis Howard"
                src="/avatars/2.png"
              />
              <Avatar
                sx={{
                  width: 44,
                  mr: 0.5,
                  height: 44,
                  boxShadow: '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
                }}
                alt="Remy Sharp"
                src="/avatars/3.png"
              />
              <Avatar
                sx={{
                  width: 44,
                  mr: 0.5,
                  height: 44,
                  boxShadow: '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
                }}
                alt="Shelly Hays"
                src="/avatars/4.png"
              />
              <Avatar
                sx={{
                  width: 44,
                  mr: 0.5,
                  height: 44,
                  boxShadow: '0 .113rem .5rem rgba(7,9,25,.3), 0 .126rem .225rem rgba(7,9,25,.1)',
                }}
                alt="Agnes Walker"
                src="/avatars/5.png"
              />
            </Box>
          </Box>
          <Divider
            sx={{
              borderColor:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.common.white, 0.15)
                  : alpha(theme.palette.common.white, 0.2),
            }}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={1.5}
            sx={{
              background:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.common.white, 0.04)
                  : alpha(theme.palette.common.white, 0.1),
            }}
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <IconButtonWrapper
                size="small"
                sx={{
                  mr: 1.5,
                  background: theme.palette.error.main,
                  color: theme.palette.error.contrastText,

                  '&:hover': {
                    background: theme.palette.error.main,
                    color: theme.palette.error.contrastText,
                  },
                }}
              >
                <AddTwoToneIcon fontSize="small" />
              </IconButtonWrapper>
              <Typography
                sx={{
                  display: 'flex',
                  mr: 1.5,
                  alignItems: 'center',
                  color: alpha(theme.palette.common.white, 0.7),
                }}
                variant="body1"
                noWrap
                color="text.secondary"
              >
                <LinkTwoToneIcon
                  sx={{
                    mr: 0.4,
                  }}
                  fontSize="small"
                />
                55
              </Typography>
              <Typography
                sx={{
                  display: 'flex',
                  mr: 1.5,
                  alignItems: 'center',
                  color: alpha(theme.palette.common.white, 0.7),
                }}
                variant="body1"
                noWrap
                color="text.secondary"
              >
                <VisibilityTwoToneIcon
                  sx={{
                    mr: 0.4,
                  }}
                  fontSize="small"
                />
                458
              </Typography>
            </Box>
            <Typography
              sx={{
                color: alpha(theme.palette.common.white, 0.7),
                display: 'flex',
                alignItems: 'center',
              }}
              variant="body1"
              noWrap
              color="text.secondary"
            >
              <ScheduleTwoToneIcon
                sx={{
                  mr: 0.4,
                }}
                fontSize="small"
              />
              9:45 am
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
