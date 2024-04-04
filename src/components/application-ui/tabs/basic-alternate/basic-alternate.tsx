import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import IntegrationInstructionsTwoToneIcon from '@mui/icons-material/IntegrationInstructionsTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';
import {
  alpha,
  Box,
  Card,
  lighten,
  MenuItem,
  Select,
  Stack,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import BaseButtonTab from 'src/components/base/styles/button-tab';

interface TabInfo {
  value: string;
  title: string;
  description: string;
  icon: React.ReactElement;
}

export const tabData: TabInfo[] = [
  {
    value: '0',
    title: 'Analytics',
    description: 'Gain insights into your data',
    icon: <AnalyticsTwoToneIcon />,
  },
  {
    value: '1',
    title: 'Integrations',
    description: 'Connect with third-party tools',
    icon: <IntegrationInstructionsTwoToneIcon />,
  },
  {
    value: '2',
    title: 'Settings',
    description: 'Manage your preferences',
    icon: <SettingsTwoToneIcon />,
  },
  {
    value: '3',
    title: 'Support',
    description: 'Get help and support',
    icon: <SupportAgentTwoToneIcon />,
  },
];

const Component = () => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  const [value, setValue] = React.useState(1);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(Number(event.target.value));
  };

  const tabStyles = {
    '&::after': {
      background:
        theme.palette.mode === 'dark'
          ? lighten(theme.palette.neutral[900], 0.025)
          : theme.palette.common.white,
    },
    '&.Mui-selected': {
      color: theme.palette.mode === 'dark' ? theme.palette.neutral[25] : theme.palette.neutral[900],
      background:
        theme.palette.mode === 'dark'
          ? lighten(theme.palette.neutral[900], 0.025)
          : theme.palette.common.white,
    },
  };

  return (
    <Stack
      spacing={0.5}
      direction={{ xs: 'column', sm: 'row' }}
      alignItems="center"
    >
      <Card
        elevation={0}
        variant="outlined"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[50], 0.02) : 'neutral.50',
          borderColor: (theme) => (theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.400'),
          pt: 2,
          px: 2,
          pb: { xs: 2, md: 0 },
          overflow: 'visible',
          width: '100%',
        }}
      >
        {mdUp ? (
          <Tabs
            value={value}
            variant="fullWidth"
            onChange={handleTabChange}
            sx={{
              overflow: 'visible',

              '& .MuiTabs-indicator': {
                display: 'none',
              },

              '& .MuiTabs-scroller': {
                overflow: 'visible !important',
              },
            }}
          >
            {tabData.map((tab) => (
              <BaseButtonTab
                key={tab.value}
                sx={tabStyles}
                componentType="tab"
                label={
                  <Stack
                    textAlign="left"
                    width="100%"
                    direction="column"
                    spacing={0.5}
                    mt={1}
                  >
                    <Box>{tab.icon}</Box>
                    <Box overflow="hidden">
                      <Typography
                        variant="h5"
                        noWrap
                      >
                        {tab.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        gutterBottom
                        noWrap
                      >
                        {tab.description}
                      </Typography>
                    </Box>
                  </Stack>
                }
              />
            ))}
          </Tabs>
        ) : (
          <Select
            value={value}
            //@ts-ignore
            onChange={handleSelectChange}
            fullWidth
          >
            {tabData.map((tab) => (
              <MenuItem
                key={tab.value}
                value={tab.value}
              >
                {tab.title}
              </MenuItem>
            ))}
          </Select>
        )}
      </Card>
    </Stack>
  );
};

export default Component;
