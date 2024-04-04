import {
  alpha,
  Box,
  Card,
  Container,
  Divider,
  Unstable_Grid2 as Grid,
  MenuItem,
  Select,
  Stack,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import TasksAnalytics from 'src/components/application-ui/bar-charts/tasks-analytics/tasks-analytics';
import Projects from 'src/components/application-ui/data-grid-lists/projects/projects';
import Profile from 'src/components/application-ui/description-grid-lists/profile/profile';
import EmptyStateBasicLarge from 'src/components/application-ui/empty-states/basic-large/empy-state-basic-large';
import TeamOverview from 'src/components/application-ui/horizontal-lists/team-overview/team-overview';
import Performance from 'src/components/application-ui/icon-grid-lists/performance/performance';
import TaskSearch from 'src/components/application-ui/icon-grid-lists/task-search/task-search';
import Checklist from 'src/components/application-ui/timelines/checklist/checklist';
import BaseButtonTab from 'src/components/base/styles/button-tab';
import { useCustomization } from 'src/hooks/use-customization';

const Component = () => {
  const customization = useCustomization();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  const [value, setValue] = React.useState('analytics');

  const handleTabChange = (_event, newValue) => {
    setValue(String(newValue));
  };

  const handleSelectChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      display="flex"
      flex={1}
      position="relative"
      zIndex={2}
      flexDirection="column"
      overflow="hidden"
      p={{ xs: 2, sm: 3 }}
    >
      <Container
        sx={{ mb: { xs: 2, sm: 3 } }}
        disableGutters
        maxWidth={customization.stretch ? false : 'xl'}
      >
        <Typography variant="h3">Tasks</Typography>
        <Typography
          variant="h5"
          fontWeight={400}
          color="text.secondary"
        >
          Task manager for creating, organizing, and tracking to-dos.
        </Typography>
      </Container>
      <Container
        disableGutters
        maxWidth={customization.stretch ? false : 'xl'}
      >
        <Stack
          spacing={0.5}
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          pb={{ xs: 2, md: 0 }}
        >
          {mdUp ? (
            <>
              <Tabs
                value={value}
                onChange={handleTabChange}
                sx={{
                  overflow: 'visible',

                  '& .MuiTabs-indicator': {
                    display: 'none',
                  },

                  '& .MuiTabs-scroller': {
                    overflow: 'visible !important',
                  },
                }}
              >
                <BaseButtonTab
                  value="analytics"
                  componentType="tab"
                  label="Analytics overview"
                />
                <BaseButtonTab
                  value="task_search"
                  componentType="tab"
                  label="Task search"
                />
                <BaseButtonTab
                  value="projects_board"
                  componentType="tab"
                  label="Projects board"
                />
              </Tabs>
            </>
          ) : (
            <Select
              value={value}
              onChange={handleSelectChange}
              fullWidth
            >
              <MenuItem value="analytics">Analytics overview</MenuItem>
              <MenuItem value="task_search">Task search</MenuItem>
              <MenuItem value="projects_board">Projects board</MenuItem>
            </Select>
          )}
        </Stack>
        <Card
          variant="outlined"
          sx={{
            borderColor: theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.300',
            borderTopLeftRadius: 0,
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={0}
          >
            {value === 'analytics' && (
              <>
                <Grid xs={12}>
                  <Box p={{ xs: 2, sm: 3 }}>
                    <TeamOverview />
                  </Box>
                </Grid>
                <Grid xs={12}>
                  <Divider />
                  <Box
                    p={{ xs: 2, sm: 3 }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'dark'
                          ? alpha(theme.palette.neutral[50], 0.02)
                          : 'neutral.50',
                    }}
                  >
                    <Grid
                      container
                      spacing={{ xs: 2, sm: 3 }}
                    >
                      <Grid
                        xs={12}
                        sm={6}
                        md={8}
                      >
                        <TasksAnalytics />
                      </Grid>
                      <Grid
                        xs={12}
                        sm={6}
                        md={4}
                      >
                        <Performance />
                      </Grid>
                    </Grid>
                  </Box>
                  <Divider />
                </Grid>
                <Grid xs={12}>
                  <Box p={{ xs: 2, sm: 3 }}>
                    <Projects />
                  </Box>
                  <Divider />
                </Grid>
                <Grid xs={12}>
                  <Box
                    sx={{
                      background: theme.palette.background.default,
                    }}
                  >
                    <Grid
                      container
                      spacing={0}
                    >
                      <Grid
                        xs={12}
                        md={6}
                      >
                        <Box
                          p={{ xs: 2, sm: 3 }}
                          sx={{
                            height: '100%',
                            backgroundColor:
                              theme.palette.mode === 'dark'
                                ? alpha(theme.palette.common.black, 0.2)
                                : alpha(theme.palette.common.white, 0.7),
                          }}
                        >
                          <Checklist />
                        </Box>
                      </Grid>
                      <Grid
                        xs={12}
                        md={6}
                      >
                        <Box
                          height="100%"
                          width="100%"
                          p={{ xs: 2, sm: 3 }}
                        >
                          <Profile />
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </>
            )}
            {value === 'task_search' && (
              <Grid xs={12}>
                <Box p={{ xs: 2, sm: 3 }}>
                  <TaskSearch />
                </Box>
              </Grid>
            )}
            {value === 'projects_board' && (
              <Grid xs={12}>
                <EmptyStateBasicLarge />
              </Grid>
            )}
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default Component;
