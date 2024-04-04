import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import {
  alpha,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Chip,
  Divider,
  Unstable_Grid2 as Grid,
  IconButton,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TooltipLight } from 'src/components/base/styles/tooltips';

const BoxComposed = styled(Box)(() => ({
  position: 'relative',
}));

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  zIndex: 7,
}));

const BoxComposedContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 7,

  '.MuiTypography-root': {
    color: theme.palette.primary.contrastText,

    '& + .MuiTypography-root': {
      color: alpha(theme.palette.primary.contrastText, 0.7),
    },
  },
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
  color: alpha(theme.palette.common.white, 0.7),
  borderRadius: '50px',

  '&:hover': {
    background: 'transparent',
    color: theme.palette.common.white,
  },
}));

const ButtonWrapper = styled(Button)(({ theme }) => ({
  background:
    theme.palette.mode === 'dark'
      ? alpha(theme.palette.common.white, 0.04)
      : alpha(theme.palette.common.white, 0.1),
  borderColor: alpha(theme.palette.common.white, 0.3),
  color: theme.palette.common.white,

  '&:hover': {
    background: alpha(theme.palette.common.white, 0.2),
    borderColor: alpha(theme.palette.common.white, 0.3),
    color: theme.palette.common.white,
  },
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card>
      <Grid container>
        <Grid
          xs={12}
          md={6}
          lg={5}
        >
          <Box
            sx={{
              width: '100%',
              position: 'relative',
              textAlign: 'center',
              py: { xs: 2, md: 4 },
              px: { xs: 2, sm: 3 },
            }}
          >
            <Box>
              <Avatar
                sx={{
                  mx: 'auto',
                  mb: 1.5,
                  width: 114,
                  height: 114,
                  border: `${theme.palette.common.white} solid 4px`,
                  boxShadow: `0 0 0 3px ${theme.palette.error.main}`,
                }}
                src="/avatars/2.png"
              />
              <Typography variant="h4">Marion Devine</Typography>

              <Stack
                py={2}
                gap={1}
                direction="row"
                flexWrap={{ xs: 'wrap', md: 'nowrap' }}
                justifyContent="center"
              >
                <Chip
                  label="Web developer"
                  color="info"
                />

                <Chip
                  label="Typescript"
                  color="warning"
                />
                <Chip
                  label="React"
                  color="error"
                />
              </Stack>

              <Typography
                variant="subtitle2"
                color="text.secondary"
              >
                {t('Revolutionize Your Dashboard Experience')}
              </Typography>
              <Divider
                sx={{
                  mt: { xs: 2, sm: 3 },
                }}
              />
              <Stack
                sx={{
                  my: { xs: 2, sm: 3 },
                }}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={0}
              >
                <Box>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    textAlign="center"
                    gutterBottom
                  >
                    {t('Current month')}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    textAlign="center"
                  >
                    <Box
                      component="span"
                      pr={1}
                    >
                      <small>$</small> 46,594
                    </Box>
                    <Chip
                      size="small"
                      label="-8%"
                      color="error"
                    />
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    textAlign="center"
                    gutterBottom
                  >
                    {t('Last year')}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    textAlign="center"
                  >
                    <Box
                      component="span"
                      pr={1}
                    >
                      <small>$</small> 34,742
                    </Box>
                    <Chip
                      size="small"
                      label="+14%"
                      color="success"
                    />
                  </Typography>
                </Box>
              </Stack>
              <Divider />
              <Box my={3}>
                <Typography
                  fontWeight={500}
                  sx={{
                    textTransform: 'uppercase',
                  }}
                  textAlign="center"
                  variant="subtitle2"
                  color="text.secondary"
                >
                  {t('Team members')}
                </Typography>
                <Box
                  mt={2}
                  display="flex"
                  justifyContent="center"
                >
                  <Avatar
                    variant="rounded"
                    sx={{
                      background: theme.palette.warning.main,
                      color: theme.palette.warning.contrastText,
                      borderRadius: theme.shape.borderRadius,
                      width: 44,
                      height: 44,
                      mr: 1,
                      boxShadow: `0 .113rem .5rem ${alpha(
                        theme.palette.common.black,
                        0.1
                      )}, 0 .126rem .225rem ${alpha(theme.palette.common.black, 0.3)}`,
                    }}
                  >
                    JK
                  </Avatar>
                  <Box mr={1}>
                    <Badge
                      color="error"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      variant="dot"
                      overlap="circular"
                    >
                      <Avatar
                        variant="rounded"
                        sx={{
                          background: theme.palette.primary.main,
                          color: theme.palette.primary.contrastText,
                          borderRadius: theme.shape.borderRadius,
                          width: 44,
                          height: 44,
                          boxShadow: `0 .113rem .5rem ${alpha(
                            theme.palette.common.black,
                            0.1
                          )}, 0 .126rem .225rem ${alpha(theme.palette.common.black, 0.3)}`,
                        }}
                      >
                        HA
                      </Avatar>
                    </Badge>
                  </Box>
                  <Avatar
                    variant="rounded"
                    sx={{
                      borderRadius: theme.shape.borderRadius,
                      width: 44,
                      mr: 1,
                      height: 44,
                      boxShadow: `0 .113rem .5rem ${alpha(
                        theme.palette.common.black,
                        0.1
                      )}, 0 .126rem .225rem ${alpha(theme.palette.common.black, 0.3)}`,
                    }}
                    alt="Cindy Baker"
                    src="/avatars/3.png"
                  />
                  <Avatar
                    variant="rounded"
                    sx={{
                      borderRadius: theme.shape.borderRadius,
                      width: 44,
                      height: 44,
                      boxShadow: `0 .113rem .5rem ${alpha(
                        theme.palette.common.black,
                        0.1
                      )}, 0 .126rem .225rem ${alpha(theme.palette.common.black, 0.3)}`,
                    }}
                    alt="Agnes Walker"
                    src="/avatars/4.png"
                  />
                </Box>
              </Box>
              <Divider />
              <Box
                sx={{
                  textAlign: 'center',
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    mt: { xs: 2, md: 5 },
                  }}
                  startIcon={<AccountBoxTwoToneIcon />}
                  size="large"
                  color="primary"
                >
                  {t('View complete profile')}
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          xs={12}
          lg={7}
          md={6}
        >
          <BoxComposed
            display="flex"
            alignItems="center"
            sx={{
              position: 'relative',
              minHeight: '100%',
              background: 'linear-gradient(60deg, #29323c 0%, #485563 100%) !important',
            }}
          >
            <CardActions
              display="flex"
              alignItems="center"
            >
              <TooltipLight
                arrow
                title={t('This is a helper placeholder')}
                placement="right"
              >
                <IconButtonWrapper>
                  <HelpTwoToneIcon fontSize="small" />
                </IconButtonWrapper>
              </TooltipLight>
            </CardActions>
            <BoxComposedBg
              sx={{
                opacity: 0.5,
                background: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%) !important',
              }}
            />
            <BoxComposedImage
              sx={{
                opacity: 0.5,
                backgroundImage: 'url("/placeholders/covers/5.jpg")',
              }}
            />
            <BoxComposedContent
              display="flex"
              flexGrow={1}
              alignItems="center"
              flexDirection="column"
              sx={{
                textAlign: 'center',
              }}
              p={{ xs: 4, xl: 8 }}
            >
              <Typography
                lineHeight="1.4"
                sx={{
                  pt: 3,
                  pb: 2,
                }}
                variant="h2"
              >
                {t('Revolutionize Your Dashboard Experience')}
              </Typography>
              <Typography
                lineHeight="1.5"
                variant="h5"
              >
                {t(
                  ' The perfect tool to enhance productivity and decision-making in diverse business environments.'
                )}
                .
              </Typography>
              <Box mt={2}>
                <ButtonWrapper
                  variant="outlined"
                  sx={{
                    mt: { xs: 2, md: 5 },
                  }}
                  endIcon={<ArrowForwardTwoToneIcon />}
                  size="large"
                  color="primary"
                >
                  {t('Continue reading')}
                </ButtonWrapper>
              </Box>
            </BoxComposedContent>
          </BoxComposed>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Component;
