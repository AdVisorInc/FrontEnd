import { Slider, Stack } from '@mui/material';
import React from 'react';

const Component = () => {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Stack
      justifyContent="center"
      spacing={{ xs: 2, sm: 3 }}
    >
      <Slider
        aria-label="Volume"
        value={value}
        onChange={handleChange}
      />
      <Slider
        disabled
        defaultValue={30}
        aria-label="Disabled slider"
      />
    </Stack>
  );
};

export default Component;
