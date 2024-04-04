import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import {
  alpha,
  Box,
  Button,
  Divider,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import PropTypes from 'prop-types';
import React, { FC } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import AvatarTitleDescriptionAlternate from 'src/components/application-ui/avatars/with-text/avatar-title-description-alternate';
import { routes } from 'src/router/routes';
import { authClient } from 'src/utils/auth/custom/client';
import { AuthStrategy } from 'src/utils/auth/strategy';
import { config } from 'src/utils/config';
import { createClient as createSupabaseClient } from 'src/utils/supabase/client';

const generateRandomData = (): number[] =>
  Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000));

const menuItems = ['My account', 'Profile settings', 'Active Tasks'];

interface Origin {
  vertical: 'top' | 'bottom' | 'center';
  horizontal: 'left' | 'right' | 'center';
}
interface ProfileDropdownProps {
  anchorEl: null | Element;
  onClose?: () => void;
  open?: boolean;
  anchorOrigin?: Origin;
  transformOrigin?: Origin;
}

export const ProfileDropdown: FC<ProfileDropdownProps> = (props) => {
  const { anchorEl, onClose, open, ...other } = props;

  const theme = useTheme();
  const { t } = useTranslation();

  const handleSignOut = React.useCallback(async (): Promise<void> => {
    let redirectTo: string;

    switch (config.auth.strategy) {
      case AuthStrategy.CUSTOM: {
        try {
          const { error } = await authClient.signOut();

          if (error) {
            console.error('Sign out error', error);
            toast.error('Something went wrong, unable to sign out');
          }
        } catch (err) {
          console.error('Sign out error', err);
          toast.error('Something went wrong, unable to sign out');
        }

        redirectTo = routes.auth['custom.login'];
        break;
      }
      case AuthStrategy.SUPABASE: {
        try {
          // Here the client cannot be memoized because it may not be configured.
          const supabaseClient = createSupabaseClient();

          const { error } = await supabaseClient.auth.signOut();

          if (error) {
            console.error('Sign out error', error);
            toast.error('Something went wrong, unable to sign out');
          }
        } catch (err) {
          console.error('Sign out error', err);
          toast.error('Something went wrong, unable to sign out');
        }

        redirectTo = routes.auth['supabase.login'];
        break;
      }
    }

    window.location.href = redirectTo;
  }, []);

  return (
    <>
      <Menu
        id="settings-menu"
        component="div"
        anchorEl={anchorEl}
        open={!!open}
        onClose={onClose}
        MenuListProps={{
          'aria-labelledby': 'settings-button',
          sx: {
            p: 0,
          },
        }}
        anchorOrigin={props.anchorOrigin || { vertical: 'top', horizontal: 'right' }}
        transformOrigin={props.transformOrigin || { vertical: 'top', horizontal: 'right' }}
        sx={{
          '& .MuiMenu-list': {
            width: 280,
          },

          '& .MuiMenuItem-root': {
            borderRadius: theme.shape.borderRadius,
            pr: theme.spacing(0.5),
            mx: theme.spacing(1),

            '& .MuiSvgIcon-root': {
              opacity: 0.5,
            },

            '&.Mui-selected, &.Mui-selected:hover, &:hover, &.MuiButtonBase-root:active': {
              background: alpha(theme.palette.primary.main, 0.1),
              color: theme.palette.primary.dark,

              '& .MuiSvgIcon-root': {
                opacity: 0.8,
              },
            },
          },
        }}
        {...other}
      >
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
            p: 1.5,
            overflow: 'hidden',
          }}
        >
          <AvatarTitleDescriptionAlternate />
        </Box>
        <Divider sx={{ mb: 1 }} />
        {menuItems.map((item) => (
          <MenuItem
            component="div"
            selected={item === 'Email Notifications'}
            key={item}
            onClick={onClose}
            sx={{
              '&:hover .MuiListItemText-primary': {
                color: theme.palette.mode === 'dark' ? 'text.primary' : 'primary.main',
              },
            }}
          >
            <ListItemText
              primaryTypographyProps={{
                fontWeight: 500,
              }}
              primary={item}
            />
            <ChevronRightTwoToneIcon />
          </MenuItem>
        ))}
        <Divider />
        <Box m={1}>
          <Box
            px={2}
            pt={1}
            pb={0.5}
            display="flex"
            alignItems="flex-start"
          >
            <MonetizationOnTwoToneIcon
              sx={{ color: 'warning.main' }}
              fontSize="large"
            />
            <Box ml={1}>
              <Typography variant="h3">$14,264</Typography>
              <Typography
                noWrap
                variant="subtitle2"
                color="text.secondary"
              >
                {t('total value')}
              </Typography>
            </Box>
          </Box>
          <SparkLineChart
            data={generateRandomData()}
            height={64}
            curve="natural"
            margin={{ top: 12, bottom: 12, left: 12, right: 12 }}
            colors={[theme.palette.error.main]}
            sx={{ '.MuiLineElement-root': { strokeWidth: 3, strokeLinecap: 'round' } }}
          />
        </Box>
        <Divider />
        <Box m={1}>
          <Button
            color="secondary"
            fullWidth
            onClick={(): void => {
              onClose?.();
              handleSignOut().catch(() => {});
            }}
          >
            <LockOpenTwoToneIcon
              sx={{
                mr: 1,
              }}
            />
            {t('Sign out')}
          </Button>
        </Box>
      </Menu>
    </>
  );
};

ProfileDropdown.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
