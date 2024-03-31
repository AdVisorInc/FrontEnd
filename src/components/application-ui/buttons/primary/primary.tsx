import { Button, Stack } from '@mui/material';

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Button
        size="small"
        variant="contained"
      >
        Button text
      </Button>
      <Button variant="contained">Button text</Button>
      <Button
        disabled
        variant="contained"
      >
        Disabled button
      </Button>
      <Button
        size="large"
        variant="contained"
      >
        Button text
      </Button>
    </Stack>
  );
};

export default Component;
