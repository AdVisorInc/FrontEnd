import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  alpha,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  DialogContent,
  Divider,
  IconButton,
  SwipeableDrawer,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useCallback, useState } from 'react';
import DrawerContent from './drawer-content';

const Component = () => {
  const [open, setOpen] = useState<boolean>(true);
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
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
              ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/placeholders/covers/landscape2.png")`
              : `url("/placeholders/covers/landscape2.png")`,
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
          <SwipeableDrawer
            anchor="right"
            open={open}
            onOpen={handleDrawerOpen}
            onClose={handleDrawerClose}
            PaperProps={{
              sx: {
                width: '100%',
                maxWidth: { xs: 340, md: 540, lg: 720 },
                overflow: 'visible',
                flexDirection: 'row',
              },
            }}
            ModalProps={{
              BackdropProps: {
                sx: {
                  backdropFilter: 'blur(3px) !important',
                  background: `linear-gradient(90deg, ${alpha(
                    theme.palette.neutral[900],
                    0.7
                  )} 10%, ${alpha(theme.palette.neutral[700], 0.7)} 100%) !important`,
                },
              },
            }}
          >
            <DialogContent sx={{ p: 0 }}>
              <Box
                overflow="hidden"
                display="flex"
                flexDirection="column"
                width="100%"
              >
                <CardHeader
                  title={
                    <Container maxWidth="sm">
                      <Typography
                        variant="h4"
                        color="text.primary"
                        fontWeight={600}
                      >
                        Profile
                      </Typography>
                      <Typography variant="subtitle1">
                        Edit profile details using the fields below
                      </Typography>
                    </Container>
                  }
                  disableTypography
                  sx={{
                    px: 0,
                    position: 'relative',
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? alpha(theme.palette.neutral[25], 0.02)
                        : 'neutral.25',
                    flexDirection: 'row',
                    '.MuiCardHeader-action': {
                      mt: '-4px',
                      position: 'absolute',
                      right: theme.spacing(1),
                      top: theme.spacing(1.5),
                    },
                  }}
                  action={
                    <IconButton
                      size="small"
                      onClick={handleDrawerClose}
                    >
                      <CloseRoundedIcon fontSize="small" />
                    </IconButton>
                  }
                />
                <Divider />
                <CardContent sx={{ px: 0 }}>
                  <DrawerContent />
                </CardContent>
                <Divider />
                <CardActions
                  sx={{
                    width: '100%',
                    flexDirection: { xs: 'column-reverse', sm: 'row' },

                    '& > :not(:first-of-type)': {
                      marginLeft: { xs: 0, sm: theme.spacing(1) },
                      marginBottom: { xs: theme.spacing(1), sm: 0 },
                    },
                    justifyContent: 'flex-end',
                  }}
                >
                  <Button
                    onClick={handleDrawerClose}
                    fullWidth={!mdUp}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleDrawerClose}
                    fullWidth={!mdUp}
                  >
                    Save
                  </Button>
                </CardActions>
              </Box>
            </DialogContent>
          </SwipeableDrawer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Component;
