import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import NotificationsTwoToneIcon from '@mui/icons-material/NotificationsTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import { Avatar, Stack } from '@mui/material';
import { deepOrange, green, indigo, red } from '@mui/material/colors';

const Component = () => {
  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Avatar
        sx={{
          width: 24,
          height: 24,
          fontSize: 12,
          backgroundColor: green[500],
          color: 'common.white',
        }}
      >
        <AccountCircleTwoToneIcon fontSize="small" />
      </Avatar>
      <Avatar sx={{ backgroundColor: red[500], color: 'common.white' }}>
        <HomeTwoToneIcon fontSize="small" />
      </Avatar>
      <Avatar
        sx={{ width: 52, height: 52, backgroundColor: deepOrange[500], color: 'common.white' }}
      >
        <MailTwoToneIcon fontSize="medium" />
      </Avatar>
      <Avatar sx={{ width: 64, height: 64 }}>
        <NotificationsTwoToneIcon fontSize="medium" />
      </Avatar>
      <Avatar
        sx={{
          width: 82,
          height: 82,
          backgroundColor: indigo[500],
          color: 'common.white',
        }}
      >
        <SettingsTwoToneIcon fontSize="large" />
      </Avatar>
    </Stack>
  );
};

export default Component;
