import { Chip, Divider } from '@mui/material';
import { InlineBadge } from 'src/components/base/styles/inline-badge';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';

const Component = () => {
  return (
    <Divider>
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
              Chip Divider
            </InlineBadge>
          </>
        }
      />
    </Divider>
  );
};

export default Component;
