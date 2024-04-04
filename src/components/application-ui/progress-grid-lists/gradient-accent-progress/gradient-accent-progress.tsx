import { alpha, Box, Card, Stack, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { DividerLight } from 'src/components/base/styles/card';
import {
  LinearProgressGradientGreen,
  LinearProgressGradientOrange,
  LinearProgressGradientPurple,
} from 'src/components/base/styles/progress-bar';

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Card
      sx={{
        background: 'linear-gradient(60deg, #29323c 0%, #485563 100%) !important',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        divider={
          <DividerLight
            flexItem
            orientation={smUp ? 'vertical' : 'horizontal'}
          />
        }
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Box
          p={{ xs: 2, sm: 3 }}
          flex={1}
          width="100%"
        >
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.common.white,
            }}
          >
            76%
          </Typography>
          <LinearProgressGradientGreen
            sx={{
              my: 1,
            }}
            variant="determinate"
            value={76}
          />
          <Typography
            variant="subtitle1"
            sx={{
              color: alpha(theme.palette.common.white, 0.7),
            }}
          >
            {t('Sales')}
          </Typography>
        </Box>
        <Box
          p={{ xs: 2, sm: 3 }}
          flex={1}
          width="100%"
        >
          <Typography
            sx={{
              color: theme.palette.warning.light,
            }}
            variant="h2"
          >
            43%
          </Typography>
          <LinearProgressGradientOrange
            sx={{
              my: 1,
            }}
            variant="determinate"
            value={43}
          />
          <Typography
            variant="subtitle1"
            sx={{
              color: alpha(theme.palette.common.white, 0.7),
            }}
          >
            {t('Profiles')}
          </Typography>
        </Box>
        <Box
          p={{ xs: 2, sm: 3 }}
          flex={1}
          width="100%"
        >
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.common.white,
            }}
          >
            59%
          </Typography>
          <LinearProgressGradientPurple
            sx={{
              my: 1,
            }}
            variant="determinate"
            value={59}
          />
          <Typography
            variant="subtitle1"
            sx={{
              color: alpha(theme.palette.common.white, 0.7),
            }}
          >
            {t('Tickets')}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}

export default Component;
