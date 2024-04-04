import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  darken,
  Unstable_Grid2 as Grid,
  Link,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DividerLight } from 'src/components/base/styles/card';
import DarkContentCard from './dark-content-card';

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 7,
  display: 'flex',
}));

const Label = styled(Box)(({ theme }) => ({
  background: theme.palette.success.main,
  color: theme.palette.success.contrastText,
  textTransform: 'uppercase',
  fontSize: theme.typography.pxToRem(13),
  fontWeight: 600,
  lineHeight: '23px',
  height: '22px',
  padding: theme.spacing(0, 1.2),
  borderRadius: '50px',
}));

const BgComposed = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 6,
  background: darken(alpha(theme.palette.secondary.main, 0.7), 0.8),
  boxShadow: `inset 0 0 4rem 1rem ${darken(theme.palette.secondary.main, 0.9)}`,
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
        <Card
          sx={{
            textAlign: 'center',
            position: 'relative',
            transition: theme.transitions.create(['box-shadow']),

            '&:hover': {
              boxShadow: `0 2rem 8rem 0 ${theme.palette.background.default}, 
                0 0.6rem 1.6rem ${alpha(theme.palette.common.black, 0.15)}, 
                0 0.2rem 0.2rem ${alpha(theme.palette.common.black, 0.1)}`,
            },
          }}
        >
          <BgComposed
            sx={{
              p: { xs: 2, sm: 3, md: 4, lg: 6 },
            }}
          >
            <Box mt={{ xs: 4, md: 3 }}>
              <Link
                href=""
                onClick={(e) => e.preventDefault()}
                underline="none"
                lineHeight={1.5}
                variant="h2"
                sx={{
                  color: theme.palette.common.white,

                  '&:hover': {
                    color: alpha(theme.palette.common.white, 0.9),
                  },
                }}
              >
                {t('Revolutionize Your Dashboard Experience')}
              </Link>
            </Box>
            <Typography
              variant="h4"
              fontWeight={400}
              sx={{
                mt: 2,
                color: alpha(theme.palette.common.white, 0.8),
              }}
            >
              {t(
                ' The perfect tool to enhance productivity and decision-making in diverse business environments.'
              )}
              .
            </Typography>
            <DividerLight
              sx={{
                my: 3,
              }}
            />
            <Avatar
              sx={{
                width: 72,
                height: 72,
                mx: 'auto',
                mb: 1,
              }}
              src="/avatars/1.png"
            />
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.common.white,
              }}
            >
              Dalia Finney
            </Typography>
            <DividerLight
              sx={{
                my: 3,
              }}
            />
            <Button
              sx={{
                px: 2.5,
                borderRadius: 10,
                transform: 'scale(1)',

                '&:hover': {
                  transform: 'scale(1.05)',
                },
                '&:active': {
                  boxShadow: 'none',
                },
              }}
              variant="contained"
              color="error"
            >
              {t('Read more')}
            </Button>
          </BgComposed>
          <CardMedia
            component="img"
            height="100%"
            width={'auto'}
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              left: 0,
              top: 0,
              borderRadius: 'inherit',
              zIndex: 5,
            }}
            image="/placeholders/covers/5.jpg"
            alt="..."
          />
          <CardActions>
            <Label
              sx={{
                mr: 1,
                background: theme.palette.info.main,
                color: theme.palette.info.contrastText,
              }}
            >
              {t('Marketing')}
            </Label>
            <Label
              sx={{
                background: theme.palette.warning.main,
                color: theme.palette.warning.contrastText,
              }}
            >
              {t('Development')}
            </Label>
          </CardActions>
        </Card>
      </Grid>
      <Grid xs={12}>
        <Card
          sx={{
            position: 'relative',
            transition: theme.transitions.create(['box-shadow']),

            '&:hover': {
              boxShadow: `0 2rem 8rem 0 ${theme.palette.background.default}, 
                0 0.6rem 1.6rem ${alpha(theme.palette.common.black, 0.15)}, 
                0 0.2rem 0.2rem ${alpha(theme.palette.common.black, 0.1)}`,
            },
          }}
        >
          <DarkContentCard />
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
