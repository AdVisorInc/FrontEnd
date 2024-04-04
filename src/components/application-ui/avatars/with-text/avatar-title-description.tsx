import { Avatar, Box, Typography } from '@mui/material';

const Component = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
    >
      <Avatar
        variant="rounded"
        alt="..."
        sx={{
          width: 52,
          height: 52,
        }}
        src="/avatars/4.png"
      />
      <Box ml={1}>
        <Typography
          variant="h6"
          component="div"
        >
          Jessica Martinez
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          noWrap
        >
          Lead Software Engineer
        </Typography>
      </Box>
    </Box>
  );
};

export default Component;
