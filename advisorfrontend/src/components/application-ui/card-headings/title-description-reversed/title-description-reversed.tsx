import { Card, CardContent, CardHeader, Divider } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Card>
      <CardHeader
        titleTypographyProps={{ variant: 'caption', fontWeight: 600, color: 'text.secondary' }}
        title="Messenger"
        subheader="Recent conversations"
        subheaderTypographyProps={{ variant: 'h6', color: 'text.primary' }}
      />
      <Divider />
      <CardContent>
        <PlaceholderBox height={128} />
      </CardContent>
    </Card>
  );
};

export default Component;
