import { Avatar, Badge, Box, Typography } from '@mui/material';

const Component = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Badge
        overlap="rectangular"
        color="success"
        badgeContent="8"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Avatar
          variant="rounded"
          alt="..."
          sx={{
            width: 52,
            height: 52,
            mb: 1,
          }}
          src="/avatars/1.png"
        />
      </Badge>
      <Typography
        variant="h6"
        component="div"
      >
        Alex Thompson
      </Typography>
      <Typography
        variant="subtitle2"
        color="text.secondary"
        noWrap
      >
        Senior Digital Marketing Specialist
      </Typography>
    </Box>
  );
};

export default Component;
