import { Card, Stack } from '@mui/material';
import AutomationSearch from './automation-search';
import SearchBasic from './search-basic';
import SearchContained from './search-contained';
import SearchWithButton from './search-with-button';

const Component = () => {
  return (
    <Stack
      spacing={{ xs: 2, sm: 3 }}
      direction="column"
    >
      <Card>
        <SearchBasic />
      </Card>
      <SearchWithButton />
      <SearchContained />
      <AutomationSearch />
    </Stack>
  );
};

export default Component;
