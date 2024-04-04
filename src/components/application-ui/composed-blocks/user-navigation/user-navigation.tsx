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
import { formatDistance, subMinutes } from 'date-fns';
import { useTranslation } from 'react-i18next';
import VerticalMenuRoundedPrimary from 'src/components/application-ui/vertical-menus/rounded/menu-rounded-primary';

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
              backgroundColor: alpha(theme.palette.warning.main, 0.1),
              color: theme.palette.warning.main,

              '&:hover': {
                backgroundColor: alpha(theme.palette.warning.main, 0.2),
                color: theme.palette.warning.main,
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
          sx={{
            mx: 'auto',
            width: 123,
            height: 123,
          }}
          src="/avatars/4.png"
        />
        <Typography
          sx={{
            pb: 0.5,
            pt: 2,
          }}
          variant="h3"
        >
          Leopold Magana
        </Typography>
        <Chip
          label={
            <>
              {t('Idle for')}{' '}
              {formatDistance(subMinutes(new Date(), 12), new Date(), {
                addSuffix: true,
              })}
            </>
          }
          color="warning"
        />

        <Card
          elevation={0}
          sx={{
            background: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%) !important',
            textAlign: 'center',
            p: { xs: 2, sm: 3 },
            mt: { xs: 2, sm: 3 },
          }}
        >
          <Tooltip
            arrow
            placement="top"
            title="Facebook"
          >
            <IconButton
              sx={{
                borderRadius: 50,
                background:
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.common.white, 0.04)
                    : alpha(theme.palette.common.white, 0.1),
                color: theme.palette.common.white,
                '&:hover': {
                  background: alpha(theme.palette.common.white, 0.3),
                  color: theme.palette.common.white,
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
                borderRadius: 50,
                mx: 1,
                background:
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.common.white, 0.04)
                    : alpha(theme.palette.common.white, 0.1),
                color: theme.palette.common.white,
                '&:hover': {
                  background: alpha(theme.palette.common.white, 0.3),
                  color: theme.palette.common.white,
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
                borderRadius: 50,
                background:
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.common.white, 0.04)
                    : alpha(theme.palette.common.white, 0.1),
                color: theme.palette.common.white,
                '&:hover': {
                  background: alpha(theme.palette.common.white, 0.3),
                  color: theme.palette.common.white,
                },
              }}
              color="primary"
              size="large"
            >
              <InstagramIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Card>
      </Box>
      <Box
        textAlign="left"
        px={{ xs: 2, sm: 3 }}
        pb={{ xs: 2, sm: 3 }}
      >
        <VerticalMenuRoundedPrimary />
      </Box>
    </Card>
  );
}

export default Component;
