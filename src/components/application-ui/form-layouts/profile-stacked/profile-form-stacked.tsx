import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Unstable_Grid2 as Grid,
  InputAdornment,
  ListItemAvatar,
  ListItemText,
  OutlinedInput,
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

const ProfileFormStacked = () => {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>(['Bob Smith']);

  const handleChangeManager = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value;
    // @ts-ignore
    setSelectedOptions(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
    >
      <Grid xs={12}>
        <FormControl
          fullWidth
          size="small"
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
                size="small"
                placeholder="First name"
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <OutlinedInput
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
        <FormControl
          margin="none"
          variant="outlined"
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
                {selectedOptions.includes(member.name) && <CheckRoundedIcon fontSize="small" />}
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
        <AvatarUploadSmall />
      </Grid>
      <Grid xs={12}>
        <FormControl
          fullWidth
          size="small"
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
      <Grid xs={12}>
        <FormControl
          margin="none"
          variant="outlined"
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
            Noise suppression
            <Typography
              variant="subtitle2"
              color="text.secondary"
            >
              Choose Low if you want others to hear music
            </Typography>
          </Typography>
          <FormControlLabel
            value="high"
            sx={{ py: 1, mr: 0 }}
            control={<Checkbox />}
            label={
              <>
                <Typography
                  variant="h6"
                  lineHeight={1}
                >
                  High
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ pl: 1 }}
                  color="text.secondary"
                  noWrap
                >
                  Maximizes noise filtering to eliminate background sound.
                </Typography>
              </>
            }
            disableTypography
          />
          <Divider />
          <FormControlLabel
            value="low"
            sx={{ py: 1, mr: 0 }}
            control={<Checkbox />}
            label={
              <>
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
              </>
            }
            disableTypography
          />
          <Divider />
          <FormControlLabel
            sx={{ py: 1, mr: 0 }}
            value="off"
            control={<Checkbox />}
            label={
              <>
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
              </>
            }
            disableTypography
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default ProfileFormStacked;
