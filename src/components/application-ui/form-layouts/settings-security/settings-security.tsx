import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Switch,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import SecurityLogs from 'src/components/application-ui/tables/security-logs/security-logs';
import { AvatarState } from 'src/components/base/styles/avatar';
import { ButtonSoft } from 'src/components/base/styles/button-soft';

function SettingsSecurity() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
      sx={{
        '& .MuiListItem-root': {
          display: { xs: 'block', sm: 'flex' },
        },
      }}
    >
      <Grid xs={12}>
        <Box pb={2}>
          <Typography variant="h3">{t('Social Accounts')}</Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
          >
            {t('Manage connected social accounts options')}
          </Typography>
        </Box>
        <Card>
          <List disablePadding>
            <ListItem sx={{ p: 2 }}>
              <ListItemAvatar
                sx={{
                  pr: 2,
                }}
              >
                <Avatar
                  sx={{
                    width: theme.spacing(5),
                    height: theme.spacing(5),
                  }}
                  src="/placeholders/logo/google-icon.svg"
                />
              </ListItemAvatar>
              <ListItemText
                sx={{
                  py: { xs: 2, sm: 0 },
                  pr: { xs: 0, sm: 1 },
                  m: 0,
                }}
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                }}
                primary={t('Google')}
                secondary={t('A Google account hasn’t been yet added to your account')}
              />
              <Button
                color="secondary"
                size="large"
                variant="contained"
              >
                {t('Connect')}
              </Button>
            </ListItem>
          </List>
        </Card>
      </Grid>
      <Grid xs={12}>
        <Card>
          <List disablePadding>
            <ListItem sx={{ p: 2 }}>
              <ListItemAvatar
                sx={{
                  pr: 2,
                }}
              >
                <AvatarState
                  isSoft
                  state="success"
                  sx={{
                    width: theme.spacing(5),
                    height: theme.spacing(5),
                  }}
                >
                  <DoneTwoToneIcon />
                </AvatarState>
              </ListItemAvatar>
              <ListItemText
                sx={{
                  py: { xs: 2, sm: 0 },
                  pr: { xs: 0, sm: 1 },
                  m: 0,
                }}
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                }}
                primary={t('Facebook')}
                secondary={t('Your Facebook account has been successfully connected')}
              />
              <ButtonSoft
                color="error"
                size="large"
                variant="contained"
                sx={{
                  whiteSpace: 'nowrap',
                }}
              >
                {t('Revoke access')}
              </ButtonSoft>
            </ListItem>
            <Divider component="li" />
            <ListItem sx={{ p: 2 }}>
              <ListItemAvatar
                sx={{
                  pr: 2,
                }}
              >
                <AvatarState
                  isSoft
                  state="success"
                  sx={{
                    width: theme.spacing(5),
                    height: theme.spacing(5),
                  }}
                >
                  <DoneTwoToneIcon />
                </AvatarState>
              </ListItemAvatar>
              <ListItemText
                sx={{
                  py: { xs: 2, sm: 0 },
                  pr: { xs: 0, sm: 1 },
                  m: 0,
                }}
                primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                }}
                primary={t('Twitter')}
                secondary={t('Your Twitter account was last syncronized 6 days ago')}
              />
              <ButtonSoft
                color="error"
                size="large"
                variant="contained"
                sx={{
                  whiteSpace: 'nowrap',
                }}
              >
                {t('Revoke access')}
              </ButtonSoft>
            </ListItem>
          </List>
        </Card>
      </Grid>
      <Grid xs={12}>
        <Box pb={2}>
          <Typography variant="h3">{t('Security')}</Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
          >
            {t('Change your security preferences below')}
          </Typography>
        </Box>
        <Card>
          <List disablePadding>
            <ListItem sx={{ p: 2 }}>
              <ListItemText
                sx={{
                  pl: 0,
                  pr: { xs: 0, sm: 1 },
                  m: 0,
                }}
                primaryTypographyProps={{
                  variant: 'h5',
                }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                }}
                primary={t('Change password')}
                secondary={t('You can change your password here')}
              />
              <Button
                size="large"
                variant="outlined"
                sx={{
                  whiteSpace: 'nowrap',
                }}
              >
                {t('Change password')}
              </Button>
            </ListItem>
            <Divider component="li" />
            <ListItem sx={{ p: 2 }}>
              <ListItemText
                sx={{
                  pl: 0,
                  pr: { xs: 0, sm: 1 },
                  m: 0,
                }}
                primaryTypographyProps={{
                  variant: 'h5',
                  component: 'label',
                  htmlFor: 'checkedD',
                }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  component: 'label',
                  htmlFor: 'checkedD',
                }}
                primary={t('Two-factor authentication')}
                secondary={t('Enable PIN verification for all sign in attempts')}
              />
              <Switch
                id="checkedD"
                name="checkedD"
                color="primary"
              />
            </ListItem>
          </List>
        </Card>
      </Grid>
      <Grid xs={12}>
        <SecurityLogs />
      </Grid>
    </Grid>
  );
}

export default SettingsSecurity;
