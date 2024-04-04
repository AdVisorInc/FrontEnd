import { Badge, Box, Stack, styled } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const BoxExample = styled(Box)({
  width: 48,
  height: 48,
  '& > .MuiBox-root': {
    width: '100%',
    height: '100%',
    minHeight: 0,
  },
});

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Badge
        variant="dot"
        color="primary"
      >
        <BoxExample>
          <PlaceholderBox />
        </BoxExample>
      </Badge>
      <Badge
        variant="dot"
        color="secondary"
      >
        <BoxExample>
          <PlaceholderBox />
        </BoxExample>
      </Badge>
      <Badge
        variant="dot"
        color="info"
      >
        <BoxExample>
          <PlaceholderBox />
        </BoxExample>
      </Badge>
      <Badge
        variant="dot"
        color="warning"
      >
        <BoxExample>
          <PlaceholderBox />
        </BoxExample>
      </Badge>
      <Badge
        variant="dot"
        color="error"
      >
        <BoxExample>
          <PlaceholderBox />
        </BoxExample>
      </Badge>
      <Badge
        variant="dot"
        color="success"
      >
        <BoxExample>
          <PlaceholderBox />
        </BoxExample>
      </Badge>
      <Badge
        variant="dot"
        color="primary"
        showZero
      >
        <BoxExample>
          <PlaceholderBox />
        </BoxExample>
      </Badge>
    </Stack>
  );
};

export default Component;
