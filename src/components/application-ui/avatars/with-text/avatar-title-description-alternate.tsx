import { Avatar, Badge, Box, Typography } from '@mui/material';
import { lime } from '@mui/material/colors';

const Component = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
    >
      <Badge
        color="secondary"
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        badgeContent="12"
        overlap="circular"
      >
        <Avatar
          sx={{
            backgroundColor: lime[800],
            color: 'common.white',
            width: 48,
            height: 48,
          }}
        >
          CM
        </Avatar>
      </Badge>
      <Box
        mx={1}
        overflow="hidden"
      >
        <Typography
          variant="h5"
          component="div"
        >
          Clara Martinez
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          noWrap
        >
          Marketing Specialist
        </Typography>
      </Box>
    </Box>
  );
};

export default Component;
