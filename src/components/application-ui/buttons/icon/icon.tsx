import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import { IconButton, Stack } from '@mui/material';

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <IconButton
        size="small"
        color="warning"
      >
        <AddCircleTwoToneIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        color="info"
        size="small"
      >
        <AddCircleTwoToneIcon fontSize="small" />
      </IconButton>
      <IconButton
        size="large"
        color="secondary"
      >
        <AddCircleTwoToneIcon />
      </IconButton>
      <IconButton
        disabled
        color="secondary"
      >
        <AddCircleTwoToneIcon />
      </IconButton>
      <IconButton
        size="large"
        color="primary"
      >
        <AddCircleTwoToneIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        size="large"
        color="error"
      >
        <AddCircleTwoToneIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        size="large"
        color="success"
      >
        <AddCircleTwoToneIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  );
};

export default Component;
