import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
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
  Unstable_Grid2 as Grid,
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
  fontSize: theme.typography.pxToRem(12),
  fontWeight: 600,
  lineHeight: '23px',
  height: '22px',
  padding: theme.spacing(0, 1.2),
  borderRadius: '50px',
}));

const BgComposed = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  transition: theme.transitions.create(['opacity']),
  background: darken(alpha(theme.palette.primary.main, 0.9), 0.8),
  zIndex: 6,
  opacity: 0,
  boxShadow: `inset 0 0 2.3rem 0.5rem ${darken(theme.palette.primary.main, 0.9)}`,
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
            textAlign: 'center',
            position: 'relative',
            transition: theme.transitions.create(['box-shadow', 'transform']),
            transform: 'translateY(0px)',

            '&:hover': {
              transform: `translateY(-${theme.spacing(0.5)})`,
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
            height="260"
            sx={{
              borderRadius: 'inherit',
              position: 'relative',
              zIndex: 5,
            }}
            image="/placeholders/covers/5.jpg"
            alt="..."
          />
          <CardActions
            sx={{
              right: 'auto',
              left: theme.spacing(2),
            }}
          >
            <Label
              sx={{
                background: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              {t('Development')}
            </Label>
          </CardActions>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            textAlign: 'center',
            position: 'relative',
            transition: theme.transitions.create(['box-shadow', 'transform']),
            transform: 'translateY(0px)',

            '&:hover': {
              transform: `translateY(-${theme.spacing(0.5)})`,
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
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            className="MuiBgComposed"
          >
            <Avatar
              sx={{
                width: 62,
                height: 62,
                mb: 1,
                border: theme.palette.common.white + ' solid 3px',
              }}
              src="/avatars/3.png"
            />
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Darrell Devlin
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                mb: 2,
                color: alpha(theme.palette.common.white, 0.7),
              }}
            >
              Senior UX Developer, Slack.com
            </Typography>
            <Button
              sx={{
                px: 2.5,
                borderRadius: 10,
                transform: 'scale(1)',
                transition: theme.transitions.create(['all']),
                boxShadow: theme.shadows[5],

                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: theme.shadows[5],
                },
                '&:active': {
                  boxShadow: 'none',
                },
              }}
              variant="contained"
              color="info"
              startIcon={<AccountBoxTwoToneIcon />}
            >
              {t('View profile')}
            </Button>
          </BgComposed>
          <CardMedia
            component="img"
            height="260"
            sx={{
              borderRadius: 'inherit',
              position: 'relative',
              zIndex: 5,
            }}
            image="/placeholders/covers/3.jpg"
            alt="..."
          />
          <CardActions
            sx={{
              bottom: 'auto',
              top: theme.spacing(2),
              right: 'auto',
              left: theme.spacing(2),
            }}
          >
            <Label
              sx={{
                background: theme.palette.info.main,
                color: theme.palette.info.contrastText,
              }}
            >
              {t('Travel')}
            </Label>
          </CardActions>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            textAlign: 'center',
            position: 'relative',
            transition: theme.transitions.create(['box-shadow', 'transform']),
            transform: 'translateY(0px)',

            '&:hover': {
              transform: `translateY(-${theme.spacing(0.5)})`,
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
                border: `${theme.palette.background.paper} solid 2px`,
                background: alpha(theme.palette.common.white, 0.12),
                color: theme.palette.common.white,
                transition: theme.transitions.create(['all']),

                '&:hover': {
                  background: theme.palette.common.white,
                  color: theme.palette.common.black,
                },
              }}
            >
              <FacebookIcon fontSize="small" />
            </IconButtonWrapper>
            <IconButtonWrapper
              sx={{
                mx: 0.5,
                border: `${theme.palette.background.paper} solid 2px`,
                background: alpha(theme.palette.common.white, 0.12),
                color: theme.palette.common.white,
                transition: theme.transitions.create(['all']),

                '&:hover': {
                  background: theme.palette.common.white,
                  color: theme.palette.common.black,
                },
              }}
            >
              <TwitterIcon fontSize="small" />
            </IconButtonWrapper>
          </BgComposed>
          <CardMedia
            component="img"
            height="260"
            sx={{
              borderRadius: 'inherit',
              position: 'relative',
              zIndex: 5,
            }}
            image="/placeholders/covers/4.jpg"
            alt="..."
          />
          <CardActions
            sx={{
              right: 'auto',
              left: theme.spacing(2),
            }}
          >
            <Label
              sx={{
                background: theme.palette.success.main,
                color: theme.palette.success.contrastText,
              }}
            >
              {t('Marketing')}
            </Label>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
