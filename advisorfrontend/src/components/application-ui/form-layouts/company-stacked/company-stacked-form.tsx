import { CheckRounded } from '@mui/icons-material';
import {
  alpha,
  Badge,
  Box,
  Button,
  Chip,
  Divider,
  FormControl,
  FormLabel,
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
import ProfileCoverUpload from 'src/components/application-ui/upload/profile-cover/profile-cover-upload';
import { InlineBadge } from 'src/components/base/styles/inline-badge';

interface Option {
  title: string;
  description?: string;
}

const CompanyStackedForm = () => {
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
        <FormLabel>
          <Typography
            variant="h5"
            color="text.primary"
            fontWeight={600}
          >
            Company
          </Typography>
          <Typography variant="subtitle2">Update company profile and details</Typography>
        </FormLabel>
      </Grid>
      <Grid xs={12}>
        <Divider />
      </Grid>
      <Grid xs={12}>
        <FormControl
          fullWidth
          size="small"
          variant="outlined"
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            alignItems="center"
          >
            <Grid
              xs={12}
              sm="auto"
              minWidth={{ sm: '40%', md: '30%' }}
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
            </Grid>
            <Grid
              xs={12}
              sm
              md={7}
            >
              <OutlinedInput
                id="company-name-input"
                fullWidth
              />
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid xs={12}>
        <Divider />
        <FormControl
          fullWidth
          size="small"
          variant="outlined"
          sx={{
            py: { xs: 2, md: 3 },
            px: { xs: 2, md: 0 },
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            alignItems="center"
          >
            <Grid
              xs={12}
              sm="auto"
              alignSelf="flex-start"
              minWidth={{ sm: '40%', md: '30%' }}
            >
              <Typography
                variant="h6"
                gutterBottom
                component="label"
                htmlFor="documents-name-input"
                fontWeight={500}
                sx={{ pl: { xs: 0, md: 2 } }}
              >
                Documents
              </Typography>
            </Grid>
            <Grid
              xs={12}
              sm
              md={7}
            >
              <Box minHeight={180}>
                <DocumentsUploadList />
              </Box>
            </Grid>
          </Grid>
        </FormControl>
        <Divider />
      </Grid>
      <Grid xs={12}>
        <FormControl
          fullWidth
          size="small"
          variant="outlined"
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            alignItems="center"
          >
            <Grid
              xs={12}
              sm="auto"
              minWidth={{ sm: '40%', md: '30%' }}
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
            </Grid>
            <Grid
              xs={12}
              sm
              md={7}
            >
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
        <Divider />
      </Grid>
      <Grid xs={12}>
        <FormControl
          fullWidth
          size="small"
          variant="outlined"
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            alignItems="center"
          >
            <Grid
              xs={12}
              sm="auto"
              minWidth={{ sm: '40%', md: '30%' }}
              alignSelf="flex-start"
            >
              <Typography
                variant="h6"
                gutterBottom
                component="label"
                htmlFor="company-name-input"
                fontWeight={500}
              >
                Images
              </Typography>
            </Grid>
            <Grid
              xs={12}
              sm
              md={7}
            >
              <AvatarUploadLogo />

              <Divider sx={{ my: { xs: 2, md: 3 } }} />

              <Typography
                variant="h6"
                sx={{ pb: 1 }}
                fontWeight={500}
              >
                Domain
              </Typography>
              <ProfileCoverUpload />
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid xs={12}>
        <Divider />
      </Grid>
      <Grid xs={12}>
        <FormControl
          fullWidth
          size="small"
          variant="outlined"
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            alignItems="center"
          >
            <Grid
              xs={12}
              sm="auto"
              minWidth={{ sm: '40%', md: '30%' }}
              alignSelf="flex-start"
            >
              <Typography
                variant="h6"
                gutterBottom
                component="label"
                htmlFor="company-name-input"
                fontWeight={500}
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
              </Typography>
            </Grid>
            <Grid
              xs={12}
              sm
              md={7}
            >
              <OutlinedInput
                multiline
                maxRows={8}
                minRows={4}
                id="company-tagline-input"
                fullWidth
              />
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid xs={12}>
        <Divider />
      </Grid>
      <Grid xs={12}>
        <FormControl
          fullWidth
          size="small"
          variant="outlined"
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            alignItems="center"
          >
            <Grid
              xs={12}
              sm="auto"
              minWidth={{ sm: '40%', md: '30%' }}
              alignSelf="flex-start"
            >
              <Typography
                variant="h6"
                gutterBottom
                component="label"
                htmlFor="other-activity-input"
                fontWeight={500}
              >
                Activity
              </Typography>
            </Grid>
            <Grid
              xs={12}
              sm
              md={7}
            >
              <CheckmarksList />
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid xs={12}>
        <Divider />
      </Grid>
      <Grid xs={12}>
        <FormControl
          fullWidth
          size="small"
          variant="outlined"
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            alignItems="center"
          >
            <Grid
              xs={12}
              sm="auto"
              minWidth={{ sm: '40%', md: '30%' }}
              alignSelf="flex-start"
            >
              <Typography
                variant="h6"
                gutterBottom
                component="label"
                htmlFor="metrics-input-select"
                fontWeight={500}
              >
                Metrics
              </Typography>
            </Grid>
            <Grid
              xs={12}
              sm
              md={7}
            >
              <Select
                fullWidth
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
                  name: 'metrics-input',
                  id: 'metrics-input-select',
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
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid xs={12}>
        <Divider />
      </Grid>
      <Grid xs={12}>
        <FormControl
          fullWidth
          size="small"
          variant="outlined"
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            alignItems="center"
          >
            <Grid
              xs={12}
              sm="auto"
              minWidth={{ sm: '40%', md: '30%' }}
              alignSelf="flex-start"
            >
              <Typography
                variant="h6"
                gutterBottom
                component="label"
                htmlFor="company-tagline-input"
                fontWeight={500}
              >
                Sound settings
              </Typography>
            </Grid>
            <Grid
              xs={12}
              sm
              md={7}
            >
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
            </Grid>
          </Grid>
        </FormControl>
      </Grid>
      <Grid xs={12}>
        <Divider />
      </Grid>
      <Grid xs={12}>
        <FormControl
          fullWidth
          size="small"
          variant="outlined"
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            alignItems="center"
          >
            <Grid
              xs={12}
              sm="auto"
              minWidth={{ sm: '40%', md: '30%' }}
            />
            <Grid
              xs={12}
              sm
              md={7}
            >
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
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default CompanyStackedForm;
