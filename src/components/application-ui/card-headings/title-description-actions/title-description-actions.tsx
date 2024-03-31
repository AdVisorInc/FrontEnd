import { Button, Card, CardContent, CardHeader, Divider } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Card>
      <CardHeader
        title="User Analytics"
        subheader="Overview of monthly activity"
        action={
          <Button
            variant="contained"
            color="primary"
          >
            View Detailed Report
          </Button>
        }
      />
      <Divider />
      <CardContent>
        <PlaceholderBox height={128} />
      </CardContent>
    </Card>
  );
};

export default Component;
