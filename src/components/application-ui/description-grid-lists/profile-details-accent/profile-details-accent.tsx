import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import PersonSearchTwoToneIcon from '@mui/icons-material/PersonSearchTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Card,
  IconButton,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const LabelWrapper = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(13),
  fontWeight: 700,
  textTransform: 'uppercase',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(0.9, 1.5, 0.7),
  lineHeight: 1,
}));

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1.5),
  top: theme.spacing(1.5),
  zIndex: 7,
}));

function Component3() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      variant="outlined"
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%) !important',
        p: { xs: 2, sm: 3 },
        textAlign: 'center',
      }}
    >
      <CardActions>
        <IconButton
          sx={{
            background:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.common.white, 0.04)
                : alpha(theme.palette.common.white, 0.1),
            color: alpha(theme.palette.common.white, 0.7),
            transition: theme.transitions.create(['all']),

            '&:hover': {
              background: alpha(theme.palette.common.white, 0.2),
              color: theme.palette.common.white,
            },
          }}
          size="small"
          color="primary"
        >
          <MoreHorizTwoToneIcon />
        </IconButton>
      </CardActions>
      <Avatar
        sx={{
          width: 100,
          height: 100,
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
        Ricardo Cologne
      </Typography>
      <Typography
        sx={{
          color: alpha(theme.palette.common.white, 0.7),
        }}
        variant="subtitle2"
      >
        Senior UX Designer
      </Typography>
      <Box mt={2}>
        <LabelWrapper
          sx={{
            background: theme.palette.common.white,
            color: theme.palette.common.black,
          }}
        >
          {t('Pending')}
        </LabelWrapper>
      </Box>
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: theme.typography.pxToRem(16),
          py: 3,
          color: alpha(theme.palette.common.white, 0.7),
        }}
      >
        {t(
          ' The perfect tool to enhance productivity and decision-making in diverse business environments.'
        )}
        .
      </Typography>
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
              width: 60,
              height: 60,
              color: alpha(theme.palette.common.white, 0.7),
              background:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.common.white, 0.04)
                  : alpha(theme.palette.common.white, 0.1),
              transition: theme.transitions.create(['all']),
              '&:hover': {
                color: theme.palette.common.white,
                background: alpha(theme.palette.common.white, 0.2),
              },
              borderRadius: 50,
            }}
            size="large"
          >
            <VisibilityTwoToneIcon
              sx={{
                fontSize: theme.typography.pxToRem(20),
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
              width: 60,
              height: 60,
              color: alpha(theme.palette.common.white, 0.7),
              background:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.common.white, 0.04)
                  : alpha(theme.palette.common.white, 0.1),
              transition: theme.transitions.create(['all']),
              '&:hover': {
                color: theme.palette.common.white,
                background: alpha(theme.palette.common.white, 0.2),
              },
              borderRadius: 50,
              mx: 0.5,
            }}
          >
            <FavoriteTwoToneIcon
              sx={{
                fontSize: theme.typography.pxToRem(20),
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
              width: 60,
              height: 60,
              color: alpha(theme.palette.common.white, 0.7),
              background:
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.common.white, 0.04)
                  : alpha(theme.palette.common.white, 0.1),
              transition: theme.transitions.create(['all']),
              '&:hover': {
                color: theme.palette.common.white,
                background: alpha(theme.palette.common.white, 0.2),
              },
              borderRadius: 50,
            }}
            size="large"
          >
            <PersonSearchTwoToneIcon
              sx={{
                fontSize: theme.typography.pxToRem(20),
              }}
            />
          </IconButton>
        </Tooltip>
      </Box>
    </Card>
  );
}

export default Component3;
