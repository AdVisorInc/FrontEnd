import { Card, CardActions, CardContent, CardHeader, Divider } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';
import ScrollableContainer from 'src/components/base/scrollable-container';

const Component = () => {
  return (
    <Card>
      <CardHeader title={<PlaceholderBox />} />
      <Divider />
      <ScrollableContainer height={256}>
        <CardContent>
          <PlaceholderBox height={512} />
        </CardContent>
      </ScrollableContainer>
      <Divider />
      <CardActions>
        <PlaceholderBox flex={1} />
      </CardActions>
    </Card>
  );
};

export default Component;
