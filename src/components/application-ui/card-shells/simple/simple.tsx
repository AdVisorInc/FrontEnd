import { Card, CardContent } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Card>
      <CardContent>
        <PlaceholderBox height={256} />
      </CardContent>
    </Card>
  );
};

export default Component;
