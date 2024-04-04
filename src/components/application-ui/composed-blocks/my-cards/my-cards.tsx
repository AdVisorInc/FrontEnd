import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import ChevronLeftTwoToneIcon from '@mui/icons-material/ChevronLeftTwoTone';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
  alpha,
  Avatar,
  Box,
  Card,
  CardHeader,
  IconButton,
  LinearProgress,
  List,
  ListItemAvatar,
  ListItemText,
  styled,
  Switch,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AvatarGroupsTooltips from 'src/components/application-ui/avatars/avatar-group-tooltips/avatar-group-tooltips';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { DividerLight } from 'src/components/base/styles/card';
import { ListItemButtonWrapperLight } from 'src/components/base/styles/list-item-button';
import { Navigation, Pagination } from 'swiper/modules';

type ListItemType = {
  id: number;
  name: string;
  logoSrc: string;
  price: string;
};

const listItems: ListItemType[] = [
  {
    id: 1,
    name: 'Spotify',
    logoSrc: '/placeholders/logo/spotify.svg',
    price: '-$9.99',
  },
  {
    id: 2,
    name: 'Slack',
    logoSrc: '/placeholders/logo/slack.svg',
    price: '-$4.99',
  },
  {
    id: 3,
    name: 'AirBnB',
    logoSrc: '/placeholders/logo/airbnb.svg',
    price: '-$229.00',
  },
];

const RootWrapper = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%) !important',
  color: theme.palette.common.white,

  '.MuiAvatarGroup-avatar': {
    background:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.common.white, 0.04)
        : alpha(theme.palette.common.white, 0.1),
    color: `${alpha(theme.palette.common.white, 0.7)} !important`,
  },

  '.MuiList-root': {
    marginBottom: theme.spacing(2),

    '.MuiButtonBase-root': {
      color: alpha(theme.palette.common.white, 0.7),

      '&:hover, &:active, .active': {
        background:
          theme.palette.mode === 'dark'
            ? alpha(theme.palette.common.white, 0.04)
            : alpha(theme.palette.common.white, 0.1),
        color: theme.palette.common.white,
      },
    },

    '.MuiListItemAvatar-root': {
      background: theme.palette.common.white,
      borderRadius: '100px',
      marginRight: theme.spacing(1.5),
      width: theme.spacing(5),
      height: theme.spacing(5),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}));

const CardWrapper = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%) !important',
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  boxShadow: 'none',

  '.MuiCardHeader-root': {
    '.MuiCardHeader-title': {
      color: theme.palette.common.white,
      fontWeight: 'normal',
      paddingBottom: theme.spacing(0.5),
    },
  },

  '.MuiCardHeader-subheader': {
    color: theme.palette.common.white,
  },
}));

const SwipeIndicator = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  background: alpha(theme.palette.common.white, 0.08),
  color: alpha(theme.palette.common.white, 0.8),
  position: 'absolute',
  width: theme.spacing(5),
  height: theme.spacing(5),
  top: '50%',
  marginTop: theme.spacing(-1.5),
  borderRadius: '100px',

  '&:hover:not(.swiper-button-disabled)': {
    color: theme.palette.common.white,
    background:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.common.white, 0.04)
        : alpha(theme.palette.common.white, 0.1),
  },

  '&.MuiSwipe-left': {
    left: theme.spacing(1.5),
  },

  '&.MuiSwipe-right': {
    right: theme.spacing(1.5),
  },

  '&.swiper-button-disabled': {
    opacity: 0.3,
    color: alpha(theme.palette.common.white, 0.2),

    '&:hover': {
      background: 'none',
      color: alpha(theme.palette.common.white, 0.8),
    },
  },
}));

const SwiperWrapper = styled(Box)(({ theme }) => ({
  '.swiper-pagination': {
    '.swiper-pagination-bullet': {
      background: alpha(theme.palette.common.white, 0.3),
      opacity: 1,

      '&.swiper-pagination-bullet-active': {
        background: theme.palette.common.white,
        width: '16px',
        borderRadius: '6px',
      },
    },
  },
}));

const IconButtonDotted = styled(IconButton)(({ theme }) => ({
  borderRadius: '100px',
  height: 44,
  width: 44,
  border: `1px dashed ${alpha(theme.palette.common.white, 0.5)}`,
  color: alpha(theme.palette.common.white, 0.8),

  '&:hover': {
    background: alpha(theme.palette.common.white, 0.08),
    color: theme.palette.common.white,
  },
}));

function MyCards() {
  const { t } = useTranslation();
  const theme = useTheme();

  const [state, setState] = useState({
    interest: true,
  });

  const interestActivate = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const data = {
    logo1: '/placeholders/logo/deutschebank_light.svg',
  };

  return (
    <RootWrapper
      sx={{
        height: '100%',
      }}
    >
      <CardHeader
        sx={{
          flexDirection: 'row',
          '.MuiCardHeader-action': {
            mt: 0,
          },
        }}
        subheader="Manage all your bank cards"
        subheaderTypographyProps={{
          variant: 'subtitle1',
          color: alpha(theme.palette.common.white, 0.6),
        }}
        titleTypographyProps={{ variant: 'h4' }}
        title={t('My Cards')}
        action={
          <IconButton
            size="small"
            color="inherit"
          >
            <MenuRoundedIcon />
          </IconButton>
        }
      />
      <SwiperWrapper
        sx={{
          mx: 'auto',
          maxWidth: 500,
          position: 'relative',
          py: 2,
          px: { xs: 2, sm: 8 },
        }}
      >
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop
          navigation={{
            nextEl: '.MuiSwipe-right',
            prevEl: '.MuiSwipe-left',
          }}
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
        >
          <SwiperSlide>
            <CardWrapper
              sx={{
                height: '100%',
                background: 'linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardHeader
                sx={{
                  alignItems: 'flex-start',
                }}
                action={
                  <Avatar
                    sx={{
                      width: theme.spacing(4.5),
                      height: theme.spacing(4.5),
                      background: 'transparent',
                    }}
                    variant="square"
                    alt="Deutsche Bank"
                    src={data.logo1}
                  />
                }
                title={t('Balance')}
                subheader="$22,674.32"
                subheaderTypographyProps={{ variant: 'h2' }}
              />
              <Box
                sx={{
                  p: 2,
                }}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h4">**** 4856</Typography>
                <Tooltip
                  arrow
                  title={t('Disable Account')}
                >
                  <Switch
                    checked={state.interest}
                    onChange={interestActivate}
                    color="primary"
                    name="interest"
                  />
                </Tooltip>
              </Box>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper
              sx={{
                height: '100%',
                background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%) !important',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardHeader
                sx={{
                  alignItems: 'flex-start',
                }}
                action={
                  <Avatar
                    sx={{
                      width: theme.spacing(4.5),
                      height: theme.spacing(4.5),
                      background: 'transparent',
                    }}
                    variant="square"
                    alt="Deutsche Bank"
                    src={data.logo1}
                  />
                }
                title={t('Balance')}
                subheader="$15,689.36"
                subheaderTypographyProps={{ variant: 'h2' }}
              />
              <Box
                sx={{
                  p: 2,
                }}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h4">**** 3466</Typography>
                <Tooltip
                  arrow
                  title={t('Disable Account')}
                >
                  <Switch
                    checked={state.interest}
                    onChange={interestActivate}
                    color="primary"
                    name="interest"
                  />
                </Tooltip>
              </Box>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper
              sx={{
                height: '100%',
                background: 'linear-gradient(135deg, #FCCF31 0%, #F55555 100%) !important',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardHeader
                sx={{
                  alignItems: 'flex-start',
                }}
                action={
                  <Avatar
                    sx={{
                      width: theme.spacing(4.5),
                      height: theme.spacing(4.5),
                      background: 'transparent',
                    }}
                    variant="square"
                    alt="Deutsche Bank"
                    src={data.logo1}
                  />
                }
                title={t('Balance')}
                subheader="$54,345.23"
                subheaderTypographyProps={{ variant: 'h2' }}
              />
              <Box
                sx={{
                  p: 2,
                }}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h4">**** 6545</Typography>
                <Tooltip
                  arrow
                  title={t('Disable Account')}
                >
                  <Switch
                    checked={state.interest}
                    onChange={interestActivate}
                    color="primary"
                    name="interest"
                  />
                </Tooltip>
              </Box>
            </CardWrapper>
          </SwiperSlide>
        </Swiper>
        <SwipeIndicator className="MuiSwipe-root MuiSwipe-left">
          <ChevronLeftTwoToneIcon />
        </SwipeIndicator>
        <SwipeIndicator className="MuiSwipe-root MuiSwipe-right">
          <ChevronRightTwoToneIcon />
        </SwipeIndicator>
      </SwiperWrapper>
      <CardHeader title={t('Latest Expenses')} />
      <List disablePadding>
        {listItems.map((item) => (
          <ListItemButtonWrapperLight key={item.id}>
            <ListItemAvatar
              sx={{
                minWidth: '36px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                alt={item.name}
                src={item.logoSrc}
              />
            </ListItemAvatar>
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{ variant: 'h5', noWrap: true }}
            />
            <Typography
              align="right"
              variant="body1"
              noWrap
              sx={{
                mr: 2,
              }}
            >
              {item.price}
            </Typography>
            <ChevronRightTwoToneIcon />
          </ListItemButtonWrapperLight>
        ))}
      </List>
      <DividerLight />
      <Box
        sx={{
          px: 2,
          py: 3,
          background: alpha(theme.palette.common.white, 0.06),
        }}
      >
        <CardHeader
          sx={{ p: 0, mb: 2 }}
          title={t('Spending Limit')}
          action={
            <>
              <Typography
                variant="h6"
                fontWeight={700}
              >
                $300
              </Typography>
              <Typography
                variant="h6"
                fontWeight={500}
              >
                / $500
              </Typography>
            </>
          }
        />
        <LinearProgress
          value={65}
          color="primary"
          variant="determinate"
        />
      </Box>
      <DividerLight />
      <CardHeader title={t('Quick Payments')} />
      <Box
        sx={{
          mx: 2,
          mb: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <AvatarGroupsTooltips />
        <Tooltip
          arrow
          title={t('Add Quick Payment Profile')}
        >
          <IconButtonDotted
            size="small"
            sx={{
              ml: 1,
            }}
          >
            <AddTwoToneIcon />
          </IconButtonDotted>
        </Tooltip>
      </Box>
    </RootWrapper>
  );
}

export default MyCards;
