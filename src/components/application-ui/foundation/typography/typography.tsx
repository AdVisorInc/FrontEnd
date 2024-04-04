import { Divider, Stack, Typography } from '@mui/material';

const Component = () => {
  return (
    <Stack
      divider={<Divider />}
      spacing={{ xs: 2, sm: 3 }}
    >
      <Typography
        color="text.primary"
        variant="h1"
        gutterBottom
      >
        h1. Heading
      </Typography>
      <Typography
        color="text.primary"
        variant="h2"
        gutterBottom
      >
        h2. Heading
      </Typography>
      <Typography
        color="text.primary"
        variant="h3"
        gutterBottom
      >
        h3. Heading
      </Typography>
      <Typography
        color="text.primary"
        variant="h4"
        gutterBottom
      >
        h4. Heading
      </Typography>
      <Typography
        color="text.primary"
        variant="h5"
        gutterBottom
      >
        h5. Heading
      </Typography>
      <Typography
        color="text.primary"
        variant="h6"
        gutterBottom
      >
        h6. Heading
      </Typography>
      <Typography
        color="text.primary"
        variant="subtitle1"
        gutterBottom
      >
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography
        color="text.primary"
        variant="subtitle2"
        gutterBottom
      >
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography
        color="text.primary"
        variant="body1"
        gutterBottom
      >
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography
        color="text.primary"
        variant="body2"
        gutterBottom
      >
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>

      <Typography
        color="text.primary"
        variant="caption"
        display="block"
        gutterBottom
      >
        caption text
      </Typography>
      <Typography
        color="text.primary"
        variant="overline"
        display="block"
        gutterBottom
      >
        overline text
      </Typography>
    </Stack>
  );
};

export default Component;
