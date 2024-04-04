import DraftsTwoToneIcon from '@mui/icons-material/DraftsTwoTone';
import EngineeringTwoToneIcon from '@mui/icons-material/EngineeringTwoTone';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import ReviewsTwoToneIcon from '@mui/icons-material/ReviewsTwoTone';
import {
  Box,
  Card,
  Unstable_Grid2 as Grid,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

function Component() {
  const { t } = useTranslation();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        md={6}
        xl={3}
      >
        <Card>
          <Box p={{ xs: 2, sm: 3 }}>
            <Typography variant="h5">{t('Positive Reviews')}</Typography>
            <ListItem
              disableGutters
              sx={{
                mt: 2,
                mb: 1,
              }}
              component="div"
            >
              <ListItemAvatar>
                <AvatarState
                  useShadow
                  state="primary"
                  sx={{
                    width: 80,
                    height: 80,
                  }}
                  variant="rounded"
                >
                  <ReviewsTwoToneIcon fontSize="large" />
                </AvatarState>
              </ListItemAvatar>
              <ListItemText
                primary="98.54%"
                primaryTypographyProps={{
                  variant: 'h1',
                  fontWeight: 600,
                  sx: {
                    ml: 2,
                  },
                }}
              />
            </ListItem>
            <ListItem
              disableGutters
              sx={{
                mt: 0.5,
                pb: 0,
              }}
              component="div"
            >
              <ListItemText
                primary={
                  <>
                    <Link
                      fontWeight={500}
                      href=""
                      onClick={(e) => e.preventDefault()}
                      underline="hover"
                    >
                      {t('See reviews')}
                    </Link>
                    <Box
                      component="span"
                      sx={{
                        pl: 0.5,
                      }}
                    >
                      {t('that were left by past customers from USA')}.
                    </Box>
                  </>
                }
                primaryTypographyProps={{ variant: 'subtitle2', color: 'text.secondary' }}
              />
            </ListItem>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        xl={3}
      >
        <Card>
          <Box p={{ xs: 2, sm: 3 }}>
            <Typography variant="h5">{t('Bounce Rate')}</Typography>
            <ListItem
              disableGutters
              sx={{
                mt: 2,
                mb: 1,
              }}
              component="div"
            >
              <ListItemAvatar>
                <AvatarState
                  useShadow
                  state="warning"
                  sx={{
                    width: 80,
                    height: 80,
                  }}
                  variant="rounded"
                >
                  <PublicTwoToneIcon fontSize="large" />
                </AvatarState>
              </ListItemAvatar>
              <ListItemText
                primary="32.87%"
                primaryTypographyProps={{
                  fontWeight: 600,
                  variant: 'h1',
                  sx: {
                    ml: 2,
                  },
                }}
              />
            </ListItem>
            <ListItem
              disableGutters
              sx={{
                mt: 0.5,
                pb: 0,
              }}
              component="div"
            >
              <ListItemText
                primary={
                  <>
                    <Link
                      fontWeight={500}
                      href=""
                      onClick={(e) => e.preventDefault()}
                      underline="hover"
                    >
                      {t('See visits')}
                    </Link>
                    <Box
                      component="span"
                      sx={{
                        pl: 0.5,
                      }}
                    >
                      {t('that had a higher than expected bounce rate')}.
                    </Box>
                  </>
                }
                primaryTypographyProps={{ variant: 'subtitle2', color: 'text.secondary' }}
              />
            </ListItem>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        xl={3}
      >
        <Card>
          <Box p={{ xs: 2, sm: 3 }}>
            <Typography variant="h5">{t('Active Referrals')}</Typography>
            <ListItem
              disableGutters
              sx={{
                mt: 2,
                mb: 1,
              }}
              component="div"
            >
              <ListItemAvatar>
                <AvatarState
                  useShadow
                  state="error"
                  sx={{
                    width: 80,
                    height: 80,
                  }}
                  variant="rounded"
                >
                  <EngineeringTwoToneIcon fontSize="large" />
                </AvatarState>
              </ListItemAvatar>
              <ListItemText
                primary="194"
                primaryTypographyProps={{
                  variant: 'h1',
                  fontWeight: 600,
                  sx: {
                    ml: 2,
                  },
                }}
              />
            </ListItem>
            <ListItem
              disableGutters
              sx={{
                mt: 0.5,
                pb: 0,
              }}
              component="div"
            >
              <ListItemText
                primary={
                  <>
                    <Link
                      fontWeight={500}
                      href=""
                      onClick={(e) => e.preventDefault()}
                      underline="hover"
                    >
                      {t('See referring')}
                    </Link>
                    <Box
                      component="span"
                      sx={{
                        pl: 0.5,
                      }}
                    >
                      {t('domains that sent most visits last month')}.
                    </Box>
                  </>
                }
                primaryTypographyProps={{ variant: 'subtitle2', color: 'text.secondary' }}
              />
            </ListItem>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        xl={3}
      >
        <Card>
          <Box p={{ xs: 2, sm: 3 }}>
            <Typography variant="h5">{t('Opened Invites')}</Typography>
            <ListItem
              disableGutters
              sx={{
                mt: 2,
                mb: 1,
              }}
              component="div"
            >
              <ListItemAvatar>
                <AvatarState
                  useShadow
                  state="success"
                  sx={{
                    width: 80,
                    height: 80,
                  }}
                  variant="rounded"
                >
                  <DraftsTwoToneIcon fontSize="large" />
                </AvatarState>
              </ListItemAvatar>
              <ListItemText
                primary="29.93%"
                primaryTypographyProps={{
                  fontWeight: 600,
                  variant: 'h1',
                  sx: {
                    ml: 2,
                  },
                }}
              />
            </ListItem>
            <ListItem
              disableGutters
              sx={{
                mt: 0.5,
                pb: 0,
              }}
              component="div"
            >
              <ListItemText
                primary={
                  <>
                    <Link
                      fontWeight={500}
                      href=""
                      onClick={(e) => e.preventDefault()}
                      underline="hover"
                    >
                      {t('See clients')}
                    </Link>
                    <Box
                      component="span"
                      sx={{
                        pl: 0.5,
                      }}
                    >
                      {t('that accepted your invitation to connect')}.
                    </Box>
                  </>
                }
                primaryTypographyProps={{ variant: 'subtitle2', color: 'text.secondary' }}
              />
            </ListItem>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
