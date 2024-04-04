import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import HourglassTopTwoToneIcon from '@mui/icons-material/HourglassTopTwoTone';
import PersonSearchTwoToneIcon from '@mui/icons-material/PersonSearchTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        sm={6}
      >
        <Card
          sx={{
            p: 2.5,
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <Avatar
                sx={{
                  background: theme.palette.error.main,
                  color: theme.palette.error.contrastText,
                  width: 50,
                  height: 50,
                  boxShadow: `0 .113rem .5rem ${alpha(
                    theme.palette.common.black,
                    0.1
                  )}, 0 .126rem .225rem ${alpha(theme.palette.common.black, 0.3)}`,
                }}
              >
                SW
              </Avatar>
              <Box ml={1.5}>
                <Link
                  href=""
                  onClick={(e) => e.preventDefault()}
                  color="text.primary"
                  underline="none"
                  sx={{
                    transition: theme.transitions.create(['color']),
                    lineHeight: 1,

                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                  variant="h5"
                >
                  Shanelle Wynn
                </Link>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                >
                  UI Engineer, Apple Inc.
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
            >
              <Avatar
                sx={{
                  mr: 0.8,
                  width: 32,
                  height: 32,
                  background: alpha(theme.palette.success.main, 0.1),
                  color: theme.palette.success.main,
                }}
              >
                <CheckTwoToneIcon
                  sx={{
                    fontSize: theme.typography.pxToRem(16),
                  }}
                />
              </Avatar>
              <Typography
                variant="body1"
                sx={{
                  fontSize: theme.typography.pxToRem(13),
                  color: theme.palette.success.main,
                  display: { xs: 'none', md: 'block' },
                }}
              >
                {t('Profile verified')}
              </Typography>
            </Box>
          </Box>
          <Divider
            sx={{
              mt: 2.5,
            }}
          />
          <Box
            display="flex"
            justifyContent="center"
            py={2}
          >
            <Tooltip
              arrow
              placement="top"
              title={t('View details')}
            >
              <IconButton color="primary">
                <VisibilityTwoToneIcon
                  sx={{
                    fontSize: theme.typography.pxToRem(18),
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip
              arrow
              placement="top"
              title={t('Add to favourites')}
            >
              <IconButton
                sx={{
                  mx: 1,
                }}
                color="primary"
              >
                <FavoriteTwoToneIcon
                  sx={{
                    fontSize: theme.typography.pxToRem(18),
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip
              arrow
              placement="top"
              title={t('View user profile')}
            >
              <IconButton color="primary">
                <PersonSearchTwoToneIcon
                  sx={{
                    fontSize: theme.typography.pxToRem(18),
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
          <Divider />
          <Stack
            sx={{
              mt: 2.5,
              textAlign: 'center',
            }}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
          >
            <Box>
              <Typography
                gutterBottom
                variant="subtitle2"
                color="text.secondary"
                lineHeight={1}
              >
                {t('Projects')}
              </Typography>
              <Typography variant="h4">381</Typography>
            </Box>
            <Box>
              <Typography
                gutterBottom
                variant="subtitle2"
                color="text.secondary"
                lineHeight={1}
              >
                {t('Reviews')}
              </Typography>
              <Typography variant="h4">198</Typography>
            </Box>
            <Box>
              <Typography
                gutterBottom
                variant="subtitle2"
                color="text.secondary"
                lineHeight={1}
              >
                {t('Revenue')}
              </Typography>
              <Typography variant="h4">$685</Typography>
            </Box>
          </Stack>
        </Card>
      </Grid>
      <Grid
        xs={12}
        sm={6}
      >
        <Card
          sx={{
            p: 2.5,
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <Avatar
                sx={{
                  width: 50,
                  height: 50,
                  boxShadow: `0 .113rem .5rem ${alpha(
                    theme.palette.common.black,
                    0.1
                  )}, 0 .126rem .225rem ${alpha(theme.palette.common.black, 0.3)}`,
                }}
                src="/avatars/3.png"
              />
              <Box ml={1.5}>
                <Link
                  href=""
                  onClick={(e) => e.preventDefault()}
                  color="text.primary"
                  underline="none"
                  sx={{
                    transition: theme.transitions.create(['color']),
                    lineHeight: 1,

                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                  variant="h5"
                >
                  Richard Doyle
                </Link>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                >
                  Senior Consultant, Google
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
            >
              <Avatar
                sx={{
                  mr: 0.8,
                  width: 32,
                  height: 32,
                  background: alpha(theme.palette.warning.main, 0.1),
                  color: theme.palette.warning.main,
                }}
              >
                <HourglassTopTwoToneIcon
                  sx={{
                    fontSize: theme.typography.pxToRem(16),
                  }}
                />
              </Avatar>
              <Typography
                variant="body1"
                sx={{
                  fontSize: theme.typography.pxToRem(13),
                  color: theme.palette.warning.main,
                  display: { xs: 'none', md: 'block' },
                }}
              >
                {t('Review pending')}
              </Typography>
            </Box>
          </Box>
          <Divider
            sx={{
              mt: 2.5,
            }}
          />
          <Box
            display="flex"
            justifyContent="center"
            py={2}
          >
            <Tooltip
              arrow
              placement="top"
              title={t('View details')}
            >
              <IconButton color="success">
                <VisibilityTwoToneIcon
                  sx={{
                    fontSize: theme.typography.pxToRem(18),
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip
              arrow
              placement="top"
              title={t('Add to favourites')}
            >
              <IconButton
                sx={{
                  mx: 1,
                }}
                color="success"
              >
                <FavoriteTwoToneIcon
                  sx={{
                    fontSize: theme.typography.pxToRem(18),
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip
              arrow
              placement="top"
              title={t('View user profile')}
            >
              <IconButton color="success">
                <PersonSearchTwoToneIcon
                  sx={{
                    fontSize: theme.typography.pxToRem(18),
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
          <Divider />
          <Stack
            sx={{
              mt: 2.5,
              textAlign: 'center',
            }}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
          >
            <Box>
              <Typography
                gutterBottom
                variant="subtitle2"
                color="text.secondary"
                lineHeight={1}
              >
                {t('Projects')}
              </Typography>
              <Typography variant="h4">34</Typography>
            </Box>
            <Box>
              <Typography
                gutterBottom
                variant="subtitle2"
                color="text.secondary"
                lineHeight={1}
              >
                {t('Reviews')}
              </Typography>
              <Typography variant="h4">21</Typography>
            </Box>
            <Box>
              <Typography
                gutterBottom
                variant="subtitle2"
                color="text.secondary"
                lineHeight={1}
              >
                {t('Revenue')}
              </Typography>
              <Typography variant="h4">$283</Typography>
            </Box>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
