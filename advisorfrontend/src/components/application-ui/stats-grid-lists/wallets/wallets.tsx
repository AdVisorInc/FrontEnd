import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Unstable_Grid2 as Grid,
  styled,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(2, 0, 1, -0.5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(1),
  padding: theme.spacing(0.5),
  borderRadius: '60px',
  height: theme.spacing(5.5),
  width: theme.spacing(5.5),
  background:
    theme.palette.mode === 'dark'
      ? alpha(theme.palette.common.white, 0.2)
      : alpha(theme.palette.common.black, 0.07),

  '& img': {
    background: theme.palette.common.white,
    padding: theme.spacing(0.5),
    display: 'block',
    borderRadius: 'inherit',
    height: theme.spacing(4.5),
    width: theme.spacing(4.5),
  },
}));

const AvatarAddWrapper = styled(Avatar)(({ theme }) => ({
  background:
    theme.palette.mode === 'dark'
      ? alpha(theme.palette.neutral[100], 0.08)
      : alpha(theme.palette.neutral[300], 0.2),
  color: theme.palette.mode === 'dark' ? theme.palette.neutral[400] : theme.palette.primary.main,
  width: theme.spacing(8),
  height: theme.spacing(8),
}));

export const CardAddAction = styled(Card)(({ theme }) => ({
  border: `${theme.palette.primary.main} dashed 1px`,
  height: '100%',
  color: theme.palette.primary.main,
  transition: theme.transitions.create(['all']),

  '.MuiCardActionArea-root': {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },

  '&:hover': {
    borderColor:
      theme.palette.mode === 'dark'
        ? alpha(theme.palette.neutral[600], 0.7)
        : alpha(theme.palette.neutral[900], 0.7),
  },
}));

function Wallets() {
  const { t } = useTranslation();

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3,
        }}
      >
        <Typography variant="h3">{t('Wallets')}</Typography>
        <Button
          size="small"
          variant="outlined"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          {t('Add new wallet')}
        </Button>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
      >
        <Grid
          xs={12}
          sm={6}
          md={3}
        >
          <Card
            sx={{
              px: 1,
            }}
          >
            <CardContent>
              <AvatarWrapper>
                <img
                  alt="BTC"
                  src="/placeholders/logo/bitcoin.png"
                />
              </AvatarWrapper>
              <Typography
                variant="h5"
                fontWeight={500}
                noWrap
              >
                Bitcoin
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                noWrap
              >
                BTC
              </Typography>
              <Box
                sx={{
                  pt: 3,
                }}
              >
                <Typography
                  variant="h3"
                  noWrap
                >
                  $3,586.22
                </Typography>
                <Typography
                  variant="subtitle2"
                  noWrap
                  color="text.secondary"
                >
                  1.25843 BTC
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          md={3}
        >
          <Card
            sx={{
              px: 1,
            }}
          >
            <CardContent>
              <AvatarWrapper>
                <img
                  alt="Ripple"
                  src="/placeholders/logo/ripple.png"
                />
              </AvatarWrapper>
              <Typography
                variant="h5"
                fontWeight={500}
                noWrap
              >
                Ripple
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                noWrap
              >
                XRP
              </Typography>
              <Box
                sx={{
                  pt: 3,
                }}
              >
                <Typography
                  variant="h3"
                  noWrap
                >
                  $586.83
                </Typography>
                <Typography
                  variant="subtitle2"
                  noWrap
                  color="text.secondary"
                >
                  5,783 XRP
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          md={3}
        >
          <Card
            sx={{
              px: 1,
            }}
          >
            <CardContent>
              <AvatarWrapper>
                <img
                  alt="Cardano"
                  src="/placeholders/logo/cardano.png"
                />
              </AvatarWrapper>
              <Typography
                variant="h5"
                fontWeight={500}
                noWrap
              >
                Cardano
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                noWrap
              >
                ADA
              </Typography>
              <Box
                sx={{
                  pt: 3,
                }}
              >
                <Typography
                  variant="h3"
                  noWrap
                >
                  $54,985.00
                </Typography>
                <Typography
                  variant="subtitle2"
                  noWrap
                  color="text.secondary"
                >
                  34,985 ADA
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          md={3}
        >
          <Tooltip
            arrow
            title={t('Click to add a new wallet')}
          >
            <CardAddAction>
              <CardActionArea
                sx={{
                  px: 1,
                }}
              >
                <CardContent>
                  <AvatarAddWrapper>
                    <AddTwoToneIcon fontSize="large" />
                  </AvatarAddWrapper>
                </CardContent>
              </CardActionArea>
            </CardAddAction>
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
}

export default Wallets;
