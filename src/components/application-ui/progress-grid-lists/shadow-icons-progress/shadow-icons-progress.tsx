import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import SubscriptionsTwoToneIcon from '@mui/icons-material/SubscriptionsTwoTone';
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
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';
import {
  LinearProgressAlternate,
  LinearProgressBlackAlternate,
} from 'src/components/base/styles/progress-bar';

const ButtonWrapper = styled(Button)(({ theme }) => ({
  transform: 'translateY(0px)',
  borderRadius: '50px',
  boxShadow: `0 .113rem .4rem ${alpha(theme.palette.common.black, 0.1)}, 0 .126rem .225rem ${alpha(
    theme.palette.common.black,
    0.08
  )}`,
  transition: theme.transitions.create(['transform', 'box-shadow']),
  fontWeight: 'normal',

  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 .413rem .6rem ${alpha(theme.palette.common.black, 0.2)}, 0 .126rem .2rem ${alpha(
      theme.palette.common.black,
      0.08
    )}`,
  },

  '&:active': {
    transform: 'translateY(-2px)',
    boxShadow: 'none',
  },
}));

function Component0() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3 },
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <AvatarState
              sx={{
                width: 58,
                height: 58,
              }}
              useShadow
              state="warning"
              variant="rounded"
            >
              <AssessmentTwoToneIcon />
            </AvatarState>
            <Chip
              label="+56.43%"
              color="warning"
            />
          </Box>
          <Typography
            sx={{
              mt: 3,
              mb: 2,
            }}
            variant="h4"
          >
            {t('Revolutionize Your Dashboard Experience')}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {t(
              ' The perfect tool to enhance productivity and decision-making in diverse business environments.'
            )}
            .
          </Typography>
          <LinearProgressAlternate
            sx={{
              my: { xs: 2, sm: 3 },
            }}
            variant="determinate"
            value={67.5}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <ButtonWrapper
              sx={{
                background: theme.palette.warning.main,
                color: theme.palette.warning.contrastText,

                '&:hover': {
                  background: theme.palette.warning.main,
                  color: theme.palette.warning.contrastText,
                },
              }}
              size="small"
              variant="contained"
            >
              {t('View project')}
            </ButtonWrapper>
            <Typography
              color="info.main"
              variant="subtitle2"
            >
              {t('In progress')}
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          sx={{
            p: { xs: 2, sm: 3 },
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <AvatarState
              sx={{
                width: 58,
                height: 58,
              }}
              useShadow
              state="error"
              variant="rounded"
            >
              <SubscriptionsTwoToneIcon />
            </AvatarState>
            <Chip
              label="-22.44%"
              color="error"
            />
          </Box>
          <Typography
            sx={{
              mt: 3,
              mb: 2,
            }}
            variant="h4"
          >
            {t('Revolutionize Your Dashboard Experience')}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {t(
              ' The perfect tool to enhance productivity and decision-making in diverse business environments.'
            )}
            .
          </Typography>
          <LinearProgressAlternate
            color="error"
            sx={{
              my: { xs: 2, sm: 3 },
            }}
            variant="determinate"
            value={67.5}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <ButtonWrapper
              sx={{
                background: theme.palette.error.main,
                color: theme.palette.error.contrastText,

                '&:hover': {
                  background: theme.palette.error.main,
                  color: theme.palette.error.contrastText,
                },
              }}
              size="small"
              variant="contained"
            >
              {t('View project')}
            </ButtonWrapper>
            <Typography
              sx={{
                color: 'error.main',
              }}
              variant="subtitle2"
            >
              {t('Overdue')}
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <Card
          variant="outlined"
          elevation={0}
          sx={{
            border: 0,
            background: 'linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%) !important',
            p: { xs: 2, sm: 3 },
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <AvatarState
              sx={{
                width: 58,
                height: 58,
              }}
              useShadow
              state="light"
              variant="rounded"
            >
              <MonetizationOnTwoToneIcon />
            </AvatarState>
            <Chip
              label="+22.54%"
              variant="filled"
              sx={{
                background: alpha(theme.palette.common.black, 0.12),
                color: 'common.black',
              }}
              color="secondary"
            />
          </Box>
          <Typography
            color="common.black"
            sx={{
              mt: 3,
              mb: 2,
            }}
            variant="h4"
          >
            {t('Revolutionize Your Dashboard Experience')}
          </Typography>
          <Typography
            color="common.black"
            variant="subtitle2"
          >
            {t(
              ' The perfect tool to enhance productivity and decision-making in diverse business environments.'
            )}
            .
          </Typography>
          <LinearProgressBlackAlternate
            sx={{
              my: { xs: 2, sm: 3 },
            }}
            variant="determinate"
            value={34.5}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <ButtonWrapper
              sx={{
                background: theme.palette.common.black,
                color: theme.palette.common.white,

                '&:hover': {
                  background: theme.palette.common.black,
                  color: theme.palette.common.white,
                },
              }}
              size="small"
              variant="contained"
            >
              {t('View project')}
            </ButtonWrapper>
            <Typography
              color="common.black"
              variant="subtitle2"
            >
              Finished
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Component0;
