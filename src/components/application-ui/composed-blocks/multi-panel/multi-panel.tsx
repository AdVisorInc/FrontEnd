import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import FacebookIcon from '@mui/icons-material/Facebook';
import HelpTwoToneIcon from '@mui/icons-material/HelpTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  alpha,
  Box,
  Button,
  Card,
  Chip,
  Divider,
  Unstable_Grid2 as Grid,
  IconButton,
  MenuItem,
  Select,
  styled,
  Tab,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TimelineBasic from 'src/components/application-ui/timelines/basic/basic';
import LoginFormBasic from 'src/components/application-ui/user-auth/login/login-form';
import { TabsAlternate } from 'src/components/base/styles/tabs';

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

const IconButtonIcon = styled(IconButton)(({ theme }) => ({
  background: 'transparent',
  transition: theme.transitions.create(['all']),
  color: alpha(theme.palette.common.white, 0.7),
  borderRadius: '50px',

  '&:hover': {
    background: 'transparent',
    color: theme.palette.common.white,
  },
}));

export const DividerPrimary = styled(Divider)(({ theme }) => ({
  width: '50px',
  background: theme.palette.primary.main,
  height: '6px',
  borderRadius: '50px',
}));

const DividerWarning = styled(Divider)(({ theme }) => ({
  width: '50px',
  background: theme.palette.warning.main,
  height: '6px',
  borderRadius: '50px',
}));

const DividerSuccess = styled(Divider)(({ theme }) => ({
  width: '50px',
  background: theme.palette.success.main,
  height: '6px',
  borderRadius: '50px',
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const [currentTab, setCurrentTab] = useState<number>(0);

  const tabs = [
    { value: 0, label: t('Overview') },
    { value: 1, label: t('Sign in') },
    { value: 2, label: t('Recent activity') },
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: number): void => {
    setCurrentTab(value);
  };

  const handleSelectChange = (event: ChangeEvent<{ value: unknown }>) => {
    setCurrentTab(event.target.value as number);
  };

  return (
    <Card>
      <Grid container>
        <Grid
          xs={12}
          xl={5}
        >
          <Box
            position="relative"
            display="flex"
            alignItems="center"
            sx={{
              minHeight: '100%',
              background: 'linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%) !important',
            }}
          >
            <BoxComposedBg
              sx={{
                opacity: 0.6,
                background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%) !important',
              }}
            />
            <BoxComposedImage
              sx={{
                opacity: 0.4,
                backgroundImage: (theme) =>
                  theme.palette.mode === 'dark'
                    ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/placeholders//covers/1.jpg")`
                    : `url("/placeholders/covers/1.jpg")`,
              }}
            />
            <BoxComposedContent
              p={{
                xs: 2,
                sm: 3,
                md: 6,
              }}
            >
              <Box
                display="flex"
                alignItems="center"
              >
                <Chip
                  label={t('New release')}
                  sx={{
                    color: 'common.white',
                    background: alpha(theme.palette.common.white, 0.12),
                  }}
                />
                <Tooltip
                  arrow
                  title={t('This is a helper placeholder')}
                  placement="right"
                >
                  <IconButtonIcon
                    sx={{
                      ml: 0.5,
                    }}
                  >
                    <HelpTwoToneIcon fontSize="small" />
                  </IconButtonIcon>
                </Tooltip>
              </Box>
              <Typography
                lineHeight="1.4"
                sx={{
                  py: 2,
                }}
                variant="h2"
              >
                {t('Revolutionize Your Dashboard Experience')}
              </Typography>
              <Typography
                fontWeight={400}
                variant="h5"
              >
                {t(
                  ' The perfect tool to enhance productivity and decision-making in diverse business environments.'
                )}
                .
              </Typography>
              <Button
                color="secondary"
                variant="outlined"
                sx={{
                  mt: 2,
                  border: 0,
                  '&:hover': {
                    border: 0,
                  },
                }}
                endIcon={<ArrowForwardTwoToneIcon />}
              >
                {t('Browse templates')}
              </Button>

              <Box mt={{ xs: 2, md: 4 }}>
                <Tooltip
                  arrow
                  placement="top"
                  title="Facebook"
                >
                  <IconButtonIcon>
                    <FacebookIcon fontSize="small" />
                  </IconButtonIcon>
                </Tooltip>
                <Tooltip
                  arrow
                  placement="top"
                  title="Twitter"
                >
                  <IconButtonIcon>
                    <TwitterIcon fontSize="small" />
                  </IconButtonIcon>
                </Tooltip>
                <Tooltip
                  arrow
                  placement="top"
                  title="Instagram"
                >
                  <IconButtonIcon>
                    <InstagramIcon fontSize="small" />
                  </IconButtonIcon>
                </Tooltip>
              </Box>
            </BoxComposedContent>
          </Box>
        </Grid>
        <Grid
          xs={12}
          xl={7}
        >
          <Box
            py={2}
            px={{ xs: 2, sm: 3 }}
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
            }}
          >
            {smUp ? (
              <TabsAlternate
                onChange={handleTabsChange}
                value={currentTab}
                variant="fullWidth"
                textColor="secondary"
                indicatorColor="secondary"
              >
                {tabs.map((tab) => (
                  <Tab
                    key={tab.value}
                    label={tab.label}
                    value={tab.value}
                  />
                ))}
              </TabsAlternate>
            ) : (
              <Select
                value={currentTab}
                //@ts-ignore
                onChange={handleSelectChange}
                fullWidth
              >
                {tabs.map((tab) => (
                  <MenuItem
                    key={tab.value}
                    value={tab.value}
                  >
                    {tab.label}
                  </MenuItem>
                ))}
              </Select>
            )}
          </Box>
          <Divider />
          <Box p={{ xs: 2, sm: 3 }}>
            {currentTab === 0 && (
              <>
                <Grid
                  container
                  spacing={{ xs: 2, sm: 3 }}
                >
                  <Grid
                    xs={12}
                    sm={4}
                  >
                    <Card
                      elevation={0}
                      variant="outlined"
                      sx={{
                        p: 2,
                      }}
                    >
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: theme.typography.pxToRem(40),
                        }}
                      >
                        31
                      </Typography>
                      <DividerPrimary
                        sx={{
                          my: 2,
                        }}
                      />
                      <Typography
                        variant="caption"
                        color="text.secondary"
                      >
                        Implemented
                        <br />
                        bugfixes
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={4}
                  >
                    <Card
                      elevation={0}
                      variant="outlined"
                      sx={{
                        p: 2,
                      }}
                    >
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: theme.typography.pxToRem(40),
                        }}
                      >
                        68
                      </Typography>
                      <DividerSuccess
                        sx={{
                          my: 2,
                        }}
                      />
                      <Typography
                        variant="caption"
                        color="text.secondary"
                      >
                        Unresolved
                        <br />
                        tickets
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={4}
                  >
                    <Card
                      elevation={0}
                      variant="outlined"
                      sx={{
                        p: 2,
                      }}
                    >
                      <Typography
                        variant="h1"
                        sx={{
                          fontSize: theme.typography.pxToRem(40),
                        }}
                      >
                        52
                      </Typography>
                      <DividerWarning
                        sx={{
                          my: 2,
                        }}
                      />
                      <Typography
                        variant="caption"
                        color="text.secondary"
                      >
                        Support
                        <br />
                        requests
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid xs={12}>
                    <Box textAlign="center">
                      <Button variant="outlined">{t('View all open tickets')}</Button>
                    </Box>
                  </Grid>
                </Grid>
              </>
            )}
            {currentTab === 1 && <LoginFormBasic />}
            {currentTab === 2 && <TimelineBasic />}
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Component;
