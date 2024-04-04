import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import { Button, Menu, MenuItem } from '@mui/material';
import { FC, useState } from 'react';

const menuItems = [
  'General Settings',
  'Payment Gateways',
  'Email Notifications',
  'System Backups',
  'API Integrations',
  'Security & Compliance',
];

const BasicDropdown: FC = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="settings-button"
        variant="outlined"
        color="secondary"
        endIcon={<KeyboardArrowDownTwoToneIcon />}
        aria-controls={open ? 'settings-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Settings
      </Button>
      <Menu
        id="settings-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'settings-button',
        }}
      >
        {menuItems.map((item) => (
          <MenuItem
            selected={item === 'Email Notifications'}
            key={item}
            onClick={handleClose}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default BasicDropdown;
