import { Box, Typography } from '@mui/material';
import CheckmarksList from './checkmarks-list';

const Component = () => {
  return (
    <>
      <Box pb={1}>
        <Typography variant="h5">Activity</Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
        >
          Configure what information is shown in the activity feed:
        </Typography>
      </Box>
      <CheckmarksList />
    </>
  );
};

export default Component;
