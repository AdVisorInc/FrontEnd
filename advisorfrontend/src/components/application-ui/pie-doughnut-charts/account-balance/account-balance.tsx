import TrendingUp from '@mui/icons-material/TrendingUp';
import {
  alpha,
  Box,
  Button,
  Card,
  Divider,
  Unstable_Grid2 as Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { DefaultizedPieValueType } from '@mui/x-charts';
import { pieArcLabelClasses, PieChart } from '@mui/x-charts/PieChart';
import { Fragment, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AvatarState } from 'src/components/base/styles/avatar';
import { fetchAdData } from '../../../../slices/analytics';

type PlatformData = {
  symbol: string;
  name: string;
  logoSrc: string;
  percentage: string;
  change: string;
  changeColor: 'success.main' | 'error.main';
};

const PlatformData: PlatformData[] = [
  {
    symbol: 'Google',
    name: 'Google',
    logoSrc: '/placeholders/logo/google-icon.svg',
    percentage: '40%',
    change: '+2.54%',
    changeColor: 'success.main',
  },
  {
    symbol: 'Meta',
    name: 'Meta',
    logoSrc: '/placeholders/logo/meta-logo.svg',
    percentage: '40%',
    change: '-1.22%',
    changeColor: 'error.main',
  },
  {
    symbol: 'X',
    name: 'X',
    logoSrc: '/placeholders/logo/x-logo.svg',
    percentage: '20%',
    change: '+10.50%',
    changeColor: 'success.main',
  },
];

const ListItemAvatarWrapper = styled(ListItemAvatar)(({ theme }) => ({
  minWidth: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(1),
  padding: theme.spacing(0.5),
  borderRadius: '60px',
  background:
    theme.palette.mode === 'dark'
      ? alpha(theme.palette.common.white, 0.3)
      : alpha(theme.palette.common.black, 0.07),

  img: {
    background: theme.palette.common.white,
    padding: theme.spacing(1),
    display: 'block',
    borderRadius: 'inherit',
    height: theme.spacing(5.5),
    width: theme.spacing(5.5),
  },
}));

function AccountBalance() {
  const { t } = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdData('120207851692320476')); // Replace 'your-ad-id' with the actual ID if dynamic
  }, [dispatch]);

  const data = [
    { label: 'Google', color: theme.palette.error.main, value: 40 },
    { label: 'Meta', color: theme.palette.success.main, value: 40 },
    { label: 'X', color: theme.palette.warning.main, value: 20 },
  ];

  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

  const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };

  return (
    <Card>
      <Grid
        spacing={0}
        container
      >
        <Grid
          xs={12}
          md={4}
          display="flex"
          alignItems="center"
        >
          <Stack
            flex={1}
            spacing={{ xs: 2, sm: 3 }}
            p={{ xs: 2, sm: 3 }}
          >
            <Typography variant="h4">{t('Total Ad Spend')}</Typography>
            <Box>
              <Typography variant="h1">$54,584.23</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
            >
              <AvatarState
                state="success"
                useShadow
                sx={{
                  mr: 2,
                  width: 64,
                  height: 64,
                }}
                variant="rounded"
              >
                <TrendingUp />
              </AvatarState>
              <Box>
                <Typography variant="h4">+ $3,594.00</Typography>
                <Typography
                  variant="subtitle2"
                  noWrap
                  color="text.secondary"
                >
                  {t('this month')}
                </Typography>
              </Box>
            </Box>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1}
            >
              <Button
                fullWidth
                variant="outlined"
              >
                {t('Send')}
              </Button>
              <Button
                fullWidth
                variant="contained"
              >
                {t('Receive')}
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          sx={{
            position: 'relative',
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
          }}
          display="flex"
          alignItems="center"
          xs={12}
          md={8}
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            flex={1}
            p={{ xs: 2, sm: 3 }}
            spacing={{ xs: 2, sm: 3 }}
          >
            <Box
              display="flex"
              justifyContent="center"
            >
              <PieChart
                series={[
                  {
                    data,
                    innerRadius: 55,
                    outerRadius: 100,
                    paddingAngle: 5,
                    cornerRadius: 8,
                    startAngle: 0,
                    endAngle: 360,
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    arcLabel: getArcLabel,
                  },
                ]}
                height={230}
                width={230}
                margin={{ right: 0 }}
                slotProps={{
                  legend: {
                    hidden: true,
                  },
                }}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fill: theme.palette.common.white,
                    fontWeight: 500,
                    fontSize: 14,
                  },
                }}
              />
            </Box>
            <Card
              variant="outlined"
              elevation={0}
              sx={{ flex: 1 }}
            >
              <List disablePadding>
                {PlatformData.map((data, index) => (
                  <Fragment key={data.symbol}>
                    <ListItem>
                      <ListItemAvatarWrapper>
                        <img
                          alt={data.symbol}
                          src={data.logoSrc}
                        />
                      </ListItemAvatarWrapper>
                      <ListItemText
                        primary={data.symbol}
                        primaryTypographyProps={{ variant: 'h5', noWrap: true }}
                        secondary={data.name}
                        secondaryTypographyProps={{
                          variant: 'subtitle2',
                          noWrap: true,
                        }}
                      />
                      <Box>
                        <Typography
                          align="right"
                          variant="h4"
                          noWrap
                        >
                          {data.percentage}
                        </Typography>
                        <Typography color={data.changeColor}>{data.change}</Typography>
                      </Box>
                    </ListItem>
                    {index !== PlatformData.length - 1 && <Divider />}
                  </Fragment>
                ))}
              </List>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}

export default AccountBalance;
