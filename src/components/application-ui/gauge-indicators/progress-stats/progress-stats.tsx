import InsertChartTwoToneIcon from '@mui/icons-material/InsertChartTwoTone';
import LiveHelpTwoToneIcon from '@mui/icons-material/LiveHelpTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import ShowChartTwoToneIcon from '@mui/icons-material/ShowChartTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Card,
  CircularProgress,
  circularProgressClasses,
  Unstable_Grid2 as Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 2,
          }}
        >
          <Box
            display="inline-flex"
            position="relative"
          >
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: '50%',
                top: '50%',
                marginTop: '-21px',
                marginLeft: '-21px',
              }}
            >
              <Avatar
                sx={{
                  width: 42,
                  height: 42,
                  p: 0,
                  background: alpha(theme.palette.error.main, 0.1),
                  color: theme.palette.error.main,
                }}
              >
                <ShowChartTwoToneIcon fontSize="small" />
              </Avatar>
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: alpha(theme.palette.error.main, 0.15),
              }}
              size={96}
              thickness={3}
              value={100}
            />
            <CircularProgress
              size={96}
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                color: theme.palette.error.main,
                top: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round',
                },
              }}
              thickness={3}
              variant="determinate"
              value={43}
            />
          </Box>
          <Box ml={2}>
            <Typography
              variant="h5"
              color="text.secondary"
            >
              {t('Stocks')}
            </Typography>
            <Typography
              variant="h3"
              fontWeight={600}
            >
              $6,594
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 2,
          }}
        >
          <Box
            display="inline-flex"
            position="relative"
          >
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: '50%',
                top: '50%',
                marginTop: '-21px',
                marginLeft: '-21px',
              }}
            >
              <Avatar
                sx={{
                  width: 42,
                  height: 42,
                  p: 0,
                  background: alpha(theme.palette.info.main, 0.15),
                  color: theme.palette.info.main,
                }}
              >
                <InsertChartTwoToneIcon fontSize="small" />
              </Avatar>
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: alpha(theme.palette.info.main, 0.15),
              }}
              size={96}
              thickness={3}
              value={100}
            />
            <CircularProgress
              size={96}
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                color: theme.palette.info.main,
                top: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round',
                },
              }}
              thickness={3}
              variant="determinate"
              value={82}
            />
          </Box>
          <Box ml={2}>
            <Typography
              variant="h5"
              color="text.secondary"
            >
              {t('Sales')}
            </Typography>
            <Typography
              variant="h3"
              fontWeight={600}
            >
              8,741
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 2,
            background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%) !important',
          }}
        >
          <Box
            display="inline-flex"
            position="relative"
          >
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: '50%',
                top: '50%',
                marginTop: '-21px',
                marginLeft: '-21px',
              }}
            >
              <Avatar
                variant="rounded"
                sx={{
                  width: 42,
                  height: 42,
                  p: 0,
                  background:
                    theme.palette.mode === 'dark'
                      ? alpha(theme.palette.common.white, 0.04)
                      : alpha(theme.palette.common.white, 0.1),
                  color: theme.palette.common.white,
                }}
              >
                <LiveHelpTwoToneIcon fontSize="small" />
              </Avatar>
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: alpha(theme.palette.common.white, 0.1),
              }}
              size={96}
              thickness={3}
              value={100}
            />
            <CircularProgress
              size={96}
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                color: alpha(theme.palette.common.white, 0.7),
                top: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round',
                },
              }}
              thickness={3}
              variant="determinate"
              value={49}
            />
          </Box>
          <Box ml={2}>
            <Typography
              variant="h5"
              sx={{
                color: alpha(theme.palette.common.white, 0.7),
              }}
            >
              {t('Issues')}
            </Typography>
            <Typography
              variant="h3"
              fontWeight={600}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              142
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 2,
            background: 'linear-gradient(to bottom, #00b09b, #96c93d)!important',
          }}
        >
          <Box
            display="inline-flex"
            position="relative"
          >
            <Box
              sx={{
                animationDuration: '550ms',
                position: 'absolute',
                left: '50%',
                top: '50%',
                marginTop: '-21px',
                marginLeft: '-21px',
              }}
            >
              <Avatar
                sx={{
                  width: 42,
                  height: 42,
                  p: 0,
                  background:
                    theme.palette.mode === 'dark'
                      ? alpha(theme.palette.common.white, 0.04)
                      : alpha(theme.palette.common.white, 0.1),
                  color: theme.palette.common.white,
                }}
              >
                <PeopleAltTwoToneIcon fontSize="small" />
              </Avatar>
            </Box>
            <CircularProgress
              variant="determinate"
              sx={{
                color: alpha(theme.palette.common.white, 0.1),
              }}
              size={96}
              thickness={3}
              value={100}
            />
            <CircularProgress
              size={96}
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
              value={89}
            />
          </Box>
          <Box ml={2}>
            <Typography
              variant="h5"
              sx={{
                color: alpha(theme.palette.common.white, 0.7),
              }}
            >
              {t('Users')}
            </Typography>
            <Typography
              variant="h3"
              fontWeight={600}
              sx={{
                color: theme.palette.common.white,
              }}
            >
              14,345k
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
