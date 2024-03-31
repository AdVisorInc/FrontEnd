import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import { Button, Menu, MenuItem } from '@mui/material';
import { FC, useState } from 'react';

const menuItems = [
  'View All Users',
  'Add New User',
  'User Roles & Permissions',
  'Activity Logs',
  'User Feedback',
];

const RightAlignedDropdown: FC = () => {
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
        id="user-directory-button"
        variant="outlined"
        color="secondary"
        size="small"
        endIcon={<KeyboardArrowDownTwoToneIcon />}
        aria-controls={open ? 'user-directory-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        User Directory
      </Button>
      <Menu
        id="user-directory-menu"
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
          'aria-labelledby': 'user-directory-button',
        }}
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

export default RightAlignedDropdown;
