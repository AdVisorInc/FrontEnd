import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
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
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const CardBorderTop = styled(Card)(() => ({
  borderTop: `transparent 5px solid`,
}));

const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
  transform: 'translateY(0px)',
  transition: theme.transitions.create(['color', 'transform']),

  '.MuiSvgIcon-root': {
    transform: 'scale(1)',
    transition: theme.transitions.create(['transform']),
  },

  '&:hover': {
    transform: 'translateY(-2px)',

    '.MuiSvgIcon-root': {
      transform: 'scale(1.3)',
    },
  },
}));

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
        lg={4}
        md={6}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3 },
            textAlign: 'center',
          }}
        >
          <Avatar
            sx={{
              width: 90,
              height: 90,
              mb: 2,
              mx: 'auto',
              border: theme.palette.common.white + ' solid 3px',
              boxShadow: `0 0 0 3px ${theme.palette.primary.main}`,
            }}
            src="/avatars/2.png"
          />
          <Typography variant="h4">Lexie Livingston</Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
          >
            Lead React Developer
          </Typography>
          <Divider
            sx={{
              my: 2,
            }}
          />
          <Box
            display="flex"
            justifyContent="center"
          >
            <Tooltip
              arrow
              placement="top"
              title={t('View details')}
            >
              <IconButton
                sx={{
                  borderRadius: 50,
                }}
                size="large"
              >
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
                size="large"
                sx={{
                  borderRadius: 50,
                  mx: 1,
                }}
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
              <IconButton
                sx={{
                  borderRadius: 50,
                }}
                size="large"
              >
                <PersonSearchTwoToneIcon
                  sx={{
                    fontSize: theme.typography.pxToRem(18),
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <CardBorderTop
          sx={{
            p: { xs: 2, sm: 3 },
            textAlign: 'center',
            borderTopColor: theme.palette.error.main,
          }}
        >
          <Avatar
            sx={{
              width: 86,
              height: 86,
              mb: 2,
              mx: 'auto',
              border: theme.palette.common.white + ' solid 3px',
              boxShadow: `0 0 0 3px ${theme.palette.warning.main}`,
            }}
            src="/avatars/1.png"
          />
          <Typography variant="h4">Cinar Aguilar</Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
          >
            Junior Project Manager
          </Typography>
          <Divider
            sx={{
              my: 2,
            }}
          />
          <Box
            display="flex"
            justifyContent="center"
          >
            <Tooltip
              arrow
              placement="top"
              title={t('View details')}
            >
              <IconButtonWrapper
                sx={{
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
                  borderRadius: 50,
                }}
                size="large"
              >
                <VisibilityTwoToneIcon
                  sx={{
                    fontSize: theme.typography.pxToRem(18),
                  }}
                />
              </IconButtonWrapper>
            </Tooltip>
            <Tooltip
              arrow
              placement="top"
              title={t('Add to favourites')}
            >
              <IconButtonWrapper
                size="large"
                sx={{
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
                  borderRadius: 50,
                  mx: 1,
                }}
              >
                <FavoriteTwoToneIcon
                  sx={{
                    fontSize: theme.typography.pxToRem(18),
                  }}
                />
              </IconButtonWrapper>
            </Tooltip>
            <Tooltip
              arrow
              placement="top"
              title={t('View user profile')}
            >
              <IconButtonWrapper
                sx={{
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
                  borderRadius: 50,
                }}
                size="large"
              >
                <PersonSearchTwoToneIcon
                  sx={{
                    fontSize: theme.typography.pxToRem(18),
                  }}
                />
              </IconButtonWrapper>
            </Tooltip>
          </Box>
        </CardBorderTop>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%) !important',
            p: { xs: 2, sm: 3 },
            textAlign: 'center',
          }}
        >
          <Avatar
            sx={{
              width: 90,
              height: 90,
              mb: 2,
              mx: 'auto',
              boxShadow: `0 .113rem .5rem ${alpha(
                theme.palette.common.black,
                0.1
              )}, 0 .126rem .225rem ${alpha(theme.palette.common.black, 0.3)}`,
              border: theme.palette.common.white + ' solid 3px',
            }}
            src="/avatars/3.png"
          />
          <Typography
            sx={{
              color: theme.palette.common.white,
            }}
            variant="h4"
          >
            Ricardo Colog1e
          </Typography>
          <Typography
            sx={{
              color: alpha(theme.palette.common.white, 0.7),
            }}
            variant="subtitle2"
          >
            Senior UX Designer
          </Typography>
          <Divider
            sx={{
              borderColor: alpha(theme.palette.common.white, 0.1),
              my: 2,
            }}
          />
          <Box
            display="flex"
            justifyContent="center"
          >
            <Tooltip
              arrow
              placement="top"
              title={t('View details')}
            >
              <IconButton
                sx={{
                  color: theme.palette.common.white,
                  '&:hover': {
                    background:
                      theme.palette.mode === 'dark'
                        ? alpha(theme.palette.common.white, 0.04)
                        : alpha(theme.palette.common.white, 0.1),
                  },
                  borderRadius: 50,
                }}
                size="large"
              >
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
                size="large"
                sx={{
                  color: theme.palette.common.white,
                  '&:hover': {
                    background:
                      theme.palette.mode === 'dark'
                        ? alpha(theme.palette.common.white, 0.04)
                        : alpha(theme.palette.common.white, 0.1),
                  },
                  borderRadius: 50,
                  mx: 1,
                }}
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
              <IconButton
                sx={{
                  color: theme.palette.common.white,
                  '&:hover': {
                    background:
                      theme.palette.mode === 'dark'
                        ? alpha(theme.palette.common.white, 0.04)
                        : alpha(theme.palette.common.white, 0.1),
                  },
                  borderRadius: 50,
                }}
                size="large"
              >
                <PersonSearchTwoToneIcon
                  sx={{
                    fontSize: theme.typography.pxToRem(18),
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
