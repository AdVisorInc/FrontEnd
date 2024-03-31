import {
  Checkbox,
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
import { MenuItemPrimaryAccent } from 'src/components/base/styles/menu-item';

interface Option {
  title: string;
  description?: string;
}

const Component = () => {
  const { t } = useTranslation();

  const settingsOptions: Option[] = [
    { title: t('User Management'), description: 'Manage user roles and access rights.' },
    { title: t('System Logs'), description: 'View system operation logs and activities.' },
    { title: t('Performance Metrics'), description: 'Monitor system performance and health.' },
    { title: t('Security Settings'), description: 'Configure firewalls and encryption.' },
    { title: t('Notification Preferences'), description: 'Set up alert thresholds and channels.' },
  ];

  const projectOptions: Option[] = [
    { title: t('Resource Allocation'), description: 'Assign resources to projects and tasks.' },
    { title: t('Budget Tracking'), description: 'Monitor project budgets and financials.' },
    { title: t('Risk Assessment'), description: 'Evaluate potential risks and mitigation plans.' },
    {
      title: t('Milestone Planning'),
      description: 'Establish key project milestones and deadlines.',
    },
    {
      title: t('Collaborator Access'),
      description: 'Manage access permissions for project collaborators.',
    },
  ];

  const [selectedSettings, setSelectedSettings] = useState<string[]>(
    settingsOptions[2].title.split(',')
  );
  const [selectedProjects, setSelectedProjects] = useState<string[]>(
    projectOptions[2].title.split(',')
  );

  const handleSettingsChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedSettings(event.target.value as string[]);
  };

  const handleProjectsChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedProjects(event.target.value as string[]);
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
                <MenuItemPrimaryAccent
                  key={option.title}
                  value={option.title}
                >
                  <ListItemAvatar sx={{ minWidth: 34 }}>
                    <Checkbox
                      edge="start"
                      checked={selectedSettings.includes(option.title)}
                      sx={{
                        '&.Mui-checked': {
                          color: 'common.white',
                        },
                      }}
                    />
                  </ListItemAvatar>

                  <ListItemText
                    primary={option.title}
                    primaryTypographyProps={{ fontWeight: 500, variant: 'subtitle2' }}
                    secondary={option.description}
                  />
                </MenuItemPrimaryAccent>
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
              Project Settings
            </Typography>
            <Select
              multiple
              value={selectedProjects}
              //@ts-ignore
              onChange={handleProjectsChange}
              renderValue={(selected) => selected.join(', ')}
              inputProps={{
                name: 'project-settings',
                id: 'project-settings-select',
              }}
            >
              {projectOptions.map((option) => (
                <MenuItem
                  key={option.title}
                  value={option.title}
                >
                  <ListItemText
                    primary={option.title}
                    primaryTypographyProps={{ variant: 'h6' }}
                  />
                  <Checkbox
                    size="small"
                    edge="end"
                    checked={selectedProjects.includes(option.title)}
                  />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default Component;
