import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Divider,
  Unstable_Grid2 as Grid,
  IconButton,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import GridNavigation from 'src/components/application-ui/vertical-menus/grid/grid-navigation';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

const BoxComposed = styled(Box)(() => ({
  position: 'relative',
}));

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  zIndex: 7,
}));

const BoxComposedContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 7,

  '.MuiTypography-root': {
    color: theme.palette.primary.contrastText,

    '& + .MuiTypography-root': {
      color: alpha(theme.palette.primary.contrastText, 0.7),
    },
  },
}));

const BoxComposedImage = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 5,
  filter: 'grayscale(80%)',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
}));

const BoxComposedBg = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 6,
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
}));

const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
  background: 'transparent',
  transition: theme.transitions.create(['all']),
  color: alpha(theme.palette.common.white, 0.7),
  borderRadius: '50px',

  '&:hover': {
    background: 'transparent',
    color: theme.palette.common.white,
  },
}));

const ButtonWrapper = styled(Button)(({ theme }) => ({
  background:
    theme.palette.mode === 'dark'
      ? alpha(theme.palette.common.white, 0.04)
      : alpha(theme.palette.common.white, 0.1),
  borderColor: alpha(theme.palette.common.white, 0.3),
  transition: theme.transitions.create(['all']),
  color: theme.palette.common.white,
  borderRadius: '50px',

  '&:hover': {
    background: alpha(theme.palette.common.white, 0.2),
    borderColor: alpha(theme.palette.common.white, 0.3),
    color: theme.palette.common.white,
  },
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <Grid container>
        <Grid
          xs={12}
          md={5}
        >
          <BoxComposed
            display="flex"
            alignItems="center"
            sx={{
              position: 'relative',
              minHeight: '100%',
              background: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%) !important',
            }}
          >
            <CardActions
              display="flex"
              alignItems="center"
            >
              <Chip
                label={t('New release')}
                sx={{
                  color: 'common.white',
                  background: alpha(theme.palette.common.white, 0.12),
                }}
              />
              <Tooltip
                arrow
                title={t('This is a helper placeholder')}
                placement="right"
              >
                <IconButtonWrapper
                  sx={{
                    ml: 0.5,
                  }}
                >
                  <HelpTwoToneIcon fontSize="small" />
                </IconButtonWrapper>
              </Tooltip>
            </CardActions>
            <BoxComposedBg
              sx={{
                opacity: 0.4,
                background: 'linear-gradient(to bottom, #00b09b, #96c93d)!important',
              }}
            />
            <BoxComposedImage
              sx={{
                opacity: 0.3,
                backgroundImage: 'url("/placeholders/covers/2.jpg")',
              }}
            />
            <BoxComposedContent
              display="flex"
              flexGrow={1}
              alignItems="center"
              flexDirection="column"
              sx={{
                textAlign: 'center',
              }}
              p={{
                xs: 3,
                md: 6,
              }}
            >
              <Typography
                lineHeight="1.4"
                sx={{
                  pt: { xs: 5, md: 0 },
                  pb: 1,
                }}
                variant="h2"
                fontWeight={500}
              >
                {t('Revolutionize Your Dashboard Experience')}
              </Typography>
              <Typography
                lineHeight="1.5"
                variant="subtitle1"
              >
                {t(
                  ' The perfect tool to enhance productivity and decision-making in diverse business environments.'
                )}
                .
              </Typography>
              <Box mt={2}>
                <ButtonWrapper
                  variant="outlined"
                  sx={{
                    mt: { xs: 2, md: 5 },
                  }}
                  endIcon={<ArrowForwardTwoToneIcon />}
                  size="large"
                  color="primary"
                >
                  {t('Continue reading')}
                </ButtonWrapper>
              </Box>
            </BoxComposedContent>
          </BoxComposed>
        </Grid>
        <Grid
          xs={12}
          md={7}
        >
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
          >
            <CardActions>
              <Tooltip
                arrow
                placement="top"
                title={t('Get in touch via email')}
              >
                <ButtonIcon color="primary">
                  <EmailTwoToneIcon fontSize="small" />
                </ButtonIcon>
              </Tooltip>
            </CardActions>
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
                color="success"
                label={t('Online')}
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
          <Divider />
          <Box
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
            }}
            p={{ xs: 2, sm: 3 }}
          >
            <GridNavigation />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Component;
