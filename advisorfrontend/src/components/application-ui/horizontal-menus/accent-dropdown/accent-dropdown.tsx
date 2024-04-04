import { Box, Card, Stack, Theme, useMediaQuery } from '@mui/material';
import { Menu } from 'src/components/application-ui/stacked-shells/top-nav/menu';
import { Logo } from 'src/components/base/logo';
import { useMenuItems } from 'src/router/nav-items-dummy/stacked-shells/stacked-shells-top-nav';
import { MenuMobile } from './menu-mobile';

const Component = () => {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const menuItems = useMenuItems();

  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Card
        elevation={0}
        variant="outlined"
        sx={{
          p: 2,
          overflow: 'visible',
          width: '100%',
          backgroundColor: 'neutral.900',
          display: 'flex',
          justifyContent: { xs: 'space-between', md: 'flex-start' },
        }}
      >
        <Box
          mr={2}
          display="flex"
          alignItems="center"
        >
          <Logo
            dark
            isLinkStatic
          />
        </Box>
        {mdUp ? <Menu menuItems={menuItems} /> : <MenuMobile />}
      </Card>
    </Stack>
  );
};

export default Component;
