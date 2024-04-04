import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import {
  Autocomplete,
  Avatar,
  Box,
  Chip,
  Divider,
  FormControl,
  FormGroup,
  FormLabel,
  Unstable_Grid2 as Grid,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import EmptyStateBasicSmall from 'src/components/application-ui/empty-states/basic-small/empy-state-basic-small';
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

  const [selectedSettings, setSelectedSettings] = useState<Option[]>([settingsOptions[2]]);
  const [selectedMembers, setSelectedMembers] = useState<Member[]>([membersList[1]]);

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
        <Grid xs={12}>
          <FormControl fullWidth>
            <Typography
              variant="h6"
              gutterBottom
              component="label"
              htmlFor="admin-settings-autocomplete"
              fontWeight={500}
            >
              Select Settings
            </Typography>
            <Autocomplete
              multiple
              limitTags={2}
              id="admin-settings-autocomplete"
              options={settingsOptions}
              getOptionLabel={(option) => option.title}
              value={selectedSettings}
              noOptionsText={<EmptyStateBasicSmall />}
              onChange={(event, newValue) => {
                setSelectedSettings(newValue);
              }}
              disableCloseOnSelect
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Settings"
                />
              )}
              renderOption={(props, option, { selected }) => (
                <MenuItem {...props}>
                  <ListItemText
                    primary={option.title}
                    primaryTypographyProps={{ variant: 'subtitle2', fontWeight: 500 }}
                  />
                  {selected && (
                    <AvatarState
                      state="primary"
                      sx={{
                        width: 22,
                        height: 22,
                        mr: -0.5,
                      }}
                    >
                      <CheckRoundedIcon fontSize="inherit" />
                    </AvatarState>
                  )}
                </MenuItem>
              )}
            />
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <FormControl fullWidth>
            <Typography
              variant="h6"
              gutterBottom
              component="label"
              htmlFor="members-autocomplete"
              fontWeight={500}
            >
              Members
            </Typography>
            <Autocomplete
              multiple
              id="members-autocomplete"
              options={membersList}
              getOptionLabel={(option) => option.name}
              value={selectedMembers}
              limitTags={2}
              noOptionsText={<EmptyStateBasicSmall />}
              onChange={(event, newValue) => {
                setSelectedMembers(newValue);
              }}
              disableCloseOnSelect
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Members"
                />
              )}
              renderTags={(selected, getTagProps) => (
                <Box
                  display="flex"
                  flexWrap="wrap"
                  gap={{ xs: 0.5 }}
                >
                  {selected.slice(0, 2).map((member, index) => (
                    <Chip
                      color="primary"
                      avatar={<Avatar src={member.avatar} />}
                      key={member.name}
                      label={member.name}
                      {...getTagProps({ index })}
                    />
                  ))}
                  {selected.length > 2 && (
                    <Chip
                      sx={{ my: '3px', '.MuiChip-label': { px: 1 } }}
                      variant="outlined"
                      label={`+${selected.length - 2}`}
                    />
                  )}
                </Box>
              )}
              renderOption={(props, option, { selected }) => (
                <MenuItemPrimaryAccent {...props}>
                  <ListItemAvatar sx={{ minWidth: 38 }}>
                    <AvatarState
                      useShadow
                      state="secondary"
                      src={option.avatar}
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
                    primary={option.name}
                    secondary={option.detail}
                    primaryTypographyProps={{
                      variant: 'subtitle2',
                      fontWeight: 500,
                      color: 'text.primary',
                    }}
                  />
                  {selected && (
                    <CheckRoundedIcon
                      sx={{
                        color: 'primary.main',
                      }}
                      fontSize="small"
                    />
                  )}
                </MenuItemPrimaryAccent>
              )}
            />
          </FormControl>
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default Component;
