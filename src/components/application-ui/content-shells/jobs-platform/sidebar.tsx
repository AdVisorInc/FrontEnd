import { alpha, Drawer, SwipeableDrawer, Theme, useMediaQuery, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { FC } from 'react';
import FiltersContent from 'src/components/application-ui/accordions/filters/filters-content';
import { Scrollbar } from 'src/components/base/scrollbar';

interface JobsPlatformSidebarProps {
  parentContainer?: HTMLDivElement | null;
  onClose?: () => void;
  onOpen?: () => void;
  open?: boolean;
}

export const JobsPlatformSidebar: FC<JobsPlatformSidebarProps> = (props) => {
  const { parentContainer, onClose, onOpen, open, ...other } = props;
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const theme = useTheme();

  const sidebarContent = <FiltersContent />;

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={open}
        PaperProps={{
          sx: {
            position: 'relative',
            width: 360,
            zIndex: 5,
            boxShadow: (theme) => theme.shadows[0],
          },
        }}
        SlideProps={{ container: parentContainer }}
        variant="persistent"
        {...other}
      >
        <Scrollbar>{sidebarContent}</Scrollbar>
      </Drawer>
    );
  }

  return (
    <SwipeableDrawer
      anchor="left"
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      PaperProps={{
        sx: {
          maxWidth: '100%',
          width: { xs: 320, sm: 380, md: 400 },
          pointerEvents: 'auto',
          position: 'absolute',
          boxShadow: (theme) => theme.shadows[24],
        },
      }}
      ModalProps={{
        BackdropProps: {
          sx: {
            backdropFilter: 'blur(3px) !important',
            background: `linear-gradient(90deg, ${alpha(
              theme.palette.neutral[200],
              0.7
            )} 10%, ${alpha(theme.palette.neutral[900], 0.6)} 100%) !important`,
          },
        },
      }}
      variant="temporary"
      {...other}
    >
      <Scrollbar>{sidebarContent}</Scrollbar>
    </SwipeableDrawer>
  );
};

JobsPlatformSidebar.propTypes = {
  parentContainer: PropTypes.any,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
};
