import { Avatar, IconButton, Stack, useTheme } from '@mui/material';
import { usePopover } from 'src/hooks/use-popover';
import { ProfileDropdown } from './profile-dropdown';

const Component = () => {
  const popover = usePopover<HTMLButtonElement>();
  const theme = useTheme();

  const user = {
    avatar: '/avatars/3.png',
    name: 'Ethan Donovan',
    jobTitle: 'Principal Engineer',
  };

  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <IconButton
        id="profile-button"
        sx={{
          p: 0,
          '&:hover': {
            boxShadow: `0 0 0 3px ${theme.palette.primary.main}`,
          },
        }}
        color="primary"
        aria-controls={popover.open ? 'profile-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={popover.open ? 'true' : undefined}
        onClick={popover.handleOpen}
        ref={popover.anchorRef}
      >
        <Avatar
          alt={user.name}
          src={user.avatar}
          sx={{
            borderRadius: 'inherit',
            height: 36,
            width: 36,
          }}
        />
      </IconButton>
      <ProfileDropdown
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        anchorEl={popover.anchorRef.current}
        onClose={popover.handleClose}
        open={popover.open}
      />
    </Stack>
  );
};

export default Component;
