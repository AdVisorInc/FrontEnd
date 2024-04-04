import CachedTwoToneIcon from '@mui/icons-material/CachedTwoTone';
import DnsTwoToneIcon from '@mui/icons-material/DnsTwoTone';
import MemoryTwoToneIcon from '@mui/icons-material/MemoryTwoTone';
import RouterTwoToneIcon from '@mui/icons-material/RouterTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import {
  Badge,
  Box,
  Button,
  Card,
  Chip,
  Divider,
  Unstable_Grid2 as Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Switch,
  Tooltip,
  Typography,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { InlineBadge } from 'src/components/base/styles/inline-badge';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';

function VirtualServers() {
  const { t } = useTranslation();

  const [state1, setState1] = useState({
    server: true,
  });

  const [state2, setState2] = useState({
    server: false,
  });

  const serverActivate1 = (event: ChangeEvent<HTMLInputElement>) => {
    setState1({
      ...state1,
      [event.target.name]: event.target.checked,
    });
  };

  const serverActivate2 = (event: ChangeEvent<HTMLInputElement>) => {
    setState2({
      ...state2,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          pb: 2,
        }}
      >
        {t('Virtual Servers')}
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
      >
        <Grid
          xs={12}
          md={6}
        >
          <Card>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={2}
            >
              <Typography
                variant="h5"
                lineHeight={1}
              >
                App Staging
              </Typography>
              <Chip
                variant="outlined"
                label={
                  <>
                    <InlineBadge>
                      <Badge
                        variant="dot"
                        color="success"
                      />
                      <Typography
                        variant="body2"
                        color="success.main"
                        fontWeight={500}
                        sx={{
                          pl: 1,
                          display: { xs: 'none', md: 'block' },
                        }}
                      >
                        {t('active')}
                      </Typography>
                    </InlineBadge>
                  </>
                }
                color="success"
              />
            </Box>
            <Box
              sx={{
                px: 2,
                pb: 2,
              }}
            >
              <List disablePadding>
                <Divider component="li" />
                <ListItem disableGutters>
                  <ListItemAvatar
                    sx={{
                      minWidth: 36,
                    }}
                  >
                    <RouterTwoToneIcon />
                  </ListItemAvatar>
                  <ListItemText primary={t('IP Address')} />
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                  >
                    192.168.1.4
                  </Typography>
                </ListItem>
                <Divider component="li" />
                <ListItem disableGutters>
                  <ListItemAvatar
                    sx={{
                      minWidth: 36,
                    }}
                  >
                    <DnsTwoToneIcon />
                  </ListItemAvatar>
                  <ListItemText primary={t('CPU')} />
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                  >
                    12 cores
                  </Typography>
                </ListItem>
                <Divider component="li" />
                <ListItem disableGutters>
                  <ListItemAvatar
                    sx={{
                      minWidth: 36,
                    }}
                  >
                    <MemoryTwoToneIcon />
                  </ListItemAvatar>
                  <ListItemText primary={t('RAM')} />
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                  >
                    32.568 MB
                  </Typography>
                </ListItem>
                <Divider component="li" />
              </List>
              <Box
                display="flex"
                alignItems="center"
                pt={2}
                justifyContent="space-between"
              >
                <Box>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                  >
                    {t('View details')}
                  </Button>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                >
                  <Tooltip
                    arrow
                    title={t('Share')}
                  >
                    <IconButton
                      sx={{
                        ml: 1,
                      }}
                      color="primary"
                    >
                      <ShareTwoToneIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    arrow
                    title={t('Refresh')}
                  >
                    <IconButton
                      sx={{
                        ml: 1,
                      }}
                      color="primary"
                    >
                      <CachedTwoToneIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Divider
                    sx={{
                      mx: 1,
                    }}
                    orientation="vertical"
                    flexItem
                  />
                  <Switch
                    checked={state1.server}
                    onChange={serverActivate1}
                    color="success"
                    name="server"
                  />
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
          <Card>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={2}
            >
              <Typography
                variant="h5"
                lineHeight={1}
              >
                Ubuntu Server
              </Typography>
              <Chip
                variant="outlined"
                label={
                  <>
                    <InlineBadge>
                      <PulseBadge
                        variant="dot"
                        color="error"
                      />
                      <Typography
                        variant="body2"
                        color="error.main"
                        fontWeight={500}
                        sx={{
                          pl: 1,
                        }}
                      >
                        {t('inactive')}
                      </Typography>
                    </InlineBadge>
                  </>
                }
                color="error"
              />
            </Box>
            <Box
              sx={{
                px: 2,
                pb: 2,
              }}
            >
              <List disablePadding>
                <Divider component="li" />
                <ListItem disableGutters>
                  <ListItemAvatar
                    sx={{
                      minWidth: 36,
                    }}
                  >
                    <RouterTwoToneIcon />
                  </ListItemAvatar>
                  <ListItemText primary={t('IP Address')} />
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                  >
                    185.155.188.53
                  </Typography>
                </ListItem>
                <Divider component="li" />
                <ListItem disableGutters>
                  <ListItemAvatar
                    sx={{
                      minWidth: 36,
                    }}
                  >
                    <DnsTwoToneIcon />
                  </ListItemAvatar>
                  <ListItemText primary={t('CPU')} />
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                  >
                    8 cores
                  </Typography>
                </ListItem>
                <Divider component="li" />
                <ListItem disableGutters>
                  <ListItemAvatar
                    sx={{
                      minWidth: 36,
                    }}
                  >
                    <MemoryTwoToneIcon />
                  </ListItemAvatar>
                  <ListItemText primary={t('RAM')} />
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                  >
                    16.586 MB
                  </Typography>
                </ListItem>
                <Divider component="li" />
              </List>
              <Box
                display="flex"
                alignItems="center"
                pt={2}
                justifyContent="space-between"
              >
                <Box>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                  >
                    {t('View details')}
                  </Button>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                >
                  <Tooltip
                    arrow
                    title={t('Share')}
                  >
                    <IconButton
                      sx={{
                        ml: 1,
                      }}
                      color="primary"
                    >
                      <ShareTwoToneIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    arrow
                    title={t('Refresh')}
                  >
                    <IconButton
                      sx={{
                        ml: 1,
                      }}
                      color="primary"
                    >
                      <CachedTwoToneIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Divider
                    sx={{
                      mx: 1,
                    }}
                    orientation="vertical"
                    flexItem
                  />
                  <Switch
                    checked={state2.server}
                    onChange={serverActivate2}
                    color="error"
                    name="server"
                  />
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default VirtualServers;
