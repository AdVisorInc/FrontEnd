import { Avatar, Box, Button, Card, CardContent, Popover, Typography } from '@mui/material';
import React from 'react';
import NavBoxVerticalMenu from 'src/components/application-ui/composed-blocks/navigation-list/nav-box-vertical-menu';

const Component = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
          aria-describedby={id}
          onClick={handleClick}
        >
          Open popover
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          disableRestoreFocus
        >
          <Box width={320}>
            <NavBoxVerticalMenu />
          </Box>
        </Popover>
      </CardContent>
    </Card>
  );
};

export default Component;
