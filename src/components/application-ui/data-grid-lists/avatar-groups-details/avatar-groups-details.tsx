import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import LinkTwoToneIcon from '@mui/icons-material/LinkTwoTone';
import ScheduleTwoToneIcon from '@mui/icons-material/ScheduleTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import {
  alpha,
  Avatar,
  Badge,
  Box,
  Divider,
  Unstable_Grid2 as Grid,
  IconButton,
  Link,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import AvatarGroupsTooltips from 'src/components/application-ui/avatars/avatar-group-tooltips/avatar-group-tooltips';
import { CardBorderColor } from 'src/components/base/styles/card-border-color';

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
        <CardBorderColor
          elevation={6}
          borderColor="primary"
          borderPosition="top"
        >
          <Box p={2}>
            <Link
              href=""
              onClick={(e) => e.preventDefault()}
              color="text.primary"
              underline="none"
              sx={{
                fontSize: theme.typography.pxToRem(17),

                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
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
                  overlap="circular"
                >
                  <Avatar
                    variant="rounded"
                    sx={{
                      fontSize: theme.typography.pxToRem(12),
                      fontWeight: 600,
                      background: theme.palette.common.black,
                      color: theme.palette.common.white,
                      borderRadius: theme.shape.borderRadius,
                      width: 34,
                      height: 34,
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
                }}
                alt="Agnes Walker"
                src="/avatars/4.png"
              />
            </Box>
          </Box>
          <Divider />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={2}
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
              borderBottomLeftRadius: 'inherit',
              borderBottomRightRadius: 'inherit',
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
                  boxShadow: `0px 1px 4px ${alpha(
                    theme.palette.primary.main,
                    0.25
                  )}, 0px 3px 12px 2px ${alpha(theme.palette.primary.main, 0.35)}`,
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
        </CardBorderColor>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <CardBorderColor
          elevation={6}
          borderColor="success"
          borderPosition="bottom"
          sx={{
            textAlign: 'center',
          }}
        >
          <Box p={2}>
            <Link
              href=""
              onClick={(e) => e.preventDefault()}
              color="text.primary"
              underline="none"
              sx={{
                fontSize: theme.typography.pxToRem(17),

                '&:hover': {
                  color: theme.palette.success.main,
                },
              }}
              variant="h5"
            >
              Implements package.json update
            </Link>
            <Box
              mt={2}
              mb={1}
              display="flex"
              justifyContent="center"
            >
              <AvatarGroupsTooltips />
            </Box>
          </Box>
          <Divider />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={1.16}
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
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
                  boxShadow: theme.shadows[2],
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
        </CardBorderColor>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <CardBorderColor
          borderColor="error"
          borderPosition="top"
        >
          <Box p={2}>
            <Link
              href=""
              onClick={(e) => e.preventDefault()}
              color="text.primary"
              underline="none"
              sx={{
                fontSize: theme.typography.pxToRem(17),

                '&:hover': {
                  color: theme.palette.error.main,
                },
              }}
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
                }}
                alt="Travis Howard"
                src="/avatars/2.png"
              />
              <Avatar
                sx={{
                  width: 44,
                  mr: 0.5,
                  height: 44,
                }}
                alt="Remy Sharp"
                src="/avatars/3.png"
              />
              <Avatar
                sx={{
                  width: 44,
                  mr: 0.5,
                  height: 44,
                }}
                alt="Shelly Hays"
                src="/avatars/4.png"
              />
              <Avatar
                sx={{
                  width: 44,
                  mr: 0.5,
                  height: 44,
                }}
                alt="Agnes Walker"
                src="/avatars/5.png"
              />
            </Box>
          </Box>
          <Divider />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={1.5}
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
              borderBottomLeftRadius: 'inherit',
              borderBottomRightRadius: 'inherit',
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
                  boxShadow: theme.shadows[4],
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
        </CardBorderColor>
      </Grid>
    </Grid>
  );
}

export default Component;
