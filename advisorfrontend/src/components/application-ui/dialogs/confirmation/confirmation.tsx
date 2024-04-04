import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import { Button, Card, CardContent, Dialog, DialogActions, DialogContent } from '@mui/material';
import React, { useEffect } from 'react';
import ConfirmationDialogContent from './confirmation-dialog-content';

const Component = () => {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <>
      <Card
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CardContent>
          <Button
            endIcon={<ArrowRightAltTwoToneIcon />}
            variant="outlined"
            color="primary"
            onClick={handleClickOpen}
          >
            Open confirmation
          </Button>
        </CardContent>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="basic-dialog-title"
        maxWidth="xs"
        fullWidth
        sx={{
          '.MuiDialog-container': {
            alignItems: { xs: 'flex-end', sm: 'center' },
          },
        }}
      >
        <DialogContent
          sx={{
            pb: 0,
          }}
        >
          <ConfirmationDialogContent />
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            autoFocus
            variant="contained"
            fullWidth
            onClick={handleClose}
          >
            Continue profile setup
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Component;
