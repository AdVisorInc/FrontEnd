import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CircularProgress,
  circularProgressClasses,
  Unstable_Grid2 as Grid,
  Menu,
  MenuItem,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const RootWrapper = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)',
  borderRadius: theme.shape.borderRadius,
}));

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  background: alpha(theme.palette.common.white, 0.2),
  color: theme.palette.common.white,
  width: theme.spacing(4),
  height: theme.spacing(4),
}));

const TypographyWrapper = styled(Typography)(({ theme }) => ({
  '@media (min-width: 600px)': {
    maxWidth: 120,
  },
  margin: theme.spacing(2, 'auto', 0),
}));

const ButtonPeriod = styled(Button)(({ theme }) => ({
  border: 0,
  background: alpha(theme.palette.common.white, 0.08),
  color: alpha(theme.palette.common.white, 0.7),
  '&:hover': {
    color: theme.palette.common.white,
    background: alpha(theme.palette.common.white, 0.12),
  },
}));

function LearningProfile() {
  const { t } = useTranslation();
  const theme = useTheme();

  const chartValues = [38, 16, 28, 20, 13, 22, 35, 26, 24, 33, 27, 32];

  const data = {
    percentage: 44,
    certificates: 4,
    points: 262,
    courses: 8,
    discussions: 42,
  };

  const periods = [
    {
      value: 'this_week',
      text: t('This week'),
    },
    {
      value: 'last_month',
      text: t('Last month'),
    },
    {
      value: 'last_year',
      text: t('Last year'),
    },
  ];

  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>(periods[0].text);

  const user = {
    avatar: '/avatars/3.png',
    name: 'Ethan Donovan',
    jobTitle: 'Principal Engineer',
  };

  return (
    <RootWrapper
      sx={{
        p: { xs: 2, sm: 3 },
        height: { xs: 'auto', lg: theme.spacing(38) },
        mb: { xs: 0, lg: theme.spacing(16) },
      }}
    >
      <Stack
        spacing={{ xs: 2, sm: 3 }}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          flex={1}
        >
          <Box
            mr={{ xs: 0, sm: 3 }}
            mb={{ xs: 3, sm: 0 }}
            display="flex"
            position="relative"
          >
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                top: 0,
              }}
            >
              <Avatar
                sx={{
                  width: 134,
                  height: 134,
                }}
                src={user.avatar}
              />
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: alpha(theme.palette.common.white, 0.3),
              }}
              size={134}
              thickness={3}
              value={100}
            />
            <CircularProgress
              size={134}
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                color: theme.palette.common.white,
                top: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round',
                },
              }}
              thickness={3}
              variant="determinate"
              value={68}
            />
          </Box>
          <Box
            sx={{
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            <AvatarWrapper
              sx={{
                mb: 1,
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              <ArrowUpwardTwoToneIcon fontSize="small" />
            </AvatarWrapper>
            <Box>
              <Typography
                fontWeight="600"
                variant="h1"
                lineHeight={1}
                color="common.white"
              >
                {data.points}
              </Typography>
              <Typography
                variant="h4"
                fontWeight={400}
                gutterBottom
                color="neutral.200"
              >
                {t('learning points earned')}
              </Typography>
              <Typography
                color="common.white"
                variant="h4"
              >
                Chris Melton, {t('you did a great job last week!')}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <ButtonPeriod
              variant="contained"
              color="secondary"
              ref={actionRef1}
              onClick={() => setOpenMenuPeriod(true)}
              endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
            >
              {period}
            </ButtonPeriod>
            <Menu
              disableScrollLock
              anchorEl={actionRef1.current}
              onClose={() => setOpenMenuPeriod(false)}
              open={openPeriod}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {periods.map((_period) => (
                <MenuItem
                  key={_period.value}
                  onClick={() => {
                    setPeriod(_period.text);
                    setOpenMenuPeriod(false);
                  }}
                >
                  {_period.text}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              mt: 2,
              mb: 0.5,
            }}
          >
            <Box>
              <Typography
                color="common.white"
                variant="h4"
                lineHeight={1}
              >
                3.5h
              </Typography>
              <Typography
                variant="h5"
                fontWeight={400}
                sx={{
                  color: alpha(theme.palette.common.white, 0.8),
                }}
              >
                {t('last week')}
              </Typography>
            </Box>
            <AvatarWrapper>
              <ArrowUpwardTwoToneIcon fontSize="small" />
            </AvatarWrapper>
          </Box>
          <Box minWidth={210}>
            <SparkLineChart
              plotType="line"
              height={80}
              colors={[theme.palette.common.white]}
              showHighlight
              margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
              data={chartValues}
              area
              sx={{
                '.MuiLineElement-root': {
                  strokeWidth: 1,
                },

                '.MuiAreaElement-root': {
                  fill: "url('#alphaWhiteGradient')",
                  fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
                },
              }}
            >
              <defs>
                <linearGradient
                  id="alphaWhiteGradient"
                  gradientTransform="rotate(90)"
                >
                  <stop
                    offset="0%"
                    stopColor={alpha(theme.palette.common.white, 0.4)}
                  />
                  <stop
                    offset="100%"
                    stopColor={alpha(theme.palette.common.white, 0.01)}
                  />
                </linearGradient>
              </defs>
            </SparkLineChart>
          </Box>
        </Box>
      </Stack>
      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        sx={{
          mt: 3,
        }}
      >
        <Grid
          xs={12}
          sm={6}
          lg={3}
        >
          <Card
            sx={{
              p: { xs: 2, sm: 3 },
            }}
          >
            <Typography
              align="center"
              variant="h1"
            >
              {data.certificates}
            </Typography>
            <TypographyWrapper
              align="center"
              variant="h4"
              fontWeight={400}
              color="text.secondary"
            >
              {t('certificates earned')}
            </TypographyWrapper>
          </Card>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          lg={3}
        >
          <Card
            sx={{
              p: { xs: 2, sm: 3 },
            }}
          >
            <Typography
              align="center"
              variant="h1"
            >
              {data.points}
            </Typography>
            <TypographyWrapper
              align="center"
              variant="h4"
              fontWeight={400}
              color="text.secondary"
            >
              {t('reward points')}
            </TypographyWrapper>
          </Card>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          lg={3}
        >
          <Card
            sx={{
              p: { xs: 2, sm: 3 },
            }}
          >
            <Typography
              align="center"
              variant="h1"
            >
              {data.courses}
            </Typography>
            <TypographyWrapper
              align="center"
              variant="h4"
              fontWeight={400}
              color="text.secondary"
            >
              {t('courses completed')}
            </TypographyWrapper>
          </Card>
        </Grid>
        <Grid
          xs={12}
          sm={6}
          lg={3}
        >
          <Card
            sx={{
              p: { xs: 2, sm: 3 },
            }}
          >
            <Typography
              align="center"
              variant="h1"
            >
              {data.discussions}
            </Typography>
            <TypographyWrapper
              align="center"
              variant="h4"
              fontWeight={400}
              color="text.secondary"
            >
              {t('forum discussions')}
            </TypographyWrapper>
          </Card>
        </Grid>
      </Grid>
    </RootWrapper>
  );
}

export default LearningProfile;
