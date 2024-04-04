import { Slider, Stack } from '@mui/material';

const Component = () => {
  return (
    <Stack
      justifyContent="center"
      spacing={{ xs: 2, sm: 3 }}
    >
      <Slider
        valueLabelDisplay="on"
        defaultValue={75}
        aria-label="Normal"
      />
      <Slider
        valueLabelDisplay="on"
        size="small"
        defaultValue={50}
        aria-label="Small"
      />
      <Slider
        valueLabelDisplay="on"
        defaultValue={25}
        disabled
        aria-label="Disabled"
      />
    </Stack>
  );
};

export default Component;
