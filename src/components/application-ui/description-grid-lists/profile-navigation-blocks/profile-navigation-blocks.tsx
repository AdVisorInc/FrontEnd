import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  alpha,
  Avatar,
  Box,
  Card,
  IconButton,
  Link,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import GridNavigation from 'src/components/application-ui/vertical-menus/grid/grid-navigation';

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1.5),
  top: theme.spacing(1.5),
  zIndex: 7,
}));

const LabelWrapper = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(13),
  fontWeight: 700,
  textTransform: 'uppercase',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(0.9, 1.5, 0.7),
  lineHeight: 1,
}));

const CardWrapper = styled(Box)(({ theme }) => ({
  background:
    theme.palette.mode === 'dark'
      ? alpha(theme.palette.neutral[700], 0.16)
      : alpha(theme.palette.neutral[300], 0.2),
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

function Component2() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <CardWrapper
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          pt: 3,
          px: 3,
          pb: 7,
        }}
      >
        <CardActions>
          <IconButton
            size="small"
            color="primary"
          >
            <MoreHorizTwoToneIcon />
          </IconButton>
        </CardActions>
        <Avatar
          sx={{
            width: theme.spacing(14),
            height: theme.spacing(14),
            mb: 1.5,
            border: `${theme.palette.common.white} solid 4px`,
            boxShadow: `0 2rem 8rem 0 ${theme.palette.background.default}, 
                            0 0.6rem 1.6rem ${alpha(theme.palette.common.black, 0.15)}, 
                            0 0.2rem 0.2rem ${alpha(theme.palette.common.black, 0.1)}`,
          }}
          src="/avatars/3.png"
        />
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
          variant="h4"
        >
          Shania O'Brien
        </Link>
        <Box
          mt={1}
          mb={1.5}
        >
          <LabelWrapper
            sx={{
              background: theme.palette.error.main,
              color: theme.palette.error.contrastText,
            }}
          >
            {t('Offline')}
          </LabelWrapper>
        </Box>
        <Typography
          variant="subtitle2"
          color="text.secondary"
        >
          {t(
            ' The perfect tool to enhance productivity and decision-making in diverse business environments.'
          )}
          .
        </Typography>
      </CardWrapper>
      <Box p={{ xs: 2, sm: 3 }}>
        <Box
          sx={{
            textAlign: 'center',
            mt: theme.spacing(-7),
            mb: 3,
          }}
        >
          <Tooltip
            arrow
            placement="top"
            title="Facebook"
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
                width: { xs: theme.spacing(6), md: theme.spacing(8) },
                height: { xs: theme.spacing(6), md: theme.spacing(8) },
              }}
              color="primary"
              size="large"
            >
              <FacebookIcon fontSize="small" />
            </IconButtonWrapper>
          </Tooltip>
          <Tooltip
            arrow
            placement="top"
            title="Twitter"
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
                mx: 1.5,
                width: { xs: theme.spacing(6), md: theme.spacing(8) },
                height: { xs: theme.spacing(6), md: theme.spacing(8) },
              }}
              color="primary"
              size="large"
            >
              <TwitterIcon fontSize="small" />
            </IconButtonWrapper>
          </Tooltip>
          <Tooltip
            arrow
            placement="top"
            title="Instagram"
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
                width: { xs: theme.spacing(6), md: theme.spacing(8) },
                height: { xs: theme.spacing(6), md: theme.spacing(8) },
              }}
              color="primary"
              size="large"
            >
              <InstagramIcon fontSize="small" />
            </IconButtonWrapper>
          </Tooltip>
        </Box>
        <Box p={{ xs: 0, md: 2 }}>
          <GridNavigation />
        </Box>
      </Box>
    </Card>
  );
}

export default Component2;
