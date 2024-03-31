import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import TableRowsTwoToneIcon from '@mui/icons-material/TableRowsTwoTone';
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Checkbox,
  Chip,
  Divider,
  FormControlLabel,
  FormGroup,
  Unstable_Grid2 as Grid,
  IconButton,
  InputAdornment,
  LinearProgress,
  Link,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import clsx from 'clsx';
import { format, formatDistance } from 'date-fns';
import PropTypes from 'prop-types';
import { ChangeEvent, FC, MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import BulkDelete from 'src/components/application-ui/tables/users/bulk-delete';
import { CardWrapper } from 'src/components/application-ui/tables/users/results';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { ButtonSoft } from 'src/components/base/styles/button-soft';
import { LinearProgressSlim } from 'src/components/base/styles/progress-bar';
import type { Project, ProjectStatus } from 'src/models/project';

interface Tag {
  id: number;
  name: string;
}

const tags: Tag[] = [
  { id: 1, name: 'Development' },
  { id: 2, name: 'Design Project' },
  { id: 3, name: 'Marketing Research' },
  { id: 4, name: 'Software' },
];

const statusOptions = [
  {
    id: 'not_started',
    name: 'Not started',
  },
  {
    id: 'completed',
    name: 'Completed',
  },
  {
    id: 'in_progress',
    name: 'In Progress',
  },
];

interface ResultsProps {
  projects: Project[];
}

interface Filters {
  status?: ProjectStatus;
}

const getProjectStatusLabel = (projectStatus: ProjectStatus): JSX.Element => {
  const map = {
    not_started: {
      text: 'Not started',
      color: 'error',
    },
    in_progress: {
      text: 'In progress',
      color: 'info',
    },
    completed: {
      text: 'Completed',
      color: 'success',
    },
  };

  const { text, color }: any = map[projectStatus];

  return (
    <Chip
      size="small"
      sx={{
        borderRadius: (theme) => theme.shape.borderRadius,
      }}
      variant="outlined"
      label={text}
      color={color}
    />
  );
};

const applyFilters = (projects: Project[], query: string, filters: Filters): Project[] => {
  return projects.filter((project) => {
    let matches = true;

    if (query) {
      const properties = ['name'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (project[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (filters.status && project.status !== filters.status) {
        matches = false;
      }

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value && project[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });
};

const applyPagination = (projects: Project[], page: number, limit: number): Project[] => {
  return projects.slice(page * limit, page * limit + limit);
};

const Results: FC<ResultsProps> = ({ projects }) => {
  const [selectedItems, setSelectedProjects] = useState<string[]>([]);
  const { t } = useTranslation();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [query, setQuery] = useState<string>('');
  const [filters, setFilters] = useState<Filters>({
    status: null,
  });

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setQuery(event.target.value);
  };

  const handleSelectAllProjects = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedProjects(event.target.checked ? projects.map((project) => project.id) : []);
  };

  const handleSelectOneProject = (
    _event: ChangeEvent<HTMLInputElement>,
    projectId: string
  ): void => {
    if (!selectedItems.includes(projectId)) {
      setSelectedProjects((prevSelected) => [...prevSelected, projectId]);
    } else {
      setSelectedProjects((prevSelected) => prevSelected.filter((id) => id !== projectId));
    }
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredProjects = applyFilters(projects, query, filters);
  const paginatedProjects = applyPagination(filteredProjects, page, limit);
  const selectedBulkActions = selectedItems.length > 0;
  const selectedSomeProjects = selectedItems.length > 0 && selectedItems.length < projects.length;
  const selectedAllProjects = selectedItems.length === projects.length;

  const [toggleView, setToggleView] = useState<string | null>('table_view');

  const handleViewOrientation = (_event: MouseEvent<HTMLElement>, newValue: string | null) => {
    setToggleView(newValue);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([tags[0], tags[1]]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggle = (tag: Tag) => {
    setSelectedTags((prev) => {
      if (prev.find((t) => t.id === tag.id)) {
        return prev.filter((t) => t.id !== tag.id);
      } else {
        return [...prev, tag];
      }
    });
  };

  const handleDeleteTag = (tagId: number) => {
    setSelectedTags((prev) => prev.filter((tag) => tag.id !== tagId));
  };

  const handleClearAllTags = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setSelectedTags([]);
    setFilters({ status: null });
  };

  const [statusAnchorEl, setStatusAnchorEl] = useState<null | HTMLElement>(null);

  const handleStatusClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setStatusAnchorEl(event.currentTarget);
  };

  const handleStatusClose = () => {
    setStatusAnchorEl(null);
  };

  const getStatusName = () => {
    if (filters.status === null) {
      return 'All';
    }
    const status = statusOptions.find((option) => option.id === filters.status);
    return status ? status.name : 'All';
  };

  const handleStatusToggle = (statusOption: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      status: statusOption === 'all' ? null : (statusOption as ProjectStatus),
    }));
    handleStatusClose();
  };

  const isFilterActive = selectedTags.length > 0 || filters.status !== null;

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems="center"
        pb={2}
      >
        <Box
          display="flex"
          alignItems="center"
          width="100%"
        >
          {toggleView === 'grid_view' && (
            <Tooltip
              arrow
              placement="top"
              title={t('Select all projects')}
            >
              <Checkbox
                edge="start"
                sx={{ mr: 1 }}
                disabled={paginatedProjects.length === 0}
                checked={selectedAllProjects}
                indeterminate={selectedSomeProjects}
                onChange={handleSelectAllProjects}
              />
            </Tooltip>
          )}
          {selectedBulkActions ? (
            <Stack
              direction="row"
              spacing={1}
              my="2px"
            >
              <BulkDelete />

              <Tooltip
                arrow
                placement="top"
                title={t('Export project list')}
              >
                <ButtonIcon
                  variant="outlined"
                  color="secondary"
                  sx={{ color: 'primary.main' }}
                  size="small"
                  startIcon={<IosShareRoundedIcon fontSize="small" />}
                />
              </Tooltip>
            </Stack>
          ) : (
            <>
              <TextField
                fullWidth={!mdUp}
                margin="none"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchTwoToneIcon />
                    </InputAdornment>
                  ),
                  endAdornment: query && (
                    <InputAdornment
                      sx={{
                        mr: -0.7,
                      }}
                      position="end"
                    >
                      <IconButton
                        color="error"
                        aria-label="clear input"
                        onClick={() => setQuery('')}
                        edge="end"
                        size="small"
                        sx={{
                          color: 'error.main',
                        }}
                      >
                        <ClearRoundedIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={handleQueryChange}
                placeholder={t('Filter results')}
                value={query}
                size="small"
                variant="outlined"
              />
            </>
          )}
        </Box>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
          width="100%"
          mt={{ xs: 2, md: 0 }}
          justifyContent={{ xs: 'space-between', md: 'flex-end' }}
        >
          {isFilterActive && (
            <Link
              href=""
              variant="body2"
              sx={{ alignSelf: 'center', px: 1 }}
              underline="hover"
              onClick={handleClearAllTags}
            >
              Clear All
            </Link>
          )}
          <Stack
            spacing={1}
            direction={{ xs: 'column', sm: 'row' }}
          >
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              endIcon={<KeyboardArrowDownRoundedIcon fontSize="small" />}
              aria-controls="filter-menu"
              aria-haspopup="true"
              onClick={handleClick}
              sx={{
                justifyContent: { xs: 'space-between', sm: 'flex-start' },
              }}
            >
              Filters {selectedTags.length > 0 ? `(${selectedTags.length})` : ''}
            </Button>
            <Button
              aria-controls="status-menu"
              aria-haspopup="true"
              variant="outlined"
              color="secondary"
              size="small"
              endIcon={<KeyboardArrowDownRoundedIcon fontSize="small" />}
              onClick={handleStatusClick}
              sx={{
                justifyContent: { xs: 'space-between', sm: 'flex-start' },
              }}
            >
              <Typography
                component="span"
                color="text.secondary"
                fontWeight={500}
                sx={{
                  pr: 0.5,
                  display: { xs: 'none', sm: 'inline-flex' },
                }}
              >
                Status:
              </Typography>{' '}
              {getStatusName()}
            </Button>
          </Stack>
        </Stack>
        <Menu
          id="status-menu"
          anchorEl={statusAnchorEl}
          keepMounted
          open={Boolean(statusAnchorEl)}
          onClose={handleStatusClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem
            sx={{
              borderRadius: (theme) => theme.shape.borderRadius + 'px',
            }}
            key="all"
            onClick={() => handleStatusToggle('all')}
            selected={filters.status === null}
          >
            <ListItemText
              primary="All"
              primaryTypographyProps={{
                fontWeight: 600,
              }}
            />
            {filters.status === null && (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                minWidth={38}
              >
                <CheckTwoToneIcon color="primary" />
              </Box>
            )}
          </MenuItem>
          {statusOptions.map((statusOption) => (
            <MenuItem
              sx={{
                borderRadius: (theme) => theme.shape.borderRadius + 'px',
              }}
              key={statusOption.id}
              onClick={() => handleStatusToggle(statusOption.id)}
              selected={filters.status === statusOption.id}
            >
              <ListItemText
                primary={statusOption.name}
                primaryTypographyProps={{
                  fontWeight: 600,
                }}
              />
              {filters.status === statusOption.id && (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-end"
                  minWidth={38}
                >
                  <CheckTwoToneIcon color="primary" />
                </Box>
              )}
            </MenuItem>
          ))}
        </Menu>
        <Menu
          id="filter-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <FormGroup>
            {tags.map((tag) => (
              <MenuItem key={tag.id}>
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      checked={selectedTags.some((t) => t.id === tag.id)}
                      onChange={() => handleToggle(tag)}
                      name={tag.name}
                    />
                  }
                  label={tag.name}
                />
              </MenuItem>
            ))}
          </FormGroup>
        </Menu>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: 'column', sm: 'row' }}
        pb={2}
      >
        <Box>
          {selectedTags.length > 0 && (
            <Stack
              flexWrap="wrap"
              direction="row"
              gap={0.5}
              alignItems="center"
              justifyContent={{ xs: 'center', sm: 'flex-start' }}
            >
              {selectedTags.map((tag) => (
                <Chip
                  key={tag.id}
                  label={tag.name}
                  onDelete={() => handleDeleteTag(tag.id)}
                  variant="outlined"
                />
              ))}
            </Stack>
          )}
        </Box>
        <ToggleButtonGroup
          color="primary"
          sx={{ ml: 1, mt: { xs: 1.5, sm: 0 } }}
          value={toggleView}
          exclusive
          onChange={handleViewOrientation}
        >
          <ToggleButton value="table_view">
            <TableRowsTwoToneIcon />
          </ToggleButton>
          <ToggleButton value="grid_view">
            <GridViewTwoToneIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {paginatedProjects.length === 0 ? (
        <>
          <Typography
            sx={{
              py: { xs: 2, sm: 3, md: 6, lg: 10 },
            }}
            variant="h3"
            color="text.secondary"
            align="center"
            fontWeight={500}
          >
            {t("We couldn't find any projects matching your search criteria")}
          </Typography>
        </>
      ) : (
        <>
          {toggleView === 'table_view' && (
            <>
              <Card>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={selectedAllProjects}
                            indeterminate={selectedSomeProjects}
                            onChange={handleSelectAllProjects}
                          />
                        </TableCell>
                        <TableCell>{t('Name')}</TableCell>
                        <TableCell>{t('Tags')}</TableCell>
                        <TableCell>{t('Members')}</TableCell>
                        <TableCell>{t('Progress')}</TableCell>
                        <TableCell>{t('Status')}</TableCell>
                        <TableCell>{t('Time Left')}</TableCell>
                        <TableCell align="center">{t('Actions')}</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {paginatedProjects.map((project) => {
                        const isProjectSelected = selectedItems.includes(project.id);
                        return (
                          <TableRow
                            hover
                            key={project.id}
                            selected={isProjectSelected}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox
                                checked={isProjectSelected}
                                onChange={(event) => handleSelectOneProject(event, project.id)}
                                value={isProjectSelected}
                              />
                            </TableCell>
                            <TableCell>
                              <Typography
                                noWrap
                                variant="h6"
                                sx={{ maxWidth: 180 }}
                                fontWeight={500}
                              >
                                <Link
                                  href=""
                                  onClick={(e) => e.preventDefault()}
                                  underline="hover"
                                  color="text.primary"
                                >
                                  {project.name}
                                </Link>
                              </Typography>
                              <Typography
                                color="text.secondary"
                                noWrap
                                sx={{ maxWidth: 180 }}
                              >
                                {project.description}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              {project.tags.map((value, index) => {
                                const isLastItem = index === project.tags.length - 1;
                                return (
                                  <span key={value}>
                                    <Link
                                      href=""
                                      variant="body2"
                                      onClick={(e) => e.preventDefault()}
                                      underline="hover"
                                    >
                                      {value}
                                    </Link>
                                    {!isLastItem && ', '}{' '}
                                  </span>
                                );
                              })}
                            </TableCell>
                            <TableCell>
                              <Box
                                display="flex"
                                justifyContent="flex-start"
                              >
                                {project.memberIds.length > 0 && (
                                  <AvatarGroup
                                    max={3}
                                    sx={{
                                      '& .MuiAvatar-root': {
                                        width: 30,
                                        height: 30,
                                        fontSize: 12,
                                      },
                                    }}
                                  >
                                    {project.memberIds.map((member) => (
                                      <Tooltip
                                        arrow
                                        placement="top"
                                        key={member.id}
                                        title={member.name}
                                      >
                                        <Avatar
                                          sx={{
                                            width: 30,
                                            height: 30,
                                          }}
                                          key={member.id}
                                          src={member.avatar}
                                        />
                                      </Tooltip>
                                    ))}
                                  </AvatarGroup>
                                )}
                              </Box>
                            </TableCell>
                            <TableCell align="center">
                              <Box
                                sx={{
                                  minWidth: 164,
                                }}
                                display="flex"
                                alignItems="center"
                              >
                                <LinearProgressSlim
                                  sx={{
                                    flex: 1,
                                    mr: 1,
                                  }}
                                  value={project.progress}
                                  color="primary"
                                  variant="determinate"
                                />
                                <Typography
                                  fontWeight={500}
                                  variant="body2"
                                >
                                  {project.progress}%
                                </Typography>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Typography noWrap>
                                {getProjectStatusLabel(project.status)}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                noWrap
                                variant="body1"
                                color="text.primary"
                              >
                                {t('Due')}
                                <Typography
                                  fontWeight={600}
                                  component="span"
                                  variant="body1"
                                >
                                  {' '}
                                  {formatDistance(project.startDate, project.dueDate, {
                                    addSuffix: true,
                                  })}
                                </Typography>
                              </Typography>
                              <Typography
                                noWrap
                                sx={{ opacity: 0.8 }}
                                color="text.secondary"
                              >
                                {t('Started')}:{' '}
                                <Typography
                                  component="span"
                                  variant="body1"
                                  color="text.primary"
                                >
                                  {format(project.dueDate, 'dd.M.yyyy')}
                                </Typography>
                              </Typography>
                            </TableCell>
                            <TableCell
                              align="center"
                              sx={{
                                whiteSpace: 'nowrap',
                              }}
                            >
                              <Typography noWrap>
                                <Tooltip
                                  title={t('View')}
                                  arrow
                                >
                                  <IconButton>
                                    <LaunchTwoToneIcon fontSize="small" />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip
                                  title={t('Delete')}
                                  arrow
                                >
                                  <IconButton>
                                    <DeleteTwoToneIcon fontSize="small" />
                                  </IconButton>
                                </Tooltip>
                              </Typography>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card>
              <Box
                pt={2}
                sx={{
                  '.MuiTablePagination-select': {
                    py: 0.55,
                  },
                }}
              >
                <TablePagination
                  component="div"
                  count={filteredProjects.length}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleLimitChange}
                  page={page}
                  rowsPerPage={limit}
                  rowsPerPageOptions={[5, 10, 15]}
                  slotProps={{
                    select: {
                      variant: 'outlined',
                      size: 'small',
                      sx: {
                        p: 0,
                      },
                    },
                  }}
                />
              </Box>
            </>
          )}
          {toggleView === 'grid_view' && (
            <>
              {paginatedProjects.length === 0 ? (
                <Typography
                  sx={{
                    py: { xs: 2, sm: 3, md: 6, lg: 10 },
                  }}
                  variant="h3"
                  color="text.secondary"
                  align="center"
                >
                  {t("We couldn't find any projects matching your search criteria")}
                </Typography>
              ) : (
                <Grid
                  container
                  spacing={{ xs: 2, sm: 3 }}
                >
                  {paginatedProjects.map((project) => {
                    const isProjectSelected = selectedItems.includes(project.id);

                    return (
                      <Grid
                        xs={12}
                        md={6}
                        lg={4}
                        key={project.name}
                      >
                        <CardWrapper
                          className={clsx({
                            'Mui-selected': isProjectSelected,
                          })}
                        >
                          <Box
                            sx={{
                              position: 'relative',
                              zIndex: '2',
                            }}
                          >
                            <Box
                              pl={2}
                              py={1}
                              pr={1}
                              display="flex"
                              alignItems="center"
                              justifyContent="space-between"
                            >
                              <Box>
                                <Typography
                                  variant="body2"
                                  component="span"
                                >
                                  {t('Tags')}:{' '}
                                </Typography>
                                {project.tags.map((value, index) => {
                                  const isLastItem = index === project.tags.length - 1;
                                  return (
                                    <span key={value}>
                                      <Link
                                        underline="hover"
                                        href=""
                                        variant="body2"
                                        onClick={(e) => e.preventDefault()}
                                      >
                                        {value}
                                      </Link>
                                      {!isLastItem && ', '}{' '}
                                    </span>
                                  );
                                })}
                              </Box>
                              <Checkbox
                                checked={isProjectSelected}
                                onChange={(event) => handleSelectOneProject(event, project.id)}
                                value={isProjectSelected}
                              />
                            </Box>
                            <Divider />
                            <CardActionArea>
                              <CardMedia
                                sx={{
                                  minHeight: 184,
                                }}
                                image={project.screenshot}
                              />
                            </CardActionArea>
                            <Divider />
                            <Box p={2}>
                              {getProjectStatusLabel(project.status)}

                              <Typography
                                sx={{
                                  mt: 2,
                                }}
                                noWrap
                                gutterBottom
                                variant="h5"
                              >
                                {' '}
                                <Link
                                  href=""
                                  onClick={(e) => e.preventDefault()}
                                  underline="hover"
                                  color="text.primary"
                                >
                                  {project.name}
                                </Link>
                              </Typography>

                              <Typography
                                noWrap
                                sx={{
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: 'vertical',
                                  display: '-webkit-box',
                                  whiteSpace: 'initial',
                                }}
                                variant="subtitle2"
                              >
                                {project.description}
                              </Typography>
                            </Box>
                            <Box
                              px={2}
                              display="flex"
                              alignItems="flex-end"
                              justifyContent="space-between"
                            >
                              <Box>
                                <Typography variant="subtitle2">{t('Started')}: </Typography>
                                <Typography
                                  variant="subtitle2"
                                  fontWeight={600}
                                >
                                  {format(project.dueDate, 'MMMM dd yyyy')}
                                </Typography>
                              </Box>
                              <Box>
                                <Typography
                                  align="right"
                                  variant="subtitle2"
                                >
                                  {t('Due')}:{' '}
                                  <Typography
                                    variant="subtitle2"
                                    fontWeight={600}
                                  >
                                    {formatDistance(project.startDate, project.dueDate, {})}
                                  </Typography>
                                </Typography>
                              </Box>
                            </Box>

                            <Box
                              p={2}
                              display="flex"
                              alignItems="center"
                            >
                              <LinearProgress
                                sx={{
                                  flex: 1,
                                  mr: 1,
                                }}
                                value={project.progress}
                                color="primary"
                                variant="determinate"
                              />
                              <Typography
                                variant="subtitle2"
                                fontWeight={500}
                                sx={{
                                  color: 'primary.main',
                                }}
                              >
                                {project.progress}%
                              </Typography>
                            </Box>
                            <Divider />
                            <Box
                              p={2}
                              display="flex"
                              alignItems="center"
                              justifyContent="space-between"
                            >
                              <Box
                                display="flex"
                                justifyContent="flex-start"
                              >
                                {project.memberIds.length > 0 && (
                                  <AvatarGroup
                                    max={3}
                                    sx={{
                                      '& .MuiAvatar-root': {
                                        width: 30,
                                        height: 30,
                                        fontSize: 12,
                                      },
                                    }}
                                  >
                                    {project.memberIds.map((member) => (
                                      <Tooltip
                                        arrow
                                        placement="top"
                                        key={member.id}
                                        title={member.name}
                                      >
                                        <Avatar
                                          sx={{
                                            width: 30,
                                            height: 30,
                                          }}
                                          key={member.id}
                                          src={member.avatar}
                                        />
                                      </Tooltip>
                                    ))}
                                  </AvatarGroup>
                                )}
                              </Box>
                              <Box>
                                <Button
                                  sx={{
                                    mr: 1,
                                  }}
                                  size="small"
                                  variant="outlined"
                                  color="secondary"
                                >
                                  {t('Edit')}
                                </Button>
                                <Tooltip
                                  title={t('Delete')}
                                  arrow
                                >
                                  <ButtonSoft
                                    sx={{
                                      p: 0,
                                      width: 34,
                                      height: 34,
                                      minWidth: 34,
                                    }}
                                    color="error"
                                  >
                                    <DeleteTwoToneIcon fontSize="small" />
                                  </ButtonSoft>
                                </Tooltip>
                              </Box>
                            </Box>
                          </Box>
                        </CardWrapper>
                      </Grid>
                    );
                  })}
                  <Grid xs={12}>
                    <Box
                      sx={{
                        '.MuiTablePagination-select': {
                          py: 0.55,
                        },
                      }}
                    >
                      <TablePagination
                        component="div"
                        count={filteredProjects.length}
                        onPageChange={handlePageChange}
                        onRowsPerPageChange={handleLimitChange}
                        page={page}
                        rowsPerPage={limit}
                        rowsPerPageOptions={[5, 10, 15]}
                        slotProps={{
                          select: {
                            variant: 'outlined',
                            size: 'small',
                            sx: {
                              p: 0,
                            },
                          },
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              )}
            </>
          )}
          {!toggleView && (
            <Box
              sx={{
                textAlign: 'center',
                p: { xs: 2, sm: 3 },
              }}
            >
              <Typography
                align="center"
                variant="h4"
                color="text.secondary"
                fontWeight={500}
                sx={{
                  my: { xs: 2, sm: 3, md: 5 },
                }}
                gutterBottom
              >
                {t('Choose between table or grid views for displaying the projects list.')}
              </Typography>
            </Box>
          )}
        </>
      )}
    </>
  );
};

Results.propTypes = {
  projects: PropTypes.array.isRequired,
};

Results.defaultProps = {
  projects: [],
};

export default Results;
