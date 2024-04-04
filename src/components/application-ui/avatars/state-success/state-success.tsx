import { Card, CardContent, Divider, Stack } from '@mui/material';
import StateFilled from './state-success-filled';
import StateShadow from './state-success-shadow';
import StateSoft from './state-success-soft';

const Component = () => {
  return (
    <Card>
      <CardContent>
        <Stack
          spacing={2}
          divider={<Divider variant="middle" />}
        >
          <StateFilled />
          <StateShadow />
          <StateSoft />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Component;
