import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  alpha,
  Box,
  Button,
  Divider,
  FormControlLabel,
  FormGroup,
  IconButton,
  ListSubheader,
  Menu,
  Switch,
} from '@mui/material';
import { FC, useState } from 'react';

const menuItems = ['System Backups', 'API Integrations', 'Security & Compliance'];

const FooterDropdown: FC = () => {
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
      <IconButton
        id="footer-button"
        color="primary"
        aria-controls={open ? 'footer-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="footer-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        MenuListProps={{
          'aria-labelledby': 'footer-button',
          sx: {
            p: 0,
            minWidth: 280,
          },
        }}
      >
        <Divider />
        <Box p={1}>
          <ListSubheader>Actions</ListSubheader>
          <FormGroup>
            {menuItems.map((item) => (
              <FormControlLabel
                sx={{
                  flexDirection: 'row-reverse',
                  m: 0,
                  pl: 1.5,
                  justifyContent: 'space-between',
                }}
                key={item}
                control={<Switch defaultChecked={item === 'Email Notifications'} />}
                label={item}
              />
            ))}
          </FormGroup>
        </Box>
        <Divider />
        <Box
          py={1.5}
          px={2.5}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[50], 0.02) : 'neutral.50',
          }}
        >
          <Button
            size="small"
            variant="contained"
            color="secondary"
          >
            Sign out
          </Button>
        </Box>
      </Menu>
    </>
  );
};

export default FooterDropdown;
