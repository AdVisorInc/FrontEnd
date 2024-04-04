import { Box, Button, styled, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const BoxUpgrade = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%) !important',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,

  '& img': {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
}));

function Component() {
  const { t } = useTranslation();

  return (
    <BoxUpgrade
      sx={{
        my: 4,
        py: 3,
        pr: { xs: 3, md: 12, lg: 17 },
        pl: 3,
        img: {
          width: {
            xs: 120,
            md: 150,
            lg: 'auto',
          },
        },
      }}
    >
      <Typography
        variant="h3"
        lineHeight={1.3}
        color="common.white"
        sx={{
          pb: 1,
        }}
      >
        {t('Upgrade to PRO Account')}
      </Typography>
      <Typography
        color="common.white"
        variant="subtitle2"
        sx={{
          pb: 2.5,
        }}
      >
        {t('Start your PRO subscription today for as low as $5/month')}
      </Typography>
      <Button
        variant="contained"
        size="small"
      >
        {t('Learn more')}
      </Button>
      <img
        src="/placeholders/illustrations/6.png"
        alt="..."
      />
    </BoxUpgrade>
  );
}

export default Component;
