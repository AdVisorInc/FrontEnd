import { useState, useEffect } from 'react';
import { RootState, useDispatch, useSelector } from 'src/store';
import { searchUsers, SearchUser } from 'src/slices/userProfile';
import { fetchRoles, Role } from 'src/slices/organization';
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
  onSendInvitation: (email: string, roleId: number) => void;
}

const InviteMemberDialog = ({ open, onClose, onSendInvitation }: InviteMemberDialogProps) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<SearchUser | null>(null);
  const [selectedRoleId, setSelectedRoleId] = useState<number | null>(null);
  const searchResults = useSelector((state: RootState) => state.userProfile.searchResults);
  const roles = useSelector((state: RootState) => state.organization.roles);

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
  };

  const handleRoleChange = (event: React.ChangeEvent<{}>, roleId: number | null) => {
    setSelectedRoleId(roleId);
  };

  const handleSendInvitation = () => {
    if (selectedRoleId) {
      onSendInvitation(selectedUser ? selectedUser.email : searchQuery, selectedRoleId);
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Invite Member</DialogTitle>
      <DialogContent>
        <Autocomplete
          freeSolo
          options={searchResults}
          getOptionLabel={(option) => {
            if (typeof option === 'string') {
              return option;
            } else {
              return option.email;
            }
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
        <Box mt={2}>
          <Autocomplete
            options={roles}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField {...params} label="Select a role" variant="outlined" fullWidth />
            )}
            value={roles.find((role) => role.id === selectedRoleId) || null}
            onChange={(event, value) => handleRoleChange(event, value?.id || null)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSendInvitation} color="primary" disabled={!selectedRoleId}>
          Send Invitation
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InviteMemberDialog;
