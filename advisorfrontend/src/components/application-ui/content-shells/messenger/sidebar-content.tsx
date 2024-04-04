import AlarmTwoToneIcon from '@mui/icons-material/AlarmTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import {
  alpha,
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  Chip,
  Divider,
  FormControlLabel,
  IconButton,
  Link,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Switch,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from '@mui/material';
import { formatDistance, subHours, subMinutes } from 'date-fns';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SearchWithButton from 'src/components/application-ui/input/search/search-with-button';
import { AvatarState } from 'src/components/base/styles/avatar';

function SidebarContent() {
  const { t } = useTranslation();

  const [state, setState] = useState({
    invisible: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const [currentTab, setCurrentTab] = useState<string>('all');

  const tabs = [
    { value: 'all', label: t('All') },
    { value: 'unread', label: t('Unread') },
    { value: 'archived', label: t('Archived') },
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  const user = {
    avatar: '/avatars/1.png',
    name: 'Ethan Donovan',
    jobTitle: 'Principal Engineer',
  };

  return (
    <>
      <Stack
        p={2}
        spacing={2}
      >
        <Box
          display="flex"
          alignItems="flex-start"
        >
          <Avatar
            variant="rounded"
            sx={{
              width: 48,
              height: 48,
            }}
            alt={user.name}
            src={user.avatar}
          />
          <Box
            sx={{
              ml: 1.5,
              flex: 1,
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={1}
            >
              <Box>
                <Typography
                  variant="h5"
                  noWrap
                  gutterBottom
                >
                  {user.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  noWrap
                  lineHeight={1}
                >
                  {user.jobTitle}
                </Typography>
              </Box>
              <IconButton color="primary">
                <SettingsTwoToneIcon fontSize="small" />
              </IconButton>
            </Box>

            <FormControlLabel
              sx={{ ml: -0.5 }}
              control={
                <Switch
                  checked={state.invisible}
                  onChange={handleChange}
                  name="invisible"
                  color="primary"
                />
              }
              label={t('Invisible')}
            />
          </Box>
        </Box>

        <SearchWithButton />
      </Stack>
      <Stack>
        <Typography
          sx={{ px: 2 }}
          variant="h3"
        >
          {t('Chats')}
        </Typography>
        <Tabs
          onChange={handleTabsChange}
          value={currentTab}
          sx={{
            px: 2,
            '& .MuiTab-root': {
              fontSize: 16,
              fontWeight: 600,
              mx: 1,

              '&:first-of-type': {
                ml: 0,
              },
              '&:last-of-type': {
                mr: 0,
              },
            },
          }}
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.value}
              label={tab.label}
              value={tab.value}
            />
          ))}
        </Tabs>
        <Divider />

        <Box>
          {currentTab === 'all' && (
            <List
              disablePadding
              component="div"
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar src="/avatars/1.png" />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    mr: 1,
                  }}
                  primaryTypographyProps={{
                    color: 'text.primary',
                    variant: 'h5',
                    noWrap: true,
                  }}
                  secondaryTypographyProps={{
                    color: 'textSecondary',
                    noWrap: true,
                  }}
                  primary="Zain Baptista"
                  secondary="Hey there, how are you today? Is it ok if I call you?"
                />
                <Chip
                  size="small"
                  variant="outlined"
                  label={2}
                  color="primary"
                />
              </ListItemButton>
              <Divider
                variant="inset"
                component="li"
              />
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar src="/avatars/2.png" />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    mr: 1,
                  }}
                  primaryTypographyProps={{
                    color: 'text.primary',
                    variant: 'h5',
                    noWrap: true,
                  }}
                  secondaryTypographyProps={{
                    color: 'textSecondary',
                    noWrap: true,
                  }}
                  primary="Kierra Herwitz"
                  secondary="Hi! Did you manage to send me those documents"
                />
              </ListItemButton>
              <Divider
                variant="inset"
                component="li"
              />
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar src="/avatars/3.png" />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    mr: 1,
                  }}
                  primaryTypographyProps={{
                    color: 'text.primary',
                    variant: 'h5',
                    noWrap: true,
                  }}
                  secondaryTypographyProps={{
                    color: 'textSecondary',
                    noWrap: true,
                  }}
                  primary="Craig Vaccaro"
                  secondary="Ola, I still haven't received the program schedule"
                />
              </ListItemButton>
              <Divider
                variant="inset"
                component="li"
              />
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar src="/avatars/4.png" />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    mr: 1,
                  }}
                  primaryTypographyProps={{
                    color: 'text.primary',
                    variant: 'h5',
                    noWrap: true,
                  }}
                  secondaryTypographyProps={{
                    color: 'textSecondary',
                    noWrap: true,
                  }}
                  primary="Adison Press"
                  secondary="I recently did some buying on Amazon and now I'm stuck"
                />
                <Chip
                  size="small"
                  variant="outlined"
                  label={8}
                  color="primary"
                />
              </ListItemButton>
            </List>
          )}
          {currentTab === 'unread' && (
            <List
              disablePadding
              component="div"
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar src="/avatars/1.png" />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    mr: 1,
                  }}
                  primaryTypographyProps={{
                    color: 'text.primary',
                    variant: 'h5',
                    noWrap: true,
                  }}
                  secondaryTypographyProps={{
                    color: 'textSecondary',
                    noWrap: true,
                  }}
                  primary="Zain Baptista"
                  secondary="Hey there, how are you today? Is it ok if I call you?"
                />
                <Chip
                  size="small"
                  variant="outlined"
                  label={2}
                  color="primary"
                />
              </ListItemButton>
              <Divider
                variant="inset"
                component="li"
              />
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar src="/avatars/4.png" />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    mr: 1,
                  }}
                  primaryTypographyProps={{
                    color: 'text.primary',
                    variant: 'h5',
                    noWrap: true,
                  }}
                  secondaryTypographyProps={{
                    color: 'textSecondary',
                    noWrap: true,
                  }}
                  primary="Adison Press"
                  secondary="I recently did some buying on Amazon and now I'm stuck"
                />
                <Chip
                  size="small"
                  variant="outlined"
                  label={6}
                  color="primary"
                />
              </ListItemButton>
            </List>
          )}
          {currentTab === 'archived' && (
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              py={3}
            >
              <AvatarState
                isSoft
                state="success"
                sx={{ mb: 1 }}
              >
                <CheckTwoToneIcon />
              </AvatarState>
              <Typography
                color="text.secondary"
                variant="subtitle2"
              >
                {t('Hurray! There are no archived chats!')}
              </Typography>
            </Box>
          )}
        </Box>
      </Stack>
      <Divider />
      <Stack
        p={2}
        spacing={2}
      >
        <Box
          display="flex"
          alignItems="center"
        >
          <Typography
            sx={{
              mr: 1,
            }}
            variant="h3"
          >
            {t('Meetings')}
          </Typography>
          <Chip
            variant="outlined"
            size="small"
            label={3}
            color="success"
          />
        </Box>
        <Card
          variant="outlined"
          sx={{
            p: 2,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[50], 0.02) : 'neutral.50',
          }}
        >
          <Typography variant="h5">{t('Daily Design Meeting')}</Typography>

          <Box
            py={2}
            display="flex"
            alignItems="flex-start"
          >
            <AlarmTwoToneIcon />
            <Box pl={1}>
              <Typography
                variant="subtitle2"
                color="text.primary"
              >
                10:00 - 11:30
              </Typography>
              <Typography variant="subtitle1">
                {formatDistance(subMinutes(new Date(), 12), new Date(), {
                  addSuffix: true,
                })}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <AvatarGroup>
              <Tooltip
                arrow
                title={`${t('View profile for')} Remy Sharp`}
              >
                <Avatar
                  sx={{
                    width: 28,
                    height: 28,
                  }}
                  component={Link}
                  href=""
                  onClick={(e) => e.preventDefault()}
                  alt="Remy Sharp"
                  src="/avatars/1.png"
                />
              </Tooltip>
              <Tooltip
                arrow
                title={`${t('View profile for')} Travis Howard`}
              >
                <Avatar
                  sx={{
                    width: 28,
                    height: 28,
                  }}
                  component={Link}
                  href=""
                  onClick={(e) => e.preventDefault()}
                  alt="Travis Howard"
                  src="/avatars/2.png"
                />
              </Tooltip>
              <Tooltip
                arrow
                title={t('View profile for') + ' Craig Vaccaro'}
              >
                <Avatar
                  sx={{
                    width: 28,
                    height: 28,
                  }}
                  component={Link}
                  href=""
                  onClick={(e) => e.preventDefault()}
                  alt="Craig Vaccaro"
                  src="/avatars/3.png"
                />
              </Tooltip>
            </AvatarGroup>

            <Button
              variant="contained"
              size="small"
            >
              {t('Attend')}
            </Button>
          </Box>
        </Card>
        <Card
          variant="outlined"
          sx={{
            p: 2,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[50], 0.02) : 'neutral.50',
          }}
        >
          <Typography variant="h5">{t('Investors Council Meeting')}</Typography>

          <Box
            py={2}
            display="flex"
            alignItems="flex-start"
          >
            <AlarmTwoToneIcon />
            <Box pl={1}>
              <Typography
                variant="subtitle2"
                color="text.primary"
              >
                14:30 - 16:15
              </Typography>
              <Typography variant="subtitle1">
                {formatDistance(subHours(new Date(), 4), new Date(), {
                  addSuffix: true,
                })}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <AvatarGroup>
              <Tooltip
                arrow
                title={`${t('View profile for')} Travis Howard`}
              >
                <Avatar
                  sx={{
                    width: 28,
                    height: 28,
                  }}
                  component={Link}
                  href=""
                  onClick={(e) => e.preventDefault()}
                  alt="Travis Howard"
                  src="/avatars/4.png"
                />
              </Tooltip>
              <Tooltip
                arrow
                title={t('View profile for') + ' Craig Vaccaro'}
              >
                <Avatar
                  sx={{
                    width: 28,
                    height: 28,
                  }}
                  component={Link}
                  href=""
                  onClick={(e) => e.preventDefault()}
                  alt="Craig Vaccaro"
                  src="/avatars/5.png"
                />
              </Tooltip>
            </AvatarGroup>

            <Button
              variant="contained"
              size="small"
            >
              {t('Attend')}
            </Button>
          </Box>
        </Card>
      </Stack>
    </>
  );
}

export default SidebarContent;
