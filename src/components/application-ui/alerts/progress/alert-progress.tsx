import { RefreshTwoTone } from '@mui/icons-material';
import HourglassEmptyTwoToneIcon from '@mui/icons-material/HourglassEmptyTwoTone';
import { Box, Button, LinearProgress, Stack, Typography } from '@mui/material';
import { AvatarState } from 'src/components/base/styles/avatar';

const AlertProgress = () => {
  return (
    <Stack
      spacing={2}
      justifyContent="center"
      direction="column"
      alignItems="center"
    >
      <AvatarState
        state="warning"
        useShadow
        variant="rounded"
        sx={{
          width: 64,
          height: 64,
        }}
      >
        <HourglassEmptyTwoToneIcon fontSize="large" />
      </AvatarState>
      <Box textAlign="center">
        <Typography
          color="text.primary"
          variant="h5"
        >
          Account Creation in Progress
        </Typography>
        <Typography
          color="text.secondary"
          variant="subtitle1"
          sx={{ px: 2 }}
        >
          Please wait while we set up your account.
        </Typography>
      </Box>
      <Box
        width="100%"
        textAlign="center"
      >
        <LinearProgress color="warning" />

        <Typography
          sx={{ pt: 1 }}
          variant="subtitle2"
          fontWeight={500}
          color="text.secondary"
        >
          This may take a few minutes.
        </Typography>
      </Box>
      <Button
        variant="outlined"
        startIcon={<RefreshTwoTone />}
        color="warning"
      >
        Check Status
      </Button>
    </Stack>
  );
};

export default AlertProgress;
