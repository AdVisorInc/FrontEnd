import { Card, Stack, Theme, useMediaQuery } from '@mui/material';
import { Menu } from 'src/components/application-ui/stacked-shells/top-nav-tabs/menu';
import { useMenuItems } from 'src/router/nav-items-dummy/stacked-shells/stacked-shells-top-nav-tabs';
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
          px: 2,
          py: { xs: 1.5, md: 0 },
          overflow: 'visible',
          width: '100%',
        }}
      >
        {mdUp ? <Menu menuItems={menuItems} /> : <MenuMobile />}
      </Card>
    </Stack>
  );
};

export default Component;
