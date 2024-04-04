import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Divider,
  Unstable_Grid2 as Grid,
  Link,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { format, subDays } from 'date-fns';
import { useTranslation } from 'react-i18next';

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  zIndex: 7,
  display: 'flex',
}));

const LabelWrapper = styled(Box)(({ theme }) => ({
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

const CardActionAreaWrapper = styled(CardActionArea)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',

  '.MuiTouchRipple-root': {
    opacity: 0.3,
  },

  '.MuiCardActionArea-focusHighlight': {
    background: theme.palette.common.white,
  },

  '&:hover': {
    '.MuiCardActionArea-focusHighlight': {
      opacity: 0.1,
    },
  },
}));

const CardContentWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  width: '100%',
  height: '100%',
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'flex-end',
  background:
    'linear-gradient(180deg, rgba(7, 9, 25, 0.1) 0%, rgba(7, 9, 25, 0.1) 40%, rgba(7, 9, 25, 0.85) 100%)',
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid xs={12}>
        <Card>
          <CardActionAreaWrapper>
            <CardMedia
              component="img"
              height="260"
              image="/placeholders/covers/2.jpg"
              alt="..."
            />
            <CardActions>
              <LabelWrapper
                sx={{
                  background: 'linear-gradient(135deg, #FCCF31 0%, #F55555 100%) !important',
                  color: theme.palette.common.white,
                }}
              >
                {t('New')}
              </LabelWrapper>
            </CardActions>
            <CardContentWrapper>
              <Typography
                lineHeight={1.5}
                sx={{
                  color: theme.palette.common.white,
                }}
                variant="h3"
              >
                {t('Revolutionize Your Dashboard Experience')}
              </Typography>
            </CardContentWrapper>
          </CardActionAreaWrapper>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 2, md: 3 },
            }}
          >
            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="space-between"
              flexDirection={{ xs: 'column', sm: 'row' }}
            >
              <Box
                display="flex"
                alignItems="center"
              >
                <Avatar
                  sx={{
                    width: 44,
                    height: 44,
                  }}
                  src="/avatars/3.png"
                />

                <Box ml={1.5}>
                  <Link
                    href=""
                    onClick={(e) => e.preventDefault()}
                    variant="h5"
                    gutterBottom
                  >
                    Shanelle Wynn
                  </Link>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                  >
                    UI Engineer, Apple Inc.
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="subtitle2"
                sx={{
                  pt: { xs: 2, sm: 0 },
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <AccessTimeTwoToneIcon
                  fontSize="small"
                  sx={{
                    opacity: 0.7,
                    mr: 0.5,
                  }}
                />
                {format(subDays(new Date(), 5), 'MMMM dd yyyy')}
              </Typography>
            </Box>
            <Typography
              variant="h5"
              color="text.secondary"
              fontWeight={400}
              sx={{
                py: 2,
              }}
            >
              {t(
                ' The perfect tool to enhance productivity and decision-making in diverse business environments.'
              )}
              .
            </Typography>
            <Divider
              sx={{
                mb: 2,
              }}
            />
            <Button
              variant="contained"
              color="info"
              endIcon={<ArrowForwardTwoToneIcon />}
              sx={{
                borderRadius: 10,
                px: 3,
              }}
            >
              {t('Learn more')}
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid xs={12}>
        <Card
          sx={{
            p: { xs: 2, md: 3 },
          }}
        >
          <CardActionAreaWrapper
            sx={{
              overflow: 'hidden',
              borderRadius: theme.shape.borderRadius + 'px',
              mb: 3,
            }}
          >
            <CardMedia
              component="img"
              height="199"
              image="/placeholders/covers/1.jpg"
              alt="..."
            />
            <CardActions>
              <LabelWrapper
                sx={{
                  background: theme.palette.error.main,
                  color: theme.palette.error.contrastText,
                }}
              >
                {t('Updated')}
              </LabelWrapper>
            </CardActions>
            <CardContentWrapper justifyContent="center">
              <Typography
                lineHeight={1.5}
                textAlign="center"
                sx={{
                  color: theme.palette.common.white,
                }}
                variant="h3"
              >
                {t('Revolutionize Your Dashboard Experience')}
              </Typography>
            </CardContentWrapper>
          </CardActionAreaWrapper>
          <Box
            sx={{
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
            >
              <Avatar
                sx={{
                  width: 74,
                  height: 74,
                  mb: 1,
                }}
                src="/avatars/5.png"
              />
              <Link
                href=""
                onClick={(e) => e.preventDefault()}
                variant="h4"
              >
                Johanna Becks
              </Link>
              <Typography
                variant="subtitle1"
                color="text.secondary"
              >
                Lead UX Designer, Spotify
              </Typography>
            </Box>
            <Typography
              textAlign="center"
              lineHeight="1.5"
              variant="h5"
              fontWeight={400}
              sx={{
                py: 3,
              }}
            >
              {t(
                ' The perfect tool to enhance productivity and decision-making in diverse business environments.'
              )}
              .
            </Typography>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardTwoToneIcon />}
              sx={{
                borderRadius: 10,
                px: 3,
              }}
            >
              {t('Learn more')}
            </Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
