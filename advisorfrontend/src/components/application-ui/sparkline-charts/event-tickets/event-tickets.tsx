import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import {
  alpha,
  Box,
  Card,
  Divider,
  IconButton,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useTranslation } from 'react-i18next';
import { DividerLight } from 'src/components/base/styles/card';
import {
  LinearProgressGradientGreen,
  LinearProgressGradientOrange,
  LinearProgressGradientPurple,
} from 'src/components/base/styles/progress-bar';

const generateRandomData = (): number[] =>
  Array.from({ length: 6 }, () => Math.floor(Math.random() * 500));

const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
  background:
    theme.palette.mode === 'dark'
      ? alpha(theme.palette.common.white, 0.04)
      : alpha(theme.palette.common.white, 0.1),
  transition: theme.transitions.create(['all']),
  color: alpha(theme.palette.common.white, 0.7),

  '&:hover': {
    background: alpha(theme.palette.common.white, 0.2),
    color: theme.palette.common.white,
  },
}));

function Component() {
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%) !important',
      }}
    >
      <Box
        p={{ xs: 2, sm: 3 }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.common.white,
            }}
          >
            {t('Event Tickets')}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: alpha(theme.palette.common.white, 0.7),
            }}
          >
            {t('See tickets sales progression')}
          </Typography>
        </Box>
        <IconButtonWrapper
          size="small"
          color="primary"
        >
          <MoreVertTwoToneIcon />
        </IconButtonWrapper>
      </Box>
      <Divider
        sx={{
          borderColor: alpha(theme.palette.common.white, 0.3),
        }}
      />
      <Box
        p={{ xs: 2, sm: 3 }}
        flex={1}
        sx={{
          background:
            theme.palette.mode === 'dark'
              ? alpha(theme.palette.common.white, 0.04)
              : alpha(theme.palette.common.white, 0.1),
        }}
      >
        <SparkLineChart
          plotType="line"
          height={180}
          curve="natural"
          showHighlight
          colors={[theme.palette.common.white]}
          margin={{ top: 0, bottom: 0, left: 12, right: 12 }}
          data={generateRandomData()}
          sx={{
            '.MuiLineElement-root': {
              strokeWidth: 4,
              strokeLinecap: 'round',
            },
            '.MuiHighlightElement-root': {
              strokeWidth: 2,
              scale: '1.2',
              stroke: theme.palette.neutral[900],
              fill: theme.palette.background.paper,
            },
          }}
        />
      </Box>
      <Divider
        sx={{
          borderColor: alpha(theme.palette.common.white, 0.3),
        }}
      />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        divider={
          <DividerLight
            flexItem
            sx={{
              display: { xs: 'flex', sm: 'none' },
            }}
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
              color: theme.palette.warning.main,
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
