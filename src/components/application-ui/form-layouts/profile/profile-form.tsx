import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import {
  alpha,
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Unstable_Grid2 as Grid,
  InputAdornment,
  ListItemAvatar,
  ListItemText,
  OutlinedInput,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import React from 'react';
import { membersList } from 'src/components/application-ui/select/indicator-description/data';
import { AvatarState } from 'src/components/base/styles/avatar';
import { MenuItemPrimaryAccent } from 'src/components/base/styles/menu-item';
import { QuillEditor } from 'src/components/base/styles/quill-editor';
import 'react-quill/dist/quill.snow.css';
import AvatarUploadSmall from 'src/components/application-ui/upload/avatar/avatar-upload-small';
import ProfileCoverUpload from 'src/components/application-ui/upload/profile-cover/profile-cover-upload';

const ProfileForm = () => {
  const [dateOfBirth, setDateOfBirth] = React.useState<Date | null>(null);

  const [selectedOptions, setSelectedOptions] = React.useState<string[]>(['Bob Smith']);

  const handleChangeManager = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value;
    // @ts-ignore
    setSelectedOptions(typeof value === 'string' ? value.split(',') : value);
  };

  const [cleared, setCleared] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <FormGroup>
      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
      >
        <Grid
          xs={12}
          md={4}
        >
          <FormLabel>
            <Typography
              variant="h5"
              color="text.primary"
              fontWeight={600}
              gutterBottom
            >
              Profile details
            </Typography>
            <Typography variant="subtitle1">Change some of the details of your profile</Typography>
          </FormLabel>
        </Grid>
        <Grid
          xs={12}
          md={8}
          container
          spacing={{ xs: 2, md: 3 }}
        >
          <Grid xs={12}>
            <FormControl
              fullWidth
              variant="outlined"
            >
              <Typography
                variant="h6"
                gutterBottom
                component="label"
                htmlFor="firstname-input"
                fontWeight={500}
              >
                Full name
              </Typography>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
              >
                <Grid
                  xs={12}
                  md={6}
                >
                  <OutlinedInput
                    id="firstname-input"
                    fullWidth
                    placeholder="First name"
                  />
                </Grid>
                <Grid
                  xs={12}
                  md={6}
                >
                  <OutlinedInput
                    fullWidth
                    id="lastname-input"
                    placeholder="Last name"
                  />
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
          <Grid xs={12}>
            <AvatarUploadSmall />
          </Grid>
          <Grid xs={12}>
            <FormControl
              margin="none"
              variant="outlined"
              fullWidth
            >
              <Typography
                variant="h6"
                gutterBottom
                component="label"
                htmlFor="email-input"
                fontWeight={500}
              >
                Email
              </Typography>
              <OutlinedInput
                type="email"
                id="email-input"
                placeholder="Write your email"
                startAdornment={
                  <InputAdornment position="start">
                    <MailOutlineRoundedIcon fontSize="small" />
                  </InputAdornment>
                }
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
                sx={{ mb: 1 }}
                component="label"
                htmlFor="date-of-birth-picker"
                fontWeight={500}
              >
                Date of birth
              </Typography>
              <DatePicker
                value={dateOfBirth}
                onChange={(newValue) => {
                  setDateOfBirth(newValue);
                }}
                slotProps={{
                  field: { clearable: true, onClear: () => setCleared(true) },
                }}
                sx={{
                  '& .MuiInputAdornment-positionEnd': {
                    pr: 0.5,
                  },
                }}
                //@ts-ignore
                renderInput={(params) => (
                  <OutlinedInput
                    {...params}
                    label=""
                    InputLabelProps={{
                      shrink: false,
                    }}
                  />
                )}
                maxDate={new Date()}
                openTo="year"
                views={['year', 'month', 'day']}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid xs={12}>
          <Divider />
        </Grid>
        <Grid
          xs={12}
          md={4}
        >
          <FormLabel>
            <Typography
              variant="h5"
              color="text.primary"
              fontWeight={600}
              gutterBottom
            >
              Noise suppression
            </Typography>
            <Typography variant="subtitle1">Choose Low if you want to hear music</Typography>
          </FormLabel>
        </Grid>
        <Grid
          xs={12}
          md={8}
          container
          spacing={{ xs: 2, md: 3 }}
        >
          <Grid xs={12}>
            <FormControl
              margin="none"
              variant="outlined"
              fullWidth
            >
              <Typography
                variant="h6"
                gutterBottom
                component="label"
                htmlFor="email-input"
                fontWeight={500}
              >
                Settings
              </Typography>
              <Card
                variant="outlined"
                elevation={0}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark'
                      ? alpha(theme.palette.neutral[25], 0.02)
                      : 'neutral.25',
                }}
              >
                <FormControlLabel
                  value="high"
                  sx={{
                    px: 2,
                    py: 1,
                    mr: 0,
                  }}
                  control={<Checkbox />}
                  label={
                    <Stack
                      pl={{ xs: 1, md: 0 }}
                      spacing={1}
                      alignItems={{ xs: 'flex-start', md: 'center' }}
                      direction={{ xs: 'column', md: 'row' }}
                    >
                      <Typography
                        variant="h6"
                        lineHeight={1}
                      >
                        High
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                      >
                        Maximizes noise filtering to eliminate background sound.
                      </Typography>
                    </Stack>
                  }
                  disableTypography
                />
                <Divider />
                <FormControlLabel
                  value="low"
                  sx={{ px: 2, py: 1, mr: 0 }}
                  control={<Checkbox />}
                  label={
                    <Stack
                      pl={{ xs: 1, md: 0 }}
                      spacing={1}
                      alignItems={{ xs: 'flex-start', md: 'center' }}
                      direction={{ xs: 'column', md: 'row' }}
                    >
                      <Typography
                        variant="h6"
                        lineHeight={1}
                      >
                        Balanced
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ pl: 1 }}
                        color="text.secondary"
                        noWrap
                      >
                        Reduces some noise while retaining natural ambient sounds.
                      </Typography>
                    </Stack>
                  }
                  disableTypography
                />
                <Divider />
                <FormControlLabel
                  sx={{ px: 2, py: 1, mr: 0 }}
                  value="off"
                  control={<Checkbox />}
                  label={
                    <Stack
                      pl={{ xs: 1, md: 0 }}
                      spacing={1}
                      alignItems={{ xs: 'flex-start', md: 'center' }}
                      direction={{ xs: 'column', md: 'row' }}
                    >
                      <Typography
                        variant="h6"
                        lineHeight={1}
                      >
                        Off
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ pl: 1 }}
                        color="text.secondary"
                        noWrap
                      >
                        Turns off noise filtering for a natural sound environment.
                      </Typography>
                    </Stack>
                  }
                  disableTypography
                />
              </Card>
            </FormControl>
          </Grid>
        </Grid>
        <Grid xs={12}>
          <Divider />
        </Grid>
        <Grid
          xs={12}
          md={4}
        >
          <FormLabel>
            <Typography
              variant="h5"
              color="text.primary"
              fontWeight={600}
              gutterBottom
            >
              Public profile
            </Typography>
            <Typography variant="subtitle1">
              Publicly available information can be added in this section
            </Typography>
          </FormLabel>
        </Grid>
        <Grid
          xs={12}
          md={8}
          container
          spacing={{ xs: 2, md: 3 }}
        >
          <Grid xs={12}>
            <FormControl fullWidth>
              <Typography
                variant="h6"
                sx={{ mb: 1 }}
                component="label"
                htmlFor="manager-select"
                fontWeight={500}
              >
                Manager
              </Typography>
              <Select
                value={selectedOptions}
                // @ts-ignore
                onChange={handleChangeManager}
                inputProps={{
                  name: 'manager',
                  id: 'manager-select',
                }}
                IconSelectManager={UnfoldMoreRoundedIcon}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      '& .MuiMenu-list': {
                        px: 0,

                        '& .MuiMenuItem-root': {
                          borderRadius: 0,
                          m: 0,
                          py: 1,
                        },
                      },
                    },
                  },
                }}
                renderValue={(selected) => selected.join(', ')}
              >
                {membersList.map((member) => (
                  <MenuItemPrimaryAccent
                    key={member.name}
                    value={member.name}
                  >
                    <ListItemAvatar sx={{ minWidth: 38 }}>
                      <AvatarState
                        useShadow
                        state="secondary"
                        src={member.avatar}
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
                      primary={member.name}
                      secondary={member.detail}
                      primaryTypographyProps={{
                        variant: 'subtitle2',
                        fontWeight: 500,
                        color: 'text.primary',
                      }}
                    />
                    {selectedOptions.includes(member.name) && <CheckRoundedIcon fontSize="small" />}
                  </MenuItemPrimaryAccent>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid xs={12}>
            <FormControl fullWidth>
              <Typography
                variant="h6"
                gutterBottom
                component="label"
                fontWeight={500}
              >
                Bio
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                >
                  Write a short description for this profile
                </Typography>
              </Typography>
              <Box>
                <QuillEditor
                  placeholder="Start writing..."
                  sx={{ minHeight: 180 }}
                />
              </Box>
            </FormControl>
          </Grid>

          <Grid xs={12}>
            <FormControl
              fullWidth
              variant="outlined"
            >
              <Typography
                variant="h6"
                gutterBottom
                component="label"
                fontWeight={500}
              >
                Cover photo
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                >
                  Select the cover profile photo
                </Typography>
              </Typography>
              <ProfileCoverUpload />
            </FormControl>
          </Grid>
        </Grid>
        <Grid xs={12}>
          <Divider />
        </Grid>
        <Grid xs={12}>
          <Stack
            direction="row"
            justifyContent="flex-end"
            spacing={1}
          >
            <Button color="secondary">Cancel</Button>
            <Button variant="contained">Save</Button>
          </Stack>
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default ProfileForm;
