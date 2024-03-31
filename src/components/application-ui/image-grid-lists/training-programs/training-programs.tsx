import {
  alpha,
  Box,
  Button,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Link,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import ChevronLeftTwoToneIcon from '@mui/icons-material/ChevronLeftTwoTone';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import { Navigation, Pagination } from 'swiper/modules';

const SwipeIndicator = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  width: theme.spacing(4),
  height: theme.spacing(4),
  '&:hover:not(.swiper-button-disabled)': {
    color: theme.palette.primary.main,
    background: alpha(theme.palette.primary.main, 0.1),
  },

  '&.swiper-button-disabled': {
    opacity: 0.3,
    color: theme.palette.neutral[400],

    '&:hover': {
      background: 'none',
      color: theme.palette.neutral[400],
    },
  },
}));

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  bottom: theme.spacing(2),
  zIndex: 7,
  display: 'flex',
}));

const LabelWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.info.main,
  color: theme.palette.info.contrastText,
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

function TrainingPrograms() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        sx={{
          textAlign: { xs: 'center', sm: 'left' },

          '.MuiCardHeader-action': {
            width: { xs: '100%', sm: 'auto' },
            justifyContent: { xs: 'center', sm: 'flex-end' },
          },
        }}
        action={
          <>
            <SwipeIndicator className="MuiSwipe-root MuiSwipe-left">
              <ChevronLeftTwoToneIcon />
            </SwipeIndicator>
            <SwipeIndicator className="MuiSwipe-root MuiSwipe-right">
              <ChevronRightTwoToneIcon />
            </SwipeIndicator>
          </>
        }
        title={t('Training programs')}
      />
      <Divider />
      <Box
        px={2}
        pb={2}
        sx={{
          '.swiper-pagination-bullets': {
            bottom: '0px !important',
          },

          '.swiper-horizontal': {
            pb: 3,
          },
        }}
      >
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.MuiSwipe-right',
            prevEl: '.MuiSwipe-left',
          }}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          modules={[Navigation, Pagination]}
          pagination={{ dynamicBullets: true, clickable: true }}
        >
          <SwiperSlide>
            <Card
              sx={{
                mt: 2,
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
                  image="/placeholders/fitness/1.png"
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
                pt: 2,
                textAlign: 'center',
              }}
            >
              <Link
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
              >
                {t('Stretching')}
              </Link>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{
                  pb: 2,
                }}
              >
                {t('Team activity')}
              </Typography>
              <Button
                endIcon={<ArrowForwardTwoToneIcon />}
                size="small"
                variant="outlined"
                sx={{
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px',
                  },
                }}
              >
                {t('Start training')}
              </Button>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                mt: 2,
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
                  image="/placeholders/fitness/2.png"
                  alt="..."
                />
              </CardActionAreaWrapper>
            </Card>
            <Box
              sx={{
                px: { md: 2, lg: 1.5, xl: 3 },
                pt: 2,
                textAlign: 'center',
              }}
            >
              <Link
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
              >
                {t('Yoga')}
              </Link>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{
                  pb: 2,
                }}
              >
                {t('Individual')}
              </Typography>
              <Button
                endIcon={<ArrowForwardTwoToneIcon />}
                size="small"
                variant="outlined"
                sx={{
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px',
                  },
                }}
              >
                {t('Start training')}
              </Button>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                mt: 2,
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
                  image="/placeholders/fitness/3.png"
                  alt="..."
                />
              </CardActionAreaWrapper>
            </Card>
            <Box
              sx={{
                px: { md: 2, lg: 1.5, xl: 3 },
                pt: 2,
                textAlign: 'center',
              }}
            >
              <Link
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
              >
                {t('Kangoo Jumps')}
              </Link>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{
                  pb: 2,
                }}
              >
                {t('Large Groups')}
              </Typography>
              <Button
                endIcon={<ArrowForwardTwoToneIcon />}
                size="small"
                variant="outlined"
                sx={{
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px',
                  },
                }}
              >
                {t('Start training')}
              </Button>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                mt: 2,
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
                  image="/placeholders/fitness/4.png"
                  alt="..."
                />
              </CardActionAreaWrapper>
            </Card>
            <Box
              sx={{
                px: { md: 2, lg: 1.5, xl: 3 },
                pt: 2,
                textAlign: 'center',
              }}
            >
              <Link
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
              >
                {t('Rope Jumping')}
              </Link>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{
                  pb: 2,
                }}
              >
                {t('Small teams')}
              </Typography>
              <Button
                endIcon={<ArrowForwardTwoToneIcon />}
                size="small"
                variant="outlined"
                sx={{
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px',
                  },
                }}
              >
                {t('Start training')}
              </Button>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                mt: 2,
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
                  image="/placeholders/fitness/1.png"
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
                pt: 2,
                textAlign: 'center',
              }}
            >
              <Link
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
              >
                {t('Stretching')}
              </Link>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{
                  pb: 2,
                }}
              >
                {t('Team activity')}
              </Typography>
              <Button
                endIcon={<ArrowForwardTwoToneIcon />}
                size="small"
                variant="outlined"
                sx={{
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px',
                  },
                }}
              >
                {t('Start training')}
              </Button>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                mt: 2,
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
                  image="/placeholders/fitness/2.png"
                  alt="..."
                />
              </CardActionAreaWrapper>
            </Card>
            <Box
              sx={{
                px: { md: 2, lg: 1.5, xl: 3 },
                pt: 2,
                textAlign: 'center',
              }}
            >
              <Link
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
              >
                {t('Yoga')}
              </Link>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{
                  pb: 2,
                }}
              >
                {t('Individual')}
              </Typography>
              <Button
                endIcon={<ArrowForwardTwoToneIcon />}
                size="small"
                variant="outlined"
                sx={{
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px',
                  },
                }}
              >
                {t('Start training')}
              </Button>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                mt: 2,
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
                  image="/placeholders/fitness/3.png"
                  alt="..."
                />
              </CardActionAreaWrapper>
            </Card>
            <Box
              sx={{
                px: { md: 2, lg: 1.5, xl: 3 },
                pt: 2,
                textAlign: 'center',
              }}
            >
              <Link
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
              >
                {t('Kangoo Jumps')}
              </Link>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{
                  pb: 2,
                }}
              >
                {t('Large Groups')}
              </Typography>
              <Button
                endIcon={<ArrowForwardTwoToneIcon />}
                size="small"
                variant="outlined"
                sx={{
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px',
                  },
                }}
              >
                {t('Start training')}
              </Button>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{
                mt: 2,
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
                  image="/placeholders/fitness/4.png"
                  alt="..."
                />
              </CardActionAreaWrapper>
            </Card>
            <Box
              sx={{
                px: { md: 2, lg: 1.5, xl: 3 },
                pt: 2,
                textAlign: 'center',
              }}
            >
              <Link
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
              >
                {t('Rope Jumping')}
              </Link>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{
                  pb: 2,
                }}
              >
                {t('Small teams')}
              </Typography>
              <Button
                endIcon={<ArrowForwardTwoToneIcon />}
                size="small"
                variant="outlined"
                sx={{
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px',
                  },
                }}
              >
                {t('Start training')}
              </Button>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Card>
  );
}

export default TrainingPrograms;
