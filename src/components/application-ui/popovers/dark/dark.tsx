import { Box, Button, Card, CardContent, Popover } from '@mui/material';
import React from 'react';
import DarkContentCard from 'src/components/application-ui/image-grid-lists/dark-overlay/dark-content-card';

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
    <Box
      display="flex"
      alignItems="center"
      height="100%"
    >
      <Card sx={{ width: '100%' }}>
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
              vertical: 'center',
              horizontal: 'center',
            }}
            sx={{
              '& .MuiBackdrop-root': {
                backdropFilter: 'blur(1px)',
              },
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'center',
            }}
            disableRestoreFocus
          >
            <Box width={{ xs: 'auto', md: 520 }}>
              <DarkContentCard />
            </Box>
          </Popover>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Component;
