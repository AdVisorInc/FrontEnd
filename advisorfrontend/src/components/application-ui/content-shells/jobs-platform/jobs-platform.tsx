import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
  alpha,
  Autocomplete,
  Box,
  Container,
  Divider,
  Unstable_Grid2 as Grid,
  Stack,
  TextField,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { useCustomization } from 'src/hooks/use-customization';
import { useRefMounted } from 'src/hooks/use-ref-mounted';
import { useSidebarDrawer } from 'src/hooks/use-sidebar-drawer';
import { jobsApi } from 'src/mocks/jobs';
import { Job } from 'src/models/job';
import Results from './results';
import { JobsPlatformSidebar } from './sidebar';

interface Tag {
  title: string;
}

interface Location {
  title: string;
}

const Component = () => {
  const { t } = useTranslation();
  const customization = useCustomization();
  const parentRef = useRef<HTMLDivElement | null>(null);
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const sidebarDrawer = useSidebarDrawer();
  const theme = useTheme();

  const jobsTags: Tag[] = [
    { title: t('Junior') },
    { title: t('Software') },
    { title: t('Part Time') },
    { title: t('Internship') },
    { title: t('React') },
  ];

  const jobsLocations: Location[] = [
    { title: t('Bucharest, Romania') },
    { title: t('San Francisco, USA') },
    { title: t('Madrid, Spain') },
    { title: t('Berlin, Germany') },
    { title: t('Paris, France') },
    { title: t('London, UK') },
  ];

  const isMountedRef = useRefMounted();
  const [jobs, setJobs] = useState<Job[]>([]);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  const handleTagChange = (event: React.ChangeEvent<{}>, newValue: Tag[]) => {
    setSelectedTags(newValue.map((tag) => tag.title));
  };

  const handleLocationChange = (event: React.ChangeEvent<{}>, newValue: Location[]) => {
    setSelectedLocations(newValue.map((location) => location.title));
  };

  const getJobs = useCallback(async () => {
    try {
      const response = await jobsApi.getJobs();

      if (isMountedRef()) {
        setJobs(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getJobs();
  }, [getJobs]);

  useEffect(() => {
    const filterJobs = () => {
      let tempJobs = jobs;

      if (selectedTags.length > 0) {
        tempJobs = tempJobs.filter((job) => job.tags.some((tag) => selectedTags.includes(tag)));
      }

      if (selectedLocations.length > 0) {
        tempJobs = tempJobs.filter((job) => selectedLocations.includes(job.location));
      }

      setFilteredJobs(tempJobs);
    };

    filterJobs();
  }, [jobs, selectedTags, selectedLocations]);

  return (
    <Box minWidth="100%">
      <Box
        p={{ xs: 2, sm: 3 }}
        position="relative"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Typography
          align="center"
          variant="h2"
          component="h2"
        >
          {t('Jobs Platform')}
        </Typography>
        <Typography
          align="center"
          variant="h4"
          fontWeight={400}
          color="text.secondary"
        >
          {t('Find your dream job, fast and easy!')}
        </Typography>
        <ButtonIcon
          onClick={sidebarDrawer.handleToggle}
          color="secondary"
          variant="outlined"
          sx={{
            position: 'absolute',
            top: theme.spacing(2),
            left: theme.spacing(2),
          }}
        >
          <MenuRoundedIcon />
        </ButtonIcon>
      </Box>
      <Divider />
      <Box
        flex={1}
        position="relative"
        display="flex"
      >
        <JobsPlatformSidebar
          parentContainer={parentRef.current}
          onClose={sidebarDrawer.handleClose}
          onOpen={sidebarDrawer.handleOpen}
          open={sidebarDrawer.open}
        />
        <Box
          flex={1}
          position="relative"
          zIndex={5}
          sx={{
            ml: sidebarDrawer.open ? 0 : lgUp ? '-360px' : 0,
            transition: sidebarDrawer.open
              ? theme.transitions.create('margin', {
                  easing: theme.transitions.easing.easeOut,
                  duration: theme.transitions.duration.enteringScreen,
                })
              : theme.transitions.create('margin', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
                }),
          }}
        >
          <Box p={{ xs: 2, sm: 3 }}>
            <Container
              disableGutters
              maxWidth={customization.stretch ? false : 'xl'}
            >
              <Grid
                container
                spacing={{ xs: 2, sm: 3 }}
              >
                <Grid xs={12}>
                  <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={2}
                    justifyContent="stretch"
                  >
                    <Autocomplete
                      multiple
                      onChange={handleTagChange}
                      fullWidth
                      limitTags={2}
                      options={jobsTags}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params): JSX.Element => (
                        <TextField
                          {...params}
                          variant="outlined"
                          placeholder={t('Select tags...')}
                        />
                      )}
                    />

                    <Autocomplete
                      multiple
                      limitTags={2}
                      fullWidth
                      onChange={handleLocationChange}
                      options={jobsLocations}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params): JSX.Element => (
                        <TextField
                          {...params}
                          variant="outlined"
                          placeholder={t('Select location...')}
                        />
                      )}
                    />
                  </Stack>
                </Grid>
                <Grid xs={12}>{filteredJobs && <Results jobs={filteredJobs} />}</Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Component;
