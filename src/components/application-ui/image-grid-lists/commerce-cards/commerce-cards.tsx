import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Unstable_Grid2 as Grid,
  IconButton,
  Link,
  styled,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  gradientDots,
  gradientDotsAlt,
  solidDots,
} from 'src/components/application-ui/radio-groups/product-colors/product-colors';
import RadioDotSelector from 'src/components/application-ui/radio-groups/product-colors/radio-dot-selector';

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  zIndex: 7,
}));

const LinkHover = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  transform: 'scale(1)',
  transition: theme.transitions.create(['transform']),

  img: {
    borderRadius: theme.shape.borderRadius,
  },

  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

function Component() {
  const { t } = useTranslation();

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
        <Card
          sx={{
            position: 'relative',
          }}
        >
          <CardActions>
            <IconButton
              sx={{
                p: 1,
                borderRadius: 55,
              }}
              size="small"
              color="error"
            >
              <FavoriteTwoToneIcon fontSize="small" />
            </IconButton>
          </CardActions>
          <CardContent
            sx={{
              p: { xs: 1, md: 2, lg: 3 },
              textAlign: 'center',
            }}
          >
            <LinkHover>
              <Link
                href=""
                onClick={(e) => e.preventDefault()}
              >
                <img
                  style={{ height: 134 }}
                  src="/placeholders/products/8.png"
                  alt="..."
                />
              </Link>
            </LinkHover>
            <Box
              sx={{
                pt: 2,
                pb: 1,
              }}
            >
              <Link
                href=""
                onClick={(e) => e.preventDefault()}
                underline="hover"
                variant="h5"
              >
                SlateX Pro Tablet
              </Link>
            </Box>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{
                mb: 2,
                px: { xs: 0, lg: 2 },
                lineHeight: 1.5,
              }}
            >
              SlateX Pro Tablet for work and play, with large touchscreen and powerful features,
              offering versatility.
            </Typography>
            <Chip
              label="$ 1,685"
              color="primary"
              variant="outlined"
              sx={{
                fontSize: 15,
              }}
            />

            <Divider
              sx={{
                mx: 'auto',
                my: 2,
                width: '60%',
              }}
            />
            <RadioDotSelector
              dotItems={gradientDots}
              size={24}
            />
            <Divider
              sx={{
                mx: 'auto',
                my: 2,
                width: '60%',
              }}
            />
            <Button
              variant="contained"
              color="success"
            >
              {t('Buy now')}
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            position: 'relative',
          }}
        >
          <CardActions>
            <IconButton
              sx={{
                p: 1,
                borderRadius: 55,
              }}
              size="small"
              color="error"
            >
              <FavoriteTwoToneIcon fontSize="small" />
            </IconButton>
          </CardActions>
          <CardContent
            sx={{
              p: { xs: 1, md: 2, lg: 3 },
              textAlign: 'center',
            }}
          >
            <LinkHover>
              <Link
                href=""
                onClick={(e) => e.preventDefault()}
              >
                <img
                  style={{ height: 134 }}
                  src="/placeholders/products/3.png"
                  alt="..."
                />
              </Link>
            </LinkHover>
            <Box
              sx={{
                pt: 2,
                pb: 1,
              }}
            >
              <Link
                href=""
                onClick={(e) => e.preventDefault()}
                underline="hover"
                variant="h5"
              >
                AudioZen Wireless Headphones
              </Link>
            </Box>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{
                mb: 2,
                px: { xs: 0, lg: 2 },
                lineHeight: 1.5,
              }}
            >
              AudioZen Headphones for ultimate comfort and superior sound quality, with active noise
              cancellation.
            </Typography>
            <Chip
              label="$ 176"
              color="primary"
              variant="outlined"
              sx={{
                fontSize: 15,
              }}
            />

            <Divider
              sx={{
                mx: 'auto',
                my: 2,
                width: '60%',
              }}
            />
            <RadioDotSelector
              dotItems={solidDots}
              size={24}
            />
            <Divider
              sx={{
                mx: 'auto',
                my: 2,
                width: '60%',
              }}
            />
            <Button
              variant="contained"
              color="success"
            >
              {t('Buy now')}
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            position: 'relative',
          }}
        >
          <CardActions>
            <IconButton
              sx={{
                p: 1,
                borderRadius: 55,
              }}
              size="small"
              color="error"
            >
              <FavoriteTwoToneIcon fontSize="small" />
            </IconButton>
          </CardActions>
          <CardContent
            sx={{
              p: { xs: 1, md: 2, lg: 3 },
              textAlign: 'center',
            }}
          >
            <LinkHover>
              <Link
                href=""
                onClick={(e) => e.preventDefault()}
              >
                <img
                  style={{ height: 134 }}
                  src="/placeholders/products/5.png"
                  alt="..."
                />
              </Link>
            </LinkHover>
            <Box
              sx={{
                pt: 2,
                pb: 1,
              }}
            >
              <Link
                href=""
                onClick={(e) => e.preventDefault()}
                underline="hover"
                variant="h5"
              >
                FitTrack Smartwatch
              </Link>
            </Box>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{
                mb: 2,
                px: { xs: 0, lg: 2 },
                lineHeight: 1.5,
              }}
            >
              FitTrack Smartwatch for fitness tracking, notifications, and a stylish design for any
              occasion.
            </Typography>
            <Chip
              label="$ 299"
              color="primary"
              variant="outlined"
              sx={{
                fontSize: 15,
              }}
            />
            <Divider
              sx={{
                mx: 'auto',
                my: 2,
                width: '60%',
              }}
            />
            <RadioDotSelector
              dotItems={gradientDotsAlt}
              size={24}
            />
            <Divider
              sx={{
                mx: 'auto',
                my: 2,
                width: '60%',
              }}
            />
            <Button
              variant="contained"
              color="success"
            >
              {t('Buy now')}
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
