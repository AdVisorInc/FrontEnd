import { Divider } from '@mui/material';
import RadioCardsGroupHidden from './cards-group-hidden';
import RadioCardsGroupLeft from './cards-group-left';
import RadioCardsGroupRight from './cards-group-right';

const Component = () => {
  return (
    <>
      <RadioCardsGroupHidden />
      <Divider
        sx={{
          my: { xs: 2, sm: 3 },
        }}
      />
      <RadioCardsGroupLeft />
      <Divider
        sx={{
          my: { xs: 2, sm: 3 },
        }}
      />
      <RadioCardsGroupRight />
    </>
  );
};

export default Component;
