import { Divider, LinearProgress, Stack } from '@mui/material';

const Component = () => {
  return (
    <Stack
      divider={<Divider />}
      spacing={{ xs: 2, sm: 3 }}
    >
      <LinearProgress
        variant="determinate"
        value={35}
        color="primary"
      />
      <LinearProgress
        variant="determinate"
        value={45}
        color="secondary"
      />
      <LinearProgress
        variant="determinate"
        value={55}
        color="error"
      />
      <LinearProgress
        variant="determinate"
        value={65}
        color="warning"
      />
      <LinearProgress
        variant="determinate"
        value={75}
        color="success"
      />
      <LinearProgress
        variant="determinate"
        value={85}
        color="info"
      />
    </Stack>
  );
};

export default Component;
