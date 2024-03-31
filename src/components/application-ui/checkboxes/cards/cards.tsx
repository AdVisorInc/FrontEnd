import { Divider } from '@mui/material';
import CheckboxCardsGroupHidden from './cards-group-hidden';
import CheckboxCardsGroupLeft from './cards-group-left';
import CheckboxCardsGroupRight from './cards-group-right';

const Component = () => {
  return (
    <>
      <CheckboxCardsGroupHidden />
      <Divider
        sx={{
          my: { xs: 2, sm: 3 },
        }}
      />
      <CheckboxCardsGroupLeft />
      <Divider
        sx={{
          my: { xs: 2, sm: 3 },
        }}
      />
      <CheckboxCardsGroupRight />
    </>
  );
};

export default Component;
