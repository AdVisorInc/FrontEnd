import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import {
  alpha,
  Box,
  Card,
  CardActionArea,
  Unstable_Grid2 as Grid,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const CardBorderBottom = styled(Card)(() => ({
  borderBottom: 'transparent 5px solid',
}));

const CardActionAreaWrapper = styled(CardActionArea)(({ theme }) => ({
  padding: theme.spacing(3, 2, 3, 3),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

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
    <Card
      sx={{
        p: 5,
        background: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%) !important',
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
      >
        <Grid
          xs={12}
          md={3}
        >
          <CardBorderBottom
            sx={{
              boxShadow: theme.shadows[5],
              borderBottomColor: theme.palette.success.main,
            }}
          >
            <CardActionAreaWrapper>
              <Box component="span">
                <PersonTwoToneIcon
                  sx={{
                    color: 'success.main',
                  }}
                  fontSize="large"
                />
                <Box mt={0.5}>
                  <Typography
                    component="span"
                    variant="h4"
                  >
                    1,585
                  </Typography>{' '}
                  <Typography
                    component="span"
                    variant="subtitle2"
                  >
                    {t('users')}
                  </Typography>
                </Box>
              </Box>
              <Typography
                component="span"
                color="text.secondary"
                sx={{
                  opacity: 0.5,
                  display: 'flex',
                }}
              >
                <ChevronRightTwoToneIcon />
              </Typography>
            </CardActionAreaWrapper>
          </CardBorderBottom>
        </Grid>
        <Grid
          xs={12}
          md={3}
        >
          <CardBorderBottom
            sx={{
              boxShadow: theme.shadows[4],
              borderBottomColor: theme.palette.warning.main,
            }}
          >
            <CardActionAreaWrapper>
              <Box component="span">
                <MonetizationOnTwoToneIcon
                  sx={{
                    color: 'warning.main',
                  }}
                  fontSize="large"
                />
                <Box mt={0.5}>
                  <Typography
                    component="span"
                    variant="h4"
                  >
                    32,595
                  </Typography>{' '}
                  <Typography
                    component="span"
                    variant="subtitle2"
                  >
                    {t('clicks')}
                  </Typography>
                </Box>
              </Box>
              <Typography
                component="span"
                color="text.secondary"
                sx={{
                  opacity: 0.5,
                  display: 'flex',
                }}
              >
                <ChevronRightTwoToneIcon />
              </Typography>
            </CardActionAreaWrapper>
          </CardBorderBottom>
        </Grid>
        <Grid
          xs={12}
          md={3}
        >
          <CardBorderBottom
            sx={{
              boxShadow: `0px 1px 4px ${alpha(
                theme.palette.primary.main,
                0.25
              )}, 0px 3px 12px 2px ${alpha(theme.palette.primary.main, 0.35)}`,
              borderBottomColor: theme.palette.primary.main,
            }}
          >
            <CardActionAreaWrapper>
              <Box component="span">
                <AccountBalanceWalletTwoToneIcon
                  sx={{
                    color: 'primary.main',
                  }}
                  fontSize="large"
                />
                <Box mt={0.5}>
                  <Typography
                    component="span"
                    variant="h4"
                  >
                    $12,634
                  </Typography>{' '}
                  <Typography
                    component="span"
                    variant="subtitle2"
                  >
                    {t('revenue')}
                  </Typography>
                </Box>
              </Box>
              <Typography
                component="span"
                color="text.secondary"
                sx={{
                  opacity: 0.5,
                  display: 'flex',
                }}
              >
                <ChevronRightTwoToneIcon />
              </Typography>
            </CardActionAreaWrapper>
          </CardBorderBottom>
        </Grid>
        <Grid
          xs={12}
          md={3}
        >
          <CardBorderBottom
            sx={{
              boxShadow: theme.shadows[6],
              borderBottomColor: theme.palette.error.main,
            }}
          >
            <CardActionAreaWrapper>
              <Box component="span">
                <SubscriptionsTwoToneIcon
                  sx={{
                    color: 'error.main',
                  }}
                  fontSize="large"
                />
                <Box mt={0.5}>
                  <Typography
                    component="span"
                    variant="h4"
                  >
                    643
                  </Typography>{' '}
                  <Typography
                    component="span"
                    variant="subtitle2"
                  >
                    {t('sales')}
                  </Typography>
                </Box>
              </Box>
              <Typography
                component="span"
                color="text.secondary"
                sx={{
                  opacity: 0.5,
                  display: 'flex',
                }}
              >
                <ChevronRightTwoToneIcon />
              </Typography>
            </CardActionAreaWrapper>
          </CardBorderBottom>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Component;
