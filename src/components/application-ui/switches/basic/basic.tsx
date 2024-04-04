import { InfoRounded } from '@mui/icons-material';
import {
  Card,
  CardContent,
  Divider,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Stack,
  Switch,
  Theme,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';

const Component = () => {
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const [systemStatus, setSystemStatus] = useState<boolean>(true);

  const handleSystemStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSystemStatus(event.target.checked);
  };

  return (
    <Card>
      <FormGroup>
        <FormLabel
          sx={{ p: 2 }}
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
              control={
                <Switch
                  color={systemStatus ? 'success' : 'error'}
                  checked={systemStatus}
                  onChange={handleSystemStatusChange}
                />
              }
              label={
                <>
                  <Typography
                    variant="h6"
                    sx={{ pl: 0.5 }}
                    color={systemStatus ? 'success.main' : 'error.main'}
                  >
                    {systemStatus ? 'System Online' : 'System Offline'}
                  </Typography>
                </>
              }
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
                  checked
                  disabled
                />
              }
              label="Adjust brightness"
            />
          </CardContent>
          <CardContent sx={{ width: '100%', display: 'flex' }}>
            <FormControlLabel
              control={
                <Switch
                  checked={systemStatus}
                  onChange={handleSystemStatusChange}
                />
              }
              label={
                <Stack
                  pl={0.5}
                  spacing={0.5}
                  direction="row"
                  alignItems="center"
                >
                  <Typography variant="h6">Soft focus</Typography>
                  <Tooltip
                    title="Apply a smooth effect to your appearance."
                    arrow
                    placement="top"
                  >
                    <InfoRounded
                      fontSize="small"
                      sx={{
                        color: 'neutral.400',
                        '&:hover': {
                          color: 'neutral.600',
                        },
                      }}
                    />
                  </Tooltip>
                </Stack>
              }
            />
          </CardContent>
        </Stack>
      </FormGroup>
    </Card>
  );
};

export default Component;
