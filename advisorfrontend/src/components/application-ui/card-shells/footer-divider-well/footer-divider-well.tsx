import { alpha, Card, CardActions, CardContent, Divider } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Card>
      <CardContent>
        <PlaceholderBox height={256} />
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <PlaceholderBox flex={1} />
      </CardActions>
    </Card>
  );
};

export default Component;
