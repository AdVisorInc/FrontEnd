import { Button, Divider, Stack } from '@mui/material';

const Component = () => {
  return (
    <>
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Button
          color="error"
          variant="contained"
        >
          Error button
        </Button>
        <Button
          color="success"
          variant="contained"
        >
          Success
        </Button>
        <Button
          color="warning"
          variant="contained"
        >
          Warning
        </Button>
        <Button
          color="info"
          variant="contained"
        >
          Info
        </Button>
      </Stack>
      <Divider sx={{ my: 4 }} />
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Button
          color="error"
          variant="outlined"
        >
          Error button
        </Button>
        <Button
          color="success"
          variant="outlined"
        >
          Success
        </Button>
        <Button
          color="warning"
          variant="outlined"
        >
          Warning
        </Button>
        <Button
          color="info"
          variant="outlined"
        >
          Info
        </Button>
      </Stack>
    </>
  );
};

export default Component;
