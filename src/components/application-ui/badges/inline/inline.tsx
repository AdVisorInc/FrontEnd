import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import { Badge, Divider, Stack, Typography } from '@mui/material';
import { InlineBadge } from 'src/components/base/styles/inline-badge';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';
import { RingBadge } from 'src/components/base/styles/ring-badge';

const Component = () => {
  return (
    <>
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <InlineBadge>
          <Badge
            badgeContent="999"
            color="primary"
            sx={{
              mr: 0.5,
            }}
          />
          <Typography>Primary Badge</Typography>
        </InlineBadge>
        <InlineBadge>
          <Badge
            badgeContent=" "
            color="error"
            sx={{
              mr: 0.5,
            }}
          />

          <Typography
            variant="h6"
            color="error.main"
          >
            Notification
          </Typography>
        </InlineBadge>
        <InlineBadge>
          <Badge
            badgeContent={<DoneTwoToneIcon fontSize="inherit" />}
            color="success"
            sx={{
              mr: 0.5,
            }}
          />
          <Typography
            color="success.main"
            variant="h6"
          >
            Success
          </Typography>
        </InlineBadge>
        <InlineBadge>
          <Typography>Profiles:</Typography>
          <Badge
            badgeContent="43"
            color="secondary"
            sx={{
              ml: 0.5,
            }}
          />
        </InlineBadge>
      </Stack>
      <Divider sx={{ my: { xs: 3, md: 4 } }} />
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <InlineBadge>
          <RingBadge
            badgeContent="999"
            color="primary"
            sx={{
              mr: 1,
            }}
          />
          <Typography>Primary Badge</Typography>
        </InlineBadge>
        <InlineBadge>
          <RingBadge
            badgeContent=" "
            color="error"
            sx={{
              mr: 1,
            }}
          />

          <Typography
            variant="h6"
            color="error.main"
          >
            Notification
          </Typography>
        </InlineBadge>
        <InlineBadge>
          <RingBadge
            badgeContent={<DoneTwoToneIcon fontSize="inherit" />}
            color="success"
            sx={{
              mr: 1,
            }}
          />
          <Typography
            color="success.main"
            variant="h6"
          >
            Success
          </Typography>
        </InlineBadge>
        <InlineBadge>
          <Typography>Profiles:</Typography>
          <RingBadge
            badgeContent="43"
            color="secondary"
            sx={{
              ml: 1,
            }}
          />
        </InlineBadge>
      </Stack>
      <Divider sx={{ my: { xs: 3, md: 4 } }} />
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <InlineBadge>
          <PulseBadge
            variant="dot"
            color="warning"
            sx={{
              mr: 1,
            }}
          />
          <Typography
            variant="body2"
            color="warning.light"
          >
            Provisioning in progress...
          </Typography>
        </InlineBadge>
        <InlineBadge>
          <PulseBadge
            variant="dot"
            color="error"
            sx={{
              mr: 1,
            }}
          />

          <Typography
            variant="h6"
            fontWeight={500}
            color="error.main"
          >
            Error
          </Typography>
        </InlineBadge>
        <InlineBadge>
          <PulseBadge
            variant="dot"
            color="success"
            sx={{
              mr: 1,
            }}
          />
          <Typography
            color="text.secondary"
            fontWeight={500}
          >
            Success
          </Typography>
        </InlineBadge>
        <InlineBadge>
          <PulseBadge
            badgeContent=" "
            color="error"
            sx={{
              mr: 1,
            }}
          />
          <Typography color="error.main">Something is wrong!</Typography>
        </InlineBadge>
      </Stack>
    </>
  );
};

export default Component;
