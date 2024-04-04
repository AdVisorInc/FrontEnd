import {
  alpha,
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Unstable_Grid2 as Grid,
  Link,
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

const CardActionAreaWrapper = styled(CardActionArea)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',

  '.MuiTouchRipple-root': {
    opacity: 0.3,
  },

  '&:hover': {
    '.MuiCardActionArea-focusHighlight': {
      opacity: 0.05,
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
        <Box>
          <Card
            sx={{
              textAlign: 'center',
              transition: theme.transitions.create(['box-shadow', 'transform']),
              transform: 'translateY(0px)',

              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: `0 2rem 8rem 0 ${alpha(theme.palette.common.black, 0.1)}, 
                                0 0.6rem 1.6rem ${alpha(theme.palette.common.black, 0.2)}, 
                                0 0.2rem 0.2rem ${alpha(theme.palette.common.black, 0.15)}`,
              },
            }}
          >
            <CardActionAreaWrapper>
              <CardMedia
                component="img"
                height="230"
                image="/placeholders/covers/1.jpg"
                alt="..."
              />
              <CardActions>
                <LabelWrapper>{t('Updated')}</LabelWrapper>
              </CardActions>
            </CardActionAreaWrapper>
          </Card>
          <Box
            sx={{
              px: { md: 2, lg: 1.5, xl: 3 },
              pt: 3,
              textAlign: 'center',
            }}
          >
            <Link
              lineHeight={1.5}
              href=""
              onClick={(e) => e.preventDefault()}
              sx={{
                transition: theme.transitions.create(['color']),
                color:
                  theme.palette.mode === 'dark'
                    ? theme.palette.common.white
                    : theme.palette.common.black,

                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
              color="text.primary"
              variant="h4"
              underline="none"
            >
              {t('Revolutionize Your Dashboard Experience')}
            </Link>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{
                py: 2,
              }}
            >
              {t(
                ' The perfect tool to enhance productivity and decision-making in diverse business environments.'
              )}
              .
            </Typography>
            <Button
              variant="outlined"
              size="small"
              sx={{
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px',
                },
              }}
            >
              {t('View details')}
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Box>
          <Card
            sx={{
              textAlign: 'center',
              transition: theme.transitions.create(['box-shadow', 'transform']),
              transform: 'translateY(0px)',

              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: `0 2rem 8rem 0 ${alpha(theme.palette.common.black, 0.1)}, 
                                0 0.6rem 1.6rem ${alpha(theme.palette.common.black, 0.2)}, 
                                0 0.2rem 0.2rem ${alpha(theme.palette.common.black, 0.15)}`,
              },
            }}
          >
            <CardActionAreaWrapper>
              <CardMedia
                component="img"
                height="230"
                image="/placeholders/covers/3.jpg"
                alt="..."
              />
              <CardActions
                sx={{
                  bottom: 'auto',
                  top: theme.spacing(2),
                }}
              >
                <LabelWrapper
                  sx={{
                    mr: 1,
                    background: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                  }}
                >
                  {t('Hot')}
                </LabelWrapper>
                <LabelWrapper
                  sx={{
                    background: theme.palette.error.main,
                    color: theme.palette.error.contrastText,
                  }}
                >
                  {t('New')}
                </LabelWrapper>
              </CardActions>
            </CardActionAreaWrapper>
          </Card>
          <Box
            sx={{
              px: { md: 2, lg: 1.5, xl: 3 },
              pt: 3,
              textAlign: 'center',
            }}
          >
            <Link
              lineHeight={1.5}
              href=""
              onClick={(e) => e.preventDefault()}
              sx={{
                transition: theme.transitions.create(['color']),
                color:
                  theme.palette.mode === 'dark'
                    ? theme.palette.common.white
                    : theme.palette.common.black,

                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
              color="text.primary"
              variant="h4"
              underline="none"
            >
              {t('Revolutionize Your Dashboard Experience')}
            </Link>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{
                py: 2,
              }}
            >
              {t(
                ' The perfect tool to enhance productivity and decision-making in diverse business environments.'
              )}
              .
            </Typography>
            <Button
              variant="outlined"
              size="small"
              sx={{
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px',
                },
              }}
            >
              {t('View details')}
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Box>
          <Card
            sx={{
              textAlign: 'center',
              transition: theme.transitions.create(['box-shadow', 'transform']),
              transform: 'translateY(0px)',

              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: `0 2rem 8rem 0 ${alpha(theme.palette.common.black, 0.1)}, 
                                0 0.6rem 1.6rem ${alpha(theme.palette.common.black, 0.2)}, 
                                0 0.2rem 0.2rem ${alpha(theme.palette.common.black, 0.15)}`,
              },
            }}
          >
            <CardActionAreaWrapper>
              <CardMedia
                component="img"
                height="230"
                image="/placeholders/covers/5.jpg"
                alt="..."
              />
              <CardActions
                sx={{
                  right: 'auto',
                  left: theme.spacing(2),
                }}
              >
                <LabelWrapper
                  sx={{
                    background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%) !important',
                    color: theme.palette.common.white,
                  }}
                >
                  {t('New')}
                </LabelWrapper>
              </CardActions>
            </CardActionAreaWrapper>
          </Card>
          <Box
            sx={{
              px: { md: 2, lg: 1.5, xl: 3 },
              pt: 3,
              textAlign: 'center',
            }}
          >
            <Link
              lineHeight={1.5}
              href=""
              onClick={(e) => e.preventDefault()}
              sx={{
                transition: theme.transitions.create(['color']),
                color:
                  theme.palette.mode === 'dark'
                    ? theme.palette.common.white
                    : theme.palette.common.black,

                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
              color="text.primary"
              variant="h4"
              underline="none"
            >
              {t('Revolutionize Your Dashboard Experience')}
            </Link>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{
                py: 2,
              }}
            >
              {t(
                ' The perfect tool to enhance productivity and decision-making in diverse business environments.'
              )}
              .
            </Typography>
            <Button
              variant="outlined"
              size="small"
              sx={{
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px',
                },
              }}
            >
              {t('View details')}
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Component;
