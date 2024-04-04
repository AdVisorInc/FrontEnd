import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import LaunchTwoToneIcon from '@mui/icons-material/LaunchTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import TableRowsTwoToneIcon from '@mui/icons-material/TableRowsTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Card,
  Checkbox,
  Chip,
  Divider,
  Unstable_Grid2 as Grid,
  IconButton,
  InputAdornment,
  Link,
  MenuItem,
  Select,
  Stack,
  styled,
  Tab,
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
import PropTypes from 'prop-types';
import { ChangeEvent, FC, MouseEvent, SyntheticEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { TabsShadow } from 'src/components/base/styles/tabs';
import { User } from 'src/mocks/users';
import BulkDelete from './bulk-delete';

export const CardWrapper = styled(Card)(
  ({ theme }) => `

  position: relative;
  overflow: visible;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: inherit;
    z-index: 1;
  }
      
    &.Mui-selected::after {
      box-shadow: 0 0 0 3px ${theme.palette.primary.main};
    }
  `
);

interface ResultsProps {
  users: User[];
}

interface Filters {
  role?: string;
}

interface Tab {
  value: string;
  label: string;
  count: number;
}

interface UserCounts {
  all: number;
  customer: number;
  admin: number;
  subscriber: number;
}

const getUserRoleLabel = (userRole: string): JSX.Element => {
  const map = {
    admin: {
      text: 'Administrator',
      color: 'error',
    },
    customer: {
      text: 'Customer',
      color: 'info',
    },
    subscriber: {
      text: 'Subscriber',
      color: 'warning',
    },
  };

  const { text, color }: any = map[userRole];

  return (
    <Chip
      color={color}
      label={text}
    />
  );
};

const applyFilters = (users: User[], query: string, filters: Filters): User[] => {
  return users.filter((user) => {
    let matches = true;

    if (query) {
      const properties = ['email', 'name', 'username'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (user[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (filters.role && user.role !== filters.role) {
        matches = false;
      }

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value && user[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });
};

const applyPagination = (users: User[], page: number, limit: number): User[] => {
  return users.slice(page * limit, page * limit + limit);
};

const Results: FC<ResultsProps> = ({ users }) => {
  const [selectedItems, setSelectedUsers] = useState<string[]>([]);
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const userCounts: UserCounts = {
    all: users.length,
    customer: users.filter((user) => user.role === 'customer').length,
    admin: users.filter((user) => user.role === 'admin').length,
    subscriber: users.filter((user) => user.role === 'subscriber').length,
  };

  const tabs: Tab[] = [
    {
      value: 'all',
      label: t('All users'),
      count: userCounts.all,
    },
    {
      value: 'customer',
      label: t('Customers'),
      count: userCounts.customer,
    },
    {
      value: 'admin',
      label: t('Administrators'),
      count: userCounts.admin,
    },
    {
      value: 'subscriber',
      label: t('Subscribers'),
      count: userCounts.subscriber,
    },
  ];

  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [query, setQuery] = useState<string>('');
  const [filters, setFilters] = useState<Filters>({
    role: null,
  });
  const handleTabsChange = (_event: SyntheticEvent, tabsValue: unknown) => {
    let value = null;

    if (tabsValue !== 'all') {
      value = tabsValue;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      role: value,
    }));

    setSelectedUsers([]);
  };
  const handleSelectChange = (event: ChangeEvent<{ value: unknown }>) => {
    const selectedValue = event.target.value as string;

    setFilters((prevFilters) => ({
      ...prevFilters,
      role: selectedValue === 'all' ? null : selectedValue,
    }));

    setSelectedUsers([]);
  };

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setQuery(event.target.value);
  };

  const handleSelectAllUsers = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedUsers(event.target.checked ? users.map((user) => user.id) : []);
  };

  const handleSelectOneUser = (_event: ChangeEvent<HTMLInputElement>, userId: string): void => {
    if (!selectedItems.includes(userId)) {
      setSelectedUsers((prevSelected) => [...prevSelected, userId]);
    } else {
      setSelectedUsers((prevSelected) => prevSelected.filter((id) => id !== userId));
    }
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredUsers = applyFilters(users, query, filters);
  const paginatedUsers = applyPagination(filteredUsers, page, limit);
  const selectedBulkActions = selectedItems.length > 0;
  const selectedSomeUsers = selectedItems.length > 0 && selectedItems.length < users.length;
  const selectedAllUsers = selectedItems.length === users.length;

  const [toggleView, setToggleView] = useState<string | null>('grid_view');

  const handleViewOrientation = (_event: MouseEvent<HTMLElement>, newValue: string | null) => {
    setToggleView(newValue);
  };

  return (
    <>
      {smUp ? (
        <TabsShadow
          sx={{
            '& .MuiTab-root': {
              flexDirection: 'row',
              pr: 1,

              '& .MuiChip-root': {
                ml: 1,
                transition: theme.transitions.create(['background', 'color'], {
                  duration: theme.transitions.duration.complex,
                }),
              },

              '&.Mui-selected': {
                '& .MuiChip-root': {
                  backgroundColor: alpha(theme.palette.primary.contrastText, 0.12),
                  color: 'primary.contrastText',
                },
              },

              '&:first-child': {
                ml: 0,
              },
            },
          }}
          onChange={handleTabsChange}
          scrollButtons="auto"
          textColor="secondary"
          value={filters.role || 'all'}
          variant="scrollable"
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.value}
              value={tab.value}
              label={
                <>
                  {tab.label}
                  <Chip
                    label={tab.count}
                    size="small"
                  />
                </>
              }
            />
          ))}
        </TabsShadow>
      ) : (
        <Select
          value={filters.role || 'all'}
          //@ts-ignore
          onChange={handleSelectChange}
          fullWidth
        >
          {tabs.map((tab) => (
            <MenuItem
              key={tab.value}
              value={tab.value}
            >
              {tab.label}
            </MenuItem>
          ))}
        </Select>
      )}

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={2}
      >
        <Box
          display="flex"
          alignItems="center"
        >
          {toggleView === 'grid_view' && (
            <Tooltip
              arrow
              placement="top"
              title={t('Select all users')}
            >
              <Checkbox
                edge="start"
                sx={{ mr: 1 }}
                disabled={paginatedUsers.length === 0}
                checked={selectedAllUsers}
                indeterminate={selectedSomeUsers}
                onChange={handleSelectAllUsers}
              />
            </Tooltip>
          )}
          {selectedBulkActions ? (
            <Stack
              direction="row"
              spacing={1}
            >
              <BulkDelete />

              <Tooltip
                arrow
                placement="top"
                title={t('Export user list')}
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
            <TextField
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
          )}
        </Box>

        <ToggleButtonGroup
          sx={{ ml: 1 }}
          size="large"
          color="primary"
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
      {paginatedUsers.length === 0 ? (
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
            {t("We couldn't find any users matching your search criteria")}
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
                            checked={selectedAllUsers}
                            indeterminate={selectedSomeUsers}
                            onChange={handleSelectAllUsers}
                          />
                        </TableCell>
                        <TableCell>{t('Username')}</TableCell>
                        <TableCell>{t('Name')}</TableCell>
                        <TableCell>{t('Email')}</TableCell>
                        <TableCell align="center">{t('Posts')}</TableCell>
                        <TableCell>{t('Location')}</TableCell>
                        <TableCell>{t('Role')}</TableCell>
                        <TableCell align="center">{t('Actions')}</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {paginatedUsers.map((user) => {
                        const isUserSelected = selectedItems.includes(user.id);
                        return (
                          <TableRow
                            hover
                            key={user.id}
                            selected={isUserSelected}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox
                                checked={isUserSelected}
                                onChange={(event) => handleSelectOneUser(event, user.id)}
                                value={isUserSelected}
                              />
                            </TableCell>
                            <TableCell>
                              <Typography fontWeight={400}>{user.username}</Typography>
                            </TableCell>
                            <TableCell>
                              <Box
                                display="flex"
                                alignItems="center"
                              >
                                <Avatar
                                  variant="rounded"
                                  sx={{
                                    mr: 1,
                                  }}
                                  src={user.avatar}
                                />
                                <Box>
                                  <Link
                                    variant="subtitle1"
                                    fontWeight={500}
                                    href=""
                                    onClick={(e) => e.preventDefault()}
                                    underline="hover"
                                  >
                                    {user.name}
                                  </Link>
                                  <Typography
                                    noWrap
                                    variant="subtitle2"
                                    color="text.secondary"
                                  >
                                    {user.jobtitle}
                                  </Typography>
                                </Box>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Typography>{user.email}</Typography>
                            </TableCell>
                            <TableCell align="center">
                              <Typography fontWeight={600}>{user.posts}</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>{user.location}</Typography>
                            </TableCell>
                            <TableCell>{getUserRoleLabel(user.role)}</TableCell>
                            <TableCell align="center">
                              <Typography noWrap>
                                <Tooltip
                                  title={t('View')}
                                  arrow
                                >
                                  <IconButton color="secondary">
                                    <LaunchTwoToneIcon fontSize="small" />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip
                                  title={t('Delete')}
                                  arrow
                                >
                                  <IconButton color="secondary">
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
                  count={filteredUsers.length}
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
              {paginatedUsers.length === 0 ? (
                <Typography
                  sx={{
                    py: { xs: 2, sm: 3, md: 6, lg: 10 },
                  }}
                  variant="h3"
                  color="text.secondary"
                  align="center"
                >
                  {t("We couldn't find any users matching your search criteria")}
                </Typography>
              ) : (
                <>
                  <Grid
                    container
                    spacing={{ xs: 2, sm: 3 }}
                  >
                    {paginatedUsers.map((user) => {
                      const isUserSelected = selectedItems.includes(user.id);

                      return (
                        <Grid
                          xs={12}
                          sm={6}
                          lg={4}
                          key={user.id}
                        >
                          <CardWrapper
                            className={clsx({
                              'Mui-selected': isUserSelected,
                            })}
                          >
                            <Box
                              sx={{
                                position: 'relative',
                                zIndex: '2',
                              }}
                            >
                              <Box
                                px={2}
                                pt={2}
                                display="flex"
                                alignItems="flex-start"
                                justifyContent="space-between"
                              >
                                {getUserRoleLabel(user.role)}
                                <IconButton
                                  color="primary"
                                  sx={{
                                    p: 0.5,
                                  }}
                                >
                                  <MoreVertTwoToneIcon />
                                </IconButton>
                              </Box>
                              <Box
                                p={2}
                                display="flex"
                                flexDirection={{ xs: 'column', md: 'row' }}
                                alignItems="flex-start"
                              >
                                <Avatar
                                  variant="rounded"
                                  sx={{
                                    width: 50,
                                    height: 50,
                                    mr: 1.5,
                                    mb: { xs: 2, md: 0 },
                                  }}
                                  src={user.avatar}
                                />
                                <Box>
                                  <Box>
                                    <Link
                                      variant="h6"
                                      href=""
                                      onClick={(e) => e.preventDefault()}
                                      underline="hover"
                                    >
                                      {user.name}
                                    </Link>{' '}
                                    <Typography
                                      component="span"
                                      variant="body2"
                                      color="text.secondary"
                                    >
                                      ({user.username})
                                    </Typography>
                                  </Box>
                                  <Typography
                                    sx={{
                                      pt: 0.3,
                                    }}
                                    variant="subtitle2"
                                  >
                                    {user.jobtitle}
                                  </Typography>
                                  <Typography
                                    sx={{
                                      pt: 1,
                                    }}
                                    variant="h6"
                                    fontWeight={500}
                                  >
                                    {user.email}
                                  </Typography>
                                </Box>
                              </Box>
                              <Divider />
                              <Box
                                pl={2}
                                py={1}
                                pr={1}
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                              >
                                <Typography>
                                  <b>{user.posts}</b> {t('posts')}
                                </Typography>
                                <Checkbox
                                  checked={isUserSelected}
                                  onChange={(event) => handleSelectOneUser(event, user.id)}
                                  value={isUserSelected}
                                />
                              </Box>
                            </Box>
                          </CardWrapper>
                        </Grid>
                      );
                    })}
                  </Grid>
                  <Card
                    sx={{
                      p: 2,
                      mt: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',

                      '.MuiTablePagination-select': {
                        py: 0.55,
                      },
                    }}
                  >
                    <Box>
                      <Typography
                        component="span"
                        variant="subtitle1"
                      >
                        {t('Showing')}
                      </Typography>{' '}
                      <b>{limit}</b> {t('of')} <b>{filteredUsers.length}</b> <b>{t('users')}</b>
                    </Box>
                    <TablePagination
                      component="div"
                      count={filteredUsers.length}
                      onPageChange={handlePageChange}
                      onRowsPerPageChange={handleLimitChange}
                      page={page}
                      rowsPerPage={limit}
                      labelRowsPerPage=""
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
                  </Card>
                </>
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
                {t('Choose between table or grid views for displaying the users list.')}
              </Typography>
            </Box>
          )}
        </>
      )}
    </>
  );
};

Results.propTypes = {
  users: PropTypes.array.isRequired,
};

Results.defaultProps = {
  users: [],
};

export default Results;
