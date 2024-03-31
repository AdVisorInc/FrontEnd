import { Box, Button, Divider, FormGroup, FormLabel, Stack, Typography } from '@mui/material';
import ProfileFormStacked from './profile-form-stacked';

const Component = () => {
  return (
    <Stack spacing={{ xs: 2, sm: 3 }}>
      <Box>
        <FormGroup>
          <FormLabel>
            <Typography
              variant="h4"
              color="text.primary"
              fontWeight={600}
            >
              Profile
            </Typography>
            <Typography variant="subtitle1">Edit profile details using the fields below</Typography>
            <Divider sx={{ my: 2 }} />
          </FormLabel>
          <ProfileFormStacked />
          <Divider sx={{ my: { xs: 2, md: 3 } }} />
          <Stack
            direction="row"
            spacing={1}
          >
            <Button variant="contained">Save</Button>
            <Button color="secondary">Cancel</Button>
          </Stack>
        </FormGroup>
      </Box>
    </Stack>
  );
};

export default Component;
