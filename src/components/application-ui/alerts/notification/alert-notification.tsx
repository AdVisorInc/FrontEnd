import NotificationImportantTwoToneIcon from '@mui/icons-material/NotificationImportantTwoTone';
import { Box, Stack, Typography } from '@mui/material';
import { AvatarState } from 'src/components/base/styles/avatar';
import { ButtonRounded } from 'src/components/base/styles/button-rounded';

const AlertNotification = () => {
  return (
    <Stack
      spacing={2}
      justifyContent="center"
      direction="column"
      alignItems="center"
    >
      <AvatarState
        state="info"
        useShadow
        variant="rounded"
        sx={{
          width: 48,
          height: 48,
        }}
      >
        <NotificationImportantTwoToneIcon sx={{ fontSize: 21 }} />
      </AvatarState>
      <Box textAlign="center">
        <Typography
          variant="h4"
          color="info.main"
        >
          Payment Details
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
        >
          Please review the information details you submitted earlier.
        </Typography>
      </Box>
      <ButtonRounded
        variant="outlined"
        color="primary"
        size="small"
      >
        Update details
      </ButtonRounded>
    </Stack>
  );
};

export default AlertNotification;
