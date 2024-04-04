import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogContent,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useEffect } from 'react';
import RightAlignedDropdown from 'src/components/application-ui/dropdowns/basic/right-aligned-dropdown';
import MembersSelect from 'src/components/application-ui/stacked-lists/members-select-input/members-select-list';

const Component = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
        fullScreen={fullScreen}
        onClose={handleClose}
        scroll="body"
        aria-labelledby="basic-dialog-title"
        maxWidth="sm"
        fullWidth
      >
        <CardHeader
          title="Messenger"
          subheader="Recent conversations"
          action={<RightAlignedDropdown />}
        />
        <DialogContent sx={{ pt: 0 }}>
          <Card
            sx={{ px: 2 }}
            variant="outlined"
            elevation={0}
          >
            <MembersSelect />
          </Card>
          <Stack
            mt={2}
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
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
