import { RefreshTwoTone } from '@mui/icons-material';
import { Box, CircularProgress, Divider, Stack, Tooltip, Typography } from '@mui/material';
import { AvatarState } from 'src/components/base/styles/avatar';
import { ButtonIcon } from 'src/components/base/styles/button-icon';

const AlertProgressAlternate = () => {
  return (
    <Stack
      spacing={{ xs: 2, sm: 3 }}
      justifyContent="center"
      direction="column"
      alignItems="center"
    >
      <AvatarState
        state="warning"
        isSoft
        sx={{
          width: 84,
          height: 84,
        }}
      >
        <CircularProgress color="inherit" />
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
          variant="h4"
          fontWeight={400}
          sx={{ px: 2 }}
        >
          Please wait while we set up your account.
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
        title="Refresh"
        placement="top"
      >
        <ButtonIcon
          variant="outlined"
          color="warning"
        >
          <RefreshTwoTone />
        </ButtonIcon>
      </Tooltip>
    </Stack>
  );
};

export default AlertProgressAlternate;
