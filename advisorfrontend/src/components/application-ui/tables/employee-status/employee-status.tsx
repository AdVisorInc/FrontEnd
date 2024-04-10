import {
  alpha,
  Avatar,
  Box,
  Button,
  Card, CardHeader, Checkbox,
  Chip, Divider, IconButton,
  InputAdornment,
  Link,
  ListItemIcon,
  Menu,
  MenuItem,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead, TablePagination,
  TableRow, TextField,
  Typography, useMediaQuery,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import BasicDropdownWithProps from "../../dropdowns/basic/basic-dropdown-with-props";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import {ChangeEvent, useState} from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const BoxComposedContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 7,

  '.MuiTypography-root': {
    color: theme.palette.primary.contrastText,

    '& + .MuiTypography-root': {
      color: alpha(theme.palette.primary.contrastText, 0.7),
    },
  },
}));

const BoxComposedImage = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 5,
  filter: 'grayscale(80%)',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
}));

const BoxComposedBg = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 6,
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
}));

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  bottom: theme.spacing(2),
  zIndex: 7,
}));

const TableHeadWrapper = styled(TableHead)(({ theme }) => ({
  '.MuiTableCell-root': {
    textTransform: 'none',
    fontWeight: 'normal',
    fontSize: theme.typography.pxToRem(16),
    paddingTop: 0,
    paddingBottom: theme.spacing(1),
    background: 'transparent',
  },

  '.MuiTableRow-root': {
    background: 'transparent',
  },
}));

const TableWrapper = styled(Table)(() => ({
  '.MuiTableCell-root': {
    borderBottom: 0,
  },
}));

type EmployeeData = {
  name: string;
  jobFunction: string;
  avatar: string;
  status: string;
  statusColor: 'warning' | 'success' | 'error';
  role:  'Owner' | 'Administrator' | 'Developer' | 'Read-only' | 'Billing-only';
  canChange?: boolean;
  mfaEnabled: boolean;
};

const employees: EmployeeData[] = [
  {
    name: 'Shanelle Wynn',
    jobFunction: 'UI Engineer, Apple Inc.',
    avatar: '/avatars/1.png',
    status: 'Pending',
    statusColor: 'warning',
    role: "Administrator",
    canChange: true,
    mfaEnabled: true,
  },
  {
    name: 'Beck Simpson',
    jobFunction: 'Frontend Developer',
    avatar: '/avatars/2.png',
    status: 'Completed',
    statusColor: 'success',
    role: "Owner",
    canChange: false,
    mfaEnabled: false,
  },
  {
    name: 'Regan Norris',
    jobFunction: 'Senior Project Manager',
    avatar: '/avatars/3.png',
    status: 'Declined',
    statusColor: 'error',
    role: 'Read-only',
    canChange: true,
    mfaEnabled: true,
  },
];


function Component() {
  const { t } = useTranslation();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [query, setQuery] = useState<string>('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setQuery(event.target.value);
  };

  const handleSelectAllEmployees = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedEmployees(event.target.checked ? employees.map((employee) => employee.name) : []);
  };

  const handleSelectOneEmployee = (
    _event: ChangeEvent<HTMLInputElement>,
    employeeName: string
  ): void => {
    if (!selectedEmployees.includes(employeeName)) {
      setSelectedEmployees((prevSelected) => [...prevSelected, employeeName]);
    } else {
      setSelectedEmployees((prevSelected) => prevSelected.filter((name) => name !== employeeName));
    }
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const applyFilters = (employees: EmployeeData[], query: string): EmployeeData[] => {
    return employees.filter((employee) => {
      let matches = true;

      if (query) {
        const properties = ['name', 'jobFunction'];
        let containsQuery = false;

        properties.forEach((property) => {
          if (employee[property].toLowerCase().includes(query.toLowerCase())) {
            containsQuery = true;
          }
        });

        if (!containsQuery) {
          matches = false;
        }
      }

      return matches;
    });
  };

  const applyPagination = (employees: EmployeeData[], page: number, limit: number): EmployeeData[] => {
    return employees.slice(page * limit, page * limit + limit);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, employeeName: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedEmployee(employeeName);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedEmployee(null);
  };

  const handleResendInvitation = (employeeName: string) => {
    // Logic to resend invitation to the selected employee
    console.log(`Resending invitation to ${employeeName}`);
    handleMenuClose();
  };

  const handleCancelInvitation = (employeeName: string) => {
    // Logic to cancel invitation for the selected employee
    console.log(`Canceling invitation for ${employeeName}`);
    handleMenuClose();
  };

  const handleRemoveMember = (employeeName: string) => {
    // Logic to remove the selected employee from the team
    console.log(`Removing member ${employeeName}`);
    handleMenuClose();
  };

  const filteredEmployees = applyFilters(employees, query);
  const paginatedEmployees = applyPagination(filteredEmployees, page, limit);
  const selectedSomeEmployees = selectedEmployees.length > 0 && selectedEmployees.length < employees.length;
  const selectedAllEmployees = selectedEmployees.length === employees.length;

  return (
    <Card>
      <Box
        p={2}
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretch', sm: 'center' }}
        justifyContent="space-between"
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 500,
            mb: { xs: 2, sm: 0 },
            mr: { sm: 2 },
          }}
        >
          <TextField
            fullWidth
            size="small"
            onChange={handleQueryChange}
            value={query}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchTwoToneIcon />
                </InputAdornment>
              ),
            }}
            placeholder={t('Search for members...')}
          />
        </Box>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretch', sm: 'center' }}
          sx={{
            '& > *': {
              minWidth: '120px',
            },
            '& > *:not(:last-child)': {
              mb: { xs: 1, sm: 0 },
              mr: { xs: 0, sm: 1 },
            },
          }}
        >
          <Button variant="contained" color="primary">
            {t('Invite')}
          </Button>
          <Button variant="outlined" color="primary" disabled={employees.some((employee) => employee.role === 'Owner')}>
            {t('Leave Team')}
          </Button>
        </Box>
      </Box>
      <Divider />
      {paginatedEmployees.length === 0 ? (
        <Typography
          sx={{
            py: { xs: 2, sm: 3, md: 6, lg: 10 },
          }}
          variant="h3"
          color="text.secondary"
          align="center"
          fontWeight={500}
        >
          {t("We couldn't find any members matching your search criteria")}
        </Typography>
      ) : (
        <>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedAllEmployees}
                      indeterminate={selectedSomeEmployees}
                      onChange={handleSelectAllEmployees}
                    />
                  </TableCell>
                  <TableCell>{t('Member')}</TableCell>
                  <TableCell align="center">{t('Status')}</TableCell>
                  <TableCell align="center">{t('Enabled MFA')}</TableCell>
                  <TableCell align="center">{t('Role')}</TableCell>
                  <TableCell align="right">{t('Actions')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedEmployees.map((employee) => {
                  const isEmployeeSelected = selectedEmployees.includes(employee.name);
                  return (
                    <TableRow hover key={employee.name} selected={isEmployeeSelected}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isEmployeeSelected}
                          onChange={(event) => handleSelectOneEmployee(event, employee.name)}
                          value={isEmployeeSelected}
                        />
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <Avatar sx={{ width: 50, height: 50 }} src={employee.avatar} />
                          <Box ml={1.5}>
                            <Link href="" onClick={(e) => e.preventDefault()} color="text.primary" variant="h6" noWrap>
                              {employee.name}
                            </Link>
                            <Typography variant="subtitle2" noWrap color="text.secondary">
                              {employee.jobFunction}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell align="center">
                        <Chip label={t(employee.status)} variant="filled" color={employee.statusColor} />
                      </TableCell>
                      <TableCell align="center">
                        {employee.mfaEnabled ? <CheckIcon color="success" /> : <CloseIcon color="error" />}
                      </TableCell>
                      <TableCell align="center">
                        <BasicDropdownWithProps currentSelection={employee.role} canChange={employee.canChange} />
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          size="small"
                          sx={{ color: 'primary.main' }}
                          onClick={(event) => handleMenuOpen(event, employee.name)}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          anchorEl={anchorEl}
                          open={selectedEmployee === employee.name}
                          onClose={handleMenuClose}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                          }}
                        >
                          <MenuItem onClick={() => handleResendInvitation(employee.name)}>
                            <ListItemIcon>
                              <EmailOutlinedIcon />
                            </ListItemIcon>
                            <Typography variant="body2">{t('Resend Invitation')}</Typography>
                          </MenuItem>
                          <MenuItem onClick={() => handleCancelInvitation(employee.name)}>
                            <ListItemIcon>
                              <CloseIcon />
                            </ListItemIcon>
                            <Typography variant="body2">{t('Cancel Invitation')}</Typography>
                          </MenuItem>
                          <Divider />
                          <MenuItem onClick={() => handleRemoveMember(employee.name)}>
                            <ListItemIcon>
                              <PersonRemoveOutlinedIcon />
                            </ListItemIcon>
                            <Typography variant="body2">{t('Remove Member')}</Typography>
                          </MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Card>
  );
}


export default Component;
