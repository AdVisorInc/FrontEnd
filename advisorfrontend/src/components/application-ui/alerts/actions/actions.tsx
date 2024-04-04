import { Alert, Button, Stack } from '@mui/material';

const Component = () => {
  return (
    <Stack spacing={{ xs: 2, sm: 3 }}>
      <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
      <Alert
        action={
          <Button
            color="inherit"
            size="small"
          >
            UNDO
          </Button>
        }
      >
        This is a success alert — check it out!
      </Alert>
    </Stack>
  );
};

export default Component;
