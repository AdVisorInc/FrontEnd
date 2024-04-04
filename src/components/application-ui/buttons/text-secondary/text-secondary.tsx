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
      >
        Button text
      </Button>
      <Button color="secondary">Button text</Button>
      <Button
        disabled
        color="secondary"
      >
        Disabled button
      </Button>
      <Button
        size="large"
        color="secondary"
      >
        Button text
      </Button>
    </Stack>
  );
};

export default Component;
