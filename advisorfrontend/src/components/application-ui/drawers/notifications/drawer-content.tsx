import AddToDriveRoundedIcon from '@mui/icons-material/AddToDriveRounded';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FolderZipOutlinedIcon from '@mui/icons-material/FolderZipOutlined';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import {
  alpha,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  DialogContent,
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { formatDistance, subHours, subMinutes } from 'date-fns';
import { t } from 'i18next';
import TimelineOnboarding from 'src/components/application-ui/timelines/onboarding/onboarding';
import { Scrollbar } from 'src/components/base/scrollbar';
import { AvatarState } from 'src/components/base/styles/avatar';
import { ButtonSoft } from 'src/components/base/styles/button-soft';
import { InlineBadge } from 'src/components/base/styles/inline-badge';
import { LinearProgressSlim } from 'src/components/base/styles/progress-bar';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';
import { RingBadge } from 'src/components/base/styles/ring-badge';

const Component = () => {
  return (
    <Scrollbar>
      <DialogContent sx={{ p: 0 }}>
        <Stack divider={<Divider />}>
          <ListItemButton>
            <IconButton
              color="primary"
              sx={{
                p: 0.2,
                position: 'absolute',
                right: (theme) => theme.spacing(1),
                top: (theme) => theme.spacing(1),
              }}
              size="small"
            >
              <CloseRoundedIcon fontSize="inherit" />
            </IconButton>
            <Box
              sx={{
                pl: 0,
                pr: 1,
                py: 1,
                display: 'flex',
                transition: 'none',
                alignItems: 'flex-start',
                '&:hover': {
                  backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.01),
                },
              }}
            >
              <PulseBadge
                color="success"
                variant="dot"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent=" "
                overlap="circular"
              >
                <Avatar
                  sx={{
                    width: 38,
                    height: 38,
                  }}
                  src="/avatars/1.png"
                />
              </PulseBadge>
              <Box
                ml={1.5}
                flex={1}
                overflow="hidden"
              >
                <Typography
                  pb={0.3}
                  pr={1}
                >
                  <Link
                    href=""
                    onClick={(e) => e.preventDefault()}
                    variant="subtitle2"
                    fontWeight={600}
                    color="text.primary"
                    underline="hover"
                  >
                    John Martinez
                  </Link>{' '}
                  sent you a friend request
                </Typography>
                <Stack
                  flexWrap="wrap"
                  gap={{ xs: 0.5, sm: 1 }}
                  direction="row"
                  alignItems="center"
                  divider={
                    <Box
                      display="inline-flex"
                      sx={{
                        width: 4,
                        height: 4,
                        borderRadius: 12,
                        backgroundColor: 'text.disabled',
                      }}
                    />
                  }
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    noWrap
                  >
                    {formatDistance(subMinutes(new Date(), 34), new Date(), {
                      addSuffix: true,
                    })}
                  </Typography>
                  <Link
                    variant="body2"
                    underline="hover"
                    color="primary"
                    fontWeight={600}
                    fontSize={12}
                  >
                    Requests
                  </Link>
                </Stack>
                <Stack
                  mt={1.5}
                  mb={0.5}
                  spacing={1}
                  direction="row"
                >
                  <Button
                    variant="contained"
                    size="small"
                  >
                    Accept
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                  >
                    Decline
                  </Button>
                </Stack>
              </Box>
            </Box>
          </ListItemButton>
          <ListItemButton>
            <InlineBadge
              sx={{
                p: 0.2,
                position: 'absolute',
                right: (theme) => theme.spacing(1.5),
                top: (theme) => theme.spacing(1.5),
              }}
            >
              <RingBadge
                badgeContent="43"
                color="success"
                variant="dot"
              />
            </InlineBadge>
            <Box
              sx={{
                pl: 0,
                pr: 1,
                py: 1,
                display: 'flex',
                transition: 'none',
                alignItems: 'flex-start',
                '&:hover': {
                  backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.01),
                },
              }}
            >
              <Badge
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                  <AvatarState
                    useShadow
                    state="secondary"
                    sx={{
                      width: 24,
                      color: 'common.white',
                      background: 'linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)',
                      height: 24,
                    }}
                  >
                    <PostAddRoundedIcon fontSize="inherit" />
                  </AvatarState>
                }
                overlap="circular"
              >
                <Avatar
                  sx={{
                    width: 38,
                    height: 38,
                  }}
                  src="/avatars/2.png"
                />
              </Badge>
              <Box
                ml={1.5}
                flex={1}
                overflow="hidden"
              >
                <Typography
                  pb={0.3}
                  pr={1}
                >
                  <Link
                    href=""
                    onClick={(e) => e.preventDefault()}
                    variant="subtitle2"
                    fontWeight={600}
                    color="text.primary"
                    underline="hover"
                  >
                    Charlie Brown
                  </Link>{' '}
                  commented on your post
                </Typography>
                <Stack
                  flexWrap="wrap"
                  gap={{ xs: 0.5, sm: 1 }}
                  direction="row"
                  alignItems="center"
                  divider={
                    <Box
                      display="inline-flex"
                      sx={{
                        width: 4,
                        height: 4,
                        borderRadius: 12,
                        backgroundColor: 'text.disabled',
                      }}
                    />
                  }
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    noWrap
                  >
                    {formatDistance(subMinutes(new Date(), 87), new Date(), {
                      addSuffix: true,
                    })}
                  </Typography>
                  <Link
                    variant="body2"
                    underline="hover"
                    color="primary"
                    fontWeight={600}
                    fontSize={12}
                  >
                    Blog
                  </Link>
                </Stack>
                <Card
                  sx={{
                    mt: 1.5,
                    px: 1.5,
                    py: 1,
                  }}
                  variant="outlined"
                  elevation={0}
                >
                  <Typography variant="body2">
                    <Typography
                      variant="body2"
                      component="span"
                      fontWeight={500}
                    >
                      @jacob_amazon
                    </Typography>{' '}
                    I'm in the same boat as you. I'm tring to find a good solution for this right
                    now.
                  </Typography>
                </Card>
                <Stack
                  mt={1.5}
                  mb={0.5}
                  spacing={1}
                  direction="row"
                >
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                  >
                    View post
                  </Button>
                </Stack>
              </Box>
            </Box>
          </ListItemButton>
          <ListItemButton>
            <Box
              sx={{
                pl: 0,
                pr: 1,
                py: 1,
                display: 'flex',
                transition: 'none',
                alignItems: 'flex-start',
                '&:hover': {
                  backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.01),
                },
              }}
            >
              <Badge
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                  <AvatarState
                    useShadow
                    state="secondary"
                    sx={{
                      width: 24,
                      color: 'common.white',
                      background: 'linear-gradient(60deg, #29323c 0%, #485563 100%) !important',
                      height: 24,
                    }}
                  >
                    <PeopleRoundedIcon fontSize="inherit" />
                  </AvatarState>
                }
                overlap="circular"
              >
                <Avatar
                  sx={{
                    width: 38,
                    height: 38,
                  }}
                  src="/avatars/3.png"
                />
              </Badge>
              <Box
                ml={1.5}
                flex={1}
                overflow="hidden"
              >
                <Typography
                  pb={0.3}
                  pr={1}
                >
                  <Link
                    href=""
                    onClick={(e) => e.preventDefault()}
                    variant="subtitle2"
                    fontWeight={600}
                    color="text.primary"
                    underline="hover"
                  >
                    Clark Kent
                  </Link>{' '}
                  updated his profile, changed his picture and profile cover photo
                </Typography>
                <Stack
                  flexWrap="wrap"
                  gap={{ xs: 0.5, sm: 1 }}
                  direction="row"
                  alignItems="center"
                  divider={
                    <Box
                      display="inline-flex"
                      sx={{
                        width: 4,
                        height: 4,
                        borderRadius: 12,
                        backgroundColor: 'text.disabled',
                      }}
                    />
                  }
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    noWrap
                  >
                    {formatDistance(subMinutes(new Date(), 2), new Date(), {
                      addSuffix: true,
                    })}
                  </Typography>
                  <Link
                    variant="body2"
                    underline="hover"
                    color="primary"
                    fontWeight={600}
                    fontSize={12}
                  >
                    Social
                  </Link>
                </Stack>
              </Box>
            </Box>
          </ListItemButton>
          <ListItemButton>
            <Box
              sx={{
                pl: 0,
                pr: 1,
                py: 1,
                display: 'flex',
                transition: 'none',
                alignItems: 'flex-start',
                '&:hover': {
                  backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.01),
                },
              }}
            >
              <Badge
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                badgeContent={
                  <InlineBadge>
                    <Badge
                      badgeContent="43"
                      color="error"
                      variant="dot"
                    />
                  </InlineBadge>
                }
                overlap="circular"
              >
                <AvatarState
                  isSoft
                  state="error"
                  sx={{
                    width: 38,
                    height: 38,
                  }}
                >
                  <AddToDriveRoundedIcon fontSize="small" />
                </AvatarState>
              </Badge>
              <Box
                ml={1.5}
                flex={1}
                overflow="hidden"
              >
                <Typography
                  pb={0.3}
                  pr={1}
                >
                  <Link
                    href=""
                    onClick={(e) => e.preventDefault()}
                    variant="subtitle2"
                    fontWeight={600}
                    color="text.primary"
                    underline="hover"
                  >
                    Steve Rogers
                  </Link>{' '}
                  uploaded new files to the{' '}
                  <Link
                    href=""
                    onClick={(e) => e.preventDefault()}
                    variant="subtitle2"
                    fontWeight={600}
                    color="text.primary"
                    underline="hover"
                  >
                    Avengers
                  </Link>
                </Typography>
                <Stack
                  flexWrap="wrap"
                  gap={{ xs: 0.5, sm: 1 }}
                  direction="row"
                  alignItems="center"
                  divider={
                    <Box
                      display="inline-flex"
                      sx={{
                        width: 4,
                        height: 4,
                        borderRadius: 12,
                        backgroundColor: 'text.disabled',
                      }}
                    />
                  }
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    noWrap
                  >
                    {formatDistance(subMinutes(new Date(), 657), new Date(), {
                      addSuffix: true,
                    })}
                  </Typography>
                  <Link
                    variant="body2"
                    underline="hover"
                    color="primary"
                    fontWeight={600}
                    fontSize={12}
                  >
                    Files
                  </Link>
                  <Link
                    variant="body2"
                    underline="hover"
                    color="primary"
                    fontWeight={600}
                    fontSize={12}
                  >
                    Uploads
                  </Link>
                </Stack>
                <Card
                  sx={{
                    mt: 1.5,
                  }}
                  variant="outlined"
                  elevation={0}
                >
                  <List disablePadding>
                    <ListItem
                      sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { xs: 'flex-start', md: 'center' },
                      }}
                    >
                      <ListItemAvatar
                        sx={{
                          display: 'flex',
                          alignSelf: 'flex-start',
                          minWidth: 38,
                          color: 'info.main',
                        }}
                      >
                        <ArticleOutlinedIcon />
                      </ListItemAvatar>
                      <ListItemText
                        sx={{ my: { xs: 0.8, md: 0 } }}
                        primary="feb2024_reports.xls"
                        secondaryTypographyProps={{
                          variant: 'body2',
                          color: 'text.secondary',
                        }}
                        primaryTypographyProps={{
                          fontWeight: 600,
                          variant: 'body1',
                        }}
                        secondary="2.3MB"
                      />
                      <ButtonSoft
                        sx={{
                          mb: { xs: 0.5, md: 0 },
                        }}
                        size="small"
                      >
                        {t('Download')}
                      </ButtonSoft>
                    </ListItem>
                    <Divider />
                    <ListItem
                      sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { xs: 'flex-start', md: 'center' },
                      }}
                    >
                      <ListItemAvatar
                        sx={{
                          display: 'flex',
                          alignSelf: 'flex-start',
                          minWidth: 38,
                          color: 'warning.main',
                        }}
                      >
                        <FolderZipOutlinedIcon />
                      </ListItemAvatar>
                      <ListItemText
                        sx={{ my: { xs: 0.8, md: 0 } }}
                        primary="PhotosArchive.zip"
                        secondaryTypographyProps={{
                          variant: 'body2',
                          color: 'text.secondary',
                        }}
                        primaryTypographyProps={{
                          fontWeight: 600,
                          variant: 'body1',
                        }}
                        secondary="54.32MB"
                      />
                      <ButtonSoft
                        sx={{
                          mb: { xs: 0.5, md: 0 },
                        }}
                        size="small"
                      >
                        {t('Download')}
                      </ButtonSoft>
                    </ListItem>
                  </List>
                </Card>
                <Stack
                  mt={1.5}
                  mb={0.5}
                  spacing={1}
                  direction="row"
                >
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                  >
                    View all
                  </Button>
                </Stack>
              </Box>
            </Box>
          </ListItemButton>
          <ListItemButton>
            <IconButton
              color="secondary"
              sx={{
                p: 0.2,
                position: 'absolute',
                right: (theme) => theme.spacing(1),
                top: (theme) => theme.spacing(1),
              }}
              size="small"
            >
              <CloseRoundedIcon fontSize="inherit" />
            </IconButton>
            <Box
              sx={{
                pl: 0,
                pr: 1,
                py: 1,
                display: 'flex',
                transition: 'none',
                alignItems: 'flex-start',
                '&:hover': {
                  backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.01),
                },
              }}
            >
              <RingBadge
                color="warning"
                variant="dot"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent=" "
                overlap="circular"
              >
                <Avatar
                  sx={{
                    width: 38,
                    height: 38,
                  }}
                  src="/avatars/1.png"
                />
              </RingBadge>
              <Box
                ml={1.5}
                flex={1}
                overflow="hidden"
              >
                <Typography
                  pb={0.3}
                  pr={1}
                >
                  <Link
                    href=""
                    onClick={(e) => e.preventDefault()}
                    variant="subtitle2"
                    fontWeight={600}
                    color="text.primary"
                    underline="hover"
                  >
                    Nick Fury
                  </Link>{' '}
                  almost completed the full onboarding process
                </Typography>
                <Box pb={1}>
                  <LinearProgressSlim
                    variant="determinate"
                    value={72}
                  />
                </Box>
                <Stack
                  flexWrap="wrap"
                  gap={{ xs: 0.5, sm: 1 }}
                  direction="row"
                  alignItems="center"
                  divider={
                    <Box
                      display="inline-flex"
                      sx={{
                        width: 4,
                        height: 4,
                        borderRadius: 12,
                        backgroundColor: 'text.disabled',
                      }}
                    />
                  }
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    noWrap
                  >
                    {formatDistance(subHours(new Date(), 52), new Date(), {
                      addSuffix: true,
                    })}
                  </Typography>
                  <Link
                    variant="body2"
                    underline="hover"
                    color="primary"
                    fontWeight={600}
                    fontSize={12}
                  >
                    Onboarding
                  </Link>
                </Stack>
                <Stack
                  mt={1.5}
                  spacing={1}
                  direction="row"
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                  >
                    Chat
                  </Button>
                </Stack>
                <Card
                  sx={{
                    mt: 1.5,
                    px: 1.5,
                    py: 1,
                  }}
                  variant="outlined"
                  elevation={0}
                >
                  <TimelineOnboarding />
                </Card>
              </Box>
            </Box>
          </ListItemButton>
        </Stack>
      </DialogContent>
    </Scrollbar>
  );
};

export default Component;
