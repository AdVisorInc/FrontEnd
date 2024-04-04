import { Box, Divider, Stack } from '@mui/material';
import SelectQuantity from './select-quantity';
import SelectQuantityAlternate from './select-quantity-alternate';
import SelectQuantityPrimary from './select-quantity-primary';

const Component = () => {
  return (
    <Stack
      spacing={{ xs: 2, sm: 3 }}
      divider={<Divider flexItem />}
      alignItems="center"
    >
      <Box maxWidth={148}>
        <SelectQuantity />
      </Box>
      <Box maxWidth={148}>
        <SelectQuantityPrimary />
      </Box>
      <SelectQuantityAlternate />
    </Stack>
  );
};

export default Component;
