import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Alert, Stack } from '@mui/material';

const Component = () => {
  return (
    <Stack spacing={{ xs: 2, sm: 3 }}>
      <Alert
        icon={<CheckIcon fontSize="inherit" />}
        severity="success"
      >
        This is a success alert — check it out!
      </Alert>
      <Alert
        iconMapping={{
          success: <CheckCircleOutlineIcon fontSize="inherit" />,
        }}
      >
        This is a success alert — check it out!
      </Alert>
      <Alert
        icon={false}
        severity="success"
      >
        This is a success alert — check it out!
      </Alert>
    </Stack>
  );
};

export default Component;
