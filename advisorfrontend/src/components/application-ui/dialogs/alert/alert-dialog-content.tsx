import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';
import { Box, Stack, Typography } from '@mui/material';
import { AvatarState } from 'src/components/base/styles/avatar';

const AlertDialogContent = () => {
  return (
    <>
      <Stack
        p={{ xs: 0, sm: 1 }}
        spacing={2}
        justifyContent="center"
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'center', sm: 'flex-start' }}
      >
        <AvatarState
          state="error"
          isSoft
          sx={{
            width: 54,
            height: 54,
          }}
        >
          <WarningTwoToneIcon sx={{ fontSize: 24 }} />
        </AvatarState>
        <Box
          pt={{ xs: 0, sm: 0.5 }}
          textAlign={{ xs: 'center', sm: 'left' }}
        >
          <Typography
            variant="h5"
            gutterBottom
          >
            Confirm Removal of API Access Key
          </Typography>
          <Typography
            color="text.secondary"
            variant="subtitle2"
          >
            Are you sure you want to permanently remove this API access key? This will revoke all
            associated access rights and cannot be recovered once deleted.
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default AlertDialogContent;
