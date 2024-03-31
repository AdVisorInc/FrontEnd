import {
  Autocomplete,
  Checkbox,
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

  const [selectedSettings, setSelectedSettings] = useState<Option[]>([settingsOptions[2]]);
  const [selectedProjects, setSelectedProjects] = useState<Option[]>([projectOptions[2]]);

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
              htmlFor="admin-settings-select"
              fontWeight={500}
            >
              Select Settings
            </Typography>
            <Autocomplete
              multiple
              id="admin-settings-autocomplete"
              options={settingsOptions}
              getOptionLabel={(option) => option.title}
              value={selectedSettings}
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
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    key={option.title}
                    color="secondary"
                    variant="outlined"
                    label={option.title}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderOption={(props, option, { selected }) => (
                <MenuItem {...props}>
                  <ListItemAvatar sx={{ minWidth: 34 }}>
                    <Checkbox
                      edge="start"
                      checked={selected}
                    />
                  </ListItemAvatar>

                  <ListItemText
                    primary={option.title}
                    primaryTypographyProps={{ fontWeight: 500, variant: 'subtitle2' }}
                    secondary={option.description}
                  />
                </MenuItem>
              )}
              noOptionsText={<EmptyStateBasicSmall />}
            />
          </FormControl>
        </Grid>
        <Grid xs={12}>
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
            <Autocomplete
              multiple
              id="project-settings-autocomplete"
              options={projectOptions}
              getOptionLabel={(option) => option.title}
              value={selectedProjects}
              onChange={(event, newValue) => {
                setSelectedProjects(newValue);
              }}
              disableCloseOnSelect
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Projects"
                />
              )}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    key={`${option.title}-${index}`}
                    variant="outlined"
                    label={option.title}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderOption={(props, option, { selected }) => (
                <MenuItem {...props}>
                  <ListItemText
                    primary={option.title}
                    primaryTypographyProps={{ variant: 'h6' }}
                  />
                  <Checkbox
                    size="small"
                    edge="end"
                    checked={selected}
                  />
                </MenuItem>
              )}
              noOptionsText={<EmptyStateBasicSmall />}
            />
          </FormControl>
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default Component;
