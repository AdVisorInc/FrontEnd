import {
  Box,
  Container,
  Unstable_Grid2 as Grid,
  MenuItem,
  Select,
  Tab,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EditProfileDetails from 'src/components/application-ui/form-layouts/edit-profile-details/edit-profile-details';
import SettingsNotifications from 'src/components/application-ui/form-layouts/settings-notifications/settings-notifications';
import SettingsSecurity from 'src/components/application-ui/form-layouts/settings-security/settings-security';
import ActivityCard from 'src/components/application-ui/icon-grid-lists/activity-card/activity-card';
import MyCards from 'src/components/application-ui/radio-groups/my-cards/my-cards';
import { TabsPills } from 'src/components/base/styles/tabs';
import { useCustomization } from 'src/hooks/use-customization';
import { useRefMounted } from 'src/hooks/use-ref-mounted';
import { User, usersApi } from 'src/mocks/users';
import Addresses from './addresses';
import Feed from './feed';
import PopularTags from './popular-tags';
import ProfileCover from './profile-cover';
import RecentActivity from './recent-activity';

function Component() {
  const isMountedRef = useRefMounted();
  const [user, setUser] = useState<User | null>(null);
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));
  const customization = useCustomization();

  const [currentTab, setCurrentTab] = useState<number>(0);

  const tabs = [
    { value: 0, label: t('Activity') },
    { value: 1, label: t('Edit Profile') },
    { value: 2, label: t('Notifications') },
    { value: 3, label: t('Passwords/Security') },
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: number): void => {
    setCurrentTab(value);
  };

  const handleSelectChange = (event: ChangeEvent<{ value: unknown }>) => {
    setCurrentTab(event.target.value as number);
  };

  const getUser = useCallback(async () => {
    try {
      const response = await usersApi.getUser();

      if (isMountedRef()) {
        setUser(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (!user) {
    return null;
  }

  return (
    <Box minWidth="100%">
      <Container maxWidth={customization.stretch ? false : 'xl'}>
        <Box py={{ xs: 2, sm: 3 }}>
          <Grid
            container
            spacing={{ xs: 2, sm: 3 }}
          >
            <Grid
              xs={12}
              md={8}
            >
              <ProfileCover user={user} />
            </Grid>
            <Grid
              xs={12}
              md={4}
            >
              <RecentActivity />
            </Grid>
            <Grid
              xs={12}
              md={8}
            >
              <Feed />
            </Grid>
            <Grid
              xs={12}
              md={4}
            >
              <PopularTags />
            </Grid>
            <Grid
              xs={12}
              md={9}
            >
              <MyCards />
            </Grid>
            <Grid
              xs={12}
              md={3}
            >
              <Addresses />
            </Grid>
            <Grid xs={12}>
              {smUp ? (
                <TabsPills
                  onChange={handleTabsChange}
                  value={currentTab}
                  textColor="secondary"
                  indicatorColor="secondary"
                  sx={{
                    '& .MuiTab-root': {
                      textTransform: 'none',
                      fontWeight: 500,
                      fontSize: 15,
                    },
                  }}
                >
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.value}
                      label={tab.label}
                      value={tab.value}
                    />
                  ))}
                </TabsPills>
              ) : (
                <Select
                  value={currentTab}
                  //@ts-ignore
                  onChange={handleSelectChange}
                  fullWidth
                >
                  {tabs.map((tab) => (
                    <MenuItem
                      key={tab.value}
                      value={tab.value}
                    >
                      {tab.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            </Grid>
            <Grid xs={12}>
              {currentTab === 0 && <ActivityCard />}
              {currentTab === 1 && <EditProfileDetails />}
              {currentTab === 2 && <SettingsNotifications />}
              {currentTab === 3 && <SettingsSecurity />}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Component;
