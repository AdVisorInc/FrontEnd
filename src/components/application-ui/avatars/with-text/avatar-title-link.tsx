import { Avatar, Box, Link, Typography } from '@mui/material';
import { indigo } from '@mui/material/colors';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';

const Component = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
    >
      <PulseBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar
          sx={{
            backgroundColor: indigo[500],
            color: 'common.white',
          }}
        >
          BW
        </Avatar>
      </PulseBadge>
      <Box ml={1}>
        <Typography
          variant="h6"
          component="div"
        >
          Benjamin Wallace
        </Typography>
        <Link
          href=""
          variant="subtitle2"
          color="text.secondary"
          underline="hover"
        >
          View details
        </Link>
      </Box>
    </Box>
  );
};

export default Component;
