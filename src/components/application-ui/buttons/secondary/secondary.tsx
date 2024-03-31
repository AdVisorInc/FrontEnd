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
        color="secondary"
        variant="contained"
      >
        Button text
      </Button>
      <Button
        color="secondary"
        variant="contained"
      >
        Button text
      </Button>
      <Button
        disabled
        color="secondary"
        variant="contained"
      >
        Disabled button
      </Button>
      <Button
        size="large"
        color="secondary"
        variant="contained"
      >
        Button text
      </Button>
    </Stack>
  );
};

export default Component;
