import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import { Button, Menu, MenuItem } from '@mui/material';
import { FC, useState } from 'react';

interface BasicDropdownProps {
  currentSelection: string;
  canChange: boolean;
}

const menuItems = [
  'Owner',
  'Administrator',
  'Developer',
  'Read-only',
  'Billing-only'
];

const BasicDropdown: FC<BasicDropdownProps> = ({ currentSelection, canChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if (canChange) {
      setAnchorEl(event.currentTarget);
    }
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
        disabled={!canChange}
      >
        {currentSelection}
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
            selected={item === currentSelection}
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
