import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button, Stack } from '@mui/material';
import { VisuallyHiddenInput } from 'src/components/base/styles/visually-hidden';

const Component = () => {
  return (
    <Stack
      py={2}
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Button
        component="label"
        variant="contained"
        color="secondary"
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput type="file" />
      </Button>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput type="file" />
      </Button>
      <Button
        component="label"
        variant="outlined"
        color="secondary"
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput type="file" />
      </Button>
    </Stack>
  );
};

export default Component;
