import { Card, CardContent, Divider, Stack } from '@mui/material';
import StateShadow from './state-error-shadow';
import StateSoft from './state-error-soft';
import StateFilled from './state-filled';

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
