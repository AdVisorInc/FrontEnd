import { Skeleton, Stack } from '@mui/material';

const Component = () => {
  return (
    <Stack
      spacing={1}
      direction="column"
    >
      <Skeleton
        variant="text"
        sx={{ fontSize: '1rem' }}
      />
      <Skeleton
        variant="circular"
        width={40}
        height={40}
      />
      <Skeleton
        variant="rectangular"
        height={60}
      />
      <Skeleton
        variant="rounded"
        height={60}
      />
    </Stack>
  );
};

export default Component;
