import { Box, Button, Card, CardHeader, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import TimelineAlternate from 'src/components/application-ui/timelines/alternate/alternate';

function UpcomingConsults() {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader
        title={t('Upcoming Consults')}
        action={
          <Button
            variant="outlined"
            size="small"
          >
            {t('View all')}
          </Button>
        }
      />
      <Divider />
      <Box p={{ xs: 2, sm: 3 }}>
        <TimelineAlternate />
      </Box>
    </Card>
  );
}

export default UpcomingConsults;
