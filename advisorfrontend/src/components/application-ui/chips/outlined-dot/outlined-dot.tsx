import { Badge, Chip, Stack } from '@mui/material';
import { InlineBadge } from 'src/components/base/styles/inline-badge';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';

const Component = () => {
  return (
    <Stack
      py={2}
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Chip
        variant="outlined"
        color="primary"
        label={
          <>
            <InlineBadge>
              <PulseBadge
                variant="dot"
                color="primary"
                sx={{
                  mr: 1,
                }}
              />
              Chip
            </InlineBadge>
          </>
        }
      />
      <Chip
        variant="outlined"
        color="secondary"
        label={
          <>
            <InlineBadge>
              <Badge
                variant="dot"
                color="secondary"
                sx={{
                  mr: 1,
                }}
              />
              Chip
            </InlineBadge>
          </>
        }
      />
      <Chip
        variant="outlined"
        color="info"
        label={
          <>
            <InlineBadge>
              <Badge
                variant="dot"
                color="info"
                sx={{
                  mr: 1,
                }}
              />
              Chip
            </InlineBadge>
          </>
        }
      />
      <Chip
        variant="outlined"
        color="warning"
        label={
          <>
            <InlineBadge>
              <Badge
                variant="dot"
                color="warning"
                sx={{
                  mr: 1,
                }}
              />
              Chip
            </InlineBadge>
          </>
        }
      />
      <Chip
        variant="outlined"
        color="error"
        label={
          <>
            <InlineBadge>
              <PulseBadge
                variant="dot"
                color="error"
                sx={{
                  mr: 1,
                }}
              />
              Chip
            </InlineBadge>
          </>
        }
      />
      <Chip
        variant="outlined"
        color="success"
        label={
          <>
            <InlineBadge>
              <PulseBadge
                variant="dot"
                color="success"
                sx={{
                  mr: 1,
                }}
              />
              Chip
            </InlineBadge>
          </>
        }
      />
    </Stack>
  );
};

export default Component;
