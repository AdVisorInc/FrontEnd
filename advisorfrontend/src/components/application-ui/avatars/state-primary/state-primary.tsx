import { Card, CardContent, Divider, Stack } from '@mui/material';
import StateFilled from './state-primary-filled';
import StateShadow from './state-primary-shadow';
import StateSoft from './state-primary-soft';

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
