import { Card, CardActions, CardContent, Divider } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Card>
      <CardContent>
        <PlaceholderBox height={256} />
      </CardContent>
      <Divider />
      <CardActions>
        <PlaceholderBox flex={1} />
      </CardActions>
    </Card>
  );
};

export default Component;
