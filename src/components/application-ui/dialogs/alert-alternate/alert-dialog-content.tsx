import WarningTwoToneIcon from '@mui/icons-material/WarningTwoTone';
import { Box, Stack, Typography } from '@mui/material';
import { AvatarState } from 'src/components/base/styles/avatar';

const AlertDialogContent = () => {
  return (
    <>
      <Stack
        p={{ xs: 0, sm: 2 }}
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
            variant="h3"
            gutterBottom
          >
            You are about to permanently delete selected items
          </Typography>
          <Typography
            variant="h5"
            fontWeight={500}
            sx={{ pb: 2 }}
          >
            Deleting these items will also remove all associated data.
          </Typography>
          <Typography
            color="text.secondary"
            variant="subtitle1"
            fontWeight={400}
          >
            Please ensure you have backed up any necessary information before proceeding.
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default AlertDialogContent;
