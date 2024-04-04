import { Card, CardContent, CardHeader, Divider } from '@mui/material';
import AvatarTitle from 'src/components/application-ui/avatars/with-text/avatar-title';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Card>
      <CardHeader
        disableTypography
        sx={{ '.MuiCardHeader-content': { overflow: 'visible' } }}
        title={<AvatarTitle />}
      />
      <Divider />
      <CardContent>
        <PlaceholderBox height={128} />
      </CardContent>
    </Card>
  );
};

export default Component;
