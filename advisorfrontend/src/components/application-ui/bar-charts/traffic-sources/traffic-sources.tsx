import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Unstable_Grid2 as Grid,
  Menu,
  MenuItem,
  Select,
  Tab,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { ChangeEvent, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EmptyStateBasicSmall from 'src/components/application-ui/empty-states/basic-small/empy-state-basic-small';
import EmptyStateNoResults from 'src/components/application-ui/empty-states/no-results/no-results';
import EmptyStateTitleAction from 'src/components/application-ui/empty-states/title-action/title-action';
import { TabsPills } from 'src/components/base/styles/tabs';

const directTrafficData = [5000, 6000, 4500, 7000, 8000, 7500, 6500];
const referralTrafficData = [3000, 3500, 2000, 4000, 4500, 4000, 3000];
const organicTrafficData = [8000, 8500, 9000, 9500, 10000, 9500, 9000];
const socialMediaTrafficData = [2500, 3000, 2000, 3500, 4000, 3500, 3000];
const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

function TrafficSources() {
  const { t } = useTranslation();
  const theme = useTheme();

  const periods = [
    {
      value: 'today',
      text: t('Today'),
    },
    {
      value: 'yesterday',
      text: t('Yesterday'),
    },
    {
      value: 'last_month',
      text: t('Last month'),
    },
    {
      value: 'last_year',
      text: t('Last year'),
    },
  ];

  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>('Select period');

  const [currentTab, setCurrentTab] = useState<number>(1);
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const tabs = [
    { value: 0, label: t('Direct') },
    { value: 1, label: t('Referral') },
    { value: 2, label: t('Organic') },
    { value: 3, label: t('Social') },
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: number): void => {
    setCurrentTab(value);
  };

  const handleSelectChange = (event: ChangeEvent<{ value: unknown }>) => {
    setCurrentTab(event.target.value as number);
  };

  type StackItem = {
    titleKey: string;
    value: string;
  };
  const stackItems: StackItem[] = [
    {
      titleKey: 'Users',
      value: '2.593',
    },
    {
      titleKey: 'Sessions',
      value: '9.381',
    },
    {
      titleKey: 'Pages per session',
      value: '2.66',
    },
    {
      titleKey: 'Avg. session duration',
      value: '00:03:56',
    },
    {
      titleKey: '% new sessions',
      value: '82.05%',
    },
    {
      titleKey: 'Bounce rate',
      value: '49.75%',
    },
  ];

  const colWidth = { xs: 12, sm: 6, md: 4, lg: 4 } as const;

  return (
    <Card>
      <CardHeader
        action={
          <>
            <Button
              size="small"
              variant="outlined"
              ref={actionRef1}
              onClick={() => setOpenMenuPeriod(true)}
              endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
            >
              {period}
            </Button>
            <Menu
              disableScrollLock
              anchorEl={actionRef1.current}
              onClose={() => setOpenMenuPeriod(false)}
              open={openPeriod}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {periods.map((_period) => (
                <MenuItem
                  key={_period.value}
                  onClick={() => {
                    setPeriod(_period.text);
                    setOpenMenuPeriod(false);
                  }}
                >
                  {_period.text}
                </MenuItem>
              ))}
            </Menu>
          </>
        }
        title={t('Traffic Sources')}
      />
      <Divider />
      <CardContent>
        {smUp ? (
          <TabsPills
            onChange={handleTabsChange}
            value={currentTab}
            centered
            textColor="secondary"
            indicatorColor="secondary"
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
              />
            ))}
          </TabsPills>
        ) : (
          <Select
            value={currentTab}
            //@ts-ignore
            onChange={handleSelectChange}
            fullWidth
          >
            {tabs.map((tab) => (
              <MenuItem
                key={tab.value}
                value={tab.value}
              >
                {tab.label}
              </MenuItem>
            ))}
          </Select>
        )}
      </CardContent>
      <Divider />
      <CardContent>
        {currentTab === 0 && (
          <Container
            maxWidth="sm"
            sx={{ py: { xs: 2, sm: 3, md: 5 } }}
          >
            <EmptyStateNoResults />
          </Container>
        )}
        {currentTab === 1 && (
          <BarChart
            height={360}
            margin={{ top: 56, right: smUp ? 24 : 0, bottom: 24, left: smUp ? 54 : 0 }}
            series={[
              {
                data: directTrafficData,
                color: alpha(theme.palette.primary.main, 0.8),
                label: 'Direct',
                id: 'directId',
              },
              {
                data: referralTrafficData,
                color: alpha(theme.palette.secondary.main, 0.8),
                label: 'Referral',
                id: 'referralId',
              },
              {
                data: organicTrafficData,
                color: alpha(theme.palette.success.main, 0.8),
                label: 'Organic',
                id: 'organicId',
              },
              {
                data: socialMediaTrafficData,
                color: alpha(theme.palette.error.main, 0.8),
                label: 'Social Media',
                id: 'socialMediaId',
              },
            ]}
            xAxis={[{ data: xLabels, scaleType: 'band' }]}
            sx={{
              '.MuiBarElement-root': {
                fillOpacity: theme.palette.mode === 'dark' ? 0.76 : 1,
                rx: theme.shape.borderRadius / 1.5,
              },
              '.MuiChartsAxis-left': {
                display: { xs: 'none', sm: 'block' },
              },
            }}
          />
        )}
        {currentTab === 2 && (
          <Container
            maxWidth="sm"
            sx={{ py: { xs: 2, sm: 3, md: 5 } }}
          >
            <EmptyStateBasicSmall />
          </Container>
        )}
        {currentTab === 3 && (
          <Container
            maxWidth="sm"
            sx={{ py: { xs: 2, sm: 3, md: 5 } }}
          >
            <EmptyStateTitleAction />
          </Container>
        )}
      </CardContent>
      <Divider />

      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
        }}
      >
        <Grid
          container
          sx={(theme) => ({
            '--Grid-borderWidth': '1px',
            borderColor: 'divider',
            '& > div': {
              borderRight: 'var(--Grid-borderWidth) solid',
              borderBottom: 'var(--Grid-borderWidth) solid',
              borderColor: 'divider',
              ...(Object.keys(colWidth) as Array<keyof typeof colWidth>).reduce(
                (result, key) => ({
                  ...result,
                  [`&:nth-of-type(${12 / colWidth[key]}n)`]: {
                    [theme.breakpoints.only(key)]: {
                      borderRight: 'none',
                    },
                  },
                }),
                {}
              ),
            },
          })}
        >
          {stackItems.map((item, index) => (
            <Grid
              xs={12}
              sm={6}
              md={4}
              key={index}
            >
              <Box
                sx={{
                  p: { xs: 2, sm: 3 },
                }}
              >
                <Box>
                  <Typography
                    align="center"
                    variant="h3"
                    gutterBottom
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    align="center"
                    variant="body1"
                    color="text.secondary"
                  >
                    {t(item.titleKey)}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Card>
  );
}

export default TrafficSources;
