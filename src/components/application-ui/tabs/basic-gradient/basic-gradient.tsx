import {
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
    <>
      <Stack
        spacing={0.5}
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        px={{ xs: 0, sm: 2 }}
        pb={{ xs: 2, sm: 0 }}
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
              componentType="tab"
              label="Analytics"
            />
            <BaseButtonTab
              componentType="tab"
              label="Integrations"
            />
            <BaseButtonTab
              componentType="tab"
              label="Settings"
            />
            <BaseButtonTab
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
      </Stack>
      <Card
        elevation={0}
        variant="outlined"
        sx={{
          border: 0,
          p: '1px',
          background:
            theme.palette.mode === 'dark'
              ? theme.palette.neutral[800]
              : `linear-gradient(180deg, ${theme.palette.neutral[300]} 0%, transparent 60%)`,
          overflow: 'visible',
          width: '100%',
        }}
      >
        <Box
          p={2}
          sx={{
            borderRadius: 'inherit',
            background:
              theme.palette.mode === 'dark'
                ? lighten(theme.palette.neutral[900], 0.035)
                : `linear-gradient(180deg, ${theme.palette.common.white} 0%, transparent 60%)`,
          }}
        >
          <Typography
            variant="h4"
            align="center"
            color="text.secondary"
            sx={{
              py: 5,
            }}
          >
            This is the tab content area
          </Typography>
        </Box>
      </Card>
    </>
  );
};

export default Component;
