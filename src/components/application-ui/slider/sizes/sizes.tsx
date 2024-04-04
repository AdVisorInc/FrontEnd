import { Slider, Stack } from '@mui/material';

const Component = () => {
  return (
    <Stack
      justifyContent="center"
      spacing={{ xs: 2, sm: 3 }}
    >
      <Slider
        valueLabelDisplay="auto"
        size="small"
        defaultValue={75}
        aria-label="Small"
      />
      <Slider
        valueLabelDisplay="auto"
        defaultValue={50}
        aria-label="Default"
      />
    </Stack>
  );
};

export default Component;
