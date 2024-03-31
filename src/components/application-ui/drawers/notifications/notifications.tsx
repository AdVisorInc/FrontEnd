import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import {
  alpha,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  SwipeableDrawer,
  Theme,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import NotificationTabsLine from 'src/components/application-ui/tabs/line/line';
import { ButtonSoft } from 'src/components/base/styles/button-soft';
import DrawerContent from './drawer-content';

const Component = () => {
  const [open, setOpen] = useState<boolean>(true);
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const theme = useTheme();
  const { t } = useTranslation();

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
                maxWidth: { xs: 340, md: 420, lg: 460 },
                overflow: 'visible',
                flexDirection: 'row',
              },
            }}
          >
            <Box
              overflow="hidden"
              display="flex"
              flexDirection="column"
              width="100%"
            >
              <CardHeader
                title="Notifications"
                titleTypographyProps={{
                  variant: 'h5',
                  textAlign: { xs: 'center', sm: 'left' },
                }}
                sx={{
                  p: 1.5,
                  '.MuiCardHeader-action': {
                    position: { xs: 'absolute', sm: 'static' },
                    right: theme.spacing(1),
                    top: theme.spacing(1),
                    mt: 0,
                  },
                }}
                action={
                  <Tooltip
                    arrow
                    placement="right"
                    title={t('Mark all as read')}
                  >
                    <ButtonSoft
                      color="error"
                      sx={{
                        minWidth: 0,
                        p: 0.5,
                      }}
                      size="small"
                    >
                      <DoneAllRoundedIcon fontSize="small" />
                    </ButtonSoft>
                  </Tooltip>
                }
              />
              <Divider />
              <Box
                p={{ xs: 1, sm: 0 }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark'
                      ? alpha(theme.palette.neutral[25], 0.02)
                      : 'neutral.25',
                }}
              >
                <NotificationTabsLine />
              </Box>
              {!smUp && <Divider />}
              <Box
                overflow="hidden"
                flex={1}
              >
                <DrawerContent />
              </Box>
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
                  Close
                </Button>
                <ButtonSoft
                  color="primary"
                  onClick={handleDrawerClose}
                  fullWidth={!mdUp}
                >
                  View all
                </ButtonSoft>
              </CardActions>
            </Box>
          </SwipeableDrawer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Component;
