import AdminPanelSettingsTwoToneIcon from '@mui/icons-material/AdminPanelSettingsTwoTone';
import HourglassTopTwoToneIcon from '@mui/icons-material/HourglassTopTwoTone';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import VpnLockTwoToneIcon from '@mui/icons-material/VpnLockTwoTone';
import {
  alpha,
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  MenuItem,
  Select,
  styled,
  Tab,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TabsAlternate } from 'src/components/base/styles/tabs';

const AvatarPending = styled(Avatar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.warning.main, 0.1),
  color: theme.palette.warning.main,
  width: theme.spacing(10),
  height: theme.spacing(10),
  margin: theme.spacing(0, 'auto', 2),
  '.MuiSvgIcon-root': {
    fontSize: theme.typography.pxToRem(38),
  },
}));

const AvatarError = styled(Avatar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.error.main, 0.1),
  color: theme.palette.error.main,
  width: theme.spacing(10),
  height: theme.spacing(10),
  margin: theme.spacing(0, 'auto', 2),
  '.MuiSvgIcon-root': {
    fontSize: theme.typography.pxToRem(38),
  },
}));

const generateRandomData = (): number[] =>
  Array.from({ length: 6 }, () => Math.floor(Math.random() * 1000));

const salesData = generateRandomData();
const expenseData = generateRandomData();
const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

function Activity() {
  const { t } = useTranslation();
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const [currentTab, setCurrentTab] = useState<string>('daily');

  const tabs = [
    { value: 'daily', label: t('Daily') },
    { value: 'weekly', label: t('Weekly') },
    { value: 'monthly', label: t('Monthly') },
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  const handleSelectChange = (event) => {
    setCurrentTab(event.target.value);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardHeader
        title={
          <>
            {t('Activity')}{' '}
            <Typography
              variant="body2"
              component="span"
              color="text.secondary"
            >
              ({t('burned calories')})
            </Typography>
          </>
        }
      />
      <Divider />
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
          p: 2,
        }}
      >
        {smUp ? (
          <TabsAlternate
            onChange={handleTabsChange}
            value={currentTab}
            variant="fullWidth"
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
          </TabsAlternate>
        ) : (
          <Select
            value={currentTab}
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
      </Box>
      <Divider />
      <Box>
        {currentTab === 'daily' && (
          <>
            <Box p={1}>
              <LineChart
                height={260}
                slotProps={{ legend: { hidden: true } }}
                leftAxis={null}
                bottomAxis={null}
                margin={{ top: 12, bottom: 12, left: 12, right: 12 }}
                series={[
                  {
                    data: expenseData,
                    label: 'Current period',
                    area: true,
                    color: theme.palette.primary.main,
                  },
                  {
                    data: salesData,
                    label: 'Previous period',
                    area: false,
                    color: theme.palette.error.main,
                  },
                ]}
                xAxis={[
                  {
                    scaleType: 'point',
                    data: monthLabels,
                  },
                ]}
                sx={{
                  '.MuiAreaElement-root': {
                    fillOpacity: 0.1,
                    fill: "url('#primaryGradient')",
                  },
                  '.MuiLineElement-root': {
                    strokeLinecap: 'round',

                    '&:nth-of-type(1)': {
                      strokeWidth: 3,
                      strokeDasharray: '4 8',
                    },
                    '&:nth-of-type(2)': {
                      strokeWidth: 2,
                      strokeOpacity: 0.8,
                    },
                  },
                  '.MuiHighlightElement-root': {
                    scale: '1.2',
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
                      stopColor={theme.palette.primary.main}
                    />
                    <stop
                      offset="100%"
                      stopColor={theme.palette.background.paper}
                    />
                  </linearGradient>
                </defs>
              </LineChart>
            </Box>
            <Divider />
            <Box
              my={2}
              sx={{
                textAlign: 'center',
              }}
            >
              <Button
                size="small"
                variant="outlined"
                sx={{
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px',
                  },
                }}
              >
                {t('View more activity charts')}
              </Button>
            </Box>
          </>
        )}
        {currentTab === 'weekly' && (
          <Box
            sx={{
              py: { xs: 2, sm: 3, md: 4 },
              textAlign: 'center',
            }}
          >
            <AvatarPending>
              <HourglassTopTwoToneIcon />
            </AvatarPending>
            <Typography variant="h4">{t('No reports, yet')}!</Typography>
            <Typography
              variant="h5"
              sx={{
                pt: 0.5,
                pb: 2,
              }}
              fontWeight={400}
              color="text.secondary"
            >
              {t('There is not enough data to generate the weekly report, yet')}!
            </Typography>
            <Button
              size="small"
              color="warning"
              variant="outlined"
              startIcon={<AdminPanelSettingsTwoToneIcon />}
              sx={{
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px',
                },
              }}
            >
              {t('Update settings')}
            </Button>
          </Box>
        )}
        {currentTab === 'monthly' && (
          <Box
            sx={{
              py: { xs: 2, sm: 3, md: 4 },
              textAlign: 'center',
            }}
          >
            <AvatarError>
              <VpnLockTwoToneIcon />
            </AvatarError>
            <Typography variant="h4">{t('Not available')}!</Typography>
            <Typography
              variant="h5"
              sx={{
                pt: 0.5,
                pb: 2,
              }}
              fontWeight={400}
              color="text.secondary"
            >
              {t('Share the share health data, in app settings')}!
            </Typography>
            <Button
              size="small"
              color="error"
              variant="outlined"
              startIcon={<VpnKeyTwoToneIcon />}
              sx={{
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px',
                },
              }}
            >
              {t('Modify privacy settings')}
            </Button>
          </Box>
        )}
      </Box>
    </Card>
  );
}

export default Activity;
