import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
import { Box, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CardBorderColor } from 'src/components/base/styles/card-border-color';

function Component() {
  const { t } = useTranslation();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        sm={6}
        md={3}
      >
        <CardBorderColor
          borderColor="primary"
          borderPosition="bottom"
          sx={{
            py: 3,
            textAlign: 'center',
          }}
        >
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
        </CardBorderColor>
      </Grid>
      <Grid
        xs={12}
        sm={6}
        md={3}
      >
        <CardBorderColor
          borderColor="error"
          borderPosition="bottom"
          sx={{
            py: 3,
            textAlign: 'center',
          }}
        >
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
        </CardBorderColor>
      </Grid>
      <Grid
        xs={12}
        sm={6}
        md={3}
      >
        <CardBorderColor
          borderColor="secondary"
          borderPosition="top"
          sx={{
            py: 3,
            textAlign: 'center',
          }}
        >
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
        </CardBorderColor>
      </Grid>
      <Grid
        xs={12}
        sm={6}
        md={3}
      >
        <CardBorderColor
          borderColor="info"
          borderPosition="top"
          sx={{
            py: 3,
            textAlign: 'center',
          }}
        >
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
        </CardBorderColor>
      </Grid>
    </Grid>
  );
}

export default Component;
