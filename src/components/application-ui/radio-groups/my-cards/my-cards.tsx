import { Box, Card, CardHeader, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import MyCardsSelect from './my-cards-select';

const data = {
  savedCards: 7,
};

const Component = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <CardHeader
        subheader={data.savedCards + ' ' + t('saved cards')}
        title={t('Cards')}
      />
      <Divider />
      <Box p={2}>
        <MyCardsSelect />
      </Box>
    </Card>
  );
};

export default Component;
