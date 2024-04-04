import { Badge, Box, Divider, Stack, styled } from '@mui/material';
import PlaceholderBox from 'src/components/base/placeholder-box';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';

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
          badgeContent="999"
          color="primary"
          overlap="circular"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
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
          badgeContent="999"
          color="primary"
          overlap="circular"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
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
          badgeContent="999"
          color="primary"
          overlap="circular"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
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
          badgeContent="999"
          color="primary"
          overlap="circular"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <BoxExample
            sx={{
              borderRadius: '50%',
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
        <PulseBadge
          variant="dot"
          color="success"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <BoxExample
            sx={{
              borderRadius: (theme) => theme.shape.borderRadius + 'px',
            }}
          >
            <PlaceholderBox />
          </BoxExample>
        </PulseBadge>
        <PulseBadge
          variant="dot"
          color="error"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <BoxExample
            sx={{
              borderRadius: (theme) => theme.shape.borderRadius + 'px',
            }}
          >
            <PlaceholderBox />
          </BoxExample>
        </PulseBadge>
        <PulseBadge
          variant="dot"
          color="warning"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <BoxExample
            sx={{
              borderRadius: (theme) => theme.shape.borderRadius + 'px',
            }}
          >
            <PlaceholderBox />
          </BoxExample>
        </PulseBadge>
        <PulseBadge
          variant="dot"
          color="primary"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <BoxExample
            sx={{
              borderRadius: (theme) => theme.shape.borderRadius + 'px',
            }}
          >
            <PlaceholderBox />
          </BoxExample>
        </PulseBadge>
      </Stack>
    </>
  );
};

export default Component;
