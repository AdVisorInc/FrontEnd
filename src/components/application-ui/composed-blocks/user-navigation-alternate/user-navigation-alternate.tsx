import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  alpha,
  Avatar,
  Box,
  Card,
  Chip,
  IconButton,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import VerticalMenuPillsSecondary from 'src/components/application-ui/vertical-menus/pills/menu-pills-secondary';

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  zIndex: 7,
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card
      sx={{
        position: 'relative',
        textAlign: 'center',
      }}
    >
      <CardActions>
        <Tooltip
          arrow
          placement="top"
          title={t('Get in touch via email')}
        >
          <IconButton
            color="primary"
            sx={{
              alignSelf: 'center',
              backgroundColor: alpha(theme.palette.error.main, 0.1),
              color: theme.palette.error.main,

              '&:hover': {
                backgroundColor: alpha(theme.palette.error.main, 0.2),
                color: theme.palette.error.main,
              },
            }}
          >
            <EmailTwoToneIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </CardActions>
      <Box
        pt={6}
        pb={{ xs: 2, sm: 3 }}
        px={{ xs: 2, sm: 3 }}
      >
        <Avatar
          variant="rounded"
          sx={{
            mx: 'auto',
            width: 104,
            height: 104,
            boxShadow: `0 .213rem .5rem ${alpha(
              theme.palette.common.black,
              0.4
            )}, 0 .226rem .225rem ${alpha(theme.palette.common.black, 0.1)}`,
          }}
          src="/avatars/3.png"
        />
        <Typography
          sx={{
            pb: 1,
            pt: 2,
          }}
          variant="h4"
        >
          Boyd Hardin
        </Typography>
        <Chip
          label={<b>{t('Offline')}</b>}
          color="error"
        />

        <Typography
          sx={{
            px: { xs: 2, sm: 3 },
            pt: { xs: 2, sm: 3 },
          }}
          variant="subtitle1"
          textAlign="center"
          color="text.secondary"
        >
          {t(
            ' The perfect tool to enhance productivity and decision-making in diverse business environments.'
          )}
          .
        </Typography>
        <Box
          mt={{ xs: 2, sm: 3 }}
          mx={{ xs: 2, sm: 3 }}
        >
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
      <Box
        textAlign="left"
        px={{ xs: 2, sm: 3 }}
        pb={{ xs: 2, sm: 3 }}
      >
        <VerticalMenuPillsSecondary />
      </Box>
    </Card>
  );
}

export default Component;
