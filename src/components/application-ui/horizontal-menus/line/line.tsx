import { Box, Card, Stack, Theme, useMediaQuery } from '@mui/material';
import { Logo } from 'src/components/base/logo';
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
          px: 2,
          py: { xs: 1.5, md: 0 },
          overflow: 'visible',
          width: '100%',
          justifyContent: { xs: 'space-between', md: 'center' },
          display: 'flex',
          position: 'relative',
        }}
      >
        <Box
          position={{ xs: 'static', md: 'absolute' }}
          left={12}
          top={16}
          display="flex"
          alignItems="center"
        >
          <Logo isLinkStatic />
        </Box>
        {mdUp ? <Menu /> : <MenuMobile />}
      </Card>
    </Stack>
  );
};

export default Component;
