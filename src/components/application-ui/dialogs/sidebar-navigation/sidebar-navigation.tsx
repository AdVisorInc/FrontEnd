import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import ArrowRightAltTwoToneIcon from '@mui/icons-material/ArrowRightAltTwoTone';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EventBusyTwoToneIcon from '@mui/icons-material/EventBusyTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Slide,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import RadioCardsGroupHidden from 'src/components/application-ui/radio-groups/cards/cards-group-hidden';
import SectionHeadingBasic from 'src/components/application-ui/section-headings/basic/basic';
import { SidebarNavMenu } from 'src/components/application-ui/vertical-shells/white-off/sidebar-nav-menu';
import { Scrollbar } from 'src/components/base/scrollbar';
import { useMenuItems } from 'src/router/nav-items-dummy/vertical-shells/vertical-shells-white-off';
import { SIDEBAR_WIDTH } from 'src/theme/utils';
import { DialogMenuMobile } from './dialog-mobile-menu';

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
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const menuItems = useMenuItems();

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
            Open Settings in Full Screen
          </Button>
        </CardContent>
      </Card>

      <Dialog
        open={open}
        fullScreen
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="basic-dialog-title"
        maxWidth="lg"
        fullWidth
        //@ts-ignore
        TransitionComponent={Transition}
      >
        <DialogTitle
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {!mdUp && <DialogMenuMobile />}

          <Box>
            <Typography variant="h4">Settings</Typography>
            {mdUp && (
              <Typography
                variant="subtitle2"
                color="text.secondary"
              >
                Manage all aspects of your application from this dashboard dialog component.
              </Typography>
            )}
          </Box>
          <IconButton
            onClick={handleClose}
            size="small"
            sx={{
              position: 'absolute',
              top: { xs: theme.spacing(0.5), sm: theme.spacing(1.5) },
              right: { xs: theme.spacing(0.5), sm: theme.spacing(1.5) },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </DialogTitle>
        <Divider />
        <Stack
          spacing={0}
          direction="row"
          divider={
            <Divider
              flexItem
              orientation="vertical"
            />
          }
          height="100%"
          overflow="hidden"
        >
          {mdUp && (
            <>
              <Box
                sx={{
                  overflow: 'visible',
                  width: SIDEBAR_WIDTH,
                  minWidth: SIDEBAR_WIDTH,
                }}
              >
                <Scrollbar dark>
                  <SidebarNavMenu menuItems={menuItems} />
                </Scrollbar>
              </Box>
            </>
          )}
          <DialogContent sx={{ p: 0 }}>
            <Box
              p={1}
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.neutral[25], 0.02)
                    : 'neutral.25',
              }}
            >
              <SectionHeadingBasic />
            </Box>
            <Divider />
            <Box p={{ xs: 2, sm: 3 }}>
              <RadioCardsGroupHidden />
            </Box>
            <Box
              pt={1}
              px={3}
              pb={3}
            >
              <Card>
                <CardHeader
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark'
                        ? alpha(theme.palette.neutral[25], 0.02)
                        : 'neutral.25',
                  }}
                  disableTypography
                  title={
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexDirection="column"
                    >
                      <Typography
                        variant="h4"
                        component="div"
                      >
                        Events
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        noWrap
                      >
                        Planned events calendar for the next period
                      </Typography>
                    </Box>
                  }
                />
                <CardContent>
                  <Stack
                    py={2}
                    spacing={1}
                    justifyContent="center"
                    direction="column"
                    alignItems="center"
                  >
                    <EventBusyTwoToneIcon sx={{ fontSize: 44, color: 'neutral.600' }} />
                    <Box
                      textAlign="center"
                      pb={1.5}
                    >
                      <Typography
                        variant="h6"
                        gutterBottom
                      >
                        No events found
                      </Typography>
                      <Typography
                        color="text.secondary"
                        fontWeight={400}
                      >
                        Create the first event using the action below
                      </Typography>
                    </Box>
                    <Button
                      startIcon={<AddTwoToneIcon />}
                      variant="contained"
                      size="small"
                    >
                      New Event
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </DialogContent>
        </Stack>
      </Dialog>
    </>
  );
};

export default Component;
