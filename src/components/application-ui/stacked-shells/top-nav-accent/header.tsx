import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
  Box,
  Button,
  Container,
  Stack,
  styled,
  SwipeableDrawer,
  Theme,
  useMediaQuery,
} from '@mui/material';
import PropTypes from 'prop-types';
import { FC } from 'react';
import { SidebarNavMenu } from 'src/components/application-ui/vertical-shells/white/sidebar-nav-menu';
import { Logo } from 'src/components/base/logo';
import { Scrollbar } from 'src/components/base/scrollbar';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { useCustomization } from 'src/hooks/use-customization';
import { MenuItem } from 'src/router/menuItem';
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from 'src/theme/utils';
import { Menu } from './menu';

const HeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  boxShadow: theme.shadows[7],
  background: theme.palette.background.paper,
  position: 'relative',
  zIndex: theme.zIndex.appBar,
}));

interface HeaderProps {
  onClose?: () => void;
  menuItems?: MenuItem[];
  onOpen?: () => void;
  open?: boolean;
}

const SidebarWrapper = styled(Box)({
  height: '100vh',
  color: 'neutral.200',
  display: 'flex',
  flexDirection: 'column',
});

export const Header: FC<HeaderProps> = (props) => {
  const { onClose, onOpen, menuItems, open, ...other } = props;
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const customization = useCustomization();

  const sidebarContentMobile = (
    <SidebarWrapper
      component="nav"
      role="navigation"
      sx={{
        width: SIDEBAR_WIDTH,
      }}
    >
      <Box
        p={2}
        display="flex"
        justifyContent={{ xs: 'flex-start', lg: 'space-between' }}
        alignItems="center"
      >
        <Logo isLinkStatic />
      </Box>

      <Box
        flex={1}
        overflow="auto"
        position="relative"
        zIndex={6}
      >
        <Scrollbar dark>
          <SidebarNavMenu menuItems={menuItems} />
        </Scrollbar>
      </Box>
    </SidebarWrapper>
  );

  return (
    <>
      <HeaderWrapper
        role="banner"
        sx={{
          height: HEADER_HEIGHT * 1.5,
          width: {
            xs: '100%',
          },
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
          maxWidth={customization.stretch ? false : 'xl'}
        >
          <Stack
            flex={1}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {mdUp ? (
              <Menu menuItems={menuItems} />
            ) : (
              <ButtonIcon
                variant="outlined"
                onClick={onOpen}
              >
                <MenuRoundedIcon fontSize="small" />
              </ButtonIcon>
            )}
            <Box>
              <Button variant="contained">Create</Button>
            </Box>
          </Stack>
        </Container>
      </HeaderWrapper>
      {!mdUp && (
        <SwipeableDrawer
          anchor="left"
          onClose={onClose}
          onOpen={onOpen}
          open={open}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              overflow: 'hidden',
              boxShadow: (theme) => theme.shadows[24],
            },
          }}
          variant="temporary"
          {...other}
        >
          {sidebarContentMobile}
        </SwipeableDrawer>
      )}
    </>
  );
};

Header.propTypes = {
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  menuItems: PropTypes.array,
  open: PropTypes.bool,
};
