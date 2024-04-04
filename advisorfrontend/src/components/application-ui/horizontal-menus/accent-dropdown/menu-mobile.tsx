import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { alpha, Box, Drawer } from '@mui/material';
import { useState } from 'react';
import { SidebarNavMenu } from 'src/components/application-ui/vertical-shells/dark/sidebar-nav-menu';
import { Logo } from 'src/components/base/logo';
import { Scrollbar } from 'src/components/base/scrollbar';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { DividerLight } from 'src/components/base/styles/card';
import { useMenuItems } from 'src/router/nav-items-dummy/stacked-shells/stacked-shells-top-nav';
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
      <ButtonIcon
        variant="contained"
        color="secondary"
        onClick={handleOpen}
      >
        <MenuRoundedIcon />
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
            backgroundColor: 'neutral.900',
          },
        }}
        variant="temporary"
      >
        <Box
          flex={1}
          overflow="auto"
        >
          <Scrollbar dark>
            <Box
              sx={{
                backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.03),
              }}
              p={2}
            >
              <Logo
                dark
                isLinkStatic
              />
            </Box>
            <DividerLight />
            <SidebarNavMenu menuItems={menuItems} />
          </Scrollbar>
        </Box>
      </Drawer>
    </>
  );
};
