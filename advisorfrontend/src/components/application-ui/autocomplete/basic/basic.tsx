import {
  Autocomplete,
  Divider,
  FormControl,
  FormGroup,
  FormHelperText,
  FormLabel,
  Unstable_Grid2 as Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import EmptyStateBasicSmall from 'src/components/application-ui/empty-states/basic-small/empy-state-basic-small';

const noiseSuppressionOptions = [
  { label: 'Auto (Default)', value: 1 },
  { label: 'High', value: 2 },
  { label: 'Low', value: 3 },
  { label: 'Medium', value: 5 },
  { label: 'Off', value: 4 },
];

const audioDeviceOptions = [
  { label: 'Internal Mic and Speakers', value: 1 },
  { label: 'External Microphone', value: 3 },
  { label: 'Bluetooth Headset', value: 4 },
  { label: 'Custom setup', value: 2 },
];

const cameraOptions = [
  { label: 'FaceTime HD Camera', value: 1 },
  { label: 'External USB Webcam', value: 3 },
  { label: 'Virtual Camera', value: 2 },
  { label: 'Integrated Camera', value: 4 },
];

const ringerOptions = [
  { label: 'Macbook Pro Speakers (Built-in)', value: 1 },
  { label: 'External Speakers', value: 3 },
  { label: 'Dell U2722DE (DisplayPort)', value: 2 },
  { label: 'Monitor Speakers', value: 4 },
];

const Component = () => {
  const [noiseSuppression, setNoiseSuppression] = useState(null);
  const [audioDevices] = useState(null);
  const [camera, setCamera] = useState(null);
  const [ringer, setRinger] = useState(null);

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
              htmlFor="noise-suppression-auto-complete"
              fontWeight={500}
            >
              Noise suppression
            </Typography>
            <Autocomplete
              options={noiseSuppressionOptions}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    id: 'noise-suppression-auto-complete',
                  }}
                  placeholder="Search and select..."
                />
              )}
              value={noiseSuppression}
              onChange={(event, newValue) => {
                setNoiseSuppression(newValue);
              }}
              isOptionEqualToValue={(option, value) => option.value === value.value}
              noOptionsText={<EmptyStateBasicSmall />}
              disableCloseOnSelect
            />
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
              htmlFor="audio-devices-auto-complete"
              fontWeight={500}
            >
              Audio devices
            </Typography>
            <Autocomplete
              options={audioDeviceOptions}
              getOptionLabel={(option) => option.label}
              disabled
              renderInput={(params) => (
                <TextField
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    id: 'audio-devices-auto-complete',
                  }}
                  placeholder="Select device..."
                />
              )}
              value={audioDevices}
              isOptionEqualToValue={(option, value) => option.value === value.value}
            />
            <FormHelperText>Disabled autocomplete select</FormHelperText>
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
              htmlFor="camera-auto-complete"
              fontWeight={500}
            >
              Camera
            </Typography>
            <Autocomplete
              options={cameraOptions}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    id: 'camera-auto-complete',
                  }}
                  placeholder="Select camera..."
                  size="small"
                />
              )}
              value={camera}
              onChange={(event, newValue) => {
                setCamera(newValue);
              }}
              isOptionEqualToValue={(option, value) => option.value === value.value}
              noOptionsText={<EmptyStateBasicSmall />}
            />
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
              htmlFor="ringer-auto-complete"
              fontWeight={500}
            >
              Ringer
            </Typography>
            <Autocomplete
              options={ringerOptions}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  error
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    id: 'ringer-auto-complete',
                  }}
                  placeholder="Choose a ringer..."
                  size="small"
                />
              )}
              value={ringer}
              onChange={(event, newValue) => {
                setRinger(newValue);
              }}
              isOptionEqualToValue={(option, value) => option.value === value.value}
              noOptionsText={<EmptyStateBasicSmall />}
            />
            <FormHelperText>Please select a ringer</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default Component;
