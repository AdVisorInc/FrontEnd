import {
  Card,
  CardContent,
  Divider,
  FormControl,
  FormGroup,
  FormHelperText,
  FormLabel,
  Unstable_Grid2 as Grid,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';

const Component = () => {
  return (
    <Card>
      <FormGroup>
        <FormLabel
          sx={{ p: 2 }}
          htmlFor="name-input"
        >
          <Typography
            variant="h5"
            color="text.primary"
          >
            Device settings
          </Typography>
          <Typography variant="subtitle2">
            Manage device settings from a single central place
          </Typography>
        </FormLabel>
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
          >
            <Grid
              xs={12}
              md={6}
            >
              <FormControl
                fullWidth
                hiddenLabel
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  component="label"
                  htmlFor="noise-suppression-select-native"
                  fontWeight={500}
                >
                  Noise suppression
                </Typography>

                <Select
                  variant="filled"
                  defaultValue={1}
                  inputProps={{
                    name: 'noise-suppression',
                    id: 'noise-suppression-select-native',
                  }}
                >
                  <MenuItem value={1}>Auto (Default)</MenuItem>
                  <MenuItem value={2}>High</MenuItem>
                  <MenuItem value={3}>Low</MenuItem>
                  <MenuItem value={4}>Off</MenuItem>
                </Select>
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
                hiddenLabel
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

                <Select
                  variant="filled"
                  defaultValue={1}
                  inputProps={{
                    name: 'audio-devices',
                    id: 'audio-devices-select-native',
                  }}
                >
                  <MenuItem value={1}>Internal Mic and Speakers</MenuItem>
                  <MenuItem value={2}>Custom setup</MenuItem>
                </Select>
                <FormHelperText>Disabled native select</FormHelperText>
              </FormControl>
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <FormControl
                fullWidth
                hiddenLabel
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

                <Select
                  variant="filled"
                  defaultValue={1}
                  inputProps={{
                    name: 'camera',
                    id: 'camera-select-native',
                  }}
                >
                  <MenuItem value={1}>FaceTime HD Camera</MenuItem>
                  <MenuItem value={2}>Virtual Camera</MenuItem>
                </Select>
                <FormHelperText>Small native select</FormHelperText>
              </FormControl>
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <FormControl
                fullWidth
                hiddenLabel
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

                <Select
                  variant="filled"
                  defaultValue={0}
                  inputProps={{
                    name: 'camera',
                    id: 'camera-select-native',
                  }}
                >
                  <MenuItem value={1}>Macbook Pro Speakers (Built-in)</MenuItem>
                  <MenuItem value={2}>Dell U2722DE (DisplayPort)</MenuItem>
                </Select>
                <FormHelperText>Please select a ringer</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
      </FormGroup>
    </Card>
  );
};

export default Component;
