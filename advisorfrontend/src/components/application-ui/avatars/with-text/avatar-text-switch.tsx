import PhoneLockedTwoToneIcon from '@mui/icons-material/PhoneLockedTwoTone';
import { Avatar, Box, Switch, Typography } from '@mui/material';

const Component = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
    >
      <Box
        display="flex"
        alignItems="center"
      >
        <Avatar
          sx={{
            width: 42,
            height: 42,
            backgroundColor: 'success.main',
            color: 'secondary.contrastText',
          }}
        >
          <PhoneLockedTwoToneIcon fontSize="small" />
        </Avatar>
        <Box mx={1}>
          <Typography
            variant="h6"
            component="div"
          >
            Phone Verification
          </Typography>
          <Typography
            variant="subtitle2"
            component="div"
            color="success.main"
            fontWeight={600}
          >
            Active
          </Typography>
        </Box>
      </Box>
      <Switch
        edge="end"
        color="primary"
      />
    </Box>
  );
};

export default Component;
