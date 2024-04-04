import {
  alpha,
  Card,
  lighten,
  MenuItem,
  Select,
  Stack,
  Tabs,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import BaseButtonTab from 'src/components/base/styles/button-tab';

const Component = () => {
  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));

  const [value, setValue] = React.useState('0');

  const handleTabChange = (event, newValue) => {
    setValue(String(newValue));
  };

  const handleSelectChange = (event) => {
    setValue(event.target.value);
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
          pb: { xs: 2, sm: 0 },
          overflow: 'visible',
          width: '100%',
        }}
      >
        {smUp ? (
          <Tabs
            value={Number(value)}
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
            <BaseButtonTab
              sx={tabStyles}
              componentType="tab"
              label="Analytics"
            />
            <BaseButtonTab
              sx={tabStyles}
              componentType="tab"
              label="Integrations"
            />
            <BaseButtonTab
              sx={tabStyles}
              componentType="tab"
              label="Settings"
            />
            <BaseButtonTab
              sx={tabStyles}
              componentType="tab"
              label="Support"
            />
          </Tabs>
        ) : (
          <Select
            value={value}
            onChange={handleSelectChange}
            fullWidth
          >
            <MenuItem value="0">Analytics</MenuItem>
            <MenuItem value="1">Integrations</MenuItem>
            <MenuItem value="2">Settings</MenuItem>
            <MenuItem value="3">Support</MenuItem>
          </Select>
        )}
      </Card>
    </Stack>
  );
};

export default Component;
