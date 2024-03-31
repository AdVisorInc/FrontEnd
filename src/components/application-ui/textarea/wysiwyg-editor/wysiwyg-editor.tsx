import {
  Box,
  Divider,
  FormControl,
  FormGroup,
  FormLabel,
  Unstable_Grid2 as Grid,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { QuillEditor } from 'src/components/base/styles/quill-editor';

const Component = () => {
  const [editorValue, setEditorValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const placeholderContent = '<p><strong>Type here</strong><em> your text...</em></p>';

  useEffect(() => {
    if (!isEditing) {
      setEditorValue(placeholderContent);
    }
  }, [isEditing]);

  const handleFocus = () => {
    if (!isEditing) {
      setIsEditing(true);
      setEditorValue('');
    }
  };

  return (
    <FormGroup>
      <FormLabel htmlFor="editor">
        <Typography
          variant="h5"
          color="text.primary"
        >
          User details
        </Typography>
        <Typography variant="subtitle2">Add the information you see fit</Typography>
        <Divider sx={{ my: 2 }} />
      </FormLabel>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
      >
        <Grid xs={12}>
          <FormControl
            fullWidth
            variant="outlined"
          >
            <Typography
              variant="h6"
              gutterBottom
              component="label"
              fontWeight={500}
            >
              Rich Text Editor
            </Typography>
            <Box>
              <QuillEditor
                value={editorValue}
                onChange={setEditorValue}
                onFocus={handleFocus}
                placeholder="Write something"
                sx={{ height: 320 }}
              />
            </Box>
          </FormControl>
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default Component;
