import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone';
import ExtensionTwoToneIcon from '@mui/icons-material/ExtensionTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import MicTwoToneIcon from '@mui/icons-material/MicTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import {
  Avatar,
  Box,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  IconButton,
  styled,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import AvatarGroupTooltips from 'src/components/application-ui/avatars/avatar-group-tooltips/avatar-group-tooltips';

const AvatarGradient1 = styled(Avatar)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important',
  color: theme.palette.primary.contrastText,
  width: theme.spacing(7),
  height: theme.spacing(7),
}));

const AvatarGradient2 = styled(Avatar)(({ theme }) => ({
  background: 'linear-gradient(to bottom, #00b09b, #96c93d)!important',
  color: theme.palette.primary.contrastText,
  width: theme.spacing(7),
  height: theme.spacing(7),
}));

const AvatarGradient3 = styled(Avatar)(({ theme }) => ({
  background: 'linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%) !important',
  color: theme.palette.primary.contrastText,
  width: theme.spacing(7),
  height: theme.spacing(7),
}));

function Component() {
  const { t } = useTranslation();

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
        <Card>
          <Box
            pt={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AvatarGradient1>
              <CameraAltTwoToneIcon />
            </AvatarGradient1>
            <Typography
              noWrap
              variant="h4"
              sx={{
                pt: 3,
              }}
            >
              {t('Recent Visitors')}
            </Typography>
            <Typography
              noWrap
              variant="subtitle2"
              color="text.secondary"
              sx={{ pb: 2 }}
            >
              {t("Today's analytics")}
            </Typography>
            <AvatarGroupTooltips />
            <Divider
              sx={{
                width: '60%',
                alignSelf: 'center',
                mt: 3,
              }}
              flexItem
            />
            <Box
              p={2}
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Tooltip title={t('View profile')}>
                <IconButton color="secondary">
                  <VisibilityTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title={t('Add to favourites')}>
                <IconButton
                  sx={{
                    mx: 1,
                  }}
                  color="secondary"
                >
                  <FavoriteTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title={t('Start voice call')}>
                <IconButton color="secondary">
                  <MicTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card>
          <Box
            pt={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AvatarGradient2>
              <ExtensionTwoToneIcon />
            </AvatarGradient2>
            <Typography
              noWrap
              variant="h4"
              sx={{
                pt: 3,
              }}
            >
              {t('New Customers')}
            </Typography>
            <Typography
              noWrap
              variant="subtitle2"
              color="text.secondary"
              sx={{ pb: 2 }}
            >
              {t('Latest statistics')}
            </Typography>
            <AvatarGroupTooltips />
            <Divider
              sx={{
                width: '60%',
                alignSelf: 'center',
                mt: 3,
              }}
              flexItem
            />
            <Box
              p={2}
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Tooltip title={t('View profile')}>
                <IconButton color="secondary">
                  <VisibilityTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title={t('Add to favourites')}>
                <IconButton
                  sx={{
                    mx: 1,
                  }}
                  color="secondary"
                >
                  <FavoriteTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title={t('Start voice call')}>
                <IconButton color="secondary">
                  <MicTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card>
          <Box
            pt={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AvatarGradient3>
              <ContactSupportTwoToneIcon />
            </AvatarGradient3>
            <Typography
              noWrap
              variant="h4"
              sx={{
                pt: 3,
              }}
            >
              {t("Today's Revenue")}
            </Typography>
            <Typography
              noWrap
              variant="subtitle2"
              color="text.secondary"
              sx={{ pb: 2 }}
            >
              {t('Successful orders')}
            </Typography>
            <AvatarGroupTooltips />
            <Divider
              sx={{
                width: '60%',
                alignSelf: 'center',
                mt: 3,
              }}
              flexItem
            />
            <Box
              p={2}
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Tooltip title={t('View profile')}>
                <IconButton color="secondary">
                  <VisibilityTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title={t('Add to favourites')}>
                <IconButton
                  sx={{
                    mx: 1,
                  }}
                  color="secondary"
                >
                  <FavoriteTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title={t('Start voice call')}>
                <IconButton color="secondary">
                  <MicTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
