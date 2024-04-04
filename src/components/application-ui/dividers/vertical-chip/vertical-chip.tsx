import { Card, CardContent, Chip, Divider, Stack, Theme, useMediaQuery } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Stack
      spacing={2}
      direction={{ xs: 'column', sm: 'row' }}
      divider={
        <Divider
          orientation={smUp ? 'vertical' : 'horizontal'}
          flexItem
        >
          <Chip
            variant="outlined"
            label="AND"
          />
        </Divider>
      }
    >
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <PlaceholderBox />
        </CardContent>
      </Card>
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <PlaceholderBox />
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Component;
