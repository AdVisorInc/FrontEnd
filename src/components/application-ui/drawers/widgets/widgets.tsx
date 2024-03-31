import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  darken,
  DialogContent,
  SwipeableDrawer,
  useTheme,
} from '@mui/material';
import { useCallback, useState } from 'react';
import DrawerContent from './drawer-content';

const Component = () => {
  const [open, setOpen] = useState<boolean>(true);
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = useCallback(() => {
    setOpen(false);
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  }, []);

  return (
    <Box
      height="100%"
      width="100%"
      position="relative"
      display="flex"
      alignItems={{ xs: 'flex-start', md: 'center' }}
      justifyContent="center"
    >
      <Box
        sx={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          filter: 'grayscale(50%)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: (theme) =>
            theme.palette.mode === 'dark'
              ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/placeholders/covers/landscape4.png")`
              : `url("/placeholders/covers/landscape4.png")`,
        }}
      />

      <Card
        elevation={24}
        sx={{
          mt: { xs: 3, md: 0 },
          position: 'relative',
          display: 'flex',
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? alpha(theme.palette.background.default, 0.96)
              : alpha(theme.palette.background.paper, 0.8),
          backgroundFilter: 'blur(8px)',
          alignItems: 'center',
          justifyContent: 'center',
          px: 3,
          py: 1,
        }}
      >
        <CardContent>
          <Button
            onClick={handleDrawerOpen}
            variant="contained"
          >
            Open Drawer
          </Button>
        </CardContent>
      </Card>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={handleDrawerOpen}
        onClose={handleDrawerClose}
        elevation={0}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: { xs: 360, md: 540 },
            overflow: 'visible',
            flexDirection: 'row',
            background: 'none',

            '& .MuiDrawer-paper.MuiPaper-root': {
              backdropFilter: 'blur(0px) !important',
            },
          },
        }}
        ModalProps={{
          BackdropProps: {
            sx: {
              backdropFilter: 'blur(0px) !important',
              background:
                theme.palette.mode === 'dark'
                  ? `linear-gradient(90deg, ${alpha(theme.palette.neutral[100], 0.08)} 0%, ${alpha(
                      darken(theme.palette.neutral[900], 0.4),
                      0.9
                    )} 100%) !important`
                  : `linear-gradient(90deg, ${alpha(theme.palette.neutral[900], 0.7)} 10%, ${alpha(
                      theme.palette.neutral[700],
                      0.7
                    )} 100%) !important`,
            },
          },
        }}
      >
        <DialogContent sx={{ p: { xs: 2, md: 3 } }}>
          <DrawerContent />
        </DialogContent>
      </SwipeableDrawer>
    </Box>
  );
};

export default Component;
