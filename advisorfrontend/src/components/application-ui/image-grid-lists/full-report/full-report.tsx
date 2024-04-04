import { Avatar, Box, Button, Card, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function FullReport() {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        p: { xs: 2, md: 3 },
      }}
    >
      <Stack
        spacing={1}
        direction={{ xs: 'column-reverse', md: 'row' }}
      >
        <Box>
          <Typography
            variant="h4"
            gutterBottom
          >
            {t('Want full report?')}
          </Typography>
          <Typography
            sx={{
              mb: 2,
            }}
            variant="body1"
          >
            {t('Get it today by clicking the button below.')}
          </Typography>
          <Button variant="outlined">{t('Download now')}</Button>
        </Box>
        <Avatar
          variant="square"
          sx={{
            width: (theme) => theme.spacing(14),
            height: (theme) => theme.spacing(14),

            img: {
              height: 'auto',
              width: (theme) => theme.spacing(14),
            },
          }}
          src="/placeholders/illustrations/5.svg"
        />
      </Stack>
    </Card>
  );
}

export default FullReport;
