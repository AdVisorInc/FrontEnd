import {
  Divider,
  FormControl,
  FormGroup,
  FormHelperText,
  FormLabel,
  Unstable_Grid2 as Grid,
  NativeSelect,
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
          Device settings
        </Typography>
        <Typography variant="subtitle2">
          Manage device settings from a single central place
        </Typography>
        <Divider sx={{ my: 2 }} />
      </FormLabel>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
      >
        <Grid
          xs={12}
          md={6}
        >
          <FormControl fullWidth>
            <Typography
              variant="h6"
              gutterBottom
              component="label"
              htmlFor="noise-suppression-select-native"
              fontWeight={500}
            >
              Noise suppression
            </Typography>

            <NativeSelect
              sx={{ '&.MuiInputBase-root': { mt: 0 } }}
              defaultValue={1}
              inputProps={{
                name: 'noise-suppression',
                id: 'noise-suppression-select-native',
              }}
            >
              <option value={1}>Auto (Default)</option>
              <option value={2}>High</option>
              <option value={3}>Low</option>
              <option value={4}>Off</option>
            </NativeSelect>
            <FormHelperText>Choose Low if you want others to hear music.</FormHelperText>
          </FormControl>
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
          <FormControl
            disabled
            fullWidth
          >
            <Typography
              variant="h6"
              gutterBottom
              component="label"
              htmlFor="audio-devices-select-native"
              fontWeight={500}
            >
              Audio devices
            </Typography>

            <NativeSelect
              sx={{ '&.MuiInputBase-root': { mt: 0 } }}
              defaultValue={1}
              inputProps={{
                name: 'audio-devices',
                id: 'audio-devices-select-native',
              }}
            >
              <option value={1}>Internal Mic and Speakers</option>
              <option value={2}>Custom setup</option>
            </NativeSelect>
            <FormHelperText>Disabled native select</FormHelperText>
          </FormControl>
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
          <FormControl
            fullWidth
            size="small"
          >
            <Typography
              variant="h6"
              gutterBottom
              component="label"
              htmlFor="camera-select-native"
              fontWeight={500}
            >
              Camera
            </Typography>

            <NativeSelect
              sx={{ '&.MuiInputBase-root': { mt: 0 } }}
              defaultValue={1}
              inputProps={{
                name: 'camera',
                id: 'camera-select-native',
              }}
            >
              <option value={1}>FaceTime HD Camera</option>
              <option value={2}>Virtual Camera</option>
            </NativeSelect>
            <FormHelperText>Small native select</FormHelperText>
          </FormControl>
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
          <FormControl
            fullWidth
            size="small"
            error
          >
            <Typography
              variant="h6"
              gutterBottom
              component="label"
              htmlFor="ringer-native"
              fontWeight={500}
            >
              Ringer
            </Typography>

            <NativeSelect
              sx={{ '&.MuiInputBase-root': { mt: 0 } }}
              defaultValue={0}
              inputProps={{
                name: 'camera',
                id: 'camera-select-native',
              }}
            >
              <option value={1}>Macbook Pro Speakers (Built-in)</option>
              <option value={2}>Dell U2722DE (DisplayPort)</option>
            </NativeSelect>
            <FormHelperText>Please select a ringer</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default Component;
