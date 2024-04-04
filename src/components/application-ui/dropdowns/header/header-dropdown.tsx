import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { Box, Button, Divider, Menu, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';
import { FC } from 'react';
import AvatarTitleDescriptionStacked from 'src/components/application-ui/avatars/with-text/avatar-title-description-stacked';

const menuItems = ['System Backups', 'API Integrations', 'Security & Compliance'];

interface Origin {
  vertical: 'top' | 'bottom' | 'center';
  horizontal: 'left' | 'right' | 'center';
}
interface HeaderUserDropdownProps {
  anchorEl: null | Element;
  onClose?: () => void;
  open?: boolean;
  anchorOrigin?: Origin;
  transformOrigin?: Origin;
}

export const HeaderUserDropdown: FC<HeaderUserDropdownProps> = (props) => {
  const { anchorEl, onClose, open, ...other } = props;

  return (
    <>
      <Menu
        id="header-menu"
        anchorEl={anchorEl}
        open={!!open}
        onClose={onClose}
        anchorOrigin={props.anchorOrigin || { vertical: 'top', horizontal: 'right' }}
        transformOrigin={props.transformOrigin || { vertical: 'top', horizontal: 'right' }}
        MenuListProps={{
          'aria-labelledby': 'header-button',
          sx: {
            p: 0,
          },
        }}
        {...other}
      >
        <Box
          sx={{
            px: 2,
            pt: 2,
            pb: 1.5,
          }}
        >
          <AvatarTitleDescriptionStacked />
        </Box>
        <Divider />
        <Box p={1}>
          {menuItems.map((item) => (
            <MenuItem
              selected={item === 'Email Notifications'}
              key={item}
              onClick={onClose}
            >
              {item}
            </MenuItem>
          ))}
        </Box>
        <Divider />
        <Box p={1}>
          <Button
            color="error"
            startIcon={<LogoutTwoToneIcon />}
            fullWidth
            onClick={onClose}
          >
            Sign out
          </Button>
        </Box>
      </Menu>
    </>
  );
};

HeaderUserDropdown.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
