import { alpha, Card, CardContent, CardHeader, Divider } from '@mui/material';
import SearchBasic from 'src/components/application-ui/input/search/search-basic';
import PlaceholderBox from 'src/components/base/placeholder-box';
import ScrollableContainer from 'src/components/base/scrollable-container';

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
      <Divider />
      <SearchBasic />
      <Divider />
      <ScrollableContainer>
        <CardContent>
          <PlaceholderBox height={512} />
        </CardContent>
      </ScrollableContainer>
    </Card>
  );
};

export default Component;
