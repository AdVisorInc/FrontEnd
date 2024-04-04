import { alpha, Card, Stack, Theme, useMediaQuery } from '@mui/material';
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
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[50], 0.02) : 'neutral.50',
          borderColor: (theme) => (theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.400'),
          pt: 2,
          px: 2,
          pb: { xs: 2, md: 0 },
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
