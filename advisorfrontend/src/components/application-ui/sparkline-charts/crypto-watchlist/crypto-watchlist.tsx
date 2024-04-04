import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import TrendingDownTwoToneIcon from '@mui/icons-material/TrendingDownTwoTone';
import TrendingFlatTwoToneIcon from '@mui/icons-material/TrendingFlatTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import ViewStreamTwoToneIcon from '@mui/icons-material/ViewStreamTwoTone';
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
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { useTranslation } from 'react-i18next';

const generateRandomData = (): number[] =>
  Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000));

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  background: theme.palette.common.white,
  marginRight: theme.spacing(1),
  height: theme.spacing(4),
  width: theme.spacing(4),
}));

function Component0() {
  const { t } = useTranslation();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Card>
      <Box
        p={{ xs: 2, sm: 3 }}
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box textAlign={{ xs: 'center', sm: 'left' }}>
          <Typography variant="h5">{t('Crypto Watchlist')}</Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{
              mb: { xs: 2, sm: 0 },
            }}
          >
            {t('List of all crypto assets you are following')}
          </Typography>
        </Box>
        <ToggleButtonGroup
          exclusive
          color="success"
        >
          <ToggleButton
            selected
            value="1"
          >
            <ViewStreamTwoToneIcon />
          </ToggleButton>
          <ToggleButton value="2">
            <GridViewTwoToneIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Divider />
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
        spacing={0}
      >
        <Box
          sx={{
            width: '100%',
            p: { xs: 2, sm: 3 },
            '&:hover': {
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
            },
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
              <AvatarWrapper
                alt="BTC"
                src="/placeholders/logo/bitcoin.png"
              />
              <Box>
                <Typography
                  variant="h5"
                  noWrap
                >
                  Bitcoin
                </Typography>
                <Typography
                  variant="subtitle2"
                  noWrap
                  color="text.secondary"
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
            mt={3}
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
                variant="h3"
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
          <Box pt={2}>
            <SparkLineChart
              data={generateRandomData()}
              height={100}
              curve="natural"
              margin={{ top: 12, bottom: 12, left: 0, right: 0 }}
              colors={[theme.palette.primary.main]}
              sx={{ '.MuiLineElement-root': { strokeWidth: 2, strokeLinecap: 'round' } }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            p: { xs: 2, sm: 3 },
            '&:hover': {
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
            },
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
              <AvatarWrapper
                alt="ETH"
                src="/placeholders/logo/ethereum.png"
              />
              <Box>
                <Typography
                  variant="h5"
                  noWrap
                >
                  Ethereum
                </Typography>
                <Typography
                  variant="subtitle2"
                  noWrap
                  color="text.secondary"
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
            mt={3}
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
          <Box pt={2}>
            <SparkLineChart
              data={generateRandomData()}
              height={100}
              curve="natural"
              margin={{ top: 12, bottom: 12, left: 0, right: 0 }}
              colors={[theme.palette.primary.main]}
              sx={{ '.MuiLineElement-root': { strokeWidth: 2, strokeLinecap: 'round' } }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            p: { xs: 2, sm: 3 },
            '&:hover': {
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? alpha(theme.palette.neutral[25], 0.02)
                  : 'neutral.25',
            },
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
              <AvatarWrapper
                alt="ADA"
                src="/placeholders/logo/cardano.png"
              />
              <Box>
                <Typography
                  variant="h5"
                  noWrap
                >
                  Cardano
                </Typography>
                <Typography
                  variant="subtitle2"
                  noWrap
                  color="text.secondary"
                >
                  ADA
                </Typography>
              </Box>
            </Box>
            <Chip
              label="24h"
              color="secondary"
            />
          </Box>
          <Box
            mt={3}
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
                $23.00
              </Typography>
              <Typography color="error.main">
                <b>-0.33%</b>
              </Typography>
            </Box>
            <TrendingFlatTwoToneIcon
              sx={{
                color: theme.palette.warning.main,
              }}
            />
          </Box>
          <Box pt={2}>
            <SparkLineChart
              data={generateRandomData()}
              height={100}
              curve="natural"
              margin={{ top: 12, bottom: 12, left: 0, right: 0 }}
              colors={[theme.palette.primary.main]}
              sx={{ '.MuiLineElement-root': { strokeWidth: 2, strokeLinecap: 'round' } }}
            />
          </Box>
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
        <Button variant="outlined">{t('Discover more assets')}</Button>
      </CardActions>
    </Card>
  );
}

export default Component0;
