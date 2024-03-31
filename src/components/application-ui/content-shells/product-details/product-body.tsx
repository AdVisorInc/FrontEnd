import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import ChevronLeftTwoToneIcon from '@mui/icons-material/ChevronLeftTwoTone';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  Container,
  Divider,
  FormControl,
  Unstable_Grid2 as Grid,
  IconButton,
  Rating,
  Stack,
  styled,
  Tab,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Product } from 'src/models/product';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import React from 'react';
import toast from 'react-hot-toast';
import SelectQuantity from 'src/components/application-ui/input/number-selector/select-quantity';
import { gradientDots } from 'src/components/application-ui/radio-groups/product-colors/product-colors';
import RadioDotSelector from 'src/components/application-ui/radio-groups/product-colors/radio-dot-selector';
import RadioSmallCardsLens from 'src/components/application-ui/radio-groups/small-cards/small-cards-lens';
import RadioSmallCardsMemory from 'src/components/application-ui/radio-groups/small-cards/small-cards-memory';
import { TabsShadow } from 'src/components/base/styles/tabs';
import { useCustomization } from 'src/hooks/use-customization';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import AdditionalInfoTab from './additional-info-tab';
import ReviewsTab from './reviews-tab';

interface ProductBodyProps {
  product: Product;
}

const SwipeIndicator = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.primary.main,
  width: theme.spacing(5),
  height: theme.spacing(5),
  position: 'absolute',
  top: '50%',
  marginTop: theme.spacing(-2.5),
  zIndex: 5,
  background:
    theme.palette.mode === 'dark'
      ? alpha(theme.palette.common.black, 0.8)
      : alpha(theme.palette.common.white, 0.8),
  borderRadius: 100,
  boxShadow: theme.palette.mode === 'dark' ? theme.shadows[7] : theme.shadows[9],

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },

  '&.MuiSwipe-left': {
    left: theme.spacing(1),
  },

  '&.MuiSwipe-right': {
    right: theme.spacing(1),
  },

  '&:hover:not(.swiper-button-disabled)': {
    color:
      theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.main,
    background:
      theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.common.white,
  },

  '&.swiper-button-disabled': {
    opacity: 0.3,
    color: theme.palette.mode === 'dark' ? theme.palette.neutral[800] : theme.palette.neutral[400],

    '&:hover': {
      background: 'none',
      color:
        theme.palette.mode === 'dark' ? theme.palette.neutral[800] : theme.palette.neutral[400],
    },
  },
}));
const SwiperWrapper = styled(Box)(({ theme }) => ({
  '.swiper-wrapper': {
    '.swiper-slide': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      img: {
        width: '100%',
        borderRadius: theme.shape.borderRadius,
        height: 'auto',
      },
    },
  },

  '.swiper-thumbs': {
    '.swiper-wrapper': {
      display: 'flex',
      alignItems: 'center',
    },

    '.swiper-slide': {
      width: '140px',
      display: 'flex',
      padding: '3px',

      img: {
        width: '100%',
        height: 'auto',
        opacity: 0.7,
        transition: theme.transitions.create(['box-shadow', 'opacity']),
        border: `2px solid ${theme.palette.background.paper}`,
      },

      '&:hover': {
        cursor: 'pointer',

        img: {
          opacity: 1,
        },
      },

      '&.swiper-slide-thumb-active': {
        img: {
          opacity: 1,
          boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
        },
      },
    },
  },
}));

const ProductBody: FC<ProductBodyProps> = ({ product }) => {
  const { t } = useTranslation();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const customization = useCustomization();

  const [value, setValue] = React.useState('0');

  const handleTabChange = (event, newValue) => {
    setValue(String(newValue));
  };

  const handleCart = () => {
    toast.success(t('You added a product to cart'));
  };

  return (
    <Card>
      <Grid container>
        <Grid
          xs={12}
          md={6}
          sx={{
            position: 'relative',
          }}
        >
          <Box
            component="span"
            sx={{
              display: { xs: 'none', md: 'inline-block' },
            }}
          >
            <Divider
              absolute
              sx={{
                height: '100%',
                left: 'auto',
                right: 0,
              }}
              orientation="vertical"
              flexItem
            />
          </Box>
          <Box p={{ xs: 2, sm: 3 }}>
            <SwiperWrapper>
              <Box
                mb={{ xs: 2, sm: 3 }}
                sx={{
                  position: 'relative',
                }}
              >
                <Swiper
                  loop
                  autoHeight
                  spaceBetween={10}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  navigation={{
                    nextEl: '.MuiSwipe-right',
                    prevEl: '.MuiSwipe-left',
                  }}
                >
                  {product.images.map((value) => {
                    return (
                      <SwiperSlide key={value}>
                        <img
                          src={value}
                          alt="..."
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <SwipeIndicator className="MuiSwipe-root MuiSwipe-left">
                  <ChevronLeftTwoToneIcon />
                </SwipeIndicator>
                <SwipeIndicator className="MuiSwipe-root MuiSwipe-right">
                  <ChevronRightTwoToneIcon />
                </SwipeIndicator>
              </Box>

              <Swiper
                onSwiper={setThumbsSwiper}
                loop
                spaceBetween={10}
                slidesPerView={4}
                freeMode
                watchSlidesProgress
                modules={[FreeMode, Navigation, Thumbs]}
                navigation={{
                  nextEl: '.MuiSwipe-right',
                  prevEl: '.MuiSwipe-left',
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },

                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
              >
                {product.images.map((value) => {
                  return (
                    <SwiperSlide key={value}>
                      <img
                        src={value}
                        alt="..."
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </SwiperWrapper>
            <Divider sx={{ my: { xs: 2, sm: 3 } }} />
            <Box>
              <Typography
                variant="h5"
                sx={{
                  pb: 1,
                }}
              >
                {t('Share')}
              </Typography>
              <Button
                sx={{
                  mr: 1,
                }}
                variant="outlined"
                size="small"
              >
                Facebook
              </Button>
              <Button
                sx={{
                  mr: 1,
                }}
                variant="outlined"
                size="small"
              >
                Twitter
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
          <Stack
            divider={<Divider />}
            spacing={{ xs: 2, sm: 3 }}
            p={{ xs: 2, sm: 3 }}
          >
            <Box>
              <Rating
                readOnly
                defaultValue={product.rating}
                precision={0.5}
              />
              <Typography
                variant="h2"
                component="h2"
                sx={{ py: 1 }}
              >
                {product.name}
              </Typography>
              <Typography
                variant="h5"
                fontWeight={500}
                color="text.secondary"
                sx={{ pb: 1.5 }}
              >
                {product.summary}
              </Typography>
              <Typography variant="subtitle1">
                <div dangerouslySetInnerHTML={{ __html: product.description }} />
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent="space-evenly"
                alignItems="center"
                pt={1}
                spacing={{ xs: 2, sm: 3 }}
                divider={
                  <Divider
                    flexItem
                    orientation={smUp ? 'vertical' : 'horizontal'}
                    variant="middle"
                  />
                }
              >
                <Box
                  display="flex"
                  justifyContent={{ xs: 'flex-start', sm: 'center' }}
                  sx={{ width: '100%' }}
                >
                  <Box maxWidth={{ xs: '100%', sm: 164 }}>
                    <SelectQuantity />
                  </Box>
                </Box>
                <Box sx={{ width: '100%' }}>
                  <Box
                    display="flex"
                    justifyContent={{ xs: 'flex-start', sm: 'center' }}
                    sx={{ width: '100%' }}
                  >
                    <FormControl variant="outlined">
                      <Typography
                        variant="h5"
                        sx={{ pb: 1.5 }}
                        component="label"
                        htmlFor="product-color-radio"
                      >
                        Product color
                      </Typography>
                      <RadioDotSelector
                        dotItems={gradientDots}
                        size={38}
                      />
                    </FormControl>
                  </Box>
                </Box>
              </Stack>
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{ pb: 1.5 }}
              >
                Options
              </Typography>
              <Card
                elevation={0}
                variant="outlined"
                sx={{
                  mb: { xs: 2, sm: 3 },
                  p: { xs: 2, sm: 3 },
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark'
                      ? alpha(theme.palette.neutral[25], 0.02)
                      : 'neutral.25',
                }}
              >
                <RadioSmallCardsMemory />
              </Card>
              <Card
                elevation={0}
                variant="outlined"
                sx={{
                  p: { xs: 2, sm: 3 },
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark'
                      ? alpha(theme.palette.neutral[25], 0.02)
                      : 'neutral.25',
                }}
              >
                <RadioSmallCardsLens />
              </Card>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography
                  component="div"
                  variant="caption"
                  gutterBottom
                >
                  {t('Price')}
                </Typography>

                <Typography
                  component="span"
                  variant={product.sale_price !== 0 ? 'h4' : 'h3'}
                  sx={{
                    pr: 2,
                    textDecorationLine: product.sale_price !== 0 ? 'line-through' : '',
                  }}
                >
                  ${numeral(product.price).format(`0,0.00`)}
                </Typography>
                {product.sale_price !== 0 && (
                  <Typography
                    component="span"
                    variant="h3"
                    color="error.main"
                  >
                    ${numeral(product.sale_price).format(`0,0.00`)}
                  </Typography>
                )}
              </Box>
              <Box>
                <Button
                  startIcon={<AddShoppingCartTwoToneIcon />}
                  variant="contained"
                  onClick={handleCart}
                  size="large"
                >
                  {t('Add to card')}
                </Button>
              </Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <Divider />
      <Box
        p={2}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <TabsShadow
          value={Number(value)}
          onChange={handleTabChange}
          centered
        >
          <Tab label="Reviews" />
          <Tab label="Additional info" />
        </TabsShadow>
      </Box>
      <Divider />
      <Container maxWidth={customization.stretch ? false : 'xl'}>
        {value === '0' && <ReviewsTab />}
        {value === '1' && <AdditionalInfoTab product={product} />}
      </Container>
    </Card>
  );
};

ProductBody.propTypes = {
  // @ts-ignore
  product: PropTypes.object.isRequired,
};

export default ProductBody;
