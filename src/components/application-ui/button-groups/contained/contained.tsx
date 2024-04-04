import { Button, ButtonGroup, Divider, Stack } from '@mui/material';

const Component = () => {
  return (
    <>
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 3, md: 4 }}
        alignItems="center"
        direction={{ xs: 'column', md: 'row' }}
      >
        <ButtonGroup
          size="small"
          variant="contained"
          aria-label="aria-label"
        >
          <Button>Daily</Button>
          <Button>Weekly</Button>
          <Button>Monthly</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          aria-label="aria-label"
        >
          <Button>Daily</Button>
          <Button>Weekly</Button>
          <Button>Monthly</Button>
        </ButtonGroup>
        <ButtonGroup
          size="large"
          variant="contained"
          aria-label="aria-label"
        >
          <Button>Daily</Button>
          <Button>Weekly</Button>
          <Button>Monthly</Button>
        </ButtonGroup>
      </Stack>
      <Divider sx={{ my: { xs: 3, md: 4 } }} />
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 3, md: 4 }}
        alignItems="center"
        direction={{ xs: 'column', md: 'row' }}
      >
        <ButtonGroup
          size="small"
          variant="contained"
          color="secondary"
          aria-label="aria-label"
        >
          <Button>Daily</Button>
          <Button>Weekly</Button>
          <Button>Monthly</Button>
        </ButtonGroup>
        <ButtonGroup
          color="secondary"
          variant="contained"
          aria-label="aria-label"
        >
          <Button>Daily</Button>
          <Button>Weekly</Button>
          <Button>Monthly</Button>
        </ButtonGroup>
        <ButtonGroup
          size="large"
          color="secondary"
          variant="contained"
          aria-label="aria-label"
        >
          <Button>Daily</Button>
          <Button>Weekly</Button>
          <Button>Monthly</Button>
        </ButtonGroup>
      </Stack>
    </>
  );
};

export default Component;
