import { Button, Stack } from '@mui/material';

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Button size="small">Button text</Button>
      <Button>Button text</Button>
      <Button disabled>Disabled button</Button>
      <Button size="large">Button text</Button>
    </Stack>
  );
};

export default Component;
