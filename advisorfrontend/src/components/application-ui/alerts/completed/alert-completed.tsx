import DoneIcon from '@mui/icons-material/Done';
import { Box, Typography } from '@mui/material';
import { AvatarState } from 'src/components/base/styles/avatar';

const AlertCompleted = () => {
  return (
    <Box textAlign="center">
      <AvatarState
        state="success"
        isSoft
        sx={{
          width: 64,
          height: 64,
          mx: 'auto',
          mb: 2,
        }}
      >
        <DoneIcon fontSize="large" />
      </AvatarState>
      <Typography
        color="success.main"
        variant="h4"
      >
        All steps completed!
      </Typography>
    </Box>
  );
};

export default AlertCompleted;
