import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useEffect } from 'react';
import FooterDropdown from 'src/components/application-ui/dropdowns/footer/footer-dropdown';
import SearchBasic from 'src/components/application-ui/input/search/search-basic';
import ChatList from 'src/components/application-ui/stacked-lists/chat/chat-list';

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
        scroll="paper"
        aria-labelledby="basic-dialog-title"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="caption"
                fontWeight={600}
                color="text.secondary"
              >
                Messenger
              </Typography>
              <Typography variant="h6">Recent conversations</Typography>
            </Box>
            <FooterDropdown />
          </Box>
        </DialogTitle>
        <Divider />
        <Box>
          <SearchBasic />
        </Box>
        <DialogContent
          dividers
          sx={{ p: 0 }}
        >
          <ChatList />
        </DialogContent>
        <DialogActions
          sx={{
            p: 0,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
          }}
        >
          <Button
            color="primary"
            autoFocus
            size="large"
            fullWidth
            onClick={handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Component;
