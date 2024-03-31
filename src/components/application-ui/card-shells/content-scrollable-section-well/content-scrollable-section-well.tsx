import { alpha, Card, CardContent, CardHeader, Divider } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';
import ScrollableContainer from 'src/components/base/scrollable-container';

const Component = () => {
  return (
    <Card>
      <CardHeader title={<PlaceholderBox />} />
      <Divider />
      <CardContent
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <PlaceholderBox height={128} />
      </CardContent>
      <Divider />
      <ScrollableContainer
        useCustomScrollbar
        height={512}
      >
        <CardContent>
          <PlaceholderBox height={768} />
        </CardContent>
      </ScrollableContainer>
    </Card>
  );
};

export default Component;
