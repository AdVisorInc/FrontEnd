import { Divider, Stack } from '@mui/material';
import RadioSmallCardsLens from './small-cards-lens';
import RadioSmallCardsList from './small-cards-list';
import RadioSmallCardsMemory from './small-cards-memory';

const Component = () => {
  return (
    <Stack
      spacing={{ xs: 2, sm: 3 }}
      divider={<Divider flexItem />}
      alignItems="center"
    >
      <RadioSmallCardsList />
      <RadioSmallCardsMemory />
      <RadioSmallCardsLens />
    </Stack>
  );
};

export default Component;
