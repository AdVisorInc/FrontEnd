import { Divider, Stack } from '@mui/material';
import { LinearProgressAlternate } from 'src/components/base/styles/progress-bar';

const Component = () => {
  return (
    <Stack
      divider={<Divider />}
      spacing={{ xs: 2, sm: 3 }}
    >
      <LinearProgressAlternate
        variant="determinate"
        value={35}
        color="primary"
      />
      <LinearProgressAlternate
        variant="determinate"
        value={45}
        color="secondary"
      />
      <LinearProgressAlternate
        variant="determinate"
        value={55}
        color="error"
      />
      <LinearProgressAlternate
        variant="determinate"
        value={65}
        color="warning"
      />
      <LinearProgressAlternate
        variant="determinate"
        value={75}
        color="success"
      />
      <LinearProgressAlternate
        variant="determinate"
        value={85}
        color="info"
      />
    </Stack>
  );
};

export default Component;
