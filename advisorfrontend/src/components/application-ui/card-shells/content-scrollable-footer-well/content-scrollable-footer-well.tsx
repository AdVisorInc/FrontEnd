import { alpha, Card, CardActions, CardContent, CardHeader, Divider } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';
import ScrollableContainer from 'src/components/base/scrollable-container';

const Component = () => {
  return (
    <Card>
      <CardHeader title={<PlaceholderBox />} />
      <Divider />
      <ScrollableContainer
        useCustomScrollbar
        height={256}
      >
        <CardContent>
          <PlaceholderBox height={512} />
        </CardContent>
      </ScrollableContainer>
      <Divider />
      <CardActions
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <PlaceholderBox flex={1} />
      </CardActions>
    </Card>
  );
};

export default Component;
