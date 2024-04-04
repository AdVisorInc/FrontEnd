import { Card, CardContent, Divider, Stack } from '@mui/material';
import StateFilled from './state-secondary-filled';
import StateShadow from './state-secondary-shadow';
import StateSoft from './state-secondary-soft';

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
