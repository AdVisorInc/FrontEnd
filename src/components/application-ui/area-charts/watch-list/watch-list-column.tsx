import {
  alpha,
  Avatar,
  Box,
  Card,
  Chip,
  Unstable_Grid2 as Grid,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

const AvatarWrapper = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(0, 0, 1, -0.5),
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

const chartValues = [8531, 6318, 9509, 5143, 6048, 12614, 11206];
const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

const CryptoCard = ({ name, symbol, imageSrc, value, percentageChange, chipLabel }) => {
  const theme = useTheme();

  return (
    <Grid
      lg={4}
      md={6}
      xs={12}
    >
      <Card>
        <Box sx={{ p: { xs: 2, sm: 3 } }}>
          <Box
            display="flex"
            alignItems="center"
          >
            <AvatarWrapper>
              <img
                alt={symbol}
                src={imageSrc}
              />
            </AvatarWrapper>
            <Box>
              <Typography
                variant="h4"
                noWrap
              >
                {name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                noWrap
              >
                {symbol}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            pt={{ xs: 2, sm: 3 }}
          >
            <Typography
              variant="h2"
              sx={{ pr: 1, mb: 1 }}
            >
              {value}
            </Typography>
            <Typography color={percentageChange > 0 ? 'success.main' : 'error.main'}>
              <b>{percentageChange}%</b>
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Chip
              label={chipLabel}
              color={percentageChange > 0 ? 'success' : 'error'}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ pl: 1 }}
            >
              last 24h
            </Typography>
          </Box>
        </Box>
        <LineChart
          height={193}
          leftAxis={null}
          margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
          bottomAxis={null}
          slotProps={{ legend: { hidden: true } }}
          series={[
            {
              data: chartValues,
              label: 'Sales',
              area: true,
              color: theme.palette.primary.main,
              showMark: false,
            },
          ]}
          xAxis={[{ scaleType: 'point', data: xLabels }]}
          sx={{
            '.MuiLineElement-root': {
              strokeWidth: 2,
            },

            '.MuiAreaElement-root': {
              fill: "url('#primaryGradient')",
              fillOpacity: theme.palette.mode === 'dark' ? 0.44 : 1,
            },
          }}
        >
          <defs>
            <linearGradient
              id="primaryGradient"
              gradientTransform="rotate(90)"
            >
              <stop
                offset="0%"
                stopColor={theme.palette.primary.light}
              />
              <stop
                offset="100%"
                stopColor={theme.palette.background.paper}
              />
            </linearGradient>
          </defs>
        </LineChart>
      </Card>
    </Grid>
  );
};

function WatchListColumn() {
  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3 }}
    >
      <CryptoCard
        name="Bitcoin"
        symbol="BTC"
        imageSrc="/placeholders/logo/bitcoin.png"
        value="$56,475.99"
        percentageChange={12.5}
        chipLabel="+$500"
      />
      <CryptoCard
        name="Ethereum"
        symbol="ETH"
        imageSrc="/placeholders/logo/ethereum.png"
        value="$1,968.00"
        percentageChange={-3.24}
        chipLabel="-$90"
      />
      <CryptoCard
        name="Cardano"
        symbol="ADA"
        imageSrc="/placeholders/logo/cardano.png"
        value="$23.00"
        percentageChange={-0.33}
        chipLabel="-$5"
      />
    </Grid>
  );
}

export default WatchListColumn;
