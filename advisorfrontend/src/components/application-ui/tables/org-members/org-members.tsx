import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Chip,
  Divider,
  IconButton,
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
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import BasicDropdownWithProps from "../../dropdowns/basic/basic-dropdown-with-props";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { ChangeEvent, useEffect, useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { RootState, useDispatch, useSelector } from 'src/store';
import { fetchOrganizationMembers, OrganizationMember, removeMember } from 'src/slices/organization';
import { sendInvitation, cancelInvitation, resendInvitation } from "../../../../slices/invitations";
import InviteMemberDialog from "../../organization-overview/InviteMemberDialog";

const OrgMembers = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();
  const organizationMembers = useSelector((state: RootState) => state.organization.organizationMembers);
  const selectedOrganizationId = useSelector((state: RootState) => state.organization.selectedOrganization);
  const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [query, setQuery] = useState<string>('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);
  const [inviteDialogOpen, setInviteDialogOpen] = useState(false);

  useEffect(() => {
    if (selectedOrganizationId) {
      dispatch(fetchOrganizationMembers(selectedOrganizationId));
    }
  }, [dispatch, selectedOrganizationId]);

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setQuery(event.target.value);
  };

  const handleSelectAllEmployees = (event: ChangeEvent<HTMLInputElement>): void => {
    setSelectedEmployees(event.target.checked ? organizationMembers.map((member) => member.user.id) : []);
  };

  const handleSelectOneEmployee = (
    _event: ChangeEvent<HTMLInputElement>,
    userId: string
  ): void => {
    if (!selectedEmployees.includes(userId)) {
      setSelectedEmployees((prevSelected) => [...prevSelected, userId]);
    } else {
      setSelectedEmployees((prevSelected) => prevSelected.filter((id) => id !== userId));
    }
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const applyFilters = (members: OrganizationMember[], query: string): OrganizationMember[] => {
    return members.filter((member) => {
      let matches = true;

      if (query) {
        const properties = ['user.first_name', 'user.last_name', 'user.email'];
        let containsQuery = false;

        properties.forEach((property) => {
          if (property.split('.').reduce((obj, prop) => obj && obj[prop], member).toLowerCase().includes(query.toLowerCase())) {
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

  const applyPagination = (members: OrganizationMember[], page: number, limit: number): OrganizationMember[] => {
    return members.slice(page * limit, page * limit + limit);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, userId: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedEmployee(userId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedEmployee(null);
  };

  const handleResendInvitation = async (userId: string) => {
    const member = organizationMembers.find((m) => m.user_id === userId);
    if (member && selectedOrganizationId) {
      await dispatch(resendInvitation(member.invitation_id));
      handleMenuClose();
    }
  };

  const handleCancelInvitation = async (userId: string) => {
    const member = organizationMembers.find((m) => m.user_id === userId);
    if (member && selectedOrganizationId) {
      await dispatch(cancelInvitation(member.invitation_id));
      handleMenuClose();
    }
  };

  const handleRemoveMember = async (userId: string) => {
    if (selectedOrganizationId) {
      await dispatch(removeMember(selectedOrganizationId, userId));
      handleMenuClose();
    }
  };

  const user = useSelector((state: RootState) => state.userProfile.data);

  const filteredMembers = applyFilters(organizationMembers, query);
  const paginatedMembers = applyPagination(filteredMembers, page, limit);
  const selectedSomeMembers = selectedEmployees.length > 0 && selectedEmployees.length < organizationMembers.length;
  const selectedAllMembers = selectedEmployees.length === organizationMembers.length;

  const canInviteMembers = organizationMembers.some((member) => member.role.permissions.includes('manage_members'));
  const canLeaveTeam = !organizationMembers.some((member) => member.user_id === user?.id && member.role.name === 'Owner');

  const handleInviteClick = () => {
    setInviteDialogOpen(true);
  };

  const handleInviteDialogClose = () => {
    setInviteDialogOpen(false);
  };

  const handleSendInvitation = async (email: string, roleId: number) => {
    if (selectedOrganizationId) {
      await dispatch(sendInvitation(selectedOrganizationId, email, roleId));
      handleInviteDialogClose();
    }
  };

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
          <Button variant="contained" color="primary" onClick={handleInviteClick} disabled={!canInviteMembers}>
            {t('Invite')}
          </Button>
          <Button variant="outlined" color="primary" disabled={!canLeaveTeam}>
            {t('Leave Team')}
          </Button>
        </Box>
      </Box>
      <Divider />
      {paginatedMembers.length === 0 ? (
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
                      checked={selectedAllMembers}
                      indeterminate={selectedSomeMembers}
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
                {paginatedMembers.map((member) => {
                  const isMemberSelected = selectedEmployees.includes(member.user.id);
                  const canChangeRole = (member.user_id !== user?.id || member.role.name !== 'Owner') && member.role.name !== 'Owner';
                  const isInvitationPending = member.status === 'pending';

                  return (
                    <TableRow hover key={member.user.id} selected={isMemberSelected}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isMemberSelected}
                          onChange={(event) => handleSelectOneEmployee(event, member.user.id)}
                          value={isMemberSelected}
                        />
                      </TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <Avatar sx={{ width: 50, height: 50 }} src={member.user.avatar_url} />
                          <Box ml={1.5}>
                            <Link href="" onClick={(e) => e.preventDefault()} color="text.primary" variant="h6" noWrap>
                              {member.user.first_name} {member.user.last_name}
                            </Link>
                            <Typography variant="subtitle2" noWrap color="text.secondary">
                              {member.user.email}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell align="center">
                        <Chip
                          label={t(member.status)}
                          variant="filled"
                          color={member.status === 'active' ? 'success' : member.status === 'pending' ? 'warning' : 'error'}
                        />
                      </TableCell>
                      <TableCell align="center">
                        {/* Replace with actual MFA data */}
                        <CheckIcon color="success" />
                      </TableCell>
                      <TableCell align="center">
                        <BasicDropdownWithProps currentSelection={member.role.name} canChange={canChangeRole} />
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          size="small"
                          sx={{ color: 'primary.main' }}
                          onClick={(event) => handleMenuOpen(event, member.user.id)}
                          disabled={!isInvitationPending}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          anchorEl={anchorEl}
                          open={selectedEmployee === member.user.id}
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
                          {isInvitationPending && (
                            <>
                              <MenuItem onClick={() => handleResendInvitation(member.user.id)}>
                                <ListItemIcon>
                                  <EmailOutlinedIcon />
                                </ListItemIcon>
                                <Typography variant="body2">{t('Resend Invitation')}</Typography>
                              </MenuItem>
                              <MenuItem onClick={() => handleCancelInvitation(member.user.id)}>
                                <ListItemIcon>
                                  <CloseIcon />
                                </ListItemIcon>
                                <Typography variant="body2">{t('Cancel Invitation')}</Typography>
                              </MenuItem>
                            </>
                          )}
                          {!isInvitationPending && (
                            <>
                              <MenuItem onClick={() => handleRemoveMember(member.user.id)}>
                                <ListItemIcon>
                                  <PersonRemoveOutlinedIcon />
                                </ListItemIcon>
                                <Typography variant="body2">{t('Remove Member')}</Typography>
                              </MenuItem>
                            </>
                          )}
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
      <InviteMemberDialog
        open={inviteDialogOpen}
        onClose={handleInviteDialogClose}
        onSendInvitation={handleSendInvitation}
      />
    </Card>
  );
};

export default OrgMembers;
