import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import {
  Avatar,
  Box,
  Button,
  Card,
  CircularProgress,
  circularProgressClasses,
  Divider,
  Unstable_Grid2 as Grid,
  Menu,
  MenuItem,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const GoalsBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: theme.palette.common.white,
}));

const DotLegend = styled('span')(({ theme }) => ({
  borderRadius: theme.spacing(1.5),
  width: theme.spacing(1.5),
  height: theme.spacing(1.5),
  display: 'inline-flex',
  marginRight: theme.spacing(0.8),
}));

function ProfileGoals() {
  const { t } = useTranslation();
  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const user = {
    avatar: '/avatars/3.png',
    name: 'Ethan Donovan',
    jobTitle: 'Principal Engineer',
  };
  const theme = useTheme();

  const data = {
    weightLoss: 42,
    sleep: 65,
  };

  const periods = [
    {
      value: 'today',
      text: t('Today'),
    },
    {
      value: 'yesterday',
      text: t('Yesterday'),
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

  const [period, setPeriod] = useState<string>(periods[2].text);

  return (
    <Card
      sx={{
        p: { xs: 2, sm: 3 },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
      >
        <Avatar
          sx={{
            mr: 1.5,
            width: theme.spacing(7),
            height: theme.spacing(7),
          }}
          variant="rounded"
          alt={user?.name ?? ''}
          src={user?.avatar ?? ''}
        />
        <Box>
          <Typography variant="h4">{user?.name ?? ''}</Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            San Francisco, USA
          </Typography>
        </Box>
      </Box>

      <Stack
        sx={{
          my: { xs: 2, sm: 3 },
        }}
        direction="row"
        divider={
          <Divider
            orientation="vertical"
            flexItem
          />
        }
        justifyContent="space-evenly"
        alignItems="center"
        spacing={0}
      >
        <Box p={2}>
          <Typography
            align="center"
            variant="h3"
          >
            79
            <Typography
              variant="h4"
              component="span"
            >
              {t('kg')}
            </Typography>
          </Typography>
          <Typography
            align="center"
            variant="subtitle2"
            color="text.secondary"
          >
            {t('weight')}
          </Typography>
        </Box>
        <Box p={2}>
          <Typography
            align="center"
            variant="h3"
          >
            182
            <Typography
              variant="h4"
              component="span"
            >
              {t('cm')}
            </Typography>
          </Typography>
          <Typography
            align="center"
            variant="subtitle2"
            color="text.secondary"
          >
            {t('height')}
          </Typography>
        </Box>
        <Box p={2}>
          <Typography
            align="center"
            variant="h3"
          >
            24
            <Typography
              variant="h4"
              component="span"
            >
              {t('cm')}
            </Typography>
          </Typography>
          <Typography
            align="center"
            variant="subtitle2"
            color="text.secondary"
          >
            {t('age')}
          </Typography>
        </Box>
      </Stack>
      <Box
        mb={{ xs: 2, sm: 3 }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h4">{t('Your Goals')}</Typography>
        <Button
          size="small"
          variant="outlined"
          ref={actionRef1}
          onClick={() => setOpenMenuPeriod(true)}
          endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
        >
          {period}
        </Button>
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
      <Grid
        spacing={{ xs: 2, sm: 3 }}
        container
      >
        <Grid
          xs={12}
          md={6}
        >
          <GoalsBox
            p={2}
            sx={{
              background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%) !important',
            }}
          >
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  pb: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <DotLegend style={{ background: theme.palette.secondary.main }} />
                {t('Weight Loss')}
              </Typography>
              <Box>
                <Typography
                  variant="h3"
                  fontWeight={700}
                  sx={{
                    pr: 0.5,
                    display: 'inline-flex',
                  }}
                >
                  4.2
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  sx={{
                    display: 'inline-flex',
                  }}
                >
                  / 10 kg
                </Typography>
              </Box>
            </Box>
            <Box
              display="inline-flex"
              position="relative"
            >
              <Typography
                position="absolute"
                top={0}
                left={0}
                width={64}
                height={64}
                display="flex"
                justifyContent="center"
                alignItems="center"
                variant="subtitle1"
              >
                {data.weightLoss}%
              </Typography>
              <CircularProgress
                variant="determinate"
                sx={{
                  color: 'common.white',
                  opacity: 0.3,
                }}
                size={64}
                thickness={2}
                value={100}
              />
              <CircularProgress
                size={64}
                sx={{
                  color: 'common.white',
                  animationDuration: '550ms',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  [`& .${circularProgressClasses.circle}`]: {
                    strokeLinecap: 'round',
                  },
                }}
                thickness={2}
                variant="determinate"
                value={data.weightLoss}
              />
            </Box>
          </GoalsBox>
        </Grid>
        <Grid
          xs={12}
          md={6}
        >
          <GoalsBox
            p={2}
            sx={{
              background: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%) !important',
            }}
          >
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  pb: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <DotLegend style={{ background: theme.palette.error.main }} />
                {t('Sleep')}
              </Typography>
              <Box>
                <Typography
                  variant="h3"
                  fontWeight={700}
                  sx={{
                    pr: 0.5,
                    display: 'inline-flex',
                  }}
                >
                  37
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  sx={{
                    display: 'inline-flex',
                  }}
                >
                  / 59 hours
                </Typography>
              </Box>
            </Box>
            <Box
              display="inline-flex"
              position="relative"
            >
              <Typography
                position="absolute"
                top={0}
                left={0}
                width={64}
                height={64}
                display="flex"
                justifyContent="center"
                alignItems="center"
                variant="subtitle1"
              >
                {data.sleep}%
              </Typography>
              <CircularProgress
                variant="determinate"
                sx={{
                  color: 'common.white',
                  opacity: 0.3,
                }}
                size={64}
                thickness={2}
                value={100}
              />
              <CircularProgress
                size={64}
                sx={{
                  color: 'common.white',
                  animationDuration: '550ms',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  [`& .${circularProgressClasses.circle}`]: {
                    strokeLinecap: 'round',
                  },
                }}
                thickness={2}
                variant="determinate"
                value={data.sleep}
              />
            </Box>
          </GoalsBox>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ProfileGoals;
