import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import { Box, Button, CircularProgress, Divider, Stack, Typography } from '@mui/material';
import { AvatarState } from 'src/components/base/styles/avatar';

const EmptyStateTitleAction = () => {
  return (
    <Stack
      py={2}
      direction="row"
      spacing={2}
    >
      <AvatarState
        state="info"
        isSoft
        sx={{
          width: 84,
          height: 84,
        }}
      >
        <CircularProgress color="inherit" />
      </AvatarState>
      <Stack spacing={2}>
        <Typography
          color="text.primary"
          variant="h2"
          fontWeight={700}
        >
          We're currently down for maintenance
        </Typography>
        <Divider
          sx={{
            borderWidth: 4,
            width: 60,
            borderRadius: 22,
            borderColor: 'secondary.main',
          }}
        />
        <Box>
          <Button
            variant="outlined"
            color="secondary"
            endIcon={<ArrowForwardTwoToneIcon />}
          >
            View updates
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default EmptyStateTitleAction;
