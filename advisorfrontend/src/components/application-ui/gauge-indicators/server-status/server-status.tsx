import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import DnsTwoToneIcon from '@mui/icons-material/DnsTwoTone';
import NewReleasesTwoToneIcon from '@mui/icons-material/NewReleasesTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  Chip,
  Unstable_Grid2 as Grid,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

export const GaugeChart = dynamic(() => import('react-gauge-chart'), { ssr: false });

const CardActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(2),
  top: theme.spacing(2),
  zIndex: 12,
}));

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
        lg={4}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3, md: 3.5 },
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <CardActions
            display="flex"
            alignItems="center"
          >
            <Chip
              label="+0.32%"
              color="success"
            />
          </CardActions>
          <AvatarState
            useShadow
            variant="rounded"
            state="success"
            sx={{
              width: theme.spacing(7),
              mx: 'auto',
              height: theme.spacing(7),
            }}
          >
            <AssessmentTwoToneIcon />
          </AvatarState>
          <Typography
            sx={{
              pt: { xs: 2, sm: 3, md: 3.5 },
            }}
            variant="h3"
          >
            Hal9000
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            In the last 7 days, the server health has been{' '}
            <Typography
              component="span"
              color="success.main"
            >
              <b>regular</b>
            </Typography>{' '}
            and health was good.
          </Typography>
          <Box
            sx={{
              mx: 'auto',
              mt: { xs: 2, sm: 3 },
              mb: 0.5,
              maxWidth: '340px',
            }}
          >
            <GaugeChart
              //@ts-ignore
              hideText
              nrOfLevels={6}
              colors={[
                theme.palette.error.main,
                theme.palette.warning.main,
                theme.palette.success.main,
              ]}
              needleColor={
                theme.palette.mode === 'dark'
                  ? theme.palette.neutral[800]
                  : theme.palette.neutral[400]
              }
              needleBaseColor={
                theme.palette.mode === 'dark'
                  ? theme.palette.neutral[400]
                  : theme.palette.neutral[900]
              }
              arcWidth={0.3}
              percent={0.27}
            />
          </Box>
          <Button
            sx={{
              px: 2.5,
              py: 0.5,

              borderRadius: 10,
              background: 'transparent',
              color: theme.palette.success.main,
              border: theme.palette.success.main + ' solid 2px',

              '&:hover': {
                px: 3,
                background: theme.palette.success.main,
                color: theme.palette.success.contrastText,
                boxShadow: theme.shadows[2],
              },
              '&:active': {
                boxShadow: 'none',
              },
            }}
            variant="contained"
            color="success"
          >
            {t('View dashboard')}
          </Button>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={4}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3, md: 3.5 },
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <CardActions
            display="flex"
            alignItems="center"
          >
            <Chip
              label="+76.55%"
              color="warning"
            />
          </CardActions>
          <AvatarState
            useShadow
            variant="rounded"
            state="error"
            sx={{
              width: theme.spacing(7),
              mx: 'auto',
              height: theme.spacing(7),
            }}
          >
            <NewReleasesTwoToneIcon />
          </AvatarState>
          <Typography
            sx={{
              pt: { xs: 2, sm: 3, md: 3.5 },
            }}
            variant="h3"
          >
            Optimus
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            This server has a warning because the load is{' '}
            <Typography
              component="span"
              color="error.main"
            >
              <b>very high</b>
            </Typography>{' '}
            at the moment.
          </Typography>
          <Box
            sx={{
              mx: 'auto',
              mt: { xs: 2, sm: 3 },
              mb: 0.5,
              maxWidth: '340px',
            }}
          >
            <GaugeChart
              //@ts-ignore
              hideText
              nrOfLevels={6}
              colors={[theme.palette.error.light, theme.palette.error.main]}
              needleColor={
                theme.palette.mode === 'dark'
                  ? theme.palette.neutral[800]
                  : theme.palette.neutral[400]
              }
              needleBaseColor={
                theme.palette.mode === 'dark'
                  ? theme.palette.neutral[400]
                  : theme.palette.neutral[900]
              }
              arcWidth={0.3}
              percent={0.86}
            />
          </Box>
          <Button
            sx={{
              px: 2.5,
              py: 0.5,

              borderRadius: 10,
              background: 'transparent',
              color: theme.palette.error.main,
              border: theme.palette.error.main + ' solid 2px',

              '&:hover': {
                px: 3,
                background: theme.palette.error.main,
                color: theme.palette.error.contrastText,
                boxShadow: theme.shadows[3],
              },
              '&:active': {
                boxShadow: 'none',
              },
            }}
            variant="contained"
            color="error"
          >
            {t('View dashboard')}
          </Button>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={4}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3, md: 3.5 },
            textAlign: 'center',
            position: 'relative',
            background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%) !important',
          }}
        >
          <CardActions
            display="flex"
            alignItems="center"
          >
            <Chip
              label="+3.22%"
              color="secondary"
              sx={{
                background: alpha(theme.palette.common.white, 0.08),
                color: 'common.white',
              }}
            />
          </CardActions>
          <AvatarState
            useShadow
            variant="rounded"
            state="secondary"
            sx={{
              width: theme.spacing(7),
              mx: 'auto',
              height: theme.spacing(7),
              color: 'common.white',
              background: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%) !important',
            }}
          >
            <DnsTwoToneIcon />
          </AvatarState>
          <Typography
            sx={{
              color: theme.palette.common.white,
              pt: { xs: 2, sm: 3, md: 3.5 },
            }}
            variant="h3"
          >
            Kitt2
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: alpha(theme.palette.common.white, 0.7),
            }}
          >
            The Kitt2 server has a{' '}
            <Typography
              component="span"
              variant="subtitle2"
              sx={{
                color: theme.palette.common.white,
              }}
            >
              <b>very low</b>
            </Typography>{' '}
            load at the moment, similar to last 7 days.
          </Typography>
          <Box
            sx={{
              mx: 'auto',
              mt: { xs: 2, sm: 3 },
              mb: 0.5,
              maxWidth: '340px',
            }}
          >
            <GaugeChart
              //@ts-ignore
              hideText
              nrOfLevels={6}
              colors={[alpha(theme.palette.common.white, 0.1), theme.palette.common.white]}
              needleColor={alpha(theme.palette.common.white, 0.3)}
              needleBaseColor={theme.palette.common.white}
              arcWidth={0.3}
              percent={0.21}
            />
          </Box>
          <Button
            sx={{
              px: 2.5,
              py: 0.5,

              borderRadius: 10,
              background: 'transparent',
              color: theme.palette.common.white,
              border: `${theme.palette.common.white} solid 2px`,

              '&:hover': {
                px: 3,
                background: theme.palette.common.white,
                color: theme.palette.common.black,
              },
            }}
            variant="contained"
            color="error"
          >
            {t('View dashboard')}
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component;
