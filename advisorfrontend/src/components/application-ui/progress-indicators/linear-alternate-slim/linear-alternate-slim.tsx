import { Divider, Stack } from '@mui/material';
import { LinearProgressSlim } from 'src/components/base/styles/progress-bar';

const Component = () => {
  return (
    <Stack
      divider={<Divider />}
      spacing={{ xs: 2, sm: 3 }}
    >
      <LinearProgressSlim
        variant="determinate"
        value={35}
        color="primary"
      />
      <LinearProgressSlim
        variant="determinate"
        value={45}
        color="secondary"
      />
      <LinearProgressSlim
        variant="determinate"
        value={55}
        color="error"
      />
      <LinearProgressSlim
        variant="determinate"
        value={65}
        color="warning"
      />
      <LinearProgressSlim
        variant="determinate"
        value={75}
        color="success"
      />
      <LinearProgressSlim
        variant="determinate"
        value={85}
        color="info"
      />
    </Stack>
  );
};

export default Component;
