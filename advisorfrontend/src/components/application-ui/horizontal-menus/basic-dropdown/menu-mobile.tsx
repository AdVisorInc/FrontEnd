import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { alpha, Box, Divider, Drawer } from '@mui/material';
import { useState } from 'react';
import { SidebarNavMenu } from 'src/components/application-ui/vertical-shells/white/sidebar-nav-menu';
import { Logo } from 'src/components/base/logo';
import { Scrollbar } from 'src/components/base/scrollbar';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { useMenuItems } from 'src/router/nav-items-dummy/stacked-shells/stacked-shells-top-nav-accent';
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
        variant="outlined"
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
          },
        }}
        variant="temporary"
      >
        <Box
          flex={1}
          overflow="auto"
        >
          <Scrollbar>
            <Box
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.neutral[25], 0.02)
                    : 'neutral.25',
              }}
              p={2}
            >
              <Logo isLinkStatic />
            </Box>
            <Divider />
            <SidebarNavMenu menuItems={menuItems} />
          </Scrollbar>
        </Box>
      </Drawer>
    </>
  );
};
