import DataSaverOnTwoToneIcon from '@mui/icons-material/DataSaverOnTwoTone';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import StorageTwoToneIcon from '@mui/icons-material/StorageTwoTone';
import {
  alpha,
  Avatar,
  Badge,
  Box,
  Card,
  Chip,
  Divider,
  Unstable_Grid2 as Grid,
  IconButton,
  List,
  ListItemAvatar,
  ListItemText,
  Rating,
  styled,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonLight } from 'src/components/base/styles/button';
import { ListItemButtonWrapper } from 'src/components/base/styles/list-item-button';
import { PulseBadge } from 'src/components/base/styles/pulse-badge';

export const GaugeChart = dynamic(() => import('react-gauge-chart'), { ssr: false });

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
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const items = [
    {
      id: 1,
      title: t('Build React Interface'),
      category: 'Development',
      logo: '/placeholders/logo/discord-icon.svg',
      value: '4,685',
    },
    {
      id: 2,
      title: t('Create Ads Campaigns'),
      category: 'Marketing',
      logo: '/placeholders/logo/google-icon.svg',
      value: '8,434',
      budget: 'over',
    },
    {
      id: 3,
      title: t('Resolve Github issues'),
      category: 'Bugfixes',
      logo: '/placeholders/logo/spotify-icon.svg',
      value: '5,167',
      budget: '',
    },
    {
      id: 4,
      title: t('Build UI for Angular'),
      category: 'Development',
      logo: '/placeholders/logo/slack-icon.svg',
      value: '43,584',
      budget: '',
    },
  ];

  return (
    <Card>
      <Grid container>
        <Grid
          xs={12}
          lg={4}
          md={6}
          position="relative"
          zIndex={2}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box width="100%">
              <Box
                sx={{
                  textAlign: 'center',
                }}
                py={5}
                px={2}
              >
                <Avatar
                  variant="square"
                  sx={{
                    mx: 'auto',
                    mb: 2,
                    width: 'auto',
                    height: 36,
                    background: 'none',
                    img: {
                      objectFit: 'contain',
                    },
                  }}
                  src="/placeholders/logo/coinbase.svg"
                />
                <Rating
                  defaultValue={4}
                  precision={0.5}
                />
                <Typography
                  sx={{
                    pt: 1,
                  }}
                  variant="subtitle2"
                  textAlign="center"
                  color="text.secondary"
                >
                  {t(
                    ' The perfect tool to enhance productivity and decision-making in diverse business environments.'
                  )}
                  .
                </Typography>
              </Box>
              <List disablePadding>
                {items.map((item) => (
                  <Fragment key={item.id}>
                    <Divider />
                    <ListItemButtonWrapper
                      sx={{
                        display: { xs: 'block', sm: 'flex' },
                        p: 2,
                      }}
                    >
                      <ListItemAvatar
                        sx={{
                          minWidth: 'auto',
                          mr: 2,
                          mb: { xs: 2, sm: 0 },
                        }}
                      >
                        <Avatar
                          variant="square"
                          sx={{
                            width: 42,
                            height: 42,
                            background: 'none',
                            img: {
                              objectFit: 'contain',
                            },
                          }}
                          alt={item.title}
                          src={item.logo}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography
                            color="text.primary"
                            variant="h5"
                          >
                            {item.title}
                          </Typography>
                        }
                        secondary={
                          <>
                            <Typography
                              noWrap
                              variant="subtitle2"
                              color="text.secondary"
                            >
                              {item.category}
                            </Typography>
                          </>
                        }
                      />
                      <Box
                        component="span"
                        sx={{
                          display: { xs: 'none', sm: 'inline-block' },
                        }}
                      >
                        <Box textAlign="right">
                          <Chip
                            label={`$${item.value}`}
                            color={item.budget === 'over' ? 'error' : 'success'}
                          />
                        </Box>
                      </Box>
                    </ListItemButtonWrapper>
                  </Fragment>
                ))}
              </List>
            </Box>
          </Box>
        </Grid>
        <Grid
          xs={12}
          lg={8}
          md={6}
          position="relative"
          zIndex={1}
        >
          <Box
            position="relative"
            display="flex"
            alignItems="center"
            sx={{
              width: '100%',
              position: 'relative',
              minHeight: '100%',
              background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
            }}
          >
            <CardActions
              display={{ xs: 'none', sm: 'flex' }}
              alignItems="center"
            >
              <Tooltip
                arrow
                title={t('This is a helper placeholder')}
                placement="right"
              >
                <IconButtonWrapper>
                  <HelpTwoToneIcon fontSize="small" />
                </IconButtonWrapper>
              </Tooltip>
            </CardActions>
            <BoxComposedBg
              sx={{
                opacity: 0.5,
                background: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%) !important',
              }}
            />
            <BoxComposedBg
              sx={{
                opacity: 0.5,
                background: 'linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%) !important',
              }}
            />
            <BoxComposedBg
              sx={{
                opacity: 0.5,
                background: 'linear-gradient(135deg, #97ABFF 10%, #123597 100%)',
              }}
            />
            <BoxComposedImage
              sx={{
                opacity: 0.3,
                backgroundImage: 'url("/placeholders/covers/2.jpg")',
              }}
            />
            <BoxComposedContent
              display="flex"
              flexGrow={1}
              alignItems="center"
              flexDirection="column"
              p={{ xs: 2, sm: 3, md: 4, xl: 6 }}
            >
              <Grid
                container
                spacing={{ xs: 2, sm: 3 }}
              >
                <Grid
                  xs={12}
                  lg={6}
                >
                  <Card
                    sx={{
                      backgroundColor: 'neutral.900',
                      textAlign: 'center',
                      py: { xs: 2, sm: 3, md: 4 },
                      px: 1,
                    }}
                  >
                    <Avatar
                      sx={{
                        width: theme.spacing(8),
                        height: theme.spacing(8),
                        background: alpha(theme.palette.warning.main, 0.15),
                        color: theme.palette.warning.main,
                        mx: 'auto',
                        mb: { xs: 2, sm: 3, md: 4 },
                      }}
                    >
                      <StorageTwoToneIcon />
                    </Avatar>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: theme.typography.pxToRem(18),
                        color: theme.palette.common.white,
                        pb: 1,
                      }}
                    >
                      Gent Central Store
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      sx={{
                        px: 2,
                        color: alpha(theme.palette.common.white, 0.7),
                      }}
                    >
                      {t('High performance React template built with lots of powerful components')}.
                    </Typography>
                    <Box
                      sx={{
                        mt: { xs: 2, sm: 3 },
                        mb: 1,
                        mx: 'auto',
                        maxWidth: { xs: 300, sm: 360 },
                      }}
                    >
                      <GaugeChart
                        //@ts-ignore
                        nrOfLevels={24}
                        textColor={theme.palette.common.white}
                        needleColor={alpha(theme.palette.common.white, 0.3)}
                        needleBaseColor={theme.palette.common.white}
                        colors={[
                          alpha(theme.palette.warning.main, 0.8),
                          alpha(theme.palette.error.main, 0.9),
                        ]}
                        arcWidth={0.3}
                        percent={0.67}
                      />
                    </Box>
                    <Badge
                      color="success"
                      variant="dot"
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      sx={{
                        '.MuiBadge-dot': {
                          right: '5%',
                        },
                      }}
                      overlap="circular"
                      badgeContent=" "
                    >
                      <ButtonLight
                        size="large"
                        sx={{
                          borderRadius: theme.shape.borderRadius,
                        }}
                      >
                        {t('View Dashboard')}
                      </ButtonLight>
                    </Badge>
                  </Card>
                </Grid>
                {lgUp && (
                  <Grid
                    xs={12}
                    md={6}
                  >
                    <Card
                      sx={{
                        backgroundColor: 'neutral.900',
                        textAlign: 'center',
                        py: { xs: 2, sm: 3, md: 4 },
                        px: 1,
                      }}
                    >
                      <PulseBadge
                        color="error"
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right',
                        }}
                        sx={{
                          '.MuiBadge-badge': {
                            boxShadow: `0 0 0 2px ${theme.palette.neutral[900]}}`,
                          },
                        }}
                        badgeContent=" "
                        overlap="circular"
                      >
                        <Avatar
                          sx={{
                            width: theme.spacing(8),
                            height: theme.spacing(8),
                            background: alpha(theme.palette.info.main, 0.15),
                            color: theme.palette.info.main,
                            mx: 'auto',
                          }}
                        >
                          <DataSaverOnTwoToneIcon />
                        </Avatar>
                      </PulseBadge>
                      <Typography
                        variant="h4"
                        sx={{
                          pt: { xs: 2, sm: 4 },
                          fontSize: theme.typography.pxToRem(18),
                          color: theme.palette.common.white,
                          pb: 1,
                        }}
                      >
                        The Dubai Mall
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        sx={{
                          px: 2,
                          color: alpha(theme.palette.common.white, 0.7),
                        }}
                      >
                        {t(
                          'High performance React template built with lots of powerful components'
                        )}
                        .
                      </Typography>
                      <Box
                        sx={{
                          mt: { xs: 2, sm: 3 },
                          mb: 1,
                          mx: 'auto',
                          maxWidth: { xs: 300, sm: 360 },
                        }}
                      >
                        <GaugeChart
                          //@ts-ignore
                          nrOfLevels={24}
                          textColor={theme.palette.common.white}
                          needleColor={alpha(theme.palette.common.white, 0.3)}
                          needleBaseColor={theme.palette.common.white}
                          colors={[
                            alpha(theme.palette.info.main, 0.9),
                            alpha(theme.palette.success.main, 1),
                          ]}
                          arcWidth={0.3}
                          percent={0.43}
                        />
                      </Box>

                      <ButtonLight
                        size="large"
                        sx={{
                          borderRadius: theme.shape.borderRadius,
                        }}
                      >
                        {t('View Dashboard')}
                      </ButtonLight>
                    </Card>
                  </Grid>
                )}
              </Grid>
            </BoxComposedContent>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Component;
