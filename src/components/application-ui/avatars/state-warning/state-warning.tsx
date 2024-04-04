import { Card, CardContent, Divider, Stack } from '@mui/material';
import StateFilled from './state-warning-filled';
import StateShadow from './state-warning-shadow';
import StateSoft from './state-warning-soft';

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
