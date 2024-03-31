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
        name="half-rating"
        defaultValue={2.5}
        precision={0.5}
      />
      <Rating
        name="half-rating"
        defaultValue={2.2}
        precision={0.2}
      />
      <Rating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        readOnly
      />
    </Stack>
  );
};

export default Component;
