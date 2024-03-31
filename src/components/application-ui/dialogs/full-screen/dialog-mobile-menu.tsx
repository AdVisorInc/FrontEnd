import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import VerticalMenuRoundedPrimary from 'src/components/application-ui/vertical-menus/rounded/menu-rounded-primary';
import { Scrollbar } from 'src/components/base/scrollbar';
import { SIDEBAR_WIDTH } from 'src/theme/utils';

export const DialogMenuMobile = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        sx={{ mr: 2 }}
        onClick={handleOpen}
      >
        <MenuRoundedIcon fontSize="small" />
      </IconButton>
      <Drawer
        sx={{ zIndex: 1300 }}
        anchor="left"
        onClose={handleClose}
        open={open}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: SIDEBAR_WIDTH,
          },
        }}
        variant="temporary"
      >
        <Box
          flex={1}
          overflow="auto"
        >
          <Box p={2}>
            <Typography
              variant="caption"
              fontWeight={600}
              sx={{
                pb: 1,
              }}
              component="div"
            >
              Navigation
            </Typography>
            <Scrollbar dark>
              <VerticalMenuRoundedPrimary />
            </Scrollbar>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
