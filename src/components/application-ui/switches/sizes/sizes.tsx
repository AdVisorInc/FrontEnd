import {
  alpha,
  Card,
  CardContent,
  Divider,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Stack,
  Switch,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';

const Component = () => {
  const [systemStatus, setSystemStatus] = useState<boolean>(true);
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  const handleSystemStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSystemStatus(event.target.checked);
  };

  return (
    <Card>
      <FormGroup>
        <FormLabel
          sx={{
            p: 2,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? alpha(theme.palette.neutral[25], 0.02) : 'neutral.25',
          }}
          htmlFor="name-input"
        >
          <Typography
            variant="h5"
            color="text.primary"
          >
            Device settings
          </Typography>
          <Typography variant="subtitle2">
            Manage device settings from a single central place
          </Typography>
        </FormLabel>
        <Divider />
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          divider={
            <Divider
              flexItem
              orientation={smUp ? 'vertical' : 'horizontal'}
            />
          }
        >
          <CardContent sx={{ width: '100%', display: 'flex' }}>
            <FormControlLabel
              sx={{
                '& .MuiFormControlLabel-label': {
                  pl: 0.5,
                },
              }}
              control={
                <Switch
                  size="small"
                  checked={systemStatus}
                  onChange={handleSystemStatusChange}
                />
              }
              label={systemStatus ? 'System Online' : 'System Offline'}
            />
          </CardContent>
          <CardContent sx={{ width: '100%', display: 'flex' }}>
            <FormControlLabel
              sx={{
                '& .MuiFormControlLabel-label': {
                  pl: 0.5,
                },
              }}
              control={
                <Switch
                  checked={systemStatus}
                  onChange={handleSystemStatusChange}
                />
              }
              label={systemStatus ? 'System Online' : 'System Offline'}
            />
          </CardContent>
        </Stack>
      </FormGroup>
    </Card>
  );
};

export default Component;
