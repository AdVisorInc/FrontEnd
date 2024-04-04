import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  Unstable_Grid2 as Grid,
  Link,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { format, formatDistance, subDays, subMinutes } from 'date-fns';
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
  fontSize: theme.typography.pxToRem(11),
  fontWeight: 700,
  lineHeight: '23px',
  height: '22px',
  padding: theme.spacing(0, 1.2),
  borderRadius: '50px',
}));

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  boxShadow: `0px 1px 4px ${alpha(theme.palette.primary.main, 0.25)}, 0px 3px 12px 2px ${alpha(
    theme.palette.primary.main,
    0.35
  )}`,
  top: theme.spacing(-5),
  position: 'absolute',
  border: `${theme.palette.background.paper} solid 3px`,
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
        md={6}
      >
        <Card
          sx={{
            transition: theme.transitions.create(['box-shadow', 'transform', 'border-radius']),
            transform: 'translateY(0px)',

            '&:hover': {
              transform: `translateY(-${theme.spacing(1)})`,
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
              height="250"
              image="/placeholders/covers/2.jpg"
              alt="..."
            />
            <CardActions>
              <LabelWrapper
                sx={{
                  background: 'linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%) !important',
                  color: theme.palette.common.white,
                }}
              >
                {t('Updated')}
              </LabelWrapper>
            </CardActions>
          </Box>
          <Box
            sx={{
              position: 'relative',
              px: 3,
              pt: 8,
              pb: 3,
            }}
          >
            <AvatarWrapper src="/avatars/1.png" />
            <Link
              lineHeight={1.5}
              href=""
              onClick={(e) => e.preventDefault()}
              sx={{
                transition: theme.transitions.create(['color']),
                color:
                  theme.palette.mode === 'dark'
                    ? theme.palette.neutral[300]
                    : theme.palette.neutral[800],

                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
              variant="h4"
            >
              {t('Revolutionize Your Dashboard Experience')}
            </Link>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{
                display: 'flex',
                alignItems: 'center',
                pt: 1,
              }}
            >
              <AccessTimeTwoToneIcon
                fontSize="small"
                sx={{
                  opacity: 0.7,
                  mr: 0.5,
                }}
              />
              {format(subDays(new Date(), 1), 'MMMM dd yyyy')}
            </Typography>
            <Typography
              variant="subtitle1"
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
              size="small"
              variant="outlined"
              endIcon={<ArrowForwardTwoToneIcon />}
              sx={{
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px',
                },
              }}
            >
              {t('Read more')}
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
      >
        <Card
          sx={{
            transition: theme.transitions.create(['box-shadow', 'transform', 'border-radius']),
            transform: 'translateY(0px)',

            '&:hover': {
              transform: `translateY(-${theme.spacing(1)})`,
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
              height="250"
              image="/placeholders/covers/4.jpg"
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
              <LabelWrapper
                sx={{
                  background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%) !important',
                  color: theme.palette.common.white,
                }}
              >
                {t('New & Hot')}
              </LabelWrapper>
            </CardActions>
          </Box>
          <Box
            sx={{
              position: 'relative',
              px: 3,
              pt: 8,
              pb: 3,
            }}
          >
            <AvatarWrapper
              variant="rounded"
              sx={{
                boxShadow: 'none',
                borderWidth: 5,
              }}
              src="/avatars/2.png"
            />
            <Link
              lineHeight={1.5}
              href=""
              onClick={(e) => e.preventDefault()}
              sx={{
                transition: theme.transitions.create(['color']),
                color:
                  theme.palette.mode === 'dark'
                    ? theme.palette.neutral[300]
                    : theme.palette.neutral[800],

                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
              variant="h4"
            >
              {t('Revolutionize Your Dashboard Experience')}
            </Link>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{
                display: 'flex',
                alignItems: 'center',
                pt: 1,
              }}
            >
              <AccessTimeTwoToneIcon
                fontSize="small"
                sx={{
                  opacity: 0.7,
                  mr: 0.5,
                }}
              />
              {formatDistance(subMinutes(new Date(), 12), new Date(), {
                addSuffix: true,
              })}
            </Typography>
            <Typography
              variant="subtitle1"
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
              endIcon={<ArrowForwardTwoToneIcon />}
              sx={{
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px',
                },
              }}
            >
              {t('Read more')}
            </Button>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
