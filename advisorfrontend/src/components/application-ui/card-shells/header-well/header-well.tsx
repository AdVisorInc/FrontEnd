import { alpha, Card, CardContent, CardHeader } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Card>
      <CardHeader
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
        title={<PlaceholderBox />}
      />
      <CardContent>
        <PlaceholderBox height={256} />
      </CardContent>
    </Card>
  );
};

export default Component;
