import {
  Divider,
  FilledInput,
  FormControl,
  FormGroup,
  FormLabel,
  Unstable_Grid2 as Grid,
  OutlinedInput,
  Typography,
} from '@mui/material';

const Component = () => {
  return (
    <FormGroup>
      <FormLabel htmlFor="name-input">
        <Typography
          variant="h5"
          color="text.primary"
        >
          User details
        </Typography>
        <Typography variant="subtitle2">Add the information you see fit</Typography>
        <Divider sx={{ my: 2 }} />
      </FormLabel>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
      >
        <Grid xs={12}>
          <FormControl
            fullWidth
            variant="outlined"
          >
            <Typography
              variant="h6"
              gutterBottom
              component="label"
              htmlFor="name-input"
              fontWeight={500}
            >
              Outlined
            </Typography>

            <OutlinedInput
              id="name-input"
              multiline
              maxRows={6}
              placeholder="Write your information"
            />
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <FormControl
            fullWidth
            variant="outlined"
          >
            <Typography
              variant="h6"
              gutterBottom
              component="label"
              htmlFor="name-input"
              fontWeight={500}
            >
              Filled
            </Typography>

            <FilledInput
              id="name-input"
              hiddenLabel
              multiline
              minRows={4}
              maxRows={8}
              placeholder="Write your information"
            />
          </FormControl>
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default Component;
