import { Box, Button, Card, CardContent, Drawer, Unstable_Grid2 as Grid } from '@mui/material';
import { useState } from 'react';
import DrawerContent from './drawer-content';

type DrawerState = {
  top: boolean;
  left: boolean;
  bottom: boolean;
  right: boolean;
};

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Component = () => {
  const [state, setState] = useState<DrawerState>({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => {
    setState({ ...state, [anchor]: open });
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
              ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/placeholders/covers/landscape4.png")`
              : `url("/placeholders/covers/landscape8.png")`,
        }}
      />
      <Box p={2}>
        <Grid
          position="relative"
          container
          minHeight={256}
          spacing={{ xs: 2, sm: 3 }}
        >
          {(['top', 'right', 'bottom', 'left'] as Anchor[]).map((anchor) => (
            <Grid
              key={anchor}
              xs={12}
              sm={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Card
                sx={{
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CardContent>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => toggleDrawer(anchor, true)}
                  >
                    {anchor.toUpperCase()}
                  </Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={() => toggleDrawer(anchor, false)}
                  >
                    <DrawerContent />
                  </Drawer>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Component;
