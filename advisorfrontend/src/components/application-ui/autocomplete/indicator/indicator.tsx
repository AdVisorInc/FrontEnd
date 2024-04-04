import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import {
  Autocomplete,
  Avatar,
  createFilterOptions,
  Divider,
  FormControl,
  FormGroup,
  FormLabel,
  Unstable_Grid2 as Grid,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import EmptyStateBasicSmall from 'src/components/application-ui/empty-states/basic-small/empy-state-basic-small';
import { AvatarState } from 'src/components/base/styles/avatar';

interface Member {
  name: string;
  detail: string;
  avatar: string;
}

const membersList: Member[] = [
  {
    name: 'Alice Johnson',
    detail: 'Project Manager',
    avatar: '/avatars/1.png',
  },
  {
    name: 'Bob Smith',
    detail: 'Lead Developer',
    avatar: '/avatars/2.png',
  },
  {
    name: 'Carol Williams',
    detail: 'UX Designer',
    avatar: '/avatars/3.png',
  },
  {
    name: 'David Brown',
    detail: 'Quality Assurance',
    avatar: '/avatars/4.png',
  },
  {
    name: 'Eve Davis',
    detail: 'DevOps Engineer',
    avatar: '/avatars/5.png',
  },
];

const filterOptions = createFilterOptions({
  stringify: (option: Member) => `${option.name} ${option.detail}`,
});

const Component = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <FormGroup>
      <FormLabel htmlFor="name-input">
        <Typography
          variant="h5"
          color="text.primary"
        >
          Configuration
        </Typography>
        <Typography variant="subtitle2">Adjust project settings and parameters</Typography>
        <Divider sx={{ my: 2 }} />
      </FormLabel>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
      >
        <Grid
          xs={12}
          md={6}
        >
          <FormControl fullWidth>
            <Typography
              variant="h6"
              gutterBottom
              component="label"
              htmlFor="project-manager-autocomplete"
              fontWeight={500}
            >
              Project manager
            </Typography>
            <Autocomplete
              options={membersList}
              filterOptions={filterOptions}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    id: 'project-manager-autocomplete',
                  }}
                  placeholder="Search and select..."
                />
              )}
              value={selectedMember}
              onChange={(event, newValue) => {
                setSelectedMember(newValue);
              }}
              isOptionEqualToValue={(option, value) => option.name === value?.name}
              noOptionsText={<EmptyStateBasicSmall />}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <ListItemAvatar sx={{ ml: -0.5, minWidth: 48 }}>
                    <AvatarState
                      useShadow
                      state="secondary"
                      src={option.avatar}
                      sx={{
                        width: 28,
                        height: 28,
                      }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{
                      display: { xs: 'initial', sm: 'flex' },
                      alignItems: 'center',
                      gap: { xs: 0, sm: 1 },
                    }}
                    primary={option.name}
                    secondary={option.detail}
                    primaryTypographyProps={{
                      variant: 'subtitle2',
                      fontWeight: 500,
                      color: 'text.primary',
                    }}
                  />
                  {selected && <CheckRoundedIcon fontSize="small" />}
                </li>
              )}
            />
          </FormControl>
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
          <FormControl fullWidth>
            <Typography
              variant="h6"
              gutterBottom
              component="label"
              htmlFor="project-manager-autocomplete"
              fontWeight={500}
            >
              Project manager
            </Typography>
            <Autocomplete
              options={membersList}
              filterOptions={filterOptions}
              getOptionLabel={(option) => option.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    id: 'project-manager-autocomplete',
                  }}
                  placeholder="Search and select..."
                />
              )}
              value={selectedMember}
              onChange={(event, newValue) => {
                setSelectedMember(newValue);
              }}
              isOptionEqualToValue={(option, value) => option.name === value?.name}
              noOptionsText={<EmptyStateBasicSmall />}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <ListItemAvatar sx={{ ml: -0.5, minWidth: 48 }}>
                    <Avatar
                      sx={{ width: 34, height: 34 }}
                      src={option.avatar}
                      variant="rounded"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={option.name}
                    secondary={option.detail}
                    primaryTypographyProps={{
                      variant: 'subtitle2',
                      fontWeight: 600,
                      color: 'text.primary',
                    }}
                  />
                  {selected && <CheckRoundedIcon fontSize="small" />}
                </li>
              )}
            />
          </FormControl>
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default Component;
