import { alpha, Card, CardContent, Divider, Stack, Theme, useMediaQuery } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      divider={
        <Divider
          sx={{ mx: { sm: 2 }, my: { xs: 2, sm: 1 } }}
          flexItem
          variant="middle"
          orientation={smUp ? 'vertical' : 'horizontal'}
        />
      }
    >
      <Card
        sx={{
          width: '100%',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <CardContent>
          <PlaceholderBox />
        </CardContent>
      </Card>
      <Card
        sx={{
          width: '100%',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <CardContent>
          <PlaceholderBox />
        </CardContent>
      </Card>
      <Card
        sx={{
          width: '100%',
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <CardContent>
          <PlaceholderBox />
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Component;
