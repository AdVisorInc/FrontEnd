import { Box, Button, Card, CardHeader, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function MonthlyGoals() {
  const { t } = useTranslation();

  return (
    <Card>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={2}
        pt={2}
      >
        <Typography variant="h5">
          {t('Monthly Goals')}{' '}
          <Typography
            variant="body2"
            component="span"
            fontWeight={700}
            color="text.secondary"
          >
            ({t('manual')})
          </Typography>
        </Typography>
        <Button
          variant="contained"
          color="secondary"
        >
          {t('Setup')}
        </Button>
      </Box>
      <Stack
        direction={{ xs: 'column-reverse', md: 'row' }}
        flex={1}
        px={{ xs: 0, md: 2 }}
        pt={2}
        width="100%"
      >
        <Box
          display="flex"
          justifyContent="center"
          mt={{ xs: 2, md: 0 }}
        >
          <img
            src="/placeholders/illustrations/3.svg"
            alt="..."
            style={{ height: '100%' }}
          />
        </Box>

        <Box
          ml={2}
          flex={1}
        >
          <Box
            sx={{
              pb: 2,
            }}
          >
            <Typography variant="h4">{t('Achieved')}</Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              {t('30% of $5000 manual set goal')}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4">{t('Forecasted')}</Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              {t('February Sales:')} $32,594.00
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Card>
  );
}

export default MonthlyGoals;
