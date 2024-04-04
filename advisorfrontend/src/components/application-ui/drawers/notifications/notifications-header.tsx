import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import {
  alpha,
  Box,
  Button,
  CardActions,
  CardHeader,
  Divider,
  SwipeableDrawer,
  Theme,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import NotificationTabsLine from 'src/components/application-ui/tabs/line/line';
import { ButtonSoft } from 'src/components/base/styles/button-soft';
import DrawerContent from './drawer-content';

interface NotificationsHeaderProps {
  onOpen?: () => void;
  onClose?: () => void;
  open?: boolean;
}

export const NotificationsHeader: FC<NotificationsHeaderProps> = (props) => {
  const { onClose, onOpen, open = false, ...other } = props;
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const theme = useTheme();
  const { t } = useTranslation();

  const handleDrawerClose = () => {
    if (onClose) {
      onClose();
    }
  };

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
          maxWidth: { xs: 340, md: 420, lg: 460 },
          overflow: 'visible',
          flexDirection: 'row',
        },
      }}
      {...other}
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
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
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
  );
};

NotificationsHeader.propTypes = {
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
};
