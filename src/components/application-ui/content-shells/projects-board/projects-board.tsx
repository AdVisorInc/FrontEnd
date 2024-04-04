import AddRoundedIcon from '@mui/icons-material/AddRounded';
import {
  alpha,
  Autocomplete,
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Container,
  Unstable_Grid2 as Grid,
  lighten,
  MenuItem,
  Select,
  Stack,
  Tabs,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { Fragment, useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import BaseButtonTab from 'src/components/base/styles/button-tab';
import { CardAddActionDashed } from 'src/components/base/styles/card';
import { LinearProgressSlim } from 'src/components/base/styles/progress-bar';
import { useCustomization } from 'src/hooks/use-customization';
import { getProject, moveTask } from 'src/slices/projects_board';
import { useDispatch, useSelector } from 'src/store';
import Results from './results';

const Component = () => {
  const { t } = useTranslation();
  const customization = useCustomization();

  const dispatch = useDispatch();
  const { lists } = useSelector((state) => state.projectsBoard);

  const handleDragEnd = async ({ source, destination, draggableId }: DropResult): Promise<void> => {
    try {
      if (!destination) {
        return;
      }

      if (source.droppableId === destination.droppableId && source.index === destination.index) {
        return;
      }

      if (source.droppableId === destination.droppableId) {
        await dispatch(moveTask(draggableId, destination.index));
      } else {
        await dispatch(moveTask(draggableId, destination.index, destination.droppableId));
      }

      toast.success(t('Task has been successfully moved'));
    } catch (err) {
      console.error(err);

      toast.error(t('There was an error, try again later'));
    }
  };

  useEffect(() => {
    dispatch(getProject());
  }, [dispatch]);

  const assignees = [
    {
      avatar: '/avatars/1.png',
      name: 'Maren Lipshutz',
    },
    {
      avatar: '/avatars/2.png',
      name: 'Zain Vetrovs',
    },
    {
      avatar: '/avatars/3.png',
      name: 'Hanna Siphron',
    },
    {
      avatar: '/avatars/4.png',
      name: 'Cristofer Aminoff',
    },
    {
      avatar: '/avatars/5.png',
      name: 'Maria Calzoni',
    },
  ];

  const sprints = [
    {
      progress: 58,
      name: 'Sprint 1',
    },
    {
      progress: 43,
      name: 'Sprint 2',
    },
    {
      progress: 65,
      name: 'Sprint 3',
    },
    {
      progress: 84,
      name: 'Sprint 4',
    },
    {
      progress: 43,
      name: 'Sprint 5',
    },
  ];

  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  const [value, setValue] = React.useState('0');

  const handleTabChange = (event, newValue) => {
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
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
      }}
      p={{ xs: 2, sm: 3 }}
    >
      <Container
        sx={{ mb: { xs: 2, sm: 3 } }}
        disableGutters={!mdUp}
        maxWidth={customization.stretch ? false : 'xl'}
      >
        <Typography variant="h3">Projects board</Typography>
      </Container>
      <Container
        disableGutters={!mdUp}
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
                value={Number(value)}
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
                  componentType="tab"
                  label="React project migration"
                />
                <BaseButtonTab
                  componentType="tab"
                  label="Engineering meeting"
                />
                <BaseButtonTab
                  componentType="tab"
                  label="Marketing campaign"
                />
              </Tabs>
            </>
          ) : (
            <Select
              value={value}
              onChange={handleSelectChange}
              fullWidth
            >
              <MenuItem value="0">React project migration</MenuItem>
              <MenuItem value="1">Engineering meeting</MenuItem>
              <MenuItem value="2">Marketing campaign</MenuItem>
            </Select>
          )}
        </Stack>
      </Container>
      <Card
        elevation={0}
        variant="outlined"
        sx={{
          border: 0,
          p: '1px',
          background:
            theme.palette.mode === 'dark'
              ? theme.palette.neutral[800]
              : `linear-gradient(180deg, ${theme.palette.neutral[300]} 0%, transparent 60%)`,
          overflow: 'visible',
          width: '100%',
        }}
      >
        <Box
          py={{ xs: 2, sm: 3 }}
          sx={{
            borderRadius: 'inherit',
            background:
              theme.palette.mode === 'dark'
                ? lighten(theme.palette.neutral[900], 0.035)
                : `linear-gradient(180deg, ${theme.palette.common.white} 0%, transparent 60%)`,
          }}
        >
          <Container maxWidth={customization.stretch ? false : 'xl'}>
            <Grid
              container
              spacing={{ xs: 2, sm: 3 }}
            >
              <Grid
                xs={12}
                md={6}
              >
                <Autocomplete
                  multiple
                  limitTags={2}
                  options={assignees}
                  renderOption={(props, option) => (
                    <li {...props}>
                      <Avatar
                        sx={{ mr: 1 }}
                        src={option.avatar}
                      />
                      {option.name}
                    </li>
                  )}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params): JSX.Element => (
                    <TextField
                      {...params}
                      variant="outlined"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      placeholder={t('Select assignees...')}
                    />
                  )}
                  renderTags={(assignees, getTagProps) =>
                    assignees.map((ev, index: number) => (
                      <Chip
                        key={ev.name}
                        label={ev.name}
                        {...getTagProps({ index })}
                        avatar={<Avatar src={ev.avatar} />}
                      />
                    ))
                  }
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <Autocomplete
                  limitTags={2}
                  autoHighlight
                  options={sprints}
                  renderOption={(props, option) => (
                    <Fragment key={option.name}>
                      <Box
                        my={0.5}
                        py={0.5}
                        component="li"
                        {...props}
                      >
                        <Box
                          flex={1}
                          py={1}
                        >
                          <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            pb={1}
                          >
                            <Typography variant="h5">{option.name}</Typography>
                            <Chip
                              size="small"
                              variant="outlined"
                              label={<>{option.progress}%</>}
                              color="secondary"
                            />
                          </Box>

                          <LinearProgressSlim
                            value={option.progress}
                            color="primary"
                            variant="determinate"
                          />
                        </Box>
                      </Box>
                    </Fragment>
                  )}
                  getOptionLabel={(option) => option.name}
                  renderInput={(params): JSX.Element => (
                    <TextField
                      {...params}
                      variant="outlined"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      placeholder={t('Select sprint...')}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Box mt={{ xs: 2, sm: 3 }}>
              <DragDropContext onDragEnd={handleDragEnd}>
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', md: 'row' }}
                  sx={{
                    overflowX: 'auto',
                    overflowY: 'hidden',
                  }}
                >
                  {lists.allIds.map((listId: string) => (
                    <Results
                      key={listId}
                      listId={listId}
                    />
                  ))}
                  <CardAddActionDashed
                    variant="outlined"
                    elevation={0}
                    sx={{ minWidth: 160, flex: 1 }}
                  >
                    <CardActionArea>
                      <CardContent>
                        <Stack
                          spacing={1}
                          justifyContent="center"
                          direction="column"
                          alignItems="center"
                        >
                          <AddRoundedIcon />
                          <Typography
                            textAlign="center"
                            variant="h6"
                            fontWeight={500}
                          >
                            Create new project panel
                          </Typography>
                        </Stack>
                      </CardContent>
                    </CardActionArea>
                  </CardAddActionDashed>
                </Box>
              </DragDropContext>
            </Box>
          </Container>
        </Box>
      </Card>
    </Box>
  );
};

export default Component;
