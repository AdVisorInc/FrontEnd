import ApiIcon from '@mui/icons-material/ApiTwoTone';
import BackupIcon from '@mui/icons-material/BackupTwoTone';
import EmailIcon from '@mui/icons-material/EmailTwoTone';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import PaymentIcon from '@mui/icons-material/PaymentTwoTone';
import SecurityIcon from '@mui/icons-material/SecurityTwoTone';
import { Box, Button, Divider, ListItemIcon, ListSubheader, Menu, MenuItem } from '@mui/material';
import { FC, useState } from 'react';

const menuSections = [
  {
    items: [
      { label: 'Payment Gateways', icon: <PaymentIcon fontSize="small" /> },
      { label: 'Email Notifications', icon: <EmailIcon fontSize="small" /> },
    ],
  },
  {
    header: 'Maintenance',
    items: [
      { label: 'System Backups', icon: <BackupIcon fontSize="small" /> },
      { label: 'API Integrations', icon: <ApiIcon fontSize="small" /> },
      { label: 'Security & Compliance', icon: <SecurityIcon fontSize="small" /> },
    ],
  },
];

const DividersDropdown: FC = () => {
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
        size="small"
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
        {menuSections.map((section, idx) => (
          <Box key={idx}>
            <ListSubheader>{section.header}</ListSubheader>
            {section.items.map((item) => (
              <MenuItem
                selected={item.label === 'API Integrations'}
                key={item.label}
                onClick={handleClose}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                {item.label}
              </MenuItem>
            ))}
            {idx !== menuSections.length - 1 && <Divider />}
          </Box>
        ))}
      </Menu>
    </>
  );
};

export default DividersDropdown;
