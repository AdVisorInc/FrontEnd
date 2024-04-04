import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import UnfoldMoreTwoToneIcon from '@mui/icons-material/UnfoldMoreTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';

interface User {
  id: number;
  name: string;
  avatar: string;
  userRole: string;
}

interface Props {
  users: User[];
  currentUser: User;
  onSwitch: (user: User) => void;
}

const UserSwitcher: React.FC<Props> = ({ users, currentUser, onSwitch }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUserSelect = (user: User) => {
    onSwitch(user);
    handleClose();
  };

  const userDescription = (
    <Box
      ml={2}
      overflow="hidden"
      textAlign="left"
      flex={1}
    >
      <Typography
        variant="subtitle2"
        fontWeight={600}
        lineHeight={1.2}
        sx={{
          pb: 0.3,
          color: (theme) => theme.palette.neutral[900],
        }}
      >
        {currentUser.name}
      </Typography>
      <Typography
        variant="body1"
        noWrap
        lineHeight={1.2}
        sx={{
          color: (theme) =>
            theme.palette.mode === 'dark'
              ? theme.palette.neutral[400]
              : alpha(theme.palette.neutral[900], 0.6),
        }}
      >
        {currentUser.userRole}
      </Typography>
    </Box>
  );

  const theme = useTheme();

  return (
    <Box>
      <Button
        color="primary"
        fullWidth
        endIcon={<UnfoldMoreTwoToneIcon />}
        onClick={handleClick}
        sx={{
          background: alpha(theme.palette.neutral[300], 0.01),
          color:
            theme.palette.mode === 'dark' ? theme.palette.neutral[500] : theme.palette.neutral[700],
          justifyContent: 'flex-start',
          px: 2,
          py: 2,
          borderRadius: 0,
          borderTopWidth: 1,
          borderTopStyle: 'solid',
          borderTopColor: 'transparent',

          '.MuiTypography-subtitle2': {
            color:
              theme.palette.mode === 'dark'
                ? theme.palette.neutral[400]
                : alpha(theme.palette.neutral[700], 0.7),
          },

          '&:hover': {
            color:
              theme.palette.mode === 'dark'
                ? theme.palette.neutral[400]
                : theme.palette.neutral[700],
            background:
              theme.palette.mode === 'dark'
                ? alpha(theme.palette.neutral[300], 0.06)
                : alpha(theme.palette.neutral[700], 0.06),
            borderTopColor: alpha(theme.palette.neutral[700], 0.08),

            '.MuiTypography-subtitle2': {
              color:
                theme.palette.mode === 'dark'
                  ? theme.palette.neutral[100]
                  : theme.palette.neutral[700],
            },
          },
        }}
      >
        <Avatar
          variant="rounded"
          src={currentUser.avatar}
          alt={currentUser.name}
        />
        {userDescription}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        slotProps={{
          paper: {
            sx: {
              width: 380,
              '.MuiList-root': {
                p: 0,
              },
            },
          },
        }}
        disablePortal
      >
        <Box
          p={2}
          sx={{
            background: (theme) => alpha(theme.palette.background.default, 0.7),
          }}
        >
          <Typography variant="h6">Select user</Typography>
        </Box>
        <Stack
          p={1}
          divider={<Divider />}
        >
          {users.map((user) => (
            <MenuItem
              selected={currentUser.id === user.id}
              sx={{
                borderRadius: (theme) => theme.shape.borderRadius + 'px',
              }}
              key={user.id}
              onClick={() => handleUserSelect(user)}
            >
              <ListItemIcon sx={{ mr: 1 }}>
                <Avatar
                  variant="rounded"
                  src={user.avatar}
                  alt={user.name}
                />
              </ListItemIcon>

              <ListItemText
                primary={user.name}
                primaryTypographyProps={{
                  fontWeight: 600,
                }}
                secondary={user.userRole}
                secondaryTypographyProps={{
                  noWrap: true,
                }}
              />
              {currentUser.id === user.id && (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-end"
                  minWidth={38}
                >
                  <CheckTwoToneIcon color="primary" />
                </Box>
              )}
            </MenuItem>
          ))}
        </Stack>
      </Menu>
    </Box>
  );
};

export default UserSwitcher;
