import {
  alpha,
  Card,
  CardContent,
  CardHeader,
  Divider,
  MenuItem,
  Select,
  Stack,
  Tab,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import PlaceholderBox from 'src/components/base/placeholder-box';
import { TabsAlternate } from 'src/components/base/styles/tabs';

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
      <Card
        sx={{
          width: '100%',
        }}
      >
        <CardHeader title="Navigation tabs" />
        <Divider />
        <CardHeader
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
            '.MuiCardHeader-content': {
              overflow: 'visible',
            },
          }}
          disableTypography
          title={
            smUp ? (
              <>
                <TabsAlternate
                  value={Number(value)}
                  onChange={handleTabChange}
                  variant="fullWidth"
                  textColor="secondary"
                  indicatorColor="secondary"
                >
                  <Tab label="Analytics" />
                  <Tab label="Integrations" />
                  <Tab label="Settings" />
                  <Tab label="Support" />
                </TabsAlternate>
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
            )
          }
        />
        <Divider />
        <CardContent>
          <PlaceholderBox height={128} />
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Component;
