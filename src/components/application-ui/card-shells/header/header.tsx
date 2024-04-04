import { Card, CardContent, CardHeader, Divider } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Card>
      <CardHeader title={<PlaceholderBox />} />
      <Divider />
      <CardContent>
        <PlaceholderBox height={256} />
      </CardContent>
    </Card>
  );
};

export default Component;
