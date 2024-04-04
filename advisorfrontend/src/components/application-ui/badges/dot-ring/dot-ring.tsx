import { Box, Divider, Stack, styled } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';
import { RingBadge } from 'src/components/base/styles/ring-badge';

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
    <>
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <RingBadge
          variant="dot"
          color="primary"
        >
          <BoxExample>
            <PlaceholderBox />
          </BoxExample>
        </RingBadge>
        <RingBadge
          variant="dot"
          color="secondary"
        >
          <BoxExample>
            <PlaceholderBox />
          </BoxExample>
        </RingBadge>
        <RingBadge
          variant="dot"
          color="info"
        >
          <BoxExample>
            <PlaceholderBox />
          </BoxExample>
        </RingBadge>
        <RingBadge
          variant="dot"
          color="warning"
        >
          <BoxExample>
            <PlaceholderBox />
          </BoxExample>
        </RingBadge>
        <RingBadge
          variant="dot"
          color="error"
        >
          <BoxExample>
            <PlaceholderBox />
          </BoxExample>
        </RingBadge>
        <RingBadge
          variant="dot"
          color="success"
        >
          <BoxExample>
            <PlaceholderBox />
          </BoxExample>
        </RingBadge>
        <RingBadge
          variant="dot"
          color="primary"
          showZero
        >
          <BoxExample>
            <PlaceholderBox />
          </BoxExample>
        </RingBadge>
      </Stack>
      <Divider sx={{ my: { xs: 3, md: 4 } }} />

      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <RingBadge
          badgeContent=" "
          color="primary"
        >
          <BoxExample>
            <PlaceholderBox />
          </BoxExample>
        </RingBadge>
        <RingBadge
          badgeContent=" "
          color="secondary"
        >
          <BoxExample>
            <PlaceholderBox />
          </BoxExample>
        </RingBadge>
        <RingBadge
          badgeContent=" "
          color="info"
        >
          <BoxExample>
            <PlaceholderBox />
          </BoxExample>
        </RingBadge>
        <RingBadge
          badgeContent=" "
          color="warning"
        >
          <BoxExample>
            <PlaceholderBox />
          </BoxExample>
        </RingBadge>
        <RingBadge
          badgeContent=" "
          color="error"
        >
          <BoxExample>
            <PlaceholderBox />
          </BoxExample>
        </RingBadge>
        <RingBadge
          badgeContent=" "
          color="success"
        >
          <BoxExample>
            <PlaceholderBox />
          </BoxExample>
        </RingBadge>
        <RingBadge
          badgeContent=" "
          color="primary"
          showZero
        >
          <BoxExample>
            <PlaceholderBox />
          </BoxExample>
        </RingBadge>
      </Stack>
    </>
  );
};

export default Component;
