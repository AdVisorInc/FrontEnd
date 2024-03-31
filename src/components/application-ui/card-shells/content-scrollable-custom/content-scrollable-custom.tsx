import { Card, CardContent, CardHeader, Divider } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';
import ScrollableContainer from 'src/components/base/scrollable-container';

const Component = () => {
  return (
    <Card>
      <CardHeader title={<PlaceholderBox />} />
      <Divider />
      <ScrollableContainer useCustomScrollbar>
        <CardContent>
          <PlaceholderBox height={512} />
        </CardContent>
      </ScrollableContainer>
    </Card>
  );
};

export default Component;
