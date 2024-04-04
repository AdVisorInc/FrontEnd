import { Skeleton, Stack } from '@mui/material';

const Component = () => {
  return (
    <Stack
      spacing={1}
      direction="column"
    >
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Stack>
  );
};

export default Component;
