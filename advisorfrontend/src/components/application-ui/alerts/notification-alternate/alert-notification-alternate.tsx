import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';
import NotificationImportantTwoToneIcon from '@mui/icons-material/NotificationImportantTwoTone';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { AvatarState } from 'src/components/base/styles/avatar';

const AlertNotificationAlternate = () => {
  return (
    <Stack
      spacing={2}
      justifyContent="center"
      direction="column"
      alignItems="center"
    >
      <AvatarState
        state="info"
        isSoft
        sx={{
          width: 54,
          height: 54,
        }}
      >
        <NotificationImportantTwoToneIcon />
      </AvatarState>
      <Box textAlign="center">
        <Typography
          color="info.main"
          variant="h6"
          gutterBottom
        >
          Payment Details
        </Typography>
        <Typography variant="subtitle2">
          Please review the information details you submitted earlier.
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
        startIcon={<AutoAwesomeTwoToneIcon />}
        size="small"
      >
        Update details
      </Button>
    </Stack>
  );
};

export default AlertNotificationAlternate;
