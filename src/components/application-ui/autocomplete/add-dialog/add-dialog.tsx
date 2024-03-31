import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ImportantDevicesRoundedIcon from '@mui/icons-material/ImportantDevicesRounded';
import ReportTwoToneIcon from '@mui/icons-material/ReportTwoTone';
import {
  alpha,
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  createFilterOptions,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  FormControl,
  FormGroup,
  FormHelperText,
  FormLabel,
  Unstable_Grid2 as Grid,
  IconButton,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import toast from 'react-hot-toast';
import EmptyStateBasicSmall from 'src/components/application-ui/empty-states/basic-small/empy-state-basic-small';
import { AvatarState } from 'src/components/base/styles/avatar';

const noiseSuppressionOptions = [
  { label: 'Auto (Default)', value: 1 },
  { label: 'High', value: 2 },
  { label: 'Low', value: 3 },
  { label: 'Medium', value: 5 },
  { label: 'Off', value: 4 },
];

const filter = createFilterOptions({
  matchFrom: 'start',
  stringify: (option: { label: string; value: number }) => option.label,
});

const Component = () => {
  const [noiseSuppression, setNoiseSuppression] = useState(null);
  const [open, setOpen] = useState(false);
  const [dialogValue, setDialogValue] = useState('');
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handleClose = () => {
    setDialogValue('');
    setOpen(false);
  };

  const handleAddOption = (label: string) => {
    handleClose();
    toast.custom(
      (t) => (
        <Card
          elevation={21}
          className={`${t.visible ? 'animate-enter' : 'animate-leave'}`}
        >
          <CardContent
            sx={{
              position: 'relative',
              minWidth: 300,
              maxWidth: 360,
              display: 'flex',
            }}
          >
            <AvatarState
              state="success"
              variant="rounded"
              useShadow
              sx={{
                width: 38,
                height: 38,
                mt: 0.4,
              }}
            >
              <ReportTwoToneIcon fontSize="small" />
            </AvatarState>
            <Box ml={2}>
              <Typography
                fontWeight={600}
                variant="h6"
                gutterBottom
              >
                Device added
              </Typography>

              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Dummy notification here.
              </Typography>
            </Box>
            <IconButton
              sx={{
                ml: 2,
                p: 0.2,
                position: 'absolute',
                right: (theme) => theme.spacing(1),
                top: (theme) => theme.spacing(1),
              }}
              size="small"
              onClick={() => toast.dismiss(t.id)}
            >
              <CloseRoundedIcon fontSize="inherit" />
            </IconButton>
          </CardContent>
        </Card>
      ),
      {
        position: 'top-right',
      }
    );
  };

  return (
    <>
      <FormGroup>
        <FormLabel htmlFor="name-input">
          <Typography
            variant="h5"
            color="text.primary"
          >
            Device settings
          </Typography>
          <Typography variant="subtitle2">
            Write something that doesn't exist and click on Add button.
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
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);

                  if (params.inputValue !== '') {
                    filtered.push({
                      //@ts-ignore
                      inputValue: params.inputValue,
                      label: `Add "${params.inputValue}"`,
                      value: noiseSuppressionOptions.length,
                    });
                  }

                  return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                getOptionLabel={(option) => {
                  if (typeof option === 'string') {
                    return option;
                  }
                  if (option.inputValue) {
                    return option.inputValue;
                  }
                  return option.label;
                }}
                renderOption={(props, option) => <li {...props}>{option.label}</li>}
                renderInput={(params) => <TextField {...params} />}
                value={noiseSuppression}
                onChange={(event, newValue) => {
                  if (typeof newValue === 'string') {
                    setNoiseSuppression({
                      label: newValue,
                      value: noiseSuppressionOptions.length,
                    });
                  } else if (newValue && newValue.inputValue) {
                    setOpen(true);
                    setDialogValue(newValue.inputValue);
                  } else {
                    setNoiseSuppression(newValue);
                  }
                }}
                noOptionsText={<EmptyStateBasicSmall />}
              />
              <FormHelperText>Choose Low if you want others to hear music.</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </FormGroup>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="basic-dialog-title"
        maxWidth="sm"
        fullWidth
        sx={{
          '.MuiDialog-container': {
            alignItems: { xs: 'flex-end', sm: 'center' },
          },
        }}
      >
        <DialogContent>
          <Stack
            p={{ xs: 0, sm: 1 }}
            spacing={2}
            justifyContent="stretch"
            direction={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'center', sm: 'flex-start' }}
          >
            <AvatarState
              state="success"
              isSoft
              sx={{
                width: 54,
                height: 54,
              }}
            >
              <ImportantDevicesRoundedIcon sx={{ fontSize: 24 }} />
            </AvatarState>
            <Box
              flex={1}
              pt={{ xs: 0, sm: 0.5 }}
              textAlign={{ xs: 'center', sm: 'left' }}
            >
              <Typography
                variant="h5"
                gutterBottom
              >
                Add new device
              </Typography>
              <Typography
                color="text.secondary"
                variant="subtitle2"
              >
                Are you sure you want to add a new device to the list?
              </Typography>
              <FormControl
                sx={{ mt: 2 }}
                fullWidth
              >
                <OutlinedInput
                  autoFocus
                  margin="dense"
                  id="add-noise-suppression"
                  value={dialogValue}
                  onChange={(event) => setDialogValue(event.target.value)}
                  type="text"
                />
              </FormControl>
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
            flexDirection: { xs: 'column-reverse', sm: 'row' },

            '& > :not(:first-of-type)': {
              marginLeft: { xs: 0, sm: theme.spacing(1) },
              marginBottom: { xs: theme.spacing(1), sm: 0 },
            },
          }}
        >
          <Button
            variant="outlined"
            color="secondary"
            fullWidth={!smUp}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => handleAddOption(dialogValue)}
            fullWidth={!smUp}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Component;
