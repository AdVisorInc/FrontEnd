import CloudIcon from '@mui/icons-material/Cloud';
import FaceIcon from '@mui/icons-material/Face';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import PetsIcon from '@mui/icons-material/Pets';
import SettingsIcon from '@mui/icons-material/Settings';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Chip, Stack } from '@mui/material';

const Component = () => {
  return (
    <Stack
      py={2}
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Chip
        variant="outlined"
        icon={<FaceIcon fontSize="inherit" />}
        color="primary"
        label="Chip"
      />
      <Chip
        variant="outlined"
        icon={<PetsIcon fontSize="inherit" />}
        color="secondary"
        label="Chip"
      />
      <Chip
        variant="outlined"
        icon={<CloudIcon fontSize="inherit" />}
        color="info"
        label="Chip"
      />
      <Chip
        variant="outlined"
        icon={<FlightTakeoffIcon fontSize="inherit" />}
        color="warning"
        label="Chip"
      />
      <Chip
        variant="outlined"
        icon={<SettingsIcon fontSize="inherit" />}
        color="error"
        label="Chip"
      />
      <Chip
        variant="outlined"
        icon={<ThumbUpIcon fontSize="inherit" />}
        color="success"
        label="Chip"
      />
    </Stack>
  );
};

export default Component;
