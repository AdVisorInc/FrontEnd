import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import { Button, Menu, MenuItem, Zoom } from '@mui/material';
import { FC, useState } from 'react';

const menuItems = [
  'View All Users',
  'Add New User',
  'User Roles & Permissions',
  'Activity Logs',
  'User Feedback',
];

const ZoomTransitionDropdown: FC = () => {
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
        id="zoom-transition-button"
        variant="outlined"
        color="secondary"
        endIcon={<KeyboardArrowDownTwoToneIcon />}
        aria-controls={open ? 'zoom-transition-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Zoom Transition Dropdown
      </Button>
      <Menu
        id="zoom-transition-menu"
        anchorEl={anchorEl}
        open={open}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'zoom-transition-button',
        }}
        TransitionComponent={Zoom}
      >
        {menuItems.map((item) => (
          <MenuItem
            selected={item === 'Add New User'}
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

export default ZoomTransitionDropdown;
