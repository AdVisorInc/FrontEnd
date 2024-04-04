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
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const GaugeChart = dynamic(() => import('react-gauge-chart'), { ssr: false });

const LabelErrorAlt = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  alignItems: 'center',
  background: theme.palette.error.main,
  color: theme.palette.error.contrastText,
  textTransform: 'uppercase',
  fontWeight: 600,
  padding: theme.spacing(0.5, 1),
  lineHeight: 1,
  borderRadius: theme.shape.borderRadius,
}));

const CardWrapper = styled(Card)(({ theme }) => ({
  transition: theme.transitions.create(['box-shadow']),
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
  },
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();

  const [currentPercent1, setCurrentPercent1] = useState<number>();
  const [currentPercent2, setCurrentPercent2] = useState<number>();
  const [currentPercent3, setCurrentPercent3] = useState<number>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPercent1(Math.random());
      setCurrentPercent2(Math.random());
      setCurrentPercent3(Math.random());
    }, 1900);

    return () => {
      clearTimeout(timer);
    };
  });

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
            pb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h4"
              noWrap
            >
              {t('Weekly Sales')}
            </Typography>
            <Typography
              variant="h4"
              color="success.main"
            >
              $43,346.45
            </Typography>
          </Box>
          <Box
            sx={{
              mx: 'auto',
              maxWidth: '340px',
            }}
          >
            <GaugeChart
              arcPadding={0.1}
              cornerRadius={3}
              textColor={theme.palette.neutral[600]}
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
              colors={[alpha(theme.palette.success.main, 0.2), theme.palette.success.main]}
              percent={currentPercent1}
              animDelay={0}
            />
          </Box>
          <Divider />
          <Box
            pt={3}
            mb={2}
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
            pb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h4"
              noWrap
            >
              {t('Returning Visitors')}
            </Typography>
            <Typography
              variant="h4"
              color="warning.main"
            >
              21,585
            </Typography>
          </Box>
          <Box
            sx={{
              mx: 'auto',
              maxWidth: '340px',
            }}
          >
            <GaugeChart
              arcPadding={0.1}
              cornerRadius={3}
              textColor={theme.palette.neutral[600]}
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
              colors={[alpha(theme.palette.warning.main, 0.2), theme.palette.warning.main]}
              percent={currentPercent2}
              animDelay={0}
            />
          </Box>
          <Divider />
          <Box
            pt={3}
            mb={2}
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
                background: alpha(theme.palette.warning.main, 0.1),
                color: theme.palette.warning.main,
              }}
            >
              <KeyboardArrowDownTwoToneIcon />
            </Avatar>
            <Typography
              variant="h5"
              color="warning.main"
            >
              + 1.25%
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
          }}
        >
          <Box
            pb={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h4"
              noWrap
            >
              {t('Monthly Expenses')}
            </Typography>
            <LabelErrorAlt>$8,594</LabelErrorAlt>
          </Box>
          <Box
            sx={{
              mx: 'auto',
              maxWidth: '340px',
            }}
          >
            <GaugeChart
              arcPadding={0.1}
              cornerRadius={3}
              textColor={theme.palette.neutral[600]}
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
              colors={[alpha(theme.palette.error.main, 0.1), theme.palette.error.main]}
              percent={currentPercent3}
              animDelay={0}
            />
          </Box>
          <Divider />
          <Box
            pt={3}
            mb={2}
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
              - 23.5%
            </Typography>
          </Box>
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            Your expenses are bigger than income. You need to improve this metric soon!
          </Typography>
        </CardWrapper>
      </Grid>
    </Grid>
  );
}

export default Component;
