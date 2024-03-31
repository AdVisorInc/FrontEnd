import { Card, CardContent, Divider, Stack } from '@mui/material';
import StateFilled from './state-info-filled';
import StateShadow from './state-info-shadow';
import StateSoft from './state-info-soft';

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
