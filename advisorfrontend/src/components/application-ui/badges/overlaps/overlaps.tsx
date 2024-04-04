import { Badge, Box, Divider, Stack, styled } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';

const BoxExample = styled(Box)({
  width: 56,
  height: 56,

  '& > .MuiBox-root': {
    width: '100%',
    height: '100%',
    minHeight: 0,
    borderRadius: 'inherit',
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
        <Badge
          badgeContent=" "
          color="success"
        >
          <BoxExample>
            <PlaceholderBox />
          </BoxExample>
        </Badge>
        <Badge
          badgeContent=" "
          color="success"
          overlap="circular"
        >
          <BoxExample
            sx={{
              borderRadius: '50%',
            }}
          >
            <PlaceholderBox />
          </BoxExample>
        </Badge>
        <Badge
          badgeContent=" "
          color="success"
        >
          <BoxExample
            sx={{
              borderRadius: (theme) => theme.shape.borderRadius + 'px',
            }}
          >
            <PlaceholderBox />
          </BoxExample>
        </Badge>
      </Stack>
      <Divider sx={{ my: { xs: 3, md: 4 } }} />

      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
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
          color="success"
          overlap="circular"
        >
          <BoxExample
            sx={{
              borderRadius: '50%',
            }}
          >
            <PlaceholderBox />
          </BoxExample>
        </Badge>
        <Badge
          variant="dot"
          color="success"
        >
          <BoxExample
            sx={{
              borderRadius: (theme) => theme.shape.borderRadius + 'px',
            }}
          >
            <PlaceholderBox />
          </BoxExample>
        </Badge>
      </Stack>
    </>
  );
};

export default Component;
