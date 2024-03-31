import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import {
  Box,
  Divider,
  FormControl,
  FormGroup,
  FormLabel,
  Unstable_Grid2 as Grid,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';
import { MenuItemPrimaryAccent } from 'src/components/base/styles/menu-item';

interface Option {
  title: string;
  description?: string;
}

interface Member {
  name: string;
  detail: string;
  avatar: string;
}

const membersList: Member[] = [
  {
    name: 'Alice Johnson',
    detail: 'Project Manager',
    avatar: '/avatars/1.png',
  },
  {
    name: 'Bob Smith',
    detail: 'Lead Developer',
    avatar: '/avatars/2.png',
  },
  {
    name: 'Carol Williams',
    detail: 'UX Designer',
    avatar: '/avatars/3.png',
  },
  {
    name: 'David Brown',
    detail: 'Quality Assurance',
    avatar: '/avatars/4.png',
  },
  {
    name: 'Eve Davis',
    detail: 'DevOps Engineer',
    avatar: '/avatars/5.png',
  },
];

const Component = () => {
  const { t } = useTranslation();

  const settingsOptions: Option[] = [
    { title: t('User Management'), description: 'Manage user roles and access rights.' },
    { title: t('System Logs'), description: 'View system operation logs and activities.' },
    { title: t('Performance Metrics'), description: 'Monitor system performance and health.' },
    { title: t('Security Settings'), description: 'Configure firewalls and encryption.' },
    { title: t('Notification Preferences'), description: 'Set up alert thresholds and channels.' },
  ];

  const [selectedSettings, setSelectedSettings] = useState<string[]>(
    settingsOptions[2].title.split(',')
  );

  const handleSettingsChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedSettings(event.target.value as string[]);
  };

  const [selectedOptions, setSelectedOptions] = useState<string[]>(membersList[3].name.split(','));

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value;
    // @ts-ignore
    setSelectedOptions(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <FormGroup>
      <FormLabel>
        <Typography
          variant="h5"
          color="text.primary"
        >
          Admin Dashboard Settings
        </Typography>
        <Typography variant="subtitle2">Configure all system settings from here</Typography>
        <Divider sx={{ my: 2 }} />
      </FormLabel>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
      >
        <Grid
          xs={12}
          md={6}
        >
          <FormControl fullWidth>
            <Typography
              variant="h6"
              gutterBottom
              component="label"
              htmlFor="admin-settings-select"
              fontWeight={500}
            >
              Select Settings
            </Typography>
            <Select
              multiple
              value={selectedSettings}
              //@ts-ignore
              onChange={handleSettingsChange}
              renderValue={(selected) => selected.join(', ')}
              inputProps={{
                name: 'admin-settings',
                id: 'admin-settings-select',
              }}
            >
              {settingsOptions.map((option) => (
                <MenuItem
                  key={option.title}
                  value={option.title}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    pr: 1,
                  }}
                >
                  {option.title}
                  {selectedSettings.includes(option.title) && (
                    <Box display="flex">
                      <CheckRoundedIcon fontSize="small" />
                    </Box>
                  )}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
          <FormControl fullWidth>
            <Typography
              variant="h6"
              gutterBottom
              component="label"
              htmlFor="project-settings-select"
              fontWeight={500}
            >
              Members
            </Typography>
            <Select
              multiple
              value={selectedOptions}
              //@ts-ignore
              onChange={handleChange}
              renderValue={(selected) => selected.join(', ')}
              inputProps={{
                name: 'project-settings',
                id: 'project-settings-select',
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    '& .MuiMenu-list': {
                      px: 0,

                      '& .MuiMenuItem-root': {
                        borderRadius: 0,
                        py: 1,
                      },
                    },
                  },
                },
              }}
            >
              {membersList.map((member) => (
                <MenuItemPrimaryAccent
                  key={member.name}
                  value={member.name}
                >
                  <ListItemAvatar sx={{ minWidth: 38 }}>
                    <AvatarState
                      useShadow
                      state="secondary"
                      src={member.avatar}
                      sx={{
                        width: 28,
                        height: 28,
                      }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{
                      display: { xs: 'initial', sm: 'flex' },
                      alignItems: 'center',
                      gap: { xs: 0, sm: 1 },
                    }}
                    primary={member.name}
                    secondary={member.detail}
                    primaryTypographyProps={{
                      variant: 'subtitle2',
                      fontWeight: 500,
                      color: 'text.primary',
                    }}
                  />
                  {selectedOptions.includes(member.name) && <CheckRoundedIcon fontSize="small" />}
                </MenuItemPrimaryAccent>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default Component;
