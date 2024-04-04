import { alpha, darken, DialogContent, SwipeableDrawer, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { FC } from 'react';
import DrawerContent from './drawer-content';

interface WidgetsHeaderProps {
  onOpen?: () => void;
  onClose?: () => void;
  open?: boolean;
}

export const WidgetsHeader: FC<WidgetsHeaderProps> = (props) => {
  const { onClose, onOpen, open = false, ...other } = props;
  const theme = useTheme();

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      elevation={0}
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: { xs: 360, md: 540 },
          overflow: 'visible',
          flexDirection: 'row',
          background: 'none',
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
      {...other}
    >
      <DialogContent sx={{ p: { xs: 2, md: 3 } }}>
        <DrawerContent />
      </DialogContent>
    </SwipeableDrawer>
  );
};

WidgetsHeader.propTypes = {
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
};
