import { CheckRounded } from '@mui/icons-material';
import {
  alpha,
  Badge,
  Box,
  Button,
  Chip,
  Divider,
  FormControl,
  Unstable_Grid2 as Grid,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CheckmarksList from 'src/components/application-ui/checkboxes/checkmarks/checkmarks-list';
import AvatarUploadLogo from 'src/components/application-ui/upload/avatar/avatar-upload-logo';
import DocumentsUploadList from 'src/components/application-ui/upload/file-list/documents-upload-list';
import { InlineBadge } from 'src/components/base/styles/inline-badge';

interface Option {
  title: string;
  description?: string;
}

const CompanyBasic = () => {
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

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
    >
      <Grid xs={12}>
        <FormControl
          fullWidth
          variant="outlined"
        >
          <Typography
            variant="h6"
            gutterBottom
            component="label"
            htmlFor="company-name-input"
            fontWeight={500}
          >
            Name
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
          >
            <Grid xs={12}>
              <OutlinedInput
                id="company-name-input"
                fullWidth
              />
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid xs={12}>
        <FormControl
          fullWidth
          variant="outlined"
        >
          <Typography
            variant="h6"
            gutterBottom
            component="label"
            htmlFor="company-tagline-input"
            fontWeight={500}
          >
            Verification documents
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              Add documents as you see fit for the verification process
            </Typography>
          </Typography>
          <Box
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
              p: 2,
              borderRadius: (theme) => theme.shape.borderRadius + 'px',
            }}
            minHeight={180}
          >
            <DocumentsUploadList />
          </Box>
        </FormControl>
      </Grid>
      <Grid xs={12}>
        <FormControl
          fullWidth
          variant="outlined"
        >
          <Typography
            variant="h6"
            gutterBottom
            component="label"
            htmlFor="company-domain-input"
            fontWeight={500}
          >
            Domain
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
          >
            <Grid xs={12}>
              <OutlinedInput
                startAdornment={<InputAdornment position="start">https://</InputAdornment>}
                id="company-domain-input"
                fullWidth
              />
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid xs={12}>
        <AvatarUploadLogo />
      </Grid>
      <Grid xs={12}>
        <FormControl
          fullWidth
          variant="outlined"
        >
          <Typography
            variant="h6"
            gutterBottom
            component="label"
            htmlFor="company-tagline-input"
            fontWeight={500}
          >
            Tagline
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              Write a short description about your company
            </Typography>
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
          >
            <Grid xs={12}>
              <OutlinedInput
                multiline
                maxRows={6}
                minRows={2}
                id="company-tagline-input"
                fullWidth
              />
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid xs={12}>
        <FormControl
          fullWidth
          variant="outlined"
        >
          <Typography
            variant="h6"
            gutterBottom
            component="label"
            htmlFor="company-tagline-input"
            fontWeight={500}
          >
            Activity
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              Configure what information is shown in the activity feed
            </Typography>
          </Typography>
          <CheckmarksList />
        </FormControl>
      </Grid>
      <Grid xs={12}>
        <FormControl
          fullWidth
          variant="outlined"
        >
          <Typography
            variant="h6"
            gutterBottom
            component="label"
            htmlFor="company-tagline-input"
            fontWeight={500}
          >
            Activity
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              Configure what information is shown in the activity feed
            </Typography>
          </Typography>
          <Select
            multiple
            value={selectedSettings}
            //@ts-ignore
            onChange={handleSettingsChange}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip
                    key={value}
                    variant="outlined"
                    size="small"
                    label={
                      <>
                        <InlineBadge>
                          <Badge
                            variant="dot"
                            color="primary"
                            sx={{
                              mr: 1,
                              display: { xs: 'none', sm: 'inline-flex' },
                            }}
                          />
                          {value}
                        </InlineBadge>
                      </>
                    }
                  />
                ))}
              </Box>
            )}
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
                    <CheckRounded fontSize="small" />
                  </Box>
                )}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid xs={12}>
        <FormControl
          fullWidth
          variant="outlined"
        >
          <Divider />
          <Stack
            mt={2}
            spacing={2}
            divider={<Divider variant="middle" />}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box overflow="hidden">
                <Typography
                  component="label"
                  htmlFor="switch-spatial-audio"
                  variant="h6"
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  Spatial audio
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  noWrap
                >
                  More immersive sound in meetings.
                </Typography>
              </Box>
              <Switch
                defaultChecked
                id="switch-spatial-audio"
              />
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box overflow="hidden">
                <Typography
                  component="label"
                  htmlFor="switch-music-mode"
                  variant="h6"
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  Music mode
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  noWrap
                >
                  Deliver high fidelity sound in meetings.
                </Typography>
              </Box>
              <Switch id="switch-music-mode" />
            </Box>
          </Stack>
        </FormControl>
      </Grid>
      <Grid xs={12}>
        <Divider />
      </Grid>
      <Grid xs={12}>
        <Stack
          direction="row"
          justifyContent="flex-end"
          spacing={1}
        >
          <Button color="secondary">Cancel</Button>
          <Button variant="contained">Save</Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CompanyBasic;
