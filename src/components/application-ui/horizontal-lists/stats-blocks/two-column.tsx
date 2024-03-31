import { Box, Card, Divider, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';

function TwoColumnStats() {
  const { t } = useTranslation();
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Card>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        divider={
          <Divider
            orientation={smUp ? 'vertical' : 'horizontal'}
            flexItem
          />
        }
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Box
          sx={{
            width: '100%',
          }}
          p={{ xs: 2, sm: 3 }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h5">{t('Sales')}</Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              {t('Total average weekly report')}
            </Typography>
          </Box>
          <Typography
            variant="h4"
            color="primary.main"
          >
            64.543
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
          }}
          p={{ xs: 2, sm: 3 }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h5">{t('Orders')}</Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              {t('Total products ordered')}
            </Typography>
          </Box>
          <Typography
            variant="h4"
            color="info.main"
          >
            745
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}

export default TwoColumnStats;
