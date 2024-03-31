import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Unstable_Grid2 as Grid,
  IconButton,
  styled,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ChevronLeftTwoToneIcon from '@mui/icons-material/ChevronLeftTwoTone';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import { StaticDatePicker } from '@mui/x-date-pickers';
import AvatarGroupsTooltips from 'src/components/application-ui/avatars/avatar-group-tooltips/avatar-group-tooltips';
import { Navigation, Pagination } from 'swiper/modules';

type ConferenceCard = {
  avatar: {
    src?: string;
    gradientBackground?: string;
    letter?: string;
  };
  title: string;
  companyName: string;
  date: string;
  isRemote: boolean;
  isSeatAvailable: boolean;
};

const CardCalendarWrapper = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%) !important',
  color: theme.palette.common.white,

  '.MuiPickersLayout-root': {
    background: 'transparent',
  },

  '.MuiPickersLayout-yearButton, .MuiPickersLayout-yearButton, .MuiIconButton-root, .MuiPickersDay-root, .MuiTypography-root':
    {
      color: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius,

      '&:hover': {
        background:
          theme.palette.mode === 'dark'
            ? alpha(theme.palette.common.white, 0.04)
            : alpha(theme.palette.common.white, 0.1),
      },
    },
}));

const SwipeIndicator = styled(IconButton)(({ theme }) => ({
  color: alpha(theme.palette.common.black, 0.5),
  width: theme.spacing(4),
  height: theme.spacing(4),

  '&:hover:not(.swiper-button-disabled)': {
    color: theme.palette.primary.main,
    background: alpha(theme.palette.primary.main, 0.1),
  },

  '&.swiper-button-disabled': {
    opacity: 0.3,
    cursor: 'disabled',

    '&:hover': {
      background: 'none',
      color: theme.palette.neutral[400],
    },
  },
}));

function UpcomingConferences() {
  const { t } = useTranslation();

  const conferenceData: ConferenceCard[] = [
    {
      avatar: {
        letter: 'A',
        gradientBackground: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%)',
      },
      title: t('Apple World Wide Conference 2022'),
      companyName: 'Apple',
      date: '10/16/2021',
      isRemote: true,
      isSeatAvailable: true,
    },
    {
      avatar: {
        src: '/placeholders/logo/google-icon.svg',
      },
      title: t('Google 2021 Mobile Devices Conference'),
      companyName: 'Google',
      date: '10/23/2021',
      isRemote: true,
      isSeatAvailable: false,
    },
    {
      avatar: {
        letter: 'M',
        gradientBackground: 'linear-gradient(120deg, #00C9FF 0%, #92FE9D 100%)',
      },
      title: t('Microsoft Future Tech 2023'),
      companyName: 'Microsoft',
      date: '03/15/2023',
      isRemote: false,
      isSeatAvailable: true,
    },
    {
      avatar: {
        src: '/placeholders/logo/airbnb-icon.svg',
      },
      title: t('Amazon Web Services Summit 2023'),
      companyName: 'Amazon',
      date: '04/08/2023',
      isRemote: true,
      isSeatAvailable: true,
    },
    {
      avatar: {
        letter: 'T',
        gradientBackground: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
      title: t('Tesla Innovations Conference 2023'),
      companyName: 'Tesla',
      date: '05/27/2023',
      isRemote: false,
      isSeatAvailable: false,
    },
    {
      avatar: {
        src: '/placeholders/logo/figma-logo.svg',
      },
      title: t('Facebook Connect 2023'),
      companyName: 'Facebook',
      date: '09/22/2023',
      isRemote: false,
      isSeatAvailable: true,
    },
    {
      avatar: {
        letter: 'N',
        gradientBackground: 'linear-gradient(60deg, #96deda 0%, #50c9c3 100%)',
      },
      title: t('Netflix Media Innovations 2023'),
      companyName: 'Netflix',
      date: '11/05/2023',
      isRemote: true,
      isSeatAvailable: false,
    },
  ];

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 2,
        }}
      >
        <Typography variant="h4">{t('Upcoming Conferences')}</Typography>
        <Box>
          <SwipeIndicator className="MuiSwipe-root MuiSwipe-left">
            <ChevronLeftTwoToneIcon />
          </SwipeIndicator>
          <SwipeIndicator className="MuiSwipe-root MuiSwipe-right">
            <ChevronRightTwoToneIcon />
          </SwipeIndicator>
        </Box>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
      >
        <Grid
          xs={12}
          md={4}
        >
          <CardCalendarWrapper>
            <StaticDatePicker
              displayStaticWrapperAs="desktop"
              defaultValue={new Date()}
            />
          </CardCalendarWrapper>
        </Grid>
        <Grid
          xs={12}
          md={8}
        >
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop
            navigation={{
              nextEl: '.MuiSwipe-right',
              prevEl: '.MuiSwipe-left',
            }}
            breakpoints={{
              500: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
          >
            {conferenceData.map((data, index) => (
              <SwiperSlide key={index}>
                <Box>
                  <Card
                    elevation={0}
                    variant="outlined"
                    sx={{ boxShadow: 'none', p: 2.5 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        {data.avatar.src ? (
                          <Avatar
                            src={data.avatar.src}
                            sx={{ mr: 1 }}
                          />
                        ) : (
                          <Avatar
                            sx={{
                              mr: 1,
                              background: data.avatar.gradientBackground,
                              color: 'common.white',
                            }}
                          >
                            {data.avatar.letter}
                          </Avatar>
                        )}
                        <Typography variant="h5">{data.companyName}</Typography>
                      </Box>
                      <Chip
                        label={data.isSeatAvailable ? 'Seats available' : 'No seats available'}
                        color={data.isSeatAvailable ? 'success' : 'error'}
                      />
                    </Box>
                    <Box sx={{ py: 3 }}>
                      <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        gutterBottom
                      >
                        {data.date} - {data.isRemote ? 'Remote' : 'In-Person'}
                      </Typography>
                      <Typography
                        variant="h4"
                        noWrap
                      >
                        {data.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      gutterBottom
                    >
                      Hosted by:
                    </Typography>
                    <Box
                      display="flex"
                      justifyContent="flex-start"
                      sx={{ pb: 3 }}
                    >
                      <AvatarGroupsTooltips />
                    </Box>
                    <Box>
                      <Button
                        disabled={!data.isSeatAvailable}
                        fullWidth
                        variant="contained"
                        sx={{ mb: 1 }}
                      >
                        Book a seat
                      </Button>
                      <Button
                        fullWidth
                        variant="outlined"
                      >
                        More information
                      </Button>
                    </Box>
                  </Card>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </>
  );
}

export default UpcomingConferences;
