import CheckIcon from '@mui/icons-material/Check';
import { Divider, Stack, ToggleButton } from '@mui/material';
import React from 'react';

const Component = () => {
  const [selected, setSelected] = React.useState(false);

  return (
    <>
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 3, md: 4 }}
        alignItems="center"
        direction={{ xs: 'column', md: 'row' }}
      >
        <ToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          <CheckIcon />
        </ToggleButton>
        <ToggleButton
          value="check"
          color="primary"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          <CheckIcon />
        </ToggleButton>
      </Stack>
      <Divider sx={{ my: { xs: 3, md: 4 } }} />
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 3, md: 4 }}
        alignItems="center"
        direction={{ xs: 'column', md: 'row' }}
      >
        <ToggleButton
          value="check"
          size="small"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          <CheckIcon />
        </ToggleButton>
        <ToggleButton
          value="check"
          color="primary"
          size="small"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          <CheckIcon />
        </ToggleButton>
      </Stack>
    </>
  );
};

export default Component;
