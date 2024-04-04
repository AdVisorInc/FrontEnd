import { Card, CardContent, CardHeader, Divider } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Card>
      <CardHeader
        titleTypographyProps={{ variant: 'h4' }}
        subheaderTypographyProps={{ variant: 'h5', fontWeight: 400 }}
        title="User Analytics"
        subheader="Overview of monthly activity"
      />
      <Divider />
      <CardContent>
        <PlaceholderBox height={128} />
      </CardContent>
    </Card>
  );
};

export default Component;
