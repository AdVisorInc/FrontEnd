import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import {
  alpha,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  Theme,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useEffect } from 'react';
import AlertDialogContent from './alert-dialog-content';

const Component = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

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
            Open Alert
          </Button>
        </CardContent>
      </Card>

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
          <AlertDialogContent />
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
            autoFocus
            fullWidth={!smUp}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            color="error"
            variant="contained"
            onClick={handleClose}
            autoFocus
            fullWidth={!smUp}
          >
            Remove key
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Component;
