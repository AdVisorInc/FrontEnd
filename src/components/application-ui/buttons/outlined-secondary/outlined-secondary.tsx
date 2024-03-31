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
        variant="outlined"
      >
        Button text
      </Button>
      <Button
        color="secondary"
        variant="outlined"
      >
        Button text
      </Button>
      <Button
        disabled
        color="secondary"
        variant="outlined"
      >
        Disabled button
      </Button>
      <Button
        size="large"
        color="secondary"
        variant="outlined"
      >
        Button text
      </Button>
    </Stack>
  );
};

export default Component;
