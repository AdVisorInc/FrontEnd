import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  IconButton,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import AvatarGroupTooltips from 'src/components/application-ui/avatars/avatar-group-tooltips/avatar-group-tooltips';

const IconButtonFav = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  borderRadius: '55px',
  padding: theme.spacing(1),
  transition: theme.transitions.create(['all']),

  '&:hover': {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  background: theme.palette.common.white,
  width: theme.spacing(9),
  height: theme.spacing(9),
  padding: theme.spacing(1.8),
  boxShadow: `0 0.180rem .3rem ${alpha(theme.palette.common.black, 0.3)}, 0 .326rem 3rem ${alpha(
    theme.palette.common.black,
    0.2
  )}`,
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
            position: 'relative',
          }}
        >
          <IconButtonFav
            size="small"
            color="primary"
          >
            <FavoriteTwoToneIcon fontSize="small" />
          </IconButtonFav>
          <Box
            pt={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AvatarWrapper
              variant="rounded"
              alt="Spotify"
              src="/placeholders/logo/spotify.svg"
            />
            <Typography
              noWrap
              variant="h4"
              sx={{
                pt: 3,
              }}
            >
              {t('Development')}
            </Typography>
            <Typography
              noWrap
              variant="subtitle1"
              sx={{ pb: 2 }}
              color="text.secondary"
            >
              {t('Build React Interface')}
            </Typography>
            <AvatarGroupTooltips />
            <Divider
              sx={{
                mt: 3,
              }}
              flexItem
            />
            <Box
              p={2}
              sx={{
                width: '100%',
              }}
            >
              <Button
                fullWidth
                startIcon={<AccountCircleTwoToneIcon />}
                variant="outlined"
                color="secondary"
              >
                {t('Company profile')}
              </Button>
            </Box>
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
            position: 'relative',
          }}
        >
          <IconButtonFav
            size="small"
            color="primary"
          >
            <FavoriteTwoToneIcon fontSize="small" />
          </IconButtonFav>
          <Box
            pt={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AvatarWrapper
              variant="rounded"
              alt="Adobe"
              src="/placeholders/logo/adobe.jpg"
            />
            <Typography
              noWrap
              variant="h4"
              sx={{
                pt: 3,
              }}
            >
              {t('Bugfixes')}
            </Typography>
            <Typography
              noWrap
              variant="subtitle1"
              sx={{ pb: 2 }}
              color="text.secondary"
            >
              {t('Resolve Github Issues')}
            </Typography>
            <AvatarGroupTooltips />
            <Divider
              sx={{
                mt: 3,
              }}
              flexItem
            />
            <Box
              p={2}
              sx={{
                width: '100%',
              }}
            >
              <Button
                fullWidth
                startIcon={<AccountCircleTwoToneIcon />}
                variant="outlined"
                color="secondary"
              >
                {t('Company profile')}
              </Button>
            </Box>
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
            position: 'relative',
          }}
        >
          <IconButtonFav
            size="small"
            color="primary"
          >
            <FavoriteTwoToneIcon fontSize="small" />
          </IconButtonFav>
          <Box
            pt={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AvatarWrapper
              variant="rounded"
              alt="Slack"
              src="/placeholders/logo/slack.svg"
            />
            <Typography
              noWrap
              variant="h4"
              sx={{
                pt: 3,
                fontSize: theme.typography.pxToRem(17),
              }}
            >
              {t('Marketing')}
            </Typography>
            <Typography
              noWrap
              sx={{ pb: 2 }}
              variant="subtitle1"
              color="text.secondary"
            >
              {t('Create UI Designs')}
            </Typography>
            <AvatarGroupTooltips />
            <Divider
              sx={{
                mt: 3,
              }}
              flexItem
            />
            <Box
              p={2}
              sx={{
                width: '100%',
              }}
            >
              <Button
                fullWidth
                startIcon={<AccountCircleTwoToneIcon />}
                variant="outlined"
                color="secondary"
              >
                {t('Company profile')}
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
