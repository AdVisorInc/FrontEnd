import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import KeyboardArrowUpTwoToneIcon from '@mui/icons-material/KeyboardArrowUpTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useTranslation } from 'react-i18next';

const LabelError = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  background: alpha(theme.palette.error.main, 0.1),
  border: `${theme.palette.error.main} solid 2px`,
  color: theme.palette.error.main,
  textTransform: 'uppercase',
  fontSize: theme.typography.pxToRem(14),
  fontWeight: 700,
  padding: theme.spacing(0.5, 2, 0.5, 1),
  borderRadius: '80px',
}));

const LabelErrorAlt = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  alignItems: 'center',
  background: theme.palette.error.main,
  color: theme.palette.error.contrastText,
  textTransform: 'uppercase',
  fontSize: theme.typography.pxToRem(11),
  fontWeight: 600,
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.shape.borderRadius,
}));

const CardWrapper = styled(Card)(({ theme }) => ({
  transition: theme.transitions.create(['transform', 'box-shadow']),
  transform: 'scale(1)',
  position: 'relative',
  zIndex: 5,

  '&:hover': {
    zIndex: 6,
    boxShadow: `
      0 0.56875rem 3.3rem ${theme.palette.background.default},
      0 0.9975rem 2.4rem ${alpha(theme.palette.common.black, 0.07)},
      0 0.35rem 1rem ${alpha(theme.palette.common.black, 0.1)},
      0 0.225rem 0.8rem ${alpha(theme.palette.common.black, 0.15)},
    `,
    transform: 'scale(1.01)',
  },
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  const data = {
    percentage1: 63.58,
    percentage2: 87,
    percentage3: 75,
  };

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
        <CardWrapper
          sx={{
            p: { xs: 2, sm: 3 },
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h4">{t('Weekly Sales')}</Typography>
            <Typography
              variant="h4"
              color="success.main"
            >
              $65,485.99
            </Typography>
          </Box>
          <Box
            sx={{
              mx: 'auto',
              my: 2,
              maxWidth: '210px',
            }}
          >
            <CircularProgressbarWithChildren
              circleRatio={1}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 4,
                trailColor: alpha(theme.palette.neutral[300], 0.2),
                pathColor: theme.palette.primary.main,
                strokeLinecap: 'round',
              })}
              strokeWidth={7}
              value={data.percentage1}
            >
              <Typography
                sx={{
                  color: theme.palette.primary.main,
                  mt: -1.7,
                }}
                variant="h3"
                fontWeight={600}
              >
                {`${data.percentage1}%`}
              </Typography>
            </CircularProgressbarWithChildren>
          </Box>
          <Divider />
          <Box
            my={2}
            display="flex"
            alignItems="center"
          >
            <Avatar
              variant="rounded"
              sx={{
                mr: 1,
                width: 28,
                height: 28,
                p: 0,
                background: alpha(theme.palette.success.main, 0.1),
                color: theme.palette.success.main,
              }}
            >
              <KeyboardArrowDownTwoToneIcon />
            </Avatar>
            <Typography
              variant="h5"
              color="success.main"
            >
              + 58.3%
            </Typography>
          </Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            You had a 58% increase in sales during the last 7 days. Keep up the good work!
          </Typography>
        </CardWrapper>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <CardWrapper
          sx={{
            p: { xs: 2, sm: 3 },
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h4">{t('Returning Visitors')}</Typography>
            <Typography
              variant="h4"
              color="warning.main"
            >
              125,43k
            </Typography>
          </Box>
          <Box
            sx={{
              mx: 'auto',
              mt: 2,
              maxWidth: '230px',
            }}
          >
            <CircularProgressbarWithChildren
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2.2 + 1 / 5.85,
                trailColor: alpha(theme.palette.warning.main, 0.15),
                pathColor: theme.palette.warning.main,
                strokeLinecap: 'round',
              })}
              strokeWidth={7}
              value={data.percentage2}
            >
              <LabelError
                sx={{
                  mt: -1.5,
                }}
              >
                <ArrowUpwardTwoToneIcon
                  sx={{
                    mr: 0.5,
                  }}
                />
                <span>1,65k</span>
              </LabelError>
              <Typography
                sx={{
                  mt: 0.5,
                }}
                variant="subtitle1"
                color="text.secondary"
                fontWeight={400}
              >
                {t('last week')}
              </Typography>
            </CircularProgressbarWithChildren>
          </Box>
          <Divider />
          <Box
            my={2}
            display="flex"
            alignItems="center"
          >
            <Avatar
              variant="rounded"
              sx={{
                mr: 1,
                width: 28,
                height: 28,
                p: 0,
                background: alpha(theme.palette.warning.main, 0.15),
                color: theme.palette.warning.main,
              }}
            >
              <KeyboardArrowDownTwoToneIcon />
            </Avatar>
            <Typography
              variant="h5"
              color="warning.main"
            >
              -23.66%
            </Typography>
          </Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            You missed your target visitors numbers by 23.66%. Improve your ratings!
          </Typography>
        </CardWrapper>
      </Grid>
      <Grid
        xs={12}
        lg={4}
        md={6}
      >
        <CardWrapper
          sx={{
            p: { xs: 2, sm: 3 },
            background: 'linear-gradient(60deg, #29323c 0%, #485563 100%) !important',
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                color: theme.palette.common.white,
              }}
              variant="h4"
            >
              {t('Monthly Expenses')}
            </Typography>
            <LabelErrorAlt>$45,654</LabelErrorAlt>
          </Box>
          <Box
            sx={{
              mx: 'auto',
              my: 2,
              maxWidth: '210px',
            }}
          >
            <CircularProgressbarWithChildren
              circleRatio={1}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 4,
                trailColor: alpha(theme.palette.common.white, 0.1),
                pathColor: theme.palette.error.main,
                strokeLinecap: 'round',
              })}
              strokeWidth={7}
              value={data.percentage3}
            >
              <Typography
                sx={{
                  color: theme.palette.common.white,
                  mt: -1.7,
                }}
                variant="h3"
                fontWeight={600}
              >
                {`${data.percentage3}%`}
              </Typography>
            </CircularProgressbarWithChildren>
          </Box>
          <Divider
            sx={{
              borderColor: alpha(theme.palette.common.white, 0.1),
            }}
          />
          <Box
            my={2}
            display="flex"
            alignItems="center"
          >
            <Avatar
              variant="rounded"
              sx={{
                mr: 1,
                width: 28,
                height: 28,
                p: 0,
                background: theme.palette.error.main,
                color: theme.palette.error.contrastText,
              }}
            >
              <KeyboardArrowUpTwoToneIcon />
            </Avatar>
            <Typography
              variant="h5"
              color="error.main"
            >
              - 23.68%
            </Typography>
          </Box>
          <Typography
            sx={{
              color: alpha(theme.palette.common.white, 0.7),
            }}
            variant="subtitle2"
          >
            You're expenses are bigger than income. Do something to fix this!
          </Typography>
        </CardWrapper>
      </Grid>
    </Grid>
  );
}

export default Component;
