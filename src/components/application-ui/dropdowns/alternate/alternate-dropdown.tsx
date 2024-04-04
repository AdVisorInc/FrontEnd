import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import { alpha, Button, ListItemText, Menu, MenuItem, useTheme } from '@mui/material';
import { FC, useState } from 'react';

const menuItems = [
  'General Settings',
  'Payment Gateways',
  'Email Notifications',
  'System Backups',
  'API Integrations',
  'Security & Compliance',
];

const AlternateDropdown: FC = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

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
        sx={{
          '& .MuiMenu-list': {
            width: 280,
          },

          '& .MuiMenuItem-root': {
            borderRadius: theme.shape.borderRadius,
            pr: theme.spacing(0.5),

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
      >
        {menuItems.map((item) => (
          <MenuItem
            selected={item === 'Email Notifications'}
            key={item}
            onClick={handleClose}
          >
            <ListItemText
              primaryTypographyProps={{
                variant: 'h6',
                fontWeight: 500,
              }}
              primary={item}
            />
            <ChevronRightTwoToneIcon />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default AlternateDropdown;
