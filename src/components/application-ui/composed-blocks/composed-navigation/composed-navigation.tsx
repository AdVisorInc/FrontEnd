import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import PublicTwoToneIcon from '@mui/icons-material/PublicTwoTone';
import ReviewsTwoToneIcon from '@mui/icons-material/ReviewsTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Card,
  Unstable_Grid2 as Grid,
  IconButton,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import VerticalMenuIndicatorPrimary from 'src/components/application-ui/vertical-menus/indicator/menu-indicator-primary';
import { AvatarState } from 'src/components/base/styles/avatar';

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1),
  top: theme.spacing(1),
  zIndex: 12,
}));

const BoxComposedContent = styled(Box)(() => ({
  position: 'relative',
  zIndex: 7,
}));

const BoxComposedImage = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 5,
  filter: 'grayscale(80%)',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
}));

const BoxComposedBg = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 6,
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
}));

const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
  background: 'transparent',
  transition: theme.transitions.create(['all']),
  color: alpha(theme.palette.common.white, 0.7),
  borderRadius: '50px',

  '&:hover': {
    background: 'transparent',
    color: theme.palette.common.white,
  },
}));

function Component() {
  const { t } = useTranslation();

  return (
    <Card>
      <Grid container>
        <Grid
          xs={12}
          lg={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexGrow={1}
          >
            <Box>
              <Box
                py={5}
                px={2}
              >
                <Avatar
                  variant="square"
                  sx={{
                    mx: 'auto',
                    mb: 2,
                    width: 'auto',
                    height: 44,
                    background: 'transparent',

                    img: {
                      objectFit: 'contain',
                    },
                  }}
                  src="/placeholders/logo/stripe.svg"
                />
                <Typography
                  variant="subtitle1"
                  textAlign="center"
                  color="text.secondary"
                >
                  {t(
                    ' The perfect tool to enhance productivity and decision-making in diverse business environments.'
                  )}
                  .
                </Typography>
              </Box>
              <Box
                mr={{ xs: 2, sm: 3 }}
                mb={{ xs: 2, sm: 3 }}
              >
                <VerticalMenuIndicatorPrimary />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          xs={12}
          lg={8}
          display="flex"
        >
          <Box
            display="flex"
            alignItems="center"
            position="relative"
            sx={{
              width: '100%',
              position: 'relative',
              minHeight: '100%',
              background: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%) !important',
            }}
          >
            <CardActions
              display="flex"
              alignItems="center"
            >
              <Tooltip
                arrow
                title={t('This is a helper placeholder')}
                placement="right"
              >
                <IconButtonWrapper
                  sx={{
                    ml: 0.5,
                  }}
                >
                  <HelpTwoToneIcon fontSize="small" />
                </IconButtonWrapper>
              </Tooltip>
            </CardActions>
            <BoxComposedBg
              sx={{
                opacity: 0.5,
                background: 'linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)',
              }}
            />
            <BoxComposedImage
              sx={{
                opacity: 0.3,
                backgroundImage: 'url("/placeholders/covers/3.jpg")',
              }}
            />
            <BoxComposedContent
              display="flex"
              flexGrow={1}
              alignItems="center"
              flexDirection="column"
              p={{ xs: 4, sm: 6, xl: 8 }}
            >
              <Grid
                container
                spacing={{ xs: 2, sm: 3 }}
              >
                <Grid
                  xs={12}
                  md={6}
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
              </Grid>
            </BoxComposedContent>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Component;
