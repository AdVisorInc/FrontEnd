import { useState, useEffect } from 'react';
import { RootState, useDispatch, useSelector } from 'src/store';
import { searchUsers, SearchUser } from 'src/slices/userProfile';
import { fetchRoles, Role } from 'src/slices/organization';
import { Invitation } from 'src/slices/invitations';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Box,
  Avatar,
  Autocomplete,
  CircularProgress,
  styled,
} from '@mui/material';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(5),
  height: theme.spacing(5),
  marginRight: theme.spacing(2),
}));

interface InviteMemberDialogProps {
  open: boolean;
  onClose: () => void;
  onSendInvitation: (email: string, roleId: number, inviterName: string) => void;
}

const InviteMemberDialog = ({ open, onClose, onSendInvitation }: InviteMemberDialogProps) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<SearchUser | null>(null);
  const [selectedRoleId, setSelectedRoleId] = useState<number | null>(null);
  const searchResults = useSelector((state: RootState) => state.userProfile.searchResults);
  const roles = useSelector((state: RootState) => state.organization.roles);
  const invitations = useSelector((state: RootState) => state.invitations.invitations);
  const currentUser = useSelector((state: RootState) => state.userProfile.data);

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  const handleSearchQueryChange = async (event: React.ChangeEvent<{}>, value: string) => {
    setSearchQuery(value);
    if (value) {
      await dispatch(searchUsers(value));
    } else {
      setSelectedUser(null);
    }
  };

  const handleUserSelect = (event: React.ChangeEvent<{}>, user: SearchUser | null) => {
    setSelectedUser(user);
    setSearchQuery('');
  };

  const handleRoleChange = (event: React.ChangeEvent<{}>, roleId: number | null) => {
    setSelectedRoleId(roleId);
  };

  const handleSendInvitation = () => {
    if (selectedRoleId && selectedUser && selectedUser.email !== currentUser.email) {
      const existingInvitation = invitations.find(
        (invitation) => invitation.email === selectedUser.email && invitation.status === 'pending'
      );
      if (!existingInvitation) {
        onSendInvitation(selectedUser.email, selectedRoleId, selectedUser.first_name);
        onClose();
      }
    }
  };

  const isInvitationDisabled = !selectedRoleId ||
    !selectedUser ||
    selectedUser.email === currentUser.email ||
    (typeof selectedUser === 'string' && selectedUser === currentUser.email);
  const filteredRoles = roles.filter((role) => role.name !== 'Owner');
  const filteredSearchResults = searchResults.filter(
    (user) => user.email !== currentUser.email
  );

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Invite Member</DialogTitle>
      <DialogContent>
        <Box my={2}>
          <Autocomplete
            freeSolo
            options={filteredSearchResults}
            getOptionLabel={(option) => {
              if (typeof option === 'string') {
                return option;
              } else {
                return option.email;
              }
            }}
            getOptionDisabled={(option) => {
              if (typeof option !== 'string') {
                const existingInvitation = invitations.find(
                  (invitation) => invitation.email === option.email && invitation.status === 'pending'
                );
                return !!existingInvitation;
              }
              return false;
            }}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {typeof option !== 'string' && (
                  <>
                    <StyledAvatar src={option.avatar_url} />
                    <Box>
                      <Typography variant="subtitle1">
                        {option.first_name} {option.last_name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {option.email}
                      </Typography>
                      {invitations.find(
                        (invitation) => invitation.email === option.email && invitation.status === 'pending'
                      ) && (
                        <Typography variant="body2" color="error">
                          Invitation sent
                        </Typography>
                      )}
                      {invitations.find(
                        (invitation) => invitation.email === option.email && invitation.status === 'expired'
                      ) && (
                        <Typography variant="body2" color="warning">
                          Invitation expired
                        </Typography>
                      )}
                    </Box>
                  </>
                )}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search by email"
                variant="outlined"
                fullWidth
                onChange={(event) => handleSearchQueryChange(event, event.target.value)}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <>
                      {selectedUser && typeof selectedUser !== 'string' && !searchQuery && (
                        <StyledAvatar src={selectedUser.avatar_url} />
                      )}
                      {params.InputProps.startAdornment}
                    </>
                  ),
                  endAdornment: (
                    <>
                      {searchQuery && <CircularProgress color="inherit" size={20} />}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
            value={selectedUser}
            onChange={handleUserSelect}
          />
        </Box>
        <Box mt={4}>
          <Autocomplete
            options={filteredRoles}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField {...params} label="Select a role" variant="outlined" fullWidth />
            )}
            value={filteredRoles.find((role) => role.id === selectedRoleId) || null}
            onChange={(event, value) => handleRoleChange(event, value?.id || null)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSendInvitation} color="primary" disabled={isInvitationDisabled}>
          Send Invitation
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InviteMemberDialog;
