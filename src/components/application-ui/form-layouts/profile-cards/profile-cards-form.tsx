import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Unstable_Grid2 as Grid,
  InputAdornment,
  ListItemAvatar,
  ListItemText,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { membersList } from 'src/components/application-ui/select/indicator-description/data';
import { AvatarState } from 'src/components/base/styles/avatar';
import { MenuItemPrimaryAccent } from 'src/components/base/styles/menu-item';
import { QuillEditor } from 'src/components/base/styles/quill-editor';
import 'react-quill/dist/quill.snow.css';
import AvatarUploadSmall from 'src/components/application-ui/upload/avatar/avatar-upload-small';
import ProfileCoverUpload from 'src/components/application-ui/upload/profile-cover/profile-cover-upload';

const ProfileCardsForm = () => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>(['Bob Smith']);

  const handleChangeManager = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value;
    // @ts-ignore
    setSelectedOptions(typeof value === 'string' ? value.split(',') : value);
  };

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
        >
          <Card elevation={7}>
            <CardContent>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
              >
                <Grid xs={12}>
                  <FormControl
                    fullWidth
                    size="small"
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
                        <FilledInput
                          hiddenLabel
                          id="firstname-input"
                          fullWidth
                          size="small"
                          placeholder="First name"
                        />
                      </Grid>
                      <Grid
                        xs={12}
                        md={6}
                      >
                        <FilledInput
                          hiddenLabel
                          fullWidth
                          size="small"
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
                    fullWidth
                    size="small"
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
                    <FilledInput
                      hiddenLabel
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
              </Grid>
            </CardContent>
          </Card>
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
        >
          <Card elevation={7}>
            <CardContent>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
              >
                <Grid xs={12}>
                  <FormControl
                    fullWidth
                    size="small"
                  >
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
                      {membersList.map((member, index) => (
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
                          {selectedOptions.includes(member.name) && (
                            <CheckRoundedIcon fontSize="small" />
                          )}
                        </MenuItemPrimaryAccent>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid xs={12}>
                  <FormControl
                    fullWidth
                    size="small"
                  >
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
                    size="small"
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
            </CardContent>
          </Card>
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
            <Card elevation={7}>
              <CardHeader
                title="Settings"
                titleTypographyProps={{ variant: 'h6' }}
              />
              <Divider />
              <FormControl
                margin="none"
                fullWidth
                size="small"
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
              </FormControl>
            </Card>
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

export default ProfileCardsForm;
