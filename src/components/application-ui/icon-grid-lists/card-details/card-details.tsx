import CameraAltTwoToneIcon from '@mui/icons-material/CameraAltTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import InsertCommentTwoToneIcon from '@mui/icons-material/InsertCommentTwoTone';
import NotificationImportantTwoToneIcon from '@mui/icons-material/NotificationImportantTwoTone';
import PersonSearchTwoToneIcon from '@mui/icons-material/PersonSearchTwoTone';
import {
  Box,
  Card,
  Unstable_Grid2 as Grid,
  IconButton,
  styled,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1.5),
  top: theme.spacing(1.5),
  zIndex: 7,
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
        <Card
          sx={{
            position: 'relative',
            pl: 3,
            pr: 2.5,
            pt: 5,
            pb: 3,
          }}
        >
          <CardActions>
            <Tooltip
              arrow
              placement="top"
              title={t('Add to favourites')}
            >
              <IconButton
                sx={{
                  mr: 0.5,
                }}
                color="secondary"
              >
                <FavoriteTwoToneIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip
              arrow
              placement="top"
              title={t('User search')}
            >
              <IconButton color="secondary">
                <PersonSearchTwoToneIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </CardActions>
          <Box
            mb={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <AvatarState
              state="secondary"
              sx={{
                width: 50,
                height: 50,
              }}
            >
              <NotificationImportantTwoToneIcon fontSize="small" />
            </AvatarState>
            <Box
              display="flex"
              alignItems="center"
            >
              <AvatarState
                state="success"
                sx={{
                  mr: 0.5,
                  width: 24,
                  height: 24,
                }}
              >
                <CheckTwoToneIcon fontSize="inherit" />
              </AvatarState>
              <Typography
                variant="body1"
                color="success.main"
              >
                {t('Target achieved')}
              </Typography>
            </Box>
          </Box>
          <Typography variant="h4">{t('Recent Visitors')}</Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
          >
            {t("Today's analytics")}
          </Typography>
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
            pl: 3,
            pr: 2.5,
            pt: 5,
            pb: 3,
          }}
        >
          <CardActions>
            <Tooltip
              arrow
              placement="top"
              title={t('Add to favourites')}
            >
              <IconButton
                sx={{
                  mr: 0.5,
                }}
                color="secondary"
              >
                <FavoriteTwoToneIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip
              arrow
              placement="top"
              title={t('User search')}
            >
              <IconButton color="secondary">
                <PersonSearchTwoToneIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </CardActions>
          <Box
            mb={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <AvatarState
              state="info"
              sx={{
                width: 50,
                height: 50,
              }}
            >
              <CameraAltTwoToneIcon fontSize="small" />
            </AvatarState>
            <Box
              display="flex"
              alignItems="center"
            >
              <AvatarState
                state="success"
                sx={{
                  mr: 0.5,
                  width: 24,
                  height: 24,
                }}
              >
                <CheckTwoToneIcon fontSize="inherit" />
              </AvatarState>
              <Typography
                variant="body1"
                color="success.main"
              >
                {t('Target achieved')}
              </Typography>
            </Box>
          </Box>
          <Typography variant="h4">{t("Today's Revenue")}</Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
          >
            {t('Successful orders')}
          </Typography>
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
            pl: 3,
            pr: 2.5,
            pt: 5,
            pb: 3,
          }}
        >
          <CardActions>
            <Tooltip
              arrow
              placement="top"
              title={t('Add to favourites')}
            >
              <IconButton
                sx={{
                  mr: 0.5,
                }}
                color="secondary"
              >
                <FavoriteTwoToneIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip
              arrow
              placement="top"
              title={t('User search')}
            >
              <IconButton color="secondary">
                <PersonSearchTwoToneIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </CardActions>
          <Box
            mb={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <AvatarState
              state="warning"
              sx={{
                width: 50,
                height: 50,
              }}
            >
              <InsertCommentTwoToneIcon fontSize="small" />
            </AvatarState>
            <Box
              display="flex"
              alignItems="center"
            >
              <AvatarState
                state="error"
                sx={{
                  mr: 0.5,
                  width: 24,
                  height: 24,
                }}
              >
                <CloseRoundedIcon fontSize="inherit" />
              </AvatarState>
              <Typography
                variant="body1"
                color="error"
              >
                {t('Target failed')}
              </Typography>
            </Box>
          </Box>
          <Typography variant="h4">{t('New Customers')}</Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
          >
            {t('Latest statistics')}
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
