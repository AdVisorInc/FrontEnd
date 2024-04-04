import { Card } from '@mui/material';
import { StaticDatePicker } from '@mui/x-date-pickers';

const Component = () => {
  return (
    <Card>
      <StaticDatePicker defaultValue={new Date()} />
    </Card>
  );
};

export default Component;
