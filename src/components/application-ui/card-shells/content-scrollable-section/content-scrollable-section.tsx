import { Card, CardContent, CardHeader, Divider } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';
import ScrollableContainer from 'src/components/base/scrollable-container';

const Component = () => {
  return (
    <Card>
      <CardHeader title={<PlaceholderBox />} />
      <Divider />
      <CardContent>
        <PlaceholderBox height={64} />
      </CardContent>
      <Divider />
      <ScrollableContainer height={512}>
        <CardContent>
          <PlaceholderBox height={768} />
        </CardContent>
      </ScrollableContainer>
    </Card>
  );
};

export default Component;
