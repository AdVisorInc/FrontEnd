import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box, Drawer } from '@mui/material';
import { useState } from 'react';
import VerticalMenuPillsPrimary from 'src/components/application-ui/vertical-menus/pills/menu-pills-primary';
import { Logo } from 'src/components/base/logo';
import { Scrollbar } from 'src/components/base/scrollbar';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { SIDEBAR_WIDTH } from 'src/theme/utils';

export const MenuMobile = () => {
  const [open, setOpen] = useState(false);

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
        color="primary"
        size="small"
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
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? 'common.black' : 'common.white',
          },
        }}
        variant="temporary"
      >
        <Box
          flex={1}
          overflow="auto"
        >
          <Scrollbar>
            <Box p={2}>
              <Box mb={2}>
                <Logo isLinkStatic />
              </Box>
              <VerticalMenuPillsPrimary />
            </Box>
          </Scrollbar>
        </Box>
      </Drawer>
    </>
  );
};
