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
        variant="outlined"
      >
        Button text
      </Button>
      <Button variant="outlined">Button text</Button>{' '}
      <Button
        disabled
        variant="outlined"
      >
        Disabled button
      </Button>
      <Button
        size="large"
        variant="outlined"
      >
        Button text
      </Button>
    </Stack>
  );
};

export default Component;
