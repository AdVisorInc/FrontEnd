import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box, Drawer } from '@mui/material';
import { useState } from 'react';
import VerticalMenuRoundedSecondary from 'src/components/application-ui/vertical-menus/rounded/menu-rounded-secondary';
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
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? 'neutral.900' : 'common.white',
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
              <VerticalMenuRoundedSecondary />
            </Box>
          </Scrollbar>
        </Box>
      </Drawer>
    </>
  );
};
