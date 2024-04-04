import { ArrowForwardTwoTone } from '@mui/icons-material';
import { Box, Button, Card, CardHeader, Divider, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function Addresses() {
  const { t } = useTranslation();

  const addresses = {
    delivery: 12,
  };

  return (
    <Card>
      <CardHeader
        title={t('Delivery Addresses')}
        subheader={addresses.delivery + t(' saved addresses')}
      />
      <Divider />
      <Box p={2}>
        <Typography
          variant="caption"
          fontWeight={600}
        >
          {t('Favourite')}
        </Typography>
        <Box
          px={1.5}
          pb={2}
          pt={1}
        >
          <Typography
            variant="h5"
            gutterBottom
          >
            Kadin Westervelt
          </Typography>
          <Typography variant="subtitle1">348 Gold St. Bethel, PA 15102</Typography>
        </Box>
        <Button
          fullWidth
          variant="outlined"
          endIcon={<ArrowForwardTwoTone />}
        >
          {t('Manage')}
        </Button>
      </Box>
    </Card>
  );
}

export default Addresses;
