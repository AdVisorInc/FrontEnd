import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box, Drawer, lighten } from '@mui/material';
import { useState } from 'react';
import { SidebarNavMenu } from 'src/components/application-ui/vertical-shells/white/sidebar-nav-menu';
import { Scrollbar } from 'src/components/base/scrollbar';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { useMenuItems } from 'src/router/nav-items-dummy/vertical-shells/vertical-shells-white';
import { SIDEBAR_WIDTH } from 'src/theme/utils';

export const MenuMobile = () => {
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
      <ButtonIcon onClick={handleOpen}>
        <MenuRoundedIcon fontSize="small" />
      </ButtonIcon>
      <Drawer
        anchor="left"
        onClose={handleClose}
        open={open}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: SIDEBAR_WIDTH,
            background: (theme) => lighten(theme.palette.neutral[900], 0.025),
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
