import { Box, Rating, Stack, Typography } from '@mui/material';
import React from 'react';

const Component = () => {
  const [value, setValue] = React.useState(2);

  return (
    <Stack
      justifyContent="space-around"
      spacing={{ xs: 2, sm: 3 }}
      alignItems="center"
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Box>
        <Typography
          component="legend"
          variant="h5"
          gutterBottom
        >
          Controlled
        </Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      <Box>
        <Typography
          component="legend"
          variant="h5"
          gutterBottom
        >
          Read only
        </Typography>
        <Rating
          name="read-only"
          value={value}
          readOnly
        />
      </Box>
      <Box>
        <Typography
          component="legend"
          variant="h5"
          gutterBottom
        >
          Disabled
        </Typography>
        <Rating
          name="disabled"
          value={value}
          disabled
        />
      </Box>
      <Box>
        <Typography
          component="legend"
          variant="h5"
          gutterBottom
        >
          No rating given
        </Typography>
        <Rating
          name="no-value"
          value={null}
        />
      </Box>
    </Stack>
  );
};

export default Component;
