import {
  Box,
  Divider,
  MenuItem,
  Select,
  Stack,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';

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

  return (
    <Stack
      justifyContent="center"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Box width="100%">
        {smUp ? (
          <>
            <Tabs
              value={Number(value)}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Dashboard" />
              <Tab label="User Management" />
              <Tab label="Billing" />
              <Tab label="Reports" />
              <Tab label="Notifications" />
              <Tab label="Analytics" />
              <Tab label="Integrations" />
              <Tab label="Settings" />
              <Tab label="Support" />
            </Tabs>
            <Divider />
          </>
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
      </Box>
    </Stack>
  );
};

export default Component;
