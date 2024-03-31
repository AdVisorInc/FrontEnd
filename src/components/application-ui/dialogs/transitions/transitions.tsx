import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import { Button, Card, CardContent, Dialog, DialogContent, Slide, Stack } from '@mui/material';
import React from 'react';
import ConfirmationAlternateDialogContent from '../confirmation-alternate/confirmation-alternate-dialog-content';

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    //@ts-ignore
    <Slide
      direction="up"
      ref={ref}
      {...props}
    />
  );
});

const Component = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            Open slide up dialog
          </Button>
        </CardContent>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="basic-dialog-title"
        maxWidth="xs"
        fullWidth
        //@ts-ignore
        TransitionComponent={Transition}
        keepMounted
        sx={{
          '.MuiDialog-container': {
            alignItems: { xs: 'flex-end', sm: 'center' },
          },
        }}
      >
        <DialogContent>
          <ConfirmationAlternateDialogContent />
          <Stack
            mt={3}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
          >
            <Button
              variant="outlined"
              color="secondary"
              autoFocus
              fullWidth
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleClose}
              autoFocus
              fullWidth
            >
              Continue
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Component;
