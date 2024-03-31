import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ReplayIcon from '@mui/icons-material/Replay';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { AvatarState } from 'src/components/base/styles/avatar';

const AlertFailedAlternate = () => {
  return (
    <Stack
      spacing={2}
      justifyContent="center"
      direction="column"
      alignItems="center"
    >
      <AvatarState
        state="error"
        isSoft
        variant="rounded"
        sx={{
          width: 78,
          height: 78,
        }}
      >
        <ErrorOutlineIcon
          color="error"
          sx={{ fontSize: 40 }}
        />
      </AvatarState>
      <Box textAlign="center">
        <Typography
          color="error.main"
          variant="h5"
          gutterBottom
        >
          Account Creation Failed
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ pb: 1.5 }}
        >
          There was a problem setting up your account.
        </Typography>
        <Typography
          color="text.secondary"
          variant="subtitle2"
          fontWeight={500}
        >
          Please try again or contact support.
        </Typography>
      </Box>
      <Box width="100%">
        <Divider
          flexItem
          sx={{ width: '60%', mx: 'auto' }}
        />
      </Box>

      <Button
        variant="outlined"
        color="secondary"
        startIcon={<ReplayIcon />}
      >
        Try again
      </Button>
    </Stack>
  );
};

export default AlertFailedAlternate;
