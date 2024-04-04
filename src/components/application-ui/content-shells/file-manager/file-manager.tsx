import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
  Box,
  Container,
  Divider,
  Unstable_Grid2 as Grid,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRef } from 'react';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { useCustomization } from 'src/hooks/use-customization';
import { useSidebarDrawer } from 'src/hooks/use-sidebar-drawer';
import AllFolders from './all-folders';
import QuickAccess from './quick-access';
import { FileManagerSidebar } from './sidebar';
import TeamFolders from './team-folders';

const Component = () => {
  const customization = useCustomization();

  const parentRef = useRef<HTMLDivElement | null>(null);
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const sidebarDrawer = useSidebarDrawer();
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flex={1}
      position="relative"
      zIndex={2}
      ref={parentRef}
      overflow="hidden"
    >
      <Box
        flex={1}
        position="relative"
        overflow="hidden"
        zIndex={5}
        sx={{
          mr: sidebarDrawer.open ? 0 : lgUp ? '-420px' : 0,
          transition: sidebarDrawer.open
            ? theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              })
            : theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
        }}
      >
        <Container maxWidth={customization.stretch ? false : 'xl'}>
          <Box
            py={{ xs: 2, sm: 3 }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h3"
              fontWeight={600}
            >
              File Manager
            </Typography>
            <ButtonIcon
              color="primary"
              variant="outlined"
              size="small"
              onClick={sidebarDrawer.handleToggle}
            >
              <MenuRoundedIcon />
            </ButtonIcon>
          </Box>
        </Container>
        <Divider />
        <Container
          sx={{
            mt: 2,
          }}
          maxWidth={customization.stretch ? false : 'xl'}
        >
          <Grid
            container
            spacing={2}
          >
            <Grid xs={12}>
              <QuickAccess />
            </Grid>
            <Grid xs={12}>
              <TeamFolders />
            </Grid>
            <Grid xs={12}>
              <AllFolders />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <FileManagerSidebar
        parentContainer={parentRef.current}
        onClose={sidebarDrawer.handleClose}
        onOpen={sidebarDrawer.handleOpen}
        open={sidebarDrawer.open}
      />
    </Box>
  );
};

export default Component;
