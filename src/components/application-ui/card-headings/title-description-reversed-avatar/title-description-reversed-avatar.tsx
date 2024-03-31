import { Box, Card, CardContent, CardHeader, Divider, styled } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';
import { RingBadge } from 'src/components/base/styles/ring-badge';

const BoxExample = styled(Box)({
  width: 44,
  height: 44,
  borderRadius: 6,

  '& > .MuiBox-root': {
    width: '100%',
    height: '100%',
    minHeight: 0,
    borderRadius: 'inherit',
  },
});

const Component = () => {
  return (
    <Card>
      <CardHeader
        titleTypographyProps={{ variant: 'caption', fontWeight: 600, color: 'text.secondary' }}
        title="Messenger"
        subheader="Recent conversations"
        subheaderTypographyProps={{ variant: 'h6', color: 'text.primary' }}
        action={
          <RingBadge
            variant="dot"
            color="error"
          >
            <BoxExample>
              <PlaceholderBox />
            </BoxExample>
          </RingBadge>
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
