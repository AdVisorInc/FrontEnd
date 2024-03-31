import { Chip, Stack } from '@mui/material';

const Component = () => {
  return (
    <Stack
      py={2}
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Chip
        variant="outlined"
        color="primary"
        label="Chip"
      />
      <Chip
        variant="outlined"
        color="secondary"
        label="Chip"
      />
      <Chip
        variant="outlined"
        color="info"
        label="Chip"
      />
      <Chip
        variant="outlined"
        color="warning"
        label="Chip"
      />
      <Chip
        variant="outlined"
        color="error"
        label="Chip"
      />
      <Chip
        variant="outlined"
        color="success"
        label="Chip"
      />
    </Stack>
  );
};

export default Component;
