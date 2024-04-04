import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import PhoneLockedTwoToneIcon from '@mui/icons-material/PhoneLockedTwoTone';
import {
  alpha,
  Avatar,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Switch,
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AvatarWrapperError = styled(Avatar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.error.main, 0.1),
  color: theme.palette.error.main,
}));

const AvatarWrapperSuccess = styled(Avatar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.success.main, 0.1),
  color: theme.palette.success.main,
}));

const AvatarWrapperWarning = styled(Avatar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.warning.main, 0.1),
  color: theme.palette.warning.main,
}));

function AccountSecurity() {
  const { t } = useTranslation();

  const [checked, setChecked] = useState(['phone_verification']);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Card>
      <CardHeader title={t('Account Security')} />
      <Divider />
      <List disablePadding>
        <ListItem
          sx={{
            py: 1.83,
          }}
        >
          <ListItemAvatar>
            <AvatarWrapperError>
              <LockTwoToneIcon />
            </AvatarWrapperError>
          </ListItemAvatar>
          <ListItemText
            primary={t('2FA Authentication')}
            primaryTypographyProps={{
              variant: 'body1',
              fontWeight: 700,

              noWrap: true,
            }}
            secondary={t('Disabled')}
            secondaryTypographyProps={{ variant: 'body2', color: 'error.main', noWrap: true }}
          />
          <Switch
            edge="end"
            color="primary"
            onChange={handleToggle('2fa')}
            checked={checked.indexOf('2fa') !== -1}
          />
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            py: 1.83,
          }}
        >
          <ListItemAvatar>
            <AvatarWrapperSuccess>
              <PhoneLockedTwoToneIcon />
            </AvatarWrapperSuccess>
          </ListItemAvatar>
          <ListItemText
            primary={t('Phone Verification')}
            primaryTypographyProps={{
              variant: 'body1',
              fontWeight: 700,

              noWrap: true,
            }}
            secondary={t('Active')}
            secondaryTypographyProps={{ variant: 'body2', color: 'success.main', noWrap: true }}
          />
          <Switch
            edge="end"
            color="primary"
            onChange={handleToggle('phone_verification')}
            checked={checked.indexOf('phone_verification') !== -1}
          />
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            py: 1.83,
          }}
        >
          <ListItemAvatar>
            <AvatarWrapperWarning>
              <EmailTwoToneIcon />
            </AvatarWrapperWarning>
          </ListItemAvatar>
          <ListItemText
            primary={t('Recovery Email')}
            primaryTypographyProps={{
              variant: 'body1',
              fontWeight: 700,

              noWrap: true,
            }}
            secondary={t('Not completed')}
            secondaryTypographyProps={{ variant: 'body2', color: 'warning.main', noWrap: true }}
          />
          <Switch
            edge="end"
            color="primary"
            onChange={handleToggle('recovery_email')}
            checked={checked.indexOf('recovery_email') !== -1}
          />
        </ListItem>
      </List>
    </Card>
  );
}

export default AccountSecurity;
