import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import {
  Divider,
  FormControl,
  FormGroup,
  FormLabel,
  Unstable_Grid2 as Grid,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Radio,
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
  checked?: boolean;
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

  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    settingsOptions[0].title.split(',')
  );
  const [selectedProjects, setSelectedProjects] = useState<string[]>(
    projectOptions[0].title.split(',')
  );

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value;
    //@ts-ignore
    setSelectedOptions(typeof value === 'string' ? value.split(',') : value);
  };

  const handleSelect = (value: string) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((option) => option !== value)
        : [...prevSelected, value]
    );
  };

  const handleChange2 = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value;
    //@ts-ignore
    setSelectedProjects(typeof value === 'string' ? value.split(',') : value);
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
              value={selectedOptions}
              //@ts-ignore
              onChange={handleChange}
              inputProps={{
                name: 'admin-settings',
                id: 'admin-settings-select',
              }}
              renderValue={(selected) => selected.join(', ')}
            >
              {settingsOptions.map((option) => (
                <MenuItemPrimaryAccent
                  key={option.title}
                  value={option.title}
                  onClick={() => handleSelect(option.title)}
                >
                  <ListItemText
                    primary={option.title}
                    primaryTypographyProps={{ variant: 'h6', color: 'text.primary' }}
                    secondary={option.description}
                    secondaryTypographyProps={{
                      sx: {
                        opacity: 0.8,
                      },
                    }}
                  />
                  {selectedOptions.includes(option.title) && <CheckRoundedIcon />}
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
              htmlFor="admin-settings-select"
              fontWeight={500}
            >
              Alternate style
            </Typography>
            <Select
              value={selectedOptions}
              //@ts-ignore
              onChange={handleChange}
              inputProps={{
                name: 'admin-settings',
                id: 'admin-settings-select',
              }}
              renderValue={(selected) => selected.join(', ')}
            >
              {settingsOptions.map((option) => (
                <MenuItem
                  key={option.title}
                  value={option.title}
                  onClick={() => handleSelect(option.title)}
                >
                  <ListItemText
                    primary={option.title}
                    primaryTypographyProps={{ variant: 'h6', fontWeight: 500 }}
                  />
                  {selectedOptions.includes(option.title) && (
                    <AvatarState
                      state="primary"
                      sx={{
                        width: 28,
                        height: 28,
                        my: 0.5,
                      }}
                    >
                      <CheckRoundedIcon fontSize="small" />
                    </AvatarState>
                  )}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <Divider />
        </Grid>

        <Grid
          xs={12}
          md={6}
        >
          <FormControl fullWidth>
            <Typography
              variant="h6"
              component="label"
              gutterBottom
              htmlFor="project-settings-select"
              fontWeight={500}
            >
              Project Settings
            </Typography>
            <Select
              value={selectedProjects}
              // @ts-ignore
              onChange={handleChange2}
              inputProps={{
                name: 'project-settings',
                id: 'project-settings-select',
              }}
              renderValue={(selected) => selected.join(', ')}
            >
              {projectOptions.map((option) => (
                <MenuItemPrimaryAccent
                  key={option.title}
                  value={option.title}
                >
                  <ListItemAvatar sx={{ minWidth: 38 }}>
                    <Radio
                      edge="start"
                      sx={{
                        '&.Mui-checked': {
                          color: 'common.white',
                        },
                      }}
                      checked={selectedProjects.includes(option.title)}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={option.title}
                    primaryTypographyProps={{ variant: 'h6', color: 'text.primary' }}
                    secondary={option.description}
                    secondaryTypographyProps={{
                      sx: {
                        opacity: 0.8,
                      },
                    }}
                  />
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
