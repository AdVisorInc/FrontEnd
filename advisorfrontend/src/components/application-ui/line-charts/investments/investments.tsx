import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Switch,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AvatarState } from 'src/components/base/styles/avatar';

function Investments() {
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const data = {
    amount: '$54,348.55',
    amountIncrease: '$12,475.44',
    amountPercent: '+ 3.24%',
    wallet: '$5,348.73',
    shares: '$785.00',
  };

  const [state, setState] = useState({
    interest: true,
  });

  const interestActivate = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const stocksData = [4000, 4500, 4700, 5300, 5600, 5900, 6100];
  const bondsData = [3000, 3100, 3200, 3300, 3400, 3500, 3600];
  const timeLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  return (
    <Card>
      <CardHeader title={t('Investments')} />
      <Divider />
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
        p={{ xs: 2, sm: 3, md: 4 }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              mb: 1.5,
            }}
          >
            {data.amount}
          </Typography>
          <Box
            display="flex"
            alignItems="center"
          >
            <Chip
              variant="outlined"
              label={data.amountIncrease}
              color="success"
            />
            <Typography
              variant="subtitle1"
              fontWeight={700}
              sx={{
                ml: 1,
              }}
            >
              {data.amountPercent}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography
            variant="subtitle2"
            color="text.secondary"
          >
            {t('Interest')}
          </Typography>
          <Switch
            checked={state.interest}
            onChange={interestActivate}
            color="primary"
            name="interest"
          />
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        ml={{ xs: 2, sm: 3, md: 4 }}
      >
        <Box
          display="flex"
          alignItems="center"
          sx={{
            mr: { xs: 3, sm: 4, md: 5 },
          }}
        >
          <AvatarState
            state="info"
            isSoft
            sx={{
              mr: 1,
              width: 44,
              height: 44,
            }}
            variant="rounded"
          >
            <AttachMoneyTwoToneIcon />
          </AvatarState>
          <Box>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              noWrap
            >
              {t('USD Wallet')}
            </Typography>
            <Typography variant="h5">{data.wallet}</Typography>
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="center"
        >
          <AvatarState
            state="warning"
            isSoft
            sx={{
              mr: 1,
              width: 44,
              height: 44,
            }}
            variant="rounded"
          >
            <MonetizationOnTwoToneIcon />
          </AvatarState>
          <Box>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              noWrap
            >
              {t('Shares')}
            </Typography>
            <Typography variant="h5">{data.shares}</Typography>
          </Box>
        </Box>
      </Box>
      <Divider
        sx={{
          mt: { xs: 2, sm: 3 },
        }}
      />
      <Box
        px={{ xs: 2, sm: 3 }}
        pt={{ xs: 2, sm: 3 }}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <LineChart
          height={280}
          slotProps={{
            legend: {
              labelStyle: {
                fontWeight: 500,
              },
              itemMarkWidth: 16,
              itemMarkHeight: 16,
              markGap: 8,
              itemGap: 16,
              position: { vertical: 'top', horizontal: 'right' },
              padding: { bottom: 6 },
            },
          }}
          series={[
            {
              data: stocksData,
              label: 'Stocks',
              curve: 'monotoneX',
              id: 'pvId',
              color: theme.palette.primary.main,
            },

            {
              data: bondsData,
              curve: 'linear',
              label: 'Bonds',
              id: 'uvId',
              color: theme.palette.error.main,
            },
          ]}
          margin={{ left: smUp ? 54 : 12, right: 12 }}
          xAxis={[{ scaleType: 'point', data: timeLabels }]}
          sx={{
            '.MuiLineElement-root, .MuiMarkElement-root': {
              strokeWidth: 1,
            },
            '.MuiLineElement-series-pvId': {
              strokeDasharray: '5 5',
            },
            '.MuiLineElement-series-uvId': {
              strokeDasharray: '3 4 5 2',
            },
            '.MuiMarkElement-root:not(.MuiMarkElement-highlighted)': {
              fill: theme.palette.background.paper,
            },
            '& .MuiMarkElement-highlighted': {
              stroke: 'none',
            },
            '.MuiChartsLegend-mark': {
              rx: theme.shape.borderRadius / 2,
            },
            '.MuiChartsAxis-left': {
              display: { xs: 'none', sm: 'block' },
            },
          }}
        />
      </Box>
      <Divider />
      <Box p={2}>
        <Button variant="outlined">{t('View all investments')}</Button>
      </Box>
    </Card>
  );
}

export default Investments;
