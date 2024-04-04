import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
  alpha,
  Box,
  Container,
  Divider,
  Stack,
  Theme,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRef } from 'react';
import { Scrollbar } from 'src/components/base/scrollbar';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { useCustomization } from 'src/hooks/use-customization';
import { useSidebarDrawer } from 'src/hooks/use-sidebar-drawer';
import BottomBarContent from './bottombar-content';
import ChatContent from './chat-content';
import { MessengerSidebar } from './sidebar';
import TopBarContent from './topbar-content';

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
      <MessengerSidebar
        parentContainer={parentRef.current}
        onClose={sidebarDrawer.handleClose}
        onOpen={sidebarDrawer.handleOpen}
        open={sidebarDrawer.open}
      />
      <Box
        flex={1}
        position="relative"
        overflow="hidden"
        zIndex={5}
        sx={{
          ml: sidebarDrawer.open ? 0 : lgUp ? '-320px' : 0,
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
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
          }}
        >
          <Container maxWidth={customization.stretch ? false : 'xl'}>
            <Stack
              divider={
                <Divider
                  orientation="vertical"
                  flexItem
                />
              }
              spacing={{ xs: 2, sm: 3 }}
              py={{ xs: 2, sm: 3 }}
              direction="row"
              alignItems="center"
            >
              <ButtonIcon
                color="secondary"
                variant="outlined"
                size="small"
                onClick={sidebarDrawer.handleToggle}
              >
                <MenuRoundedIcon />
              </ButtonIcon>
              <TopBarContent />
            </Stack>
          </Container>
        </Box>
        <Divider />
        <Box
          flex={1}
          width="100%"
        >
          <Scrollbar>
            <Container maxWidth={customization.stretch ? false : 'xl'}>
              <ChatContent />
            </Container>
          </Scrollbar>
        </Box>
        <Divider />
        <BottomBarContent />
      </Box>
    </Box>
  );
};

export default Component;
