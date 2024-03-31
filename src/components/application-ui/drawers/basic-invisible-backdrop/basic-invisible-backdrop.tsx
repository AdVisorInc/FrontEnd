import BarChartIcon from '@mui/icons-material/BarChartTwoTone';
import PieChartIcon from '@mui/icons-material/PieChartTwoTone';
import TimelineIcon from '@mui/icons-material/TimelineTwoTone';
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
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ChangeEvent, useCallback, useState } from 'react';
import DrawerContent from './drawer-content';

type AnalyticsView = 'bar' | 'pie' | 'timeline';

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

  const [view, setView] = useState<AnalyticsView>('bar');

  const handleViewChange = (event: ChangeEvent<{}>, newView: AnalyticsView | null) => {
    if (newView) {
      setView(newView);
    }
  };

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
                maxWidth: { xs: 360, md: 480 },
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.neutral[900], 0.8)
                    : 'neutral.25',
                overflow: 'visible',
                flexDirection: 'row',
              },
            }}
            hideBackdrop
          >
            <Box
              overflow="hidden"
              display="flex"
              flexDirection="column"
              width="100%"
            >
              <CardHeader
                title="Drawer title"
                subheader="Drawer description"
                titleTypographyProps={{ textAlign: { xs: 'center', sm: 'left' } }}
                subheaderTypographyProps={{
                  textAlign: { xs: 'center', sm: 'left' },
                }}
                sx={{
                  '.MuiCardHeader-action': {
                    width: { xs: '100%', sm: 'auto' },
                  },
                }}
                action={
                  <ToggleButtonGroup
                    value={view}
                    exclusive
                    color="primary"
                    onChange={handleViewChange}
                    aria-label="analytics view"
                    fullWidth={!mdUp}
                  >
                    <ToggleButton
                      value="bar"
                      aria-label="standard view"
                    >
                      <BarChartIcon fontSize={mdUp ? 'small' : 'medium'} />
                    </ToggleButton>

                    <ToggleButton
                      value="pie"
                      aria-label="breakdown view"
                    >
                      <PieChartIcon fontSize={mdUp ? 'small' : 'medium'} />
                    </ToggleButton>

                    <ToggleButton
                      value="timeline"
                      aria-label="chronological view"
                    >
                      <TimelineIcon fontSize={mdUp ? 'small' : 'medium'} />
                    </ToggleButton>
                  </ToggleButtonGroup>
                }
              />
              <Box overflow="hidden">
                <DrawerContent />
              </Box>
              <Divider />
              <CardActions
                sx={{
                  width: '100%',
                  backgroundColor: theme.palette.mode === 'dark' ? 'neutral.900' : 'common.white',
                  flexDirection: { xs: 'column-reverse', sm: 'row' },

                  '& > :not(:first-of-type)': {
                    marginLeft: { xs: 0, sm: theme.spacing(1) },
                    marginBottom: { xs: theme.spacing(1), sm: 0 },
                  },
                  justifyContent: 'flex-end',
                }}
              >
                <Button
                  variant="outlined"
                  color="secondary"
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
          </SwipeableDrawer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Component;
