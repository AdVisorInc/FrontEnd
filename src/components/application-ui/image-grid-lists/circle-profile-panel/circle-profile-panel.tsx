import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  darken,
  IconButton,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  bottom: theme.spacing(2),
  zIndex: 7,
}));

const Label = styled(Box)(({ theme }) => ({
  background: theme.palette.success.main,
  color: theme.palette.success.contrastText,
  textTransform: 'uppercase',
  fontSize: theme.typography.pxToRem(13),
  fontWeight: 600,
  lineHeight: '26px',
  height: '26px',
  padding: theme.spacing(0, 1.2),
  borderRadius: '50px',
}));

const BgComposed = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  borderRadius: 'inherit',
  transition: theme.transitions.create(['opacity']),
  background: darken(alpha(theme.palette.primary.main, 0.9), 0.8),
  zIndex: 6,
  opacity: 0,
  boxShadow: `inset 0 0 ${theme.spacing(2.3)} ${theme.spacing(0.5)} ${darken(
    theme.palette.primary.main,
    0.9
  )}`,
}));

const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
  transition: theme.transitions.create(['color', 'transform']),
  borderRadius: '100px',

  '.MuiSvgIcon-root': {
    transform: 'scale(1)',
    transition: theme.transitions.create(['transform']),
  },

  '&:hover': {
    '.MuiSvgIcon-root': {
      transform: 'scale(1.3)',
    },
  },
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        pt: 2,
        overflow: 'visible',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          mx: 2,
          position: 'relative',
          transition: theme.transitions.create(['box-shadow', 'transform', 'border-radius']),
          transform: 'translateY(0px)',
          borderRadius: 'inherit',

          '&:hover': {
            transform: `translateY(-${theme.spacing(4)})`,
            boxShadow: `0 2rem 8rem 0 ${theme.palette.background.default}, 
                0 0.6rem 1.6rem ${alpha(theme.palette.common.black, 0.15)}, 
                0 0.2rem 0.2rem ${alpha(theme.palette.common.black, 0.1)}`,

            '& .MuiBgComposed': {
              opacity: 1,
            },
          },
        }}
      >
        <BgComposed
          display="flex"
          alignItems="center"
          justifyContent="center"
          className="MuiBgComposed"
        >
          <IconButtonWrapper
            sx={{
              mx: 0.5,
              background: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,

              '&:hover': {
                background: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              },
            }}
          >
            <FacebookIcon fontSize="small" />
          </IconButtonWrapper>
          <IconButtonWrapper
            sx={{
              mx: 0.5,
              background: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,

              '&:hover': {
                background: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              },
            }}
          >
            <TwitterIcon fontSize="small" />
          </IconButtonWrapper>
        </BgComposed>
        <CardMedia
          component="img"
          height="235"
          sx={{
            borderRadius: 'inherit',
            position: 'relative',
            zIndex: 5,
          }}
          image="/placeholders/covers/1.jpg"
          alt="..."
        />
        <CardActions
          sx={{
            bottom: 'auto',
            top: theme.spacing(2),
          }}
        >
          <Label
            sx={{
              background: theme.palette.error.main,
              color: theme.palette.error.contrastText,
            }}
          >
            {t('Updated')}
          </Label>
        </CardActions>
      </Box>
      <Box p={{ xs: 2, md: 4 }}>
        <Avatar
          sx={{
            width: theme.spacing(14),
            height: theme.spacing(14),
            mt: theme.spacing(-10),
            mx: 'auto',
            boxShadow: `0 0 0 4px ${theme.palette.common.white}`,
          }}
          src="/avatars/3.png"
        />
        <Typography
          sx={{
            pt: 2,
            pb: 1,
          }}
          variant="h4"
        >
          Emma Taylor
        </Typography>
        <Typography
          sx={{
            px: { xs: 0, sm: 3 },
          }}
          variant="subtitle2"
          textAlign="center"
          color="text.secondary"
        >
          {t(
            ' The perfect tool to enhance productivity and decision-making in diverse business environments.'
          )}
          .
        </Typography>
        <Box mt={3}>
          <Button
            size="large"
            variant="contained"
          >
            {t('View complete profile')}
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default Component;
