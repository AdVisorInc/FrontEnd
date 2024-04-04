import { Card, CardHeader, Divider } from '@mui/material';
import SelectedDropdown from './selected-dropdown';

const Component = () => {
  return (
    <Card>
      <CardHeader title="Select user" />
      <Divider />
      <SelectedDropdown />
    </Card>
  );
};

export default Component;
