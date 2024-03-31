import {
  Box,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  List,
  ListItem,
  ListItemText,
  Switch,
  Typography,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

function SettingsNotifications() {
  const { t } = useTranslation();

  const [state, setState] = useState({
    checkedA: true,
    checkedB: false,
    checkedC: true,
    checkedD: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid xs={12}>
        <Box pb={2}>
          <Typography variant="h3">{t('Account')}</Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
          >
            {t('Choose what notifications you want to receive')}
          </Typography>
        </Box>
        <Card>
          <List>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{
                  variant: 'h5',
                  component: 'label',
                  htmlFor: 'checkedA',
                }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  component: 'label',
                  htmlFor: 'checkedA',
                }}
                primary={t('Widthdraw Activity')}
                secondary={t('Receive an email when a widthdrawal is made')}
              />
              <Switch
                color="primary"
                checked={state.checkedA}
                onChange={handleChange}
                id="checkedA"
                name="checkedA"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText
                primaryTypographyProps={{
                  variant: 'h5',
                  component: 'label',
                  htmlFor: 'checkedB',
                }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  component: 'label',
                  htmlFor: 'checkedB',
                }}
                primary={t('Weekly Report')}
                secondary={t('Receive account status weekly report in your inbox')}
              />
              <Switch
                color="primary"
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                id="checkedB"
              />
            </ListItem>
          </List>
        </Card>
      </Grid>
      <Grid xs={12}>
        <Box pb={2}>
          <Typography variant="h3">{t('Orders')}</Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
          >
            {t('Receive email notifications related to your orders activity')}
          </Typography>
        </Box>
        <Card>
          <List>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{
                  variant: 'h5',
                  component: 'label',
                  htmlFor: 'checkedC',
                }}
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  component: 'label',
                  htmlFor: 'checkedC',
                }}
                primary={t('Failed Payment')}
                secondary={t('Get a message when a payment fails')}
              />
              <Switch
                color="primary"
                checked={state.checkedC}
                onChange={handleChange}
                name="checkedC"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText
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
                primary={t('Order Status Update')}
                secondary={t('Whenever an order is updated, get a notification on your phone')}
              />
              <Switch
                color="primary"
                checked={state.checkedD}
                onChange={handleChange}
                name="checkedD"
              />
            </ListItem>
          </List>
        </Card>
      </Grid>
    </Grid>
  );
}

export default SettingsNotifications;
