import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import EventBusyTwoToneIcon from '@mui/icons-material/EventBusyTwoTone';
import { Box, Button, Stack, Typography } from '@mui/material';

const EmptyStateBasic = () => {
  return (
    <Stack
      spacing={1}
      justifyContent="center"
      direction="column"
      alignItems="center"
    >
      <EventBusyTwoToneIcon sx={{ fontSize: 44, color: 'neutral.600' }} />
      <Box
        textAlign="center"
        pb={1.5}
      >
        <Typography
          variant="h6"
          gutterBottom
        >
          No events found
        </Typography>
        <Typography
          color="text.secondary"
          fontWeight={400}
        >
          Create the first event using the action below
        </Typography>
      </Box>
      <Button
        startIcon={<AddTwoToneIcon />}
        variant="contained"
      >
        New Event
      </Button>
    </Stack>
  );
};

export default EmptyStateBasic;
