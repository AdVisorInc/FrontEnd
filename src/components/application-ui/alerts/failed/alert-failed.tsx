import PriorityHighTwoToneIcon from '@mui/icons-material/PriorityHighTwoTone';
import ReplayIcon from '@mui/icons-material/Replay';
import { Box, Divider, Stack, Tooltip, Typography } from '@mui/material';
import { AvatarState } from 'src/components/base/styles/avatar';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

const AlertFailed = () => {
  return (
    <Stack
      spacing={2}
      justifyContent="center"
      direction="column"
      alignItems="center"
    >
      <AvatarState
        state="error"
        useShadow
        sx={{
          width: 44,
          height: 44,
        }}
      >
        <PriorityHighTwoToneIcon sx={{ fontSize: 24 }} />
      </AvatarState>
      <Box textAlign="center">
        <Typography
          color="error.main"
          variant="h6"
          gutterBottom
        >
          Account Creation Failed
        </Typography>
        <Typography
          color="text.secondary"
          variant="h4"
          fontWeight={400}
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
      <Tooltip
        arrow
        placement="top"
        title="Retry"
      >
        <ButtonIcon
          variant="outlined"
          color="error"
        >
          <ReplayIcon />
        </ButtonIcon>
      </Tooltip>
    </Stack>
  );
};

export default AlertFailed;
