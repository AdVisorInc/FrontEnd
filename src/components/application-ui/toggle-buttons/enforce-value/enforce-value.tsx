import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import LaptopIcon from '@mui/icons-material/Laptop';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import TvIcon from '@mui/icons-material/Tv';
import { Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';

type Alignment = 'left' | 'center' | 'right';
type Devices = 'laptop' | 'tv' | 'phone';

const Component = () => {
  const [alignment, setAlignment] = React.useState<Alignment>('left');
  const [devices, setDevices] = React.useState<Devices[]>(['phone']);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: Alignment | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleDevices = (event: React.MouseEvent<HTMLElement>, newDevices: Devices[]) => {
    if (newDevices.length) {
      setDevices(newDevices);
    }
  };

  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 3, md: 4 }}
      alignItems="center"
      direction={{ xs: 'column', md: 'row' }}
    >
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton
          value="left"
          aria-label="left aligned"
        >
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton
          value="center"
          aria-label="centered"
        >
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton
          value="right"
          aria-label="right aligned"
        >
          <FormatAlignRightIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <ToggleButtonGroup
        color="primary"
        value={devices}
        onChange={handleDevices}
        aria-label="device"
      >
        <ToggleButton
          value="laptop"
          aria-label="laptop"
        >
          <LaptopIcon />
        </ToggleButton>
        <ToggleButton
          value="tv"
          aria-label="tv"
        >
          <TvIcon />
        </ToggleButton>
        <ToggleButton
          value="phone"
          aria-label="phone"
        >
          <PhoneAndroidIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default Component;
