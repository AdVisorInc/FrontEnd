import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  CardHeader,
  Unstable_Grid2 as Grid,
  IconButton,
  Stack,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';
import { ButtonIcon } from 'src/components/base/styles/button-icon';
import { LinearProgressSlim } from 'src/components/base/styles/progress-bar';

const DotLegend = styled('span')(({ theme }) => ({
  borderRadius: 22,
  width: theme.spacing(1.8),
  height: theme.spacing(1.8),
  display: 'inline-block',
  border: `2px solid ${theme.palette.common.white}`,
  marginRight: theme.spacing(0.5),
}));

function Projects() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: { xs: 2, sm: 3 },
        }}
      >
        <Typography variant="h3">{t('Projects')}</Typography>
        <Box>
          <Button
            size="small"
            variant="outlined"
          >
            {t('View all projects')}
          </Button>
        </Box>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
      >
        <Grid
          xs={12}
          lg={4}
          md={6}
        >
          <Box>
            <CardHeader
              sx={{
                px: 0,
                pt: 0,

                '& .MuiCardHeader-action': {
                  display: { xs: 'none', sm: 'flex' },
                },
              }}
              avatar={
                <AvatarState
                  sx={{
                    mb: { xs: 1, sm: 0 },
                  }}
                  isSoft
                  state="success"
                >
                  <CheckTwoToneIcon />
                </AvatarState>
              }
              action={
                <IconButton
                  size="small"
                  color="primary"
                >
                  <MoreVertTwoToneIcon />
                </IconButton>
              }
              title={t('Fix Urgent Mobile App Bugs')}
              titleTypographyProps={{
                variant: 'h5',
                color: 'text.primary',
              }}
            />
            <Box>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                {t('Tasks done')}: <b>25</b>
                <b> {t('/100')}</b>
              </Typography>
              <LinearProgressSlim
                sx={{ mb: 2, mt: 1 }}
                value={25}
                color="primary"
                variant="determinate"
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <AvatarGroup>
                <Avatar
                  alt="Remy Sharp"
                  src="/avatars/1.png"
                  sx={{ width: 34, height: 34 }}
                />
                <Avatar
                  alt="Travis Howard"
                  src="/avatars/2.png"
                  sx={{ width: 34, height: 34 }}
                />
                <Avatar
                  alt="Cindy Baker"
                  src="/avatars/3.png"
                  sx={{ width: 34, height: 34 }}
                />
                <Avatar
                  alt="Agnes Walker"
                  src="/avatars/4.png"
                  sx={{ width: 34, height: 34 }}
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="/avatars/5.png"
                  sx={{ width: 34, height: 34 }}
                />
              </AvatarGroup>
              <Stack
                direction="row"
                spacing={1}
              >
                <Tooltip
                  arrow
                  title={t('View project calendar')}
                  placement="top"
                >
                  <ButtonIcon
                    size="small"
                    variant="outlined"
                    color="secondary"
                    sx={{
                      color: 'primary.main',
                    }}
                  >
                    <CalendarTodayTwoToneIcon fontSize="small" />
                  </ButtonIcon>
                </Tooltip>
                <Tooltip
                  arrow
                  title={t('Mark project as favourite')}
                  placement="top"
                >
                  <ButtonIcon
                    size="small"
                    variant="outlined"
                    color="secondary"
                    sx={{
                      color: 'warning.main',
                    }}
                  >
                    <StarTwoToneIcon fontSize="small" />
                  </ButtonIcon>
                </Tooltip>
              </Stack>
            </Box>
          </Box>
        </Grid>
        <Grid
          xs={12}
          lg={4}
          md={6}
        >
          <Box>
            <CardHeader
              sx={{
                px: 0,
                pt: 0,

                '& .MuiCardHeader-action': {
                  display: { xs: 'none', sm: 'flex' },
                },
              }}
              avatar={
                <Avatar
                  sx={{
                    mb: { xs: 1, sm: 0 },
                    background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%) !important',
                    color: 'common.white',
                  }}
                >
                  RP
                </Avatar>
              }
              action={
                <IconButton
                  size="small"
                  color="primary"
                >
                  <MoreVertTwoToneIcon />
                </IconButton>
              }
              title={t('Replace Placeholder Images')}
              titleTypographyProps={{
                variant: 'h5',
                color: 'text.primary',
              }}
            />
            <Box>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                {t('Tasks done')}: <b>80</b>
                <b> {t('/100')}</b>
              </Typography>
              <LinearProgressSlim
                sx={{ mb: 2, mt: 1 }}
                value={80}
                color="primary"
                variant="determinate"
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <AvatarGroup>
                <Avatar
                  alt="Remy Sharp"
                  src="/avatars/1.png"
                  sx={{ width: 34, height: 34 }}
                />
                <Avatar
                  alt="Travis Howard"
                  src="/avatars/2.png"
                  sx={{ width: 34, height: 34 }}
                />
                <Avatar
                  alt="Cindy Baker"
                  src="/avatars/3.png"
                  sx={{ width: 34, height: 34 }}
                />
                <Avatar
                  alt="Agnes Walker"
                  src="/avatars/4.png"
                  sx={{ width: 34, height: 34 }}
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="/avatars/5.png"
                  sx={{ width: 34, height: 34 }}
                />
              </AvatarGroup>
              <Stack
                direction="row"
                spacing={1}
              >
                <Tooltip
                  arrow
                  title={t('View project calendar')}
                  placement="top"
                >
                  <ButtonIcon
                    size="small"
                    variant="outlined"
                    color="secondary"
                    sx={{
                      color: 'primary.main',
                    }}
                  >
                    <CalendarTodayTwoToneIcon fontSize="small" />
                  </ButtonIcon>
                </Tooltip>
                <Tooltip
                  arrow
                  title={t('Mark project as favourite')}
                  placement="top"
                >
                  <ButtonIcon
                    size="small"
                    variant="outlined"
                    color="secondary"
                    sx={{
                      color: 'warning.main',
                    }}
                  >
                    <StarTwoToneIcon fontSize="small" />
                  </ButtonIcon>
                </Tooltip>
              </Stack>
            </Box>
          </Box>
        </Grid>
        <Grid
          xs={12}
          lg={4}
          md={6}
        >
          <Box>
            <CardHeader
              sx={{
                px: 0,
                pt: 0,

                '& .MuiCardHeader-action': {
                  display: { xs: 'none', sm: 'flex' },
                },
              }}
              avatar={
                <Badge
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  sx={{
                    mb: { xs: 1, sm: 0 },
                  }}
                  overlap="circular"
                  badgeContent={
                    <Tooltip
                      arrow
                      placement="top"
                      title={t('Online right now')}
                    >
                      <DotLegend style={{ background: theme.palette.success.main }} />
                    </Tooltip>
                  }
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/avatars/1.png"
                  />
                </Badge>
              }
              action={
                <IconButton
                  size="small"
                  color="primary"
                >
                  <MoreVertTwoToneIcon />
                </IconButton>
              }
              title={t('Prometheus Redesign Project')}
              titleTypographyProps={{
                variant: 'h5',
                color: 'text.primary',
              }}
            />
            <Box>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                {t('Tasks done')}: <b>87</b>
                <b> {t('/100')}</b>
              </Typography>
              <LinearProgressSlim
                sx={{ mb: 2, mt: 1 }}
                value={87}
                color="primary"
                variant="determinate"
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <AvatarGroup>
                <Avatar
                  alt="Remy Sharp"
                  src="/avatars/1.png"
                  sx={{ width: 34, height: 34 }}
                />
                <Avatar
                  alt="Travis Howard"
                  src="/avatars/2.png"
                  sx={{ width: 34, height: 34 }}
                />
                <Avatar
                  alt="Cindy Baker"
                  src="/avatars/3.png"
                  sx={{ width: 34, height: 34 }}
                />
                <Avatar
                  alt="Agnes Walker"
                  src="/avatars/4.png"
                  sx={{ width: 34, height: 34 }}
                />
                <Avatar
                  alt="Trevor Henderson"
                  src="/avatars/5.png"
                  sx={{ width: 34, height: 34 }}
                />
              </AvatarGroup>
              <Stack
                direction="row"
                spacing={1}
              >
                <Tooltip
                  arrow
                  title={t('View project calendar')}
                  placement="top"
                >
                  <ButtonIcon
                    size="small"
                    variant="outlined"
                    color="secondary"
                    sx={{
                      color: 'primary.main',
                    }}
                  >
                    <CalendarTodayTwoToneIcon fontSize="small" />
                  </ButtonIcon>
                </Tooltip>
                <Tooltip
                  arrow
                  title={t('Mark project as favourite')}
                  placement="top"
                >
                  <ButtonIcon
                    size="small"
                    variant="outlined"
                    color="secondary"
                    sx={{
                      color: 'warning.main',
                    }}
                  >
                    <StarTwoToneIcon fontSize="small" />
                  </ButtonIcon>
                </Tooltip>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Projects;
