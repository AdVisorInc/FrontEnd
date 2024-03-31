import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  alpha,
  Avatar,
  Box,
  Card,
  CardMedia,
  IconButton,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  zIndex: 7,
}));

const Label = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  textTransform: 'uppercase',
  fontSize: theme.typography.pxToRem(12),
  fontWeight: 600,
  lineHeight: '23px',
  height: '22px',
  padding: theme.spacing(0, 1.2),
  borderRadius: '50px',
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        textAlign: 'center',
        transition: theme.transitions.create(['box-shadow', 'transform']),
        transform: 'translateY(0px)',

        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: `0 2rem 8rem 0 ${theme.palette.background.default}, 
                0 0.6rem 1.6rem ${alpha(theme.palette.common.black, 0.15)}, 
                0 0.2rem 0.2rem ${alpha(theme.palette.common.black, 0.1)}`,
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <CardMedia
          component="img"
          height="230"
          image="/placeholders/covers/2.jpg"
          alt="..."
        />
        <CardActions
          sx={{
            bottom: {
              xs: 'auto',
              md: theme.spacing(2),
            },
            top: {
              xs: theme.spacing(2),
              md: 'auto',
            },
          }}
        >
          <Label>{t('New Profile')}</Label>
        </CardActions>
      </Box>
      <Box p={{ xs: 2, md: 4 }}>
        <Avatar
          variant="rounded"
          sx={{
            width: theme.spacing(14),
            height: theme.spacing(14),
            mt: theme.spacing(-10),
            mx: 'auto',
            boxShadow: `0 0 0 4px ${theme.palette.common.white}`,
          }}
          src="/avatars/5.png"
        />
        <Typography
          sx={{
            py: 2,
          }}
          variant="h4"
        >
          Zara Wagstaff
        </Typography>
        <Typography
          sx={{
            px: { xs: 0, md: 3 },
          }}
          variant="subtitle1"
          textAlign="center"
          color="text.secondary"
        >
          {t(
            'Powerful components across multiple product niches for fast & perfect apps development processes'
          )}
          .
        </Typography>
        <Box mt={3}>
          <Tooltip
            arrow
            placement="top"
            title="Facebook"
          >
            <IconButton
              sx={{
                background: alpha(theme.palette.primary.main, 0.1),
                width: 54,
                height: 54,
                color: theme.palette.primary.main,
                '&:hover': {
                  background: alpha(theme.palette.primary.main, 0.2),
                  color: theme.palette.primary.main,
                },
              }}
              color="primary"
              size="large"
            >
              <FacebookIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip
            arrow
            placement="top"
            title="Twitter"
          >
            <IconButton
              sx={{
                mx: 1,
                background: alpha(theme.palette.primary.main, 0.1),
                width: 54,
                height: 54,
                color: theme.palette.primary.main,
                '&:hover': {
                  background: alpha(theme.palette.primary.main, 0.2),
                  color: theme.palette.primary.main,
                },
              }}
              color="primary"
              size="large"
            >
              <TwitterIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip
            arrow
            placement="top"
            title="Instagram"
          >
            <IconButton
              sx={{
                background: alpha(theme.palette.primary.main, 0.1),
                width: 54,
                height: 54,
                color: theme.palette.primary.main,
                '&:hover': {
                  background: alpha(theme.palette.primary.main, 0.2),
                  color: theme.palette.primary.main,
                },
              }}
              color="primary"
              size="large"
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Card>
  );
}

export default Component;
