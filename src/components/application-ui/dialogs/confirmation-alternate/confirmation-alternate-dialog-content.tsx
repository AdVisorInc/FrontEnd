import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
import { Box, Stack, Typography } from '@mui/material';
import { AvatarState } from 'src/components/base/styles/avatar';

const ConfirmationAlternateDialogContent = () => {
  return (
    <>
      <Stack
        p={{ xs: 0, sm: 1 }}
        spacing={{ xs: 2, sm: 3 }}
        justifyContent="center"
        alignItems="center"
      >
        <AvatarState
          state="primary"
          useShadow
          sx={{
            width: 54,
            height: 54,
          }}
        >
          <HowToRegTwoToneIcon sx={{ fontSize: 23 }} />
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

export default ConfirmationAlternateDialogContent;
