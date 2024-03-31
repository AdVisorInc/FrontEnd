import {
  Box,
  Chip,
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
              indicatorColor="secondary"
              textColor="secondary"
              sx={{
                px: 1.5,
                '& .MuiTab-root': {
                  flexDirection: 'row',
                  pr: 0,
                  fontSize: 13,

                  '& .MuiChip-root': {
                    ml: 1,
                    height: 20,
                    lineHeight: 22,
                    opacity: 0.72,
                    transition: theme.transitions.create(['background', 'color'], {
                      duration: theme.transitions.duration.complex,
                    }),
                    p: 0,

                    '& .MuiChip-label': {
                      px: 0.5,
                      fontWeight: 600,
                      fontSize: 11,
                    },
                  },
                  '&.Mui-selected': {
                    '& .MuiChip-root': {
                      opacity: 1,
                    },
                  },
                  '&:first-of-type': {
                    ml: 0,
                  },
                },
              }}
              value={Number(value)}
              onChange={handleTabChange}
            >
              <Tab
                label={
                  <>
                    All
                    <Chip
                      color="primary"
                      label={18}
                      size="small"
                    />
                  </>
                }
              />
              <Tab
                label={
                  <>
                    Unread
                    <Chip
                      color="warning"
                      label={12}
                      size="small"
                    />
                  </>
                }
              />
              <Tab
                label={
                  <>
                    Archived
                    <Chip
                      color="info"
                      label={34}
                      size="small"
                    />
                  </>
                }
              />
            </Tabs>
            <Divider />
          </>
        ) : (
          <Select
            value={value}
            onChange={handleSelectChange}
            fullWidth
          >
            <MenuItem value="0">All</MenuItem>
            <MenuItem value="1">Unread</MenuItem>
            <MenuItem value="2">Archived</MenuItem>
          </Select>
        )}
      </Box>
    </Stack>
  );
};

export default Component;
