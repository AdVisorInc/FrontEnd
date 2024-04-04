import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  SwipeableDrawer,
  Theme,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useCallback, useState } from 'react';
import { ButtonLight } from 'src/components/base/styles/button';
import { CardActionsLight, CardHeaderLight, DividerLight } from 'src/components/base/styles/card';
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
                backgroundColor: 'neutral.900',
              },
            }}
            ModalProps={{
              BackdropProps: {
                sx: {
                  background:
                    theme.palette.mode === 'dark'
                      ? `${alpha(theme.palette.neutral[100], 0.1)} !important`
                      : `${alpha(theme.palette.neutral[100], 0.4)} !important`,
                },
              },
            }}
          >
            <Box
              overflow="hidden"
              display="flex"
              flexDirection="column"
              width="100%"
            >
              <CardHeaderLight
                title="Drawer"
                subheader="User analytics"
                titleTypographyProps={{
                  color: 'neutral.25',
                  variant: 'caption',
                  fontWeight: 600,
                  gutterBottom: true,
                  textAlign: { xs: 'center', sm: 'left' },
                }}
                subheaderTypographyProps={{
                  color: 'neutral.500',
                  variant: 'h6',
                  textAlign: { xs: 'center', sm: 'left' },
                }}
                sx={{
                  '.MuiCardHeader-action': {
                    width: { xs: '100%', sm: 'auto' },
                  },
                }}
              />
              <DividerLight />
              <Box overflow="hidden">
                <DrawerContent />
              </Box>
              <DividerLight />
              <CardActionsLight
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
                <ButtonLight
                  onClick={handleDrawerClose}
                  fullWidth={!mdUp}
                >
                  Cancel
                </ButtonLight>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleDrawerClose}
                  fullWidth={!mdUp}
                >
                  Save
                </Button>
              </CardActionsLight>
            </Box>
          </SwipeableDrawer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Component;
