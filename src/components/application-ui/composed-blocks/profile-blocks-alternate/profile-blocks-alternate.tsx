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
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import GridNavigationAccent from 'src/components/application-ui/vertical-menus/grid-accent/grid-navigation-accent';

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  zIndex: 7,
}));

function Component() {
  const { t } = useTranslation();

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
            }}
          >
            <EmailTwoToneIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </CardActions>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        p={{
          xs: 2,
          sm: 3,
          md: 6,
        }}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Box textAlign="center">
          <Avatar
            sx={{
              mx: 'auto',
              mb: 1.5,
              width: 94,
              height: 94,
            }}
            src="/avatars/2.png"
          />
          <Chip
            color="warning"
            label={t('Idle')}
          />
          <Typography
            sx={{
              pt: 2,
            }}
            variant="h3"
          >
            Lacie-Mae Mckay
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
          >
            Senior Frontend Developer at <b>Google Inc.</b>
          </Typography>
          <Box
            mt={1.5}
            sx={{
              textAlign: 'center',
            }}
          >
            <Tooltip
              arrow
              placement="top"
              title="Facebook"
            >
              <IconButton
                color="primary"
                size="large"
              >
                <FacebookIcon />
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
                }}
                color="primary"
                size="large"
              >
                <TwitterIcon />
              </IconButton>
            </Tooltip>
            <Tooltip
              arrow
              placement="top"
              title="Instagram"
            >
              <IconButton
                color="primary"
                size="large"
              >
                <InstagramIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%) !important',
        }}
        p={{ xs: 2, sm: 3 }}
      >
        <GridNavigationAccent />
      </Box>
    </Card>
  );
}

export default Component;
