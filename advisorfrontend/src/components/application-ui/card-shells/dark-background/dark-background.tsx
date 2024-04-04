import { Card, CardContent } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';
import { CardActionsLight, CardHeaderLight, DividerLight } from 'src/components/base/styles/card';

const Component = () => {
  return (
    <Card
      sx={{
        backgroundColor: 'neutral.900',
      }}
    >
      <CardHeaderLight title={<PlaceholderBox dark />} />
      <DividerLight />
      <CardContent>
        <PlaceholderBox
          dark
          height={256}
        />
      </CardContent>
      <DividerLight />
      <CardActionsLight>
        <PlaceholderBox
          dark
          flex={1}
          height={64}
        />
      </CardActionsLight>
    </Card>
  );
};

export default Component;
