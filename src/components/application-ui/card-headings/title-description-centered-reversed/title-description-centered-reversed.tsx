import { alpha, Card, CardContent, CardHeader, Divider } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const Component = () => {
  return (
    <Card>
      <CardHeader
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
        titleTypographyProps={{
          variant: 'caption',
          textAlign: 'center',
          fontWeight: 600,
          color: 'text.secondary',
        }}
        title="Analytics"
        subheader="Comprehensive Insights"
        subheaderTypographyProps={{ variant: 'h5', color: 'text.primary', textAlign: 'center' }}
      />
      <Divider />
      <CardContent>
        <PlaceholderBox height={128} />
      </CardContent>
    </Card>
  );
};

export default Component;
