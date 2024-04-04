import CloseIcon from '@mui/icons-material/Close';
import { Alert, Box, Button, Collapse, IconButton, Stack } from '@mui/material';
import React from 'react';

const Component = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <Stack spacing={{ xs: 2, sm: 3 }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Close me!
        </Alert>
      </Collapse>
      <Box textAlign="center">
        <Button
          disabled={open}
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
        >
          Re-open
        </Button>
      </Box>
    </Stack>
  );
};

export default Component;
