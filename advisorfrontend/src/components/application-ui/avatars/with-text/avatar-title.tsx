import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import { Avatar, Badge, Box, Typography } from '@mui/material';

const Component = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
    >
      <Badge
        overlap="circular"
        color="error"
        badgeContent="53"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Avatar
          sx={{
            width: 48,
            height: 48,
            backgroundColor: 'secondary.main',
            color: 'secondary.contrastText',
          }}
        >
          <HomeTwoToneIcon fontSize="small" />
        </Avatar>
      </Badge>
      <Box ml={1}>
        <Typography
          variant="h5"
          component="div"
        >
          Home Appliances
        </Typography>
      </Box>
    </Box>
  );
};

export default Component;
