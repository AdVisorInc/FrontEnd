import {
  Alert,
  alpha,
  Box,
  Card,
  CardHeader,
  Chip,
  Divider,
  Unstable_Grid2 as Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';

const ListItemWrapper = styled(ListItem)(({ theme }) => ({
  borderRadius: 0,
  padding: theme.spacing(2),
}));

interface ServerData {
  countryCode: string;
  city: string;
  website: string;
  status: 'active' | 'provisioning' | 'high risk';
  pageLoadTime: number;
}

const servers: ServerData[] = [
  { countryCode: 'DE', city: 'Frankfurt', website: 'mui.com', status: 'active', pageLoadTime: 36 },
  {
    countryCode: 'US',
    city: 'San Francisco',
    website: 'google.com',
    status: 'provisioning',
    pageLoadTime: 255,
  },
  {
    countryCode: 'ES',
    city: 'Barcelona',
    website: 'example.xyz',
    status: 'high risk',
    pageLoadTime: 387,
  },
  {
    countryCode: 'FR',
    city: 'Toulouse',
    website: 'city.example',
    status: 'high risk',
    pageLoadTime: 456,
  },
];

function ActiveServers() {
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const chartValues = [1008, 940, 1010, 821, 1035, 1030, 957];
  const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  const chartValues2 = [648, 745, 897, 743, 635, 842, 811];

  return (
    <Card>
      <CardHeader title={t('Active Servers')} />
      <Divider />
      <Grid container>
        <Grid
          xs={12}
          md
        >
          <List
            disablePadding
            component="div"
          >
            {servers.map((server) => (
              <React.Fragment key={server.countryCode}>
                <ListItemWrapper>
                  <ListItemAvatar
                    sx={{
                      minWidth: '68px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <ReactCountryFlag
                      style={{
                        width: '3.5em',
                        height: '3.5em',
                        borderRadius: '12px',
                      }}
                      countryCode={server.countryCode}
                      svg
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={server.city}
                    primaryTypographyProps={{ variant: 'h5', noWrap: true, pb: 0.5 }}
                    secondary={server.website}
                    secondaryTypographyProps={{ variant: 'subtitle2', noWrap: true }}
                  />

                  <Box
                    sx={{
                      textAlign: 'right',
                    }}
                  >
                    <Chip
                      size="small"
                      label={t(server.status)}
                      color={
                        server.status === 'active'
                          ? 'success'
                          : server.status === 'provisioning'
                            ? 'warning'
                            : 'error'
                      }
                    />
                    <Typography
                      align="right"
                      variant="body2"
                      color="text.secondary"
                      noWrap
                      sx={{
                        pt: 0.5,
                      }}
                    >
                      {t('Page Load')}: <b>{server.pageLoadTime}ms</b>
                    </Typography>
                  </Box>
                </ListItemWrapper>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Grid>
        <Divider
          orientation="vertical"
          flexItem
        />
        <Grid
          xs={12}
          md
        >
          <Divider
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          />
          <Box
            sx={{
              backgroundColor: {
                xs:
                  theme.palette.mode === 'dark'
                    ? alpha(theme.palette.neutral[800], 0.36)
                    : 'neutral.25',
                md: 'background.paper',
              },
            }}
          >
            <Box
              sx={{
                p: 2,
              }}
            >
              <Alert severity="warning">{t('Too many servers have problems starting!')}</Alert>
            </Box>
            <BarChart
              height={324}
              margin={{ left: smUp ? 54 : 22, top: 48, right: 22 }}
              series={[
                {
                  data: chartValues,
                  label: 'Completeted',
                  stack: 'total',
                  color: theme.palette.success.light,
                },
                {
                  data: chartValues2,
                  label: 'Cancelled',
                  stack: 'total',
                  color: theme.palette.secondary.light,
                },
              ]}
              xAxis={[
                {
                  scaleType: 'band',
                  data: xLabels,
                  //@ts-ignore
                  categoryGapRatio: 0.4,
                  barGapRatio: 0.3,
                },
              ]}
              sx={{
                '.MuiBarElement-root': {
                  fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
                  ry: theme.shape.borderRadius / 1.5,
                },
                '.MuiChartsAxis-left': {
                  display: { xs: 'none', sm: 'block' },
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ActiveServers;
