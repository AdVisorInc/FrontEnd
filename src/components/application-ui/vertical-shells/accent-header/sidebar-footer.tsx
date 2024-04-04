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
  Theme,
  Typography,
  useMediaQuery,
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
  isHovered: boolean;
  sidebarCollapsed: boolean;
  currentUser: User;
  onSwitch: (user: User) => void;
}

const SidebarFooter: React.FC<Props> = ({
  users,
  sidebarCollapsed,
  isHovered,
  currentUser,
  onSwitch,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

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
          pb: 0.4,
        }}
      >
        {currentUser.name}
      </Typography>
      <Typography
        variant="body1"
        noWrap
        lineHeight={1.2}
        color="text.secondary"
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
        endIcon={
          mdUp && sidebarCollapsed ? (
            isHovered && <UnfoldMoreTwoToneIcon sx={{ color: 'text.secondary' }} />
          ) : (
            <UnfoldMoreTwoToneIcon sx={{ color: 'text.secondary' }} />
          )
        }
        onClick={handleClick}
        sx={{
          background: alpha(theme.palette.neutral[300], 0.01),
          color:
            theme.palette.mode === 'dark' ? theme.palette.neutral[400] : theme.palette.neutral[800],
          justifyContent: 'flex-start',
          px: 2,
          py: 2,
          borderRadius: 0,
          borderTopWidth: 1,
          borderTopStyle: 'solid',
          borderTopColor: 'transparent',

          '&:hover': {
            background: alpha(theme.palette.neutral[700], 0.06),
            borderTopColor: alpha(theme.palette.neutral[700], 0.08),
          },
        }}
      >
        <Avatar
          variant="rounded"
          src={currentUser.avatar}
          alt={currentUser.name}
        />
        {mdUp && sidebarCollapsed ? isHovered && userDescription : userDescription}
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
      >
        <Box
          p={2}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
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
                pl: 1,
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
                  fontWeight: 500,
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

export default SidebarFooter;
