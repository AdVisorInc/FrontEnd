import { Badge, Chip, Divider, Stack } from '@mui/material';
import { InlineBadge } from 'src/components/base/styles/inline-badge';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';

const Component = () => {
  return (
    <>
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Chip
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
      <Divider sx={{ my: { xs: 3, md: 4 } }} />
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Chip
          variant="outlined"
          size="small"
          label={
            <>
              <InlineBadge>
                <Badge
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
          size="small"
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
          size="small"
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
          size="small"
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
          size="small"
          label={
            <>
              <InlineBadge>
                <Badge
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
          size="small"
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
    </>
  );
};

export default Component;
