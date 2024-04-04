import { Chip, Divider, Stack } from '@mui/material';

const Component = () => {
  return (
    <>
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Chip
          size="small"
          color="primary"
          label="Chip"
        />
        <Chip
          size="small"
          color="secondary"
          label="Chip"
        />
        <Chip
          size="small"
          color="info"
          label="Chip"
        />
        <Chip
          size="small"
          color="warning"
          label="Chip"
        />
        <Chip
          size="small"
          color="error"
          label="Chip"
        />
        <Chip
          size="small"
          color="success"
          label="Chip"
        />
      </Stack>
      <Divider sx={{ my: { xs: 3, md: 4 } }} />
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Chip
          color="primary"
          label="Chip"
        />
        <Chip
          color="secondary"
          label="Chip"
        />
        <Chip
          color="info"
          label="Chip"
        />
        <Chip
          color="warning"
          label="Chip"
        />
        <Chip
          color="error"
          label="Chip"
        />
        <Chip
          color="success"
          label="Chip"
        />
      </Stack>
    </>
  );
};

export default Component;
