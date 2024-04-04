import { Divider, Stack } from '@mui/material';
import { LinearProgressSlim } from 'src/components/base/styles/progress-bar';

const Component = () => {
  return (
    <Stack
      divider={<Divider />}
      spacing={{ xs: 2, sm: 3 }}
    >
      <LinearProgressSlim
        value={35}
        color="primary"
      />
      <LinearProgressSlim
        value={45}
        color="secondary"
      />
      <LinearProgressSlim
        value={55}
        color="error"
      />
      <LinearProgressSlim
        value={65}
        color="warning"
      />
      <LinearProgressSlim
        value={75}
        color="success"
      />
      <LinearProgressSlim
        value={85}
        color="info"
      />
    </Stack>
  );
};

export default Component;
