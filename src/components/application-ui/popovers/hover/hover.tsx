import { Avatar, Box, Button, Card, CardContent, Popover, Typography } from '@mui/material';
import React from 'react';

const Component = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const user = {
    avatar: '/avatars/3.png',
    name: 'Ethan Donovan',
    jobTitle: 'Principal Engineer',
  };

  return (
    <Card>
      <CardContent
        sx={{
          textAlign: 'center',
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          Open popover on hover
        </Button>
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: 'none',
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Box
            display="flex"
            py={2}
            px={3}
          >
            <Avatar
              variant="rounded"
              alt={user.name}
              src={user.avatar}
            />
            <Box
              sx={{
                textAlign: 'left',
                pl: 1,
              }}
            >
              <Typography
                variant="h6"
                fontWeight={500}
              >
                {user.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                {user.jobTitle}
              </Typography>
            </Box>
          </Box>
        </Popover>
      </CardContent>
    </Card>
  );
};

export default Component;
