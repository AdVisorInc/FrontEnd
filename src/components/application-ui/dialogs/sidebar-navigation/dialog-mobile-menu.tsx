import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box, Drawer, IconButton } from '@mui/material';
import { useState } from 'react';
import { SidebarNavMenu } from 'src/components/application-ui/vertical-shells/white-off/sidebar-nav-menu';
import { Scrollbar } from 'src/components/base/scrollbar';
import { useMenuItems } from 'src/router/nav-items-dummy/vertical-shells/vertical-shells-white-off';
import { SIDEBAR_WIDTH } from 'src/theme/utils';

export const DialogMenuMobile = () => {
  const [open, setOpen] = useState(false);
  const menuItems = useMenuItems();

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
          <Scrollbar dark>
            <SidebarNavMenu menuItems={menuItems} />
          </Scrollbar>
        </Box>
      </Drawer>
    </>
  );
};
