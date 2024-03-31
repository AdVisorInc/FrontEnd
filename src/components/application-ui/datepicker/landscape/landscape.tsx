import { Box, Card } from '@mui/material';
import { StaticDatePicker } from '@mui/x-date-pickers';

const Component = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Card>
        <StaticDatePicker
          orientation="landscape"
          defaultValue={new Date()}
        />
      </Card>
    </Box>
  );
};

export default Component;
