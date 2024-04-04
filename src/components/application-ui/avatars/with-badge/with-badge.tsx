import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import { Avatar, Badge, Divider, Stack } from '@mui/material';
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
        <PulseBadge
          overlap="rectangular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar
            variant="square"
            sx={{
              width: 52,
              height: 52,
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
            }}
          >
            A
          </Avatar>
        </PulseBadge>
        <PulseBadge
          overlap="circular"
          color="error"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          variant="dot"
        >
          <Avatar
            sx={{
              width: 52,
              height: 52,
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
            }}
          >
            <HomeTwoToneIcon fontSize="small" />
          </Avatar>
        </PulseBadge>
        <PulseBadge
          color="primary"
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar
            variant="rounded"
            sx={{
              width: 52,
              height: 52,
            }}
            alt="..."
            src="/avatars/1.png"
          />
        </PulseBadge>
      </Stack>
      <Divider sx={{ my: { xs: 3, md: 4 } }} />
      <Stack
        justifyContent="space-around"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Badge
          overlap="rectangular"
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          variant="dot"
          color="warning"
        >
          <Avatar
            variant="square"
            sx={{
              width: 52,
              height: 52,
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
            }}
          >
            A
          </Avatar>
        </Badge>
        <Badge
          overlap="circular"
          color="error"
          badgeContent="53"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <Avatar
            sx={{
              width: 52,
              height: 52,
              backgroundColor: 'secondary.main',
              color: 'secondary.contrastText',
            }}
          >
            <HomeTwoToneIcon fontSize="small" />
          </Avatar>
        </Badge>
        <Badge
          color="secondary"
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          badgeContent="12"
        >
          <Avatar
            variant="rounded"
            sx={{
              width: 52,
              height: 52,
            }}
            alt="..."
            src="/avatars/2.png"
          />
        </Badge>
      </Stack>
    </>
  );
};

export default Component;
