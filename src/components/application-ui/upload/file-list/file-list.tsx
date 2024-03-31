import { FormControl, Typography } from '@mui/material';
import DocumentsUploadList from './documents-upload-list';

const Component = () => {
  return (
    <FormControl
      fullWidth
      variant="outlined"
    >
      <Typography
        variant="h6"
        sx={{ pb: 1.5 }}
        component="label"
        fontWeight={500}
      >
        Verification documents
        <Typography
          variant="subtitle2"
          color="text.secondary"
        >
          Add documents as you see fit for the verification process
        </Typography>
      </Typography>

      <DocumentsUploadList />
    </FormControl>
  );
};

export default Component;
