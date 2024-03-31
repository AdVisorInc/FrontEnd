import { Card, Stack, Theme, useMediaQuery } from '@mui/material';
import Menu from './menu';
import { MenuMobile } from './menu-mobile';

const Component = () => {
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <Stack
      pb={{ xs: 24, md: 0 }}
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
        }}
      >
        {mdUp ? <Menu /> : <MenuMobile />}
      </Card>
    </Stack>
  );
};

export default Component;
