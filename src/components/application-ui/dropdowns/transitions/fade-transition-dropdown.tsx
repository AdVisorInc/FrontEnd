import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import { Button, Fade, Menu, MenuItem } from '@mui/material';
import { FC, useState } from 'react';

const menuItems = [
  'Payment Gateways',
  'Email Notifications',
  'System Backups',
  'API Integrations',
  'Security & Compliance',
];

const FadeTransitionDropdown: FC = () => {
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
        id="fade-transition-button"
        variant="outlined"
        color="secondary"
        endIcon={<KeyboardArrowDownTwoToneIcon />}
        aria-controls={open ? 'fade-transition-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Fade Transition Dropdown
      </Button>
      <Menu
        id="fade-transition-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'fade-transition-button',
        }}
        TransitionComponent={Fade}
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

export default FadeTransitionDropdown;
