import TrendingDownTwoToneIcon from '@mui/icons-material/TrendingDownTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  Chip,
  Divider,
  Stack,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useTranslation } from 'react-i18next';

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(0, 0, 0, -0.5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(1),
  padding: theme.spacing(0.5),
  borderRadius: '60px',
  height: theme.spacing(7),
  width: theme.spacing(7),
  background:
    theme.palette.mode === 'dark'
      ? alpha(theme.palette.common.white, 0.3)
      : alpha(theme.palette.common.black, 0.07),

  '& img': {
    background: theme.palette.common.white,
    padding: theme.spacing(0.5),
    display: 'block',
    borderRadius: 'inherit',
    height: theme.spacing(6),
    width: theme.spacing(6),
  },
}));

function WatchListRow() {
  const { t } = useTranslation();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Card>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-evenly"
        alignItems="stretch"
        divider={
          <Divider
            orientation={mdUp ? 'vertical' : 'horizontal'}
            flexItem
          />
        }
      >
        <Box
          sx={{
            width: '100%',
            px: { xs: 2, sm: 3 },
            pt: { xs: 2, sm: 3 },
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <AvatarWrapper>
                <img
                  alt="BTC"
                  src="/placeholders/logo/bitcoin.png"
                />
              </AvatarWrapper>
              <Box>
                <Typography
                  variant="h4"
                  noWrap
                >
                  Bitcoin
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  noWrap
                  lineHeight={1}
                >
                  BTC
                </Typography>
              </Box>
            </Box>
            <Chip
              label="24h"
              color="secondary"
            />
          </Box>
          <Box
            my={{ xs: 2, sm: 3 }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1,
                }}
              >
                $56,475.99
              </Typography>
              <Typography color="success.main">
                <b>+12.5%</b>
              </Typography>
            </Box>
            <TrendingUpTwoToneIcon sx={{ color: 'success.main' }} />
          </Box>
          <SparkLineChart
            data={[55.701, 57.598, 48.607, 46.439, 58.755, 46.978, 58.16]}
            height={140}
            curve="natural"
            colors={[theme.palette.success.light]}
            sx={{
              '.MuiLineElement-root': {
                strokeWidth: 4,
                strokeLinecap: 'round',
                strokeOpacity: theme.palette.mode === 'dark' ? 0.66 : 1,
              },
            }}
            showHighlight={false}
            showTooltip={true}
          />
        </Box>
        <Box
          sx={{
            width: '100%',
            px: { xs: 2, sm: 3 },
            pt: { xs: 2, sm: 3 },
          }}
        >
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <AvatarWrapper>
                <img
                  alt="ETH"
                  src="/placeholders/logo/ethereum.png"
                />
              </AvatarWrapper>
              <Box>
                <Typography
                  variant="h4"
                  noWrap
                >
                  Ethereum
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  noWrap
                  lineHeight={1}
                >
                  ETH
                </Typography>
              </Box>
            </Box>
            <Chip
              label="24h"
              color="secondary"
            />
          </Box>
          <Box
            my={{ xs: 2, sm: 3 }}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  pr: 1,
                }}
              >
                $1,968.00
              </Typography>
              <Typography color="error.main">
                <b>-3.24%</b>
              </Typography>
            </Box>
            <TrendingDownTwoToneIcon
              sx={{
                color: 'error.main',
              }}
            />
          </Box>
          <SparkLineChart
            data={[2.854, 2.873, 2.592, 2.109, 2.909, 2.942, 2.884]}
            height={140}
            colors={[theme.palette.error.light]}
            curve="natural"
            sx={{
              '.MuiLineElement-root': {
                strokeWidth: 4,
                strokeLinecap: 'round',
                strokeOpacity: theme.palette.mode === 'dark' ? 0.66 : 1,
              },
            }}
            showHighlight={false}
            showTooltip={true}
          />
        </Box>
      </Stack>
      <Divider />
      <CardActions
        disableSpacing
        sx={{
          p: { xs: 2, sm: 3 },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button variant="outlined">{t('View more assets')}</Button>
      </CardActions>
    </Card>
  );
}

export default WatchListRow;
