import { Rating, Stack } from '@mui/material';

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Rating
        name="size-small"
        defaultValue={2}
        size="small"
      />
      <Rating
        name="size-medium"
        defaultValue={2}
      />
      <Rating
        name="size-large"
        defaultValue={2}
        size="large"
      />
    </Stack>
  );
};

export default Component;
