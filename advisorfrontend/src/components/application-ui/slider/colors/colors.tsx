import { Slider, Stack } from '@mui/material';

const Component = () => {
  return (
    <Stack
      justifyContent="center"
      spacing={{ xs: 2, sm: 3 }}
    >
      <Slider
        defaultValue={10}
        aria-label="Primary"
      />
      <Slider
        color="secondary"
        defaultValue={20}
        aria-label="Secondary"
      />
      <Slider
        color="error"
        defaultValue={30}
        aria-label="Error"
      />
      <Slider
        color="warning"
        defaultValue={40}
        aria-label="Warning"
      />
      <Slider
        color="success"
        defaultValue={50}
        aria-label="Success"
      />
      <Slider
        color="info"
        defaultValue={60}
        aria-label="Info"
      />
    </Stack>
  );
};

export default Component;
