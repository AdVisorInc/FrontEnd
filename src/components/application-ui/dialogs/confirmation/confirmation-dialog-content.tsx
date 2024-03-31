import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
import { Box, Stack, Typography } from '@mui/material';
import { AvatarState } from 'src/components/base/styles/avatar';

const ConfirmationDialogContent = () => {
  return (
    <>
      <Stack
        p={{ xs: 0, sm: 1 }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <AvatarState
          state="success"
          isSoft
          variant="rounded"
          sx={{
            width: 48,
            height: 48,
          }}
        >
          <HowToRegTwoToneIcon sx={{ fontSize: 21 }} />
        </AvatarState>
        <Box textAlign="center">
          <Typography
            variant="h5"
            gutterBottom
          >
            Registration Complete
          </Typography>
          <Typography
            color="text.secondary"
            variant="subtitle2"
          >
            Your account has been successfully created. Welcome to our community!
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default ConfirmationDialogContent;
